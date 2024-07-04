/*import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
    const query = text.trim();

    async function getImagesFromPinterest(query) {
        let response = await fetch(`https://aemt.me/pinterest?query=${encodeURIComponent(query)}`);
        let data = await response.json();
        return data.result;
    }

    async function getImagesFromGoogle(query) {
        let response = await fetch(`https://aemt.me/googleimage?query=${encodeURIComponent(query)}`);
        let data = await response.json();
        return data.result;
    }

    async function sendPinterestCarousel(conn, chat, query, usedPrefix) {
        let images = await getImagesFromPinterest(query);
        const messages = images.map((image) => [null, null, image, [['Buscar con Google 🌐', usedPrefix + `image2 ${query}`]], null, [['🔗 Enlace de imagen', image]], []]);
        await conn.sendCarousel(chat, '💗 *Resultados de Pinterest*', 'Imágenes', `✨ Imágenes de Pinterest para "${query}"`, messages);
    }

    async function sendGoogleCarousel(conn, chat, query, usedPrefix) {
        let images = await getImagesFromGoogle(query);
        const messages = images.map((image) => [null, null, image, [['Buscar con Pinterest ✨', usedPrefix + `pinterest ${query}`]], null, [['🔗 Enlace de imagen', image]], []]);
        await conn.sendCarousel(chat, '🤩 *Resultados de Google*', 'Imágenes', `✅ Imágenes de Google para "${query}"`, messages);
    }

    if (!query) {
        conn.reply(m.chat, 'Por favor, escribe lo que deseas buscar en Pinterest o Google.', m);
        return;
    }

    if (command === 'pinterest') {
        await sendPinterestCarousel(conn, m.chat, query, usedPrefix);
    } else if (command === 'image2') {
        await sendGoogleCarousel(conn, m.chat, query, usedPrefix);
    }
};

handler.command = /^(pinterest|image2)$/i;

export default handler;*/

import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()} 𝙐𝙎𝙀 𝘿𝙀 𝙇𝘼 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 𝙈𝘼𝙉𝙀𝙍𝘼\n*${usedPrefix + command} Perro*\n\n𝙐𝙎𝙀 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 𝙇𝙄𝙆𝙀 𝙏𝙃𝙄𝙎\n*${usedPrefix + command} Dog*` 
const json = await pinterest(text)
await conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `
╰⊱💚⊱ *𝙀́𝙓𝙄𝙏𝙊 | 𝙎𝙐𝘾𝘾𝙀𝙎𝙎* ⊱💚⊱╮\n💞 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 | 𝙍𝙚𝙨𝙪𝙡𝙩: ${text}`.trim(), m)
/*conn.sendHydrated(m.chat, `💞 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 | 𝙍𝙚𝙨𝙪𝙡𝙩: ${text}`, `𝙋𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩 | ${wm}`, null, md, link, null, null, [
['🔄 𝙎𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚 | 𝙉𝙚𝙭𝙩', `/pinterest ${text}`],
['🔍 𝙂𝙤𝙤𝙜𝙡𝙚 ', `#image ${text}`],
['🐈 𝙈𝙚𝙣𝙪', `.menu`],  
], m)*/
}
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pinterest|dlpinterest|pinterestdl)$/i
handler.exp = 500
handler.money = 50
export default handler
