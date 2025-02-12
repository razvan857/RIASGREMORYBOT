//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "2348086541281";
global.sudo = process.env.SUDO || "2348086541281";
global.owner = process.env.OWNER_NUMBER || "6282120460623";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUJ5dUg1Y2VoVzEzZzZnVEZKdHJiUkJ2dUFnNzlKUEUvM0o1QlRHVUFtRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieDQvQmYzUDFidUlENmJJV2FFeVkxZ3l2cUNQbWw2WE9KUmRPWVJaY1VGYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSzRXNVRHYnA0N1I1SldzazRWZ21mRVY4RW1DTldYRC96b0tjbWVPaWtVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDRmcvU0ZFcDJiZzdZL2RNR1VvaWRIVG50bHZJbVBnRTBuOGg1ZG82NlhNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1QWi9oQVNSaDB0TkZpMlhQb1F4bGlvelozT2dSYkpDZ0V5YythZElPVzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZXeXZici9zVjUwbUlMUDF0YlhPU2t5aUErYm5yTFZ4aTVwaW5HdHNYVWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0tjQitOb0V5S05Dem9nVm1reXJhS2kvTGNkL2E1MHhDTmI0UU5qNGhWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicGptYUtNTFh5S0JJZEI1dzgyOGdiRndwRnFTYXpvTzRCNHBpRkdYWVdrVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndjNXh3b0JoUjQxNmdkcTR0VjN6cUZ4YnhPYWEydzVWVUJiQ1JyZG5lS0ZaQldTRlVUMW1Ba0JCSkRqeWFMUmkxOU1aU0VtTnNpazArTlNuaDEzK0NBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEsImFkdlNlY3JldEtleSI6IjFyYjBaQ0ZOWmJRYllLaWNHZFhJc2VtNmRZOWxyYlhYRnN2bk1GRW0wUnc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNjI4MjEyMDQ2MDYyM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQTYwQ0EzNzU1RDUwNzY5NUZCQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM5MzcxMTU1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI2MjgyMTIwNDYwNjIzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBM0MxRUNCNjc1ODFBNjBEQzI2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzkzNzExNTZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkFPVldzYWtkUXNXbG9zOHhBeW16M0EiLCJwaG9uZUlkIjoiMWQ0Zjg0YTQtZWIyZC00ZTFjLTk4ZDktYmE4ZWJjNWUwNDc3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVFWTMzZWhpMHN2SlZBV2lmYSs2cGhxQ0EyQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUVm9JV0NCRjlJVm9RWi9ZeTVMNzZDaUpQbnM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWDE3S0ZONEsiLCJtZSI6eyJpZCI6IjYyODIxMjA0NjA2MjM6NThAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQnl0ZUdob3N0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQL1MwNVlFRUlUbHNyMEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJqSXB3YThleHRITlp0YjNmUUhSZmR3Unc1VTdtcFZKRHA0Qk1lcExra2t3PSIsImFjY291bnRTaWduYXR1cmUiOiJHWVBVSE9jWEpXSVlmZTY2NkJjWVM1QXNLa1JWSGw3akJNRngxaGp0WFdCQlcvRVBJdGMwTExqRjdoS3crQVNpRUdSSDM2Smcram5uZ1pzUUpjeUpCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZ2hVZ3NlUTMrTU1RMGFtMXNrcksvaWNGZU13WGtKWktObm9jaW9RbTFRcXl0L0d0NVJKZ1N4enViZldhRVJ6ZFRmVjVXc0pwWnRyTTBwREpRYUEvQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI2MjgyMTIwNDYwNjIzOjU4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQll5S2NHdkhzYlJ6V2JXOTMwQjBYM2NFY09WTzVxVlNRNmVBVEhxUzVKSk0ifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzkzNzExNTMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUFdoIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
