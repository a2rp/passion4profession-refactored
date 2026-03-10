import{c as i,j as e,k as s,aK as l,w as o,aL as h,m as t,ah as n,aM as d,am as c,f as p}from"./index-BxgJM-x-.js";import{S as x}from"./index-D6FK_vhk.js";const a={Wrapper:i.div`
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

        .heroMetaGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
            margin-top: 22px;

            @media (max-width: 860px) {
                grid-template-columns: 1fr;
            }
        }

        .heroMetaCard {
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

        .metaIcon svg {
            width: 18px;
            height: 18px;
        }

        .heroMetaCard strong {
            display: block;
            margin-bottom: 4px;
            font-size: 14px;
        }

        .heroMetaCard span:last-child {
            display: block;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
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
            line-height: 1.18;
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

        .compareGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin: 16px 0 0;

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

        .timeline {
            display: flex;
            flex-direction: column;
            gap: 14px;
        }

        .timelineItem {
            display: flex;
            align-items: flex-start;
            gap: 14px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;

            @media (max-width: 640px) {
                flex-direction: column;
            }
        }

        .timelineYear {
            min-width: 86px;
            min-height: 34px;
            padding: 0 12px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: var(--color-text-primary);
            color: var(--color-text-inverse);
            font-size: 13px;
            font-weight: 800;
            line-height: 1;
            flex-shrink: 0;
        }

        .timelineContent h3 {
            margin-bottom: 6px;
        }

        .chipRow {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 16px;
        }

        .chip {
            min-height: 36px;
            padding: 0 12px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-primary);
            font-size: 13px;
            font-weight: 700;
        }
    `,HighlightGrid:i.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;

        @media (max-width: 860px) {
            grid-template-columns: 1fr;
        }

        .highlightCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-lg);
            background: linear-gradient(
                180deg,
                var(--color-surface) 0%,
                var(--color-surface-2) 100%
            );
            box-shadow: 0 18px 40px var(--color-shadow);
            padding: 20px;
            transition:
                transform var(--transition-fast),
                border-color var(--transition-fast),
                background var(--transition-fast);
        }

        .highlightCard:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface-2) 0%,
                var(--color-surface-3) 100%
            );
        }

        .highlightIcon {
            width: 44px;
            height: 44px;
            margin-bottom: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            background: var(--color-surface-3);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
        }

        .highlightIcon svg {
            width: 20px;
            height: 20px;
        }

        .highlightCard h3 {
            font-size: 18px;
            line-height: 1.2;
            margin-bottom: 8px;
        }

        .highlightCard p {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.75;
        }
    `,Grid:i.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;

        @media (max-width: 860px) {
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

        .miniStack {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: 6px;
        }

        .miniCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 14px;
        }

        .miniCard h3 {
            font-size: 16px;
            line-height: 1.2;
            margin-bottom: 6px;
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
    `},m=[{icon:e.jsx(l,{}),title:"1984 launch",text:"The Macintosh was introduced on January 24, 1984 and became one of the earliest commercially successful personal computers with a graphical user interface."},{icon:e.jsx(d,{}),title:"Mouse-driven interface",text:"It helped popularize the use of a mouse and windows-based interaction instead of relying only on command-line input."},{icon:e.jsx(c,{}),title:"Brand revival",text:"In 1998, Apple revitalized the Macintosh line with the iMac, which simplified its product lineup and became a major success."},{icon:e.jsx(p,{}),title:"Apple-controlled platform",text:"Apple designed both the hardware and the operating system, giving the Mac a tightly integrated ecosystem."}],g=[{year:"1984",title:"Original Macintosh introduced",text:"The first Macintosh arrived with a graphical user interface and mouse-driven experience that stood apart from command-line systems."},{year:"Late 1980s",title:"Strong early success",text:"The Macintosh line gained recognition, while Apple also continued to benefit from the strength of the Apple II family."},{year:"1990s",title:"Pressure from the Wintel world",text:"The personal computer market shifted heavily toward IBM PC compatibles running MS-DOS and Microsoft Windows."},{year:"1998",title:"iMac refreshes the brand",text:"Apple reorganized its consumer desktop line and introduced the iMac, which helped revive the Mac brand."},{year:"Modern era",title:"Mac expands across form factors",text:"The Mac family grew into desktops, all-in-one systems, compact machines, and laptops for home, education, and creative work."}],u=[{title:"Motorola 68k era",text:"The earliest Macintosh models used Motorola 68k processors."},{title:"PowerPC era",text:"From 1994 to 2006, many Macintosh models used PowerPC processors."},{title:"Intel era",text:"Later Macs moved to Intel x86-64 processors, allowing broader compatibility and easier support for other operating systems."}],f=["iMac","Mac mini","Mac Pro","MacBook Air","MacBook Pro"],j=()=>e.jsxs(a.Wrapper,{className:"topicWrapper",children:[e.jsxs(a.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(s,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(l,{}),"Original topic: May 30, 2012"]}),e.jsx(x,{})]}),e.jsx("h1",{children:"Macintosh"}),e.jsxs("p",{className:"lead",children:["Macintosh, often called ",e.jsx("strong",{children:"Mac"}),", is Apple's long-running family of personal computers. It became one of the most influential computer lines in personal computing history because it helped popularize the graphical user interface, mouse-based interaction, and a tightly integrated hardware-plus-software experience."]}),e.jsxs("div",{className:"heroMetaGrid",children:[e.jsxs("div",{className:"heroMetaCard",children:[e.jsx("span",{className:"metaIcon",children:e.jsx(o,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Computer family"}),e.jsx("span",{children:"Apple personal computers"})]})]}),e.jsxs("div",{className:"heroMetaCard",children:[e.jsx("span",{className:"metaIcon",children:e.jsx(h,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Known for"}),e.jsx("span",{children:"GUI and mouse-first computing"})]})]}),e.jsxs("div",{className:"heroMetaCard",children:[e.jsx("span",{className:"metaIcon",children:e.jsx(t,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Platform model"}),e.jsx("span",{children:"Apple hardware plus Apple operating system"})]})]})]})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Simple definition"})]}),e.jsx("p",{children:"Macintosh is a series of personal computers designed, developed, and marketed by Apple. The first Macintosh was introduced in 1984 and became famous for bringing a more visual way of using a computer into the mainstream."}),e.jsx("p",{children:"Instead of depending mainly on typed commands, it used a graphical user interface, icons, windows, and a mouse. That shift mattered a lot because it made computers feel more approachable to many people."})]}),e.jsx(a.HighlightGrid,{children:m.map(r=>e.jsxs("article",{className:"highlightCard",children:[e.jsx("div",{className:"highlightIcon",children:r.icon}),e.jsx("h3",{children:r.title}),e.jsx("p",{children:r.text})]},r.title))}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"Why the original Macintosh mattered"})]}),e.jsx("p",{children:"The original Macintosh was not the first computer ever to use graphical ideas, but it was one of the first commercially successful systems to make that style of computing widely visible. It helped move personal computing away from a world dominated by command lines and into a world of windows, menus, and pointer-based interaction."}),e.jsxs("div",{className:"compareGrid",children:[e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"Command-line style"}),e.jsx("p",{children:"The user types commands and must remember many exact instructions."})]}),e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"Macintosh style"}),e.jsx("p",{children:"The user clicks visual items, opens windows, and works through a graphical interface."})]})]})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(c,{})}),e.jsx("h2",{children:"Macintosh through time"})]}),e.jsx("div",{className:"timeline",children:g.map(r=>e.jsxs("div",{className:"timelineItem",children:[e.jsx("span",{className:"timelineYear",children:r.year}),e.jsxs("div",{className:"timelineContent",children:[e.jsx("h3",{children:r.title}),e.jsx("p",{children:r.text})]})]},r.year+r.title))})]}),e.jsxs(a.Grid,{children:[e.jsxs(a.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(p,{})}),e.jsx("h2",{children:"Apple's integrated approach"})]}),e.jsx("p",{children:"One defining feature of the Mac platform is vertical integration. Apple does not just sell the computer hardware. It also develops the operating system that is meant to run on that hardware."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Apple designs the machine"}),e.jsx("li",{children:"Apple builds the operating system experience"}),e.jsx("li",{children:"Apple controls the overall product direction"}),e.jsx("li",{children:"The result is a tightly connected hardware and software platform"})]})]}),e.jsxs(a.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"Processor eras"})]}),e.jsx("div",{className:"miniStack",children:u.map(r=>e.jsxs("div",{className:"miniCard",children:[e.jsx("h3",{children:r.title}),e.jsx("p",{children:r.text})]},r.title))})]})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Mac product examples"})]}),e.jsx("p",{children:"Over time, the Macintosh family expanded into different categories for different users, including home users, students, professionals, and creative workers."}),e.jsx("div",{className:"chipRow",children:f.map(r=>e.jsx("span",{className:"chip",children:r},r))})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Operating systems and flexibility"})]}),e.jsx("p",{children:"The Mac platform is strongly associated with Apple's own operating system. That was a major part of its identity. At the same time, later Mac systems were also capable of running alternative operating systems in some situations."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Apple's own operating system remained central"}),e.jsx("li",{children:"Intel-based Macs made it easier to run some non-Apple operating systems"}),e.jsx("li",{children:"Even so, the Mac was fundamentally built as an Apple platform first"})]})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Best practical takeaway"})]}),e.jsx("p",{children:"Macintosh is important not just because it is a product line, but because it helped shape how many people think a personal computer should work. Visual interaction, tight hardware-software design, and a more polished user experience all became central parts of the Mac identity."}),e.jsx("p",{children:"In simple terms, the Macintosh helped make computing feel less like commanding a machine and more like using a visual tool."})]}),e.jsxs(a.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"Macintosh is Apple's family of personal computers and one of the most influential names in desktop and laptop computing. Its early success came from making graphical, mouse-driven computing more mainstream, and its long-term identity came from Apple's tightly integrated approach to hardware and software."})]})]});export{j as default};
