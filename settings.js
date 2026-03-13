/*
    # Credits By Danzo
  https://wa.me/6283152752532
  
 NO HAPUS CREDITS!!!!!!! HARGAI PEMBUATNYA
*/
import fs from "fs";
import chalk from "chalk";
import { fileURLToPath, pathToFileURL } from "url";

const __filename = fileURLToPath(import.meta.url);

//settings custom pairing kode 
global.pairingKode = "ANDY2007" //max 8 huruf boleh huruf atau angka atau kombinasi keduanya 
//settings akses bot
global.owner = ["50937186680"]

//settings info bot
global.versi = "0.0.1"
global.url = ""
global.namaOwner = "🔥AndyLLC🔥"
global.namaBot = "TYPE SHII"
global.idCh = "120363404502742107@newsletter"

//settings tuhubnail bot
global.thumb = "https://files.catbox.moe/i27pnn.jpg"
global.foto = "https://files.catbox.moe/i27pnn.jpg"

//settings cpanel 
global.loc = "1" // Isi id location
global.egg = "15" // Isi id egg
global.nestid = "5" // Isi id nest
global.domain = "https:" //domain 
global.apikey = "ptla" //plta
global.capikey = "ptlc" //pltc

//settings cpanelv2
global.locV2 = "1" // Isi id location
global.eggV2 = "15" // Isi id egg
global.nestidV2 = "5" // Isi id nest
global.domainV2 = "https:" //domain 
global.apikeyV2 = "ptla_" //plta
global.capikeyV2 = "ptlc_" //pltc

//=======teksPanel==========//
global.teksPanel = 
"* Panel la ekspire apre 1 mwa 🤣\n* Kenbe done sa byen sere wi, pa lage l nan lari 😂\n* Garanti acha 20 jou (5 fwa ranplasman)\n* Pou reklame garanti fòk ou pote prèv chat acha a 🤭\n* Pa gaye done panel la non 😅\n* Pa fè DDOS sou server la ooo 🤣\n> Si gen pwoblèm tanpri fè rapò"


global.mess = {
 owner: "*[AKSÈ REFIZE]*\nSE POU OWNER ANDY SÈLMAN 😎",
 admin: "*[REJTE]* - SÈLMAN ADMIN NAN GROUP YO 🤣",
 botAdmin: "*[REJTE]* - BOT LA DWE ADMIN WI 😅",
 group: "*[REJTE]* - SÈLMAN NAN GROUP LA 🤭",
 sewa: "*[REJTE]* - SÈLMAN ITILIZATÈ PREMIUM YO 💸😂",
 vip: "*[REJTE]* - SÈLMAN OWNER & ITILIZATÈ PREMIUM 🤣",
 private: "*[REJTE]* - SÈLMAN NAN CHAT PRIVE A 😎",
 prem: "*[ Aksè Refize ]*\nFonksyon sa se pou itilizatè premium sèlman 🤣"
}

fs.watchFile(__filename, () => {
    fs.unwatchFile(__filename);
    console.log(chalk.white.bold("~> Mizajou Fichye :"), chalk.green.bold(__filename));
    import(`${pathToFileURL(__filename).href}?update=${Date.now()}`);
});