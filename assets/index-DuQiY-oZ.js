import{c as i,j as e,F as a,a as n,l as s,G as o,m as t,f as l,g as d}from"./index-D1C0sqWO.js";import{S as c}from"./index-DpzaY4xy.js";const r={Wrapper:i.div`
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
            max-width: 840px;
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
            font-size: 18px;
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
            margin-top: 12px;
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

        .answerGrid,
        .compareGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 10px;

            @media (max-width: 760px) {
                grid-template-columns: 1fr;
            }
        }

        .answerCard,
        .compareCard,
        .noteBox {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .noteBox + .noteBox {
            margin-top: 12px;
        }

        .answerCard p,
        .compareCard p,
        .noteBox p {
            font-size: 14px;
            line-height: 1.75;
        }

        .answerCard p,
        .compareCard p,
        .noteBox p,
        .noteBox h3 {
            margin: 0;
        }

        .noteBox h3 {
            margin-bottom: 8px;
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
    `},h=()=>e.jsxs(r.Wrapper,{className:"topicWrapper",children:[e.jsxs(r.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(a,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(n,{}),"Original topic: May 30, 2012"]}),e.jsx(c,{})]}),e.jsx("h1",{children:"Full form of UNIX and Linux"}),e.jsx("p",{className:"lead",children:"This topic looks small, but there is an important difference between the two names. UNIX has a historical naming story, while Linux is not a full form at all. Linux is the name of a kernel created by Linus Torvalds."})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Short answer"})]}),e.jsxs("div",{className:"answerGrid",children:[e.jsxs("div",{className:"answerCard",children:[e.jsx("h3",{children:"UNIX"}),e.jsxs("p",{children:["UNIX is historically associated with"," ",e.jsx("strong",{children:"UNICS"}),", often expanded as"," ",e.jsx("strong",{children:"UNiplexed Information and Computing System"}),". Over time, the name became ",e.jsx("strong",{children:"UNIX"}),"."]})]}),e.jsxs("div",{className:"answerCard",children:[e.jsx("h3",{children:"Linux"}),e.jsxs("p",{children:["Linux is ",e.jsx("strong",{children:"not an acronym"}),". It is the name of the kernel and is generally understood as coming from ",e.jsx("strong",{children:"Linus' Unix"}),", after its creator, ",e.jsx("strong",{children:"Linus Torvalds"}),"."]})]})]})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"About UNIX"})]}),e.jsxs("p",{children:["UNIX began as an operating system developed at Bell Labs. The naming story usually points back to",e.jsx("strong",{children:" UNICS"}),", which was a play on the earlier system called ",e.jsx("strong",{children:"Multics"}),"."]}),e.jsxs("ul",{children:[e.jsx("li",{children:"UNICS is commonly expanded in older explanations"}),e.jsx("li",{children:"Later the spelling settled as UNIX"}),e.jsx("li",{children:"UNIX became highly influential in operating system history"})]})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"About Linux"})]}),e.jsxs("p",{children:["Linux refers to the ",e.jsx("strong",{children:"kernel"}),", which is the core part of an operating system. It was created by Linus Torvalds in 1991."]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Linux is a name, not a letter-by-letter full form"}),e.jsx("li",{children:`It is commonly linked to the idea of "Linus' Unix"`}),e.jsx("li",{children:"Linux itself is the kernel, not the complete system"})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"Important difference: UNIX vs Linux"})]}),e.jsx("p",{children:"People often mix these names together, but they are not the same thing."}),e.jsxs("div",{className:"compareGrid",children:[e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"UNIX"}),e.jsx("p",{children:"A historic operating system family and standard with deep influence on later systems."})]}),e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"Linux"}),e.jsx("p",{children:"A kernel inspired by Unix-like ideas, widely used in modern operating systems such as GNU/Linux distributions."})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"Common confusion"})]}),e.jsxs("div",{className:"noteBox",children:[e.jsx("h3",{children:"1. Linux is not a full operating system by itself"}),e.jsx("p",{children:"Strictly speaking, Linux is the kernel. A complete Linux system usually includes many other tools and components, often from the GNU project and other software packages."})]}),e.jsxs("div",{className:"noteBox",children:[e.jsx("h3",{children:"2. Linux is not the full form of anything"}),e.jsx("p",{children:"Unlike abbreviations such as CPU or RAM, Linux is not a standard acronym. It is just the name used for the kernel."})]}),e.jsxs("div",{className:"noteBox",children:[e.jsx("h3",{children:"3. UNIX and Linux are related in spirit, not identical"}),e.jsx("p",{children:"Linux was designed in a Unix-like style, but it is not literally the original UNIX operating system."})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Best practical takeaway"})]}),e.jsxs("p",{children:["If someone asks for the full form of UNIX, the commonly cited historical expansion is"," ",e.jsx("strong",{children:"UNiplexed Information and Computing System"}),", associated with ",e.jsx("strong",{children:"UNICS"}),", later becoming UNIX."]}),e.jsxs("p",{children:["If someone asks for the full form of Linux, the better and more accurate answer is:"," ",e.jsx("strong",{children:"Linux has no full form"}),". It is the name of the kernel and is commonly associated with the idea of"," ",e.jsx("strong",{children:"Linus' Unix"}),"."]})]}),e.jsxs(r.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"UNIX has a historical naming background linked with UNICS, while Linux is simply the name of the kernel created by Linus Torvalds. So the clean answer is: UNIX has a historical expansion, but Linux does not have a formal full form."})]})]});export{h as default};
