//Creado por BrashkieBot

let handler = async (m, { conn, usedPrefix, text }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    conn.reply(m.chat, 
    `⬣━━━━[ 🤪 𝗜𝗡𝗦𝗨𝗟𝗧𝗔𝗥 🤪 ]━━━━⬣\n\n@${who.split('@')[0]}\n*“Eres un ${pickRandom(global.insultar)}”*\n\n⬣━━━━━━[ ${vs} ]━━━━━⬣`, m, {mentions: [m.sender, who]});
}
    
function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())];
}
    
global.insultar = ['Abrazafarolas','Adefesio','Adoquín','Alelado','Alfeñique','Andurriasmo','Analfabeto','Apollardao','Archipámpano','Artabán','Asaltacunas','Asno','Atontao','Baboso','Ballena','Basilisco','Batracio','Bellaco','Berzotas','Bocachancla','Bocallanta','Bollera','Bolo','Boludo','Boquimuelle','Botarate','Bribón','Burricalvo'];
    
handler.help = ["insultar"];
handler.tags = ["fun"];
handler.command = /^(insult|abuse|insultar)$/i;
handler.fail = null;
handler.group = ture
export default handler;
