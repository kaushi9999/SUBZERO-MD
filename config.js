const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // ===== BOT CORE SETTINGS =====
    SESSION_ID: process.env.SESSION_ID || "",  // SUBZERO-MD~g8xXiLCT#oP8Wh0BGbN-E8Q3w4buHCBqx6SI6negLBM5w2qlJpqQ (keep it secure)
    PREFIX: process.env.PREFIX || ".",         // . (e.g., "., / ! * - +")
    BOT_NAME: process.env.BOT_NAME || "SUBZERO-MD",  // NIMA FX
    MODE: process.env.MODE || "public",        // Bot mode: public
    REPO: process.env.REPO || "https://github.com/mrfrankofcc/SUBZERO-MD",  // Bot's GitHub repo

    // ===== OWNER & DEVELOPER SETTINGS =====
    OWNER_NUMBER: process.env.OWNER_NUMBER || "263719647303",  // 94769918004
    OWNER_NAME: process.env.OWNER_NAME || "Mr Frank",           // WIHANGA
    DEV: process.env.DEV || "263719647303",                     // Developer's contact number
    DEVELOPER_NUMBER: '263719647303@s.whatsapp.net',            // Developer's WhatsApp ID

    // ===== AUTO-RESPONSE SETTINGS =====
    AUTO_REPLY: process.env.AUTO_REPLY || "false",              // False
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",// True
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY SUBZERO 🤍*",  // False
    READ_MESSAGE: process.env.READ_MESSAGE || "false",          // False

    // ===== REACTION & STICKER SETTINGS =====
    AUTO_REACT: process.env.AUTO_REACT || "false",              // False
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",          // True
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",  // Custom reaction emojis
    STICKER_NAME: process.env.STICKER_NAME || "SUBZERO-MD",     // Sticker pack name
    AUTO_STICKER: process.env.AUTO_STICKER || "false",          // True

    // ===== MEDIA & AUTOMATION =====
    AUTO_VOICE: process.env.AUTO_VOICE || "false",              // False
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",      // True
    AUTO_TYPING: process.env.AUTO_TYPING || "false",            // False
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.postimg.cc/zv76KffW/IMG-20250115-WA0020.jpg",  // Bot's "alive" image

    // ===== SECURITY & ANTI-FEATURES =====
    ANTI_BAD: process.env.ANTI_BAD || "false",                  // True
    ANTI_LINK: process.env.ANTI_LINK || "true",                 // True
    ANTI_VV: process.env.ANTI_VV || "true",                     // True
    DELETE_LINKS: process.env.DELETE_LINKS || "false",          // True
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log",          // True

    // ===== BOT BEHAVIOR & APPEARANCE =====
    DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ ғʀᴀɴᴋ*",  // Bot description
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",              // True
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",        // True
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true", // True
};
