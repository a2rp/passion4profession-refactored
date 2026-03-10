import{c as o,T as w,j as n,F as p,a as u,aB as l,aC as f,aw as b,g as y,ac as k}from"./index-DR_KT_2c.js";import{S as v}from"./index-D4exoH3I.js";const i={Wrapper:o.div`
        width: 100%;
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 24px 20px 40px;
        display: flex;
        flex-direction: column;
        gap: 18px;
    `,HeroCard:o.section`
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

        .badge svg {
            flex-shrink: 0;
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

        .statsGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
            margin-top: 22px;

            @media (max-width: 860px) {
                grid-template-columns: 1fr;
            }
        }

        .statCard {
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

        .statIcon {
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

        .statIcon svg {
            width: 18px;
            height: 18px;
        }

        .statCard strong {
            display: block;
            font-size: 20px;
            line-height: 1.1;
            margin-bottom: 4px;
        }

        .statCard span:last-child {
            display: block;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `,InfoCard:o.section`
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

        .iconWrap svg {
            width: 18px;
            height: 18px;
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
    `,ControlCard:o.section`
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

        .iconWrap svg {
            width: 18px;
            height: 18px;
        }

        h2 {
            font-size: 24px;
            line-height: 1.12;
        }

        .searchRow {
            display: grid;
            grid-template-columns: minmax(0, 1fr) auto;
            gap: 12px;
            margin-top: 6px;

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
            pointer-events: none;
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

        .clearBtn {
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

        .clearBtn:hover {
            background: var(--color-surface);
            border-color: var(--color-border-light);
        }
    `,ListCard:o.section`
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

        .iconWrap svg {
            width: 18px;
            height: 18px;
        }

        h2 {
            font-size: 24px;
            line-height: 1.12;
        }

        .wordGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;

            @media (max-width: 980px) {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            @media (max-width: 640px) {
                grid-template-columns: 1fr;
            }
        }

        .wordCard {
            position: relative;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
            display: flex;
            align-items: center;
            gap: 14px;
            transition:
                transform var(--transition-fast),
                border-color var(--transition-fast),
                background var(--transition-fast);
        }

        .wordCard:hover,
        .wordCard:focus-within {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-surface-3) 94%,
                transparent
            );
            z-index: 3;
        }

        .rankBadge {
            min-width: 58px;
            height: 38px;
            padding: 0 10px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: var(--color-text-primary);
            color: var(--color-text-inverse);
            font-size: 13px;
            font-weight: 900;
            line-height: 1;
            flex-shrink: 0;
        }

        .wordContent {
            min-width: 0;
        }

        h3 {
            font-size: 18px;
            line-height: 1.2;
            word-break: break-word;
            margin-bottom: 4px;
        }

        .wordHint {
            color: var(--color-text-muted);
            font-size: 12px;
            line-height: 1.5;
        }

        .tooltipCard {
            position: absolute;
            left: 16px;
            right: 16px;
            top: calc(100% + 10px);
            border: 1px solid var(--color-border-light);
            border-radius: var(--radius-md);
            background: var(--color-surface);
            box-shadow: 0 18px 40px var(--color-shadow);
            padding: 14px;
            opacity: 0;
            pointer-events: none;
            transform: translateY(6px);
            transition:
                opacity var(--transition-fast),
                transform var(--transition-fast);
        }

        .wordCard:hover .tooltipCard,
        .wordCard:focus-within .tooltipCard {
            opacity: 1;
            transform: translateY(0);
        }

        .tooltipHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 8px;
        }

        .tooltipHead strong {
            font-size: 15px;
            line-height: 1.2;
        }

        .tooltipHead span {
            color: var(--color-text-muted);
            font-size: 12px;
            line-height: 1.4;
            flex-shrink: 0;
        }

        .tooltipCard p {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.7;
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

        @media (hover: none) {
            .tooltipCard {
                display: none;
            }

            .wordHint {
                display: none;
            }
        }
    `,FooterNote:o.section`
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

        p {
            max-width: 860px;
            color: var(--color-text-secondary);
            font-size: 15px;
            line-height: 1.85;
        }

        p + p {
            margin-top: 12px;
        }

        pre {
            margin: 14px 0;
            background: var(--color-code-bg);
            color: var(--color-code-text);
            border: 1px solid var(--color-code-border);
            border-radius: var(--radius-md);
            padding: 16px;
            overflow-x: auto;
            line-height: 1.7;
            font-size: 13px;
        }
    `},x=[{rank:1,word:"the",meaning:"Used before a noun to refer to a specific person or thing."},{rank:2,word:"of",meaning:"Expressing relationship or belonging between things."},{rank:3,word:"to",meaning:"Expressing direction or purpose."},{rank:4,word:"and",meaning:"Used to connect words or sentences."},{rank:5,word:"a",meaning:"Used when referring to a non-specific thing."},{rank:6,word:"in",meaning:"Inside or within something."},{rank:7,word:"is",meaning:"Third person singular form of 'be'."},{rank:8,word:"it",meaning:"Used to refer to a thing previously mentioned."},{rank:9,word:"you",meaning:"The person or people being addressed."},{rank:10,word:"that",meaning:"Used to identify a specific person or thing."},{rank:11,word:"he",meaning:"Used to refer to a male person."},{rank:12,word:"was",meaning:"Past tense of 'is'."},{rank:13,word:"for",meaning:"Indicating purpose or benefit."},{rank:14,word:"on",meaning:"Position above or supported by something."},{rank:15,word:"are",meaning:"Plural form of 'be'."},{rank:16,word:"with",meaning:"Accompanied by."},{rank:17,word:"as",meaning:"Used to indicate similarity or role."},{rank:18,word:"I",meaning:"First-person singular pronoun."},{rank:19,word:"his",meaning:"Belonging to a male person."},{rank:20,word:"they",meaning:"Used for people or things previously mentioned."},{rank:21,word:"be",meaning:"Verb used to describe existence or identity."},{rank:22,word:"at",meaning:"Used to indicate place or position."},{rank:23,word:"one",meaning:"The number 1."},{rank:24,word:"have",meaning:"To possess or hold something."},{rank:25,word:"this",meaning:"Used to identify something close."},{rank:26,word:"from",meaning:"Indicating origin or starting point."},{rank:27,word:"or",meaning:"Used to present alternatives."},{rank:28,word:"had",meaning:"Past tense of 'have'."},{rank:29,word:"by",meaning:"Indicating authorship or proximity."},{rank:30,word:"hot",meaning:"Having a high temperature."},{rank:31,word:"word",meaning:"A single distinct meaningful element of speech or writing."},{rank:32,word:"but",meaning:"Used to introduce contrast."},{rank:33,word:"what",meaning:"Used to ask for information."},{rank:34,word:"some",meaning:"An unspecified amount or number."},{rank:35,word:"we",meaning:"First person plural pronoun."},{rank:36,word:"can",meaning:"To be able to."},{rank:37,word:"out",meaning:"Away from inside."},{rank:38,word:"other",meaning:"Different from the one mentioned."},{rank:39,word:"were",meaning:"Past plural form of 'be'."},{rank:40,word:"all",meaning:"The whole amount or every part."},{rank:41,word:"there",meaning:"In that place."},{rank:42,word:"when",meaning:"At what time."},{rank:43,word:"up",meaning:"Toward a higher place."},{rank:44,word:"use",meaning:"To employ something."},{rank:45,word:"your",meaning:"Belonging to you."},{rank:46,word:"how",meaning:"In what way."},{rank:47,word:"said",meaning:"Past tense of say."},{rank:48,word:"an",meaning:"Used before vowel sounds."},{rank:49,word:"each",meaning:"Every individual one."},{rank:50,word:"she",meaning:"Used to refer to a female person."},{rank:51,word:"which",meaning:"Used to ask or specify something."},{rank:52,word:"do",meaning:"Perform an action."},{rank:53,word:"their",meaning:"Belonging to them."},{rank:54,word:"time",meaning:"Measured or perceived duration."},{rank:55,word:"if",meaning:"Used to introduce a condition."},{rank:56,word:"will",meaning:"Expressing future action."},{rank:57,word:"way",meaning:"Method or path."},{rank:58,word:"about",meaning:"Concerning or approximately."},{rank:59,word:"many",meaning:"A large number."},{rank:60,word:"then",meaning:"After that time."},{rank:61,word:"them",meaning:"Object form of 'they'."},{rank:62,word:"write",meaning:"To form letters or words."},{rank:63,word:"would",meaning:"Past form of will."},{rank:64,word:"like",meaning:"Similar to or enjoy."},{rank:65,word:"so",meaning:"To such a degree."},{rank:66,word:"these",meaning:"Plural of this."},{rank:67,word:"her",meaning:"Belonging to a female person."},{rank:68,word:"long",meaning:"Extending in length or time."},{rank:69,word:"make",meaning:"To create or produce."},{rank:70,word:"thing",meaning:"An object or concept."},{rank:71,word:"see",meaning:"To perceive with eyes."},{rank:72,word:"him",meaning:"Object form of 'he'."},{rank:73,word:"two",meaning:"Number 2."},{rank:74,word:"has",meaning:"Third person singular of 'have'."},{rank:75,word:"look",meaning:"Direct one's eyes toward."},{rank:76,word:"more",meaning:"Greater amount."},{rank:77,word:"day",meaning:"24 hour period."},{rank:78,word:"could",meaning:"Past ability form of can."},{rank:79,word:"go",meaning:"To move from one place to another."},{rank:80,word:"come",meaning:"Move toward the speaker."},{rank:81,word:"did",meaning:"Past tense of do."},{rank:82,word:"number",meaning:"A numerical value."},{rank:83,word:"sound",meaning:"Vibrations heard by the ear."},{rank:84,word:"no",meaning:"Negative response."},{rank:85,word:"most",meaning:"The greatest amount."},{rank:86,word:"people",meaning:"Human beings collectively."},{rank:87,word:"my",meaning:"Belonging to me."},{rank:88,word:"over",meaning:"Above or across."},{rank:89,word:"know",meaning:"To have knowledge."},{rank:90,word:"water",meaning:"Clear liquid essential for life."},{rank:91,word:"than",meaning:"Used for comparison."},{rank:92,word:"call",meaning:"To shout or name."},{rank:93,word:"first",meaning:"Coming before others."},{rank:94,word:"who",meaning:"Used to ask about a person."},{rank:95,word:"may",meaning:"Expressing possibility."},{rank:96,word:"down",meaning:"Toward lower position."},{rank:97,word:"side",meaning:"Edge or surface of something."},{rank:98,word:"been",meaning:"Past participle of be."},{rank:99,word:"now",meaning:"At the present time."},{rank:100,word:"find",meaning:"To discover something."},{rank:101,word:"any",meaning:"One or more unspecified."},{rank:102,word:"new",meaning:"Recently created."},{rank:103,word:"work",meaning:"Physical or mental effort."},{rank:104,word:"part",meaning:"A portion of something."},{rank:105,word:"take",meaning:"To grab or obtain."},{rank:106,word:"get",meaning:"To obtain."},{rank:107,word:"place",meaning:"A location."},{rank:108,word:"made",meaning:"Past tense of make."},{rank:109,word:"live",meaning:"To be alive."},{rank:110,word:"where",meaning:"In what place."},{rank:111,word:"after",meaning:"Later in time."},{rank:112,word:"back",meaning:"Rear side."},{rank:113,word:"little",meaning:"Small in size."},{rank:114,word:"only",meaning:"Just one."},{rank:115,word:"round",meaning:"Circular shape."},{rank:116,word:"man",meaning:"Adult male human."},{rank:117,word:"year",meaning:"365 day period."},{rank:118,word:"came",meaning:"Past tense of come."},{rank:119,word:"show",meaning:"To display."},{rank:120,word:"every",meaning:"Each without exception."},{rank:121,word:"good",meaning:"Of high quality."},{rank:122,word:"me",meaning:"Object form of I."},{rank:123,word:"give",meaning:"To transfer something."},{rank:124,word:"our",meaning:"Belonging to us."},{rank:125,word:"under",meaning:"Below something."},{rank:126,word:"name",meaning:"Word used to identify."},{rank:127,word:"very",meaning:"Extremely."},{rank:128,word:"through",meaning:"From one side to another."},{rank:129,word:"just",meaning:"Only or exactly."},{rank:130,word:"form",meaning:"Shape or structure."},{rank:131,word:"sentence",meaning:"A group of words expressing a thought."},{rank:132,word:"great",meaning:"Very good or large."},{rank:133,word:"think",meaning:"To use the mind."},{rank:134,word:"say",meaning:"To speak words."},{rank:135,word:"help",meaning:"To assist."},{rank:136,word:"low",meaning:"Near the ground."},{rank:137,word:"line",meaning:"A long narrow mark."},{rank:138,word:"differ",meaning:"To be unlike."},{rank:139,word:"turn",meaning:"To rotate or change direction."},{rank:140,word:"cause",meaning:"Reason something happens."},{rank:141,word:"much",meaning:"A large amount."},{rank:142,word:"mean",meaning:"To intend or signify."},{rank:143,word:"before",meaning:"Earlier than."},{rank:144,word:"move",meaning:"To change position."},{rank:145,word:"right",meaning:"Correct or opposite of left."},{rank:146,word:"boy",meaning:"Young male person."},{rank:147,word:"old",meaning:"Having existed long."},{rank:148,word:"too",meaning:"Also or excessively."},{rank:149,word:"same",meaning:"Identical."},{rank:150,word:"tell",meaning:"To inform."},{rank:151,word:"does",meaning:"Third person singular of do."},{rank:152,word:"set",meaning:"To put in place."},{rank:153,word:"three",meaning:"Number 3."},{rank:154,word:"want",meaning:"To desire."},{rank:155,word:"air",meaning:"Invisible gas mixture we breathe."},{rank:156,word:"well",meaning:"In a good way."},{rank:157,word:"also",meaning:"In addition."},{rank:158,word:"play",meaning:"Engage in activity for enjoyment."},{rank:159,word:"small",meaning:"Little in size."},{rank:160,word:"end",meaning:"Final part."},{rank:161,word:"put",meaning:"To place."},{rank:162,word:"home",meaning:"Place where someone lives."},{rank:163,word:"read",meaning:"To interpret written words."},{rank:164,word:"hand",meaning:"Part of arm used for grasping."},{rank:165,word:"port",meaning:"Harbor for ships."},{rank:166,word:"large",meaning:"Big in size."},{rank:167,word:"spell",meaning:"To write letters in order."},{rank:168,word:"add",meaning:"To combine numbers."},{rank:169,word:"even",meaning:"Equal or flat."},{rank:170,word:"land",meaning:"Solid ground."},{rank:171,word:"here",meaning:"In this place."},{rank:172,word:"must",meaning:"Indicating necessity."},{rank:173,word:"big",meaning:"Large in size."},{rank:174,word:"high",meaning:"Far above ground."},{rank:175,word:"such",meaning:"Of that type."},{rank:176,word:"follow",meaning:"To go after."},{rank:177,word:"act",meaning:"To perform an action."},{rank:178,word:"why",meaning:"For what reason."},{rank:179,word:"ask",meaning:"To request information."},{rank:180,word:"men",meaning:"Plural of man."},{rank:181,word:"change",meaning:"To make different."},{rank:182,word:"went",meaning:"Past tense of go."},{rank:183,word:"light",meaning:"Visible illumination."},{rank:184,word:"kind",meaning:"Type or category."},{rank:185,word:"off",meaning:"Away from."},{rank:186,word:"need",meaning:"Something required."},{rank:187,word:"house",meaning:"Building where people live."},{rank:188,word:"picture",meaning:"Visual representation."},{rank:189,word:"try",meaning:"Attempt."},{rank:190,word:"us",meaning:"Object form of we."},{rank:191,word:"again",meaning:"One more time."},{rank:192,word:"animal",meaning:"Living organism that feeds on organic matter."},{rank:193,word:"point",meaning:"Exact position."},{rank:194,word:"mother",meaning:"Female parent."},{rank:195,word:"world",meaning:"Earth and human civilization."},{rank:196,word:"near",meaning:"Close to."},{rank:197,word:"build",meaning:"Construct something."},{rank:198,word:"self",meaning:"Person's own being."},{rank:199,word:"earth",meaning:"The planet we live on."},{rank:200,word:"father",meaning:"Male parent."}],T=[{rank:201,word:"head",meaning:"Upper part of the human body containing the brain, eyes, ears, nose and mouth."},{rank:202,word:"stand",meaning:"To be in an upright position."},{rank:203,word:"own",meaning:"Belonging to oneself."},{rank:204,word:"page",meaning:"One side of a sheet in a book or document."},{rank:205,word:"should",meaning:"Used to indicate duty or expectation."},{rank:206,word:"country",meaning:"A nation with its own government and territory."},{rank:207,word:"found",meaning:"Past tense of find; discovered."},{rank:208,word:"answer",meaning:"A reply to a question."},{rank:209,word:"school",meaning:"Institution for education."},{rank:210,word:"grow",meaning:"To increase in size or develop."},{rank:211,word:"study",meaning:"Devote time to learning about a subject."},{rank:212,word:"still",meaning:"Continuing to happen or remain."},{rank:213,word:"learn",meaning:"To gain knowledge or skill."},{rank:214,word:"plant",meaning:"Living organism such as a tree or flower."},{rank:215,word:"cover",meaning:"To place something over something else."},{rank:216,word:"food",meaning:"Substance consumed for nutrition."},{rank:217,word:"sun",meaning:"The star that gives light and heat to Earth."},{rank:218,word:"four",meaning:"Number 4."},{rank:219,word:"between",meaning:"In the middle of two things."},{rank:220,word:"state",meaning:"Condition or a political region."},{rank:221,word:"keep",meaning:"To hold or retain something."},{rank:222,word:"eye",meaning:"Organ used for seeing."},{rank:223,word:"never",meaning:"At no time."},{rank:224,word:"last",meaning:"Final or most recent."},{rank:225,word:"let",meaning:"To allow something."},{rank:226,word:"thought",meaning:"An idea or opinion."},{rank:227,word:"city",meaning:"Large human settlement."},{rank:228,word:"tree",meaning:"Large plant with trunk and branches."},{rank:229,word:"cross",meaning:"To go from one side to another."},{rank:230,word:"farm",meaning:"Area of land used for growing crops or raising animals."},{rank:231,word:"hard",meaning:"Solid or requiring effort."},{rank:232,word:"start",meaning:"To begin."},{rank:233,word:"might",meaning:"Expressing possibility."},{rank:234,word:"story",meaning:"Narrative or tale."},{rank:235,word:"saw",meaning:"Past tense of see."},{rank:236,word:"far",meaning:"At a great distance."},{rank:237,word:"sea",meaning:"Large body of salt water."},{rank:238,word:"draw",meaning:"To produce a picture by lines."},{rank:239,word:"left",meaning:"Opposite side of right."},{rank:240,word:"late",meaning:"After expected time."},{rank:241,word:"run",meaning:"Move quickly using legs."},{rank:242,word:"don't",meaning:"Contraction of do not."},{rank:243,word:"while",meaning:"During the time that."},{rank:244,word:"press",meaning:"To push or apply pressure."},{rank:245,word:"close",meaning:"To shut something."},{rank:246,word:"night",meaning:"Time between sunset and sunrise."},{rank:247,word:"real",meaning:"Actually existing."},{rank:248,word:"life",meaning:"State of living."},{rank:249,word:"few",meaning:"Small number."},{rank:250,word:"north",meaning:"Direction opposite of south."},{rank:251,word:"open",meaning:"Allow access by removing barrier."},{rank:252,word:"seem",meaning:"Appear to be."},{rank:253,word:"together",meaning:"With each other."},{rank:254,word:"next",meaning:"Immediately following."},{rank:255,word:"white",meaning:"Color of snow or milk."},{rank:256,word:"children",meaning:"Young human beings."},{rank:257,word:"begin",meaning:"To start."},{rank:258,word:"got",meaning:"Past tense of get."},{rank:259,word:"walk",meaning:"Move at regular pace."},{rank:260,word:"example",meaning:"Representative instance."},{rank:261,word:"ease",meaning:"Freedom from difficulty."},{rank:262,word:"paper",meaning:"Material used for writing."},{rank:263,word:"group",meaning:"Collection of people or things."},{rank:264,word:"always",meaning:"At all times."},{rank:265,word:"music",meaning:"Art of sound organized in rhythm."},{rank:266,word:"those",meaning:"Plural of that."},{rank:267,word:"both",meaning:"Two items together."},{rank:268,word:"mark",meaning:"Visible sign or symbol."},{rank:269,word:"often",meaning:"Frequently."},{rank:270,word:"letter",meaning:"Written or printed symbol."},{rank:271,word:"until",meaning:"Up to a particular time."},{rank:272,word:"mile",meaning:"Unit of distance."},{rank:273,word:"river",meaning:"Large natural stream of water."},{rank:274,word:"car",meaning:"Motor vehicle."},{rank:275,word:"feet",meaning:"Plural of foot."},{rank:276,word:"care",meaning:"Serious attention or concern."},{rank:277,word:"second",meaning:"Unit of time or position after first."},{rank:278,word:"book",meaning:"Written or printed work."},{rank:279,word:"carry",meaning:"To hold and move something."},{rank:280,word:"took",meaning:"Past tense of take."},{rank:281,word:"science",meaning:"Systematic study of the natural world."},{rank:282,word:"eat",meaning:"Consume food."},{rank:283,word:"room",meaning:"Space within a building."},{rank:284,word:"friend",meaning:"Person with whom one has a bond."},{rank:285,word:"began",meaning:"Past tense of begin."},{rank:286,word:"idea",meaning:"Thought or suggestion."},{rank:287,word:"fish",meaning:"Aquatic animal."},{rank:288,word:"mountain",meaning:"Large natural elevation of earth."},{rank:289,word:"stop",meaning:"To cease movement."},{rank:290,word:"once",meaning:"One time."},{rank:291,word:"base",meaning:"Foundation or bottom part."},{rank:292,word:"hear",meaning:"Perceive sound."},{rank:293,word:"horse",meaning:"Large animal used for riding."},{rank:294,word:"cut",meaning:"To divide with sharp object."},{rank:295,word:"sure",meaning:"Certain."},{rank:296,word:"watch",meaning:"Look at attentively."},{rank:297,word:"color",meaning:"Property of light seen by eye."},{rank:298,word:"face",meaning:"Front part of the head."},{rank:299,word:"wood",meaning:"Hard material from trees."},{rank:300,word:"main",meaning:"Most important."},{rank:301,word:"enough",meaning:"As much as required."},{rank:302,word:"plain",meaning:"Simple or clear."},{rank:303,word:"girl",meaning:"Young female."},{rank:304,word:"usual",meaning:"Habitually occurring."},{rank:305,word:"young",meaning:"Not old."},{rank:306,word:"ready",meaning:"Prepared."},{rank:307,word:"above",meaning:"Higher than."},{rank:308,word:"ever",meaning:"At any time."},{rank:309,word:"red",meaning:"Color of blood."},{rank:310,word:"list",meaning:"Series of items."},{rank:311,word:"though",meaning:"Despite the fact."},{rank:312,word:"feel",meaning:"Experience emotion."},{rank:313,word:"talk",meaning:"Speak in conversation."},{rank:314,word:"bird",meaning:"Animal with feathers and wings."},{rank:315,word:"soon",meaning:"In a short time."},{rank:316,word:"body",meaning:"Physical structure of a person or animal."},{rank:317,word:"dog",meaning:"Domesticated animal often kept as pet."},{rank:318,word:"family",meaning:"Group of related people."},{rank:319,word:"direct",meaning:"Straightforward."},{rank:320,word:"pose",meaning:"Present a question or assume position."},{rank:321,word:"leave",meaning:"To go away from."},{rank:322,word:"song",meaning:"Musical composition."},{rank:323,word:"measure",meaning:"Determine size or amount."},{rank:324,word:"door",meaning:"Movable barrier for entrance."},{rank:325,word:"product",meaning:"Item produced."},{rank:326,word:"black",meaning:"Darkest color."},{rank:327,word:"short",meaning:"Not long."},{rank:328,word:"numeral",meaning:"Symbol representing number."},{rank:329,word:"class",meaning:"Group sharing common traits."},{rank:330,word:"wind",meaning:"Air in motion."},{rank:331,word:"question",meaning:"Sentence used to ask something."},{rank:332,word:"happen",meaning:"To occur."},{rank:333,word:"complete",meaning:"Finished fully."},{rank:334,word:"ship",meaning:"Large water vessel."},{rank:335,word:"area",meaning:"Region or space."},{rank:336,word:"half",meaning:"One of two equal parts."},{rank:337,word:"rock",meaning:"Hard natural material."},{rank:338,word:"order",meaning:"Arrangement or command."},{rank:339,word:"fire",meaning:"Combustion producing heat and light."},{rank:340,word:"south",meaning:"Direction opposite north."},{rank:341,word:"problem",meaning:"A matter requiring solution."},{rank:342,word:"piece",meaning:"A portion of something."},{rank:343,word:"told",meaning:"Past tense of tell."},{rank:344,word:"knew",meaning:"Past tense of know."},{rank:345,word:"pass",meaning:"To go by."},{rank:346,word:"since",meaning:"From a past time until now."},{rank:347,word:"top",meaning:"Highest part."},{rank:348,word:"whole",meaning:"Entire."},{rank:349,word:"king",meaning:"Male ruler."},{rank:350,word:"space",meaning:"Continuous area or expanse."},{rank:351,word:"heard",meaning:"Past tense of hear."},{rank:352,word:"best",meaning:"Most excellent."},{rank:353,word:"hour",meaning:"60 minutes."},{rank:354,word:"better",meaning:"Improved or superior."},{rank:355,word:"true",meaning:"In accordance with fact."},{rank:356,word:"during",meaning:"Throughout the time."},{rank:357,word:"hundred",meaning:"Number 100."},{rank:358,word:"five",meaning:"Number 5."},{rank:359,word:"remember",meaning:"To recall."},{rank:360,word:"step",meaning:"Movement of foot while walking."},{rank:361,word:"early",meaning:"Before expected time."},{rank:362,word:"hold",meaning:"To grasp."},{rank:363,word:"west",meaning:"Direction opposite east."},{rank:364,word:"ground",meaning:"Earth surface."},{rank:365,word:"interest",meaning:"Curiosity or concern."},{rank:366,word:"reach",meaning:"To stretch out to."},{rank:367,word:"fast",meaning:"Moving quickly."},{rank:368,word:"verb",meaning:"Word expressing action."},{rank:369,word:"sing",meaning:"Produce musical sounds."},{rank:370,word:"listen",meaning:"Give attention to sound."},{rank:371,word:"six",meaning:"Number 6."},{rank:372,word:"table",meaning:"Piece of furniture with flat top."},{rank:373,word:"travel",meaning:"Move from place to place."},{rank:374,word:"less",meaning:"Smaller amount."},{rank:375,word:"morning",meaning:"Early part of day."},{rank:376,word:"ten",meaning:"Number 10."},{rank:377,word:"simple",meaning:"Easy to understand."},{rank:378,word:"several",meaning:"More than two but not many."},{rank:379,word:"vowel",meaning:"Speech sound produced without blockage."},{rank:380,word:"toward",meaning:"In direction of."},{rank:381,word:"war",meaning:"Conflict between nations."},{rank:382,word:"lay",meaning:"To place down."},{rank:383,word:"against",meaning:"In opposition to."},{rank:384,word:"pattern",meaning:"Repeated design."},{rank:385,word:"slow",meaning:"Moving with little speed."},{rank:386,word:"center",meaning:"Middle point."},{rank:387,word:"love",meaning:"Deep affection."},{rank:388,word:"person",meaning:"Human being."},{rank:389,word:"money",meaning:"Medium of exchange."},{rank:390,word:"serve",meaning:"To perform duties."},{rank:391,word:"appear",meaning:"To come into sight."},{rank:392,word:"road",meaning:"Wide path for vehicles."},{rank:393,word:"map",meaning:"Representation of geographic area."},{rank:394,word:"rain",meaning:"Water falling from clouds."},{rank:395,word:"rule",meaning:"Authoritative principle."},{rank:396,word:"govern",meaning:"To control or lead."},{rank:397,word:"pull",meaning:"To draw toward oneself."},{rank:398,word:"cold",meaning:"Low temperature."},{rank:399,word:"notice",meaning:"To observe."},{rank:400,word:"voice",meaning:"Sound produced by speaking."}],P=[{rank:401,word:"unit",meaning:"A single thing regarded as a component of a larger whole."},{rank:402,word:"power",meaning:"Ability or capacity to do something."},{rank:403,word:"town",meaning:"A built-up area smaller than a city."},{rank:404,word:"fine",meaning:"Of high quality or satisfactory."},{rank:405,word:"certain",meaning:"Known for sure; definite."},{rank:406,word:"fly",meaning:"To move through the air using wings."},{rank:407,word:"fall",meaning:"To drop down from a higher place."},{rank:408,word:"lead",meaning:"To guide or direct."},{rank:409,word:"cry",meaning:"To shed tears or shout loudly."},{rank:410,word:"dark",meaning:"With little or no light."},{rank:411,word:"machine",meaning:"Device that uses power to perform work."},{rank:412,word:"note",meaning:"A brief written record or remark."},{rank:413,word:"wait",meaning:"To stay until something happens."},{rank:414,word:"plan",meaning:"A detailed proposal for doing something."},{rank:415,word:"figure",meaning:"A number or numerical symbol."},{rank:416,word:"star",meaning:"A luminous celestial body."},{rank:417,word:"box",meaning:"A container with flat sides."},{rank:418,word:"noun",meaning:"A word used to identify a person, place, or thing."},{rank:419,word:"field",meaning:"Open land or area of study."},{rank:420,word:"rest",meaning:"To relax or cease activity."},{rank:421,word:"correct",meaning:"Free from errors."},{rank:422,word:"able",meaning:"Having the ability to do something."},{rank:423,word:"pound",meaning:"Unit of weight."},{rank:424,word:"done",meaning:"Completed."},{rank:425,word:"beauty",meaning:"Quality that gives pleasure to the senses."},{rank:426,word:"drive",meaning:"To operate and control a vehicle."},{rank:427,word:"stood",meaning:"Past tense of stand."},{rank:428,word:"contain",meaning:"To hold within."},{rank:429,word:"front",meaning:"The forward part."},{rank:430,word:"teach",meaning:"To help someone learn."},{rank:431,word:"week",meaning:"A period of seven days."},{rank:432,word:"final",meaning:"Last in a series."},{rank:433,word:"gave",meaning:"Past tense of give."},{rank:434,word:"green",meaning:"Color of grass or leaves."},{rank:435,word:"oh",meaning:"Expression of surprise."},{rank:436,word:"quick",meaning:"Moving fast."},{rank:437,word:"develop",meaning:"To grow or improve."},{rank:438,word:"ocean",meaning:"Large body of salt water."},{rank:439,word:"warm",meaning:"Moderately hot."},{rank:440,word:"free",meaning:"Not under control or restriction."},{rank:441,word:"minute",meaning:"Unit of time equal to sixty seconds."},{rank:442,word:"strong",meaning:"Having great strength."},{rank:443,word:"special",meaning:"Better or different from usual."},{rank:444,word:"mind",meaning:"The element of a person enabling thought."},{rank:445,word:"behind",meaning:"At the back of."},{rank:446,word:"clear",meaning:"Easy to understand or see."},{rank:447,word:"tail",meaning:"Rear appendage of an animal."},{rank:448,word:"produce",meaning:"To create or manufacture."},{rank:449,word:"fact",meaning:"Something known to be true."},{rank:450,word:"street",meaning:"Public road in a city or town."},{rank:451,word:"inch",meaning:"Unit of length."},{rank:452,word:"multiply",meaning:"Increase by multiplication."},{rank:453,word:"nothing",meaning:"Not anything."},{rank:454,word:"course",meaning:"Series of lessons or direction taken."},{rank:455,word:"stay",meaning:"Remain in a place."},{rank:456,word:"wheel",meaning:"Circular object that rotates."},{rank:457,word:"full",meaning:"Containing as much as possible."},{rank:458,word:"force",meaning:"Strength or energy applied."},{rank:459,word:"blue",meaning:"Color of clear sky."},{rank:460,word:"object",meaning:"A material thing."},{rank:461,word:"decide",meaning:"To make a choice."},{rank:462,word:"surface",meaning:"Outer layer of something."},{rank:463,word:"deep",meaning:"Extending far down."},{rank:464,word:"moon",meaning:"Earth's natural satellite."},{rank:465,word:"island",meaning:"Land surrounded by water."},{rank:466,word:"foot",meaning:"Lower extremity of the leg."},{rank:467,word:"system",meaning:"Set of connected things."},{rank:468,word:"busy",meaning:"Actively engaged."},{rank:469,word:"test",meaning:"Procedure to assess something."},{rank:470,word:"record",meaning:"Written account of events."},{rank:471,word:"boat",meaning:"Small vessel for traveling on water."},{rank:472,word:"common",meaning:"Occurring often."},{rank:473,word:"gold",meaning:"Precious yellow metal."},{rank:474,word:"possible",meaning:"Able to happen."},{rank:475,word:"plane",meaning:"Aircraft."},{rank:476,word:"stead",meaning:"Place or position."},{rank:477,word:"dry",meaning:"Free from moisture."},{rank:478,word:"wonder",meaning:"Feeling of amazement."},{rank:479,word:"laugh",meaning:"To make sounds showing amusement."},{rank:480,word:"thousand",meaning:"Number 1000."},{rank:481,word:"ago",meaning:"In the past."},{rank:482,word:"ran",meaning:"Past tense of run."},{rank:483,word:"check",meaning:"To examine."},{rank:484,word:"game",meaning:"Activity for enjoyment."},{rank:485,word:"shape",meaning:"Form of an object."},{rank:486,word:"equate",meaning:"Consider equal."},{rank:487,word:"miss",meaning:"Fail to hit or reach."},{rank:488,word:"brought",meaning:"Past tense of bring."},{rank:489,word:"heat",meaning:"High temperature."},{rank:490,word:"snow",meaning:"Frozen precipitation."},{rank:491,word:"tire",meaning:"Rubber covering of a wheel."},{rank:492,word:"bring",meaning:"To carry something to a place."},{rank:493,word:"yes",meaning:"Affirmative response."},{rank:494,word:"distant",meaning:"Far away."},{rank:495,word:"fill",meaning:"To make full."},{rank:496,word:"east",meaning:"Direction of sunrise."},{rank:497,word:"paint",meaning:"Colored substance applied to surfaces."},{rank:498,word:"language",meaning:"System of communication."},{rank:499,word:"among",meaning:"In the middle of."},{rank:500,word:"grand",meaning:"Impressive or large."},{rank:501,word:"ball",meaning:"Round object used in games."},{rank:502,word:"yet",meaning:"Up to now."},{rank:503,word:"wave",meaning:"Movement of water or hand."},{rank:504,word:"drop",meaning:"Small amount of liquid."},{rank:505,word:"heart",meaning:"Organ that pumps blood."},{rank:506,word:"am",meaning:"First person singular of be."},{rank:507,word:"present",meaning:"Existing now."},{rank:508,word:"heavy",meaning:"Having great weight."},{rank:509,word:"dance",meaning:"Move rhythmically to music."},{rank:510,word:"engine",meaning:"Machine converting energy into motion."},{rank:511,word:"position",meaning:"Location or arrangement."},{rank:512,word:"arm",meaning:"Upper limb of human body."},{rank:513,word:"wide",meaning:"Large distance from side to side."},{rank:514,word:"sail",meaning:"Travel in a boat using wind."},{rank:515,word:"material",meaning:"Substance from which something is made."},{rank:516,word:"size",meaning:"Physical dimensions."},{rank:517,word:"vary",meaning:"To change."},{rank:518,word:"settle",meaning:"To resolve or establish."},{rank:519,word:"speak",meaning:"To say words."},{rank:520,word:"weight",meaning:"Heaviness of an object."},{rank:521,word:"general",meaning:"Common or widespread."},{rank:522,word:"ice",meaning:"Frozen water."},{rank:523,word:"matter",meaning:"Physical substance."},{rank:524,word:"circle",meaning:"Round shape."},{rank:525,word:"pair",meaning:"Two things together."},{rank:526,word:"include",meaning:"Contain as part."},{rank:527,word:"divide",meaning:"Separate into parts."},{rank:528,word:"syllable",meaning:"Unit of pronunciation."},{rank:529,word:"felt",meaning:"Past tense of feel."},{rank:530,word:"perhaps",meaning:"Possibly."},{rank:531,word:"pick",meaning:"Choose something."},{rank:532,word:"sudden",meaning:"Happening quickly."},{rank:533,word:"count",meaning:"Determine number."},{rank:534,word:"square",meaning:"Shape with four equal sides."},{rank:535,word:"reason",meaning:"Cause or explanation."},{rank:536,word:"length",meaning:"Measurement from end to end."},{rank:537,word:"represent",meaning:"Stand for something."},{rank:538,word:"art",meaning:"Creative expression."},{rank:539,word:"subject",meaning:"Topic or area of study."},{rank:540,word:"region",meaning:"Area or territory."},{rank:541,word:"energy",meaning:"Capacity to do work."},{rank:542,word:"hunt",meaning:"Search for animals."},{rank:543,word:"probable",meaning:"Likely to happen."},{rank:544,word:"bed",meaning:"Furniture for sleeping."},{rank:545,word:"brother",meaning:"Male sibling."},{rank:546,word:"egg",meaning:"Oval reproductive body of birds."},{rank:547,word:"ride",meaning:"Travel on something."},{rank:548,word:"cell",meaning:"Smallest unit of life."},{rank:549,word:"believe",meaning:"Accept as true."},{rank:550,word:"fraction",meaning:"Part of a whole."},{rank:551,word:"forest",meaning:"Large area covered with trees."},{rank:552,word:"sit",meaning:"Rest with body supported."},{rank:553,word:"race",meaning:"Competition of speed."},{rank:554,word:"window",meaning:"Opening in wall for light."},{rank:555,word:"store",meaning:"Place where goods are sold."},{rank:556,word:"summer",meaning:"Warmest season."},{rank:557,word:"train",meaning:"Series of connected railway vehicles."},{rank:558,word:"sleep",meaning:"Natural rest state."},{rank:559,word:"prove",meaning:"Demonstrate truth."},{rank:560,word:"lone",meaning:"Alone."},{rank:561,word:"leg",meaning:"Limb used for walking."},{rank:562,word:"exercise",meaning:"Physical activity."},{rank:563,word:"wall",meaning:"Vertical structure enclosing area."},{rank:564,word:"catch",meaning:"To capture or seize."},{rank:565,word:"mount",meaning:"Climb or rise."},{rank:566,word:"wish",meaning:"Hope for something."},{rank:567,word:"sky",meaning:"Region of atmosphere above earth."},{rank:568,word:"board",meaning:"Flat piece of wood."},{rank:569,word:"joy",meaning:"Great happiness."},{rank:570,word:"winter",meaning:"Coldest season."},{rank:571,word:"sat",meaning:"Past tense of sit."},{rank:572,word:"written",meaning:"Past participle of write."},{rank:573,word:"wild",meaning:"Untamed or natural."},{rank:574,word:"kept",meaning:"Past tense of keep."},{rank:575,word:"glass",meaning:"Hard transparent material."},{rank:576,word:"grass",meaning:"Green ground plant."},{rank:577,word:"cow",meaning:"Large farm animal producing milk."},{rank:578,word:"job",meaning:"Work done for payment."},{rank:579,word:"edge",meaning:"Outer boundary."},{rank:580,word:"sign",meaning:"Symbol conveying meaning."},{rank:581,word:"visit",meaning:"Go to see someone."},{rank:582,word:"past",meaning:"Time before present."},{rank:583,word:"soft",meaning:"Easy to press."},{rank:584,word:"fun",meaning:"Enjoyment."},{rank:585,word:"bright",meaning:"Giving much light."},{rank:586,word:"gas",meaning:"Substance with no fixed shape."},{rank:587,word:"weather",meaning:"Atmospheric conditions."},{rank:588,word:"month",meaning:"One of twelve divisions of year."},{rank:589,word:"million",meaning:"Number 1,000,000."},{rank:590,word:"bear",meaning:"Large wild mammal."},{rank:591,word:"finish",meaning:"Bring to completion."},{rank:592,word:"happy",meaning:"Feeling pleasure."},{rank:593,word:"hope",meaning:"Desire for something good."},{rank:594,word:"flower",meaning:"Reproductive part of plant."},{rank:595,word:"clothe",meaning:"Dress with garments."},{rank:596,word:"strange",meaning:"Unusual."},{rank:597,word:"gone",meaning:"No longer present."},{rank:598,word:"jump",meaning:"Push oneself off ground."},{rank:599,word:"baby",meaning:"Very young child."},{rank:600,word:"eight",meaning:"Number 8."}],j=[{rank:601,word:"village",meaning:"A small settlement usually smaller than a town."},{rank:602,word:"meet",meaning:"To come together with someone."},{rank:603,word:"root",meaning:"The underground part of a plant."},{rank:604,word:"buy",meaning:"To purchase something."},{rank:605,word:"raise",meaning:"To lift or increase."},{rank:606,word:"solve",meaning:"To find the answer to a problem."},{rank:607,word:"metal",meaning:"A hard shiny material like iron or gold."},{rank:608,word:"whether",meaning:"Expressing a choice between alternatives."},{rank:609,word:"push",meaning:"To move something away with force."},{rank:610,word:"seven",meaning:"Number 7."},{rank:611,word:"paragraph",meaning:"A group of sentences about one idea."},{rank:612,word:"third",meaning:"Number three in order."},{rank:613,word:"shall",meaning:"Used to express future intention."},{rank:614,word:"held",meaning:"Past tense of hold."},{rank:615,word:"hair",meaning:"Threadlike strands growing from skin."},{rank:616,word:"describe",meaning:"To explain in words."},{rank:617,word:"cook",meaning:"Prepare food by heating."},{rank:618,word:"floor",meaning:"The surface of a room to walk on."},{rank:619,word:"either",meaning:"One or the other."},{rank:620,word:"result",meaning:"Outcome of an action."},{rank:621,word:"burn",meaning:"To be on fire or cause damage by fire."},{rank:622,word:"hill",meaning:"A naturally raised area of land."},{rank:623,word:"safe",meaning:"Protected from danger."},{rank:624,word:"cat",meaning:"Small domesticated animal often kept as pet."},{rank:625,word:"century",meaning:"Period of 100 years."},{rank:626,word:"consider",meaning:"To think carefully about."},{rank:627,word:"type",meaning:"Category or kind."},{rank:628,word:"law",meaning:"System of rules recognized by a country."},{rank:629,word:"bit",meaning:"A small piece."},{rank:630,word:"coast",meaning:"Land along the sea."},{rank:631,word:"copy",meaning:"To reproduce something."},{rank:632,word:"phrase",meaning:"Group of words forming expression."},{rank:633,word:"silent",meaning:"Without sound."},{rank:634,word:"tall",meaning:"Of great height."},{rank:635,word:"sand",meaning:"Loose grains of rock."},{rank:636,word:"soil",meaning:"Upper layer of earth where plants grow."},{rank:637,word:"roll",meaning:"To move by turning over."},{rank:638,word:"temperature",meaning:"Measure of heat or cold."},{rank:639,word:"finger",meaning:"One of the digits of the hand."},{rank:640,word:"industry",meaning:"Economic activity concerned with manufacturing."},{rank:641,word:"value",meaning:"Worth or importance."},{rank:642,word:"fight",meaning:"To take part in a battle."},{rank:643,word:"lie",meaning:"To rest horizontally."},{rank:644,word:"beat",meaning:"To strike repeatedly."},{rank:645,word:"excite",meaning:"To cause enthusiasm."},{rank:646,word:"natural",meaning:"Existing in nature."},{rank:647,word:"view",meaning:"The ability to see something."},{rank:648,word:"sense",meaning:"Faculty of perception."},{rank:649,word:"ear",meaning:"Organ used for hearing."},{rank:650,word:"else",meaning:"Other than that."},{rank:651,word:"quite",meaning:"To a considerable degree."},{rank:652,word:"broke",meaning:"Past tense of break."},{rank:653,word:"case",meaning:"Particular instance."},{rank:654,word:"middle",meaning:"The central point."},{rank:655,word:"kill",meaning:"To cause death."},{rank:656,word:"son",meaning:"Male child."},{rank:657,word:"lake",meaning:"Large body of water surrounded by land."},{rank:658,word:"moment",meaning:"Very short period of time."},{rank:659,word:"scale",meaning:"System of measurement."},{rank:660,word:"loud",meaning:"Producing strong sound."},{rank:661,word:"spring",meaning:"Season between winter and summer."},{rank:662,word:"observe",meaning:"To notice something."},{rank:663,word:"child",meaning:"Young human being."},{rank:664,word:"straight",meaning:"Without curves."},{rank:665,word:"consonant",meaning:"Speech sound produced with obstruction."},{rank:666,word:"nation",meaning:"A country."},{rank:667,word:"dictionary",meaning:"Book containing meanings of words."},{rank:668,word:"milk",meaning:"White liquid produced by mammals."},{rank:669,word:"speed",meaning:"Rate of motion."},{rank:670,word:"method",meaning:"Way of doing something."},{rank:671,word:"organ",meaning:"Part of body performing specific function."},{rank:672,word:"pay",meaning:"Give money for goods or services."},{rank:673,word:"age",meaning:"Length of time someone has lived."},{rank:674,word:"section",meaning:"Part of something larger."},{rank:675,word:"dress",meaning:"Garment worn on body."},{rank:676,word:"cloud",meaning:"Visible mass of water droplets in sky."},{rank:677,word:"surprise",meaning:"Unexpected event."},{rank:678,word:"quiet",meaning:"Making little noise."},{rank:679,word:"stone",meaning:"Hard solid mineral material."},{rank:680,word:"tiny",meaning:"Very small."},{rank:681,word:"climb",meaning:"To go up something."},{rank:682,word:"cool",meaning:"Slightly cold."},{rank:683,word:"design",meaning:"Plan or drawing of something."},{rank:684,word:"poor",meaning:"Having little money."},{rank:685,word:"lot",meaning:"A large number."},{rank:686,word:"bottom",meaning:"Lowest part."},{rank:687,word:"key",meaning:"Instrument used to open locks."},{rank:688,word:"iron",meaning:"Strong metal element."},{rank:689,word:"single",meaning:"Only one."},{rank:690,word:"stick",meaning:"Thin piece of wood."},{rank:691,word:"flat",meaning:"Level surface."},{rank:692,word:"twenty",meaning:"Number 20."},{rank:693,word:"skin",meaning:"Outer covering of body."},{rank:694,word:"smile",meaning:"Expression of happiness."},{rank:695,word:"crease",meaning:"Fold or wrinkle."},{rank:696,word:"hole",meaning:"Hollow place in surface."},{rank:697,word:"trade",meaning:"Buying and selling goods."},{rank:698,word:"melody",meaning:"Musical tune."},{rank:699,word:"trip",meaning:"Journey to a place."},{rank:700,word:"office",meaning:"Place where administrative work happens."},{rank:701,word:"receive",meaning:"To get something."},{rank:702,word:"row",meaning:"Line of things."},{rank:703,word:"mouth",meaning:"Opening through which food is eaten."},{rank:704,word:"exact",meaning:"Accurate and precise."},{rank:705,word:"symbol",meaning:"Sign representing something."},{rank:706,word:"die",meaning:"To stop living."},{rank:707,word:"least",meaning:"Smallest amount."},{rank:708,word:"trouble",meaning:"Difficulty or problem."},{rank:709,word:"shout",meaning:"Speak loudly."},{rank:710,word:"except",meaning:"Excluding something."},{rank:711,word:"wrote",meaning:"Past tense of write."},{rank:712,word:"seed",meaning:"Part of plant that grows into new plant."},{rank:713,word:"tone",meaning:"Quality of sound."},{rank:714,word:"join",meaning:"To connect together."},{rank:715,word:"suggest",meaning:"To propose an idea."},{rank:716,word:"clean",meaning:"Free from dirt."},{rank:717,word:"break",meaning:"To separate into pieces."},{rank:718,word:"lady",meaning:"Polite term for a woman."},{rank:719,word:"yard",meaning:"Area of ground around a house."},{rank:720,word:"rise",meaning:"Move upward."},{rank:721,word:"bad",meaning:"Not good."},{rank:722,word:"blow",meaning:"Move air strongly."},{rank:723,word:"oil",meaning:"Thick liquid used as fuel or lubricant."},{rank:724,word:"blood",meaning:"Red liquid circulating in body."},{rank:725,word:"touch",meaning:"Come into contact with."},{rank:726,word:"grew",meaning:"Past tense of grow."},{rank:727,word:"cent",meaning:"One hundredth of a dollar."},{rank:728,word:"mix",meaning:"Combine things together."},{rank:729,word:"team",meaning:"Group working together."},{rank:730,word:"wire",meaning:"Thin metal strand."},{rank:731,word:"cost",meaning:"Price of something."},{rank:732,word:"lost",meaning:"Past tense of lose."},{rank:733,word:"brown",meaning:"Dark reddish color."},{rank:734,word:"wear",meaning:"Have clothing on."},{rank:735,word:"garden",meaning:"Area where plants are grown."},{rank:736,word:"equal",meaning:"Same in amount."},{rank:737,word:"sent",meaning:"Past tense of send."},{rank:738,word:"choose",meaning:"Select something."},{rank:739,word:"fell",meaning:"Past tense of fall."},{rank:740,word:"fit",meaning:"Suitable."},{rank:741,word:"flow",meaning:"Move smoothly."},{rank:742,word:"fair",meaning:"Just and reasonable."},{rank:743,word:"bank",meaning:"Financial institution."},{rank:744,word:"collect",meaning:"Gather together."},{rank:745,word:"save",meaning:"To keep safe."},{rank:746,word:"control",meaning:"To direct influence over."},{rank:747,word:"decimal",meaning:"Number system based on ten."},{rank:748,word:"gentle",meaning:"Mild and kind."},{rank:749,word:"woman",meaning:"Adult female human."},{rank:750,word:"captain",meaning:"Leader of a ship or team."},{rank:751,word:"practice",meaning:"Repeated exercise to improve skill."},{rank:752,word:"separate",meaning:"To divide."},{rank:753,word:"difficult",meaning:"Hard to do."},{rank:754,word:"doctor",meaning:"Medical professional."},{rank:755,word:"please",meaning:"Used to request politely."},{rank:756,word:"protect",meaning:"To keep safe."},{rank:757,word:"noon",meaning:"12 o'clock midday."},{rank:758,word:"whose",meaning:"Belonging to whom."},{rank:759,word:"locate",meaning:"Find the position of."},{rank:760,word:"ring",meaning:"Circular band."},{rank:761,word:"character",meaning:"Person in story or personality."},{rank:762,word:"insect",meaning:"Small six-legged creature."},{rank:763,word:"caught",meaning:"Past tense of catch."},{rank:764,word:"period",meaning:"Length of time."},{rank:765,word:"indicate",meaning:"Point out."},{rank:766,word:"radio",meaning:"Device for receiving broadcasts."},{rank:767,word:"spoke",meaning:"Past tense of speak."},{rank:768,word:"atom",meaning:"Smallest unit of chemical element."},{rank:769,word:"human",meaning:"Relating to people."},{rank:770,word:"history",meaning:"Study of past events."},{rank:771,word:"effect",meaning:"Result produced by cause."},{rank:772,word:"electric",meaning:"Powered by electricity."},{rank:773,word:"expect",meaning:"Believe something will happen."},{rank:774,word:"crop",meaning:"Plant grown for food."},{rank:775,word:"modern",meaning:"Relating to present times."},{rank:776,word:"element",meaning:"Basic substance in chemistry."},{rank:777,word:"hit",meaning:"Strike something."},{rank:778,word:"student",meaning:"Person studying at school."},{rank:779,word:"corner",meaning:"Point where two lines meet."},{rank:780,word:"party",meaning:"Social gathering."},{rank:781,word:"supply",meaning:"Provide something needed."},{rank:782,word:"bone",meaning:"Hard tissue forming skeleton."},{rank:783,word:"rail",meaning:"Metal bar for trains."},{rank:784,word:"imagine",meaning:"Form picture in mind."},{rank:785,word:"provide",meaning:"Supply something."},{rank:786,word:"agree",meaning:"Have same opinion."},{rank:787,word:"thus",meaning:"In this way."},{rank:788,word:"capital",meaning:"Main city or financial asset."},{rank:789,word:"chair",meaning:"Seat for one person."},{rank:790,word:"danger",meaning:"Possibility of harm."},{rank:791,word:"fruit",meaning:"Sweet edible plant product."},{rank:792,word:"rich",meaning:"Having much money."},{rank:793,word:"thick",meaning:"Large distance between sides."},{rank:794,word:"soldier",meaning:"Member of army."},{rank:795,word:"process",meaning:"Series of actions to achieve result."},{rank:796,word:"operate",meaning:"To function or control."},{rank:797,word:"guess",meaning:"Estimate without certainty."},{rank:798,word:"necessary",meaning:"Required."},{rank:799,word:"sharp",meaning:"Having fine edge."},{rank:800,word:"wing",meaning:"Body part used for flying."}],S=[{rank:801,word:"create",meaning:"To bring something into existence."},{rank:802,word:"neighbor",meaning:"Person living near another."},{rank:803,word:"wash",meaning:"To clean using water."},{rank:804,word:"bat",meaning:"An animal that flies at night."},{rank:805,word:"rather",meaning:"Preferably or to some extent."},{rank:806,word:"crowd",meaning:"Large number of people gathered."},{rank:807,word:"corn",meaning:"A cereal plant producing yellow grains."},{rank:808,word:"compare",meaning:"To examine similarities or differences."},{rank:809,word:"poem",meaning:"Literary composition in verse."},{rank:810,word:"string",meaning:"Thin cord used for tying."},{rank:811,word:"bell",meaning:"Hollow metal object producing sound."},{rank:812,word:"depend",meaning:"To rely on something."},{rank:813,word:"meat",meaning:"Animal flesh used as food."},{rank:814,word:"rub",meaning:"Press and move against something."},{rank:815,word:"tube",meaning:"Hollow cylindrical object."},{rank:816,word:"famous",meaning:"Known by many people."},{rank:817,word:"dollar",meaning:"Unit of currency used in many countries."},{rank:818,word:"stream",meaning:"Small flowing body of water."},{rank:819,word:"fear",meaning:"Feeling of being afraid."},{rank:820,word:"thin",meaning:"Small distance between sides."},{rank:821,word:"triangle",meaning:"Shape with three sides."},{rank:822,word:"planet",meaning:"Large body orbiting a star."},{rank:823,word:"hurry",meaning:"Move quickly."},{rank:824,word:"chief",meaning:"Leader or head."},{rank:825,word:"clock",meaning:"Device that shows time."},{rank:826,word:"mine",meaning:"Place where minerals are extracted."},{rank:827,word:"tie",meaning:"To fasten with string or knot."},{rank:828,word:"enter",meaning:"To go inside."},{rank:829,word:"major",meaning:"Important or larger."},{rank:830,word:"fresh",meaning:"New or recently made."},{rank:831,word:"search",meaning:"To look for something."},{rank:832,word:"send",meaning:"To cause something to go somewhere."},{rank:833,word:"yellow",meaning:"Color between green and orange."},{rank:834,word:"gun",meaning:"Weapon that shoots bullets."},{rank:835,word:"allow",meaning:"To permit."},{rank:836,word:"print",meaning:"Produce text or images on paper."},{rank:837,word:"dead",meaning:"No longer alive."},{rank:838,word:"spot",meaning:"A small mark or place."},{rank:839,word:"desert",meaning:"Dry land with little rain."},{rank:840,word:"suit",meaning:"Set of clothes or be convenient."},{rank:841,word:"current",meaning:"Flowing now or happening now."},{rank:842,word:"lift",meaning:"Raise something up."},{rank:843,word:"continue",meaning:"To keep going."},{rank:844,word:"block",meaning:"Solid piece or obstacle."},{rank:845,word:"chart",meaning:"Diagram showing information."},{rank:846,word:"hat",meaning:"Head covering."},{rank:847,word:"sell",meaning:"Exchange goods for money."},{rank:848,word:"success",meaning:"Achievement of goal."},{rank:849,word:"company",meaning:"Business organization."},{rank:850,word:"subtract",meaning:"Take one number from another."},{rank:851,word:"event",meaning:"Something that happens."},{rank:852,word:"particular",meaning:"Specific."},{rank:853,word:"deal",meaning:"Agreement or transaction."},{rank:854,word:"term",meaning:"Word or period of time."},{rank:855,word:"opposite",meaning:"Completely different."},{rank:856,word:"wife",meaning:"Married woman."},{rank:857,word:"shoe",meaning:"Footwear."},{rank:858,word:"shoulder",meaning:"Joint connecting arm to body."},{rank:859,word:"spread",meaning:"Extend over area."},{rank:860,word:"arrange",meaning:"Put things in order."},{rank:861,word:"camp",meaning:"Temporary place for living outdoors."},{rank:862,word:"invent",meaning:"Create something new."},{rank:863,word:"cotton",meaning:"Soft fiber used in textiles."},{rank:864,word:"born",meaning:"Brought into life."},{rank:865,word:"determine",meaning:"To decide firmly."},{rank:866,word:"quart",meaning:"Unit of liquid measurement."},{rank:867,word:"nine",meaning:"Number 9."},{rank:868,word:"truck",meaning:"Large vehicle for transporting goods."},{rank:869,word:"noise",meaning:"Unwanted sound."},{rank:870,word:"level",meaning:"Flat or equal height."},{rank:871,word:"chance",meaning:"Possibility."},{rank:872,word:"gather",meaning:"Bring together."},{rank:873,word:"shop",meaning:"Place where goods are sold."},{rank:874,word:"stretch",meaning:"Extend or lengthen."},{rank:875,word:"throw",meaning:"Send through the air."},{rank:876,word:"shine",meaning:"Give off light."},{rank:877,word:"property",meaning:"Something owned."},{rank:878,word:"column",meaning:"Vertical structure or text section."},{rank:879,word:"molecule",meaning:"Group of atoms forming chemical substance."},{rank:880,word:"select",meaning:"Choose from options."},{rank:881,word:"wrong",meaning:"Not correct."},{rank:882,word:"gray",meaning:"Color between black and white."},{rank:883,word:"repeat",meaning:"Do again."},{rank:884,word:"require",meaning:"Need something."},{rank:885,word:"broad",meaning:"Wide."},{rank:886,word:"prepare",meaning:"Make ready."},{rank:887,word:"salt",meaning:"White mineral used in food."},{rank:888,word:"nose",meaning:"Part of face used for smelling."},{rank:889,word:"plural",meaning:"Form referring to more than one."},{rank:890,word:"anger",meaning:"Strong feeling of annoyance."},{rank:891,word:"claim",meaning:"To state something is true."},{rank:892,word:"continent",meaning:"Large landmass."},{rank:893,word:"oxygen",meaning:"Gas essential for breathing."},{rank:894,word:"sugar",meaning:"Sweet substance used in food."},{rank:895,word:"death",meaning:"End of life."},{rank:896,word:"pretty",meaning:"Attractive."},{rank:897,word:"skill",meaning:"Ability developed by training."},{rank:898,word:"women",meaning:"Plural of woman."},{rank:899,word:"season",meaning:"One of four parts of year."},{rank:900,word:"solution",meaning:"Answer to a problem."},{rank:901,word:"magnet",meaning:"Object that attracts iron."},{rank:902,word:"silver",meaning:"Shiny gray metal."},{rank:903,word:"thank",meaning:"Express gratitude."},{rank:904,word:"branch",meaning:"Part of a tree growing from trunk."},{rank:905,word:"match",meaning:"Small stick used to start fire."},{rank:906,word:"suffix",meaning:"Letters added to end of word."},{rank:907,word:"afraid",meaning:"Feeling fear."},{rank:908,word:"huge",meaning:"Very large."},{rank:909,word:"sister",meaning:"Female sibling."},{rank:910,word:"steel",meaning:"Strong metal alloy."},{rank:911,word:"discuss",meaning:"Talk about something."},{rank:912,word:"forward",meaning:"Toward the front."},{rank:913,word:"similar",meaning:"Almost the same."},{rank:914,word:"guide",meaning:"Person who shows the way."},{rank:915,word:"experience",meaning:"Knowledge from events."},{rank:916,word:"score",meaning:"Points gained in game."},{rank:917,word:"apple",meaning:"Round fruit."},{rank:918,word:"bought",meaning:"Past tense of buy."},{rank:919,word:"led",meaning:"Past tense of lead."},{rank:920,word:"pitch",meaning:"Throw or tone of sound."},{rank:921,word:"coat",meaning:"Outer garment."},{rank:922,word:"mass",meaning:"Large amount."},{rank:923,word:"card",meaning:"Flat piece of paper."},{rank:924,word:"band",meaning:"Group of musicians."},{rank:925,word:"rope",meaning:"Strong thick cord."},{rank:926,word:"slip",meaning:"Slide accidentally."},{rank:927,word:"win",meaning:"Be victorious."},{rank:928,word:"dream",meaning:"Thoughts during sleep."},{rank:929,word:"evening",meaning:"Time between afternoon and night."},{rank:930,word:"condition",meaning:"State or situation."},{rank:931,word:"feed",meaning:"Give food to."},{rank:932,word:"tool",meaning:"Instrument for doing work."},{rank:933,word:"total",meaning:"Whole amount."},{rank:934,word:"basic",meaning:"Fundamental."},{rank:935,word:"smell",meaning:"Perceive scent."},{rank:936,word:"valley",meaning:"Low area between hills."},{rank:937,word:"seat",meaning:"Place to sit."},{rank:938,word:"arrive",meaning:"Reach destination."},{rank:939,word:"master",meaning:"Person with control."},{rank:940,word:"track",meaning:"Path or trail."},{rank:941,word:"parent",meaning:"Mother or father."},{rank:942,word:"shore",meaning:"Land at edge of water."},{rank:943,word:"division",meaning:"Separation into parts."},{rank:944,word:"sheet",meaning:"Large thin piece."},{rank:945,word:"substance",meaning:"Material with physical properties."},{rank:946,word:"favor",meaning:"Act of kindness."},{rank:947,word:"connect",meaning:"Join together."},{rank:948,word:"post",meaning:"Mail or pole."},{rank:949,word:"spend",meaning:"Use money."},{rank:950,word:"chord",meaning:"Group of musical notes."},{rank:951,word:"fat",meaning:"Substance stored in body."},{rank:952,word:"glad",meaning:"Happy."},{rank:953,word:"original",meaning:"First form."},{rank:954,word:"share",meaning:"Give part to others."},{rank:955,word:"station",meaning:"Place where transport stops."},{rank:956,word:"dad",meaning:"Father."},{rank:957,word:"bread",meaning:"Food made from flour."},{rank:958,word:"charge",meaning:"Price or responsibility."},{rank:959,word:"proper",meaning:"Correct or suitable."},{rank:960,word:"bar",meaning:"Long rigid piece."},{rank:961,word:"offer",meaning:"Present for acceptance."},{rank:962,word:"segment",meaning:"Part of something."},{rank:963,word:"slave",meaning:"Person forced to work without pay."},{rank:964,word:"duck",meaning:"Water bird."},{rank:965,word:"instant",meaning:"Very short moment."},{rank:966,word:"market",meaning:"Place for buying and selling."},{rank:967,word:"degree",meaning:"Unit of measurement."},{rank:968,word:"populate",meaning:"Fill with people."},{rank:969,word:"chick",meaning:"Young bird."},{rank:970,word:"dear",meaning:"Loved or expensive."},{rank:971,word:"enemy",meaning:"Person who opposes another."},{rank:972,word:"reply",meaning:"Answer."},{rank:973,word:"drink",meaning:"Liquid for drinking."},{rank:974,word:"occur",meaning:"To happen."},{rank:975,word:"support",meaning:"Give assistance."},{rank:976,word:"speech",meaning:"Formal talk."},{rank:977,word:"nature",meaning:"Physical world."},{rank:978,word:"range",meaning:"Extent or scope."},{rank:979,word:"steam",meaning:"Water vapor."},{rank:980,word:"motion",meaning:"Movement."},{rank:981,word:"path",meaning:"Way or track."},{rank:982,word:"liquid",meaning:"Substance flowing freely."},{rank:983,word:"log",meaning:"Piece of wood."},{rank:984,word:"meant",meaning:"Past tense of mean."},{rank:985,word:"quotient",meaning:"Result of division."},{rank:986,word:"teeth",meaning:"Hard structures in mouth."},{rank:987,word:"shell",meaning:"Hard outer covering."},{rank:988,word:"neck",meaning:"Part connecting head and body."},{rank:989,word:"speech",meaning:"Spoken expression."},{rank:990,word:"nature",meaning:"Natural world."},{rank:991,word:"range",meaning:"Extent of variation."},{rank:992,word:"steam",meaning:"Hot vapor from boiling water."},{rank:993,word:"motion",meaning:"Act of moving."},{rank:994,word:"path",meaning:"Route for walking."},{rank:995,word:"liquid",meaning:"Fluid substance."},{rank:996,word:"log",meaning:"Record of events."},{rank:997,word:"meant",meaning:"Intended."},{rank:998,word:"quotient",meaning:"Answer to division."},{rank:999,word:"teeth",meaning:"Plural of tooth."},{rank:1e3,word:"neck",meaning:"Part connecting head and torso."}],d=[...x,...T,...P,...j,...S],A=e=>{var t;return(t=e.meaning)!=null&&t.trim()?e.meaning:`Meaning not added yet for "${e.word}". This page already supports hover meanings, so you can enrich the dataset later without changing the UI.`},F=()=>{const[e,t]=w.useState(""),s=w.useMemo(()=>{const r=e.trim().toLowerCase();return r?d.filter(a=>{const m=String(a.rank).includes(r),c=a.word.toLowerCase().includes(r),h=a.meaning?a.meaning.toLowerCase().includes(r):!1;return m||c||h}):d},[e]),g=w.useMemo(()=>{const r=d.length,a=r?d[0].rank:"-",m=r?d[r-1].rank:"-";return{total:r,firstRank:a,lastRank:m}},[]);return n.jsxs(i.Wrapper,{className:"topicWrapper",children:[n.jsxs(i.HeroCard,{children:[n.jsxs("div",{className:"badgeRow",children:[n.jsxs("span",{className:"badge",children:[n.jsx(p,{}),"Refactored Archive Note"]}),n.jsxs("span",{className:"badge muted",children:[n.jsx(u,{}),"Original topic: July 21, 2012"]}),n.jsx(v,{})]}),n.jsx("h1",{children:"1000 Most Common Words in English"}),n.jsx("p",{className:"lead",children:"This page is a cleaner, searchable rebuild of the original archive post. The old version had a useful rank-wise list but rough alignment. This version keeps the ranked vocabulary idea, makes it easier to browse, and supports hover details for future dictionary-style expansion."}),n.jsxs("div",{className:"statsGrid",children:[n.jsxs("div",{className:"statCard",children:[n.jsx("span",{className:"statIcon",children:n.jsx(l,{})}),n.jsxs("div",{children:[n.jsx("strong",{children:g.total}),n.jsx("span",{children:"Entries currently loaded"})]})]}),n.jsxs("div",{className:"statCard",children:[n.jsx("span",{className:"statIcon",children:n.jsx(f,{})}),n.jsxs("div",{children:[n.jsxs("strong",{children:[g.firstRank," - ",g.lastRank]}),n.jsx("span",{children:"Rank range in current dataset"})]})]}),n.jsxs("div",{className:"statCard",children:[n.jsx("span",{className:"statIcon",children:n.jsx(b,{})}),n.jsxs("div",{children:[n.jsx("strong",{children:s.length}),n.jsx("span",{children:"Results matching current search"})]})]})]})]}),n.jsxs(i.InfoCard,{children:[n.jsxs("div",{className:"sectionHead",children:[n.jsx("span",{className:"iconWrap",children:n.jsx(y,{})}),n.jsx("h2",{children:"About this refactored version"})]}),n.jsx("p",{children:"The original archive post listed the words rank-wise but the visual layout was misaligned in many places. This version turns the same idea into a structured vocabulary explorer."}),n.jsx("p",{children:"Hover or focus on any word card to view its detail panel. Since the original source was only a ranked word list, this page is designed so meanings can be filled in gradually."})]}),n.jsxs(i.ControlCard,{children:[n.jsxs("div",{className:"sectionHead",children:[n.jsx("span",{className:"iconWrap",children:n.jsx(k,{})}),n.jsx("h2",{children:"Search ranked words"})]}),n.jsxs("div",{className:"searchRow",children:[n.jsxs("div",{className:"searchBox",children:[n.jsx(k,{className:"searchIcon"}),n.jsx("input",{type:"text",value:e,onChange:r=>t(r.target.value),placeholder:"Search by rank, word, or meaning...","aria-label":"Search by rank, word, or meaning"})]}),n.jsx("button",{type:"button",className:"clearBtn",onClick:()=>t(""),children:"Reset"})]})]}),n.jsxs(i.ListCard,{children:[n.jsxs("div",{className:"sectionHead",children:[n.jsx("span",{className:"iconWrap",children:n.jsx(l,{})}),n.jsx("h2",{children:"Ranked vocabulary list"})]}),s.length?n.jsx("div",{className:"wordGrid",children:s.map(r=>n.jsxs("article",{className:"wordCard",tabIndex:0,children:[n.jsxs("div",{className:"rankBadge",children:["#",r.rank]}),n.jsxs("div",{className:"wordContent",children:[n.jsx("h3",{children:r.word}),n.jsx("p",{className:"wordHint",children:"Hover to view meaning"})]}),n.jsxs("div",{className:"tooltipCard",children:[n.jsxs("div",{className:"tooltipHead",children:[n.jsx("strong",{children:r.word}),n.jsxs("span",{children:["Rank #",r.rank]})]}),n.jsx("p",{children:A(r)})]})]},`${r.rank}-${r.word}`))}):n.jsx("div",{className:"emptyState",children:"No entries match the current search."})]}),n.jsxs(i.FooterNote,{children:[n.jsx("h2",{children:"Recommended data shape"}),n.jsx("p",{children:"Right now the page already supports all 1000 ranked words. You can enrich any entry later by adding a meaning field in the data file."}),n.jsx("pre",{children:`{
    rank: 1,
    word: "the",
    meaning: "Used to refer to a specific person or thing."
}`}),n.jsx("p",{children:"That way the hover panel becomes a proper mini-dictionary without changing the component again."})]})]})};export{F as default};
