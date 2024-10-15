/*Fue creado por BrashkieBot*/

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
    if (command==='bath1'){
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let toUser = `${m.sender.split("@")[0]}`
        let menu = `@${toUser} se está bañando uff 🥵😏`
        const vi = ['https://telegra.ph/file/6947c0d6a0c98841b4675.mp4',
            'https://telegra.ph/file/b92068b5ce5cd0650dec6.mp4',
            'https://telegra.ph/file/5e365300163cc6bc76eda.mp4'
        ]
        
        await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })}
    
    if (command==='angry1'){
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let toUser = `${m.sender.split("@")[0]}`
        let menu = `@${toUser} está enojad@ 😡`
        const vi = ['https://telegra.ph/file/776d05a7ae2d680d0143e.mp4',
            'https://telegra.ph/file/526072b6426b45883541d.mp4',
            'https://telegra.ph/file/9f8be3448785b7b1036a3.mp4',
            'https://telegra.ph/file/2e20a70c3e5b0e8dcdda0.mp4',
            'https://telegra.ph/file/7b5fad30426651ec7640c.mp4',
            'https://telegra.ph/file/8922a3616bff23a7989c7.mp4'
        ]
        
        await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true,caption: menu, mentions: [m.sender, who] })}
    
    if (command==='greet1'){
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let toUser = `${m.sender.split("@")[0]}`
        let menu = `@${toUser} está saludando`
        const vi = ['https://telegra.ph/file/78a8bf17ef91c45c97188.mp4',
            'https://telegra.ph/file/f9d9982a80266e35aac4f.mp4',
            'https://telegra.ph/file/b3240a0de998c8d25b3c5.mp4',
            'https://telegra.ph/file/c2afee722622f2b6ce038.mp4',
            'https://telegra.ph/file/0725e6a9af7780742f6c8.mp4',
            'https://telegra.ph/file/cd3b9b0a7eb10f7d6a604.mp4',
            'https://telegra.ph/file/10c1a9cec3965c64b9d79.mp4',
            'https://telegra.ph/file/7733999a153335fac854b.mp4',
            'https://telegra.ph/file/b4ac51d63dd1d946ed4cf.mp4',
            'https://telegra.ph/file/b3fb29210ebb78f0f2990.mp4'
        ]
            
        await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true,caption: menu, mentions: [m.sender, who] })}

    if (command==='dance1'){
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let toUser = `${m.sender.split("@")[0]}`
        let menu = `@${toUser} está bailando`
        const vi = ['https://telegra.ph/file/af52d627212aa775600d4.mp4',
            'https://telegra.ph/file/88bb9d4ad66973b18a0dc.mp4',
            'https://telegra.ph/file/8ff335bca57d9a452ba31.mp4',
            'https://telegra.ph/file/b9959234795b7910d8ae2.mp4',
            'https://telegra.ph/file/35b5e53abe29b24c73bcb.mp4',
            'https://telegra.ph/file/32f071123a1490206ff68.mp4',
            'https://telegra.ph/file/0873f961a08424757c92c.mp4',
            'https://telegra.ph/file/2c10005b1fd30f04c7805.mp4',
            'https://telegra.ph/file/a556274a79e03ed64c8f1.mp4',
            'https://telegra.ph/file/fc592b86532def2c5ad5a.mp4',
            'https://telegra.ph/file/c52da69241c506e44611f.mp4',
            'https://telegra.ph/file/a7331ca535b5bf65bee62.mp4',
            'https://telegra.ph/file/8d350d90d05ab43dc37e8.mp4',
            'https://telegra.ph/file/6e1d41507887bc2de0b52.mp4',
            'https://telegra.ph/file/81b9c9a11524d1cae6ce6.mp4',
            'https://telegra.ph/file/e524b9ab2aafb14af13a5.mp4',
            'https://telegra.ph/file/d7b364515461bf810ca10.mp4',
            'https://telegra.ph/file/665be4c1549f45fd586af.mp4'
        ]
            
        await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true,caption: menu, mentions: [m.sender, who] })}

    if (command==='scared1'){
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let toUser = `${m.sender.split("@")[0]}`
        let menu = `@${toUser} está asustado 😧`
        const vi = ['https://telegra.ph/file/a5c132069537f01942cc0.mp4',
            'https://telegra.ph/file/9f38725a4096d4e4362b5.mp4',
            'https://telegra.ph/file/c3a61d4b84817e8c6148c.mp4',
            'https://telegra.ph/file/057421cdba6d4e812b6ce.mp4',
            'https://telegra.ph/file/6ac588c89b6f3a241ffb9.mp4',
            'https://telegra.ph/file/c9bfdc4f6d0e2b84b8a3c.mp4',
            'https://telegra.ph/file/8f067f045e87b2672cfb4.mp4',
            'https://telegra.ph/file/07283af2850808204db73.mp4',
            'https://telegra.ph/file/f6196d49dc9ba9b2c7086.mp4',
            'https://telegra.ph/file/62e666bbcca2e565c44f2.mp4',
            'https://telegra.ph/file/3e4da8e8854526e5d0452.mp4',
            'https://telegra.ph/file/2ad89796c7b98351c589c.mp4'
        ]
            
        await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true,caption: menu, mentions: [m.sender, who] })}

    if (command==='sleep1'){
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let toUser = `${m.sender.split("@")[0]}`
        let menu = `@${toUser} se fue a dormir`
        const vi = ['https://telegra.ph/file/27d6d9e548a8f6753870a.mp4',
            'https://telegra.ph/file/f5c25815aa41380eb7f7c.mp4',
            'https://telegra.ph/file/f8ebd8ddd155bb4e3332b.mp4',
            'https://telegra.ph/file/b7e0f695361c4f92e88e7.mp4',
            'https://telegra.ph/file/39fdedf0616e3a4c46c54.mp4',
            'https://telegra.ph/file/e60600b784e22426bea1d.mp4',
            'https://telegra.ph/file/de5cffceb07bd100e3e53.mp4',
            'https://telegra.ph/file/f6739205c72765a312f0a.mp4',
            'https://telegra.ph/file/310303bd6132ac89c3eed.mp4',
            'https://telegra.ph/file/48873510dd6bc9f54b362.mp4',
            'https://telegra.ph/file/fc85852aed8ae271eda33.mp4',
            'https://telegra.ph/file/fc85852aed8ae271eda33.mp4',
            'https://telegra.ph/file/104960ccffed4642ef17a.mp4',
            'https://telegra.ph/file/7ab9dedd990fe26152e29.mp4',
            'https://telegra.ph/file/a7bffa0a4d8cc5e52f09f.mp4',
            'https://telegra.ph/file/d6f8f595975c01b2899c4.mp4',
            'https://telegra.ph/file/87d26444f9efdf2ad70b7.mp4',
            'https://telegra.ph/file/601468ff90be2666b0f19.mp4',
            'https://telegra.ph/file/1a856960ad25f8bb51697.mp4',
            'https://telegra.ph/file/15e1a03642d5767847e95.mp4',
            'https://telegra.ph/file/a14aaba10d19c58b01c94.mp4',
            'https://telegra.ph/file/d805abf7115f879745f62.mp4',
            'https://telegra.ph/file/2d38b9c909c5ec1a36de8.mp4',
            'https://telegra.ph/file/e77781acef73750079d31.mp4',
            'https://telegra.ph/file/c47329a93e66c3446befd.mp4',
            'https://telegra.ph/file/0a282018ee660e9cdcc50.mp4',
            'https://telegra.ph/file/135e6914509de23179814.mp4',
            'https://telegra.ph/file/d0ed7738f0e84fe29d16a.mp4',
            'https://telegra.ph/file/5c0ede02dadbe042e9f2e.mp4',
            'https://telegra.ph/file/731b51b879d492811551c.mp4',
            'https://telegra.ph/file/ccbe2e592b99841e04a2f.mp4',
            'https://telegra.ph/file/c1a2d849b418b7fe413aa.mp4',
            'https://telegra.ph/file/a4fe2537a782c896b8122.mp4',
            'https://telegra.ph/file/65b7752f0e4b4a8800ceb.mp4',
            'https://telegra.ph/file/cd6e91e4691f498145ac9.mp4',
            'https://telegra.ph/file/5182d825bd15e87ca6c55.mp4',
            'https://telegra.ph/file/527374bd3a509bfee3d28.mp4',
            'https://telegra.ph/file/623d182069a6cbeba3efd.mp4',
            'https://telegra.ph/file/20d9c3166932067aca1dc.mp4',
            'https://telegra.ph/file/81c111185d9e0a691c01e.mp4',
            'https://telegra.ph/file/2779a87289776473087e1.mp4',
            'https://telegra.ph/file/3750850cfd01ec5cd4b2b.mp4',
            'https://telegra.ph/file/2f427257e5e99f36cc9f2.mp4'
        ]
        
        await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })}

    if (command==='code'){
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let toUser = `${m.sender.split("@")[0]}`
        let menu = `@${toUser} està programando`
        const vi = ['https://telegra.ph/file/0f60b734d84525f913191.mp4',
            'https://telegra.ph/file/b011b57308635ea8a33c6.mp4',
            'https://telegra.ph/file/8f105ee9bf4c45553919a.mp4',
            'https://telegra.ph/file/6bf35a673b7de711a27ec.mp4',
            'https://telegra.ph/file/2442e04584a6c3761a467.mp4',
            'https://telegra.ph/file/efb301b0547f72828525e.mp4',
            'https://telegra.ph/file/7b6912a214b231e150b8b.mp4',
            'https://telegra.ph/file/0918dcbbe3d688bff7861.mp4',
            'https://telegra.ph/file/e7cba0c2460922b938236.mp4'
        ]
        
        await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })}

    if (command==='food1'){
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let toUser = `${m.sender.split("@")[0]}`
        let menu = `@${toUser} esta comiendo`
        const vi = ['https://telegra.ph/file/b2b33cfa0774acc0cb44b.mp4'

        ]
        
        await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })}

    if (command==='happy1'){
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let toUser = `${m.sender.split("@")[0]}`
        let menu = `@${toUser} esta feliz 😄`
        const vi = ['https://i.imgur.com/QRaSwdA.mp4',
            'https://i.imgur.com/N6NnaWr.mp4',
            'https://i.imgur.com/PuoRbIg.mp4',
            'https://i.imgur.com/uVsswEm.mp4',
            'https://i.imgur.com/pMJKms1.mp4',
            'https://i.imgur.com/x9DiacO.mp4',
            'https://i.imgur.com/vxCxIvJ.mp4',
            'https://i.imgur.com/C7en6Xg.mp4',
            'https://i.imgur.com/HufYcxj.mp4',
            'https://i.imgur.com/azwZBaC.mp4',
            'https://i.imgur.com/DrhKXVi.mp4',
            'https://i.imgur.com/FovdE78.mp4',
            'https://i.imgur.com/QisDMXJ.mp4',
            'https://i.imgur.com/nhnOymq.mp4',
            'https://i.imgur.com/JGVO4bk.mp4',
            'https://i.imgur.com/Cq4IGru.mp4',
            'https://i.imgur.com/XhpjLug.mp4',
            'https://i.imgur.com/27uvC0m.mp4',
            'https://i.imgur.com/z3VpTp9.mp4',
            'https://i.imgur.com/x6emx1a.mp4',
            'https://i.imgur.com/kebcbyX.mp4',
            'https://i.imgur.com/U1pSS8P.mp4',
            'https://i.imgur.com/1gVv9vQ.mp4',
            'https://i.imgur.com/61lc0Ea.mp4',
            'https://i.imgur.com/p16hxbL.mp4',
            'https://i.imgur.com/ehmpCAP.mp4',
            'https://i.imgur.com/IG2enEk.mp4',
            'https://i.imgur.com/J0TEmQb.mp4',
            'https://i.imgur.com/zz1BBLs.mp4',
            'https://i.imgur.com/5xOSbMX.mp4',
            'https://i.imgur.com/mKDXqnb.mp4',
            'https://i.imgur.com/Ipm0d1A.mp4',
            'https://i.imgur.com/6VBnPee.mp4',
            'https://i.imgur.com/0Vtj15N.mp4',
            'https://i.imgur.com/L3Aho9i.mp4',
            'https://i.imgur.com/aFuZkqL.mp4',
            'https://i.imgur.com/xJsbnPe.mp4',
            'https://i.imgur.com/yPpWm5d.mp4',
            'https://i.imgur.com/eCD3FPC.mp4'
        ]
    
        await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })}

    if (command==='sad1'){
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let toUser = `${m.sender.split("@")[0]}`
        let menu = `@${toUser} esta entristecid@ 😞`
        const vi = ['https://telegra.ph/file/55486ab5f25b317295984.mp4',
            'https://telegra.ph/file/d4aedd0165fe2b1bb8260.mp4',
            'https://telegra.ph/file/12b93bc68b1d1cd29b1cb.mp4',
            'https://telegra.ph/file/311ac459232e1eb27436a.mp4',
            'https://telegra.ph/file/0371851da297e215a0c66.mp4',
            'https://telegra.ph/file/ff6fff4c91a7fc7d8dba4.mp4',
            'https://telegra.ph/file/6dcdb4f8c9b577d9357d9.mp4',
            'https://telegra.ph/file/429edaf93b321a521e890.mp4',
            'https://telegra.ph/file/5f390a5a28dfbce64b5a6.mp4',
            'https://telegra.ph/file/2d3c7533168087f6522fd.mp4',
            'https://telegra.ph/file/9d3e46f6e650fa405f98c.mp4',
            'https://telegra.ph/file/2da6356d3f96372ed3514.mp4',
            'https://telegra.ph/file/b0972348761e7c712fdc7.mp4',
            'https://telegra.ph/file/39ce406b5b608785a7ab7.mp4',
            'https://telegra.ph/file/3c97896e45bd56e24ac1d.mp4',
            'https://telegra.ph/file/e76a148d5bafae87889b2.mp4',
            'https://telegra.ph/file/26c48f97fd52e3994f1c4.mp4',
            'https://telegra.ph/file/24dc737ffc2de2fdb5435.mp4',
            'https://telegra.ph/file/80448140b7c12b4774188.mp4',
            'https://telegra.ph/file/f1e5a8a171c4c1152b3ec.mp4',
            'https://telegra.ph/file/6a6eb5a562a3dc97f6309.mp4',
            'https://telegra.ph/file/72a56a5ca79469b2ea73b.mp4',
            'https://telegra.ph/file/9509a72439f8f7fec86a3.mp4',
            'https://telegra.ph/file/7a52036567e63b3eeccdb.mp4',
            'https://telegra.ph/file/3135c669322d9aef9e795.mp4',
            'https://telegra.ph/file/28bc8de10804000a19ed0.mp4',
            'https://telegra.ph/file/835c255f0a41b3e7df480.mp4',
            'https://telegra.ph/file/278d489f7be6fb57c1dcf.mp4',
            'https://telegra.ph/file/3bdce2d54225baa4f5132.mp4',
            'https://telegra.ph/file/31189e759265442b980eb.mp4',
            'https://telegra.ph/file/8b0455704310cfa93284a.mp4',
            'https://telegra.ph/file/5b3fa1fcc55972384c2f5.mp4',
            'https://telegra.ph/file/08aec1010ed720d146037.mp4',
            'https://telegra.ph/file/9f366d10661913321f773.mp4',
            'https://telegra.ph/file/591f525fad9bf2e40359a.mp4',
            'https://telegra.ph/file/b7929a14cc4f5f09955b4.mp4',
            'https://telegra.ph/file/9ecc4532f381bccd98479.mp4',
            'https://telegra.ph/file/06d2fe04552855d9f9792.mp4',
            'https://telegra.ph/file/684ed19c71a8232086cd5.mp4',
            'https://telegra.ph/file/21405b1e4b718c5bbe190.mp4',
            'https://telegra.ph/file/702abce64a5335baf1a4a.mp4',
            'https://telegra.ph/file/a9a912a0482d1432368f5.mp4',
            'https://telegra.ph/file/52f262b35899bfa5ca983.mp4',
            'https://telegra.ph/file/f623564163a5968c822cc.mp4',
            'https://telegra.ph/file/d43b305512864383dd29f.mp4',
            'https://telegra.ph/file/4ffa304f39ec5f707d327.mp4',
            'https://telegra.ph/file/bd7bbe78c9e026a899822.mp4',
            'https://telegra.ph/file/c376d57f7727af32442c7.mp4'

        ]
    
        await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })}
    
    if (command==='cry1'){
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let toUser = `${m.sender.split("@")[0]}`
        let menu = `@${toUser} esta llorando 😭😭`
        const vi = ['https://i.imgur.com/a7Rtuyz.mp4',
            'https://i.imgur.com/4yViNsc.mp4',
            'https://i.imgur.com/oBCSDrP.mp4',
            'https://i.imgur.com/R32NPW4.mp4',
            'https://i.imgur.com/hxZkpbM.mp4',
            'https://i.imgur.com/B5j0KLt.mp4',
            'https://i.imgur.com/RSwADz6.mp4',
            'https://i.imgur.com/fW2z9W5.mp4',
            'https://i.imgur.com/LFEXndG.mp4',
            'https://i.imgur.com/ptA735d.mp4',
            'https://i.imgur.com/xsySZue.mp4',
            'https://i.imgur.com/xEek95D.mp4',
            'https://i.imgur.com/0zO8Cl6.mp4',
            'https://i.imgur.com/j1dfCGu.mp4',
            'https://i.imgur.com/pYoJroC.mp4',
            'https://i.imgur.com/z42DKAd.mp4',
            'https://i.imgur.com/0P8yd6Q.mp4',
            'https://i.imgur.com/1s0EXCA.mp4',
            'https://i.imgur.com/4dQS35w.mp4',
            'https://i.imgur.com/pUcd0oe.mp4',
            'https://i.imgur.com/lCasWGW.mp4',
            'https://i.imgur.com/kxcHOEp.mp4',
            'https://i.imgur.com/TRa6xfL.mp4',
            'https://i.imgur.com/yphlaUK.mp4',
            'https://i.imgur.com/wUE09Ei.mp4',
            'https://i.imgur.com/xSlwEKF.mp4',
            'https://i.imgur.com/i4txode.mp4',
            'https://i.imgur.com/n7w6UsN.mp4',
            'https://i.imgur.com/HDEM5jp.mp4',
            'https://i.imgur.com/xtTRwZ6.mp4',
            'https://i.imgur.com/4YCK573.mp4',
            'https://i.imgur.com/dBAsLVZ.mp4',
            'https://i.imgur.com/CLKYZJi.mp4',
            'https://i.imgur.com/LaGoSQE.mp4',
            'https://i.imgur.com/KqHVrjV.mp4',
            'https://i.imgur.com/OYYQ2Sg.mp4',
            'https://i.imgur.com/7LnF4C0.mp4',
            'https://i.imgur.com/Xf1QXmh.mp4',
            'https://i.imgur.com/2W4Eteq.mp4',
            'https://i.imgur.com/B1O39wD.mp4',
            'https://i.imgur.com/4htsIsH.mp4',
            'https://i.imgur.com/phuAtJ1.mp4',
            'https://i.imgur.com/76pVz36.mp4',
            'https://i.imgur.com/xenhEuU.mp4',
            'https://i.imgur.com/xv30LO6.mp4'
        ]
    
        await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })}


    if (command==='shrug1'){
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let toUser = `${m.sender.split("@")[0]}`
        let menu = `@${toUser} encoge su hombro o duda`
        const vi = ['https://i.imgur.com/yIklwlT.mp4',
            'https://i.imgur.com/T0yQfQE.mp4',
            'https://i.imgur.com/6RFAs96.mp4',
            'https://i.imgur.com/a7yUOmu.mp4',
            'https://i.imgur.com/cuLLMTd.mp4',
            'https://i.imgur.com/uYA0Vis.mp4',
            'https://i.imgur.com/lnt05uU.mp4'
        ]
    
        await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })}

    
    if (command==='movehead1'){
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let toUser = `${m.sender.split("@")[0]}`
        let menu = `@${toUser} mueve la cabeza 🤪`
        const vi = ['https://i.imgur.com/meQykVX.mp4',
            'https://i.imgur.com/FaeUadq.mp4',
            'https://i.imgur.com/FEApvmw.mp4',
            'https://i.imgur.com/dkDfE2S.mp4',
            'https://i.imgur.com/1ySOFZW.mp4'
        ]
    
        await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })}


    if (command==='evilaugh1'){
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let toUser = `${m.sender.split("@")[0]}`
        let menu = `@${toUser} se esta riendo como un psicopata`
        const vi = ['https://i.imgur.com/zHuehx5.mp4',
            'https://i.imgur.com/RFVv5zB.mp4',
            'https://i.imgur.com/nmGYRMT.mp4',
            'https://i.imgur.com/XvsyRnD.mp4',
            'https://i.imgur.com/zyqJV62.mp4',
            'https://i.imgur.com/rywB2pj.mp4',
            'https://i.imgur.com/rywB2pj.mp4',
            'https://i.imgur.com/nvn8Rh5.mp4',
            'https://i.imgur.com/1umqAkf.mp4',
            'https://i.imgur.com/Wm6zw97.mp4',
            'https://i.imgur.com/g2TJTbI.mp4',
            'https://i.imgur.com/jvONhi9.mp4',
            'https://i.imgur.com/NkTR4LK.mp4',
            'https://i.imgur.com/yvgyMfZ.mp4',
            'https://i.imgur.com/mG1glPy.mp4',
            'https://i.imgur.com/yZGOodv.mp4',
            'https://i.imgur.com/B90IXF6.mp4',
            'https://i.imgur.com/DJVykGy.mp4',
            'https://i.imgur.com/U1PYmeP.mp4',
            'https://i.imgur.com/JhGH31F.mp4'
        ]
    
        await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })}


    if (command==='banghead1'){
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let toUser = `${m.sender.split("@")[0]}`
        let menu = `@${toUser} se esta golpeando la cabeza :O`
        const vi = ['https://i.imgur.com/m50GWcK.mp4',
            'https://i.imgur.com/MndE2mi.mp4',
            'https://i.imgur.com/hwO38vs.mp4',
            'https://i.imgur.com/tZHiszU.mp4',
            'https://i.imgur.com/28Im7UO.mp4',
            'https://i.imgur.com/OL06TyP.mp4',
            'https://i.imgur.com/NNPPglI.mp4',
            'https://i.imgur.com/ssk0GCS.mp4',
            'https://i.imgur.com/B50ecm5.mp4'
        ]
    
        await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, who] })}
    


}

handler.command = handler.help = ['bath1','angry1','greet1','scared1','dance1','sleep1','code','food1','happy1','sad1','cry1','shrug1','movehead1','evilaugh1','banghead1']
handler.tags = ['anime']
export default handler


/*CRY1
'https://telegra.ph/file/d3462edb881db80ea00a8.mp4',
            'https://telegra.ph/file/718c867e5f85b47e545e3.mp4',
            'https://telegra.ph/file/eedbdd7850d07606aeb9e.mp4',
            'https://telegra.ph/file/a5124199f3c705aaded4e.mp4',
            'https://telegra.ph/file/579111835c2ec4ff434e2.mp4'*/



/*HAPPY1
'https://telegra.ph/file/e1ee440716f01cecbdf3a.mp4',
            'https://telegra.ph/file/21eaa6c1ac46a3527a6dd.mp4'*/


/*EVILAUGH
'https://i.imgur.com/xcKLJpp.mp4',
'https://i.imgur.com/MYqKtvV.mp4',
'https://i.imgur.com/gNbsuFr.mp4'*/
