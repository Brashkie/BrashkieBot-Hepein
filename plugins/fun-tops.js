import util from 'util'
import path from 'path' 


function handler(m, { groupMetadata, command, usedPrefix, conn }) {
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

if (command == 'topgays') {
let vn = './media/gay2.mp3'
let top = `*🌈TOP 10 GAYS/LESBIANAS DEL GRUPO🌈*
    
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
m.reply(top, null, { mentions: conn.parseMention(top) })
//m.reply(top, null, {

//m.reply(conn.sendHydrated(m.chat, `*SON MUY GAYS!!* 🌈`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
//['𝙊𝙩𝙧𝙖 𝙫𝙚𝙯 | 𝘼𝙜𝙖𝙞𝙣 🔮', `${usedPrefix + command}`],
//['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
//], m))
   
//contextInfo: { 
//mentionedJid: [a, b, c, d, e, f, g, h, i, j]
//}})
conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true })}
    
if (command == 'topotakus') {
let vn = './media/otaku.mp3'
let top = `*🌸 TOP 10 OTAKUS DEL GRUPO 🌸*
    
*_1.- 💮 ${user(a)}_* 💮
*_2.- 🌷 ${user(b)}_* 🌷
*_3.- 💮 ${user(c)}_* 💮
*_4.- 🌷 ${user(d)}_* 🌷
*_5.- 💮 ${user(e)}_* 💮
*_6.- 🌷 ${user(f)}_* 🌷
*_7.- 💮 ${user(g)}_* 💮
*_8.- 🌷 ${user(h)}_* 🌷
*_9.- 💮 ${user(i)}_* 💮
*_10.- 🌷 ${user(j)}_* 🌷`
m.reply(top, null, { mentions: conn.parseMention(top) })
//m.reply(top, null, {
//conn.sendHydrated(m.chat, top, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
//['𝙊𝙩𝙧𝙖 𝙫𝙚𝙯 | 𝘼𝙜𝙖𝙞𝙣 🔮', `${usedPrefix + command}`],
//['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
//], m, null, {
//contextInfo: {
//mentionedJid: [a, b, c, d, e, f, g, h, i, j]
//}})
conn.sendFile(m.chat, vn, 'otaku.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})}
   
if (command == 'topintegrantes') {
let top = `*_💎TOP 10 L@S MEJORES INTEGRANTES👑_*
    
*_1.- 💎 ${user(a)}_* 💎
*_2.- 👑 ${user(b)}_* 👑
*_3.- 💎 ${user(c)}_* 💎
*_4.- 👑 ${user(d)}_* 👑
*_5.- 💎 ${user(e)}_* 💎
*_6.- 👑 ${user(f)}_* 👑
*_7.- 💎 ${user(g)}_* 💎
*_8.- 👑 ${user(h)}_* 👑
*_9.- 💎 ${user(i)}_* 💎
*_10.- 👑 ${user(j)}_* 👑`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topintegrante') {
let top = `*_💎TOP 10 L@S MEJORES INTEGRANTES👑_*
    
*_1.- 💎 ${user(a)}_* 💎
*_2.- 👑 ${user(b)}_* 👑
*_3.- 💎 ${user(c)}_* 💎
*_4.- 👑 ${user(d)}_* 👑
*_5.- 💎 ${user(e)}_* 💎
*_6.- 👑 ${user(f)}_* 👑
*_7.- 💎 ${user(g)}_* 💎
*_8.- 👑 ${user(h)}_* 👑
*_9.- 💎 ${user(i)}_* 💎
*_10.- 👑 ${user(j)}_* 👑`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'toplagrasa') {
let top = `*_Uwu TOP 10 LA GRASA Uwu_* 
    
*_1.- Bv ${user(a)} Bv_*
*_2.- :v ${user(b)} :v_*
*_3.- :D ${user(c)} :D_*
*_4.- Owo ${user(d)} Owo_*
*_5.- U.u ${user(e)} U.u_*
*_6.- >:v ${user(f)} >:v_*
*_7.- :'v ${user(g)} :'v_*
*_8.- ._. ${user(h)} ._._*
*_9.- :V ${user(i)} :V_*
*_10.- XD ${user(j)} XD_*`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topgrasa') {
let top = `*_Uwu TOP 10 LA GRASA Uwu_* 
    
*_1.- Bv ${user(a)} Bv_*
*_2.- :v ${user(b)} :v_*
*_3.- :D ${user(c)} :D_*
*_4.- Owo ${user(d)} Owo_*
*_5.- U.u ${user(e)} U.u_*
*_6.- >:v ${user(f)} >:v_*
*_7.- :'v ${user(g)} :'v_*
*_8.- ._. ${user(h)} ._._*
*_9.- :V ${user(i)} :V_*
*_10.- XD ${user(j)} XD_*`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'toppanafrescos') {
let top = `*_👊TOP 10 PANAFRESCOS👊_* 
    
*_1.- 🤑 ${user(a)}_* 🤑
*_2.- 🤙 ${user(b)}_* 🤙
*_3.- 😎 ${user(c)}_* 😎
*_4.- 👌 ${user(d)}_* 👌
*_5.- 🧐 ${user(e)}_* 🧐
*_6.- 😃 ${user(f)}_* 😃
*_7.- 😋 ${user(g)}_* 😋
*_8.- 🤜 ${user(h)}_* 🤜
*_9.- 💪 ${user(i)}_* 💪
*_10.- 😉 ${user(j)}_* 😉`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'toppanafresco') {
let top = `*_👊TOP 10 PANAFRESCOS👊_* 
    
*_1.- 🤑 ${user(a)}_* 🤑
*_2.- 🤙 ${user(b)}_* 🤙
*_3.- 😎 ${user(c)}_* 😎
*_4.- 👌 ${user(d)}_* 👌
*_5.- 🧐 ${user(e)}_* 🧐
*_6.- 😃 ${user(f)}_* 😃
*_7.- 😋 ${user(g)}_* 😋
*_8.- 🤜 ${user(h)}_* 🤜
*_9.- 💪 ${user(i)}_* 💪
*_10.- 😉 ${user(j)}_* 😉`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topshiposters') {
let top = `*_😱TOP 10 SHIPOSTERS DEL GRUPO😱_* 
    
*_1.- 😈 ${user(a)}_* 😈
*_2.- 🤙 ${user(b)}_* 🤙
*_3.- 🥶 ${user(c)}_* 🥶
*_4.- 🤑 ${user(d)}_* 🤑
*_5.- 🥵 ${user(e)}_* 🥵
*_6.- 🤝 ${user(f)}_* 🤝
*_7.- 😟 ${user(g)}_* 😟
*_8.- 😨 ${user(h)}_* 😨
*_9.- 😇 ${user(i)}_* 😇
*_10.- 🤠 ${user(j)}_* 🤠`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topshipost') {
let top = `*_😱TOP 10 SHIPOSTERS DEL GRUPO😱_* 
    
*_1.- 😈 ${user(a)}_* 😈
*_2.- 🤙 ${user(b)}_* 🤙
*_3.- 🥶 ${user(c)}_* 🥶
*_4.- 🤑 ${user(d)}_* 🤑
*_5.- 🥵 ${user(e)}_* 🥵
*_6.- 🤝 ${user(f)}_* 🤝
*_7.- 😟 ${user(g)}_* 😟
*_8.- 😨 ${user(h)}_* 😨
*_9.- 😇 ${user(i)}_* 😇
*_10.- 🤠 ${user(j)}_* 🤠`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'toppajer@s') {
let top = `*_😏TOP L@S MAS PAJEROS/AS DEL GRUPO💦_* 
    
*_1.- 🥵 ${user(a)}_* 💦
*_2.- 🥵 ${user(b)}_* 💦
*_3.- 🥵 ${user(c)}_* 💦
*_4.- 🥵 ${user(d)}_* 💦
*_5.- 🥵 ${user(e)}_* 💦
*_6.- 🥵 ${user(f)}_* 💦
*_7.- 🥵 ${user(g)}_* 💦
*_8.- 🥵 ${user(h)}_* 💦
*_9.- 🥵 ${user(i)}_* 💦
*_10.- 🥵 ${user(j)}_* 💦`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'toplind@s') {
let top = `*_😳TOP L@S MAS LIND@S Y SEXIS DEL GRUPO😳_*
    
*_1.- ✨ ${user(a)}_* ✨
*_2.- ✨ ${user(b)}_* ✨
*_3.- ✨ ${user(c)}_* ✨
*_4.- ✨ ${user(d)}_* ✨
*_5.- ✨ ${user(e)}_* ✨
*_6.- ✨ ${user(f)}_* ✨
*_7.- ✨ ${user(g)}_* ✨
*_8.- ✨ ${user(h)}_* ✨
*_9.- ✨ ${user(i)}_* ✨
*_10.- ✨ ${user(j)}_* ✨`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'toplindos') {
let top = `*_😳TOP L@S MAS LIND@S Y SEXIS DEL GRUPO😳_*
    
*_1.- ✨ ${user(a)}_* ✨
*_2.- ✨ ${user(b)}_* ✨
*_3.- ✨ ${user(c)}_* ✨
*_4.- ✨ ${user(d)}_* ✨
*_5.- ✨ ${user(e)}_* ✨
*_6.- ✨ ${user(f)}_* ✨
*_7.- ✨ ${user(g)}_* ✨
*_8.- ✨ ${user(h)}_* ✨
*_9.- ✨ ${user(i)}_* ✨
*_10.- ✨ ${user(j)}_* ✨`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topput@s') {
let top = `*_😏TOP L@S MAS PUT@S DEL GRUPO SON🔥_* 
    
*_1.- 👉 ${user(a)}_* 👌
*_2.- 👉 ${user(b)}_* 👌
*_3.- 👉 ${user(c)}_* 👌
*_4.- 👉 ${user(d)}_* 👌
*_5.- 👉 ${user(e)}_* 👌
*_6.- 👉 ${user(f)}_* 👌
*_7.- 👉 ${user(g)}_* 👌
*_8.- 👉 ${user(h)}_* 👌
*_9.- 👉 ${user(i)}_* 👌
*_10.- 👉 ${user(j)}_* 👌`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topfamosos') {
let top = `*_🌟TOP PERSONAS FAMOSAS EN EL GRUPO🌟_* 
    
*_1.- 🛫 ${user(a)}_* 🛫
*_2.- 🥂 ${user(b)}_* 🥂
*_3.- 🤩 ${user(c)}_* 🤩
*_4.- 🛫 ${user(d)}_* 🛫
*_5.- 🥂 ${user(e)}_* 🥂
*_6.- 🤩 ${user(f)}_* 🤩
*_7.- 🛫 ${user(g)}_* 🛫
*_8.- 🥂 ${user(h)}_* 🥂
*_9.- 🤩 ${user(i)}_* 🤩
*_10.- 🛫 ${user(j)}_* 🛫`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topfamos@s') {
let top = `*_🌟TOP PERSONAS FAMOSAS EN EL GRUPO🌟_* 
    
*_1.- 🛫 ${user(a)}_* 🛫
*_2.- 🥂 ${user(b)}_* 🥂
*_3.- 🤩 ${user(c)}_* 🤩
*_4.- 🛫 ${user(d)}_* 🛫
*_5.- 🥂 ${user(e)}_* 🥂
*_6.- 🤩 ${user(f)}_* 🤩
*_7.- 🛫 ${user(g)}_* 🛫
*_8.- 🥂 ${user(h)}_* 🥂
*_9.- 🤩 ${user(i)}_* 🤩
*_10.- 🛫 ${user(j)}_* 🛫`
m.reply(top, null, { mentions: conn.parseMention(top) })}

if (command == 'topcallados') {
let top = `*_😑TOP PERSONAS CALLADOS EN EL GRUPO😶_* 
    
*_1.- 👉 ${user(a)}_* 🤐
*_2.- 👉 ${user(b)}_* 🤐
*_3.- 👉 ${user(c)}_* 🤐
*_4.- 👉 ${user(d)}_* 🤐
*_5.- 👉 ${user(e)}_* 🤐
*_6.- 👉 ${user(f)}_* 🤐
*_7.- 👉 ${user(g)}_* 🤐
*_8.- 👉 ${user(h)}_* 🤐
*_9.- 👉 ${user(i)}_* 🤐
*_10.- 👉 ${user(j)}_* 🤐`
m.reply(top, null, { mentions: conn.parseMention(top) })}

if (command == 'tophacker') {
let top = `*_🌐TOP PERSONAS HACKER DEL GRUPO SON☠️_* 
    
*_1.- 💀 ${user(a)}_* 🧑‍💻
Sabe hackear cuenta bancaria :'v

*_2.- 💀 ${user(b)}_* 🧑‍💻
Nos robara informacion de nosotros :'v

*_3.- 💀 ${user(c)}_* 🧑‍💻
Puede robar nuestra cuenta de google :'v

*_4.- 💀 ${user(d)}_* 🧑‍💻
Sabe donde vivimos :'v

*_5.- 💀 ${user(e)}_* 🧑‍💻
Podria robar grupos de Whatsapp :'v

*_6.- 💀 ${user(f)}_* 🧑‍💻
Trabaja con la mafia :'v

*_7.- 💀 ${user(g)}_* 🧑‍💻
Tiene armas ilegales :'v

*_8.- 💀 ${user(h)}_* 🧑‍💻
Podria robar informacion a EE.UU :'v

*_9.- 💀 ${user(i)}_* 🧑‍💻
Vende drogas ilegales :'v

*_10.- 💀 ${user(j)}_* 🧑‍💻
Crea programas pirateados :'v`
m.reply(top, null, { mentions: conn.parseMention(top) })}

if (command == 'tophorribles') {
let top = `*_🤢TOP PERSONAS HORRIBLES DEL GRUPO SON💩_* 
    
*_1.- 👉 ${user(a)}_* 🤢
*_2.- 👉 ${user(b)}_* 🤢
*_3.- 👉 ${user(c)}_* 🤢
*_4.- 👉 ${user(d)}_* 🤢
*_5.- 👉 ${user(e)}_* 🤢
*_6.- 👉 ${user(f)}_* 🤢
*_7.- 👉 ${user(g)}_* 🤢
*_8.- 👉 ${user(h)}_* 🤢
*_9.- 👉 ${user(i)}_* 🤢
*_10.- 👉 ${user(j)}_* 🤢`
m.reply(top, null, { mentions: conn.parseMention(top) })}

if (command == 'topinfiel') {
let top = `*_😢TOP PERSONAS INFIELES DEL GRUPO SON👿_* 
    
*_1.- 👉 ${user(a)}_* 😈
*_2.- 👉 ${user(b)}_* 😈
*_3.- 👉 ${user(c)}_* 😈
*_4.- 👉 ${user(d)}_* 😈
*_5.- 👉 ${user(e)}_* 😈
*_6.- 👉 ${user(f)}_* 😈
*_7.- 👉 ${user(g)}_* 😈
*_8.- 👉 ${user(h)}_* 😈
*_9.- 👉 ${user(i)}_* 😈
*_10.- 👉 ${user(j)}_* 😈`
m.reply(top, null, { mentions: conn.parseMention(top) })}

if (command == 'topfiel') {
let top = `*_🫶TOP PERSONAS MAS FIELES DEL GRUPO SON😍_* 
    
*_1.- 👉 ${user(a)}_* 😇
*_2.- 👉 ${user(b)}_* 😇
*_3.- 👉 ${user(c)}_* 😇
*_4.- 👉 ${user(d)}_* 😇
*_5.- 👉 ${user(e)}_* 😇
*_6.- 👉 ${user(f)}_* 😇
*_7.- 👉 ${user(g)}_* 😇
*_8.- 👉 ${user(h)}_* 😇
*_9.- 👉 ${user(i)}_* 😇
*_10.- 👉 ${user(j)}_* 😇`
m.reply(top, null, { mentions: conn.parseMention(top) })}

if (command == 'toptonto') {
let top = `*_😵‍💫TOP PERSONAS MAS IMBECILES DEL GRUPO SON🤪_* 
    
*_1.- 👉 ${user(a)}_* 🤯
*_2.- 👉 ${user(b)}_* 🤯
*_3.- 👉 ${user(c)}_* 🤯
*_4.- 👉 ${user(d)}_* 🤯
*_5.- 👉 ${user(e)}_* 🤯
*_6.- 👉 ${user(f)}_* 🤯
*_7.- 👉 ${user(g)}_* 🤯
*_8.- 👉 ${user(h)}_* 🤯
*_9.- 👉 ${user(i)}_* 🤯
*_10.- 👉 ${user(j)}_* 🤯`
m.reply(top, null, { mentions: conn.parseMention(top) })}

if (command == 'topvirgen') {
let top = `*_😢TOP PERSONAS VIRGENES DEL GRUPO SON😢_* 
    
*_1.- 🫵 ${user(a)}_* 😰
*_2.- 🫵 ${user(b)}_* 😰
*_3.- 🫵 ${user(c)}_* 😰
*_4.- 🫵 ${user(d)}_* 😰
*_5.- 🫵 ${user(e)}_* 😰
*_6.- 👉 ${user(f)}_* 😰
*_7.- 🫵 ${user(g)}_* 😰
*_8.- 🫵 ${user(h)}_* 😰
*_9.- 🫵 ${user(i)}_* 😰
*_10.- 🫵 ${user(j)}_* 😰`
m.reply(top, null, { mentions: conn.parseMention(top) })}

if (command == 'topnegros' || command == 'topnegro') {
let top = `*_😩TOP LAS PERSONAS NEGR@S DEL GRUPO SON⚫_* 
    
*_1.- 🫵🏿 ${user(a)}_* 👶🏿
*_2.- 🫵🏿 ${user(b)}_* 👶🏿
*_3.- 🫵🏿 ${user(c)}_* 👶🏿
*_4.- 🫵🏿 ${user(d)}_* 👶🏿
*_5.- 🫵🏿 ${user(e)}_* 👶🏿
*_6.- 🫵🏿 ${user(f)}_* 👶🏿
*_7.- 🫵🏿 ${user(g)}_* 👶🏿
*_8.- 🫵🏿 ${user(h)}_* 👶🏿
*_9.- 🫵🏿 ${user(i)}_* 👶🏿
*_10.- 🫵🏿 ${user(j)}_* 👶🏿`
m.reply(top, null, { mentions: conn.parseMention(top) })}

if (command == 'topdrogo' || command == 'topdrogos') {
let top = `*_😔TOP LAS PERSONAS MAS DROGOS DEL GRUPO SON😤_* 
    
*_1.- 🫵 ${user(a)}_* 😵‍💫
*_2.- 🫵 ${user(b)}_* 😵‍💫
*_3.- 🫵 ${user(c)}_* 😵‍💫
*_4.- 🫵 ${user(d)}_* 😵‍💫
*_5.- 🫵 ${user(e)}_* 😵‍💫
*_6.- 🫵 ${user(f)}_* 😵‍💫
*_7.- 🫵 ${user(g)}_* 😵‍💫
*_8.- 🫵 ${user(h)}_* 😵‍💫
*_9.- 🫵 ${user(i)}_* 😵‍💫
*_10.- 🫵 ${user(j)}_* 😵‍💫`
m.reply(top, null, { mentions: conn.parseMention(top) })}

if (command == 'topodio') {
let top = `*_😑TOP LAS PERSONAS MAS ODIADO DEL GRUPO SON🙄_* 
    
*_1.- 🫵 ${user(a)}_* 🤬
*_2.- 🫵 ${user(b)}_* 🤬
*_3.- 🫵 ${user(c)}_* 🤬
*_4.- 🫵 ${user(d)}_* 🤬
*_5.- 🫵 ${user(e)}_* 🤬
*_6.- 🫵 ${user(f)}_* 🤬
*_7.- 🫵 ${user(g)}_* 🤬
*_8.- 🫵 ${user(h)}_* 🤬
*_9.- 🫵 ${user(i)}_* 🤬
*_10.- 🫵 ${user(j)}_* 🤬`
m.reply(top, null, { mentions: conn.parseMention(top) })}

if (command == 'topamor') {
let top = `*_🫣TOP LAS PERSONAS MAS AMADO DEL GRUPO SON😘_* 
    
*_1.- 🫵 ${user(a)}_* 😍
*_2.- 🫵 ${user(b)}_* 😍
*_3.- 🫵 ${user(c)}_* 😍
*_4.- 🫵 ${user(d)}_* 😍
*_5.- 🫵 ${user(e)}_* 😍
*_6.- 🫵 ${user(f)}_* 😍
*_7.- 🫵 ${user(g)}_* 😍
*_8.- 🫵 ${user(h)}_* 😍
*_9.- 🫵 ${user(i)}_* 😍
*_10.- 🫵 ${user(j)}_* 😍`
m.reply(top, null, { mentions: conn.parseMention(top) })}

if (command == 'topculon') {
let top = `*_😏TOP LAS PERSONAS CULONES DEL GRUPO SON🥵_* 
    
*_1.- 🫵 ${user(a)}_* 🍑
*_2.- 🫵 ${user(b)}_* 🍑
*_3.- 🫵 ${user(c)}_* 🍑
*_4.- 🫵 ${user(d)}_* 🍑
*_5.- 🫵 ${user(e)}_* 🍑
*_6.- 🫵 ${user(f)}_* 🍑
*_7.- 🫵 ${user(g)}_* 🍑
*_8.- 🫵 ${user(h)}_* 🍑
*_9.- 🫵 ${user(i)}_* 🍑
*_10.- 🫵 ${user(j)}_* 🍑`
m.reply(top, null, { mentions: conn.parseMention(top) })}

if (command == 'tophetero') {
let top = `*_💗TOP LAS PERSONAS HETEROS DEL GRUPO SON🤗_* 
    
*_1.- 🫵 ${user(a)}_* 👫
*_2.- 🫵 ${user(b)}_* 👫
*_3.- 🫵 ${user(c)}_* 👫
*_4.- 🫵 ${user(d)}_* 👫
*_5.- 🫵 ${user(e)}_* 👫
*_6.- 🫵 ${user(f)}_* 👫
*_7.- 🫵 ${user(g)}_* 👫
*_8.- 🫵 ${user(h)}_* 👫
*_9.- 🫵 ${user(i)}_* 👫
*_10.- 🫵 ${user(j)}_* 👫`
m.reply(top, null, { mentions: conn.parseMention(top) })}

if (command == 'topvago') {
let top = `*_🙄TOP LAS PERSONAS MAS VAGOS DEL GRUPO SON😪_* 
    
*_1.- 🫵 ${user(a)}_* 🫠
*_2.- 🫵 ${user(b)}_* 🫠
*_3.- 🫵 ${user(c)}_* 🫠
*_4.- 🫵 ${user(d)}_* 🫠
*_5.- 🫵 ${user(e)}_* 🫠
*_6.- 🫵 ${user(f)}_* 🫠
*_7.- 🫵 ${user(g)}_* 🫠
*_8.- 🫵 ${user(h)}_* 🫠
*_9.- 🫵 ${user(i)}_* 🫠
*_10.- 🫵 ${user(j)}_* 🫠`
m.reply(top, null, { mentions: conn.parseMention(top) })}

if (command == 'topchambeo') {
let top = `*_💪TOP LAS PERSONAS MAS CHAMBEADORES DEL GRUPO SON💪_* 
    
*_1.- 🫵 ${user(a)}_* 🤑
*_2.- 🫵 ${user(b)}_* 🤑
*_3.- 🫵 ${user(c)}_* 🤑
*_4.- 🫵 ${user(d)}_* 🤑
*_5.- 🫵 ${user(e)}_* 🤑
*_6.- 🫵 ${user(f)}_* 🤑
*_7.- 🫵 ${user(g)}_* 🤑
*_8.- 🫵 ${user(h)}_* 🤑
*_9.- 🫵 ${user(i)}_* 🤑
*_10.- 🫵 ${user(j)}_* 🤑`
m.reply(top, null, { mentions: conn.parseMention(top) })}

if (command == 'topinsano') {
let top = `*_👻TOP LAS PERSONAS INSANOS DEL GRUPO SON👺_* 
    
*_1.- 🫵 ${user(a)}_* 👹
*_2.- 🫵 ${user(b)}_* 👹
*_3.- 🫵 ${user(c)}_* 👹
*_4.- 🫵 ${user(d)}_* 👹
*_5.- 🫵 ${user(e)}_* 👹
*_6.- 🫵 ${user(f)}_* 👹
*_7.- 🫵 ${user(g)}_* 👹
*_8.- 🫵 ${user(h)}_* 👹
*_9.- 🫵 ${user(i)}_* 👹
*_10.- 🫵 ${user(j)}_* 👹`
m.reply(top, null, { mentions: conn.parseMention(top) })}

if (command == 'topgord@') {
let top = `*_🍽️TOP LAS PERSONAS OBES@S DEL GRUPO SON🍽️_* 
    
*_1.- 🫵 ${user(a)}_* 🍟🍔
*_2.- 🫵 ${user(b)}_* 🍟🍔
*_3.- 🫵 ${user(c)}_* 🍟🍔
*_4.- 🫵 ${user(d)}_* 🍟🍔
*_5.- 🫵 ${user(e)}_* 🍟🍔
*_6.- 🫵 ${user(f)}_* 🍟🍔
*_7.- 🫵 ${user(g)}_* 🍟🍔
*_8.- 🫵 ${user(h)}_* 🍟🍔
*_9.- 🫵 ${user(i)}_* 🍟🍔
*_10.- 🫵 ${user(j)}_* 🍟🍔`
m.reply(top, null, { mentions: conn.parseMention(top) })}


if (command == 'topvillan@') {
let top = `*_😈TOP LAS PERSONAS VILLAN@S DEL GRUPO SON😈_* 
    
*_1.- 🫵 ${user(a)}_* 👹
*_2.- 🫵 ${user(b)}_* 👹
*_3.- 🫵 ${user(c)}_* 👹
*_4.- 🫵 ${user(d)}_* 👹
*_5.- 🫵 ${user(e)}_* 👹
*_6.- 🫵 ${user(f)}_* 👹
*_7.- 🫵 ${user(g)}_* 👹
*_8.- 🫵 ${user(h)}_* 👹
*_9.- 🫵 ${user(i)}_* 👹
*_10.- 🫵 ${user(j)}_* 👹`
m.reply(top, null, { mentions: conn.parseMention(top) })}


if (command == 'topalt@') {
let top = `*_🍽️TOP LAS PERSONAS ALT@S DEL GRUPO SON🍽️_* 
    
*_1.- 🫵 ${user(a)}_* 🫡
*_2.- 🫵 ${user(b)}_* 🫡
*_3.- 🫵 ${user(c)}_* 🫡
*_4.- 🫵 ${user(d)}_* 🫡
*_5.- 🫵 ${user(e)}_* 🫡
*_6.- 🫵 ${user(f)}_* 🫡
*_7.- 🫵 ${user(g)}_* 🫡
*_8.- 🫵 ${user(h)}_* 🫡
*_9.- 🫵 ${user(i)}_* 🫡
*_10.- 🫵 ${user(j)}_* 🫡`
m.reply(top, null, { mentions: conn.parseMention(top) })}


if (command == 'topmamadisim@') {
let top = `*_👀TOP LAS PERSONAS MAMADISIM@S DEL GRUPO SON🏋️_* 
    
*_1.- 🫵 ${user(a)}_* 💪🦵
*_2.- 🫵 ${user(b)}_* 💪🦵
*_3.- 🫵 ${user(c)}_* 💪🦵
*_4.- 🫵 ${user(d)}_* 💪🦵
*_5.- 🫵 ${user(e)}_* 💪🦵
*_6.- 🫵 ${user(f)}_* 💪🦵
*_7.- 🫵 ${user(g)}_* 💪🦵
*_8.- 🫵 ${user(h)}_* 💪🦵
*_9.- 🫵 ${user(i)}_* 💪🦵
*_10.- 🫵 ${user(j)}_* 💪🦵`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topparejas') {
let top = `*_😍 Las 5 maravillosas parejas del grupo 😍_*
    
*_1.- ${user(a)} 💘 ${user(b)}_* 
Que hermosa pareja 💖, me invitan a su Boda 🛐

*_2.- ${user(c)} 💘 ${user(d)}_*  
🌹 Ustedes se merecen lo mejor del mundo 💞

*_3.- ${user(e)} 💘 ${user(f)}_* 
Tan enamorados 😍, para cuando la familia 🥰

*_4.- ${user(g)} 💘 ${user(h)}_* 
💗 Decreto que ustedes son la pareja del Año 💗 

*_5.- ${user(i)} 💘 ${user(j)}_* 
Genial! 💝, están de Luna de miel 🥵✨❤️‍🔥`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'top5parejas') {
let top = `*_😍 Las 5 maravillosas parejas del grupo 😍_*
    
*_1.- ${user(a)} 💘 ${user(b)}_* 
Que hermosa pareja 💖, me invitan a su Boda 🛐

*_2.- ${user(c)} 💘 ${user(d)}_*  
🌹 Ustedes se merecen lo mejor del mundo 💞

*_3.- ${user(e)} 💘 ${user(f)}_* 
Tan enamorados 😍, para cuando la familia 🥰

*_4.- ${user(g)} 💘 ${user(h)}_* 
💗 Decreto que ustedes son la pareja del Año 💗 

*_5.- ${user(i)} 💘 ${user(j)}_* 
Genial! 💝, están de Luna de miel 🥵✨❤️‍🔥`
m.reply(top, null, { mentions: conn.parseMention(top) })}
  
}
handler.help = handler.command = ['topgays', 'topotakus', 'topintegrantes', 'topintegrante', 'toplagrasa', 'topgrasa', 'toppanafrescos', 'toppanafresco', 'topshiposters', 'topshipost', 'toppajer@s', 'toplindos', 'toplind@s', 'topput@s', 'topfamosos', 'topfamos@s', 'topparejas', 'top5parejas', 'tophacker', 'topcallados', 'tophorribles', 'topinfiel', 'topfiel', 'toptonto', 'topvirgen','topnegro','topnegros','topdrogo','topdrogos','topodio','topculon','topamor','tophetero','topchambeo','topgord@','topinsano','topvago','topvillan@','topalt@','topmamadisim@']
handler.tags = ['games']
handler.group = true
export default handler  

