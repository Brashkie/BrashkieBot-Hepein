let handler  = async (m, { conn, usedPrefix, command }) => {
conn.reply(m.chat,`╭━━━━━[ 𝙍𝙀𝙏𝙊 😏 ]━━━━⬣\n*“${pickRandom(global.bucin)}”*\n╰━━━━━━[ ${vs} ]━━━━━⬣`, m)}
/*conn.sendHydrated(m.chat, `╭━━━━━[ 𝙍𝙀𝙏𝙊 😏 ]━━━━⬣\n*“${pickRandom(global.bucin)}”*\n╰━━━━━━[ ${vs} ]━━━━━⬣`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙊𝙩𝙧𝙖 𝙫𝙚𝙯 | 𝘼𝙜𝙖𝙞𝙣 🧐', `${usedPrefix}reto`],
['𝙏𝙤𝙥𝙨 | 𝙍𝙖𝙣𝙠𝙞𝙣𝙜 🏆', `${usedPrefix}top`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', `${usedPrefix}menu`]
], m,)*/

let pp ='https://telegra.ph/file/49e9327b85f47b7a9f523.jpg'

handler.help = ['reto']
handler.tags = ['fun']
handler.command = /^reto/i
handler.fail = null
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.bucin = [
"Pasa el pack de una hormiga",
"Dile a tus amigos que te vas a vivir a EU y mándame una captura de lo que te haya dicho",
"Grita desde la ventana que quieres mamar y mándame el vídeo",
"Escribe el nombre de tu crush",
"Debes de poner el nombre de mi creador en tu estado de WhatsApp, sin dar contexto",
"Envíame una fotografía tuya",
"Debes de dibujar en alguna parte de tu cuerpo el nombre de algún integrante del grupo, luego realiza una foto y envíala",
"Hazte una foto dándole un beso a una Televisión",
 "Mándame una fotografía en ropa interior",
"Escribe en tu estado de WhatsApp que te gusta comer tierra",
"Debes de poner la fotografía de un participante del grupo que sea del sexo opuesto al tuyo en tu perfil de WhatsApp durante 3 días 📸📸",
"Tienes que mandar un audio cantando la canción: Un pato que va cantando alegremente cua cua 🦆",
"Envía un mensaje a tu ex y dile todavía me gustas", "Envía un audio diciendo amo a The Shadow Brokers - Bot", 
"Dile a tu crush que la amas y pasa captura al grupo", "Envía un audio cantando", 
"Envía una foto en la que salgas tu sin taparte la cara ni nada", "Envía un video bailando", 
"Invita a personas que no conoces a tomarse una selfi contigo y luego envíalo al grupo", 
"Elija algunos números aleatorios de sus contactos y envíeles un mensaje de texto con el mensaje 'Estoy embarazad@'.", 
"¡Tome cualquier bebida que esté cerca de usted, luego mézclela con chile y beba!", 
"Tome un número aleatorio de sus contactos, llámelo y dígale 'te amo' ", 
"Compre la comida más barata en la cafetería (o compre una botella de agua) y diga entre sollozos a sus compañeros de clase: 'Esta ... es la comida más cara que he comprado)' ", 
" Compre una botella de coca cola y salpique flores con ella frente a la multitud.", 
" Párese cerca del refrigerador, cierre los ojos, elija alimentos al azar en él, incluso cuando coma, sus ojos deben estar cerrados.", 
" De pie en medio de la cancha de baloncesto y gritando: 'TE AMO MI PRÍNCIPE / PRINCESA' ", 
"Presenta tus respetos a alguien de la clase y luego di: 'Estoy a su servicio, Majestad' ", 
" Caminando aplaudiendo y cantando la canción 'Feliz cumpleaños' de la clase al pasillo.", 
" Arrodíllate sobre una rodilla y di '¿Cásate conmigo?' la primera persona en entrar a la habitación.", 
" Haz un tocado absurdo con tejido, sea lo que sea, sigue pidiendo poses frente a la cámara, sigue subiendo", 
"Dile 'ERES HERMOSA / MUY HERMOSA, NO MIENTES' a la chica que crees que es la más bonita de esta clase.", 
" Dile a alguien en clase: 'Primero me dijeron que era tu gemelo, nos separamos y luego me sometí a una cirugía plástica. Y esto es lo más serio que he dicho' ", 
" Tirar el cuaderno de alguien a la basura, frente a sus ojos, diciendo 'Este libro nadie puede entender' ", 
" ¡Arranca el pelo de tu propia pierna 3 veces!", 
" Chatea con tus padres, diles que los extrañas con emoticonos tristes.", 
" Intente buscar en Google cosas aterradoras o ridículas como tripofobia, etc.", 
" Siéntese relajado en medio de la cancha de baloncesto mientras finge que es una playa para tomar el sol.", 
" Llena tu boca de agua y tienes que aguantar hasta dos rondas, si te ríes y derramas o bebes, entonces tienes que volver a llenar y agregar una ronda más.", 
" Salude a la primera persona que entre en esta sala y diga '¡Bienvenido a Quién quiere ser millonario!' ", 
"Envía un mensaje de texto a tus padres '¡Hola, hermano! ¡Acabo de comprar el último número de la revista Playboy!' ", 
"Envíales un mensaje de texto a tus padres: 'Mamá, papá, ya sé que soy un niño adoptado del orfanato. No ocultes esto más'.", 
" Envía tres números aleatorios en tus contactos y escribe 'Me acabo de convertir en modelo de la revista Playboy' ", 
" ¡Come una cucharada de salsa de soja dulce y salsa de soja!", 
" Come algo pero no uses las manos.", 
" Enojarse con sus amigos que no vienen a pesar de que tienen una cita para jugar 'Verdad o Reto' juntos", 
"¡Rompe el huevo con la cabeza!", 
"Coma alimentos que se hayan mezclado y tendrán un sabor extraño, pero asegúrese de que los alimentos no sean dañinos para la salud a largo o corto plazo.", 
"Baila como Girls 'Generation para los niños frente a la clase, o baila como Super Junior para las niñas.", 
"Izar el asta de la bandera sin la bandera.", 
"Hablando de la persona que te gusta, de tus amigos más cercanos, del sexo opuesto que no conoces en absoluto y cosas por el estilo.", 
"Copia los peinados de todos tus amigos.", 
"Cantando la canción HAI TAYO frente a mucha gente mientras baila", 
"Cante la canción Baby Shark en voz alta en el aula.", 
"Pedir prestado algo a los vecinos", 
"Pide la firma de uno de los profesores más feroces mientras dices 'Eres verdaderamente la persona que más admiro en el mundo' ", 
" Pídale dinero a alguien (al azar ) en la calle diciendo 'No tengo dinero para tomar un angkot'.", 
" Beba algo que haya sido preparado / acordado, pero asegúrese de que no sea peligroso, puede ser como beber jarabe mezclado con salsa de soja.", 
" Hablando con el emoticono-miedo de la persona que te gusta, está bien conversar con lo que quieras, a través de cualquier medio que puedas.", 
" Canta tu película de Disney favorita fuera de casa mientras gritas.", 
" Nombra de 1 azul a 20 azules rápidamente y no debes cometer ningún error. Si está mal, debe repetirse desde el principio.", 
" Póngase una corona de papel de copia y diga a todos en la habitación 'HONOR AL REY' mientras señala a cada persona con una regla.", 
" Vuelve a ponerte los pantalones hasta la mañana siguiente.", 
" Abraza a la persona que NO te agrada en clase y di: 'Muchas gracias por ser la mejor persona para mí' ", 
" Ve a un campo amplio, luego corre lo más rápido posible mientras dices 'Estoy loco, estoy loco' ", 
" Elija una flor y luego conéctela a alguien que no conoce (debe ser del sexo opuesto)", 
" Elige a una persona al azar en la calle, luego di 'No sabes que eres hermosa' (ala One Direction)", 
" Fingir estar poseído ejm: poseído por un tigre, etc.", 
" Pídale que silbe ya que su boca está nuevamente llena de comida.", 
" Pide ser un mesero para que te sirva con tus amigos para el almuerzo.", 
" Dígales que usen calcetines para hacer guantes.", 
"Dígales que usen el sombrero más extraño / el casco más absurdo durante la próxima ronda.", 
"Llama a tu mamá y dile 'mamá, quiero casarme lo antes posible' ", 
"Llama a tu ex y di 'te extraño' ", 
"Cambia de ropa con la persona más cercana hasta la siguiente ronda.", 
"Actualice el estado en WhatsApp lo que sea con palabras que comiencen con 'S' ", 
"Sube un video de canto a YouTube que esté cantando canciones populares.", 
"Colorea tus uñas de las manos y de los pies de diferentes colores durante una semana.", 
"come 2 cucharadas de arroz sin guarniciones", 
"Envie el emoji '🦄💨' cada vez que escriba en un grupo 1 día", 
"diga '¡Bienvenido a Quién quiere ser millonario!' a todos los grupos que tienes", 
"canta el coro de la última canción que tocaste", 
"Envia un audio de voz a tu ex / enamorado / novia, dile hola (nombre), quiero llamar, solo un momento. Te Extraño🥺👉🏼👈🏼 ", 
"Dile a la gente al azar: Primero me dijeron que era tu gemelo, nos separamos y luego me sometí a una cirugía plástica. Y esto", 
"¡Haz 1 rima para el primer jugador!", 
"cuenta tu propia versión de cosas vergonzosas", 
"cambiar el nombre a 'Gay' durante 24 horas", 
"¡Menciona tu tipo de novia!", 
"Di 'Estoy enamorado de ti, ¿quieres ser mi novio o no?' al último sexo opuesto con el que conversaste en WhatsApp, espera a que responda", 
"Háblale a tu ex por WhatsApp y dile 'te amo, por favor vuelve'. Manda una captura de pantalla como evidencia de reto cumplido!"
] 
