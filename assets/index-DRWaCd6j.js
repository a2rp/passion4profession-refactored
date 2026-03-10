import{c as i,j as e,f as a,a as l,ah as n,y as d,B as o,m as c,A as t,n as p,g as x,l as h}from"./index-BxgJM-x-.js";import{S as m}from"./index-D6FK_vhk.js";const r={Wrapper:i.div`
        width: 100%;
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 24px 20px 40px;
        display: flex;
        flex-direction: column;
        gap: 18px;
    `,HeroCard:i.section`
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
    `,SectionCard:i.section`
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

        .compareCard p {
            margin: 0 0 6px;
            font-size: 18px;
            color: var(--color-text-primary);
        }

        .compareCard span {
            display: block;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .exampleBox,
        .noteBox {
            margin-top: 16px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .noteBox p,
        .exampleBox p {
            margin: 0;
        }
    `,Grid:i.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;

        @media (max-width: 820px) {
            grid-template-columns: 1fr;
        }
    `,InfoCard:i.article`
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

        .miniTable {
            margin-top: 14px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .miniRow {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            padding: 10px 12px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-sm);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
        }

        .miniRow span {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.5;
        }

        .miniRow strong {
            color: var(--color-text-primary);
            font-size: 13px;
            white-space: nowrap;
        }
    `,ExampleGrid:i.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 14px;
        margin-top: 8px;

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }

        .exampleCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .exampleCard h3 {
            margin-bottom: 8px;
        }

        .exampleCard p {
            margin: 0;
            font-size: 14px;
            line-height: 1.75;
            color: var(--color-text-secondary);
        }
    `,FooterNote:i.section`
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
    `},u=[{unit:"1 byte",value:"8 bits"},{unit:"1 KiB",value:"1,024 bytes"},{unit:"1 MiB",value:"1,024 KiB"},{unit:"1 GiB",value:"1,024 MiB"},{unit:"1 TiB",value:"1,024 GiB"}],b=[{unit:"1 kB",value:"1,000 bytes"},{unit:"1 MB",value:"1,000 kB"},{unit:"1 GB",value:"1,000 MB"},{unit:"1 TB",value:"1,000 GB"}],g=[{unit:"1 kbit",value:"1,000 bits"},{unit:"1 Mbit",value:"1,000 kbit"},{unit:"1 Gbit",value:"1,000 Mbit"}],j=[{title:"Storage",text:"Memory and file sizes are often discussed in bytes, kilobytes, megabytes, gigabytes, and so on."},{title:"Transfer speed",text:"Internet speed is usually discussed in bits per second, such as Mbps or Gbps."},{title:"Common mistake",text:"People often confuse MB with Mb. Uppercase B means byte. Lowercase b means bit."}],y=()=>e.jsxs(r.Wrapper,{className:"topicWrapper",children:[e.jsxs(r.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(a,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(l,{}),"Original topic: August 8, 2012"]}),e.jsx(m,{})]}),e.jsx("h1",{children:"Why is 1 byte equal to 8 bits?"}),e.jsx("p",{className:"lead",children:"A bit is the smallest common unit of digital information and can store either 0 or 1. A byte is a group of bits. Historically, computers ended up standardizing on 8 bits per byte because 8 bits were enough to represent a useful range of values and characters while still being practical for hardware and software design."})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Short answer"})]}),e.jsxs("p",{children:["8 bits became the standard size of a byte because it gives"," ",e.jsx("strong",{children:"2^8 = 256"})," possible values. That is a very practical range for representing characters, small numbers, flags, and raw data."]}),e.jsxs("p",{children:["Smaller groups like 4 bits give only ",e.jsx("strong",{children:"16"})," ","values, which is too limited for many common uses. Larger groups are possible, but 8 turned out to be a very balanced and efficient choice."]})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"What is a bit?"})]}),e.jsxs("p",{children:["A bit means ",e.jsx("strong",{children:"binary digit"}),". It can hold only one of two values:"]}),e.jsxs("ul",{children:[e.jsx("li",{children:"0"}),e.jsx("li",{children:"1"})]}),e.jsx("p",{children:"That tiny on-or-off behavior is the foundation of all digital computing."})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"What is a byte?"})]}),e.jsxs("p",{children:["A byte is a group of bits. In modern computing, one byte almost always means ",e.jsx("strong",{children:"8 bits"}),"."]}),e.jsxs("ul",{children:[e.jsx("li",{children:"1 byte = 8 bits"}),e.jsx("li",{children:"8 bits can represent 256 different patterns"}),e.jsx("li",{children:"Those patterns can be used for numbers, letters, symbols, colors, and other data"})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(c,{})}),e.jsx("h2",{children:"Why not 4 bits or 16 bits?"})]}),e.jsxs("div",{className:"compareGrid",children:[e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"4 bits"}),e.jsxs("p",{children:[e.jsx("strong",{children:"2^4 = 16"})," possible values"]}),e.jsx("span",{children:"Useful for very small ranges, but too limited for general character encoding and broader data handling"})]}),e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"8 bits"}),e.jsxs("p",{children:[e.jsx("strong",{children:"2^8 = 256"})," possible values"]}),e.jsx("span",{children:"Large enough to be useful and still compact enough to handle efficiently"})]})]}),e.jsx("p",{children:"That is one big reason 8 bits became so practical. It was a sweet spot, not too tiny and not unnecessarily bulky."})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(a,{})}),e.jsx("h2",{children:"A little history"})]}),e.jsxs("p",{children:["In older computing history, the word ",e.jsx("strong",{children:"byte"})," ","did not always mean 8 bits. Different machines used different sizes, including 6-bit, 7-bit, 8-bit, and even 9-bit groupings."]}),e.jsx("p",{children:"Over time, 8-bit bytes became the dominant standard because they were convenient for representing characters and easier to work with in real systems. Once that standard spread, modern software and hardware built around it, and now it is the default meaning almost everywhere."})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"Character storage made 8 bits very useful"})]}),e.jsx("p",{children:"One of the biggest reasons bits are grouped together is to represent characters. Human languages need enough unique combinations for letters, digits, punctuation, symbols, and control codes."}),e.jsx("p",{children:"8 bits provide 256 combinations, which was a practical size for many early character systems. That made 8-bit bytes very useful in the real world."}),e.jsxs("div",{className:"exampleBox",children:[e.jsx("h3",{children:"Quick idea"}),e.jsxs("ul",{children:[e.jsx("li",{children:"4 bits = 16 combinations"}),e.jsx("li",{children:"8 bits = 256 combinations"}),e.jsx("li",{children:"256 is much more useful for storing text and data"})]})]})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(p,{})}),e.jsx("h2",{children:"Binary size units"})]}),e.jsx("p",{children:"Binary units are based on powers of 2 and are commonly used in memory and low-level computing contexts."}),e.jsx("div",{className:"miniTable",children:u.map(s=>e.jsxs("div",{className:"miniRow",children:[e.jsx("span",{children:s.unit}),e.jsx("strong",{children:s.value})]},s.unit))})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Decimal size units"})]}),e.jsx("p",{children:"Decimal units are based on powers of 10 and are often used by storage manufacturers."}),e.jsx("div",{className:"miniTable",children:b.map(s=>e.jsxs("div",{className:"miniRow",children:[e.jsx("span",{children:s.unit}),e.jsx("strong",{children:s.value})]},s.unit))})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(x,{})}),e.jsx("h2",{children:"Why people get confused about KB, MB, Mb, and GB"})]}),e.jsxs("p",{children:["One of the oldest and messiest confusions in computing is the difference between ",e.jsx("strong",{children:"bit"})," and"," ",e.jsx("strong",{children:"byte"}),", and between ",e.jsx("strong",{children:"binary"})," ","and ",e.jsx("strong",{children:"decimal"})," measurement."]}),e.jsx(r.ExampleGrid,{children:j.map(s=>e.jsxs("article",{className:"exampleCard",children:[e.jsx("h3",{children:s.title}),e.jsx("p",{children:s.text})]},s.title))}),e.jsxs("div",{className:"noteBox",children:[e.jsx("h3",{children:"Important rule"}),e.jsxs("p",{children:["Lowercase ",e.jsx("strong",{children:"b"})," means bit. Uppercase"," ",e.jsx("strong",{children:"B"})," means byte."]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"IEC standard and KiB, MiB, GiB"})]}),e.jsx("p",{children:"To reduce confusion, IEC introduced clearer binary prefixes:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"KiB = kibibyte = 1,024 bytes"}),e.jsx("li",{children:"MiB = mebibyte = 1,024 KiB"}),e.jsx("li",{children:"GiB = gibibyte = 1,024 MiB"})]}),e.jsx("p",{children:"In theory this is cleaner. In practice, many people still casually say KB, MB, and GB even when they mean binary values. The universe, as usual, chose chaos."})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"Data transfer rate"})]}),e.jsx("p",{children:"Network speeds are usually measured in decimal bits per second, not bytes."}),e.jsx("div",{className:"miniTable",children:g.map(s=>e.jsxs("div",{className:"miniRow",children:[e.jsx("span",{children:s.unit}),e.jsx("strong",{children:s.value})]},s.unit))}),e.jsx("p",{children:"So a 100 Mbps internet connection means 100 megabits per second, not 100 megabytes per second."})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(h,{})}),e.jsx("h2",{children:"Best practical takeaway"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"1 byte = 8 bits"}),e.jsx("li",{children:"8 bits became standard because 256 values are useful"}),e.jsx("li",{children:"Uppercase B means byte, lowercase b means bit"}),e.jsx("li",{children:"KiB and MiB are binary-specific terms"}),e.jsx("li",{children:"Internet speeds usually use bits, while file sizes usually use bytes"})]})]})]}),e.jsxs(r.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"8 bits became 1 byte because that size was practical for representing characters and handling data efficiently. Modern computing standardized around it, and that standard survived. From there came all the common size units and also a mountain of confusion between bits, bytes, binary values, and decimal values."})]})]});export{y as default};
