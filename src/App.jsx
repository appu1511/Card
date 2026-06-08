import React, { useState, useEffect, useRef } from 'react';
import LandingPage from './components/LandingPage';
import Timeline from './components/Timeline';
import Achievements from './components/Achievements';
import ThingsIgnored from './components/ThingsIgnored';
import MiniGame from './components/MiniGame';
import BiryaniCourt from './components/BiryaniCourt';
import BudhaProfile from './components/BudhaProfile';
import TripIncident from './components/TripIncident';
import ChatarPatarGenerator from './components/ChatarPatarGenerator';
import MemoryWall from './components/MemoryWall';
import FinalMessage from './components/FinalMessage';
import FloatingPetals from './components/FloatingPetals';
import LoadingScreen from './components/LoadingScreen';
import ControlPanel from './components/ControlPanel';
import SunflowerCollector from './components/SunflowerCollector';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(
    localStorage.getItem('soundEnabled') === 'true'
  );
  const [musicEnabled, setMusicEnabled] = useState(
    localStorage.getItem('musicEnabled') === 'true'
  );
  const [sunflowerCount, setSunflowerCount] = useState(
    parseInt(localStorage.getItem('sunflowerCount') || '0')
  );
  const [foundSunflowers, setFoundSunflowers] = useState(
    JSON.parse(localStorage.getItem('foundSunflowers') || '[]')
  );
  const audioContextRef = useRef(null);
  const oscillatorRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem('soundEnabled', soundEnabled);
  }, [soundEnabled]);

  useEffect(() => {
    localStorage.setItem('musicEnabled', musicEnabled);
  }, [musicEnabled]);

  useEffect(() => {
    localStorage.setItem('sunflowerCount', sunflowerCount);
  }, [sunflowerCount]);

  useEffect(() => {
    localStorage.setItem('foundSunflowers', JSON.stringify(foundSunflowers));
  }, [foundSunflowers]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const whistleMelody = [
      784, 880, 988, 1047, 988, 880, 784, 698,
      784, 880, 1047, 1175, 1047, 988, 880, 784,
      698, 784, 880, 988, 1047, 988, 880, 784,
    ];

    if (musicEnabled) {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const filter = audioContext.createBiquadFilter();
      const gain = audioContext.createGain();

      oscillator.type = 'sine';
      filter.type = 'bandpass';
      filter.frequency.value = 950;
      filter.Q.value = 12;
      gain.gain.value = 0.08;

      oscillator.connect(filter);
      filter.connect(gain);
      gain.connect(audioContext.destination);
      oscillator.start();

      let noteIndex = 0;
      oscillator.frequency.setValueAtTime(whistleMelody[noteIndex], audioContext.currentTime);
      intervalRef.current = setInterval(() => {
        noteIndex = (noteIndex + 1) % whistleMelody.length;
        oscillator.frequency.linearRampToValueAtTime(
          whistleMelody[noteIndex],
          audioContext.currentTime + 0.15
        );
      }, 700);

      audioContextRef.current = audioContext;
      oscillatorRef.current = oscillator;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      oscillatorRef.current?.stop();
      audioContextRef.current?.close();
      audioContextRef.current = null;
      oscillatorRef.current = null;
    };
  }, [musicEnabled]);

  const addSunflower = (id) => {
    if (!foundSunflowers.includes(id)) {
      setFoundSunflowers([...foundSunflowers, id]);
      setSunflowerCount((count) => count + 1);
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-cream min-h-screen overflow-x-hidden">
      <FloatingPetals />
      <ControlPanel 
        soundEnabled={soundEnabled} 
        setSoundEnabled={setSoundEnabled}
        musicEnabled={musicEnabled}
        setMusicEnabled={setMusicEnabled}
        sunflowerCount={sunflowerCount}
      />
      
      <LandingPage addSunflower={addSunflower} />
      <Timeline addSunflower={addSunflower} />
      <Achievements addSunflower={addSunflower} />
      <ThingsIgnored addSunflower={addSunflower} />
      <MiniGame addSunflower={addSunflower} />
      <BiryaniCourt addSunflower={addSunflower} />
      <BudhaProfile addSunflower={addSunflower} />
      <TripIncident addSunflower={addSunflower} />
      <ChatarPatarGenerator addSunflower={addSunflower} />
      <MemoryWall addSunflower={addSunflower} />
      
      {sunflowerCount >= 13 && (
        <FinalMessage sunflowerCount={sunflowerCount} totalSunflowers={13} />
      )}
      
      <SunflowerCollector foundSunflowers={foundSunflowers} />
    </div>
  );
}
