import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const routeConfigPath = path.join(projectRoot, "src/lib/routeConfig.jsx");
const outputDirectory = path.join(projectRoot, "public/images/blog-hero");
const routeConfig = await readFile(routeConfigPath, "utf8");
const slugs = [
    ...new Set(
        [...routeConfig.matchAll(/path:\s*"\/archive\/([^"]+)"/g)].map(
            ([, slug]) => slug,
        ),
    ),
];

const palettes = {
    binary: [
        ["#ffc66e", "#ff846f", "#7a421d"],
        ["#7de8c4", "#5db8ff", "#175c65"],
        ["#c2a0ff", "#ff89c8", "#603c91"],
    ],
    code: [
        ["#70e3b1", "#69b7ff", "#1d6759"],
        ["#f4c76b", "#ff8c79", "#743d3e"],
        ["#9c9cff", "#73d9ff", "#3f4d8c"],
    ],
    files: [
        ["#8fc7ff", "#b399ff", "#324e8c"],
        ["#71e0c4", "#75aaff", "#205f72"],
        ["#ffc778", "#ff9c8d", "#80451f"],
    ],
    globe: [
        ["#64dcce", "#82bdff", "#176370"],
        ["#9ee28b", "#68d6ec", "#316545"],
        ["#ffd07c", "#ff9c83", "#7b432d"],
    ],
    growth: [
        ["#ff9cbe", "#ffc87a", "#80426d"],
        ["#8ce0b4", "#87c9ff", "#316754"],
        ["#c2a0ff", "#ff9fc1", "#60427e"],
    ],
    hardware: [
        ["#70d9ff", "#8a9eff", "#245d88"],
        ["#83e0bc", "#7ab6ff", "#1d665e"],
        ["#ffc66e", "#ff927c", "#7c431f"],
    ],
    keyboard: [
        ["#b49aff", "#65d9ff", "#543e91"],
        ["#ff9ec7", "#a99bff", "#753e86"],
        ["#78e0bc", "#74baff", "#285d79"],
    ],
    knowledge: [
        ["#ffc876", "#95d6ff", "#815124"],
        ["#d6a4ff", "#ff9abe", "#654080"],
        ["#81dfbf", "#9ac7ff", "#236457"],
    ],
    media: [
        ["#ff9e91", "#ffc76f", "#803c48"],
        ["#8fb9ff", "#c29cff", "#483e8a"],
        ["#74e0c0", "#76bfff", "#24605f"],
    ],
    network: [
        ["#64ddff", "#9d9bff", "#284d94"],
        ["#71e3bf", "#67bdff", "#1c626a"],
        ["#ffc576", "#ff9a9b", "#76452c"],
    ],
    phone: [
        ["#b49aff", "#6fcdff", "#493d91"],
        ["#ff9ec7", "#ffc876", "#793f69"],
        ["#73e1bc", "#8ab7ff", "#28645e"],
    ],
    science: [
        ["#79e2d2", "#b398ff", "#255d76"],
        ["#ffc66e", "#ff8f8c", "#79422f"],
        ["#83c6ff", "#94e2a3", "#2b685c"],
    ],
    system: [
        ["#7fbaff", "#b197ff", "#3b4f92"],
        ["#71e0c1", "#7cbaff", "#24655c"],
        ["#ffc672", "#ff9a7f", "#7a4426"],
    ],
    time: [
        ["#ffd16e", "#ff9d85", "#805122"],
        ["#84dcbb", "#7ebdff", "#30665c"],
        ["#b99cff", "#72d5ff", "#4c4285"],
    ],
};

const topicRules = [
    ["keyboard", /keyboard|shortcut|alt-code/],
    ["network", /tcp|udp|osi-model|common-port|uri-url|w3c|platform-independence/],
    ["binary", /binary|8-bits|coperbyte|divided-by/],
    ["code", /programming|printf|operator-precedence|assembly|exceptions-in-c|spaghetti|1337|coding-and-encoding|hackers-jargon/],
    ["files", /executable-file|file-extension|extensions|resource-hacker|cda-file/],
    ["system", /windows|unix|linux|gnu|macintosh|mac-and-pc|power-toys|process-explorer|that-process/],
    ["globe", /continents|indian-flag/],
    ["time", /am-pm|gmt/],
    ["phone", /phone|mobile-number|nokia/],
    ["science", /electricity|periodic-table/],
    ["media", /vlc|sata-ata-pata/],
    ["growth", /deserve|confidence|you-can-do-it|romantic|never-slept|contact-till/],
    ["hardware", /mother-of-computer|computer|create-your-own-icons|boot-screen/],
    ["knowledge", /words|glossary|abbreviations|terminology|full-form/],
];

function hash(value) {
    let result = 2166136261;
    for (const character of value) {
        result ^= character.charCodeAt(0);
        result = Math.imul(result, 16777619);
    }
    return result >>> 0;
}

function seeded(seed, offset = 0) {
    const value = Math.sin(seed * 0.0001 + offset * 12.9898) * 43758.5453;
    return value - Math.floor(value);
}

function themeFor(slug) {
    return topicRules.find(([, matcher]) => matcher.test(slug))?.[0] ?? "system";
}

function keyboardScene(accent, second, seed) {
    const rows = [
        { count: 12, start: 38 },
        { count: 11, start: 62 },
        { count: 10, start: 88 },
        { count: 8, start: 116 },
    ];
    const keys = rows
        .map(({ count, start }, row) =>
            Array.from({ length: count }, (_, column) => {
                const x = start + column * 53;
                const y = 82 + row * 78;
                const highlighted = (column + row + (seed % 7)) % 9 === 0;
                return `<g><rect x="${x}" y="${y}" width="44" height="54" rx="12" fill="${highlighted ? `${accent}30` : "#1a2940"}" stroke="${highlighted ? `${accent}88` : "#50627d"}" stroke-opacity=".52"/><path d="M${x + 10} ${y + 12}h24" stroke="${highlighted ? accent : "#6e7e98"}" stroke-opacity=".58" stroke-width="3" stroke-linecap="round"/><circle cx="${x + 22}" cy="${y + 37}" r="3" fill="${highlighted ? second : "#687990"}" fill-opacity=".72"/></g>`;
            }).join(""),
        )
        .join("");
    return `<g transform="translate(695 166) rotate(-7 370 230)"><rect x="0" y="0" width="780" height="412" rx="38" fill="#101a2a" stroke="#71829a" stroke-opacity=".7" stroke-width="3"/><rect x="18" y="18" width="744" height="376" rx="28" fill="#131f31"/>${keys}<rect x="245" y="366" width="300" height="13" rx="7" fill="${accent}" fill-opacity=".64"/></g><g transform="translate(1120 110)"><circle r="54" fill="${accent}" fill-opacity=".12" stroke="${accent}" stroke-opacity=".7" stroke-width="2"/><path d="M-18 -11h36M-18 11h36M0 -29v58" stroke="${second}" stroke-width="4" stroke-linecap="round" opacity=".8"/></g>`;
}

function codeScene(accent, second, seed) {
    const lengths = Array.from({ length: 7 }, (_, index) =>
        130 + Math.round(seeded(seed, index) * 270),
    );
    const codeLines = lengths
        .map((length, index) => {
            const y = 164 + index * 45;
            const color = index % 3 === 0 ? second : index % 3 === 1 ? accent : "#9eb0c8";
            return `<circle cx="${82 + (index % 2) * 30}" cy="${y}" r="5" fill="${color}" fill-opacity=".8"/><path d="M112 ${y}h${length}" stroke="${color}" stroke-opacity=".72" stroke-width="10" stroke-linecap="round"/><path d="M${128 + length} ${y}h${Math.round(seeded(seed, index + 20) * 110 + 40)}" stroke="#73849d" stroke-opacity=".4" stroke-width="8" stroke-linecap="round"/>`;
        })
        .join("");
    return `<g transform="translate(710 175) rotate(-3 365 250)"><rect width="740" height="500" rx="34" fill="#101a2a" stroke="#71829a" stroke-opacity=".7" stroke-width="3"/><path d="M0 88h740" stroke="#3a4b63" stroke-width="2"/><circle cx="42" cy="44" r="10" fill="#ff8d83"/><circle cx="78" cy="44" r="10" fill="#ffd079"/><circle cx="114" cy="44" r="10" fill="${accent}"/><rect x="35" y="116" width="670" height="352" rx="20" fill="#121f31"/>${codeLines}<g transform="translate(570 370)"><circle r="58" fill="${second}" fill-opacity=".13" stroke="${second}" stroke-opacity=".75" stroke-width="2"/><path d="m-13 -19-18 19 18 19M13 -19l18 19-18 19M7 -28-7 28" fill="none" stroke="${accent}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g></g>`;
}

function networkScene(accent, second, seed) {
    const center = { x: 402, y: 280 };
    const nodes = Array.from({ length: 10 }, (_, index) => {
        const angle = (Math.PI * 2 * index) / 10 + seeded(seed, index) * 0.2;
        const radius = 196 + seeded(seed, index + 15) * 42;
        return {
            x: Math.round(center.x + Math.cos(angle) * radius),
            y: Math.round(center.y + Math.sin(angle) * radius),
            r: 8 + Math.round(seeded(seed, index + 35) * 10),
        };
    });
    const links = nodes
        .map((node, index) => {
            const next = nodes[(index + (index % 3 === 0 ? 3 : 1)) % nodes.length];
            return `<path d="M${center.x} ${center.y}L${node.x} ${node.y}M${node.x} ${node.y}L${next.x} ${next.y}" fill="none" stroke="${index % 2 ? accent : second}" stroke-opacity=".35" stroke-width="3"/>`;
        })
        .join("");
    const points = nodes
        .map((node, index) => `<circle cx="${node.x}" cy="${node.y}" r="${node.r + 11}" fill="${index % 2 ? accent : second}" fill-opacity=".08"/><circle cx="${node.x}" cy="${node.y}" r="${node.r}" fill="#132238" stroke="${index % 2 ? accent : second}" stroke-width="3"/>`)
        .join("");
    return `<g transform="translate(730 140)"><circle cx="402" cy="280" r="248" fill="${accent}" fill-opacity=".055" stroke="${accent}" stroke-opacity=".28" stroke-width="2"/><circle cx="402" cy="280" r="190" fill="none" stroke="${second}" stroke-opacity=".24" stroke-width="2" stroke-dasharray="5 16"/>${links}<circle cx="402" cy="280" r="72" fill="#17253c" stroke="${accent}" stroke-opacity=".8" stroke-width="3"/><circle cx="402" cy="280" r="46" fill="${accent}" fill-opacity=".12"/><path d="M372 281h60M402 251v60" stroke="${second}" stroke-width="6" stroke-linecap="round"/>${points}<path d="M330 520h145" stroke="${accent}" stroke-opacity=".4" stroke-width="3" stroke-linecap="round"/></g>`;
}

function binaryScene(accent, second, seed) {
    const bits = Array.from({ length: 8 }, (_, index) => {
        const x = 780 + index * 78;
        const height = 180 + Math.round(seeded(seed, index) * 230);
        const y = 570 - height;
        return `<g><rect x="${x}" y="${y}" width="56" height="${height}" rx="22" fill="#17253a" stroke="${index % 2 ? accent : second}" stroke-opacity=".65" stroke-width="2"/><rect x="${x + 8}" y="${y + 12}" width="40" height="${height - 24}" rx="16" fill="${index % 2 ? accent : second}" fill-opacity=".1"/><text x="${x + 28}" y="${y + 56}" fill="${index % 2 ? accent : second}" font-family="monospace" font-size="26" text-anchor="middle" opacity=".88">${(seed >> (index % 16)) & 1}</text><circle cx="${x + 28}" cy="${y + height - 32}" r="5" fill="${index % 2 ? accent : second}" fill-opacity=".7"/></g>`;
    }).join("");
    return `<g><path d="M730 625h760" stroke="#7d8ba2" stroke-opacity=".35" stroke-width="3"/>${bits}<circle cx="1090" cy="275" r="104" fill="${accent}" fill-opacity=".1" stroke="${accent}" stroke-opacity=".7" stroke-width="3"/><circle cx="1090" cy="275" r="70" fill="#132238" stroke="${second}" stroke-opacity=".65" stroke-width="2"/><path d="M1090 229v92M1044 275h92" stroke="${accent}" stroke-opacity=".86" stroke-width="8" stroke-linecap="round"/></g>`;
}

function filesScene(accent, second, seed) {
    const tabs = ["TXT", "BIN", "CFG"].map((label, index) => {
        const x = 1050 + index * 128;
        const y = 244 + Math.round(seeded(seed, index) * 42);
        const color = index % 2 ? second : accent;
        return `<g transform="rotate(${(index - 1) * 8} ${x + 52} ${y + 90})"><path d="M${x} ${y}h74l30 30v126H${x}z" fill="#17263b" stroke="${color}" stroke-opacity=".75" stroke-width="3"/><path d="M${x + 74} ${y}v30h30" fill="${color}" fill-opacity=".25" stroke="${color}" stroke-opacity=".6" stroke-width="2"/><path d="M${x + 18} ${y + 76}h65M${x + 18} ${y + 98}h52" stroke="#8497b0" stroke-opacity=".55" stroke-width="6" stroke-linecap="round"/><text x="${x + 50}" y="${y + 150}" fill="${color}" font-family="monospace" font-size="19" text-anchor="middle">.${label}</text></g>`;
    }).join("");
    return `<g transform="translate(700 125)"><path d="M120 270v-82q0-32 32-32h145l44 45h193q35 0 35 35v244q0 38-38 38H155q-35 0-35-38z" fill="#15243a" stroke="${accent}" stroke-opacity=".75" stroke-width="4"/><path d="M130 245h418" stroke="${second}" stroke-opacity=".6" stroke-width="3"/><rect x="170" y="290" width="292" height="184" rx="20" fill="#1a2b42" stroke="#72839c" stroke-opacity=".5" stroke-width="2"/><path d="M205 335h220M205 370h174M205 405h194" stroke="${accent}" stroke-opacity=".58" stroke-width="8" stroke-linecap="round"/>${tabs}</g>`;
}

function systemScene(accent, second, seed) {
    const windows = Array.from({ length: 3 }, (_, index) => {
        const x = 770 + index * 210;
        const y = 196 + (index % 2) * 72;
        const color = index === 1 ? second : accent;
        return `<g transform="rotate(${(index - 1) * 5} ${x + 130} ${y + 150})"><rect x="${x}" y="${y}" width="310" height="300" rx="25" fill="#142238" stroke="${color}" stroke-opacity=".72" stroke-width="3"/><path d="M${x} ${y + 52}h310" stroke="#576b86" stroke-opacity=".55" stroke-width="2"/><circle cx="${x + 30}" cy="${y + 27}" r="6" fill="${color}"/><circle cx="${x + 52}" cy="${y + 27}" r="6" fill="#7b8ca4"/><rect x="${x + 26}" y="${y + 82}" width="112" height="88" rx="15" fill="${color}" fill-opacity=".14"/><path d="M${x + 48} ${y + 215}h220M${x + 48} ${y + 242}h166" stroke="#91a2b8" stroke-opacity=".45" stroke-width="7" stroke-linecap="round"/><circle cx="${x + 82}" cy="${y + 126}" r="20" fill="${color}" fill-opacity=".72"/></g>`;
    }).join("");
    const orbit = 135 + Math.round(seeded(seed, 10) * 22);
    return `<g>${windows}<circle cx="1110" cy="430" r="${orbit}" fill="none" stroke="${second}" stroke-opacity=".26" stroke-width="2" stroke-dasharray="7 13"/><circle cx="1110" cy="430" r="12" fill="${accent}"/><path d="M1110 283v-42M1257 430h42M1110 577v42M963 430h-42" stroke="${accent}" stroke-opacity=".6" stroke-width="4" stroke-linecap="round"/></g>`;
}

function globeScene(accent, second, seed) {
    const rotation = Math.round(seeded(seed, 3) * 50 - 25);
    return `<g transform="translate(1055 445)"><circle r="245" fill="#14263b" stroke="${accent}" stroke-opacity=".8" stroke-width="4"/><circle r="220" fill="${accent}" fill-opacity=".12"/><ellipse rx="220" ry="100" fill="none" stroke="${second}" stroke-opacity=".62" stroke-width="3"/><ellipse rx="112" ry="220" fill="none" stroke="${second}" stroke-opacity=".48" stroke-width="3"/><path d="M-217 0h434M0-216v432" stroke="${accent}" stroke-opacity=".42" stroke-width="2"/><path d="M${-128 + rotation} -105q60-44 93 2l-8 66q-36 42-87 15l-33-43zM37-139q67-11 95 47l-19 51-47 9-17 70-42 18-28-53 24-51-27-38zM-77 68l67 17 34 72-38 50-49-39-28-67z" fill="${accent}" fill-opacity=".8"/><path d="M-300 292q295 82 600 0" fill="none" stroke="${second}" stroke-opacity=".48" stroke-width="3"/></g>`;
}

function timeScene(accent, second, seed) {
    const ticks = Array.from({ length: 12 }, (_, index) => {
        const angle = (Math.PI * 2 * index) / 12;
        const x1 = 1100 + Math.cos(angle) * 178;
        const y1 = 420 + Math.sin(angle) * 178;
        const x2 = 1100 + Math.cos(angle) * 194;
        const y2 = 420 + Math.sin(angle) * 194;
        return `<path d="M${x1.toFixed(1)} ${y1.toFixed(1)}L${x2.toFixed(1)} ${y2.toFixed(1)}" stroke="${index % 3 ? second : accent}" stroke-width="${index % 3 ? 5 : 9}" stroke-linecap="round"/>`;
    }).join("");
    const handAngle = seeded(seed, 23) * Math.PI * 2;
    const hx = 1100 + Math.cos(handAngle) * 114;
    const hy = 420 + Math.sin(handAngle) * 114;
    return `<g><circle cx="1100" cy="420" r="226" fill="#142238" stroke="${accent}" stroke-opacity=".72" stroke-width="4"/><circle cx="1100" cy="420" r="198" fill="none" stroke="${second}" stroke-opacity=".5" stroke-width="2" stroke-dasharray="5 12"/>${ticks}<path d="M1100 420L${hx.toFixed(1)} ${hy.toFixed(1)}M1100 420v-94" stroke="${second}" stroke-width="8" stroke-linecap="round"/><circle cx="1100" cy="420" r="15" fill="${accent}"/><path d="M856 720q248-109 490 0" fill="none" stroke="${accent}" stroke-opacity=".38" stroke-width="4"/><circle cx="882" cy="690" r="10" fill="${second}"/><circle cx="1320" cy="685" r="10" fill="${accent}"/></g>`;
}

function phoneScene(accent, second, seed) {
    const messageLines = Array.from({ length: 4 }, (_, index) => {
        const y = 296 + index * 55;
        const width = 130 + Math.round(seeded(seed, index) * 85);
        return `<rect x="965" y="${y}" width="${width}" height="18" rx="9" fill="${index % 2 ? second : accent}" fill-opacity=".${index % 2 ? "4" : "55"}"/>`;
    }).join("");
    return `<g><path d="M1285 253q142 131 0 262M1330 200q202 185 0 370" fill="none" stroke="${second}" stroke-opacity=".46" stroke-width="5" stroke-linecap="round"/><rect x="858" y="135" width="300" height="590" rx="48" fill="#111c2e" stroke="${accent}" stroke-opacity=".8" stroke-width="4"/><rect x="877" y="175" width="262" height="493" rx="30" fill="#16263c" stroke="#61758f" stroke-opacity=".46" stroke-width="2"/><rect x="966" y="150" width="86" height="10" rx="5" fill="#64758d"/><circle cx="910" cy="220" r="13" fill="${accent}"/><path d="M940 214h118M940 234h76" stroke="#92a5bc" stroke-opacity=".55" stroke-width="6" stroke-linecap="round"/>${messageLines}<circle cx="1008" cy="624" r="12" fill="${second}" fill-opacity=".8"/><circle cx="1095" cy="624" r="12" fill="${accent}" fill-opacity=".8"/></g>`;
}

function scienceScene(accent, second, seed) {
    const orbitRotation = Math.round(seeded(seed, 7) * 55 - 27);
    const tiles = [
        ["8", "O"],
        ["14", "Si"],
        ["26", "Fe"],
    ].map(([number, symbol], index) => {
        const x = 1190 + index * 100;
        const y = 295 + (index % 2) * 144;
        return `<g><rect x="${x}" y="${y}" width="82" height="92" rx="16" fill="#15253a" stroke="${index % 2 ? second : accent}" stroke-opacity=".75" stroke-width="2"/><text x="${x + 14}" y="${y + 22}" fill="#b3c3d5" font-family="monospace" font-size="12">${number}</text><text x="${x + 41}" y="${y + 61}" fill="${index % 2 ? second : accent}" font-family="sans-serif" font-size="30" font-weight="700" text-anchor="middle">${symbol}</text></g>`;
    }).join("");
    return `<g transform="translate(0 0)"><circle cx="945" cy="430" r="74" fill="${accent}" fill-opacity=".18" stroke="${accent}" stroke-width="3"/><circle cx="945" cy="430" r="30" fill="${second}" fill-opacity=".85"/><ellipse cx="945" cy="430" rx="220" ry="86" fill="none" stroke="${second}" stroke-opacity=".72" stroke-width="4" transform="rotate(${orbitRotation} 945 430)"/><ellipse cx="945" cy="430" rx="220" ry="86" fill="none" stroke="${accent}" stroke-opacity=".66" stroke-width="4" transform="rotate(${90 + orbitRotation} 945 430)"/><circle cx="1138" cy="346" r="15" fill="${accent}"/><circle cx="855" cy="220" r="13" fill="${second}"/>${tiles}<path d="M780 665h560" stroke="${accent}" stroke-opacity=".32" stroke-width="3"/></g>`;
}

function mediaScene(accent, second, seed) {
    const bars = Array.from({ length: 18 }, (_, index) => {
        const x = 1160 + index * 17;
        const height = 32 + Math.round(seeded(seed, index) * 132);
        return `<rect x="${x}" y="${420 - height / 2}" width="9" height="${height}" rx="5" fill="${index % 2 ? accent : second}" fill-opacity=".${index % 3 === 0 ? "86" : "55"}"/>`;
    }).join("");
    return `<g><circle cx="930" cy="430" r="230" fill="#111d30" stroke="${accent}" stroke-opacity=".8" stroke-width="4"/><circle cx="930" cy="430" r="182" fill="none" stroke="${second}" stroke-opacity=".52" stroke-width="3"/><circle cx="930" cy="430" r="126" fill="none" stroke="${accent}" stroke-opacity=".48" stroke-width="3"/><circle cx="930" cy="430" r="72" fill="${second}" fill-opacity=".2" stroke="${second}" stroke-width="2"/><circle cx="930" cy="430" r="22" fill="${accent}" fill-opacity=".9"/><path d="M930 200a230 230 0 0 1 230 230" fill="none" stroke="${second}" stroke-width="8" stroke-linecap="round"/>${bars}<path d="M1140 560h360" stroke="#8c9cb2" stroke-opacity=".35" stroke-width="2"/></g>`;
}

function growthScene(accent, second, seed) {
    const stars = Array.from({ length: 14 }, (_, index) => {
        const x = 780 + Math.round(seeded(seed, index) * 650);
        const y = 145 + Math.round(seeded(seed, index + 20) * 390);
        const radius = 3 + Math.round(seeded(seed, index + 40) * 6);
        return `<circle cx="${x}" cy="${y}" r="${radius}" fill="${index % 2 ? accent : second}" fill-opacity=".7"/>`;
    }).join("");
    return `<g><circle cx="1130" cy="445" r="245" fill="${accent}" fill-opacity=".08" stroke="${accent}" stroke-opacity=".35" stroke-width="2"/><path d="M790 648q122-115 244-35t252-34 246 20" fill="none" stroke="${second}" stroke-opacity=".68" stroke-width="5" stroke-linecap="round"/><path d="M1110 605V348M1110 480q-126-106-185-23 36 105 185 107M1110 431q110-137 197-69-16 122-197 153" fill="none" stroke="${accent}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><path d="m1067 350 43-52 43 52" fill="none" stroke="${second}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="1320" cy="265" r="54" fill="${second}" fill-opacity=".14" stroke="${second}" stroke-opacity=".7" stroke-width="2"/><path d="M1294 265h52M1320 239v52" stroke="${accent}" stroke-width="5" stroke-linecap="round"/>${stars}</g>`;
}

function hardwareScene(accent, second, seed) {
    const pins = Array.from({ length: 8 }, (_, index) => {
        const offset = 82 + index * 58;
        return `<path d="M${offset} 140v-72M${offset} 530v72M140 ${offset}h-72M530 ${offset}h72" stroke="${index % 2 ? accent : second}" stroke-opacity=".7" stroke-width="8" stroke-linecap="round"/>`;
    }).join("");
    const traces = Array.from({ length: 6 }, (_, index) => {
        const y = 220 + index * 48;
        const length = 130 + Math.round(seeded(seed, index) * 120);
        return `<path d="M760 ${y}h${length}l34 34h100" fill="none" stroke="${index % 2 ? accent : second}" stroke-opacity=".48" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="${894 + length}" cy="${y + 34}" r="6" fill="${index % 2 ? accent : second}"/>`;
    }).join("");
    return `<g transform="translate(790 112)">${traces}<rect x="140" y="140" width="390" height="390" rx="46" fill="#132138" stroke="${accent}" stroke-opacity=".85" stroke-width="4"/>${pins}<rect x="203" y="203" width="264" height="264" rx="32" fill="#1a2c45" stroke="${second}" stroke-opacity=".72" stroke-width="3"/><rect x="258" y="258" width="154" height="154" rx="24" fill="${accent}" fill-opacity=".11" stroke="${accent}" stroke-opacity=".7" stroke-width="3"/><path d="M285 337h100M335 287v100" stroke="${second}" stroke-width="8" stroke-linecap="round"/><circle cx="335" cy="337" r="18" fill="${accent}" fill-opacity=".82"/></g>`;
}

function knowledgeScene(accent, second, seed) {
    const lines = Array.from({ length: 5 }, (_, index) => {
        const y = 362 + index * 38;
        const width = 174 + Math.round(seeded(seed, index) * 115);
        return `<path d="M${812 + width} ${y}h-${width}" stroke="${index % 2 ? accent : second}" stroke-opacity=".5" stroke-width="7" stroke-linecap="round"/>`;
    }).join("");
    return `<g><path d="M790 260q145-74 290 0v354q-145-74-290 0z" fill="#16263c" stroke="${accent}" stroke-opacity=".78" stroke-width="4"/><path d="M1080 260q145-74 290 0v354q-145-74-290 0z" fill="#192940" stroke="${second}" stroke-opacity=".78" stroke-width="4"/><path d="M1080 264v350" stroke="#8da0b8" stroke-opacity=".6" stroke-width="4"/>${lines}<path d="M1097 362h170M1097 400h144M1097 438h159M1097 476h118M1097 514h152" stroke="#8da0b8" stroke-opacity=".46" stroke-width="7" stroke-linecap="round"/><path d="M760 650q320 67 641 0" fill="none" stroke="${accent}" stroke-opacity=".35" stroke-width="3"/></g>`;
}

const scenes = {
    binary: binaryScene,
    code: codeScene,
    files: filesScene,
    globe: globeScene,
    growth: growthScene,
    hardware: hardwareScene,
    keyboard: keyboardScene,
    knowledge: knowledgeScene,
    media: mediaScene,
    network: networkScene,
    phone: phoneScene,
    science: scienceScene,
    system: systemScene,
    time: timeScene,
};

function makeArtwork(slug) {
    const seed = hash(slug);
    const theme = themeFor(slug);
    const [accent, second, glow] = palettes[theme][seed % palettes[theme].length];
    const scene = scenes[theme](accent, second, seed);
    const sparkles = Array.from({ length: 24 }, (_, index) => {
        const x = 40 + Math.round(seeded(seed, index) * 1510);
        const y = 36 + Math.round(seeded(seed, index + 50) * 820);
        const radius = 1 + Math.round(seeded(seed, index + 100) * 3);
        const color = index % 2 ? accent : second;
        return `<circle cx="${x}" cy="${y}" r="${radius}" fill="${color}" fill-opacity=".${Math.round(seeded(seed, index + 150) * 5 + 2)}"/>`;
    }).join("");
    const angle = Math.round(seeded(seed, 220) * 16 - 8);
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" fill="none">
  <defs>
    <linearGradient id="background" x1="80" y1="30" x2="1500" y2="900" gradientUnits="userSpaceOnUse"><stop stop-color="#0b1220"/><stop offset=".52" stop-color="#111d30"/><stop offset="1" stop-color="#1a2638"/></linearGradient>
    <radialGradient id="ambient" cx="0" cy="0" r="1" gradientTransform="translate(1120 420) rotate(90) scale(520 700)" gradientUnits="userSpaceOnUse"><stop stop-color="${glow}" stop-opacity=".28"/><stop offset="1" stop-color="${glow}" stop-opacity="0"/></radialGradient>
    <pattern id="grid" width="72" height="72" patternUnits="userSpaceOnUse"><path d="M72 0H0v72" stroke="#91a3bd" stroke-opacity=".075" stroke-width="1"/></pattern>
    <linearGradient id="edge" x1="300" y1="120" x2="1440" y2="820" gradientUnits="userSpaceOnUse"><stop stop-color="${accent}" stop-opacity=".22"/><stop offset="1" stop-color="${second}" stop-opacity=".06"/></linearGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#background)"/>
  <rect width="1600" height="900" fill="url(#ambient)"/>
  <rect width="1600" height="900" fill="url(#grid)"/>
  <path d="M0 717C282 574 481 833 742 720c258-113 407-357 858-282v462H0V717Z" fill="url(#edge)" fill-opacity=".45"/>
  <path d="M0 751C274 633 479 870 744 758c262-110 489-315 856-236" stroke="${accent}" stroke-opacity=".18" stroke-width="3"/>
  <circle cx="210" cy="196" r="100" fill="${second}" fill-opacity=".055"/>
  <circle cx="1460" cy="730" r="176" fill="${accent}" fill-opacity=".05"/>
  <g transform="rotate(${angle} 1120 450)">${scene}</g>
  <g>${sparkles}</g>
  <path d="M55 76h52M55 76v52M1545 76h-52M1545 76v52M55 824h52M55 824v-52M1545 824h-52M1545 824v-52" stroke="${accent}" stroke-opacity=".4" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
}

await mkdir(outputDirectory, { recursive: true });
await Promise.all(
    slugs.map((slug) =>
        writeFile(path.join(outputDirectory, `${slug}.svg`), makeArtwork(slug)),
    ),
);
console.log(`Generated ${slugs.length} original local hero illustrations.`);
