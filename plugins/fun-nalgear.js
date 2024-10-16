//Creado por BrashkieBot

let handler = async (m, {conn, text}) => {
    let nalgear = `🫦🥵 𝐋𝐄 𝐃𝐈𝐒𝐓𝐄𝐒 𝐔𝐍𝐀𝐒 𝐍𝐀𝐋𝐆𝐀𝐃𝐀𝐒🥵🫦
      
      𝙇𝙚 𝙙𝙞𝙨𝙩𝙚𝙨 𝙪𝙣𝙖 𝙣𝙖𝙡𝙜𝙖𝙙𝙖𝙨 𝙥𝙤𝙧 𝙙𝙚𝙨𝙚𝙤 𝙖 ${text} ⁩ 𝙮 𝙥𝙤𝙧 𝙨𝙚𝙧 𝙩𝙖𝙣 𝙥𝙚𝙧𝙧𝙖𝙖𝙖 𝙮 𝙪𝙮 𝙪𝙮 𝙪𝙮, 𝙦𝙪𝙚 𝙧𝙞𝙠𝙤 🫦🫦🫦
        
      ${text} 
    🫦 ¡𝐓𝐄 𝐇𝐀𝐍 𝐍𝐀𝐋𝐆𝐄𝐀𝐃𝐎! 🫦
     `.trim();
      m.reply(nalgear, null, {mentions: conn.parseMention(nalgear)});
    };
    handler.help = ["follar"];
    handler.tags = ["fun"];
    handler.command = /^(nalgear|nalgas|nalga)$/i;
    export default handler;
    
