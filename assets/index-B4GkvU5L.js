import{c as o,j as e,d as a,a as l,l as i,g as t,Q as n,q as c,m as d,s as h}from"./index-BxgJM-x-.js";import{S as p}from"./index-D6FK_vhk.js";const s={Wrapper:o.div`
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
    `,SectionCard:o.section`
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

        ul {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin: 12px 0 0;
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

        .clarifyList {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: 6px;
        }

        .clarifyItem {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .clarifyItem strong {
            display: block;
            margin-bottom: 6px;
            font-size: 15px;
        }

        .clarifyItem p {
            margin: 0;
            font-size: 14px;
            line-height: 1.75;
        }
    `,Grid:o.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;

        @media (max-width: 820px) {
            grid-template-columns: 1fr;
        }
    `,InfoCard:o.article`
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
            margin: 12px 0 0;
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
    `,TermGrid:o.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
        margin-top: 6px;

        @media (max-width: 820px) {
            grid-template-columns: 1fr;
        }

        .termCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .termShort {
            font-size: 14px;
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 6px;
            letter-spacing: 0.02em;
        }

        .termFull {
            font-size: 14px;
            line-height: 1.75;
            color: var(--color-text-secondary);
            word-break: break-word;
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
    `},m=[{short:"JAR",full:"Java Archive"},{short:"JAD",full:"Java Application Descriptor"},{short:"GPRS",full:"General Packet Radio Service"},{short:"SMS",full:"Short Message Service"},{short:"MMS",full:"Multimedia Messaging Service"},{short:"PIN",full:"Personal Identification Number"},{short:"STD",full:"Subscriber Trunk Dialing"},{short:"ISD",full:"International Subscriber Dialing"},{short:"PCO",full:"Public Call Office"},{short:"SD Card",full:"Secure Digital Card"},{short:"MMC",full:"MultiMediaCard"},{short:"GSM",full:"Global System for Mobile Communications"},{short:"CDMA",full:"Code Division Multiple Access"},{short:"SIM",full:"Subscriber Identity Module"},{short:"IVR",full:"Interactive Voice Response"}],x=[{short:"HTML",full:"HyperText Markup Language"},{short:"ASP",full:"Active Server Pages"},{short:"PHP",full:"PHP: Hypertext Preprocessor"},{short:"WAP",full:"Wireless Application Protocol"},{short:"WML",full:"Wireless Markup Language"},{short:"HTTP",full:"HyperText Transfer Protocol"},{short:"WWW",full:"World Wide Web"},{short:"URL",full:"Uniform Resource Locator"}],u=[{short:"RAM",full:"Random Access Memory"},{short:"ROM",full:"Read-Only Memory"},{short:"Email",full:"Electronic Mail"},{short:"USB",full:"Universal Serial Bus"},{short:"CRT",full:"Cathode-Ray Tube"},{short:"LCD",full:"Liquid Crystal Display"},{short:"TFT",full:"Thin-Film Transistor"},{short:"HDD",full:"Hard Disk Drive"},{short:"PD",full:"Pen Drive"},{short:"OS",full:"Operating System"},{short:"CD",full:"Compact Disc"},{short:"DVD",full:"Digital Versatile Disc"},{short:"VCD",full:"Video Compact Disc"},{short:"KB",full:"Kilobyte"},{short:"MB",full:"Megabyte"},{short:"GB",full:"Gigabyte"},{short:"TB",full:"Terabyte"},{short:"PB",full:"Petabyte"},{short:"EB",full:"Exabyte"},{short:"ZB",full:"Zettabyte"},{short:"YB",full:"Yottabyte"}],f=[{short:"JPEG",full:"Joint Photographic Experts Group"},{short:"GIF",full:"Graphics Interchange Format"},{short:"TIFF",full:"Tagged Image File Format"},{short:"PDF",full:"Portable Document Format"},{short:"DOC",full:"Document"}],g=["Some abbreviations are often written incorrectly in old notes or casual internet posts.","A few full forms have evolved over time, while some terms are backronyms or recursive names.","Where needed, this refactored version uses the commonly accepted modern expansion."],j=()=>e.jsxs(s.Wrapper,{className:"topicWrapper",children:[e.jsxs(s.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(a,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(l,{}),"Original topic: October 8, 2012"]}),e.jsx(p,{})]}),e.jsx("h1",{children:"List of short forms and full forms of common abbreviations"}),e.jsx("p",{className:"lead",children:"This page is a cleaned-up glossary of common abbreviations related to mobile technology, the web, computers, storage, and document formats. The original blog post was a quick list. This refactored version organizes the terms more clearly and corrects several inaccurate expansions."})]}),e.jsxs(s.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(i,{})}),e.jsx("h2",{children:"What this page is"})]}),e.jsx("p",{children:"Abbreviations are shortened forms of larger technical terms. In computing and communication, they appear everywhere: storage units, network terms, file formats, display types, messaging systems, and web protocols."}),e.jsx("p",{children:"Instead of keeping everything in one chaotic block, this page groups them by category so they are easier to scan, revise, and remember. Much kinder on the brain, and less like opening a junk drawer."})]}),e.jsxs(s.Grid,{children:[e.jsxs(s.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"Important note"})]}),e.jsx("ul",{children:g.map(r=>e.jsx("li",{children:r},r))})]}),e.jsxs(s.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(a,{})}),e.jsx("h2",{children:"How to use this glossary"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Use it for revision of common technical terms"}),e.jsx("li",{children:"Use it as a quick beginner-friendly reference"}),e.jsx("li",{children:"Pay attention to commonly misspelled full forms"}),e.jsx("li",{children:"Prefer accepted modern expansions when writing notes"})]})]})]}),e.jsxs(s.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Mobile and communication terms"})]}),e.jsx(s.TermGrid,{children:m.map(r=>e.jsxs("div",{className:"termCard",children:[e.jsx("div",{className:"termShort",children:r.short}),e.jsx("div",{className:"termFull",children:r.full})]},r.short))})]}),e.jsxs(s.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(c,{})}),e.jsx("h2",{children:"Web and internet terms"})]}),e.jsx(s.TermGrid,{children:x.map(r=>e.jsxs("div",{className:"termCard",children:[e.jsx("div",{className:"termShort",children:r.short}),e.jsx("div",{className:"termFull",children:r.full})]},r.short))})]}),e.jsxs(s.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"Computer hardware, storage, and system terms"})]}),e.jsx(s.TermGrid,{children:u.map(r=>e.jsxs("div",{className:"termCard",children:[e.jsx("div",{className:"termShort",children:r.short}),e.jsx("div",{className:"termFull",children:r.full})]},r.short))})]}),e.jsxs(s.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(h,{})}),e.jsx("h2",{children:"Document and media format terms"})]}),e.jsx(s.TermGrid,{children:f.map(r=>e.jsxs("div",{className:"termCard",children:[e.jsx("div",{className:"termShort",children:r.short}),e.jsx("div",{className:"termFull",children:r.full})]},r.short))})]}),e.jsxs(s.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(i,{})}),e.jsx("h2",{children:"Quick clarification on a few corrected entries"})]}),e.jsxs("div",{className:"clarifyList",children:[e.jsxs("div",{className:"clarifyItem",children:[e.jsx("strong",{children:"PHP"}),e.jsx("p",{children:'A common mistake is writing "Hypertext Processors". The accepted expansion is "PHP: Hypertext Preprocessor".'})]}),e.jsxs("div",{className:"clarifyItem",children:[e.jsx("strong",{children:"URL"}),e.jsx("p",{children:'A common mistake is "Uniform Resource Location". The accepted form is "Uniform Resource Locator".'})]}),e.jsxs("div",{className:"clarifyItem",children:[e.jsx("strong",{children:"TIFF"}),e.jsx("p",{children:'A common mistake is "Tag Index File Format". The accepted form is "Tagged Image File Format".'})]}),e.jsxs("div",{className:"clarifyItem",children:[e.jsx("strong",{children:"CD and VCD"}),e.jsx("p",{children:'"Compaq Disk" is incorrect here. The accepted forms are "Compact Disc" and "Video Compact Disc".'})]}),e.jsxs("div",{className:"clarifyItem",children:[e.jsx("strong",{children:"Storage units"}),e.jsx("p",{children:'"Gigabyte", "Terabyte", "Petabyte", and larger units have standard spellings. Old notes often contain typing errors in these names.'})]})]})]}),e.jsxs(s.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"Abbreviations make technical communication faster, but only when they are expanded correctly. This refactored glossary keeps the spirit of the original archive post while making the content cleaner, more accurate, and much easier to use."})]})]});export{j as default};
