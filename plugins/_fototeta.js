/*let handler = async (m, { conn, usedPrefix, command }) => {
  let pp = 'https://i.imgur.com/xGBCZsJ.jpg';
  let texto='Padre nuestro, que estás en los Cielos, santificado sea tu nombre, venga tu Reino, hágase tu voluntad así en la tierra como en el cielo. y perdónanos nuestras deudas así como nosotros perdonamos a nuestros deudores, y no nos dejes caer en la tentación, mas líbranos del mal.'
  if (m.text.toLowerCase().includes('Fototeta') || m.text.toLowerCase().includes('fototeta') ){
    const imageFilePath = './scr/grupos.jpg'
  try{
    const imageBuffer = await fs.promises.readFile(imageFilePath)
    await conn.sendFile(m.chat, pp,error.jpg, texto, { quoted: m });
  }
  catch (error) {
    console.error(error);
}}
  
};

handler.customPrefix = /^(Fototeta|fototeta)$/i;
handler.command = new RegExp;
export default handler;*/


/*let handler = async (m, { conn, usedPrefix, command }) => {
  let pp = 'https://i.imgur.com/xGBCZsJ.jpg';
  let texto = 'Padre nuestro, que estás en los Cielos, santificado sea tu nombre, venga tu Reino, hágase tu voluntad así en la tierra como en el cielo. y perdónanos nuestras deudas así como nosotros perdonamos a nuestros deudores, y no nos dejes caer en la tentación, mas líbranos del mal.';
  if (m.text.toLowerCase().includes('Fototeta') || m.text.toLowerCase().includes('fototeta')) {
    const imageFilePath = './scr/grupos.jpg';

    try {
      const imageBuffer = await fs.promises.readFile(imageFilePath);
      await conn.sendMessage(m.chat, { image: { buffer: imageBuffer }, caption: texto }, { quoted: m });
    } catch (error) {
      console.error(error);
    }
  }
};

handler.customPrefix = /^(Fototeta|fototeta)$/i;
handler.command = new RegExp; // Eliminar esta línea si no se necesita
export default handler;*/



let handler = async (m, { conn, usedPrefix, command}) => {
await conn.reply(m.chat,`Padre nuestro, que estás en los Cielos, santificado sea tu nombre, venga tu Reino, hágase tu voluntad así en la tierra como en el cielo. y perdónanos nuestras deudas así como nosotros perdonamos a nuestros deudores, y no nos dejes caer en la tentación, mas líbranos del mal.`)
}
handler.customPrefix = /^(Fototeta|fototeta)$/i
handler.command = new RegExp
export default handler
