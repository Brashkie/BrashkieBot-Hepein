/*import fetch from 'node-fetch';
import cheerio from 'cheerio';

const handler = async (m, { conn, text }) => {
  try {
    const response = await fetch('https://somoskudasai.com');
    const html = await response.text();
    const $ = cheerio.load(html);

    const noticias = [];
    $('.post-entry').each((index, element) => {
      const titulo = $(element).find('.entry-title a').text();
      const resumen = $(element).find('.entry-summary').text().trim();
      const enlace = $(element).find('.entry-title a').attr('href');

      noticias.push(`
        **${titulo}**
        ${resumen}
        ${enlace}
      `);
    });

    if (noticias.length > 0) {
      conn.reply(m.chat, noticias.join('\n\n'), m);
    } else {
      conn.reply(m.chat, 'No se encontraron noticias en este momento.', m);
    }
  } catch (error) {
    console.error('Error al obtener noticias de SomosKudasai:', error);
    conn.reply(m.chat, 'Ocurrió un error al obtener noticias de SomosKudasai. Por favor, inténtalo de nuevo.', m);
  }
};

handler.help = handler.command = ['somoskudasai'];
handler.tags = ['anime'];
export default handler;*/
//




//Ultima Veersion
/*import fetch from 'node-fetch';
import cheerio from 'cheerio';
import fs from 'fs'
import path from 'path'

const {
  readdirSync,
  readFileSync,
  writeFileSync,
} = fs;

let _dir = path.join(__dirname, '../db/global');

const set = (from, _dir, value) =>
  writeFileSync(path.join(_dir, from + '.json'), JSON.stringify(value));

const get = (from, _dir) => {
  if (readdirSync(_dir).includes(from + '.json'))
    return JSON.parse(readFileSync(path.join(_dir, from + '.json')));
  return {};
};

const handler = async (m, { conn, usedPrefix, command }) => {
  let setting = get(m.sender, _dir);
  try {
    if (command === 'somoskudasai' && !setting.enabled) {
      setting.enabled = true;
      set(m.sender, _dir, setting);
      conn.reply(m.chat, '✅ ¡Las últimas noticias de Somos Kudasai se enviarán automáticamente!', m);
      return;
    }

    if (command === 'somoskudasai' && setting.enabled) {
      setting.enabled = false;
      set(m.sender, _dir, setting);
      conn.reply(m.chat, '❌ ¡Las últimas noticias de Somos Kudasai se desactivaron!', m);
      return;
    }

    if (setting.enabled) {
      const response = await fetch('https://somoskudasai.com');
      const html = await response.text();
      const $ = cheerio.load(html);

      const noticias = [];
      $('.post-entry').each((index, element) => {
        const titulo = $(element).find('.entry-title a').text();
        const resumen = $(element).find('.entry-summary').text().trim();
        const enlace = $(element).find('.entry-title a').attr('href');

        noticias.push(`
          **${titulo}**
          ${resumen}
          ${enlace}
        `);
      });

      if (noticias.length > 0) {
        conn.reply(m.chat, noticias.join('\n\n'), m);
      }
    }
  } catch (error) {
    console.error('Error al obtener noticias de Somos Kudasai:', error);
    conn.reply(m.chat, 'Ocurrió un error al obtener noticias de Somos Kudasai. Por favor, inténtalo de nuevo.', m);
  }
};

handler.help = handler.command = ['somoskudasai'];
handler.tags = ['anime'];
export default handler;*/
