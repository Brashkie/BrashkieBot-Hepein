import fetch from 'node-fetch'
import moment from 'moment-timezone'
import axios from 'axios'
import fs from 'fs'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto }  = (await import(global.baileys))

var handler = m => m
handler.all = async function (m) {
global.key = ''

// Cuentas
const response = await fetch('https://raw.githubusercontent.com/Brashkie/BrashkieBot-Hepein/main/official_accounts.json')  
const data = await response.json()
let { accounts, channels, groups, collaboration, sponsors, others } = data.info

global.yt = accounts.youTube
global.yt2 = others.yt_vid
global.ig = accounts.instagram
global.md = accounts.gatabot_md
global.fb = accounts.facebook
global.tk = accounts.tiktok
global.ths = accounts.threads
global.paypal = accounts.paypal
global.asistencia = others.assistance_num
global.bot = 'wa.me/51918340705'
global.cuentas = accounts.all

global.canal1 = channels.channel1
global.canal2 = channels.channel2
global.canal3 = channels.channel3
global.canal4 = channels.channel4

global.soporteGB = others.group_support
global.grupo1 = groups.group1
global.grupo2 = groups.group2
global.grupo3 = groups.group3
global.grupo4 = groups.group4
global.grupo5 = groups.group5
global.grupo6 = groups.group6

global.grupo_collab1 = collaboration.group1
global.grupo_collab2 = collaboration.group2
global.grupo_collab3 = collaboration.group3
global.grupo_collab4 = collaboration.group4

global.patrocinador1 = sponsors.boxmine
global.patrocinador2 = sponsors.cafirexos
global.patrocinador3 = sponsors.vortexus
global.patrocinador4 = sponsors.asif

global.canales = [canal1, canal2, canal3, canal4].getRandom()
global.welgata = [tk, ig, yt2, yt2, ig, md, ig, yt, paypal, yt2, yt2, ig, fb, tk, ths, asistencia].getRandom()
global.redesMenu = [canal1, canal2, canal3, canal4, soporteGB, grupo1, grupo2, grupo3, grupo4, grupo5, grupo6, md, ig, paypal, yt, asistencia, fb, tk].getRandom()
global.accountsgb = [canal1, canal2, canal3, canal4, tk, ig, yt, paypal, fb, ths, md, asistencia].getRandom()

var canalesInfo = [
{ link: canal1, id: "aun no publicado", name: "❰▶ Brashkie Zeitsi 𖣐❱" },
{ link: canal2, id: "aun no publicado", name: "❰▶ Brashkie Zeitsi 𖣐❱" },
{ link: canal3, id: "aun no publicado", name: "❰▶ Brashkie Zeitsi 𖣐❱" } 
]
var indiceAleatorio = Math.floor(Math.random() * canalesInfo.length)
var channelRD = canalesInfo[indiceAleatorio]

global.fakeChannel = { contextInfo: { mentionedJid: null, forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, serverMessageId: '', newsletterName: channelRD.name }, externalAdReply: { title: wm, body: vs, mediaType: 1, renderLargerThumbnail: false, previewType: `PHOTO`, thumbnailUrl: gataImg.getRandom(), thumbnail: imagen1, sourceUrl: accountsgb }}}, { quoted: m }
global.fakeChannel2 = { mentionedJid: [m.sender], isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, newsletterName: channelRD.name, serverMessageId: -1 }, forwardingScore: 200, externalAdReply: { title: packname, body: author, thumbnailUrl: gataMenu.getRandom(), sourceUrl: accountsgb, mediaType: 1, renderLargerThumbnail: false }}


// Imágenes 
global.imagen1 = fs.readFileSync("./media/menus/Menu3.jpg")
global.imagen2 = fs.readFileSync("./media/menus/img1.jpg")
global.imagen3 = fs.readFileSync("./media/menus/img2.jpg")
global.imagen4 = fs.readFileSync("./media/menus/img3.jpg")
global.imagen5 = fs.readFileSync("./media/menus/img4.jpg")
global.imagen6 = fs.readFileSync("./media/menus/img5.jpg")
global.imagen7 = fs.readFileSync("./media/menus/img6.jpg")
global.imagen8 = fs.readFileSync("./media/menus/img7.jpg")
global.imagen9 = fs.readFileSync("./media/menus/img8.jpg")
global.imagen10 = fs.readFileSync("./media/menus/img9.jpg")
global.imagen11 = fs.readFileSync("./media/menus/img10.jpg")
global.imagen12 = fs.readFileSync("./media/menus/img11.jpg")
global.imagen13 = fs.readFileSync("./media/menus/img12.jpg")

global.img = 'https://telegra.ph/file/34ca2bf7d84668a682a93.jpg'
global.img2 = 'https://telegra.ph/file/34ca2bf7d84668a682a93.jpg'

global.img3 = 'https://telegra.ph/file/23dd19e3db03ab6945e18.jpg' //prem
global.img4 = 'https://telegra.ph/file/23dd19e3db03ab6945e18.jpg' //prem

global.img5 = 'https://telegra.ph/file/d337dec60fe1071fd2117.jpg'
global.img6 = 'https://telegra.ph/file/d337dec60fe1071fd2117.jpg'
global.img7 = 'https://telegra.ph/file/1a956e9ea32f8c970bc1e.jpg'
global.img8 = 'https://telegra.ph/file/1a956e9ea32f8c970bc1e.jpg'
global.img9 = 'https://telegra.ph/file/56a318af6a5e5459c179b.jpg'

global.img10 = 'https://telegra.ph/file/56a318af6a5e5459c179b.jpg'
global.img11 = 'https://telegra.ph/file/574b9e1a8564e329b5332.jpg'
global.img12 = 'https://telegra.ph/file/574b9e1a8564e329b5332.jpg'
global.img13 = 'https://telegra.ph/file/3307517eab3de41c9692a.jpg'
global.img14 = 'https://telegra.ph/file/3307517eab3de41c9692a.jpg'
global.img15 = 'https://telegra.ph/file/1817e135b1cdd7bc40972.jpg'

global.img16 = 'https://i.imgur.com/PvKnAEP.jpg' //+18

global.img17 = 'https://i.imgur.com/fxeWwBv.jpg'
global.img18 = 'https://i.imgur.com/Mcvn53M.jpg'

global.logogit = 'https://tinyurl.com/2qvl9vgs'
global.gataVidMenu = ['https://telegra.ph/file/578261f3a5c1820d753c0.mp4', 'https://telegra.ph/file/fb6797f20e3c14312a6ed.mp4', 'https://telegra.ph/file/f6379d1afb78a2b371e3e.mp4'].getRandom()
global.gataMenu = [img, img2, img6, img7, img8, img9, img13, img14, img15, img17, img18].getRandom()
global.gataImg = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12, imagen13].getRandom()

// Fake
global.fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

global.fakeChannel = { contextInfo: { mentionedJid: null, forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, serverMessageId: '', newsletterName: channelRD.name }, externalAdReply: { title: wm, body: vs, mediaType: 1, renderLargerThumbnail: false, previewType: `PHOTO`, thumbnailUrl: gataImg, thumbnail: imagen1, sourceUrl: accountsgb }}}, { quoted: m }
  
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'Super Bot WhatsApp', orderTitle: 'Bang', thumbnail: gataMenu, sellerJid: '0@s.whatsapp.net' }}}
const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"   
}}} 

//let bottime = `${name} 𝗧𝗜𝗠𝗘: ${moment.tz('America/Bogota').format('HH:mm:ss')}`//America/Los_Angeles

let ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 99, status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
let fgif = {key: {participant : '0@s.whatsapp.net'}, message: {"videoMessage": { "title": wm, "h": `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./media/menus/Menu3.jpg')}}}
                             
let enlace = { contextInfo: { externalAdReply: {title: wm + ' 🥷', body: 'support group' , sourceUrl: redesMenu, thumbnail: await(await fetch(gataMenu)).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: ' 𖣐 𝗕𝗿𝗮𝘀𝗵𝗸𝗶𝗲𝗕𝗼𝘁 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', thumbnailUrl: gataMenu, sourceUrl: accountsgb }}}
let dos = [enlace, enlace2]  

global.wait = "⌛ *`Cargando...`*\n*𒅒❤❤⊹⊹⊹⊹⊹⊹⊹⊹𒅒* `20%`"
global.waitt = "⏳ *`Cargando....`*\n*𒅒❤❤❤❤⊹⊹⊹⊹⊹⊹𒅒* `40%`"
global.waittt = "⌛ *`Cargando...`*\n*𒅒❤❤❤❤❤❤⊹⊹⊹⊹𒅒* `60%`"
global.waitttt = "⏳ *`Cargando....`*\n*𒅒❤❤❤❤❤❤❤❤⊹⊹𒅒* `80%`"
global.waittttt = "⌛ *`Procesando...`*\n*𒅒❤❤❤❤❤❤❤❤❤❤𒅒* `100%`"

global.destraba = `⏰DESTRABA⏰*
li.DESTRAVip.to
2024 🦍💨

ဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪ
☣✝ﾚⅰɬ◊D͠Я◊ⅰD͠  D͠∑ㄅɬЯ∆√✝☣`
  
}
export default handler

// Mensaje de espera
// await mensajesEditados(conn, m)
global.mensajesEditados = async function(conn, m) {
const mensajes = [waitt, waittt, waitttt, waittttt]
key = await conn.sendMessage(m.chat, { text: wait, quoted: m })
for (let i = 0; i < mensajes.length; i++) {
await new Promise(resolve => setTimeout(resolve, 1000))
await conn.sendMessage(m.chat, { text: mensajes[i], edit: key })
}}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
  }
