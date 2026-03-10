import{c as s,T as d,j as o,F as f,a as v,y as B,ah as k,ax as j,ac as S,af as C,J as D}from"./index-DR_KT_2c.js";import{a as p}from"./index-BVQEq3KF.js";import{S as A}from"./index-D4exoH3I.js";const t={Wrapper:s.div`
        width: 100%;
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 24px 20px 40px;
        display: flex;
        flex-direction: column;
        gap: 18px;
    `,HeroCard:s.section`
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background: linear-gradient(
            180deg,
            color-mix(in srgb, var(--color-surface) 95%, transparent),
            color-mix(in srgb, var(--color-surface-2) 100%, transparent)
        );
        box-shadow: 0 20px 48px var(--color-shadow);
        padding: 24px;
        overflow: hidden;
        position: relative;

        .badgeRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
            margin-bottom: 14px;
        }

        .badge {
            min-height: 34px;
            padding: 0 12px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-primary);
            font-size: 12px;
            font-weight: 800;
        }

        .badge.muted {
            color: var(--color-text-secondary);
        }

        h1 {
            font-size: clamp(30px, 4vw, 48px);
            line-height: 1.02;
            letter-spacing: -0.04em;
            margin-bottom: 14px;
        }

        .lead {
            max-width: 860px;
            font-size: 16px;
            line-height: 1.85;
            color: var(--color-text-secondary);
        }

        .metaGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 22px;

            @media (max-width: 760px) {
                grid-template-columns: 1fr;
            }
        }

        .metaCard {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .metaIcon {
            width: 40px;
            height: 40px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-primary);
        }

        .metaCard strong {
            display: block;
            margin-bottom: 4px;
            font-size: 18px;
            line-height: 1.1;
        }

        .metaCard span:last-child {
            display: block;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `,InfoCard:s.section`
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background: linear-gradient(
            180deg,
            var(--color-surface) 0%,
            var(--color-surface-2) 100%
        );
        box-shadow: 0 18px 40px var(--color-shadow);
        padding: 22px;

        .sectionHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 14px;
        }

        .iconWrap {
            width: 42px;
            height: 42px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            background: var(--color-surface-3);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
        }

        h2 {
            font-size: 24px;
            line-height: 1.12;
        }

        p {
            color: var(--color-text-secondary);
            font-size: 15px;
            line-height: 1.85;
        }

        p + p {
            margin-top: 12px;
        }
    `,ControlCard:s.section`
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background: linear-gradient(
            180deg,
            var(--color-surface) 0%,
            var(--color-surface-2) 100%
        );
        box-shadow: 0 18px 40px var(--color-shadow);
        padding: 22px;

        .sectionHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 14px;
        }

        .iconWrap {
            width: 42px;
            height: 42px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            background: var(--color-surface-3);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
        }

        h2 {
            font-size: 24px;
            line-height: 1.12;
        }

        .searchRow {
            display: grid;
            grid-template-columns: minmax(0, 1fr) auto;
            gap: 12px;

            @media (max-width: 720px) {
                grid-template-columns: 1fr;
            }
        }

        .searchBox {
            position: relative;
        }

        .searchIcon {
            position: absolute;
            left: 14px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--color-text-muted);
        }

        input {
            width: 100%;
            height: 48px;
            padding: 0 14px 0 42px;
            border-radius: var(--radius-sm);
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-primary);
        }

        input:focus {
            border-color: var(--color-primary);
            background: var(--color-surface);
        }

        .resetBtn {
            min-height: 48px;
            padding: 0 16px;
            border-radius: var(--radius-sm);
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-primary);
            font-weight: 700;
            transition:
                background var(--transition-fast),
                border-color var(--transition-fast),
                transform var(--transition-fast);
        }

        .resetBtn:hover {
            background: var(--color-surface);
            border-color: var(--color-border-light);
        }

        .chipRow {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 16px;
        }

        .chip {
            min-height: 36px;
            padding: 0 12px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-secondary);
            font-size: 12px;
            font-weight: 800;
            transition:
                background var(--transition-fast),
                color var(--transition-fast),
                border-color var(--transition-fast);
        }

        .chip:hover {
            background: var(--color-surface);
            color: var(--color-text-primary);
        }

        .chip.active {
            background: var(--color-text-primary);
            color: var(--color-text-inverse);
            border-color: var(--color-text-primary);
        }
    `,TableCard:s.section`
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background: linear-gradient(
            180deg,
            var(--color-surface) 0%,
            var(--color-surface-2) 100%
        );
        box-shadow: 0 18px 40px var(--color-shadow);
        padding: 22px;

        .sectionHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 16px;
        }

        .iconWrap {
            width: 42px;
            height: 42px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            background: var(--color-surface-3);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
        }

        h2 {
            font-size: 24px;
            line-height: 1.12;
        }

        .tableWrap {
            overflow-x: auto;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
        }

        table {
            width: 100%;
            min-width: 860px;
        }

        thead th {
            text-align: left;
            padding: 14px 14px;
            background: var(--color-surface-3);
            border-bottom: 1px solid var(--color-border);
            color: var(--color-text-primary);
            font-size: 13px;
            font-weight: 800;
        }

        tbody td {
            padding: 12px 14px;
            border-bottom: 1px solid var(--color-border);
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
            vertical-align: middle;
        }

        tbody tr:hover {
            background: color-mix(
                in srgb,
                var(--color-surface-3) 75%,
                transparent
            );
        }

        .codeCell {
            white-space: nowrap;
            color: var(--color-text-primary);
            font-weight: 800;
        }

        .symbolCell {
            min-width: 90px;
        }

        .symbolBox {
            min-width: 44px;
            min-height: 44px;
            padding: 0 10px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-sm);
            background: var(--color-surface-3);
            color: var(--color-text-primary);
            font-size: 22px;
            line-height: 1;
        }

        .spaceTag,
        .groupTag {
            min-height: 30px;
            padding: 0 10px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--color-border);
            border-radius: 999px;
            background: var(--color-surface-3);
            color: var(--color-text-secondary);
            font-size: 12px;
            font-weight: 800;
        }

        .copyBtn {
            min-height: 36px;
            padding: 0 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-sm);
            background: var(--color-surface-3);
            color: var(--color-text-primary);
            font-size: 12px;
            font-weight: 800;
            transition:
                background var(--transition-fast),
                border-color var(--transition-fast),
                transform var(--transition-fast);
        }

        .copyBtn:hover {
            background: var(--color-surface);
            border-color: var(--color-border-light);
        }

        .emptyState {
            padding: 18px;
            border: 1px dashed var(--color-border-light);
            border-radius: var(--radius-md);
            color: var(--color-text-muted);
            font-size: 14px;
            line-height: 1.7;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 90%,
                transparent
            );
        }
    `,FooterNote:s.section`
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background: linear-gradient(
            180deg,
            color-mix(in srgb, var(--color-surface) 96%, transparent),
            color-mix(in srgb, var(--color-surface-2) 100%, transparent)
        );
        box-shadow: 0 18px 40px var(--color-shadow);
        padding: 22px;

        h2 {
            font-size: 24px;
            line-height: 1.12;
            margin-bottom: 10px;
        }

        ul {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        ul li {
            position: relative;
            padding-left: 18px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.75;
        }

        ul li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
        }
    `},g=[{code:1,symbol:"☺",label:"White smiling face",group:"Symbols"},{code:2,symbol:"☻",label:"Black smiling face",group:"Symbols"},{code:3,symbol:"♥",label:"Heart suit",group:"Symbols"},{code:4,symbol:"♦",label:"Diamond suit",group:"Symbols"},{code:5,symbol:"♣",label:"Club suit",group:"Symbols"},{code:6,symbol:"♠",label:"Spade suit",group:"Symbols"},{code:7,symbol:"•",label:"Bullet",group:"Symbols"},{code:8,symbol:"◘",label:"Inverse bullet",group:"Symbols"},{code:9,symbol:"○",label:"White circle",group:"Symbols"},{code:10,symbol:"◙",label:"Inverse white circle",group:"Symbols"},{code:11,symbol:"♂",label:"Male sign",group:"Symbols"},{code:12,symbol:"♀",label:"Female sign",group:"Symbols"},{code:13,symbol:"♪",label:"Eighth note",group:"Symbols"},{code:14,symbol:"♫",label:"Beamed eighth notes",group:"Symbols"},{code:15,symbol:"☼",label:"White sun",group:"Symbols"},{code:16,symbol:"►",label:"Black right-pointing pointer",group:"Arrows"},{code:17,symbol:"◄",label:"Black left-pointing pointer",group:"Arrows"},{code:18,symbol:"↕",label:"Up-down arrow",group:"Arrows"},{code:19,symbol:"‼",label:"Double exclamation mark",group:"Punctuation"},{code:20,symbol:"¶",label:"Pilcrow sign",group:"Punctuation"},{code:21,symbol:"§",label:"Section sign",group:"Punctuation"},{code:22,symbol:"▬",label:"Black rectangle",group:"Box Drawing"},{code:23,symbol:"↨",label:"Up-down arrow with base",group:"Arrows"},{code:24,symbol:"↑",label:"Up arrow",group:"Arrows"},{code:25,symbol:"↓",label:"Down arrow",group:"Arrows"},{code:26,symbol:"→",label:"Right arrow",group:"Arrows"},{code:27,symbol:"←",label:"Left arrow",group:"Arrows"},{code:28,symbol:"∟",label:"Right angle",group:"Math"},{code:29,symbol:"↔",label:"Left-right arrow",group:"Arrows"},{code:30,symbol:"▲",label:"Black up-pointing triangle",group:"Shapes"},{code:31,symbol:"▼",label:"Black down-pointing triangle",group:"Shapes"},{code:32,symbol:" ",label:"Space",group:"ASCII"},{code:127,symbol:"⌂",label:"House",group:"Shapes"},{code:255,symbol:" ",label:"Space",group:"ASCII"}],G=[{code:128,symbol:"Ç",label:"Capital C with cedilla",group:"Extended Latin"},{code:129,symbol:"ü",label:"Small u with diaeresis",group:"Extended Latin"},{code:130,symbol:"é",label:"Small e with acute",group:"Extended Latin"},{code:131,symbol:"â",label:"Small a with circumflex",group:"Extended Latin"},{code:132,symbol:"ä",label:"Small a with diaeresis",group:"Extended Latin"},{code:133,symbol:"à",label:"Small a with grave",group:"Extended Latin"},{code:134,symbol:"å",label:"Small a with ring",group:"Extended Latin"},{code:135,symbol:"ç",label:"Small c with cedilla",group:"Extended Latin"},{code:136,symbol:"ê",label:"Small e with circumflex",group:"Extended Latin"},{code:137,symbol:"ë",label:"Small e with diaeresis",group:"Extended Latin"},{code:138,symbol:"è",label:"Small e with grave",group:"Extended Latin"},{code:139,symbol:"ï",label:"Small i with diaeresis",group:"Extended Latin"},{code:140,symbol:"î",label:"Small i with circumflex",group:"Extended Latin"},{code:141,symbol:"ì",label:"Small i with grave",group:"Extended Latin"},{code:142,symbol:"Ä",label:"Capital A with diaeresis",group:"Extended Latin"},{code:143,symbol:"Å",label:"Capital A with ring",group:"Extended Latin"},{code:144,symbol:"É",label:"Capital E with acute",group:"Extended Latin"},{code:145,symbol:"æ",label:"Small ae ligature",group:"Extended Latin"},{code:146,symbol:"Æ",label:"Capital AE ligature",group:"Extended Latin"},{code:147,symbol:"ô",label:"Small o with circumflex",group:"Extended Latin"},{code:148,symbol:"ö",label:"Small o with diaeresis",group:"Extended Latin"},{code:149,symbol:"ò",label:"Small o with grave",group:"Extended Latin"},{code:150,symbol:"û",label:"Small u with circumflex",group:"Extended Latin"},{code:151,symbol:"ù",label:"Small u with grave",group:"Extended Latin"},{code:152,symbol:"ÿ",label:"Small y with diaeresis",group:"Extended Latin"},{code:153,symbol:"Ö",label:"Capital O with diaeresis",group:"Extended Latin"},{code:154,symbol:"Ü",label:"Capital U with diaeresis",group:"Extended Latin"},{code:155,symbol:"¢",label:"Cent sign",group:"Currency"},{code:156,symbol:"£",label:"Pound sign",group:"Currency"},{code:157,symbol:"¥",label:"Yen sign",group:"Currency"},{code:158,symbol:"₧",label:"Peseta sign",group:"Currency"},{code:159,symbol:"ƒ",label:"Function sign / florin",group:"Math"},{code:160,symbol:"á",label:"Small a with acute",group:"Extended Latin"},{code:161,symbol:"í",label:"Small i with acute",group:"Extended Latin"},{code:162,symbol:"ó",label:"Small o with acute",group:"Extended Latin"},{code:163,symbol:"ú",label:"Small u with acute",group:"Extended Latin"},{code:164,symbol:"ñ",label:"Small n with tilde",group:"Extended Latin"},{code:165,symbol:"Ñ",label:"Capital N with tilde",group:"Extended Latin"},{code:166,symbol:"ª",label:"Feminine ordinal indicator",group:"Punctuation"},{code:167,symbol:"º",label:"Masculine ordinal indicator",group:"Punctuation"},{code:168,symbol:"¿",label:"Inverted question mark",group:"Punctuation"},{code:169,symbol:"⌐",label:"Reversed not sign",group:"Math"},{code:170,symbol:"¬",label:"Not sign",group:"Math"},{code:171,symbol:"½",label:"One half",group:"Fractions"},{code:172,symbol:"¼",label:"One quarter",group:"Fractions"},{code:173,symbol:"¡",label:"Inverted exclamation mark",group:"Punctuation"},{code:174,symbol:"«",label:"Left angle quote",group:"Punctuation"},{code:175,symbol:"»",label:"Right angle quote",group:"Punctuation"},{code:176,symbol:"░",label:"Light shade",group:"Box Drawing"},{code:177,symbol:"▒",label:"Medium shade",group:"Box Drawing"},{code:178,symbol:"▓",label:"Dark shade",group:"Box Drawing"},{code:179,symbol:"│",label:"Box drawings light vertical",group:"Box Drawing"},{code:180,symbol:"┤",label:"Box drawings vertical left",group:"Box Drawing"},{code:181,symbol:"╡",label:"Box drawings double vertical left",group:"Box Drawing"},{code:182,symbol:"╢",label:"Box drawings vertical double left",group:"Box Drawing"},{code:183,symbol:"╖",label:"Box drawings down double left",group:"Box Drawing"},{code:184,symbol:"╕",label:"Box drawings down left",group:"Box Drawing"},{code:185,symbol:"╣",label:"Box drawings double vertical left",group:"Box Drawing"},{code:186,symbol:"║",label:"Box drawings double vertical",group:"Box Drawing"},{code:187,symbol:"╗",label:"Box drawings double down left",group:"Box Drawing"},{code:188,symbol:"╝",label:"Box drawings double up left",group:"Box Drawing"},{code:189,symbol:"╜",label:"Box drawings up double left",group:"Box Drawing"},{code:190,symbol:"╛",label:"Box drawings up left",group:"Box Drawing"},{code:191,symbol:"┐",label:"Box drawings down left",group:"Box Drawing"},{code:192,symbol:"└",label:"Box drawings up right",group:"Box Drawing"},{code:193,symbol:"┴",label:"Box drawings up horizontal",group:"Box Drawing"},{code:194,symbol:"┬",label:"Box drawings down horizontal",group:"Box Drawing"},{code:195,symbol:"├",label:"Box drawings vertical right",group:"Box Drawing"},{code:196,symbol:"─",label:"Box drawings light horizontal",group:"Box Drawing"},{code:197,symbol:"┼",label:"Box drawings vertical horizontal",group:"Box Drawing"},{code:198,symbol:"╞",label:"Box drawings vertical double right",group:"Box Drawing"},{code:199,symbol:"╟",label:"Box drawings double vertical right",group:"Box Drawing"},{code:200,symbol:"╚",label:"Box drawings double up right",group:"Box Drawing"},{code:201,symbol:"╔",label:"Box drawings double down right",group:"Box Drawing"},{code:202,symbol:"╩",label:"Box drawings double up horizontal",group:"Box Drawing"},{code:203,symbol:"╦",label:"Box drawings double down horizontal",group:"Box Drawing"},{code:204,symbol:"╠",label:"Box drawings double vertical right",group:"Box Drawing"},{code:205,symbol:"═",label:"Box drawings double horizontal",group:"Box Drawing"},{code:206,symbol:"╬",label:"Box drawings double vertical horizontal",group:"Box Drawing"},{code:207,symbol:"╧",label:"Box drawings up single horizontal double",group:"Box Drawing"},{code:208,symbol:"╨",label:"Box drawings up double horizontal single",group:"Box Drawing"},{code:209,symbol:"╤",label:"Box drawings down single horizontal double",group:"Box Drawing"},{code:210,symbol:"╥",label:"Box drawings down double horizontal single",group:"Box Drawing"},{code:211,symbol:"╙",label:"Box drawings up single right double",group:"Box Drawing"},{code:212,symbol:"╘",label:"Box drawings up double right single",group:"Box Drawing"},{code:213,symbol:"╒",label:"Box drawings down single right double",group:"Box Drawing"},{code:214,symbol:"╓",label:"Box drawings down double right single",group:"Box Drawing"},{code:215,symbol:"╫",label:"Box drawings vertical single horizontal double",group:"Box Drawing"},{code:216,symbol:"╪",label:"Box drawings vertical double horizontal single",group:"Box Drawing"},{code:217,symbol:"┘",label:"Box drawings up left",group:"Box Drawing"},{code:218,symbol:"┌",label:"Box drawings down right",group:"Box Drawing"},{code:219,symbol:"█",label:"Full block",group:"Box Drawing"},{code:220,symbol:"▄",label:"Lower half block",group:"Box Drawing"},{code:221,symbol:"▌",label:"Left half block",group:"Box Drawing"},{code:222,symbol:"▐",label:"Right half block",group:"Box Drawing"},{code:223,symbol:"▀",label:"Upper half block",group:"Box Drawing"},{code:224,symbol:"α",label:"Greek small alpha",group:"Greek & Math"},{code:225,symbol:"ß",label:"Sharp s",group:"Extended Latin"},{code:226,symbol:"Γ",label:"Greek capital gamma",group:"Greek & Math"},{code:227,symbol:"π",label:"Greek small pi",group:"Greek & Math"},{code:228,symbol:"Σ",label:"Greek capital sigma",group:"Greek & Math"},{code:229,symbol:"σ",label:"Greek small sigma",group:"Greek & Math"},{code:230,symbol:"µ",label:"Micro sign",group:"Greek & Math"},{code:231,symbol:"τ",label:"Greek small tau",group:"Greek & Math"},{code:232,symbol:"Φ",label:"Greek capital phi",group:"Greek & Math"},{code:233,symbol:"Θ",label:"Greek capital theta",group:"Greek & Math"},{code:234,symbol:"Ω",label:"Greek capital omega",group:"Greek & Math"},{code:235,symbol:"δ",label:"Greek small delta",group:"Greek & Math"},{code:236,symbol:"∞",label:"Infinity",group:"Greek & Math"},{code:237,symbol:"φ",label:"Greek small phi",group:"Greek & Math"},{code:238,symbol:"ε",label:"Greek small epsilon",group:"Greek & Math"},{code:239,symbol:"∩",label:"Intersection",group:"Greek & Math"},{code:240,symbol:"≡",label:"Identical to",group:"Greek & Math"},{code:241,symbol:"±",label:"Plus-minus sign",group:"Greek & Math"},{code:242,symbol:"≥",label:"Greater-than or equal to",group:"Greek & Math"},{code:243,symbol:"≤",label:"Less-than or equal to",group:"Greek & Math"},{code:244,symbol:"⌠",label:"Top half integral",group:"Greek & Math"},{code:245,symbol:"⌡",label:"Bottom half integral",group:"Greek & Math"},{code:246,symbol:"÷",label:"Division sign",group:"Greek & Math"},{code:247,symbol:"≈",label:"Approximately equal",group:"Greek & Math"},{code:248,symbol:"°",label:"Degree sign",group:"Greek & Math"},{code:249,symbol:"∙",label:"Middle dot operator",group:"Greek & Math"},{code:250,symbol:"·",label:"Middle dot",group:"Punctuation"},{code:251,symbol:"√",label:"Square root",group:"Greek & Math"},{code:252,symbol:"ⁿ",label:"Superscript n",group:"Greek & Math"},{code:253,symbol:"²",label:"Superscript two",group:"Greek & Math"},{code:254,symbol:"■",label:"Black square",group:"Shapes"}],L=Array.from({length:95},(r,i)=>{const a=i+33;return{code:a,symbol:String.fromCharCode(a),label:`ASCII character ${String.fromCharCode(a)}`,group:"ASCII"}}),E=[...g.filter(r=>r.code<33),...L,...g.filter(r=>r.code===127||r.code===255),...G],u=Array.from(new Map(E.map(r=>[r.code,r])).values()).sort((r,i)=>r.code-i.code),M=["All","ASCII","Symbols","Arrows","Punctuation","Currency","Fractions","Box Drawing","Shapes","Extended Latin","Greek & Math"],F=()=>{const[r,i]=d.useState(""),[a,n]=d.useState("All"),[m,c]=d.useState(null),b=d.useMemo(()=>{const e=r.trim().toLowerCase();return u.filter(l=>{const y=a==="All"||l.group===a,w=!e||l.code.toString().includes(e)||l.symbol.toLowerCase().includes(e)||l.label.toLowerCase().includes(e);return y&&w})},[r,a]),x=async e=>{try{await navigator.clipboard.writeText(e.symbol),c(e.code),window.setTimeout(()=>{c(l=>l===e.code?null:l)},1400)}catch(l){console.error("Copy failed:",l)}},h=()=>{i(""),n("All")};return o.jsxs(t.Wrapper,{className:"topicWrapper",children:[o.jsxs(t.HeroCard,{children:[o.jsxs("div",{className:"badgeRow",children:[o.jsxs("span",{className:"badge",children:[o.jsx(f,{}),"Refactored Archive Note"]}),o.jsxs("span",{className:"badge muted",children:[o.jsx(v,{}),"Original topic: July 14, 2012"]}),o.jsx(A,{})]}),o.jsx("h1",{children:"255 Keyboard Alt Codes"}),o.jsx("p",{className:"lead",children:"This page turns the old raw list into a searchable, grouped, copy-friendly reference. These Alt codes are commonly associated with classic Windows numeric keypad entry and older code page behavior, so actual results can vary by operating system, keyboard layout, app, and font."}),o.jsxs("div",{className:"metaGrid",children:[o.jsxs("div",{className:"metaCard",children:[o.jsx("span",{className:"metaIcon",children:o.jsx(p,{})}),o.jsxs("div",{children:[o.jsx("strong",{children:"How to use"}),o.jsx("span",{children:"Hold Alt and type the code on the numeric keypad."})]})]}),o.jsxs("div",{className:"metaCard",children:[o.jsx("span",{className:"metaIcon",children:o.jsx(B,{})}),o.jsxs("div",{children:[o.jsx("strong",{children:u.length}),o.jsx("span",{children:"Entries in this refactored reference"})]})]})]})]}),o.jsxs(t.InfoCard,{children:[o.jsxs("div",{className:"sectionHead",children:[o.jsx("span",{className:"iconWrap",children:o.jsx(k,{})}),o.jsx("h2",{children:"What this page is"})]}),o.jsx("p",{children:"The original blog post was a long Alt-code dump. This version keeps the spirit of that post, but presents the data in a more usable layout with search, filters, code grouping, and one-click copy buttons."}),o.jsx("p",{children:"The important little gremlin in the machine is this: Alt-code behavior is not perfectly universal. Some entries follow classic DOS and Windows character mappings, while modern apps may handle them differently."})]}),o.jsxs(t.ControlCard,{children:[o.jsxs("div",{className:"sectionHead",children:[o.jsx("span",{className:"iconWrap",children:o.jsx(j,{})}),o.jsx("h2",{children:"Explore Alt codes"})]}),o.jsxs("div",{className:"searchRow",children:[o.jsxs("div",{className:"searchBox",children:[o.jsx(S,{className:"searchIcon"}),o.jsx("input",{type:"text",value:r,onChange:e=>i(e.target.value),placeholder:"Search by code, symbol, or meaning...","aria-label":"Search Alt codes"})]}),o.jsx("button",{type:"button",className:"resetBtn",onClick:h,children:"Reset filters"})]}),o.jsx("div",{className:"chipRow",children:M.map(e=>o.jsx("button",{type:"button",className:`chip ${a===e?"active":""}`,onClick:()=>n(e),children:e},e))})]}),o.jsxs(t.TableCard,{children:[o.jsxs("div",{className:"sectionHead",children:[o.jsx("span",{className:"iconWrap",children:o.jsx(p,{})}),o.jsx("h2",{children:"Alt code reference"})]}),b.length?o.jsx("div",{className:"tableWrap",children:o.jsxs("table",{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Alt code"}),o.jsx("th",{children:"Symbol"}),o.jsx("th",{children:"Meaning"}),o.jsx("th",{children:"Group"}),o.jsx("th",{children:"Action"})]})}),o.jsx("tbody",{children:b.map(e=>o.jsxs("tr",{children:[o.jsx("td",{className:"codeCell",children:`Alt + ${e.code}`}),o.jsx("td",{className:"symbolCell",children:e.symbol===" "?o.jsx("span",{className:"spaceTag",children:"Space"}):o.jsx("span",{className:"symbolBox",children:e.symbol})}),o.jsx("td",{children:e.label}),o.jsx("td",{children:o.jsx("span",{className:"groupTag",children:e.group})}),o.jsx("td",{children:o.jsx("button",{type:"button",className:"copyBtn",onClick:()=>x(e),"aria-label":`Copy symbol for Alt + ${e.code}`,title:`Copy symbol for Alt + ${e.code}`,children:m===e.code?o.jsxs(o.Fragment,{children:[o.jsx(C,{}),"Copied"]}):o.jsxs(o.Fragment,{children:[o.jsx(D,{}),"Copy"]})})})]},e.code))})]})}):o.jsx("div",{className:"emptyState",children:"No Alt codes match the current search or group filter."})]}),o.jsxs(t.FooterNote,{children:[o.jsx("h2",{children:"Quick notes"}),o.jsxs("ul",{children:[o.jsx("li",{children:"This list is best treated as a classic keyboard Alt-code reference, not a guaranteed modern Unicode standard for every environment."}),o.jsx("li",{children:"On many systems, the numeric keypad matters. Number keys on the top row often do not behave the same way."}),o.jsx("li",{children:"Fonts and apps can also change what you actually see."})]})]})]})};export{F as default};
