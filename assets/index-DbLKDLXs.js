import{c as s,Q as n,j as e,f as c,a as d,l as i,y as h,g as t,o,G as l}from"./index-D1C0sqWO.js";import{S as x}from"./index-DpzaY4xy.js";const a={Wrapper:s.div`
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
            max-width: 840px;
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

        .char {
            font-weight: 700;
            color: var(--color-text-primary);
        }

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
            font-size: 16px;
            line-height: 1.2;
        }

        p {
            color: var(--color-text-secondary);
            font-size: 15px;
            line-height: 1.85;
        }

        p + p {
            margin-top: 12px;
        }

        .smallNote {
            margin-top: 12px;
            font-size: 13px;
            color: var(--color-text-muted);
        }

        .smallNote strong {
            margin-left: 4px;
        }

        ul {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin: 12px 0;
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

        .chartFrame {
            position: relative;
            margin-top: 14px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            overflow: hidden;
            background: var(--color-surface-3);
            min-height: 260px;
        }

        .chartSkeleton {
            position: absolute;
            inset: 0;
            background: linear-gradient(
                90deg,
                var(--color-surface-2),
                var(--color-border),
                var(--color-surface-2)
            );
            opacity: 0.55;
        }

        .chartFrame img {
            width: 100%;
            height: auto;
            display: block;
            transition: opacity var(--transition-fast);
        }

        .tableWrap {
            width: 100%;
            overflow-x: auto;
            margin-top: 8px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
        }

        table {
            width: 100%;
            min-width: 760px;
            border-collapse: collapse;
            background: var(--color-surface-2);
        }

        thead th {
            text-align: left;
            font-size: 13px;
            color: var(--color-text-primary);
            background: var(--color-surface-3);
            padding: 14px;
            border-bottom: 1px solid var(--color-border);
        }

        tbody td {
            padding: 14px;
            vertical-align: top;
            font-size: 14px;
            line-height: 1.7;
            color: var(--color-text-secondary);
            border-top: 1px solid var(--color-border);
        }

        .explainGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 8px;

            @media (max-width: 760px) {
                grid-template-columns: 1fr;
            }
        }

        .explainCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            padding: 16px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
        }

        .explainCard h3 {
            margin-bottom: 8px;
        }

        .explainCard p {
            font-size: 14px;
            margin: 0;
        }

        .compareGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin: 16px 0;

            @media (max-width: 720px) {
                grid-template-columns: 1fr;
            }
        }

        .compareCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            padding: 16px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
        }

        .compareCard h3 {
            margin-bottom: 8px;
        }

        .compareCard p {
            margin: 0;
            font-size: 14px;
        }

        .useGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 8px;

            @media (max-width: 760px) {
                grid-template-columns: 1fr;
            }
        }

        .useCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            padding: 16px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
        }

        .useCard h3 {
            margin-bottom: 8px;
        }

        .useCard p {
            font-size: 14px;
            margin: 0;
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
            margin: 12px 0;
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
    `},p=[{dec:"0",hex:"00",abbr:"NUL",full:"Null",meaning:"Represents no character or an empty value in some low-level contexts."},{dec:"7",hex:"07",abbr:"BEL",full:"Bell",meaning:"Originally used to trigger an alert sound or beep on terminals."},{dec:"8",hex:"08",abbr:"BS",full:"Backspace",meaning:"Moves the cursor one position backward."},{dec:"9",hex:"09",abbr:"HT",full:"Horizontal Tab",meaning:"Moves text to the next tab stop. Commonly seen as tab spacing."},{dec:"10",hex:"0A",abbr:"LF",full:"Line Feed",meaning:"Moves the cursor down to the next line."},{dec:"13",hex:"0D",abbr:"CR",full:"Carriage Return",meaning:"Moves the cursor back to the beginning of the current line."},{dec:"27",hex:"1B",abbr:"ESC",full:"Escape",meaning:"Used to begin escape sequences, especially in terminals."},{dec:"32",hex:"20",abbr:"SP",full:"Space",meaning:"Represents a visible blank space between characters."},{dec:"127",hex:"7F",abbr:"DEL",full:"Delete",meaning:"Historically used to delete or ignore a character."}],m=[{title:"Text files and line breaks",text:"Characters like LF and CR still matter in text files, editors, operating systems, and version control workflows."},{title:"Tabs and spacing",text:"HT or tab is still used for indentation, spacing, and alignment in source code and plain text."},{title:"Terminal behavior",text:"ESC is heavily used in terminal control sequences for cursor movement, colors, and screen control."},{title:"Protocol and format history",text:"Many data formats and communication systems still carry behavior shaped by old ASCII control symbols."}],b=[{dec:0,hex:"00",oct:"000",html:"&#0;",char:"",desc:"NUL (null)"},{dec:1,hex:"01",oct:"001",html:"&#1;",char:"",desc:"SOH (start of heading)"},{dec:2,hex:"02",oct:"002",html:"&#2;",char:"",desc:"STX (start of text)"},{dec:3,hex:"03",oct:"003",html:"&#3;",char:"",desc:"ETX (end of text)"},{dec:4,hex:"04",oct:"004",html:"&#4;",char:"",desc:"EOT (end of transmission)"},{dec:5,hex:"05",oct:"005",html:"&#5;",char:"",desc:"ENQ (enquiry)"},{dec:6,hex:"06",oct:"006",html:"&#6;",char:"",desc:"ACK (acknowledge)"},{dec:7,hex:"07",oct:"007",html:"&#7;",char:"",desc:"BEL (bell)"},{dec:8,hex:"08",oct:"010",html:"&#8;",char:"",desc:"BS (backspace)"},{dec:9,hex:"09",oct:"011",html:"&#9;",char:"",desc:"HT (horizontal tab)"},{dec:10,hex:"0A",oct:"012",html:"&#10;",char:"",desc:"LF (line feed)"},{dec:11,hex:"0B",oct:"013",html:"&#11;",char:"",desc:"VT (vertical tab)"},{dec:12,hex:"0C",oct:"014",html:"&#12;",char:"",desc:"FF (form feed)"},{dec:13,hex:"0D",oct:"015",html:"&#13;",char:"",desc:"CR (carriage return)"},{dec:14,hex:"0E",oct:"016",html:"&#14;",char:"",desc:"SO (shift out)"},{dec:15,hex:"0F",oct:"017",html:"&#15;",char:"",desc:"SI (shift in)"},{dec:32,hex:"20",oct:"040",html:"&#32;",char:"space",desc:"space character"},{dec:33,hex:"21",oct:"041",html:"&#33;",char:"!",desc:"exclamation mark"},{dec:34,hex:"22",oct:"042",html:"&#34;",char:'"',desc:"quotation mark"},{dec:35,hex:"23",oct:"043",html:"&#35;",char:"#",desc:"number sign"},{dec:36,hex:"24",oct:"044",html:"&#36;",char:"$",desc:"dollar sign"},{dec:65,hex:"41",oct:"101",html:"&#65;",char:"A",desc:"uppercase A"},{dec:66,hex:"42",oct:"102",html:"&#66;",char:"B",desc:"uppercase B"},{dec:67,hex:"43",oct:"103",html:"&#67;",char:"C",desc:"uppercase C"},{dec:97,hex:"61",oct:"141",html:"&#97;",char:"a",desc:"lowercase a"},{dec:98,hex:"62",oct:"142",html:"&#98;",char:"b",desc:"lowercase b"},{dec:99,hex:"63",oct:"143",html:"&#99;",char:"c",desc:"lowercase c"},{dec:127,hex:"7F",oct:"177",html:"&#127;",char:"",desc:"DEL (delete)"}],v=()=>{const[g,u]=n.useState(!1);return e.jsxs(a.Wrapper,{className:"topicWrapper",children:[e.jsxs(a.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(c,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(d,{}),"Original topic: September 27, 2012"]}),e.jsx(x,{})]}),e.jsx("h1",{children:"ASCII Control Symbols"}),e.jsx("p",{className:"lead",children:"ASCII control symbols are special non-printable characters from the ASCII character set. They were created not to show visible letters or numbers, but to control things like text flow, cursor movement, spacing, alerts, and terminal behavior."})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(i,{})}),e.jsx("h2",{children:"Simple definition"})]}),e.jsx("p",{children:'ASCII stands for "American Standard Code for Information Interchange". It assigns numbers to characters.'}),e.jsx("p",{children:"Some ASCII values represent printable characters like A, B, 1, ?, and %. But some values were reserved for control behavior instead of visible text. Those are called control characters or control symbols."})]}),e.jsxs(a.Grid,{children:[e.jsxs(a.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(h,{})}),e.jsx("h2",{children:"What makes them special?"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"They are usually not shown as visible text"}),e.jsx("li",{children:"They control behavior instead of displaying letters"}),e.jsx("li",{children:"They were important in terminals and printers"}),e.jsx("li",{children:"Some are still actively used in modern systems"})]})]}),e.jsxs(a.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"Why they still matter"})]}),e.jsx("p",{children:"Even though many control symbols came from older hardware and terminal systems, they still appear in text editors, operating systems, programming tools, terminal emulators, and communication protocols."})]})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"ASCII reference table"})]}),e.jsx("p",{children:"The ASCII table below lists character codes from 0 to 127. It includes decimal, hexadecimal, octal values, HTML entity representation, printable characters, and a description of each symbol."}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Dec"}),e.jsx("th",{children:"Hex"}),e.jsx("th",{children:"Oct"}),e.jsx("th",{children:"HTML"}),e.jsx("th",{children:"Char"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:b.map(r=>e.jsxs("tr",{children:[e.jsx("td",{children:r.dec}),e.jsx("td",{children:r.hex}),e.jsx("td",{children:r.oct}),e.jsx("td",{children:r.html}),e.jsx("td",{className:"char",children:r.char}),e.jsx("td",{children:r.desc})]},r.dec))})]})})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Common ASCII control symbols"})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Decimal"}),e.jsx("th",{children:"Hex"}),e.jsx("th",{children:"Short name"}),e.jsx("th",{children:"Full name"}),e.jsx("th",{children:"Meaning"})]})}),e.jsx("tbody",{children:p.map(r=>e.jsxs("tr",{children:[e.jsx("td",{children:r.dec}),e.jsx("td",{children:r.hex}),e.jsx("td",{children:r.abbr}),e.jsx("td",{children:r.full}),e.jsx("td",{children:r.meaning})]},`${r.dec}-${r.abbr}`))})]})})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"Important symbols explained"})]}),e.jsxs("div",{className:"explainGrid",children:[e.jsxs("article",{className:"explainCard",children:[e.jsx("h3",{children:"LF - Line Feed"}),e.jsx("p",{children:"Moves to the next line. In many Unix-like systems, this is the main newline character."})]}),e.jsxs("article",{className:"explainCard",children:[e.jsx("h3",{children:"CR - Carriage Return"}),e.jsx("p",{children:"Returns the cursor to the start of the current line. Older systems often combined CR and LF."})]}),e.jsxs("article",{className:"explainCard",children:[e.jsx("h3",{children:"HT - Horizontal Tab"}),e.jsx("p",{children:"Used for tab spacing. You still see it in code indentation and plain text formatting."})]}),e.jsxs("article",{className:"explainCard",children:[e.jsx("h3",{children:"ESC - Escape"}),e.jsx("p",{children:"Starts escape sequences, especially in terminal environments."})]}),e.jsxs("article",{className:"explainCard",children:[e.jsx("h3",{children:"BEL - Bell"}),e.jsx("p",{children:"Historically caused a beep or alert on terminals. A wonderfully dramatic little relic."})]}),e.jsxs("article",{className:"explainCard",children:[e.jsx("h3",{children:"BS - Backspace"}),e.jsx("p",{children:"Moves the cursor back by one position. Useful in terminal input and text editing."})]})]})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(i,{})}),e.jsx("h2",{children:"Why CR and LF are still famous"})]}),e.jsx("p",{children:"One of the most common real-world places where ASCII control symbols still matter is line endings."}),e.jsxs("div",{className:"compareGrid",children:[e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"LF"}),e.jsx("p",{children:"Common in Unix and Linux style line endings."})]}),e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"CR + LF"}),e.jsx("p",{children:"Common in Windows style line endings."})]})]}),e.jsx("p",{children:"This is why text files sometimes behave strangely when moved between systems. Same text, different newline rules, classic computing mischief."})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"Where you still see them today"})]}),e.jsx("div",{className:"useGrid",children:m.map(r=>e.jsxs("article",{className:"useCard",children:[e.jsx("h3",{children:r.title}),e.jsx("p",{children:r.text})]},r.title))})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"Printable vs non-printable"})]}),e.jsx("p",{children:"ASCII can be thought of in two broad groups:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Printable characters"})," - letters, numbers, punctuation, and visible symbols"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Control characters"})," - invisible symbols that affect behavior or formatting"]})]}),e.jsx("p",{children:"So control symbols are part of text systems, but not part of visible text in the usual way."})]}),e.jsxs(a.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"ASCII control symbols are non-printable characters used to control text layout, spacing, cursor movement, terminal behavior, and communication rules. Many came from older systems, but several are still important today, especially tab, line feed, carriage return, escape, and backspace."})]})]})};export{v as default};
