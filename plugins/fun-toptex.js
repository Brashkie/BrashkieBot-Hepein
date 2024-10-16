/*import util from 'util'
import path from 'path' 


function handler(m, { groupMetadata, command, usedPrefix, conn, text }) {
   let user = a => '@' + a.split('@')[0] //'@' + a.split('@')[0]
   
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b = ps.getRandom()
let c = ps.getRandom()
let d = ps.getRandom()
let e = ps.getRandom()
let f = ps.getRandom()
let g = ps.getRandom()
let h = ps.getRandom()
let i = ps.getRandom()
let j = ps.getRandom()


let tops = `*TOP ${text}*
    
*_1.- 🏳️‍🌈 ${user(a)}_* 🏳️‍🌈
*_2.- 🪂 ${user(b)}_* 🪂
*_3.- 🪁 ${user(c)}_* 🪁
*_4.- 🏳️‍🌈 ${user(d)}_* 🏳️‍🌈
*_5.- 🪂 ${user(e)}_* 🪂
*_6.- 🪁 ${user(f)}_* 🪁
*_7.- 🏳️‍🌈 ${user(g)}_* 🏳️‍🌈
*_8.- 🪂 ${user(h)}_* 🪂
*_9.- 🪁 ${user(i)}_* 🪁
*_10.- 🏳️‍🌈 ${user(j)}_* 🏳️‍🌈`
m.reply(tops, null, { mentions: conn.parseMention(tops) })

}

handler.help = handler.command = ['tops']
handler.tags = ['games']
handler.group = true
export default handler */



import util from 'util'
import path from 'path' 

function handler(m, { groupMetadata, command, usedPrefix, conn, text }) {
   let user = a => '@' + a.split('@')[0] 
   
   let ps = groupMetadata.participants.map(v => v.id)
   let a = ps.getRandom()
   let b = ps.getRandom()
   let c = ps.getRandom()
   let d = ps.getRandom()
   let e = ps.getRandom()
   let f = ps.getRandom()
   let g = ps.getRandom()
   let h = ps.getRandom()
   let i = ps.getRandom()
   let j = ps.getRandom()

   // Array de emojis
   const emojis = ['🏳️‍🌈', '🪂', '🪁', '🎉', '🏆', '🏅', '🥇', '🥈', '🥉', '🎁', '✨','😀','😃','😄','😁','😆','😅','🤣','😂','🙂','🙃','🫠','😉','😊','😇','🥰','😍','🤩','😘','😗','☺️','😚','😙','🥲','😛','😜','🤪','😝','🤑','🤗','🤭','🫢','🫣','🤫','🤔','🫡','🤐','🤨','😐','😑','😶','🫥','😶‍🌫️','😏','😒','🙄','😬','😮‍💨','🤥','🫨','🙂‍↔️','🙂‍↕️','😌','😔','😪','🤤','😷','🤒','🤕','🤢','🤮','🤧','🥵','🥶','🥴','😵','😵‍💫','🤯','🤠','🥳','🥸','😎','🧐','😕','🫤','😟','🙁','☹️','😮','😯','😳','😲','🥺','🥹','😦','😧','😨','😰','😥','😢','😭','😱','😖','😣','😞','😓','😩','😫','🥱','😤','😡','😠','🤬','😈','👿','💀','☠️','💩','🤡','👹','👻','👽','👾','🤖','😺','😸','😹','😻','😼','😽','🙀','😿','😾']

   // Función para seleccionar un emoji al azar
   function getRandomEmoji() {
       return emojis[Math.floor(Math.random() * emojis.length)];
   }

   let tops = `*TOP ${text}*
    
*_1.- ${getRandomEmoji()} ${user(a)} ${getRandomEmoji()}_*
*_2.- ${getRandomEmoji()} ${user(b)} ${getRandomEmoji()}_*
*_3.- ${getRandomEmoji()} ${user(c)} ${getRandomEmoji()}_*
*_4.- ${getRandomEmoji()} ${user(d)} ${getRandomEmoji()}_*
*_5.- ${getRandomEmoji()} ${user(e)} ${getRandomEmoji()}_*
*_6.- ${getRandomEmoji()} ${user(f)} ${getRandomEmoji()}_*
*_7.- ${getRandomEmoji()} ${user(g)} ${getRandomEmoji()}_*
*_8.- ${getRandomEmoji()} ${user(h)} ${getRandomEmoji()}_*
*_9.- ${getRandomEmoji()} ${user(i)} ${getRandomEmoji()}_*
*_10.- ${getRandomEmoji()} ${user(j)} ${getRandomEmoji()}_*`
   m.reply(tops, null, { mentions: conn.parseMention(tops) })

}

handler.help = handler.command = ['tops']
handler.tags = ['games']
handler.group = true
export default handler
