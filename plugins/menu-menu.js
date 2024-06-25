import fs from 'fs'  
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
//let pp = gataVidMenu.getRandom()
let pareja = global.db.data.users[m.sender].pasangan 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
//let fsizedoc = '1'.repeat(10)
//let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(gataMenu.getRandom())).buffer(), sourceUrl: redesMenu.getRandom() }}}
const numberToEmoji = { "0": "0️⃣", "1": "1️⃣", "2": "2️⃣", "3": "3️⃣", "4": "4️⃣", "5": "5️⃣", "6": "6️⃣", "7": "7️⃣", "8": "8️⃣", "9": "9️⃣", }
let lvl = level
let emoji = Array.from(lvl.toString()).map((digit) => numberToEmoji[digit] || "❓").join("")

const lugarFecha = moment().tz('America/Lima')
const formatoFecha = {
weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
}
lugarFecha.locale('es', formatoFecha)
const horarioFecha = lugarFecha.format('dddd, DD [de] MMMM [del] YYYY || HH:mm A').replace(/^\w/, (c) => c.toUpperCase())

let menu = `╭═══〘𖣐 _Hepein Bot_ 𖣐〙═══⊷❍
┃☭╭──────────────
┃☭│ 〘 𖣐 _ᴏᴡɴᴇʀs ᴏғᴄ_ 𖣐 〙
┃☭│ 
┃☭│ _Brashkie Dios _
┃☭│ _ɪᴢɪ_ 𝅙
┃☭│ シWɪʟsᴏɴシ︎
┃☭│
┃☭│    ║▌│█║▌│█║▌│█│║▌║
┃☭│    ║▌│█║▌│█║▌│█│║▌║
┃☭│Hepein ʙᴏᴛ y Katashi Bot
┃☭│ 
┃☭╰───────────────
╰═════════════════⊷


 ══《☬ ℝ𝔼𝔾𝕃𝔸 ☬》══
> Regla del Bot
  ⮑${usedPrefix}botrule


 ══《☬ 𝕀ℕ𝔽𝕆 𝔹ℝ𝔸𝕊ℍ𝕂𝕀𝔼𝔹𝕆𝕋 ☬》═══
> Informacion del BrashkieBot
‖ _Registrados »_ ${rtotalreg}/${totalreg}
‖ _${lenguajeGB['smsUptime']()}_ ➣ _${uptime}_ 
‖ _${lenguajeGB['smsVersion']()}_ ➢ _${vs}_
‖ _${lenguajeGB['smsMode']()} ➣_ _${global.opts['self'] ? `${lenguajeGB['smsModePrivate']().charAt(0).toUpperCase() + lenguajeGB['smsModePrivate']().slice(1).toLowerCase()}` : `${lenguajeGB['smsModePublic']().charAt(0).toUpperCase() + lenguajeGB['smsModePublic']().slice(1).toLowerCase()}`}_
‖ _${lenguajeGB['smsBanChats']()}_ ➣ _${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}_ 


 ═══《☬ 𝕀ℕ𝔽𝕆 𝕌𝕊𝔼ℝ ☬》═══
> Informacion del usuario
‖ _Tipo de registro »_ ${user.registered === true ? `_${user.registroC === true ? 'Registro Completo 🗂️' : 'Registro Rápido 📑'}_` : '❌ _Sin registro_'}
‖ _Estado »_ ${typeof user.miestado !== 'string' ? '❌ _' + usedPrefix + 'miestado_' : '_Me siento ' + user.miestado + '_'}
‖ _Registrado »_ ${user.registered === true ? '✅' : '❌ _' + usedPrefix + 'verificar_'}
‖ _${lenguajeGB['smsBotonM7']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM7']().slice(1).toLowerCase()} »_ ${user.premiumTime > 0 ? '✅' : '❌ _' + usedPrefix + 'pase premium_'}
‖ _${lenguajeGB['smsBotonM5']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM5']().slice(1).toLowerCase()} »_ ${role}
‖ _${lenguajeGB['smsBotonM6']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM6']().slice(1).toLowerCase()} »_ ${emoji} || ${user.exp - min}/${xp}
‖ _${lenguajeGB['smsPareja']()} ${pareja ? `\n*»_ ${name} 💕 ${conn.getName(pareja)}` : `*🛐 ${lenguajeGB['smsResultPareja']()}*_`}
‖ _Pasatiempo(s) 🍁 ${user.pasatiempo === 0 ? '*Sin Registro*_' : user.pasatiempo + '_'}


 ══《☬ RECURSOS DE USER ☬》═══
> Recursos
 ↳Experiencia ➟ ${exp} ×͜×
 ↳Diamantes ➟ ${limit} 💎
 ↳BrasCoins ➟ ${money} ⫹⫺
 ↳Tokens ➟ ${joincount} ✧
╚═════════════════.✰.══════╝

${readMore}

╔══《☬ INFO - BRASHKIE ☬》══
║ _${usedPrefix}cuentabrashkiebot | cuentasbb_
║ _${usedPrefix}gruposbb | grupos | groupbb_
║ _${usedPrefix}donar | donate_
║ _${usedPrefix}listagrupos | grouplist_
║ _${usedPrefix}estado | heybras | status_
║ _${usedPrefix}infobras | infobot_
║ _${usedPrefix}instalarbot | installbot_
║ _${usedPrefix}creador | owner_      
║ _${usedPrefix}velocidad | ping_      
║ _términos y condiciones_
║ _Bot_
╚═════════════════════════■■■■


 ══《☬ _SUB BOT HEPEIN_ ☬》══
> Ser subbot
 ⮑${usedPrefix}serbot | jadibot
 ⮑${usedPrefix}bots | listjadibots
 ⮑${usedPrefix}detener | stop
◈════════════════◈════════════════◈


 ══《☬ _REPORTES_ ☬》══
> Reportar al creador sobre problema del comando
 ⮑${usedPrefix}reporte *texto*
   Haga un reporte
   en caso de una falla
   en algun comando
◈════════════◈════════════◈


 ══《☬ _User Premium_ ☬》══
> Comandos de premium
 ⮑${usedPrefix}listapremium | listprem
 ⮑${usedPrefix}pase premium
 ⮑${usedPrefix}pass premium
◈════════════════◈════════════════◈


 ══《☬ _ENTRETENIMIENTO_ ☬》═══
> Comandos para divertir
 ⮑${usedPrefix}acertijo
 ⮑${usedPrefix}palabra | ordenar
 ⮑${usedPrefix}pelicula | adv
 ⮑${usedPrefix}mates | matemáticas | math
 ⮑${usedPrefix}ppt *piedra : papel : tijera*
 ⮑${usedPrefix}lanzar *cara* | *cruz*
 ⮑${usedPrefix}tictactoe | ttt *sala*
 ⮑${usedPrefix}deltictactoe | delttt
 ⮑${usedPrefix}topgays
 ⮑${usedPrefix}topotakus
 ⮑${usedPrefix}topcallados
 ⮑${usedPrefix}tophacker
 ⮑${usedPrefix}topinfiel
 ⮑${usedPrefix}toppajer@s
 ⮑${usedPrefix}topput@s 
 ⮑${usedPrefix}topintegrantes | topintegrante
 ⮑${usedPrefix}toplagrasa | topgrasa_
 ⮑${usedPrefix}toppanafrescos | toppanafresco
 ⮑${usedPrefix}topshiposters | topshipost
 ⮑${usedPrefix}toplindos | toplind@s 
 ⮑${usedPrefix}topfamosos | topfamos@s
 ⮑${usedPrefix}topparejas | top5parejas 
 ⮑${usedPrefix}gay | gay *@tag* 
 ⮑${usedPrefix}gay2 *nombre : @tag*
 ⮑${usedPrefix}lesbiana *nombre : @tag*
 ⮑${usedPrefix}manca *nombre : @tag*
 ⮑${usedPrefix}manco *nombre : @tag*
 ⮑${usedPrefix}pajero *nombre : @tag*
 ⮑${usedPrefix}pajera *nombre : @tag*
 ⮑${usedPrefix}puto *nombre : @tag*
 ⮑${usedPrefix}puta *nombre : @tag*
 ⮑${usedPrefix}rata *nombre : @tag*
 ⮑${usedPrefix}love *nombre : @tag*
 ⮑${usedPrefix}ship | shipear *nombre1 nombre2*
 ⮑${usedPrefix}doxear *nombre : @tag*
 ⮑${usedPrefix}doxxeame
 ⮑${usedPrefix}apostar | slot *cantidad*
 ⮑${usedPrefix}pregunta *texto*
 ⮑${usedPrefix}formarpareja
 ⮑${usedPrefix}dado
 ⮑${usedPrefix}verdad
 ⮑${usedPrefix}reto
 ⮑${usedPrefix}juegos
 ⮑${usedPrefix}edufrase
 ⮑${usedPrefix}animes
◈════════════════════◈════════════════════◈

 ══《☬ *IA HEPEIN* ☬》══
> puedes buscar lo que deseas usando
 ⮑${usedPrefix}simi | ia *texto*
 ⮑${usedPrefix}alexa | siri | cortana *texto*
 ⮑${usedPrefix}simsimi | bixby *texto*
◈════════════════◈════════════════◈

 ══《☬ AJUSTES EN CHATS/GRUPOS ☬》═══
> Puedes mejorar tu grupo con Hepein bot
 ⮑${usedPrefix}on *:* off *bienvenida | welcome*
 ⮑${usedPrefix}on *:* off *avisos | detect*
 ⮑${usedPrefix}on *:* off *autonivel | autolevelup*
 ⮑${usedPrefix}on *:* off *restringir | restrict*
 ⮑${usedPrefix}on *:* off *antillamar | anticall*
 ⮑${usedPrefix}on *:* off *publico | public*
 ⮑${usedPrefix}on *:* off *autovisto | autoread*
 ⮑${usedPrefix}on *:* off *temporal*
 ⮑${usedPrefix}on *:* off *stickers*
 ⮑${usedPrefix}on *:* off *autosticker*_
 ⮑${usedPrefix}on *:* off *reacciones | reaction*
 ⮑${usedPrefix}on *:* off *audios*
 ⮑${usedPrefix}on *:* off *modocaliente | modohorny*
 ⮑${usedPrefix}on *:* off *antitoxicos | antitoxic*
 ⮑${usedPrefix}on *:* off *antiver | antiviewonce* 
 ⮑${usedPrefix}on *:* off *antieliminar | antidelete*
 ⮑${usedPrefix}on *:* off *antinternacional | antifake*
 ⮑${usedPrefix}on *:* off *antienlace | antilink*
 ⮑${usedPrefix}on *:* off *antienlace2 | antilink2*
 ⮑${usedPrefix}on *:* off *antitiktok | antitk*
 ⮑${usedPrefix}on *:* off *antiyoutube | antiyt*
 ⮑${usedPrefix}on *:* off *antitelegram | antitel*
 ⮑${usedPrefix}on *:* off *antifacebook | antifb*
 ⮑${usedPrefix}on *:* off *antinstagram | antig*
 ⮑${usedPrefix}on *:* off *antitwitter | antitw*
 ⮑${usedPrefix}on *:* off *soloprivados | pconly*
 ⮑${usedPrefix}on *:* off *sologrupos | gconly*
◈════════════════════◈════════════════════◈


╭════《☬ _DESCARGAS_ ☬》════⊷❍
│   │
┃☭│ _${usedPrefix}imagen | image *texto*_
┃☭│ _${usedPrefix}pinterest | dlpinterest *texto*_
┃☭│ _${usedPrefix}wallpaper|wp *texto*_
┃☭│ _${usedPrefix}play | play2 *texto o link*_
┃☭│ _${usedPrefix}play.1 *texto o link*_
┃☭│ _${usedPrefix}play.2 *texto o link*_ 
┃☭│ _${usedPrefix}ytmp3 | yta *link*_ 
┃☭│ _${usedPrefix}ytmp4 | ytv *link*_
┃☭│ _${usedPrefix}pdocaudio | ytadoc *link*_
┃☭│ _${usedPrefix}pdocvieo | ytvdoc *link*_
┃☭│ _${usedPrefix}tw |twdl | twitter *link*_
┃☭│ _${usedPrefix}facebook | fb *link*_
┃☭│ _${usedPrefix}instagram *link video o imagen*_
┃☭│ _${usedPrefix}verig | igstalk *usuario(a)*_
┃☭│ _${usedPrefix}ighistoria | igstory *usuario(a)*_
┃☭│ _${usedPrefix}tiktok *link*_
┃☭│ _${usedPrefix}tiktokimagen | ttimagen *link*_
┃☭│ _${usedPrefix}tiktokfoto | tiktokphoto *usuario(a)*_
┃☭│ _${usedPrefix}vertiktok | tiktokstalk *usuario(a)*_
┃☭│ _${usedPrefix}mediafire | dlmediafire *link*_
┃☭│ _${usedPrefix}clonarepo | gitclone *link*_
┃☭│ _${usedPrefix}clima *país ciudad*_
┃☭│ _${usedPrefix}consejo_
┃☭│ _${usedPrefix}morse codificar *texto*_
┃☭│ _${usedPrefix}morse decodificar *morse*_
┃☭│ _${usedPrefix}fraseromantica_
┃☭│ _${usedPrefix}historia_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭═══〘☬ _Chat Anonimo_ ☬〙═══⊷❍
┃ _podras enviar mensajes a otra
┃ _persona usando a HepeinBot_
┃
┃☭│ _${usedPrefix}chatanonimo | anonimochat_
┃☭│ _${usedPrefix}anonimoch_
┃☭│ _${usedPrefix}start_
┃☭│ _${usedPrefix}next_
┃☭│ _${usedPrefix}leave_
┃☭╰───────────────
╰═════════════════════⊷
 
╭════〘☬ _Grupos_ ☬〙════⊷❍
│☭
┃☭│ _${usedPrefix}add *numero*_
┃☭│ _${usedPrefix}sacar | ban | kick  *@tag*_
┃☭│ _${usedPrefix}grupo *abrir : cerrar*_
┃☭│ _${usedPrefix}group *open : close*_
┃☭│ _${usedPrefix}daradmin | promote *@tag*_
┃☭│ _${usedPrefix}quitar | demote *@tag*_
┃☭│ _${usedPrefix}banchat_
┃☭│ _${usedPrefix}unbanchat_
┃☭│ _${usedPrefix}banuser *@tag*_
┃☭│ _${usedPrefix}unbanuser *@tag*_
┃☭│ _${usedPrefix}admins *texto*_
┃☭│ _${usedPrefix}invocar *texto*_ 
┃☭│ _${usedPrefix}tagall *texto*_
┃☭│ _${usedPrefix}hidetag *texto*_
┃☭│ _${usedPrefix}infogrupo | infogroup_
┃☭│ _${usedPrefix}grupotiempo | grouptime *Cantidad*_ 
┃☭│ _${usedPrefix}advertencia *@tag*_ 
┃☭│ _${usedPrefix}deladvertencia *@tag*_
┃☭│ _${usedPrefix}delwarn *@tag*_
┃☭│ _${usedPrefix}crearvoto | startvoto *texto*_ 
┃☭│ _${usedPrefix}sivotar | upvote_
┃☭│ _${usedPrefix}novotar | devote_
┃☭│ _${usedPrefix}vervotos | cekvoto_
┃☭│ _${usedPrefix}delvoto | deletevoto_
┃☭│ _${usedPrefix}enlace | link_
┃☭│ _${usedPrefix}newnombre | nuevonombre *texto*_
┃☭│ _${usedPrefix}newdesc | descripcion *texto*_   
┃☭│ _${usedPrefix}setwelcome | bienvenida *texto*_   
┃☭│ _${usedPrefix}setbye | despedida *texto*_  
┃☭│ _${usedPrefix}nuevoenlace | resetlink_
┃☭│ _${usedPrefix}on_
┃☭│ _${usedPrefix}off_   
┃☭╰─────────────────❍
╰══════════════════⊷❍
 
╭════〘☬ _Parejas_ ☬〙════⊷❍
│
┃☭│ _${usedPrefix}listaparejas | listship_
┃☭│ _${usedPrefix}mipareja | mylove_
┃☭│ _${usedPrefix}pareja | couple *@tag*_
┃☭│ _${usedPrefix}aceptar | accept *@tag*_
┃☭│ _${usedPrefix}rechazar | decline *@tag*_
┃☭│ _${usedPrefix}terminar | finish *@tag*_
┃☭╰─────────────────❍
╰══════════════════⊷❍
 
╭════〘☬ _Votaciones en grupos_ ☬〙════⊷❍
│
┃☭│ _${usedPrefix}crearvoto | startvoto *texto*_ 
┃☭│ _${usedPrefix}sivotar | upvote_ 
┃☭│ _${usedPrefix}novotar | devote_ 
┃☭│ _${usedPrefix}vervotos | cekvoto_
┃☭│ _${usedPrefix}delvoto | deletevoto_ 
┃☭╰─────────────────❍
╰══════════════════⊷❍ 
 
╭════〘☬ _Comandos +18_ ☬〙════⊷❍
│  ╭──────────────❍
┃☭│ _${usedPrefix}hornymenu_ 
┃☭╰──────────────❍
╰══════════════════⊷❍
 
╭════〘☬ _Convertidores_ ☬〙════⊷❍
│
┃☭│ _${usedPrefix}toimg | img | jpg *sticker*_ 
┃☭│ _${usedPrefix}toanime | jadianime *foto*_
┃☭│ _${usedPrefix}tomp3 | mp3 *video o nota de voz*_
┃☭│ _${usedPrefix}tovn | vn *video o audio*_
┃☭│ _${usedPrefix}tovideo *audio*_
┃☭│ _${usedPrefix}tourl *video, imagen*_
┃☭│ _${usedPrefix}toenlace  *video, imagen o audio*_
┃☭│ _${usedPrefix}tts es *texto*_
┃☭╰─────────────────❍
╰══════════════════⊷❍ 
 
╭════〘☬ *_ᴏᴛʜᴇʀs_* ☬〙════⊷❍
│☭╭─────────────────
┃☭│ _${usedPrefix}logos *efecto texto*_
┃☭│ _${usedPrefix}menulogos2_
┃☭╰─────────────────
╰══════════════════⊷❍

╭════〘☬ *_ᴏᴛʜᴇʀs_* ☬〙════⊷❍
│☭╭─────────────────❍
┃☭│ _${usedPrefix}simpcard *@tag*_
┃☭│ _${usedPrefix}hornycard *@tag*_
┃☭│ _${usedPrefix}lolice *@tag*_
┃☭│ _${usedPrefix}ytcomment *texto*_
┃☭│ _${usedPrefix}itssostupid_
┃☭│ _${usedPrefix}pixelar_
┃☭│ _${usedPrefix}blur_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭════〘☬ _IMGNS ANIME Y MAS_ ☬〙════⊷❍
│
┃☭│ _${usedPrefix}chica_ 
┃☭│ _${usedPrefix}chico_
┃☭│ _${usedPrefix}cristianoronaldo_
┃☭│ _${usedPrefix}messi_
┃☭│ _${usedPrefix}meme_
┃☭│ _${usedPrefix}meme2_
┃☭│ _${usedPrefix}itzy_
┃☭│ _${usedPrefix}blackpink_
┃☭│ _${usedPrefix}kpop *blackpink : exo : bts*_
┃☭│ _${usedPrefix}lolivid_
┃☭│ _${usedPrefix}loli_
┃☭│ _${usedPrefix}navidad_
┃☭│ _${usedPrefix}ppcouple_
┃☭│ _${usedPrefix}neko_
┃☭│ _${usedPrefix}waifu_
┃☭│ _${usedPrefix}akira_
┃☭│ _${usedPrefix}akiyama_
┃☭│ _${usedPrefix}anna_
┃☭│ _${usedPrefix}asuna_
┃☭│ _${usedPrefix}ayuzawa_
┃☭│ _${usedPrefix}boruto_
┃☭│ _${usedPrefix}chiho_
┃☭│ _${usedPrefix}chitoge_
┃☭│ _${usedPrefix}deidara_
┃☭│ _${usedPrefix}erza_
┃☭│ _${usedPrefix}elaina_
┃☭│ _${usedPrefix}eba_
┃☭│ _${usedPrefix}emilia_
┃☭│ _${usedPrefix}hestia_
┃☭│ _${usedPrefix}hinata_
┃☭│ _${usedPrefix}inori_
┃☭│ _${usedPrefix}isuzu_
┃☭│ _${usedPrefix}itachi_
┃☭│ _${usedPrefix}itori_
┃☭│ _${usedPrefix}kaga_
┃☭│ _${usedPrefix}kagura_
┃☭│ _${usedPrefix}kaori_
┃☭│ _${usedPrefix}keneki_
┃☭│ _${usedPrefix}kotori_
┃☭│ _${usedPrefix}kurumi_
┃☭│ _${usedPrefix}madara_
┃☭│ _${usedPrefix}mikasa_
┃☭│ _${usedPrefix}miku_
┃☭│ _${usedPrefix}minato_
┃☭│ _${usedPrefix}naruto_
┃☭│ _${usedPrefix}nezuko_
┃☭│ _${usedPrefix}sagiri_
┃☭│ _${usedPrefix}sasuke_
┃☭│ _${usedPrefix}sakura_
┃☭│ _${usedPrefix}cosplay_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭════〘☬ _Modificar audios_ ☬〙════⊷❍
│☭╭──────────────❍
┃☭│ _${usedPrefix}bass_
┃☭│ _${usedPrefix}blown_
┃☭│ _${usedPrefix}deep_
┃☭│ _${usedPrefix}earrape_
┃☭│ _${usedPrefix}fat_
┃☭│ _${usedPrefix}fast_
┃☭│ _${usedPrefix}nightcore_
┃☭│ _${usedPrefix}reverse_
┃☭│ _${usedPrefix}robot_
┃☭│ _${usedPrefix}slow_
┃☭│ _${usedPrefix}smooth_
┃☭│ _${usedPrefix}tupai_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭════〘☬ _🍁Búsquedas 🍁_ ☬〙════⊷❍
│☭╭──────────────❍
┃☭│ _${usedPrefix}animeinfo *texto*_
┃☭│ _${usedPrefix}mangainfo *texto*_
┃☭│ _${usedPrefix}google *texto*_
┃☭│ _${usedPrefix}letra | lirik *texto*_
┃☭│ _${usedPrefix}ytsearch | yts *texto*_
┃☭│ _${usedPrefix}wiki | wikipedia *texto*_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭════〘☬ _Menu Audios_ ☬〙════⊷❍
│ _Solicita el menu de audios_
┃ _usando:_
┃☭│ _${usedPrefix}audios_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭════〘☬ _🍁Herramientas 🍁_ ☬〙════⊷❍
│☭╭──────────────❍
┃☭│ _${usedPrefix}afk *motivo*_
┃☭│ _${usedPrefix}acortar *url*_
┃☭│ _${usedPrefix}calc *operacion math*_
┃☭│ _${usedPrefix}del *respondre a mensaje del Bot*_
┃☭│ _${usedPrefix}qrcode *texto*_
┃☭│ _${usedPrefix}readmore *texto1|texto2*_
┃☭│ _${usedPrefix}spamwa *numero|texto|cantidad*_
┃☭│ _${usedPrefix}styletext *texto*_
┃☭│ _${usedPrefix}traducir *texto*_
┃☭│ _${usedPrefix}morse codificar *texto*_
┃☭│ _${usedPrefix}morse decodificar *morse*_
┃☭│ _${usedPrefix}encuesta | poll *Motivo*_
┃☭│ _${usedPrefix}horario_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭════〘☬ _RPG SUBIR DE NIVEL_ ☬〙════⊷❍
┃☭╭─────────────────────────❍
┃☭│ _${usedPrefix}botemporal *enlace* *cantidad*_
┃☭│ _${usedPrefix}addbot *enlace* *cantidad*_
┃☭│ _${usedPrefix}pase premium_
┃☭│ _${usedPrefix}pass premium_
┃☭│ _${usedPrefix}listapremium | listprem_
┃☭│ _${usedPrefix}transfer *tipo cantidad @tag*_
┃☭│ _${usedPrefix}dar *tipo cantidad @tag*_
┃☭│ _${usedPrefix}enviar *tipo cantidad @tag*_
┃☭│ _${usedPrefix}balance_
┃☭│ _${usedPrefix}cartera | wallet_ 
┃☭│ _${usedPrefix}experiencia | exp_
┃☭│ _${usedPrefix}top | lb | leaderboard_
┃☭│ _${usedPrefix}nivel | level | lvl_
┃☭│ _${usedPrefix}rol | rango_
┃☭│ _${usedPrefix}inventario | inventory_ 
┃☭│ _${usedPrefix}aventura | adventure_ 
┃☭│ _${usedPrefix}caza | cazar | hunt_
┃☭│ _${usedPrefix}pescar | fishing_
┃☭│ _${usedPrefix}animales_ 
┃☭│ _${usedPrefix}alimentos_
┃☭│ _${usedPrefix}curar | heal_
┃☭│ _${usedPrefix}buy_
┃☭│ _${usedPrefix}sell_
┃☭│ _${usedPrefix}verificar | registrar_
┃☭│ _${usedPrefix}perfil | profile_
┃☭│ _${usedPrefix}myns_
┃☭│ _${usedPrefix}unreg *numero de serie*_
┃☭│ _${usedPrefix}minardiamantes | minargemas_
┃☭│ _${usedPrefix}minargatacoins | minarcoins_
┃☭│ _${usedPrefix}minarexperiencia | minarexp_
┃☭│ _${usedPrefix}minar *:* minar2 *:* minar3_
┃☭│ _${usedPrefix}reclamar | regalo | claim_
┃☭│ _${usedPrefix}cadahora | hourly_
┃☭│ _${usedPrefix}cadasemana | semanal | weekly_
┃☭│ _${usedPrefix}cadames | mes | monthly_
┃☭│ _${usedPrefix}cofre | abrircofre | coffer_
┃☭│ _${usedPrefix}trabajar | work_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭══〘☬ _Tabla de clasificación_ ☬〙═⊷❍
┃☭╭─────────────────❍
┃☭│ _${usedPrefix}top | lb | leaderboard_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭════〘☬ _Stickers_ ☬〙════⊷❍
┃☭╭──────────────❍
┃☭│ _${usedPrefix}sticker | s *imagen o video*_
┃☭│ _${usedPrefix}sticker | s *url de tipo jpg*_
┃☭│ _${usedPrefix}emojimix *卐+😐*_
┃☭│ _${usedPrefix}scircle | círculo *imagen*_
┃☭│ _${usedPrefix}semoji | emoji *tipo emoji*_
┃☭│ _${usedPrefix}attp *texto*_
┃☭│ _${usedPrefix}attp2 *texto*_
┃☭│ _${usedPrefix}ttp *texto*_
┃☭│ _${usedPrefix}ttp2 *texto*_
┃☭│ _${usedPrefix}ttp3 *texto*_
┃☭│ _${usedPrefix}ttp4 *texto*_
┃☭│ _${usedPrefix}ttp5 *texto*_
┃☭│ _${usedPrefix}ttp6 *texto*_
┃☭│ _${usedPrefix}dado_
┃☭│ _${usedPrefix}stickermarker *efecto : responder a imagen*_ 
┃☭│ _${usedPrefix}stickerfilter *efecto : responder a imagen*_ 
┃☭│  _${usedPrefix}cs *:* cs2_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭══〘☬ _Editar Stickers_ ☬〙═══⊷❍
┃☭╭─────────────────❍
┃☭│ _${usedPrefix}wm *packname|author*_
┃☭│ _${usedPrefix}wm *texto1|texto2*_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭════〘☬ _Acciónes con stickers_ ☬〙════⊷❍
┃☭╭────────────────────❍
┃☭│ _${usedPrefix}palmaditas | pat *@tag*_
┃☭│ _${usedPrefix}bofetada | slap *@tag*_
┃☭│ _${usedPrefix}golpear *@tag*_
┃☭│ _${usedPrefix}besar | kiss *@tag*_ 
┃☭│ _${usedPrefix}alimentar | food *@tag*_
┃☭╰─────────────────❍
╰══════════════════⊷❍

══〘☬ ANIME ☬〙═══
> *Comandos de reacciones de anime*
  ⮑${usedPrefix}pat1 *@tag*
    ➠ acariciar
  ⮑${usedPrefix}slap1 *@tag*
    ➠ bofatear
  ⮑${usedPrefix}punch1 *@tag*
    ➠ golpear
  ⮑${usedPrefix}kiss1 *@tag*
    ➠ besar
  ⮑${usedPrefix}food1
    ➠ comer
  ⮑${usedPrefix}bite1 *@tag*
    ➠ morder
  ⮑${usedPrefix}poke1 *@tag*
    ➠ tocar
  ⮑${usedPrefix}hug1 *@tag*
    ➠ abrazar
  ⮑${usedPrefix}feed1 *@tag*
    ➠ alimetar
  ⮑${usedPrefix}kill1 *@tag*
    ➠ matar
  ⮑${usedPrefix}sleep1
    ➡︎ dormir
  ⮑${usedPrefix}happy1
    ➡︎ alegrar
  ⮑${usedPrefix}sad1
    ➡︎ llorar
◈═════════════◈═════════════◈

══〘☬ KPOP & BTS ☬〙═══
> *Comandos de reacciones de BTS&KPOP*
  ⮑${usedPrefix}kiss2 *@tag*
    ➡︎ besar
  ⮑${usedPrefix}dance
    ➡︎ bailar
◈═════════════◈═════════════◈

 ═══〘☬ _Para Propietarios/Owners_ ☬〙═══
> Para propietarios y grupos
 ⮑${usedPrefix}join *enlace*
 ⮑${usedPrefix}unete *enlace*
 ⮑${usedPrefix}dardiamantes *cantidad*
 ⮑${usedPrefix}darxp *cantidad*
 ⮑${usedPrefix}darkatacoins *cantidad* 
 ⮑${usedPrefix}addprem | userpremium *@tag* *cantidad*
 ⮑${usedPrefix}addprem2 | userpremium2 *@tag* *cantidad*
 ⮑${usedPrefix}addprem3 | userpremium3 *@tag* *cantidad*
 ⮑${usedPrefix}addprem4 | userpremium4 *@tag* *cantidad*
 ⮑${usedPrefix}idioma | language
 ⮑${usedPrefix}cajafuerte
 ⮑${usedPrefix}comunicar | broadcastall | bc *texto*
 ⮑${usedPrefix}broadcastchats | bcc *texto*
 ⮑${usedPrefix}comunicarpv *texto*
 ⮑${usedPrefix}broadcastgc *texto* 
 ⮑${usedPrefix}comunicargrupos *texto*
 ⮑${usedPrefix}borrartmp | cleartmp
 ⮑${usedPrefix}delexp *@tag*
 ⮑${usedPrefix}delkatacoins *@tag*
 ⮑${usedPrefix}deldiamantes *@tag*
 ⮑${usedPrefix}reiniciar | restart
 ⮑${usedPrefix}ctualizar | update
 ⮑${usedPrefix}addprem | +prem *@tag*
 ⮑${usedPrefix}delprem | -prem *@tag*
 ⮑${usedPrefix}listapremium | listprem
 ⮑${usedPrefix}añadirdiamantes *@tag cantidad*
 ⮑${usedPrefix}añadirxp *@tag cantidad*
 ⮑${usedPrefix}añadirkatacoins *@tag cantidad*
◈════════════════════◈════════════════════◈
`.trim()
const vi = ['https://telegra.ph/file/578261f3a5c1820d753c0.mp4',
'https://telegra.ph/file/fb6797f20e3c14312a6ed.mp4',
'https://telegra.ph/file/f6379d1afb78a2b371e3e.mp4']
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak })
	
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu|allm|m|\?)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  
