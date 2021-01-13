let handler  = async (m, { conn, usedPrefix: _p }) => {
  let preview = {}
  try {
    if (!conn.menu) preview = await conn.generateLinkPreview('https://github.com/Arya274/Arya-Bot')
  } catch (e) {
    try {
      if (!conn.menu) preview = await global.conn.generateLinkPreview('https://github.com/Nurutomo/wabot-aq')
    } catch (e) {}
  } finally {
    let exp = global.DATABASE.data.users[m.sender].exp
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'id-Id'
    let weton = ['Pon','Wage','Kliwon','Legi','Pahing'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })

    let text =  conn.menu ? conn.menu
      .replace(/%p/g, _p)
      .replace(/%exp/g, exp)
      .replace(/%name/g, name)
      .replace(/%weton/g, weton)
      .replace(/%week/g, week)
      .replace(/%date/g, date)
      .replace(/%time/g, time): `
🤖 [ANJO BOT] 🤖
Criado por: @Anjo Justiceiro

Oi, ${name} 👋
Exp: ${exp}

📟 Hora: ${time}
📆 Data: ${week}, ${date}

${more.repeat(1000)}

Cara Tambah XP:
+1 Xp/De Boas Vindas
+10 Xp/Comandos

╠═════✪〘 Menu 〙✪═══
║
╠═〘 Xp 〙 ═
╠➥ ${_p}Tabela De Classificação [jumlah user]
║
╠═〘 Comandos 〙 ═
╠➥ ${_p}Menu
╠➥ ${_p}Ajuda
╠➥ ${_p}?
║
╠═〘 Tutorial Do Bot 〙 ═
╠➥ ${_p}Tutorial
║
╠═〘 Outros 〙 ═
╠➥ ${_p}qr <teks>
╠➥ ${_p}stiker (caption)
╠➥ ${_p}stiker <url>
╠➥ ${_p}toimg (reply)
╠➥ ${_p}bucin
╠➥ ${_p}ssweb <url>
╠➥ ${_p}sswebf <url>
╠➥ ${_p}google <pencarian>
╠➥ ${_p}googlef <pencarian>
╠➥ ${_p}readmore <teks>|<sembunyi>
╠➥ ${_p}quran
╠➥ ${_p}modApk
║
╠═〘 INFO GRUPOS 〙 ═
╠➥ ${_p}adicionar [55xxxxxxxxx]
╠➥ ${_p}Dar Adm [@tagmember]
╠➥ ${_p}Tirar Adm [@tagadmin]
╠➥ ${_p}LinkDoGrupo
╠➥ ${_p}ANJO DOMINA [text]
╠➥ ${_p}Esconder a Tag [text]
╠➥ ${_p}Lista Online
╠➥ ${_p}Remover Corno @Member
╠➥ ${_p}Lista de Participantes
║
╠═〘 E 〙 ═
╠➥ ${_p}AnjoBot [Gerar Codigo de Loguin]
╠➥ ${_p}Codar
╠➥ ${_p}GerarCodigo
║
╠═〘 Funções Para ADMS 〙 ═
╠➥ ${_p}Menu+ <teks>
╠➥ ${_p}Menu++ <teks>
╠➥ ${_p}Deletar Mensagens 
╠➥ ${_p}Deletar Mensagens do Grupo
╠➥ ${_p}Silenciar 
╠➥ ${_p}Silenciar Grupo só Para Adms
║
╠═〘 Contatos Do Criador 〙 ═
╠➥ Anjo Justiceiro Domina
╠➥ Github: Em Andamento
║
╠═〘 Info Bot 〙 ═
╠➥ Name : Anjo
╠➥ Codado Para Ser Usado No Termux
╠➥ Duvidas? Wa.me/+5527997141457
╠═════
║
╠═〘 ANJO JUSTICEIRO 〙═
`.trim()
    conn.reply(m.chat, {...preview, text}, m)
  }
}
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
