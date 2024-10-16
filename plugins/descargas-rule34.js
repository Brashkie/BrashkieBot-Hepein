/*import { Rule34 } from '@bochilteam/scraper';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Por favor, proporciona un texto para buscar. Ejemplo: ${usedPrefix + command} Hinata`

  try {
    const rule34 = new Rule34();
    const images = await rule34.search(text);
    const randomImage = images[Math.floor(Math.random() * images.length)];
    await conn.sendFile(m.chat, randomImage.url, 'error.jpg', `
╰⊱💚⊱ *Éxito | Succes* ⊱💚⊱╮
💞 Resultado | Result: ${text}
`.trim(), m)
  } catch (err) {
    console.error(err)
    throw `Error al buscar imagen: ${err.message}`
  }
}

handler.help = ['rule34 <keyword>']
handler.tags = ['internet']
handler.command = /^(rule34|ruleanime|animerule)$/i
handler.exp = 500
handler.money = 50

export default handler*/
//hola

/*import { exec } from '@bochilteam/scraper';

let handler = async (m, { conn, text }) => {
    // Expresión regular para encontrar un enlace en el texto
    const regexEnlace = /(http[s]?:\/\/[^\s]+)/g;
    const enlace = text.match(regexEnlace); // Extraer el enlace del texto

    if (enlace) {
        try {
            const result = await exec(enlace[0]); // Utilizar el primer enlace encontrado
            if (result.images.length > 0) {
                const imagenURL = result.images[0]; // Tomar la primera imagen de la lista de imágenes encontradas
                await conn.sendFile(m.chat, imagenURL, 'imagen_extraida.jpg', 'Aquí tienes la imagen extraída:', m);
            } else {
                conn.reply(m.chat, 'No se encontraron imágenes en el enlace proporcionado.', m);
            }
        } catch (error) {
            console.error('Error al extraer la imagen:', error);
            conn.reply(m.chat, 'Ocurrió un error al extraer la imagen. Por favor, inténtalo de nuevo.', m);
        }
    } else {
        conn.reply(m.chat, 'Por favor, proporciona un enlace válido para extraer la imagen.', m);
    }
};

handler.help = ['rule34 <término_búsqueda>'];
handler.tags = ['herramienta'];
handler.command = /^(rule34)$/i;

export default handler;*/

/*import fetch from 'node-fetch';

const handler = async (m, { conn, text, usedPrefix, command }) => {
    const query = text.trim();

    async function getImagesFromPinterest(query) {
        try {
            const response = await fetch(`https://rule34.xxx/index.php?page=dapi&s=post&q=index&tags=${query}`);
            const data = await response.json();
            return data.result;
        } catch (error) {
            console.error('Error al obtener imágenes de Rule34:', error);
            return [];
        }
    }

    async function sendPinterestCarousel(conn, chat, query, usedPrefix) {
        let images = await getImagesFromPinterest(query);
        
        // Verificar si images es un array y si contiene elementos
        if (!Array.isArray(images) || images.length === 0) {
            console.error('Error: Las imágenes no son un array válido o está vacío:', images);
            conn.reply(m.chat, 'No se encontraron imágenes relacionadas con esta búsqueda en Rule34.', m);
            return;
        }
        
        const messages = images.map((image) => [null, null, image, [['Buscar con Rule34 🌐', usedPrefix + `image2 ${query}`]], null, [['🔗 Enlace de imagen', image]], []]);
        await conn.sendCarousel(chat, '💗 Resultados de Rule34', 'Imágenes', `✨ Imágenes de Rule34 para "${query}"`, messages);
    }

    if (!query) {
        conn.reply(m.chat, 'Por favor, escribe lo que deseas buscar en rule34. por ejemplo #rule34 hinata', m);
        return;
    }

    if (command === 'rule34') {
        await sendPinterestCarousel(conn, m.chat, query, usedPrefix);
    }
};

handler.command = /^(rule34)$/i;

export default handler; */












/*import fetch from 'node-fetch';
import { parseString } from 'xml2js';

const handler = async (m, { conn, text }) => {
    const query = text.trim();

    async function getImagesFromRule34(query) {
        try {
            const response = await fetch(`https://api.rule34.xxx//index.php?page=dapi&s=post&q=index&tags=${query}`);
            const xmlData = await response.text();
            let jsonData = await parseXML(xmlData);
            return jsonData.posts.post;
        } catch (error) {
            console.error('Error al obtener imágenes de Rule34:', error);
            return [];
        }
    }

    async function parseXML(xmlData) {
        return new Promise((resolve, reject) => {
            parseString(xmlData, (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    }

    if (!query) {
        conn.reply(m.chat, 'Por favor, escribe lo que deseas buscar en Rule34.', m);
        return;
    }

    try {
        const images = await getImagesFromRule34(query);
        
        if (images.length > 0) {
            const imageUrl = images[0].$.file_url;
            conn.sendFile(m.chat, imageUrl, 'imagen.jpg', `Aquí tienes la imagen extraída: ${query}`, m);
        } else {
            conn.reply(m.chat, 'No se encontraron imágenes relacionadas con esta búsqueda en Rule34.', m);
        }
    } catch (error) {
        console.error('Error al procesar las imágenes de Rule34:', error);
        conn.reply(m.chat, 'Ocurrió un error al extraer la imagen de Rule34. Por favor, inténtalo de nuevo.', m);
    }
};

handler.command = /^(rule34)$/i;

export default handler;*/



//********************************************************************************************************
/*Original*/

//Creado por BrashkieBot

import fetch from 'node-fetch';
import { parseString } from 'xml2js';

const handler = async (m, { conn, text }) => {
    const query = text.trim();

    async function getImagesFromRule34(query) {
        try {
            const response = await fetch(`https://api.rule34.xxx//index.php?page=dapi&s=post&q=index&tags=${query}`);
            const xmlData = await response.text();
            let jsonData = await parseXML(xmlData);
            return jsonData.posts.post;
        } catch (error) {
            console.error('Error al obtener imágenes de Rule34:', error);
            return [];
        }
    }

    async function parseXML(xmlData) {
        return new Promise((resolve, reject) => {
            parseString(xmlData, (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    }

    if (!query) {
        conn.reply(m.chat, '𝗣𝗼𝗿 𝗳𝗮𝘃𝗼𝗿, 𝗲𝘀𝗰𝗿𝗶𝗯𝗲 𝗹𝗼 𝗾𝘂𝗲 𝗱𝗲𝘀𝗲𝗮𝘀 𝗯𝘂𝘀𝗰𝗮𝗿 𝗲𝗻 𝗿𝘂𝗹𝗲𝟯𝟰 𝗱𝗲 𝗮𝗻𝗶𝗺𝗲.\n𝗘𝗷𝗲𝗺𝗽𝗹𝗼:\n> #rule34 hinata', m);
        return;
    }

    if (!db.data.chats[m.chat].modohorny && m.isGroup) {
      return conn.reply(m.chat, '🔞 *¡Estos comandos están desactivados!*\n*Para activarlos pidele permiso a admin:*\n> #on modohorny', m);

    }

    try {
        const images = await getImagesFromRule34(query);
        
        if (images.length > 0) {
            // Seleccionar aleatoriamente un objeto post de la lista de imágenes
            const randomIndex = Math.floor(Math.random() * images.length);
            const randomImage = images[randomIndex];
            const imageUrl = randomImage.$.file_url;
            conn.sendFile(m.chat, imageUrl, 'imagen.jpg', `*𝗔𝗾𝘂𝗶 𝘁𝗶𝗲𝗻𝗲𝘀 𝗹𝗮 𝗶𝗺𝗮𝗴𝗲𝗻:  🥵_${query}_🥵*`, m);
        } else {
            conn.reply(m.chat, '> No se encontraron imágenes relacionadas con esta búsqueda en Rule34.', m);
        }
    } catch (error) {
        console.error('> 𝗘𝗿𝗿𝗼𝗿 𝗮𝗹 𝗽𝗿𝗼𝗰𝗲𝘀𝗮𝗿 𝗹𝗮𝘀 𝗶𝗺𝗮𝗴𝗲𝗻𝗲𝘀 𝗱𝗲 𝗥𝘂𝗹𝗲𝟯𝟰:', error);
        conn.reply(m.chat, '> 𝗢𝗰𝘂𝗿𝗿𝗶𝗼 𝘂𝗻 𝗲𝗿𝗿𝗼𝗿 𝗮𝗹 𝗲𝘅𝘁𝗿𝗮𝗲𝗿 𝗹𝗮 𝗶𝗺𝗮𝗴𝗲𝗻 𝗱𝗲 𝗥𝘂𝗹𝗲𝟯𝟰. 𝗣𝗼𝗿 𝗳𝗮𝘃𝗼𝗿, 𝗶𝗻𝘁𝗲𝗻𝘁𝗮𝗹𝗼 𝗱𝗲 𝗻𝘂𝗲𝘃𝗼.', m);
    }
};

handler.command = /^(rule34)$/i;
handler.help = ['rule34 <búsqueda>'];
handler.group = true;
handler.register = true;
handler.limit = 200;
export default handler;


//**********************************************************************************************************************************************

//Megumin bot

/*import fetch from 'node-fetch';
import fs from 'fs/promises';
import path from 'path';
const {
  proto,
  generateWAMessageFromContent,
  prepareWAMessageMedia,
  generateWAMessageContent,
  getDevice
} = (await import("@whiskeysockets/baileys")).default;

const dbFilePath = path.resolve('./sentUrls.json');

const readDb = async () => {
  try {
    const data = await fs.readFile(dbFilePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      return {};
    }
    throw err;
  }
};

const writeDb = async (data) => {
  try {
    await fs.writeFile(dbFilePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    throw err;
  }
};

const cleanDb = async () => {
  const db = await readDb();
  const now = Date.now();
  const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;
  
  for (const [url, timestamp] of Object.entries(db)) {
    if (now - timestamp > THIRTY_DAYS) {
      delete db[url];
    }
  }

  await writeDb(db);
};

const handler = async (m, { conn, text }) => {
  if (!text) {
    throw 'Por favor, proporciona un texto';
  }
  
  try {
  conn.reply(m.chat, '🔥  *ENVIANDO SUS RESULTADOS..*', m, {
      contextInfo: { 
        externalAdReply: { 
          mediaUrl: null, 
          mediaType: 1, 
          showAdAttribution: true,
          title: '♡  ͜ ۬︵࣪᷼⏜݊᷼𝙍𝙪𝙡𝙚 𝟑𝟒⏜࣪᷼︵۬ ͜ ',
          body: '(⁄ ⁄•⁄ω⁄•⁄ ⁄) 𝙈𝙚𝙜𝙪𝙢𝙞𝙣🔥',
          previewType: 0, 
          thumbnail: rule,
          sourceUrl: cn 
        }
      }
    });

    await cleanDb();
    conn.sendPresenceUpdate('composing', m.chat);
    const apiUrl = `https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&tags=${encodeURIComponent(text)}&json=1`;
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error('Error en la solicitud a la API');
    }

    const data = await response.json();
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error('No se encontraron imágenes');
    }

    const db = await readDb();
    const newImages = data.filter(post => !db[post.file_url]);

    if (newImages.length === 0) {
      throw new Error('No se encontraron nuevas imágenes para mostrar');
    }

    const imagesToDownload = newImages.sort(() => 0.5 - Math.random()).slice(0, 6);
    const results = await Promise.all(imagesToDownload.map(async (post, index) => {
      const imageResponse = await fetch(post.file_url);
      if (!imageResponse.ok) {
        throw new Error('Error al descargar la imagen');
      }
      const imageBuffer = await imageResponse.buffer();
      db[post.file_url] = Date.now();

      const mediaMessage = await prepareWAMessageMedia({ image: imageBuffer }, { upload: conn.waUploadToServer });
      return {
        body: proto.Message.InteractiveMessage.Body.fromObject({ text: null }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: 'Desliza para ver más' }),
        header: proto.Message.InteractiveMessage.Header.fromObject({
          title: `Hentai ${index + 1}`,
          hasMediaAttachment: true,
          imageMessage: mediaMessage.imageMessage
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({ buttons: [] })
      };
    }));

    await writeDb(db);

    const messageContent = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.create({
              text: `✨️ RESULTADO DE: ${text}`
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: "ᥫᩣᎠ꯭I𝚫⃥꯭M꯭Ꭷ꯭Ꮑ꯭Ꭰ࠭⋆̟(◣_◢)凸"
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              hasMediaAttachment: false
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards: results
            })
          })
        }
      }
    }, {
      quoted: m
    });

    await conn.relayMessage(m.chat, messageContent.message, {
      messageId: messageContent.key.id
    });

  } catch (error) {
    console.error(error);
    conn.reply(m.chat, `❌️ *OCURRIÓ UN ERROR:* ${error.message}`, m);
  }
};

handler.help = ['rule34'];
handler.tags = ['ai'];
handler.group = false;
handler.register = true
handler.command = ['rule34','rule'];

export default handler;*/
