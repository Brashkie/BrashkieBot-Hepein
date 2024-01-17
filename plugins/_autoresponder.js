import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen1, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: 'нєρєιηвσт', body: '𝗕𝗿𝗮𝘀𝗵𝗸𝗶𝗲 𝗗𝗶𝗼s', sourceUrl: `https://github.com/Brashkie/BrashkieBot-Hepein`, thumbnail: imagen2}}})}
    
return !0 }
export default handler
