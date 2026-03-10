import{c as s,j as e,o as i,a as o,d as t,l,y as d,aq as c,a0 as p,C as n}from"./index-BxgJM-x-.js";import{S as x}from"./index-D6FK_vhk.js";const a={Wrapper:s.div`
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
        position: relative;
        overflow: hidden;

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
            max-width: 850px;
            font-size: 16px;
            line-height: 1.85;
            color: var(--color-text-secondary);
        }
    `,SectionCard:s.section`
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

        h3 {
            font-size: 17px;
            line-height: 1.2;
            margin-bottom: 8px;
        }

        p {
            color: var(--color-text-secondary);
            font-size: 15px;
            line-height: 1.85;
        }

        p + p {
            margin-top: 12px;
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
            line-height: 1.75;
            font-size: 14px;
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

        .stepsGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;

            @media (max-width: 820px) {
                grid-template-columns: 1fr;
            }
        }

        .stepCard {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            padding: 16px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
        }

        .stepNo {
            width: 34px;
            height: 34px;
            border-radius: 999px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: var(--color-text-primary);
            color: var(--color-text-inverse);
            font-size: 14px;
            font-weight: 900;
            line-height: 1;
        }

        .exampleGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;

            @media (max-width: 820px) {
                grid-template-columns: 1fr;
            }
        }

        .exampleCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            padding: 16px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
        }

        .exampleTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 12px;
        }

        .label {
            min-height: 28px;
            padding: 0 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-secondary);
            font-size: 12px;
            font-weight: 700;
            display: inline-flex;
            align-items: center;
        }

        .exampleTop strong {
            font-size: 16px;
            color: var(--color-text-primary);
        }

        .exampleMiddle {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .arrow {
            color: var(--color-text-muted);
            font-weight: 800;
        }

        code {
            font-size: 15px;
            word-break: break-word;
        }

        .chartIntro {
            margin-bottom: 12px;
        }

        .noteBox {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            padding: 14px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            margin-bottom: 14px;
        }

        .noteBox p {
            margin: 0;
            font-size: 14px;
        }

        .tableWrap {
            overflow-x: auto;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
        }

        table {
            width: 100%;
            min-width: 760px;
        }

        thead th {
            text-align: left;
            padding: 14px 16px;
            background: var(--color-surface-3);
            color: var(--color-text-primary);
            font-size: 13px;
            font-weight: 800;
            border-bottom: 1px solid var(--color-border);
        }

        tbody td {
            padding: 14px 16px;
            vertical-align: top;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.7;
            border-bottom: 1px solid var(--color-border);
        }

        tbody tr:last-child td {
            border-bottom: none;
        }

        tbody td:first-child {
            width: 90px;
            color: var(--color-text-primary);
            font-weight: 800;
        }
    `,Grid:s.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;

        @media (max-width: 820px) {
            grid-template-columns: 1fr;
        }
    `,InfoCard:s.article`
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background: linear-gradient(
            180deg,
            var(--color-surface) 0%,
            var(--color-surface-2) 100%
        );
        box-shadow: 0 18px 40px var(--color-shadow);
        padding: 20px;

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
            font-size: 22px;
            line-height: 1.15;
        }

        p {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.8;
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
            line-height: 1.75;
            font-size: 14px;
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

        p {
            max-width: 860px;
            color: var(--color-text-secondary);
            font-size: 15px;
            line-height: 1.85;
        }
    `},h=[{letter:"A",values:"4, /-\\, @, ^, /\\, //-\\\\, /=\\"},{letter:"B",values:"8, ]3, ]8, |3, |8, ]]3, 13"},{letter:"C",values:"(, {, [[, <, €"},{letter:"D",values:"), [}, |), |}, |>, [>, ]]), Ð"},{letter:"E",values:"3, ii, €"},{letter:"F",values:"|=, (=, ]]=, ph"},{letter:"G",values:"6, 9, (_>, [[6, &, (,"},{letter:"H",values:"#, |-|, (-), )-(, }{, }-{, {-}, /-/, \\-\\, |~|, []-[], ]]-[[, ╫"},{letter:"I",values:"1, !, |, ][, []"},{letter:"J",values:"_|, u|, ;_[], ;_[["},{letter:"K",values:"|<, |{, ][<, ]]<, []<"},{letter:"L",values:"|, 1, |_, []_, ][_, £"},{letter:"M",values:"/\\\\/\\\\, |\\\\/|, [\\\\/], (\\\\/), /V\\\\, []V[], \\\\\\\\, (T), ^^, .\\\\, //., ][\\\\//][, JVL"},{letter:"N",values:"/\\\\/, |\\\\|, (\\\\), /|/, [\\\\], {\\\\}, ][\\\\][, []\\\\[], ~"},{letter:"O",values:"0, (), [], <>, *, [[]]"},{letter:"P",values:"|D, |*, |>, []D, ][D"},{letter:"Q",values:"(,), 0_, O_, O\\\\, []\\\\"},{letter:"R",values:"|2, |?, |-, ]]2, []2, ][2"},{letter:"S",values:"5, $, š"},{letter:"T",values:`7, +, ']', 7\`, ~|~, -|-, '][', "|", †`},{letter:"U",values:"(_), |_|, \\_\\, /_/, \\_/, []_[], ]_[, µ"},{letter:"V",values:"\\/, \\\\//, √"},{letter:"W",values:"\\/\\/, |/\\|, [/\\], (/\\), VV, ///, \\^/, \\\\/\\//, 1/\\/, \\/1/, 1/1/"},{letter:"X",values:"><, }{, )(, }["},{letter:"Y",values:"'/, %, `/, \\j, ``//, ¥, j, \\|/, -/"},{letter:"Z",values:"2, z, 7_, `/_"}],m=[{title:"Leet is not fixed",text:"1337 is not a perfectly standardized language. People mix symbols, slang, jokes, random capitalization, and personal style."},{title:"Shapes matter",text:"A lot of leet works by replacing letters with symbols that look similar. For example, 3 can stand for E and 4 can stand for A."},{title:"Context matters",text:"If a word looks confusing, nearby words often help you guess the intended meaning."},{title:"Creativity is part of it",text:"Leet includes substitutions, phonetic spellings, deliberate misspellings, abbreviations, and internet slang."}],g=[{plain:"leet",leet:"1337",note:"1 can look like L, 3 like E, and 7 like T."},{plain:"hackers",leet:"H4X0RZ",note:"A, CKS, O, and plural forms often get stylized."},{plain:"I love you",leet:"i luv u",note:"Phonetic simplification is common."},{plain:"that rocked",leet:"7h47 r0xx0r3d",note:"Extra suffixes and stylized past tense are common in leet slang."}],u=["Plural or emphasis can be exaggerated with endings like '0rz'.","Past tense can be stylized with endings like '3d'.","Words may intentionally break normal spelling rules.","Random capitalization is common and often has no strict rule."],b=["Start by reading simple examples instead of heavily encoded full sentences.","Use context when a symbol or word does not immediately make sense.","Do not try to replace every single letter when writing. That quickly becomes unreadable.","Treat leet as playful internet writing, not as formal language.","Read more examples and patterns will become easier to recognize."],v=["Heavy use of leet can annoy people in normal forums or discussions.","Overdoing substitutions can make your text unreadable.","It should not replace normal grammar and writing skills.","Many people treat extreme leet writing as outdated or deliberately obnoxious."],y=()=>e.jsxs(a.Wrapper,{className:"topicWrapper",children:[e.jsxs(a.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(i,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(o,{}),"Original topic: July 18, 2012"]}),e.jsx(x,{})]}),e.jsx("h1",{children:"How to read and write in 1337"}),e.jsx("p",{className:"lead",children:"1337, also called leet or leetspeak, is an internet writing style where letters are replaced with numbers, symbols, altered spellings, slang, and playful formatting. It began as a coded or insider style of writing and later became part of gaming, chat culture, forums, memes, and online jokes."})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"What 1337 actually is"})]}),e.jsxs("p",{children:['The word "leet" comes from "elite". A classic example is writing ',e.jsx("strong",{children:"leet"})," as ",e.jsx("strong",{children:"1337"}),". Over time, leet became more than simple letter replacement. It grew into a loose internet style that includes altered spelling, phonetic shortcuts, acronyms, memes, dramatic suffixes, and random capitalization."]}),e.jsx("p",{children:"The most important thing to understand is this: leet is not fixed. It is more like a constantly mutating internet dialect than a strict language with clean rules. Tiny chaos goblin energy, but textual."})]}),e.jsx(a.Grid,{children:m.map(r=>e.jsxs(a.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:r.title})]}),e.jsx("p",{children:r.text})]},r.title))}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"How to read it"})]}),e.jsxs("div",{className:"stepsGrid",children:[e.jsxs("div",{className:"stepCard",children:[e.jsx("span",{className:"stepNo",children:"1"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Look at shapes"}),e.jsx("p",{children:"Many symbols are chosen because they visually resemble letters. For example, 5 can resemble S, 4 can resemble A, and 0 can resemble O."})]})]}),e.jsxs("div",{className:"stepCard",children:[e.jsx("span",{className:"stepNo",children:"2"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Use surrounding context"}),e.jsx("p",{children:"If one symbol is unclear, the rest of the word often reveals the meaning."})]})]}),e.jsxs("div",{className:"stepCard",children:[e.jsx("span",{className:"stepNo",children:"3"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Expect phonetic spelling"}),e.jsx("p",{children:'Some words are changed by sound rather than by pure symbol substitution, such as "luv" for "love".'})]})]}),e.jsxs("div",{className:"stepCard",children:[e.jsx("span",{className:"stepNo",children:"4"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Expect intentional misspelling"}),e.jsx("p",{children:'Words like "teh" for "the" or "pwned" for "owned" are part of internet culture and may not follow ordinary logic.'})]})]})]})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(c,{})}),e.jsx("h2",{children:"Examples"})]}),e.jsx("div",{className:"exampleGrid",children:g.map(r=>e.jsxs("article",{className:"exampleCard",children:[e.jsxs("div",{className:"exampleTop",children:[e.jsx("span",{className:"label",children:"Plain"}),e.jsx("strong",{children:r.plain})]}),e.jsxs("div",{className:"exampleMiddle",children:[e.jsx("span",{className:"arrow",children:"→"}),e.jsx("code",{children:r.leet})]}),e.jsx("p",{children:r.note})]},r.plain))})]}),e.jsxs(a.Grid,{children:[e.jsxs(a.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(p,{})}),e.jsx("h2",{children:"Grammar and style patterns"})]}),e.jsx("ul",{children:u.map(r=>e.jsx("li",{children:r},r))})]}),e.jsxs(a.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Why it can be hard to read"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"There is no single universal standard."}),e.jsx("li",{children:"The same letter can have many substitutions."}),e.jsx("li",{children:"Different users mix styles inconsistently."}),e.jsx("li",{children:"Slang and inside jokes are often mixed into it."})]})]})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(i,{})}),e.jsx("h2",{children:"1337 chart"})]}),e.jsx("p",{className:"chartIntro",children:"This chart shows common substitutions. It is not complete, and not every variation is equally common in real use. Simpler substitutions are usually more practical in fast typing."}),e.jsx("div",{className:"noteBox",children:e.jsxs("p",{children:["The symbol ",e.jsx("strong",{children:"|"})," is a pipe, not a lowercase L. The symbol ",e.jsx("strong",{children:"`"})," is a grave accent, not a normal apostrophe."]})}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Letter"}),e.jsx("th",{children:"Common substitutions"})]})}),e.jsx("tbody",{children:h.map(r=>e.jsxs("tr",{children:[e.jsx("td",{children:r.letter}),e.jsx("td",{children:r.values})]},r.letter))})]})})]}),e.jsxs(a.Grid,{children:[e.jsxs(a.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"Tips"})]}),e.jsx("ul",{children:b.map(r=>e.jsx("li",{children:r},r))})]}),e.jsxs(a.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Warnings"})]}),e.jsx("ul",{children:v.map(r=>e.jsx("li",{children:r},r))})]})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"Best practical conclusion"})]}),e.jsx("p",{children:"The easiest way to learn leetspeak is not by memorizing a giant substitution table first. It is by reading examples, recognizing repeated patterns, and slowly building an eye for the shapes and slang."}),e.jsx("p",{children:"Also, writing every sentence in ultra-heavy leet is usually more exhausting than impressive. Moderate use is easier to read, easier to type, and more faithful to how internet users actually used it in fast conversation."})]}),e.jsxs(a.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"1337 is a playful internet writing style based on symbol substitution, altered spelling, slang, and creative formatting. It is flexible, inconsistent, and heavily shaped by context. Learn the patterns, not just the symbols, and it becomes much easier to read."})]})]});export{y as default};
