const fs = require('fs');
const path = require('path');
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);
const filename = path.join(publicDir, 'friendship-music.wav');
const framerate = 44100;
const amplitude = 12000;
const notes = [261.63, 293.66, 329.63, 349.23, 392.0, 440.0, 493.88, 523.25];
const melody = [0, 2, 4, 5, 4, 2, 0, 0, 4, 5, 7, 5, 4, 2, 0, 0];
const buffer = Buffer.alloc(44 + framerate * 0.4 * melody.length * 2);
const writeString = (str, offset) => buffer.write(str, offset, 'ascii');
const writeInt32LE = (value, offset) => buffer.writeInt32LE(value, offset);
const writeInt16LE = (value, offset) => buffer.writeInt16LE(value, offset);
writeString('RIFF', 0);
writeInt32LE(buffer.length - 8, 4);
writeString('WAVE', 8);
writeString('fmt ', 12);
writeInt32LE(16, 16);
writeInt16LE(1, 20);
writeInt16LE(1, 22);
writeInt32LE(framerate, 24);
writeInt32LE(framerate * 2, 28);
writeInt16LE(2, 32);
writeInt16LE(16, 34);
writeString('data', 36);
writeInt32LE(buffer.length - 44, 40);
let offset = 44;
for (const step of melody) {
  const freq = notes[step];
  const dur = 0.4;
  const samples = Math.floor(framerate * dur);
  for (let i = 0; i < samples; i++) {
    const t = i / framerate;
    const env = 1 - (t / dur) * 0.3;
    const sample = Math.round(amplitude * Math.sin(2 * Math.PI * freq * t) * env);
    buffer.writeInt16LE(sample, offset);
    offset += 2;
  }
}
fs.writeFileSync(filename, buffer);
console.log('created', filename);
