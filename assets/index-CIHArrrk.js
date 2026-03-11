import{c as a,j as e,k as n,a as o,m as c,y as t,V as l,f as x,a1 as d,l as s}from"./index-D1C0sqWO.js";import{S as h}from"./index-DpzaY4xy.js";const r={Wrapper:a.div`
        width: 100%;
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 24px 20px 40px;
        display: flex;
        flex-direction: column;
        gap: 18px;
    `,HeroCard:a.section`
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
            max-width: 860px;
            font-size: 16px;
            line-height: 1.85;
            color: var(--color-text-secondary);
        }
    `,SectionCard:a.section`
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
            font-size: 16px;
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

        .countBox {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin: 16px 0;
        }

        .countChip {
            min-height: 38px;
            padding: 0 12px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-primary);
            font-size: 14px;
            font-weight: 800;
            letter-spacing: 0.02em;
        }

        .mathCard {
            margin: 16px 0;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .mathCard p {
            margin: 0;
            font-size: 14px;
            line-height: 1.75;
        }

        .mathCard p + p {
            margin-top: 6px;
        }

        .inlineCode {
            margin: 14px 0;
            padding: 12px 14px;
            border: 1px solid var(--color-code-border);
            border-radius: var(--radius-md);
            background: var(--color-code-bg);
            color: var(--color-code-text);
            font-family: "Courier New", Courier, monospace;
            font-size: 14px;
            line-height: 1.7;
            word-break: break-word;
        }

        .tableWrap {
            margin-top: 14px;
            overflow-x: auto;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
        }

        table {
            width: 100%;
            min-width: 420px;
            border-collapse: collapse;
            background: var(--color-surface);
        }

        th,
        td {
            padding: 12px 14px;
            text-align: left;
            border-bottom: 1px solid var(--color-border);
            font-size: 14px;
        }

        th {
            color: var(--color-text-primary);
            background: var(--color-surface-3);
            font-weight: 800;
        }

        td {
            color: var(--color-text-secondary);
        }

        tbody tr:hover td {
            background: color-mix(
                in srgb,
                var(--color-surface-2) 88%,
                transparent
            );
        }

        .compareGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 16px;

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

        .miniExample {
            margin-top: 12px;
            padding: 12px;
            border-radius: var(--radius-sm);
            background: var(--color-surface-3);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
            font-size: 14px;
            line-height: 1.7;
        }
    `,Grid:a.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;

        @media (max-width: 820px) {
            grid-template-columns: 1fr;
        }
    `,InfoCard:a.article`
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
    `,FooterNote:a.section`
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
    `},p=["0","1","10","11","100","101","110","111","1000","1001","1010","1011","1100","1101","1110","1111"],m=[{hex:"0",dec:"0",bin:"0000"},{hex:"1",dec:"1",bin:"0001"},{hex:"2",dec:"2",bin:"0010"},{hex:"3",dec:"3",bin:"0011"},{hex:"4",dec:"4",bin:"0100"},{hex:"5",dec:"5",bin:"0101"},{hex:"6",dec:"6",bin:"0110"},{hex:"7",dec:"7",bin:"0111"},{hex:"8",dec:"8",bin:"1000"},{hex:"9",dec:"9",bin:"1001"},{hex:"A",dec:"10",bin:"1010"},{hex:"B",dec:"11",bin:"1011"},{hex:"C",dec:"12",bin:"1100"},{hex:"D",dec:"13",bin:"1101"},{hex:"E",dec:"14",bin:"1110"},{hex:"F",dec:"15",bin:"1111"}],b=()=>e.jsxs(r.Wrapper,{className:"topicWrapper",children:[e.jsxs(r.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(n,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(o,{}),"Original topic: August 20, 2012"]}),e.jsx(h,{})]}),e.jsx("h1",{children:"Introduction to Binary Numbers"}),e.jsxs("p",{className:"lead",children:["Binary is the number system computers use internally to store and process data. It uses only two digits,"," ",e.jsx("strong",{children:"0"})," and ",e.jsx("strong",{children:"1"}),", because digital electronics naturally work with two states such as on and off, high and low, or charged and uncharged."]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(c,{})}),e.jsx("h2",{children:"Why computers use binary"})]}),e.jsx("p",{children:"Computers are built from digital electronic components. These components usually behave in two clear states. For example, a circuit may be treated as on or off. Because of this, binary is a natural fit for computers."}),e.jsx("p",{children:"Different storage technologies represent these two states in different ways:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Memory can use stored electric charge"}),e.jsx("li",{children:"Hard disks can use magnetic orientation"}),e.jsx("li",{children:"Optical media can use reflective and non-reflective areas"}),e.jsx("li",{children:"Logic circuits can use high and low voltage levels"})]}),e.jsxs("p",{children:["In all of these cases, the machine only needs a reliable way to distinguish between two states. That becomes binary:",e.jsx("strong",{children:" 1 "})," and ",e.jsx("strong",{children:" 0"}),"."]})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"Decimal system"})]}),e.jsx("p",{children:"Humans usually use the decimal system, also called base 10."}),e.jsxs("ul",{children:[e.jsx("li",{children:"It has 10 digits: 0 to 9"}),e.jsx("li",{children:"Each place value is 10 times the previous one"}),e.jsx("li",{children:"Example: 365 = 3 × 100 + 6 × 10 + 5 × 1"})]})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"Binary system"})]}),e.jsx("p",{children:"Binary is base 2, so it uses only two digits."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Digits: 0 and 1"}),e.jsx("li",{children:"Each place value is 2 times the previous one"}),e.jsx("li",{children:"Columns go like 1, 2, 4, 8, 16, 32, 64, 128..."})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(x,{})}),e.jsx("h2",{children:"How binary counting works"})]}),e.jsx("p",{children:"Binary counting follows the same logic as decimal counting, but with fewer symbols. Once you run out of digits, you add a new column to the left."}),e.jsx("div",{className:"countBox",children:p.map(i=>e.jsx("span",{className:"countChip",children:i},i))}),e.jsx("p",{children:"In decimal, after 9 comes 10. In binary, after 1 comes 10. Then 11, then 100, then 101, and so on."})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"Binary to decimal conversion"})]}),e.jsx("p",{children:"To convert binary to decimal, multiply each binary digit by its column value and add the results."}),e.jsxs("div",{className:"mathCard",children:[e.jsx("h3",{children:"Example: 101101"}),e.jsx("p",{children:"Column values: 32, 16, 8, 4, 2, 1"}),e.jsx("p",{children:"Expanded form: 1 × 32 + 0 × 16 + 1 × 8 + 1 × 4 + 0 × 2 + 1 × 1"}),e.jsxs("p",{children:["Result: ",e.jsx("strong",{children:"32 + 8 + 4 + 1 = 45"})]})]}),e.jsxs("p",{children:["So the binary number ",e.jsx("strong",{children:"101101"})," is equal to the decimal number ",e.jsx("strong",{children:"45"}),"."]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Decimal to binary idea"})]}),e.jsx("p",{children:"To convert decimal to binary, keep checking which powers of 2 fit into the number. If a place value is used, write 1. If not, write 0."}),e.jsxs("div",{className:"mathCard",children:[e.jsx("h3",{children:"Example: 45"}),e.jsx("p",{children:"45 = 32 + 8 + 4 + 1"}),e.jsx("p",{children:"Column values: 32, 16, 8, 4, 2, 1"}),e.jsx("p",{children:"Used columns: 32, 8, 4, 1"}),e.jsxs("p",{children:["Binary: ",e.jsx("strong",{children:"101101"})]})]})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Why binary is good for machines"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Simple to represent physically"}),e.jsx("li",{children:"Reliable for digital circuits"}),e.jsx("li",{children:"Easy for logic operations"}),e.jsx("li",{children:"Well suited for arithmetic and storage"})]})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Why binary is not great for humans"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Longer to read and write"}),e.jsx("li",{children:"Harder to scan quickly"}),e.jsx("li",{children:"Even small decimal numbers may look long in binary"}),e.jsx("li",{children:"Example: 76 in decimal becomes 1001100 in binary"})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Why hexadecimal exists"})]}),e.jsx("p",{children:"Hexadecimal is a more compact way to represent binary. It uses base 16, which means it has 16 symbols:"}),e.jsx("div",{className:"inlineCode",children:"0 1 2 3 4 5 6 7 8 9 A B C D E F"}),e.jsx("p",{children:"Since 16 is equal to 2 × 2 × 2 × 2, one hexadecimal digit maps exactly to 4 binary digits. That makes conversion very convenient."})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"Hexadecimal reference table"})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Hex"}),e.jsx("th",{children:"Decimal"}),e.jsx("th",{children:"Binary"})]})}),e.jsx("tbody",{children:m.map(i=>e.jsxs("tr",{children:[e.jsx("td",{children:i.hex}),e.jsx("td",{children:i.dec}),e.jsx("td",{children:i.bin})]},i.hex))})]})})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"Hex to binary and binary to hex"})]}),e.jsxs("div",{className:"compareGrid",children:[e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"Hex to binary"}),e.jsx("p",{children:"Replace each hexadecimal digit with its 4-bit binary equivalent."}),e.jsxs("div",{className:"miniExample",children:[e.jsx("strong",{children:"8F"})," → ",e.jsx("strong",{children:"1000 1111"})]})]}),e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"Binary to hex"}),e.jsx("p",{children:"Split the binary number into groups of 4 digits from the right. Add leading zeros if needed."}),e.jsxs("div",{className:"miniExample",children:[e.jsx("strong",{children:"110101"})," → ",e.jsx("strong",{children:"0011 0101"})," ","→ ",e.jsx("strong",{children:"35"})]})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Practical summary"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Computers use binary because hardware naturally supports two states"}),e.jsx("li",{children:"Binary uses only 0 and 1"}),e.jsx("li",{children:"Each binary place value doubles as you move left"}),e.jsx("li",{children:"Hexadecimal is a shorter human-friendly form of binary"}),e.jsx("li",{children:"1 hex digit = 4 binary digits"})]})]}),e.jsxs(r.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"Binary is the foundation of digital computing. It lets machines store and process information using two-state electronics. Decimal is better for humans, binary is better for hardware, and hexadecimal acts like a friendly diplomat between the two."})]})]});export{b as default};
