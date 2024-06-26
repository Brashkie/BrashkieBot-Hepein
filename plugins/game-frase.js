import fs from 'fs';
import axios from 'axios';

let timeout = 30000;
let poin = 600;

let handler = async (m, { conn }) => {
    let yh = global.frase;
    let url = yh[Math.floor(Math.random() * yh.length)];

    conn.tekateki = conn.tekateki ? conn.tekateki : {};
    let id = m.chat;

    if (id in conn.tekateki) {
        conn.reply(m.chat, '¡Todavía hay FRASES sin responder en este chat!', conn.tekateki[id][0]);
        throw false;
    }

    let tekateki = JSON.parse(fs.readFileSync('./src/game/frase.json'));
    let json = tekateki[Math.floor(Math.random() * tekateki.length)];
    let _clue = json.response;
    let clue = _clue.replace(/[A-Za-z]/g, '_');
    
    let caption = `
    ⷮ ${json.question}
    *• Tiempo:* ${(timeout / 1000).toFixed(2)} segundos
    *• Bono:* +${poin} Exp
    `.trim();

    let imageBuffer = (await axios.get(url, { responseType: 'arraybuffer' })).data;
    
    conn.tekateki[id] = [ 
        await conn.sendFile(m.chat, imageBuffer, 'image.jpg', caption, m),
        json,
        poin
    ];

    setTimeout(async () => {
        if (conn.tekateki[id]) {
            await conn.reply(m.chat, `¡Se acabó el tiempo!\n*Respuesta:* ${json.response}`, conn.tekateki[id][0]);
            delete conn.tekateki[id];
        }
    }, timeout);
};

handler.help = ['edufrase'];
handler.tags = ['game'];
handler.command = /^(edufrase|adivfrase|phrase|tekateki)$/i;

export default handler;

global.frase = ["https://i.imgur.com/bUbcGPl.png"];
