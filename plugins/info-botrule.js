/*Aun no disponible*/

let handler = async (m, { conn, usedPrefix, command }) => {

  let fkontak = {
    "key": {
      "participants": "0@s.whatsapp.net",
      "remoteJid": "status@broadcast",
      "fromMe": false,
      "id": "Halo"
    },
    "message": {
      "contactMessage": {
        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Brashkie;Bot;;;\nFN:Brashkie\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    },
    "participant": "0@s.whatsapp.net"
  };
//pp="https://i.imgur.com/xGBCZsJ.jpg"
  let texto = `*🅁🄴🅂🄿🄴🅃🄰 🄻🄰🅂 🅁🄴🄶🄻🄰🅂 🄳🄴 🄱🅁🄰🅂🄷🄺🄸🄴🄱🄾🅃*\n
꧅ɴᴏ ʟʟᴀᴍᴀʀ ᴀʟ ʙᴏᴛ
꧅ɴᴏ ʜᴀᴄᴇʀ ꜱᴘᴀᴍ
꧅ᴄᴏɴᴛᴀᴄᴛᴀ ᴀʟ ᴄʀᴇᴀᴅᴏʀ ꜱɪ ᴇꜱ ɴᴇᴄᴇꜱᴀʀɪᴏ
꧅ᴘᴇᴅɪʀ ᴘᴇʀᴍɪꜱᴏ ᴘᴀʀᴀ ᴀÑᴀᴅɪʀ ᴀʟ ʙᴏᴛ ᴀ ᴜɴ ɢʀᴜᴘᴏ
꧅ɴᴏ ʜᴀᴄᴇʀ ᴠɪᴅᴇᴏʟʟᴀᴍᴀᴅᴀꜱ\n

> (◉ω◉) 𝗡𝗼𝘁𝗮: _*Si no cumples con las reglas del bot, seras bloqueado.*_

> (◉ω◉) 𝗔𝘃𝗶𝘀𝗼: _*Puedes apoyarnos dejando una estrellita 🌟 al repositorio oficial de BrashkieBot.*_
\n
\n
░░░░░╔╗╔╗░░░░░░░░░░░░░
░░░░░║║║║░░░░░░░░░░░░░
░░░░╔╝╚╝╚╗░░░░░░░░░░░░
░░░░║▀▄▀░╠═════╦╗░░░░░
░░░░╚╦═══╝░░░░░╠╝░░░░░

${global.md}`.trim();

  await conn.reply(m.chat, texto, m, fkontak, fakeChannel); // fkontak para el mensaje de contacto
};

handler.help = ['botreglas'];
handler.tags = ['main'];
handler.command = ['botreglas', 'reglasdelbot', 'reglasbot', 'reglas'];
handler.register = true;
export default handler;

// ... (resto del código) ...

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
