/*Fue creado por BrashkieBot*/
/*let handler = async (m, { conn }) => {
    
    if (m.text.toLowerCase().includes('jajaja') || m.text.toLowerCase().includes('😂') || m.text.toLowerCase().includes('😅') || m.text.toLowerCase().includes('🤣') || m.text.toLowerCase().includes('Xd') || m.text.toLowerCase().includes('XD')) {
        // Ruta del archivo de audio
        const audioFilePath = './media/audiobot/Risa diabolica.mp3'; // Reemplaza con la ruta del archivo de audio

        // Envío del archivo de audio como respuesta
        try {
            const audioBuffer = await fs.promises.readFile(audioFilePath); // Lee el archivo de audio
            await conn.sendFile(m.chat, audioBuffer, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true});
        } catch (error) {
            console.error(error);
        }
    }
}

handler.customPrefix = /jajaja|😂|😅|🤣|Xd|XD/i;
handler.command = new RegExp;
handler.exp = 50;

export default handler;*/
