import { promises as fs } from 'fs';
import path from 'path';

export default defineEventHandler(async () => {
  const directory = path.resolve('public/img/LOGHI');
  const files = await fs.readdir(directory);

  return files.map(file => `/img/LOGHI/${file}`);
});
