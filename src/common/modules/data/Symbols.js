"use strict";

/**
 * Symbols
 *
 * @public
 * @const
 * @type {Object.<string, string>}
 */
export const symbols = Object.freeze({
    "--": "–",

    "(e)": "€",
    "...": "…",
    "::": "∷",
    ":=": "≔",
    "~=": "≅",
    "+-": "±",
    "-+": "∓",
    "<<": "≪",
    "<=": "≤",
    "->": "→",
    ">=": "≥",
    ">>": "≫",
    "<=>": "⇔",

    // Fractions
    "1/4": "¼",
    "1/2": "½",
    "3/4": "¾",
    "1/7": "⅐",
    "1/9": "⅑",
    "1/10": "⅒",
    "1/3": "⅓",
    "2/3": "⅔",
    "1/5": "⅕",
    "2/5": "⅖",
    "3/5": "⅗",
    "4/5": "⅘",
    "1/6": "⅙",
    "5/6": "⅚",
    "1/8": "⅛",
    "3/8": "⅜",
    "5/8": "⅝",
    "7/8": "⅞",

    // Fira Code (https://github.com/tonsky/FiraCode)
    "<--": "⟵",
    "<==": "⟸",
    "==>": "⟹",
    "-->": "⟶",
    "<-->": "⟷",
    "<--|": "⟻",
    "<==|": "⟽",
    "|-->": "⟼",
    "|==>": "⟾",

    "::=": "⩴",
    "__": "＿",
    "==": "⩵",
    "!=": "≠",
    "===": "⩶",
    "<-<": "↢",
    "<<-": "↞",
    "<-": "←",
    "<->": "↔",
    "->>": "↠",
    ">->": "↣",
    "<==>": "⟺",
    "=>": "⇒",
    // "<=": "⇐",
    ">>-": "⤜",
    ">-": "⤚",
    "<~>": "↭",
    "-<": "⤙",
    "-<<": "⤛",
    "<-|": "↤",
    "<=|": "⤆",
    "/\\": "∧", // /\
    "\\/": "∨", // \/
    "|->": "↦",
    "|=>": "⤇",
    "<~~": "↜",
    "<~": "↜",
    "~~": "〰",
    "~>": "↝",
    "~~>": "↝",
    "<<<": "⋘",
    "<>": "◇",
    ">>>": "⋙",
    "<|": "◁",
    "|>": "▷",
    "\\\\": "⑊", // \\
    "||": "‖",
    "..": "‥",
    "---": "—",
    "++": "⧺",
    "+++": "⧻",
    "-|": "⫞",
    "_|_": "⫠",
    "|-": "⊢",
    "||-": "⊩",
    "|=": "⊨",
    "||=": "⊫"
});

/**
 * Emojis
 *
 * @public
 * @const
 * @type {Object.<string, string>}
 */
export const emojis = Object.freeze({
    "100": "💯",
    "ZZZ": "💤",
    "<!>": "⚠️",
    "(-)": "⛔",
    "(\\)": "🚫", // (\)
    // "??": "⁇",
    "[]": "⬜",
    "()": "⚪",
    // "!?": "⁉️",
    "COOL": "🆒",
    "[COOL]": "🆒",
    "FREE": "🆓",
    "[FREE]": "🆓",
    "NEW": "🆕",
    "[NEW]": "🆕",
    "SOS": "🆘",
    "[SOS]": "🆘",
    "UP!": "🆙",
    "[UP!]": "🆙",
    "[BACK]": "🔙",
    "[END]": "🔚",
    "[ON!]": "🔛",
    "[SOON]": "🔜",
    "[TOP]": "🔝",
    "[i]": "ℹ️",
    "[OK]": "🆗",
    "[VS]": "🆚",
    "[x]": "❎",
    "[*]": "*️⃣",
    // ":+1:": "👍",
    // ":-1:": "👎",
    "[->]": "➡️",
    "[<-]": "⬅️",
    "[<->]": "↔️",
    "[#]": "#️⃣",
    "[0]": "0️⃣",
    "[1]": "1️⃣",
    "[2]": "2️⃣",
    "[3]": "3️⃣",
    "[4]": "4️⃣",
    "[5]": "5️⃣",
    "[6]": "6️⃣",
    "[7]": "7️⃣",
    "[8]": "8️⃣",
    "[9]": "9️⃣",
    "[10]": "🔟",

    // Slack (https://github.com/needim/wdt-emoji-bundle/blob/master/emoji.js#L1846-L1895)
    ":o)": "🐵",
    "=)": "😃",
    "=-)": "😃",
    ":>": "😆",
    ":->": "😆",
    ";p": "😜",
    ";-p": "😜",
    ";b": "😜",
    ";-b": "😜",

    "(c)": "©️",
    "(r)": "®️",
    "(tm)": "™️",
    "!!": "‼️",
    ":(": "☹️", // Frown
    ":-(": "☹️", // Frown
    ":|": "😐",
    ":-|": "😐",
    ":D": "😃", // Laughing
    ":-D": "😃", // Laughing
    // ":o": "😲",
    ":-o": "😲",
    // ":p": "😝", // Tongue-out
    ":-p": "😝", // Tongue-out
    // ":b": "😝", // Tongue-out
    ":-b": "😝", // Tongue-out
    ";)": "😉", // Wink
    ";-)": "😉", // Wink
    "</3": "💔",
    "<\\3": "💔", // <\3
    "<3": "❤️",

    // Thunderbird
    ":)": "☺️", // Smile
    ":-)": "☺️", // Smile
    ":[": "😳", // Embarrassed
    ":-[": "😳", // Embarrassed
    ":/": "😕", // Undecided
    ":-/": "😕", // Undecided
    ":\\": "😕", // :\ // Undecided
    ":-\\": "😕", // :-\ // Undecided
    "=-O": "😮", // Surprise
    ":*": "😗", // Kiss
    ":-*": "😗", // Kiss
    ">:o": "😫", // Yell
    "8-)": "😎", // Cool
    ":$": "🤑", // Money-Mouth
    ":-$": "🤑", // Money-Mouth
    ":!": "😬", // Foot-in-Mouth
    ":-!": "😬", // Foot-in-Mouth
    "O:)": "😇", // Innocent
    "O:-)": "😇", // Innocent
    ":'(": "😢", // Cry
    ":'-(": "😢", // Cry
    ":X": "🤐", // Lips-are-Sealed
    ":-X": "🤐", // Lips-are-Sealed

    // Pidgin
    ">:(": "😠",
    ">:-(": "😠",
    "@->--": "🌹",

    // https://github.com/wooorm/emoticon/blob/master/support.md
    ":,(": "😢",
    ":,-(": "😢",
    "]:(": "👿",
    "]:-(": "👿",
    "o:)": "😇",
    "o:-)": "😇",
    "0:)": "😇",
    "0:-)": "😇",
    ":,)": "😂",
    ":,-)": "😂",
    ":')": "😂",
    ":'-)": "😂",
    "X-)": "😆",
    ":-": "😶",
    // ":O": "😲",
    ":-O": "😲",
    // ":0": "😲",
    ":-0": "😲",
    ":@": "😡",
    ":-@": "😡",
    "]:)": "😈",
    "]:-)": "😈",
    ":,'(": "😭",
    ":,'-(": "😭",
    ":',(": "😭",
    ":',-(": "😭",
    // ":P": "😝",
    ":-P": "😝",
    ";P": "😜",
    ";-P": "😜",
    ",:(": "😓",
    ",:-(": "😓",
    "':(": "😓",
    "':-(": "😓",
    ",:)": "😅",
    ",:-)": "😅",
    "':)": "😅",
    "':-)": "😅",
    // ":s": "😒",
    ":-s": "😒",
    // ":z": "😒",
    ":-z": "😒",
    // ":S": "😒",
    ":-S": "😒",
    // ":Z": "😒",
    ":-Z": "😒"
});

/**
 * Single character emojis
 * Disabled by default
 *
 * @public
 * @const
 * @type {Object.<string, string>}
 */
export const charEmojis = Object.freeze({
    "?": "❓",
    "!": "❗"
});
