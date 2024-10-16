// COMBINACIÓN DE MENSAJES
// Adaptar el simple.js
let handler = async (m, { conn, usedPrefix, command, text }) => {

// MENSAJE CARUSEL CON TODOS LOS BOTONES DISPONIBLES
// Si las ids no te funciona con usedPrefix, tendrás que definirlas, ejemplo /menu
const sections = [{
title: `Título de la sección`,
rows: [
{ header: 'Encabezado1', title: "Título1", description: 'Descripción1', id: usedPrefix + "menu" }, 
{ header: 'Encabezado2', title: "Título2", description: 'Descripción2', id: usedPrefix + "action" }, 
{ header: 'Encabezado3', title: "Título3", description: 'Descripción3', id: usedPrefix + "fun" }, 
{ header: 'Encabezado4', title: "Título4", description: 'Descripción4', id: usedPrefix + "currency" }, 
]},]  
const messages = [[ // CARRUSEL 1
'> Descripción del Bot', 
'𒅒𝗕𝗿𝗮𝘀𝗵𝗸𝗶𝗲 𝗡𝗮𝗿𝗶𝘂𝗿𒅒',
'https://l.top4top.io/p_32104mmwh1.jpg',
[['ᴠᴇʀ ᴍᴇɴᴜ', usedPrefix + 'menu'], ['ᴍᴇɴᴜ ᴄᴏᴍᴘʟᴇᴛᴏ', usedPrefix + 'menuall'] /* etc... */],
[['𒅒𝗕𝗿𝗮𝘀𝗵𝗸𝗶𝗲 𝗡𝗮𝗿𝗶𝘂𝗿 𝗭𝗲𝗶𝘁𝘀𝗶 𝗨𝘃𝗲𝗿𝘀𝗶𒅒'], [`
░░░░░╔╗╔╗░░░░░░░░░░░░░
░░░░░║║║║░░░░░░░░░░░░░
░░░░╔╝╚╝╚╗░░░░░░░░░░░░
░░░░║▀▄▀░╠═════╦╗░░░░░
░░░░╚╦═══╝░░░░░╠╝░░░░░`] /* etc... */],
[['Canal Oficial', canal2], ['Discord', 'https://discord.gg/mw95cFWz'] /* etc... */],
[['Botón Lista 1', sections], ['Botón Lista 2', sections] /* etc... */]
], [ // CARRUSEL 2
'Hacer a alguien o reaccionar',
'Footer de Carrusel 2',
'https://a.top4top.io/p_3210lz2u62.jpg',
[['Action', usedPrefix + "action"], ['Reaction', usedPrefix + "reaction"]],
[['𒅒𝗕𝗿𝗮𝘀𝗵𝗸𝗶𝗲 𝗡𝗮𝗿𝗶𝘂𝗿 𝗭𝗲𝗶𝘁𝘀𝗶 𝗨𝘃𝗲𝗿𝘀𝗶𒅒'], ['Mega BrashkieBot']],
[['YouTube', 'https://www.youtube.com/@moisesyaurivilcacenteno3683'], ['Instalar', 'https://github.com/Brashkie/BrashkieBot-Hepein']],
[['Botón Lista 1', sections], ['Botón Lista 2', sections]]
], [ // CARRUSEL 3
'Diversion',
'Footer de Carrusel 3',
'https://d.top4top.io/p_3210y0n5b1.jpg',
[['Entrenimiento', usedPrefix + "fun"], ['Casino', usedPrefix + "casino 5"]],
[['𒅒𝗕𝗿𝗮𝘀𝗵𝗸𝗶𝗲 𝗡𝗮𝗿𝗶𝘂𝗿 𝗭𝗲𝗶𝘁𝘀𝗶 𝗨𝘃𝗲𝗿𝘀𝗶𒅒'], [`
░░░░░░░░░░░░░╔╗░╔╗░░░░
░░╔══╗░░░░░░░║╚═╝║░░░░
░░║╔═╝░░░░░░░║▐░▐║░░░░
░░║║░░░░░░░░░║░░═╩═█╗░
░░║╚═════════╣░╚═══╩╣░`]],
[['Github', 'https://github.com/Brashkie'], ['HamilyBot', 'https://github.com/Brashkie/HamilyBot']],
[['Botón Lista 1', sections], ['Botón Lista 2', sections]]
], [ // CARRUSEL 4
'Ver imagenes del bot',
'Footer de Carrusel 4',
'https://i.top4top.io/p_3210xtrhf1.jpg',
[['Brashkie', usedPrefix + "brashkie"], ['Naruto', usedPrefix + "naruto"]],
[['𒅒𝗕𝗿𝗮𝘀𝗵𝗸𝗶𝗲 𝗡𝗮𝗿𝗶𝘂𝗿 𝗭𝗲𝗶𝘁𝘀𝗶 𝗨𝘃𝗲𝗿𝘀𝗶𒅒'], [`
░░░░░░░░░░░░░░░░░░░╔╗░
░║║║░░▄██║║║║░░░▄█░║║░
░╚╬╝░██▄█╬╬╬╬╬╬███░║║░
░░║░░░▀██║║║║░░░▀█░╠╝░
░░║░░░░░░░░░░░░░░░░║░░`]],
[['Donar', 'https://paypal.me/BrashkieBot'], ['Grupo', 'https://chat.whatsapp.com/CnBH1Cdi1pG9jWjmAeUVGW']],
[['Botón Lista 1', sections], ['Botón Lista 2', sections]]
]] /* etc... */
await conn.sendCarousel(m.chat, 'Brashkie Bot', 'Canal Oficial', '𒅒𝗕𝗿𝗮𝘀𝗵𝗸𝗶𝗲 𝗡𝗮𝗿𝗶𝘂𝗿 𝗭𝗲𝗶𝘁𝘀𝗶 𝗨𝘃𝗲𝗿𝘀𝗶𒅒', messages, m)            

}
handler.command = /^(carousel)$/i
export default handler
