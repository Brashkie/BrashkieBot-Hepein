let handler = async (m, { conn }) => {
let vn = './media/audiobot/quiere hacer delicioso.mp3';
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/gay', {  
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),   
}), 'error.png', `*🫦 𝗘𝗦𝗘 𝗠𝗜𝗘𝗠𝗕𝗥𝗢 𝗤𝗨𝗜𝗘𝗥𝗘 𝗛𝗔𝗖𝗘𝗥 𝗖𝗢𝗦𝗔𝗦 𝗗𝗘𝗟𝗜𝗖𝗜𝗢𝗦𝗢 𝗖𝗢𝗡 𝗘𝗟 𝗔𝗗𝗠𝗜𝗡!! 😧*`, m)   
await await await conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, { 
type: 'audioMessage', 
ptt: true });
};
handler.help = ['delicioso']
handler.tags = ['maker']
handler.command = /^(delicioso)$/i
export default handler
