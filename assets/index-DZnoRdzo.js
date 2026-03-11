import{c as r,j as e,F as o,a as t,ah as a,l,D as d,f as c,U as x,G as n}from"./index-D1C0sqWO.js";import{S as p}from"./index-DpzaY4xy.js";const i={Wrapper:r.div`
        width: 100%;
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 24px 20px 40px;
        display: flex;
        flex-direction: column;
        gap: 18px;
    `,HeroCard:r.section`
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
    `,SectionCard:r.section`
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

        .familyGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
            margin-top: 8px;

            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }
        }

        .familyCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .familyCard p {
            margin: 0;
            font-size: 14px;
            line-height: 1.75;
        }

        .stepsBox {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: 16px;
        }

        .step {
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
            padding: 14px;
        }

        .stepNo {
            width: 34px;
            height: 34px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 999px;
            background: var(--color-text-primary);
            color: var(--color-text-inverse);
            font-size: 14px;
            font-weight: 900;
            line-height: 1;
        }

        .step strong {
            display: block;
            margin-bottom: 4px;
        }

        .miniCompare {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            margin-top: 14px;

            @media (max-width: 700px) {
                grid-template-columns: 1fr;
            }
        }

        .compareItem {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 14px;
        }

        .compareItem strong {
            display: block;
            margin-bottom: 6px;
            font-size: 15px;
        }

        .compareItem span {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.7;
            display: block;
        }
    `,Grid:r.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;

        @media (max-width: 820px) {
            grid-template-columns: 1fr;
        }
    `,InfoCard:r.article`
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
    `,FooterNote:r.section`
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
    `},h="/passion4profession-refactored/assets/image-gbujcNnN.png",m=[{title:"Original Unix and certified UNIX systems",text:"These are systems connected directly to the historical Unix line or certified against formal UNIX standards."},{title:"Unix-inspired systems",text:"These systems are designed to behave like Unix and follow many of its design ideas even if they are not officially branded as UNIX."},{title:"Open source Unix-like systems",text:"Many free and open source operating systems follow Unix-style behavior, tools, directory structures, and shell conventions."}],g=["Multiuser design","Multitasking support","Strong command-line environment","File system organized around directories and files","Many small tools designed to work together","Text-based configuration and scripting culture","Portable tools and utilities across related systems"],f=["Linux distributions","BSD family systems","macOS at its Unix foundation level","Commercial systems influenced by Unix design"],b=()=>e.jsxs(i.Wrapper,{className:"topicWrapper",children:[e.jsxs(i.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(o,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(t,{}),"Original topic: May 30, 2012"]}),e.jsx(p,{})]}),e.jsx("h1",{children:"UNIX-Like"}),e.jsx("p",{className:"lead",children:"A Unix-like operating system is a system that behaves in a way similar to Unix, even if it is not necessarily the same as original Unix and may not be formally certified as UNIX. In practical terms, it means the system follows many Unix ideas, conventions, and behaviors."})]}),e.jsx(i.SectionCard,{children:e.jsx("img",{src:h,alt:""})}),e.jsxs(i.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(a,{})}),e.jsx("h2",{children:"Simple definition"})]}),e.jsxs("p",{children:["The term ",e.jsx("strong",{children:"Unix-like"})," is used for operating systems that resemble Unix in design or behavior. They may use similar commands, similar file system layouts, similar shell environments, and similar system tools."]}),e.jsxs("p",{children:["A system can be Unix-like without being officially branded as ",e.jsx("strong",{children:"UNIX"}),". That is an important distinction. Similar behavior does not always mean legal certification or trademark status."]})]}),e.jsxs(i.Grid,{children:[e.jsxs(i.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"What Unix-like usually means"})]}),e.jsx("ul",{children:g.map(s=>e.jsx("li",{children:s},s))}),e.jsx("p",{children:"So the phrase mainly describes behavior, structure, and design philosophy rather than one single company or one exact codebase."})]}),e.jsxs(i.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"Important distinction"})]}),e.jsxs("p",{children:["Not every Unix-like system is officially"," ",e.jsx("strong",{children:"UNIX"}),". The uppercase word UNIX is tied to certification and standards, while Unix-like is a broader descriptive term."]}),e.jsxs("div",{className:"miniCompare",children:[e.jsxs("div",{className:"compareItem",children:[e.jsx("strong",{children:"UNIX"}),e.jsx("span",{children:"Formal standard or certification-based identity"})]}),e.jsxs("div",{className:"compareItem",children:[e.jsx("strong",{children:"Unix-like"}),e.jsx("span",{children:"Similar design, similar behavior, broader usage"})]})]})]})]}),e.jsxs(i.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(c,{})}),e.jsx("h2",{children:"Why the term is a little fuzzy"})]}),e.jsx("p",{children:"There is no single universal everyday rule that says exactly when a system becomes Unix-like. That is why people sometimes disagree about the label. Some focus on technical behavior, some focus on standards, and some focus on historical lineage."}),e.jsx("p",{children:"In other words, Unix-like is not always a perfectly sharp box. It is more like a family resemblance. If a system walks, talks, and configures itself in a very Unix-ish way, people often call it Unix-like."})]}),e.jsxs(i.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(x,{})}),e.jsx("h2",{children:"Major ways a system can be Unix-like"})]}),e.jsx("div",{className:"familyGrid",children:m.map(s=>e.jsxs("article",{className:"familyCard",children:[e.jsx("h3",{children:s.title}),e.jsx("p",{children:s.text})]},s.title))})]}),e.jsxs(i.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Common examples people think of"})]}),e.jsx("p",{children:"When people talk about Unix-like systems, they often mean systems such as these:"}),e.jsx("ul",{children:f.map(s=>e.jsx("li",{children:s},s))}),e.jsx("p",{children:"The exact category can differ depending on whether someone is talking historically, legally, or practically. But in daily developer language, Unix-like usually means a system that feels and behaves in the Unix tradition."})]}),e.jsxs(i.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Why developers care about Unix-like systems"})]}),e.jsx("p",{children:"Unix-like environments are popular because they usually provide a strong shell, scripting tools, process control, file permissions, text utilities, and a consistent command culture. This makes them very useful for development, servers, automation, and system administration."}),e.jsxs("div",{className:"stepsBox",children:[e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"stepNo",children:"1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Small tools"}),e.jsx("p",{children:"Unix-style tools often do one thing well and can be combined with others."})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"stepNo",children:"2"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Strong shell culture"}),e.jsx("p",{children:"Command-line use, scripts, pipes, and automation are central habits in Unix-like systems."})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"stepNo",children:"3"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Portable workflows"}),e.jsx("p",{children:"Many commands and habits transfer across different Unix-like systems with relatively small changes."})]})]})]})]}),e.jsxs(i.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(a,{})}),e.jsx("h2",{children:"Best practical conclusion"})]}),e.jsx("p",{children:"Unix-like does not always mean officially certified UNIX. It usually means the operating system follows the Unix style in behavior, tools, structure, and philosophy."}),e.jsx("p",{children:"So when someone says a system is Unix-like, they are generally saying: this system works in a Unix-style world, even if it is not the exact historical or certified version."})]}),e.jsxs(i.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"A Unix-like operating system is one that behaves similarly to Unix. It may be inspired by Unix, may emulate Unix features, or may follow Unix conventions closely, but it is not necessarily the same thing as formally certified UNIX."})]})]});export{b as default};
