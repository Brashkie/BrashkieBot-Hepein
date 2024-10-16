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

let menu = `╭═══《𖣐 _Hepein Bot_ 𖣐》═══⊷❍
┃☭╭──────────────
┃☭│ 《 𖣐 _ᴏᴡɴᴇʀs ᴏғᴄ_ 𖣐 》
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
╚═════════════════■■■■


 ══《☬ _SUB BOT HEPEIN_ ☬》══
> Ser subbot
 ⮑${usedPrefix}serbot | jadibot
 ⮑${usedPrefix}bots | listjadibots
 ⮑${usedPrefix}detener | stop
◈══════════◈═════════◈


 ══《☬ _REPORTES_ ☬》══
> Reportar al creador sobre problema del comando
 ⮑${usedPrefix}reporte *texto*
   Haga un reporte
   en caso de una falla
   en algun comando
◈═══════◈═══════◈


 ══《☬ _User Premium_ ☬》══
> Comandos de premium
 ⮑${usedPrefix}listapremium | listprem
 ⮑${usedPrefix}pase premium
 ⮑${usedPrefix}pass premium
◈═════════◈════════◈


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
 ⮑${usedPrefix}toptonto
 ⮑${usedPrefix}tophorribles
 ⮑${usedPrefix}topfiel
 ⮑${usedPrefix}tophacker
 ⮑${usedPrefix}topvirgen
 ⮑${usedPrefix}topinfiel
 ⮑${usedPrefix}topodio
 ⮑${usedPrefix}topamor
 ⮑${usedPrefix}topvago
 ⮑${usedPrefix}topchambeo
 ⮑${usedPrefix}topnegro
 ⮑${usedPrefix}topculon
 ⮑${usedPrefix}topdrogo
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
 ⮑${usedPrefix}calzon *@tag*
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
◈══════════◈═════════◈

 ══《☬ *IA HEPEIN* ☬》══
> puedes buscar lo que deseas usando
 ⮑${usedPrefix}simi | ia *texto*
 ⮑${usedPrefix}alexa | siri | cortana *texto*
 ⮑${usedPrefix}simsimi | bixby *texto*
◈═════════════◈═════════════◈

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
◈═════════════◈═════════════◈


 ══《☬ _DESCARGAS_ ☬》═══
> Podras descargar
 ⮑${usedPrefix}imagen | image *texto*
 ⮑${usedPrefix}pinterest | dlpinterest *texto*
 ⮑${usedPrefix}wallpaper|wp *texto*
 ⮑${usedPrefix}play | play2 *texto o link*
 ⮑${usedPrefix}play.1 *texto o link*
 ⮑${usedPrefix}play.2 *texto o link* 
 ⮑${usedPrefix}ytmp3 | yta *link*
 ⮑${usedPrefix}ytmp4 | ytv *link*
 ⮑${usedPrefix}pdocaudio | ytadoc *link*
 ⮑${usedPrefix}pdocvieo | ytvdoc *link*
 ⮑${usedPrefix}tw |twdl | twitter *link*
 ⮑${usedPrefix}facebook | fb *link*
 ⮑${usedPrefix}instagram *link video o imagen*
 ⮑${usedPrefix}verig | igstalk *usuario(a)*
 ⮑${usedPrefix}ighistoria | igstory *usuario(a)*
 ⮑${usedPrefix}tiktok *link*
 ⮑${usedPrefix}tiktokimagen | ttimagen *link*
 ⮑${usedPrefix}tiktokfoto | tiktokphoto *usuario(a)*
 ⮑${usedPrefix}vertiktok | tiktokstalk *usuario(a)*
 ⮑${usedPrefix}mediafire | dlmediafire *link*
 ⮑${usedPrefix}clonarepo | gitclone *link*
 ⮑${usedPrefix}clima *país ciudad*
 ⮑${usedPrefix}consejo
 ⮑${usedPrefix}morse codificar *texto*
 ⮑${usedPrefix}morse decodificar *morse*
 ⮑${usedPrefix}fraseromantica
 ⮑${usedPrefix}historia
◈════════════◈════════════◈


 ══《☬ _Chat Anonimo_ ☬》═══⊷❍
> Podras enviar mensajes a otra persona usando a HepeinBot
 ⮑${usedPrefix}chatanonimo | anonimochat
 ⮑${usedPrefix}anonimoch
 ⮑${usedPrefix}start
 ⮑${usedPrefix}next
 ⮑${usedPrefix}leave
◈════════════◈════════════◈

 
 ══《☬ _Grupos_ ☬》══
> Comandos para grupos
 ⮑${usedPrefix}add *numero*
 ⮑${usedPrefix}sacar | ban | kick  *@tag*
 ⮑${usedPrefix}grupo *abrir : cerrar*
 ⮑${usedPrefix}group *open : close*
 ⮑${usedPrefix}daradmin | promote *@tag*
 ⮑${usedPrefix}quitar | demote *@tag*
 ⮑${usedPrefix}banchat
 ⮑${usedPrefix}unbanchat
 ⮑${usedPrefix}banuser *@tag*
 ⮑${usedPrefix}unbanuser *@tag*
 ⮑${usedPrefix}admins *texto*
 ⮑${usedPrefix}invocar *texto* 
 ⮑${usedPrefix}tagall *texto*
 ⮑${usedPrefix}hidetag *texto*
 ⮑${usedPrefix}infogrupo | infogroup
 ⮑${usedPrefix}grupotiempo | grouptime *Cantidad* 
 ⮑${usedPrefix}advertencia *@tag* 
 ⮑${usedPrefix}deladvertencia *@tag*
 ⮑${usedPrefix}delwarn *@tag*
 ⮑${usedPrefix}crearvoto | startvoto *texto* 
 ⮑${usedPrefix}sivotar | upvote
 ⮑${usedPrefix}novotar | devote
 ⮑${usedPrefix}vervotos | cekvoto
 ⮑${usedPrefix}delvoto | deletevoto
 ⮑${usedPrefix}enlace | link
 ⮑${usedPrefix}newnombre | nuevonombre *texto*
 ⮑${usedPrefix}newdesc | descripcion *texto*  
 ⮑${usedPrefix}setwelcome | bienvenida *texto*   
 ⮑${usedPrefix}setbye | despedida *texto*  
 ⮑${usedPrefix}nuevoenlace | resetlink
 ⮑${usedPrefix}on
 ⮑${usedPrefix}off  
◈═════════◈═════════◈

 
 ══《☬ PAREJAS ☬》══
> Ver parejas o unir
 ⮑${usedPrefix}listaparejas | listship
 ⮑${usedPrefix}mipareja | mylove
 ⮑${usedPrefix}pareja | couple *@tag*
 ⮑${usedPrefix}aceptar | accept *@tag*
 ⮑${usedPrefix}rechazar | decline *@tag*
 ⮑${usedPrefix}terminar | finish *@tag*
◈════════◈════════◈

 
 ══《☬ VOTACIONES EN GRUPOS ☬》══
> Votar o apoyar al bot
 ⮑${usedPrefix}crearvoto | startvoto *texto* 
 ⮑${usedPrefix}sivotar | upvote 
 ⮑${usedPrefix}novotar | devote 
 ⮑${usedPrefix}vervotos | cekvoto
 ⮑${usedPrefix}delvoto | deletevoto 
◈═══════════◈═══════════◈

 
 ══《☬ COMANDOS +18 ☬》═══
> Ver menu para mayores de 18
 ⮑${usedPrefix}hornymenu 
◈═══════════◈═══════════◈

 
 ══《☬ CONVERTIDORES ☬》══
> Convertirlo cualquier archivo
 ⮑${usedPrefix}toimg | img | jpg *sticker* 
 ⮑${usedPrefix}toanime | jadianime *foto*
 ⮑${usedPrefix}tomp3 | mp3 *video o nota de voz*
 ⮑${usedPrefix}tovn | vn *video o audio*
 ⮑${usedPrefix}tovideo *audio*
 ⮑${usedPrefix}tourl *video, imagen*
 ⮑${usedPrefix}toenlace  *video, imagen o audio*
 ⮑${usedPrefix}tts es *texto*
◈═══════════◈═══════════◈

 
 ══《☬ OTHERS ☬》══
> Ver logos o menu
 ⮑${usedPrefix}logos *efecto texto*
 ⮑${usedPrefix}menulogos2
◈════════◈════════◈


 ══《☬ OTROS ☬》══
> Ver otros comandos
 ⮑${usedPrefix}simpcard *@tag*
 ⮑${usedPrefix}hornycard *@tag*
 ⮑${usedPrefix}lolice *@tag*
 ⮑${usedPrefix}ytcomment *texto*
 ⮑${usedPrefix}itssostupid
 ⮑${usedPrefix}pixelar
 ⮑${usedPrefix}blur
◈════════◈════════◈


 ══《☬ IMGNS ANIME Y MAS ☬》══
> Ver imagenes los personajes o otros
 ⮑${usedPrefix}chica 
 ⮑${usedPrefix}chico
 ⮑${usedPrefix}cristianoronaldo
 ⮑${usedPrefix}messi
 ⮑${usedPrefix}meme
 ⮑${usedPrefix}meme2
 ⮑${usedPrefix}itzy
 ⮑${usedPrefix}blackpink
 ⮑${usedPrefix}kpop *blackpink : exo : bts*
 ⮑${usedPrefix}lolivid
 ⮑${usedPrefix}loli
 ⮑${usedPrefix}navidad
 ⮑${usedPrefix}ppcouple
 ⮑${usedPrefix}neko
 ⮑${usedPrefix}waifu
 ⮑${usedPrefix}akira
 ⮑${usedPrefix}akiyama
 ⮑${usedPrefix}anna
 ⮑${usedPrefix}asuna
 ⮑${usedPrefix}ayuzawa
 ⮑${usedPrefix}boruto
 ⮑${usedPrefix}chiho
 ⮑${usedPrefix}chitoge
 ⮑${usedPrefix}deidara
 ⮑${usedPrefix}erza
 ⮑${usedPrefix}elaina
 ⮑${usedPrefix}eba
 ⮑${usedPrefix}emilia
 ⮑${usedPrefix}hestia
 ⮑${usedPrefix}hinata
 ⮑${usedPrefix}inori
 ⮑${usedPrefix}isuzu
 ⮑${usedPrefix}itachi
 ⮑${usedPrefix}itori
 ⮑${usedPrefix}kaga
 ⮑${usedPrefix}kagura
 ⮑${usedPrefix}kaori
 ⮑${usedPrefix}keneki
 ⮑${usedPrefix}kotori
 ⮑${usedPrefix}kurumi
 ⮑${usedPrefix}madara
 ⮑${usedPrefix}mikasa
 ⮑${usedPrefix}miku
 ⮑${usedPrefix}minato
 ⮑${usedPrefix}naruto
 ⮑${usedPrefix}nezuko
 ⮑${usedPrefix}sagiri
 ⮑${usedPrefix}sasuke
 ⮑${usedPrefix}sakura
 ⮑${usedPrefix}cosplay
◈═══════════◈═══════════◈


 ══《☬ MODIFICAR AUDIOS ☬》══
> Modificar audio
 ⮑${usedPrefix}bass
 ⮑${usedPrefix}blown
 ⮑${usedPrefix}deep
 ⮑${usedPrefix}earrape
 ⮑${usedPrefix}fat
 ⮑${usedPrefix}fast
 ⮑${usedPrefix}nightcore
 ⮑${usedPrefix}reverse
 ⮑${usedPrefix}robot
 ⮑${usedPrefix}slow
 ⮑${usedPrefix}smooth
 ⮑${usedPrefix}tupai
◈═══════════◈═══════════◈


 ══《☬ BUSQUEDAS ☬》══
> Buscar texto
 ⮑${usedPrefix}animeinfo *texto*_
 ⮑${usedPrefix}mangainfo *texto*_
 ⮑${usedPrefix}google *texto*_
 ⮑${usedPrefix}letra | lirik *texto*_
 ⮑${usedPrefix}ytsearch | yts *texto*_
 ⮑${usedPrefix}wiki | wikipedia *texto*_
◈═════════◈═════════◈


 ══《☬ MENU AUDIOS ☬》══
> Menu de audios
 ⮑${usedPrefix}audios
◈══════════◈══════════◈


 ══《☬ HERRAMIENTAS ☬》═══
> Herramientas para el miembro
 ⮑${usedPrefix}afk *motivo*
 ⮑${usedPrefix}acortar *url*
 ⮑${usedPrefix}calc *operacion math*
 ⮑${usedPrefix}del *respondre a mensaje del Bot*
 ⮑${usedPrefix}qrcode *texto*
 ⮑${usedPrefix}readmore *texto1|texto2*
 ⮑${usedPrefix}spamwa *numero|texto|cantidad*
 ⮑${usedPrefix}styletext *texto*
 ⮑${usedPrefix}traducir *texto*
 ⮑${usedPrefix}morse codificar *texto*
 ⮑${usedPrefix}morse decodificar *morse*
 ⮑${usedPrefix}encuesta | poll *Motivo*
 ⮑${usedPrefix}horario
◈═══════════◈═══════════◈


 ══《☬ RPG SUBIR DE NIVEL ☬》══
> Para ser Pro o subir de nivel
 ⮑${usedPrefix}botemporal *enlace* *cantidad*
 ⮑${usedPrefix}addbot *enlace* *cantidad*
 ⮑${usedPrefix}pase premium
 ⮑${usedPrefix}pass premium
 ⮑${usedPrefix}listapremium | listprem
 ⮑${usedPrefix}transfer *tipo cantidad @tag*
 ⮑${usedPrefix}dar *tipo cantidad @tag*
 ⮑${usedPrefix}enviar *tipo cantidad @tag*
 ⮑${usedPrefix}balance
 ⮑${usedPrefix}cartera | wallet 
 ⮑${usedPrefix}experiencia | exp
 ⮑${usedPrefix}top | lb | leaderboard
 ⮑${usedPrefix}nivel | level | lvl
 ⮑${usedPrefix}rol | rango
 ⮑${usedPrefix}inventario | inventory
 ⮑${usedPrefix}aventura | adventure 
 ⮑${usedPrefix}caza | cazar | hunt
 ⮑${usedPrefix}pescar | fishing
 ⮑${usedPrefix}animales 
 ⮑${usedPrefix}alimentos
 ⮑${usedPrefix}curar | heal
 ⮑${usedPrefix}buy
 ⮑${usedPrefix}sell
 ⮑${usedPrefix}verificar | registrar
 ⮑${usedPrefix}perfil | profile
 ⮑${usedPrefix}myns
 ⮑${usedPrefix}unreg *numero de serie*
 ⮑${usedPrefix}minardiamantes | minargemas
 ⮑${usedPrefix}minargatacoins | minarcoins
 ⮑${usedPrefix}minarexperiencia | minarexp
 ⮑${usedPrefix}minar *:* minar2 *:* minar3
 ⮑${usedPrefix}reclamar | regalo | claim
 ⮑${usedPrefix}cadahora | hourly
 ⮑${usedPrefix}cadasemana | semanal | weekly
 ⮑${usedPrefix}cadames | mes | monthly
 ⮑${usedPrefix}cofre | abrircofre | coffer
 ⮑${usedPrefix}trabajar | work
◈════════════◈════════════◈


 ══《☬ TABLA DE CALSIFICACION ☬》══
> Ver tops de los miembros
 ⮑${usedPrefix}top | lb | leaderboard
◈══════════◈══════════◈


 ══《☬ STICKER ☬》═══
> Comandos de sticker
 ⮑${usedPrefix}sticker | s *imagen o video*
 ⮑${usedPrefix}sticker | s *url de tipo jpg*
 ⮑${usedPrefix}emojimix *卐+😐*
 ⮑${usedPrefix}scircle | círculo *imagen*
 ⮑${usedPrefix}semoji | emoji *tipo emoji*
 ⮑${usedPrefix}attp *texto*
 ⮑${usedPrefix}attp2 *texto*
 ⮑${usedPrefix}ttp *texto*
 ⮑${usedPrefix}ttp2 *texto*
 ⮑${usedPrefix}ttp3 *texto*
 ⮑${usedPrefix}ttp4 *texto*
 ⮑${usedPrefix}ttp5 *texto*
 ⮑${usedPrefix}ttp6 *texto*
 ⮑${usedPrefix}dado
 ⮑${usedPrefix}stickermarker *efecto : responder a imagen* 
 ⮑${usedPrefix}stickerfilter *efecto : responder a imagen* 
 ⮑${usedPrefix}cs *:* cs2
◈═════════◈═════════◈


 ══《☬ EDITAR STICKERS ☬》══
> Edicion de sticker
 ⮑${usedPrefix}wm *packname|author*
 ⮑${usedPrefix}wm *texto1|texto2*
◈════════════◈════════════◈


 ══《☬ ACCIONES CON STICKER ☬》═══
> *Comandos de reacciones con sticker*
 ⮑${usedPrefix}palmaditas | pat *@tag*
 ⮑${usedPrefix}bofetada | slap *@tag*
 ⮑${usedPrefix}golpear *@tag*
 ⮑${usedPrefix}besar | kiss *@tag* 
 ⮑${usedPrefix}alimentar | food *@tag*
◈════════════◈════════════◈


 ══《☬ ANIME ☬》═══
*Comandos de acciones de anime*
(つ▀¯▀)つ━━━━━━━━━
𒆜Acaricia a alguien del servidor.
> ${usedPrefix}pat1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Abofetea a alguien que no te gusta... ¡Usa toda tu fuerza!
> ${usedPrefix}slap1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Golpea a alguien. D:
> ${usedPrefix}punch1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Besa a alguien.
> ${usedPrefix}kiss1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Muerde al usuario mencionado. O deja que yo te muerda. owo
> ${usedPrefix}bite1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Fastidia a alguien del servidor.
> ${usedPrefix}poke1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜¿Un abracito? c:
Con este comando puedes abrazar a alguien.
> ${usedPrefix}hug1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Dale de comer a un usuario, o deja que yo te dé de comer. n.n
> ${usedPrefix}feed1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Si odias deberias .... ¡MATAR >:v!
> ${usedPrefix}kill1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Moja a alguien. UwU
> ${usedPrefix}splash1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Dile a un usuario Oniichan 👉👈
> ${usedPrefix}onichan1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Cura o revive a un ser querido uwu
> ${usedPrefix}heal1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Expresa que algo te causó gracia o te burlas de alguien.
> ${usedPrefix}laugh1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Patea a alguien.
> ${usedPrefix}kickbutt1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Besa a alguien en la mejilla.
> ${usedPrefix}kisscheeks1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Pellizca algunas mejillas.
> ${usedPrefix}cheeks1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Aplaude de algo o aplaude a alguien.
> ${usedPrefix}claps1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Disparale a alguien. D:
> ${usedPrefix}bang1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Lame a alguien.
> ${usedPrefix}lick1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Toma mi mano o la de un usuario.
> ${usedPrefix}handholding1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Despídete en general o de alguien específico.
> ${usedPrefix}bye1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Baila con alguien o conmigo
> ${usedPrefix}dance1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Saluda a un miembro
> ${usedPrefix}greet1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Patea brutalmente a un miembro
> ${usedPrefix}kick1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
*Comandos de reacciones de anime*
(つ▀¯▀)つ━━━━━━━━━
𒆜Come algo.
> ${usedPrefix}food1
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Te vas ir a mimir
> ${usedPrefix}sleep1
•═══◇◇•◇◇∘◇◇•◇◇═══•
***-------------------******
𒆜Demuestra tu felicidad con una sonrisa.
> ${usedPrefix}happy1
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Te pones trieste. u.u
> ${usedPrefix}sad1
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Mostrar tu ira o enojo de algo
> ${usedPrefix}angry1
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Dile que te estas bañando uff
> ${usedPrefix}bath1
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜¿Estas progrmando?
> ${usedPrefix}code
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Saludar a los miembros
> ${usedPrefix}greet1
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜¿Por qué estás llorando?
> ${usedPrefix}cry1
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜¯\_(ツ)_/¯
> ${usedPrefix}shrug1
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Risa malvada o diabolica
> ${usedPrefix}evilaugh1
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Mover la cabeza :v
> ${usedPrefix}movehead1
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Golpeate la cabeza.
> ${usedPrefix}banghead1
•═══◇◇•◇◇∘◇◇•◇◇═══•


 ══《☬ KPOP & BTS ☬》═══
*Comandos de acciones de BTS&KPOP*
(つ▀¯▀)つ━━━━━━━━━
𒆜Besar a alguien
> ${usedPrefix}kiss2 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Abrazar a alguien
> ${usedPrefix}hug2 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
*Comandos de reacciones de BTS&KPOP*
𒆜Bailar
> ${usedPrefix}dance2
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Llorar por algo T_T
> ${usedPrefix}cry2
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Bailar
> ${usedPrefix}dance2
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Llorar por algo T_T
> ${usedPrefix}cry2
•═══◇◇•◇◇∘◇◇•◇◇═══•


 ══《☬ +18 ☬》═══
*Comandos de acciones de anime +18*
(つ▀¯▀)つ━━━━━━━━━
𒆜Dale una nalgada a alguien. -_-
> ${usedPrefix}spank1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Agarra las tetas a un miembro :v
> ${usedPrefix}grabtits1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜¿A quien quieres follar? ._.
> ${usedPrefix}fuck1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•
𒆜Follar en su ano
> ${usedPrefix}anal1 *@tag*
•═══◇◇•◇◇∘◇◇•◇◇═══•



 ══《☬ PARA PROPIETARIOS ☬》══
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
◈═════════════◈═════════════◈
`.trim()
const vi = ['https://telegra.ph/file/578261f3a5c1820d753c0.mp4',
'https://telegra.ph/file/fb6797f20e3c14312a6ed.mp4',
'https://telegra.ph/file/f6379d1afb78a2b371e3e.mp4']
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak })
	
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menuall|\?)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
