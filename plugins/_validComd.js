/*import similarity from 'similarity';
import fs from 'fs';
import path from 'path';

export async function before(m, { conn, match, usedPrefix, command }) {
  if ((usedPrefix = (match[0] || '')[0])) {
    let noPrefix = m.text.replace(usedPrefix, '');
    let args = noPrefix.trim().split` `.slice(1);
    let text = args.join` `;

    // Obtener la lista de comandos de los archivos de plugins
    const help = [];
    const pluginsDir = path.join(__dirname, './plugins');
    fs.readdirSync(pluginsDir).forEach(file => {
      if (!file.endsWith('.js')) return;
      const plugin = require(path.join(pluginsDir, file));
      if (plugin.help && !plugin.disabled) {
        help.push(...plugin.help.flat(1));
      }
    });

    // Buscar el comando similar manualmente
    let mean = '';
    let maxSim = 0;
    for (const cmd of help) {
      const sim = similarity(noPrefix, cmd);
      if (sim > maxSim) {
        maxSim = sim;
        mean = cmd;
      }
    }

    let som = maxSim * 100;

    // Verificar si hay un comando similar con una similitud mínima
    if (som >= 50) { // Ajusta el umbral de similitud según sea necesario
      await conn.sendPresenceUpdate('composing', m.chat);
      let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
      let name = await conn.getName(who);
      let caption = `*🍧  Hola* @${who.split('@')[0]}
El comando no existe, pero se encontraron resultados similares 
✔️ *${usedPrefix + mean}*
❗ *Similitud:* _${parseInt(som)}%_`;
      conn.reply(m.chat, caption, m, { mentions: [who] });
    } 
  }
}*/
