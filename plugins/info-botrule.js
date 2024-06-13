let handler = async (m, {conn, text}) => {
let regla = `Aun no disponible`.trim();
  m.sendMessage(m.chat, regla);
};
handler.help = ["follar"];
handler.tags = ["fun"];
handler.command = /^(botrule)$/i;
export default handler;
