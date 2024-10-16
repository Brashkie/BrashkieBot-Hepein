import fs from 'fs';
import { sticker } from '../lib/sticker.js';
import uploadFile from '../lib/uploadFile.js';
import uploadImage from '../lib/uploadImage.js';
import { webp2png } from '../lib/webp2mp4.js';

let handler = async (m, { conn, args, usedPrefix, command }) => {
    let stiker = false;
    let user = db.data.users[m.sender];
    let time = user.lastmining + 10000; // tiempo de espera en min

    if (new Date() - user.lastmining < 10000) return await conn.reply(m.chat, `*ESPERA UNOS MINUTOS PARA USAR OTRO COMANDO*`, m);

    try {
        let q = m.quoted ? m.quoted : m;
        let mime = (q.msg || q).mimetype || q.mediaType || '';

        if (/webp|image|video/g.test(mime)) {
            if (/video/g.test(mime)) {
                if ((q.msg || q).seconds > 11) return m.reply('El video no debe durar más de 11 segundos');
            }

            let img = await q.download?.();
            if (!img) throw `No se pudo descargar la imagen`;

            try {
                stiker = await sticker(img, false, global.packname, global.author);
            } catch (e) {
                console.error(e);
            } finally {
                if (!stiker) {
                    if (/webp/g.test(mime)) out = await webp2png(img);
                    else if (/image/g.test(mime)) out = await uploadImage(img);
                    else if (/video/g.test(mime)) out = await uploadFile(img);

                    if (typeof out !== 'string') out = await uploadImage(img);
                    stiker = await sticker(false, out, global.packname, global.author);
                }
            }
        } else if (args[0]) {
            if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author);
            else return m.reply('URL inválido');
        }
    } catch (e) {
        console.error(e);
        if (!stiker) stiker = e;
    } finally {
        if (stiker) {
            await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `𒅒 𝗠𝗲𝗴𝗮 𝗕𝗿𝗮𝘀𝗵𝗸𝗶𝗲𝗕𝗼𝘁 - ¡Descarga ahora!`, mediaType: 2, sourceUrl: accountsgb, thumbnail: imagen1}}}, { quoted: m });
        } else {
            throw 'No se pudo crear el sticker';
        }
    }

    user.lastmining = new Date() * 1;
}

handler.help = ['sticker'];
handler.tags = ['sticker'];
handler.command = ['s', 'sticker', 'stiker'];

export default handler;

function isUrl(text) {
    return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'));
}
/* */
