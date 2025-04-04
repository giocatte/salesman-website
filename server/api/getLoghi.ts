import { promises as fs } from 'fs';
import path from 'path';

export default defineEventHandler(async () => {
  try {
    // Costruisce il percorso assoluto alla cartella dei loghi
    const directory = path.join(process.cwd(), 'public/img/LOGHI');

    // Legge i file nella cartella
    const files = await fs.readdir(directory);

    // Restituisce i percorsi accessibili dal client
    return files.map(file => `/img/LOGHI/${file}`);
  } catch (err) {
    // Logga e ritorna errore in modo che sia visibile nel browser / Netlify logs
    console.error('Errore durante la lettura dei loghi:', err);
    return [];
  }
});
