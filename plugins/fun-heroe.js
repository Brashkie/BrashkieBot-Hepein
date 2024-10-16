// Función para generar un nombre de superhéroe único
/*function generarNombreSuperheroe() {
  const adjetivos = ['Poderoso', 'Veloz', 'Increíble', 'Misterioso', 'Radiante', 'Valiente', 'Astuto', 'Legendario'];
  const sustantivos = ['Titanio', 'Rayo', 'Estrella', 'Sombras', 'Fuego', 'Trueno', 'Luna', 'Dragón'];
  
  const adjetivoAleatorio = adjetivos[Math.floor(Math.random() * adjetivos.length)];
  const sustantivoAleatorio = sustantivos[Math.floor(Math.random() * sustantivos.length)];
  
  return adjetivoAleatorio + ' ' + sustantivoAleatorio;
}

let handler = async (m, { conn, usedPrefix, command }) => {
  conn.reply(m.chat, `╭════〘 HEROE 〙════⬣\n┃𖣐╭──────────────\n*┃𖣐│ “${generarNombreSuperheroe()}”*\n┃𖣐╰───────────────\n╰━━━━━━[ ${vs} ]━━━━━⬣`, m);
}

handler.help = ['heroe'];
handler.tags = ['juegos'];
handler.command = /^heroe/i;
handler.fail = null;
export default handler;*/



//Creado por BrashkieBot

// Función para generar un nombre de superhéroe único
function generarNombreSuperheroe() {
  const prefijos = ['El', 'La', 'El', 'La', 'El', 'La', 'El', 'La', 'El'];
  const adjetivos = ['Poderoso', 'Veloz', 'Increíble', 'Misterioso', 'Radiante', 'Valiente', 'Astuto', 'Legendario', 'Furioso', 'Invisible', 'Espacial', 'Estelar', 'Fantasmal', 'Solar', 'Lunar', 'Cósmico'];
  const sustantivos = ['Titanio', 'Rayo', 'Estrella', 'Sombras', 'Fuego', 'Trueno', 'Luna', 'Dragón', 'Fénix', 'Guerrero', 'Cazador', 'Espada', 'Escudo', 'Espíritu', 'Ángel', 'Demonio', 'Huracán'];
  
  const prefijoAleatorio = prefijos[Math.floor(Math.random() * prefijos.length)];
  const adjetivoAleatorio = adjetivos[Math.floor(Math.random() * adjetivos.length)];
  const sustantivoAleatorio = sustantivos[Math.floor(Math.random() * sustantivos.length)];
  
  return prefijoAleatorio + ' ' + adjetivoAleatorio + ' ' + sustantivoAleatorio;
}

let handler = async (m, { conn, usedPrefix, command }) => {
  conn.reply(m.chat, `╭════〘 HEROE 〙════⬣\n┃𖣐╭──────────────\n*┃𖣐│ “${generarNombreSuperheroe()}”*\n┃𖣐╰───────────────\n╰━━━━━━[ ${vs} ]━━━━━⬣`, m);
}

handler.help = ['heroe'];
handler.tags = ['juegos'];
handler.command = /^heroe/i;
handler.fail = null;
export default handler;
