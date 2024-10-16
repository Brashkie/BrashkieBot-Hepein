//Fue creado por BrashkieBot

import fs from 'fs'  
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
import util from 'util'
import path from 'path' 

let handler = async (m, { conn, usedPrefix, usedPrefix: _p, participants, groupMetadata, text, command }) => {
    //try{}
    if (command==='simbcommon'){
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let toUser = `${m.sender.split("@")[0]}`
    let menu = '      █▓▒░ 𝗦𝗜𝗠𝗕𝗢𝗟𝗢𝗦 𝗖𝗢𝗠𝗨𝗡𝗘𝗦 ░▒▓█\n\n> 𒅒ꜱɪᴍʙᴏʟᴏꜱ ᴅᴇ ᴀᴊᴇᴅʀᴇᴢ\n`♔` `♕` `♖` `♗` `♘` `♙` `♚` `♛` `♜` `♝` `♞` `♟`\n> 𒅒ᴍᴜꜱɪᴄ ɴᴏᴛᴇ ꜱɪᴍʙᴏʟᴏꜱ\n`♩` `♪` `♫` `♬` `♭` `♮` `♯` `𝄞` `𝄡` `𝄢` `𝄪` `𝄫` `🎵` `🎶` `🎼` `𓏢`\n> 𒅒ꜱɪᴍʙᴏʟᴏꜱ ᴅᴇ ᴛɪᴇᴍᴘᴏ\n`ϟ` `☀` `☁` `☂` `☃` `⛆` `⛇` `⛈︎` `☄` `☉` `☼` `☽` `☾` `♁` `♨` `❄` `❅` `❆` `༄` `࿓` `𐓷` `𐓏` `𖤓` `𖣔`\n> 𒅒ꜱɪᴍʙᴏʟᴏꜱ ᴅᴇ ɴᴇɢᴏᴄɪᴏꜱ\n`©` `®` `℗` `℠` `™` `℡` `℻` `℀` `℁` `℅` `℆`\n> 𒅒ꜱɪᴍʙᴏʟᴏꜱ ᴅᴇ ᴏʙᴊᴇᴛᴏꜱ\n`☏` `✁` `✂` `✃` `✄` `✆` `✇` `✈` `✉` `✎` `✏` `✐` `✑` `✒` `𓍝` `⚐` `⚑` `⚖` `⚗` `⚿` `⛟` `⛨` `⛫` `⛾` `⛿` `⎈` `࿄` `𖠦` `𖠿` `ꗃ` `𓄲` `𓊔` `𖤘` `𖣘` `߷` `𖠚` `𖠜` `𖡡` `𖥣` `𖥔` `𖥠` `⌖` `⊹` `𓊝` `𖠎` `𖡌` `𖣳` `𖤠` `𖥈` `𖥩` `𖧶` `ꚰ` `⛀` `⛁` `⛂` `⛃`\n> 𒅒ꜱɪᴍʙᴏʟᴏꜱ ᴛᴇᴄɴɪᴄᴏꜱ\n`⏎` `⇧` `⏏` `⌂` `⌘` `⎋` `⊞` `⌨` `↹` `⌥` `⌫` `` `⎗` `⎘` `⎙` `⎵` `⇥`\n> 𒅒ᴇᴍᴏᴊɪ ᴍᴏɴᴏᴄʀᴏᴍᴀᴛɪᴄᴏ\n`☺︎` `☹︎` `☠︎` `❣︎` `❤︎` `☘︎` `⛸︎` `♠︎` `♥︎` `♦︎` `♣︎` `♟︎` `⛷︎` `⛰︎` `⛩︎` `♨︎` `⛴︎` `✈︎` `☀︎` `⏱︎` `⏲︎` `☁︎` `⛈︎` `☂︎` `⛱︎` `❄︎` `☃︎` `☄︎` `⛑︎` `☎︎` `⌨︎` `✏︎` `✒︎` `✉︎` `⬇︎` `↙︎` `⬅︎` `↖︎` `↕︎` `↔︎` `↩︎` `↪︎` `⤴︎` `⤵︎` `⚛︎` `✡︎` `☸︎` `☯︎` `✝︎` `☦︎` `☪︎` `☮︎` `▶︎` `⏭︎` `⏯︎` `◀︎` `⏮︎` `⏸︎` `⏹︎` `⏺︎` `⏏︎` `♀︎` `♂︎` `⚧︎` `✖︎` `♾︎` `‼︎` `⁉︎` `⚕︎` `♻︎` `⚜︎` `☑︎` `✔︎` `〽︎` `✳︎` `✴︎` `❇︎` `©︎` `®︎` `™︎` `🅰︎` `🅱︎` `ℹ︎` `Ⓜ︎` `🅾︎` `🅿︎` `🈂︎` `🈷︎` `㊗︎` `㊙︎` `◼︎` `◻︎` `▪︎` `▫︎`\n> 𒅒ꜱɪᴍʙᴏʟᴏꜱ ᴠᴀʀɪᴏꜱ\n`⛐` `⛍` `⛕` `⛖` `⛗` `⛘` `⛙` `⛜` `⛠` `⛚` `⛛` `⛞` `⛡` `♲` `♳` `♴` `♵` `♶` `♷` `♸` `♹` `♺` `♻` `♼` `♽` `⚬` `⚭` `⚮` `⚯` `⛻` `⛼` `⛬` `⛭` `⛮` `⛯`\n> 𒅒ᴍᴇɴᴜ\n`☰` `≡` `Ξ` `㊂` `≣` `⁝` `⋮` `︙` `⦙` `⁞` `⋯` `…` `∷` `▲` `▼` `▶` `△` `▽` `▷` `⌃` `⌄` `︿` `﹀` `︽` `︾` `⌵` `𓏬` `𓃑` `𓏧` `⸬` `⛶`\n> 𒅒ꜱɪᴍʙᴏʟᴏꜱ ᴅᴇʟ ᴢᴏᴅɪᴀᴄᴏ\n`♓` `♒` `♑` `♐` `♏` `♎` `♍` `♌` `♋` `♊` `♉` `♈` `☉` `☽` `☿` `♀` `⊕` `♁` `♂` `♃` `♄` `♅` `⛢` `♆` `♇`\n> 𒅒ꜱɪᴍʙᴏʟᴏꜱ ᴅᴇ ᴍᴀʀᴄᴀ\n`✓` `✔` `✖` `✗` `✘` `∛` `∜` `⍻` `☐` `☑` `☒` `□` `■` `○` `●` `༝` `྾` `∨` `🆅` `🆇` `🅥` `🅧` `⊗`\n> 𒅒ꜱɪᴍʙᴏʟᴏꜱ ᴅᴇ ʟᴏꜱ ᴘᴀʟᴏꜱ ᴅᴇ ʟᴀ ʙᴀʀᴀᴊᴀ\n`♡` `♢` `♤` `♧` `♣` `♦` `♥` `♠` `🂠` `🂡` `🂢` `🂣` `🂤` `🂥` `🂦` `🂧` `🂨` `🂩` `🂪` `🂫` `🂬` `🂭` `🂮` `🂱` `🂲` `🂳` `🂴` `🂵` `🂶` `🂷` `🂸` `🂹` `🂺` `🂻` `🂼` `🂽` `🂾` `🃁` `🃂` `🃃` `🃄` `🃅` `🃆` `🃇` `🃈` `🃉` `🃊` `🃋` `🃌` `🃍` `🃎` `🃑` `🃒` `🃓` `🃔` `🃕` `🃖` `🃗` `🃘` `🃙` `🃚` `🃛` `🃜` `🃝` `🃞` `🃟`\n> 𒅒ꜱɪᴍʙᴏʟᴏꜱ ᴅᴇ ᴅᴀᴅᴏꜱ\n`⚀` `⚁` `⚂` `⚃` `⚄` `⚅`\n> 𒅒ꜱɪᴍʙᴏʟᴏꜱ ᴅᴇ ᴜɴɪᴅᴀᴅ\n`μ` `°` `℃` `℉` `㎍` `㎎` `㎏` `℥` `㏌` `㎚` `㎛` `㎜` `㎝` `㎞` `² `³` `㎖` `㎗` `㎘` `㏄` `㏖` `㏒` `㎅` `㎆` `㎇` `㎈` `㎉` `㎐` `㎑` `㎒` `㎓` `㎾` `Ω` `㏑` `㏈` `㏐` `㏂` `㏘` `㎳` `㎭` `㏅` `㎪` `㏗` `′` `″`\n> 𒅒ꜱɪᴍʙᴏʟᴏꜱ ɴᴜᴍᴇʀɪᴄᴏꜱ\n`Ⅰ` `Ⅱ` `Ⅲ` `Ⅳ` `Ⅴ` `Ⅵ` `Ⅶ` `Ⅷ` `Ⅸ` `Ⅹ` `Ⅺ` `Ⅻ` `ⅰ` `ⅱ` `ⅲ` `ⅳ` `ⅴ` `ⅵ` `ⅶ` `ⅷ` `ⅸ` `ⅹ` `ⅺ` `ⅻ` `⓪` `①` `②` `③` `④` `⑤` `⑥` `⑦` `⑧` `⑨` `⑩` `⓵` `⓶` `⓷` `⓸` `⓹` `⓺` `⓻` `⓼` `⓽` `⓾` `➀` `➁` `➂` `➃` `➄` `➅` `➆` `➇` `➈` `➉` `➊` `➋` `➌` `➍` `➎` `➏` `➐` `➑` `➒` `➓` `⑴` `⑵` `⑶` `⑷` `⑸` `⑹` `⑺` `⑻` `⑼` `⑽` `⓿` `❶` `❷` `❸` `❹` `❺` `❻` `❼` `❽` `❾` `❿` `㈠` `㈡` `㈢` `㈣` `㈤` `㈥` `㈦` `㈧` `㈨` `㈩` `㊀` `㊁` `㊂` `㊃` `㊄` `㊅` `㊆` `㊇` `㊈` `㊉` `０` `１` `２` `３` `４` `５` `６` `７` `８` `９` `𝟬` `𝟭` `𝟮` `𝟯` `𝟰` `𝟱` `𝟲` `𝟳` `𝟴` `𝟵`\n\n『••[𒅒𝗕𝗿𝗮𝘀𝗵𝗸𝗶𝗲𝗕𝗼𝘁 : 𝗕𝗿𝗮𝘀𝗵𝗸𝗶𝗲 𝗭𝗲𝗶𝘁𝘀𝗶𒅒]••』'
    const imageUrls = ['https://telegra.ph/file/04b034b5364357adcfc60.png']
    
    await conn.sendMessage(m.chat, { image: { url: imageUrls }, caption: menu, mentions: [m.sender, who] })}
    
    if (command==='simbpopular'){
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let toUser = `${m.sender.split("@")[0]}`
    let menu = '      █▓▒░ 𝗦𝗜𝗠𝗕𝗢𝗟𝗢𝗦 𝗣𝗢𝗣𝗨𝗟𝗔𝗥𝗘𝗦 ░▒▓█\n\n> 𒅒ꜱɪᴍʙᴏʟᴏꜱ ALLS\n`ღ` `•` `⁂` `€` `™` `↑` `→` `↓` `⇝` `√` `∞` `░` `▲` `▶` `◀` `●` `☀` `☁` `☃` `☂` `☄` `★` `☆` `☉` `☐` `☑` `☚` `☛` `☜` `☝` `☞` `☟` `☠` `☢` `☣` `☪` `☮` `☯` `☸` `☹` `☺` `☻` `☼` `☽` `☾` `♔` `♕` `♖` `♗` `♘` `♚` `♛` `♜` `♝` `♟` `♨` `♡` `♩` `♪` `♫` `♬` `✈` `✉` `✎` `✓` `✔` `✘` `✚` `✞` `✟` `✡` `✠` `✦` `✧` `✩` `✪` `✮` `✯` `✹` `✿` `❀` `❁` `❂` `❄` `❅` `❆` `❝` `❞` `❣` `❤` `❥` `❦` `➤`\n\n『••[𒅒𝗕𝗿𝗮𝘀𝗵𝗸𝗶𝗲𝗕𝗼𝘁 : 𝗕𝗿𝗮𝘀𝗵𝗸𝗶𝗲 𝗭𝗲𝗶𝘁𝘀𝗶𒅒]••』'
    const imageUrls = ['https://telegra.ph/file/04b034b5364357adcfc60.png']
    
    await conn.sendMessage(m.chat, { image: { url: imageUrls }, caption: menu, mentions: [m.sender, who] })}

    if (command==='simbtype'){
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let toUser = `${m.sender.split("@")[0]}`
    let menu = '      █▓▒░ 𝗦𝗜𝗠𝗕𝗢𝗟𝗢𝗦 𝗧𝗜𝗣𝗢𝗚𝗥𝗔𝗙𝗜𝗖𝗢𝗦 ░▒▓█\n\n> 𒅒ꜱɪɢɴᴏꜱ ᴅᴇ ᴘᴜɴᴛᴜᴀᴄɪᴏɴ\n`˙` `‥` `‧` `‵` `、` `。` `﹐` `﹒` `﹔` `﹕` `！` `＃` `＄` `％` `＆` `＊` `，` `．` `：` `；` `？` `＠` `～` `•` `…` `·` `.` `ᐟ` `¡` `¿` `¦` `¨` `¯` `´` `·` `¸` `º` `‽` `‼` `⁏` `※` `†` `‡` `ˉ` `˘` `⁇` `⁈` `⁉` `ˆ` `⁊` `⸘` `№`\n> 𒅒ꜱɪᴍʙᴏʟᴏ ᴘᴀʀᴇɴᴛᴇꜱɪꜱ\n`〈〉` `《》` `「」` `『』` `【】` `〔〕` `︵︶` `︷︸` `︹︺` `︻︼` `︽︾` `︿﹀` `﹁﹂` `﹃﹄` `﹙﹚` `﹛﹜` `﹝﹞` `﹤﹥` `（）` `＜＞` `｛｝` `❬❭` `❮❯` `❰❱` `〖〗` `〘〙` `〚〛` `⟨⟩` `‹›` `«»` `｢｣` `⌃⌄` `⌵⌢` `⌣⎴` `⏜⏝` `⏞⏟` `⏠⏡`\n> 𒅒ᴄᴏᴍɪʟʟᴀꜱ\n`"` «» ‘’ ‚ ‛ “” „‟ ‹› ❛❜ ❝❞ 〝〞 〟 〃 ＂ ＇ ′ ″ ‴ ⁗ ‵ ‶ ‷ ``\n> 𒅒ᴍᴀʀᴄᴀ ᴅᴇ ᴘᴀʀʀᴀꜰᴏ\n`§` `¶` `❡` `⁋` `※`\n> 𒅒ꜱɪᴍʙᴏʟᴏꜱ ᴅᴇ ᴛᴇxᴛᴏ ᴄᴏɴꜰɪᴅᴇɴᴄɪᴀʟᴇꜱ\n``█` `▀` `▄` `▌` `▐` `▗` `▘` `▙` `▚` `▛` `▜` `▝` `▞` `▟` `▖` `░` `▒` `▓` `◼` `●` `⬛` `⬜` `⚫` `⚪`\n\n『••[𒅒𝗕𝗿𝗮𝘀𝗵𝗸𝗶𝗲𝗕𝗼𝘁 : 𝗕𝗿𝗮𝘀𝗵𝗸𝗶𝗲 𝗭𝗲𝗶𝘁𝘀𝗶𒅒]••』'
    const imageUrls = ['https://telegra.ph/file/04b034b5364357adcfc60.png']
    
    await conn.sendMessage(m.chat, { image: { url: imageUrls }, caption: menu, mentions: [m.sender, who] })}


    if (command==='simbtype'){
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let toUser = `${m.sender.split("@")[0]}`
    let menu = '      █▓▒░ 𝗦𝗜𝗠𝗕𝗢𝗟𝗢𝗦 𝗗𝗘 𝗣𝗘𝗥𝗦𝗢𝗡𝗔𝗦 ░▒▓█\n\n> 𒅒ᴘᴇʀꜱᴏɴᴀꜱ ʏ ᴀᴄᴛɪᴠɪᴅᴀᴅᴇꜱ\n`𓀞` `𓀟` `𓀠` `𓀡` `𓀢` `𓀣` `𓀤` `𓀥` `𓀦` `𓀧` `𓀨` 𓀩` `𓀪` `𓀫` `𓀬` 𓀀` `𓀁` `𓀂` `𓀃` `𓀄` `𓀅` `𓀆` `𓀇` `𓀈` `𓀉` `𓀊` `𓀋` `𓀌` `𓀍` `𓀎` `𓀏` `𓀑` `𓀒` `𓀓` `𓀔` `𓀕` `𓀖` `𓀗` `𓀘` `𓀙` `𓀚` `𓀛` `𓀜` `𓀝` `𓁁` `𓁂` `𓁃` `𓁄` `𓁅` `𓁆` `𓁇` `𓁈` `𓁉` `𓁊` `𓁋` `𓁌` `𓁍` `𓁎` `𓁏` `𓁐` `𓁑` `𓁒` `𓁓` `𓁔` `𓁕` `𓁖` `𓁗` `𓁘` `𓁙` `𓀭` `𓀮` `𓀯` `𓀰` `𓀱` `𓀲` `𓀳` `𓀴` `𓀵` `𓀵` `𓀷` `𓀸` `𓀹` `𓀺` `𓀻` `𓀼` `𓀽` `𓀾` `𓀿` `𓁀` `𓁲` `𓁚` `𓁛` `𓁜` `𓁝` `𓁞` `𓁟` `𓁠` `𓁡` `𓁢` `𓁣` `𓁤` `𓁥` `𓁦` `𓁧` `𓁨` `𓁩` `𓁪` `𓁫` `𓁬` `𓁭` `𓁮` `𓁯` `𓁰` `𓁱` `𓁳` `𓁴` `𓁵`\n> 𒅒ꜱɪᴍʙᴏʟᴏꜱ ᴅᴇ ᴄᴀʀᴀ ʏ ꜱᴍɪʟᴇʏ\n`☹` `☺` `☻` `〠` `ヅ` `ツ` `㋡` `쓰` `ü` `ت` `⍢` `⍨` `ᴗ̈` `⚉` `⚇` `𓁷` `𓁶` `𓂈` `𓂎` `ဩ` `ඩ` `𖥶` `𖦆` `𖠔` `𖤑` `冏` `웃` `유` `𖧀` `𖠋` `𖨆` `ⶆ` `𖦔` `𖤾` `𖦯` `𖧱`\n> 𒅒ꜱɪᴍʙᴏʟᴏꜱ ᴅᴇ ᴏᴊᴏꜱ\n`𓂀` `𓁿` `𓁾` `𓁽` `𓁼` `𓁻` `𓁺` `𓁹` `𓂉` `𓂊` `𓎲` `𓎱` `ಠ` `ʘ` `ಥ` `இ` `ຈ` `Ꙩ` `ꙩ` `⚆` `◠` `◕` `𓏗` `⊙` `⊚` `◉` `◎` `☉` `⦾` `⦿` `𖠂` `𖥕` `𖥂` `𖧼` `༎ຶ`\n> 𒅒ꜱɪᴍʙᴏʟᴏꜱ ᴅᴇ ɢᴇɴᴇʀᴏ\n`⚤` `♂` `♀` `☿` `⚣` `⚥` `⚦` `⚧` `⚨` `⚢` `⚲`\n> 𒅒ꜱɪᴍʙᴏʟᴏꜱ ᴅᴇʟ ᴄᴏʀᴀᴢᴏɴ\n`♥` `❣` `❤` `❦` `❧` `❥` `☙` `დ` `ღ` `ო` `ᦂ` `ᦦ` `ʚ` `ɞ` `Ꮼ`\n> 𒅒ꜱɪᴍʙᴏʟᴏꜱ ᴅᴇ ᴍᴀɴᴏ\n`☚` `☛` `☜` `☝` `☞` `☟` `✌` `𓂬` `𓂩` `𓂨` `𓂷` `𓂭` `𓂝` `𓂡` `𓂦` `𓃈` `⍝`\n> 𒅒ꜱɪᴍʙᴏʟᴏꜱ ʀᴇʟɪɢɪᴏꜱᴏꜱ ʏ ᴄᴜʟᴛᴜʀᴀʟᴇꜱ\n`☤` `☥` `☪` `☫` `☬` `☮` `☭` `☯` `☸` `☽` `☾` `♰` `♱` `⚚` `✡` `卍` `﷽` `✵` `ૐ` `𓉴` `𓉸` `۞` `࿊` `۩` `࿅` `࿉` `࿈`\n> 𒅒ꜱɪᴍʙᴏʟᴏꜱ ᴅᴇ ʟᴀ ᴄʀᴜᴢ ᴄʀɪꜱᴛɪᴀɴᴀ\n`✝` `✞` `✠` `☦` `✙` `✜` `✟` `✚` `☧` `☨` `☩` `✛`\n> 𒅒ꜱɪᴍʙᴏʟᴏꜱ ᴛᴏᴛᴇᴍɪᴄᴏꜱ\n`𖣐` `𖠦` `𖡷` `𖢅` `𖣴` `𖣔` `𖣓` `𖤌` `𖣘` `𖣁` `𖢘` `𖤍` `༒` `༄` `༅` `࿓` `༗` `𓊈𓊉` `𓊆𓊇` `⩨` `⩩` `༚` `༛` `༜` `༝` `༞` `༟` `࿎` `࿏` `𖡼` `⋱` `⋰` `𖡻` `𖡟` `𖡤` `𖡥` `𖡦` `𖡧` `𖡽` `𖣢` `𖤗` `𖤝` `𖤞` `𖤫` `𖤼` `𖥂` `𖥅` `𖥑` `𖥓` `𖥖` `𖥗` `𖥘` `𖥙` `𖥚` `𖥟` `𖥤` `⩨` `⩩` `𒀺` `𒀹` `𒍻` `𒑠` `𒁹` `𒀸` `𒅂` `𒁂` `𒇹` `𒌋` `𒑱` `𒌍` `𒉼` `𒈱` `𒈝` `𒈞` `𒐆` `𒆳` `𒍞` `𒑴` `𒀭` `𒀮` `𒀯` `𒆙` `𒆜` `𒉺` `𒌑` `𒀽` `𒆸` `𒇻` `𒁈` `𒇔` `𒐦` `𒐤` `𒐪` `𒐬` `𒐮` `𒐰` `𒀱` `𒅒` `𒋲` `𒂭` `𒇫` `𒍟` `𒅄` `ဪ` `꧅` `𒐫`\n\n『••[𒅒𝗕𝗿𝗮𝘀𝗵𝗸𝗶𝗲𝗕𝗼𝘁 : 𝗕𝗿𝗮𝘀𝗵𝗸𝗶𝗲 𝗭𝗲𝗶𝘁𝘀𝗶𒅒]••』'
    const imageUrls = ['https://telegra.ph/file/04b034b5364357adcfc60.png']
    
    await conn.sendMessage(m.chat, { image: { url: imageUrls }, caption: menu, mentions: [m.sender, who] })}
}

handler.command = handler.help = ['simbcommon','simbpopular','simbtype']
handler.tags = ['simbols']
export default handler

