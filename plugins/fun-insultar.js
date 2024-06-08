let handler  = async (m, { conn, usedPrefix,text }) => {
conn.reply(m.chat,`⬣━━━━[ 🤪 𝗜𝗡𝗦𝗨𝗟𝗧𝗔𝗥 🤪 ]━━━━⬣\n\n`,conn.parseMention(text),`\n*“Eres un ${pickRandom(global.insultar)}”*\n\n⬣━━━━━━[ ${vs} ]━━━━━⬣`, m)}

    
function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
}
    
global.insultar = ['Abrazafarolas','Adefesio','Adoquín','Alelado','Alfeñique','Andurriasmo','Analfabeto','Apollardao','Archipámpano','Artabán','Asaltacunas','Asno','Atontao'] 


handler.help = ["insultar"];
handler.tags = ["fun"];
handler.command = /^(insult|abuse|insultar)$/i;
handler.fail = null
export default handler;
