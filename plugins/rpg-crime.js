//CÓDIGO CREADO POR elrebelde21 : https://github.com/elrebelde21
/*let crime = 500
let diamante = 10
const handler = async (m, {conn, usedPrefix, command, groupMetadata, participants, isPrems}) => {
const date = global.db.data.users[m.sender].crime + 3600000; //3600000 = 1 hs
if (new Date - global.db.data.users[m.sender].crime < 3600000) return m.reply(`『🚓︎』𝙇𝘼 𝙋𝙊𝙇𝙄𝘾𝙄𝘼 𝙀𝙎𝙏𝘼 𝙑𝙄𝙂𝙄𝙇𝘼𝙉𝘿𝙊 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙈𝙊𝙈𝙀𝙉𝙏𝙊, 𝙑𝙐𝙀𝙇𝙑𝙀 𝙀𝙉 : ${msToTime(date - new Date())}`)
let randow
if (m.isGroup) randow = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else randow = m.chat
try {
let ps = groupMetadata.participants.map(v => v.id)
let randow = ps.getRandom()
let users = global.db.data.users[randow]
const exp = Math.floor(Math.random() * 9000)
const diamond = Math.floor(Math.random() * 150)
const money = Math.floor(Math.random() * 9000)

if (global.db.data.users[m.sender].exp < 0) return m.reply(`《💰》${pickRandom(global.robar)} ${exp} XP`).catch(global.db.data.users[m.sender].exp += exp)
if (global.db.data.users[m.sender].limit < 0) return m.reply(`《💰》${pickRandom(global.robar)} ${diamond} 💎 Diamante`).catch(global.db.data.users[m.sender].limit += diamond)
if (global.db.data.users[m.sender].money < 0) return m.reply(`《💰》${pickRandom(global.robar)} ${money} 🪙 GataCoins`).catch(global.db.data.users[m.sender].money += money) 
  
let or = ['text', 'text2', 'text3', 'text4', 'text5']; 
let media = or[Math.floor(Math.random() * 5)]
global.db.data.users[m.sender].crime = new Date * 1;
if (media === 'text') return m.reply(`《💰》${pickRandom(global.robar)} ${exp} XP`).catch(global.db.data.users[m.sender].exp += exp) 
if (media === 'text2') return m.reply(`《🚓》${pickRandom(global.robmal)} ${exp} XP`).catch(global.db.data.users[m.sender].exp -= exp) 
if (media === 'text3') return m.reply(`《💰》${pickRandom(global.robar)}\n\n${diamond} 💎 𝐃𝐈𝐀𝐌𝐀𝐍𝐓𝐄\n${money} 🐈 𝐆𝐀𝐓𝐀𝐂𝐎𝐈𝐍𝐒`).catch(global.db.data.users[m.sender].limit += diamond).catch(global.db.data.users[m.sender].money += money)
if (media === 'text4') return m.reply(`《🚓》${pickRandom(global.robmal)}\n\n${diamond} 💎 𝐃𝐈𝐀𝐌𝐀𝐍𝐓𝐄\n${money} 🐈 𝐆𝐀𝐓𝐀𝐂𝐎𝐈𝐍𝐒`).catch(global.db.data.users[m.sender].limit -= diamond).catch(global.db.data.users[m.sender].money -= money)
if (media === 'text5') return conn.reply(m.chat, `《💰》Le has robado a @${randow.split`@`[0]} una cantidad de ${exp} XP`, m, {contextInfo: {mentionedJid: [randow]}},fakeChannel).catch(global.db.data.users[m.sender].exp += exp).catch(global.db.data.users[randow].exp -= crime) 
} catch (e) {
console.log(e)}}
handler.help = ['robar'];
handler.tags = ['xp'];
handler.command = /^(crime|Crime)$/i
handler.register = true
handler.group = true
export default handler;

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " Hora(s) " + minutes + " Minuto(s)"}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.robar = ['Robaste un Banco 🏦 y Obtuviste', 'Negociarte con el jefe de la mafia y Obtuviste :', 'Casi te atrapa la policía pero lograste robar una cantidad valiosa de 💰. !Te cuidado la próxima vez! Obtuviste:', 'Los mafiosos te han pagado :', 'Le has robado al Administrador del Grupo', 'Le robarte a tu presidente una sumar de :', 'le robarte a un famoso un valor de :', 'Entraste sigilosamente en el museo y robaste una obra de arte valiosa:', 'Infiltraste una joyería y obtuviste un botín impresionante:', 'Te convertiste en el ladrón más buscado del país, obtuviste:', 'Robaste un camión lleno de productos valiosos y obtuviste', 'Asaltaste un tren y conseguiste', 'Robaste un avión cargado de mercancía y obtuviste', 'Te hiciste pasar por un millonario para robar una joya única, obtuviste', 'Entraste a la casa de un coleccionista de arte y robaste una pieza invaluable, obtuviste', 'Secuestraste a un empresario y conseguiste un rescate importante:', 'Amenazaste a un político y obtuviste una gran suma de dinero:', 'Sobornaste a un oficial de policía para obtener información valiosa, conseguiste'];
global.robmal = ['LA POLICIA TE VIO 🙀👮‍♂️ PERDISTE', 'Fuiste a robar un banco 🏦 y tu ayudarte que vendio a la policía, perdiste', 'No pudiste escapar de la Policía 🚔🤡, perdiste :', 'Intentaste robar un casino pero te descubrieron, perdiste', 'Te atraparon tratando de robar una tienda, perdiste :', 'La alarma sonó cuando intentabas robar un almacén, perdiste', 'El dueño del lugar te atrapó in fraganti, perdiste', 'Intentaste hackear una cuenta bancaria pero te rastrearon, perdiste', 'Fuiste descubierto tratando de sobornar a un oficial, perdiste', 'Tu plan para chantajear a un empresario salió mal, perdiste']
*/

let cooldowns = {}

let handler = async (m, { conn, text, command, usedPrefix }) => {
  let users = global.db.data.users
  let senderId = m.sender
  let senderName = conn.getName(senderId)
  
  let tiempoEspera = 5 * 60
  if (cooldowns[m.sender] && Date.now() - cooldowns[m.sender] < tiempoEspera * 1000) {
    let tiempoRestante = segundosAHMS(Math.ceil((cooldowns[m.sender] + tiempoEspera * 1000 - Date.now()) / 1000))
    m.reply(`> 🎌 Ya has cometido un Crimen recientemente, espera *⏱ ${tiempoRestante}* para cometer tu próximo Crimen y evitar ser atrapado.`,canaloficial)
    return
  }
  
  cooldowns[m.sender] = Date.now()
  
  let senderLimit = users[senderId].limit || 0

  let randomUserId = Object.keys(users)[Math.floor(Math.random() * Object.keys(users).length)]

  while (randomUserId === senderId) {
    randomUserId = Object.keys(users)[Math.floor(Math.random() * Object.keys(users).length)]
  }

  let randomUserLimit = users[randomUserId].limit || 0

  let minAmount = 15
  let maxAmount = 50

  let amountTaken = Math.floor(Math.random() * (maxAmount - minAmount + 1)) + minAmount

  let randomOption = Math.floor(Math.random() * 3)

  switch (randomOption) {
  case 0:
  users[senderId].limit += amountTaken
  users[randomUserId].limit -= amountTaken
  conn.sendMessage(m.chat, {
        text: `> 🎌¡Lograste cometer tu crimen con exito!, acabas de robar *${amountTaken} 💎 Diamantes* a @${randomUserId.split("@")[0]}\n\nSe suman *+${amountTaken} 💎 Diamantes* a ${senderName}.`,
  contextInfo: { 
  mentionedJid: [randomUserId],
  }
  }, { quoted: m },canaloficial)
  break

  case 1:
  let amountSubtracted = Math.min(Math.floor(Math.random() * (senderLimit - minAmount + 1)) + minAmount, maxAmount)
  users[senderId].limit -= amountSubtracted
  conn.reply(m.chat, `> 🎌 No fuiste cuidadoso y te atraparon mientras cometias tu cirme, se restaron *-${amountSubtracted} 💎 Diamantes* a ${senderName}.`, m,canaloficial)
  break

  case 2:
  let smallAmountTaken = Math.min(Math.floor(Math.random() * (randomUserLimit / 2 - minAmount + 1)) + minAmount, maxAmount)
  users[senderId].limit += smallAmountTaken
  users[randomUserId].limit -= smallAmountTaken
  conn.sendMessage(m.chat, {
  text: `> 🎌 Lograste cometer tu crimen con exito, pero te descubrieron y solo lograste tomar *${smallAmountTaken} 💎 Diamantes* de @${randomUserId.split("@")[0]}\n\nSe suman *+${smallAmountTaken} 💎 Diamantes* a ${senderName}.`,
  contextInfo: { 
  mentionedJid: [randomUserId],
  }
  }, { quoted: m },canaloficial)
  break
  }
  
  global.db.write()
}
handler.tags = ['rpg']
handler.help = ['crimen']
handler.command = ['crimen', 'crime']
handler.register = true
handler.group = true

export default handler

function segundosAHMS(segundos) {
  let horas = Math.floor(segundos / 3600)
  let minutos = Math.floor((segundos % 3600) / 60)
  let segundosRestantes = segundos % 60
  return `${minutos} minutos y ${segundosRestantes} segundos`
}
