import{c as a,j as e,d as i,k as o,l as n,f as t,o as l,Y as d,m as c,U as p,g as x,D as h}from"./index-BxgJM-x-.js";import{S as m}from"./index-D6FK_vhk.js";const r={Wrapper:a.div`
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
            font-size: clamp(32px, 4vw, 52px);
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
    `,FactsCard:a.section`
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

        .factsGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;

            @media (max-width: 760px) {
                grid-template-columns: 1fr;
            }
        }

        .factItem {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 14px;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .factLabel {
            color: var(--color-text-muted);
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.04em;
        }

        .factValue {
            color: var(--color-text-primary);
            font-size: 14px;
            line-height: 1.6;
            font-weight: 700;
        }

        h2 {
            font-size: 24px;
            line-height: 1.12;
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

        .quoteBox {
            margin: 14px 0;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: var(--color-surface-3);
            padding: 18px;
            font-size: 18px;
            line-height: 1.5;
            color: var(--color-text-primary);
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

        .chipGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            margin: 16px 0;

            @media (max-width: 720px) {
                grid-template-columns: 1fr;
            }
        }

        .chipItem {
            min-height: 48px;
            padding: 12px 14px;
            border-radius: var(--radius-md);
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-primary);
            font-size: 14px;
            font-weight: 700;
            line-height: 1.55;
            display: flex;
            align-items: center;
        }

        .stepsBox {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: 14px;
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
    `},u=[{label:"Project name",value:"GNU"},{label:"Started",value:"1983"},{label:"Founder",value:"Richard Stallman"},{label:"Type",value:"Unix-like free software operating system project"},{label:"Goal",value:"A complete Unix-compatible system made of free software"},{label:"Related organization",value:"Free Software Foundation (FSF)"}],g=["GNU Compiler Collection (GCC)","GNU Binary Utilities (binutils)","Bash shell","GNU C Library (glibc)","GNU Core Utilities (coreutils)"],f=["GNU General Public License (GPL)","GNU Lesser General Public License (LGPL)","GNU Free Documentation License (GFDL)"],v=()=>e.jsxs(r.Wrapper,{className:"topicWrapper",children:[e.jsxs(r.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(i,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(o,{}),"Original topic: May 30, 2012"]}),e.jsx(m,{})]}),e.jsx("h1",{children:"GNU"}),e.jsx("p",{className:"lead",children:"GNU is a free software operating system project created to build a complete Unix-compatible system made entirely from free software. It is one of the most important foundations behind modern free and open source computing."})]}),e.jsxs(r.FactsCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Quick facts"})]}),e.jsx("div",{className:"factsGrid",children:u.map(s=>e.jsxs("div",{className:"factItem",children:[e.jsx("span",{className:"factLabel",children:s.label}),e.jsx("span",{className:"factValue",children:s.value})]},s.label))})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"What GNU actually is"})]}),e.jsx("p",{children:"GNU is not just one program. It is a large software project whose aim was to create a complete operating system that behaves like Unix but is fully free software. That means users should be able to run it, study it, modify it, and share it."}),e.jsx("p",{children:"In simple words, GNU is a collection of system tools, libraries, compilers, shells, and utilities designed to work together as an operating system environment."})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"Meaning of the name"})]}),e.jsx("p",{children:"GNU is a recursive acronym:"}),e.jsx("div",{className:"quoteBox",children:e.jsx("strong",{children:"GNU's Not Unix!"})}),e.jsx("p",{children:"It is called recursive because the first word of the acronym contains the acronym itself. Computer people love this kind of nerd joke far more than normal society reasonably should."}),e.jsx("p",{children:"The name reflects two ideas at once:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"GNU is Unix-like in design"}),e.jsx("li",{children:"GNU is not Unix code and is intended to be free software"})]})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"Who started it"})]}),e.jsx("p",{children:"GNU was initiated by Richard Stallman in 1983. It later became the central software effort associated with the Free Software Foundation, also known as the FSF."}),e.jsx("p",{children:"The project was not only technical. It also had a strong social and ethical purpose: software freedom for users."})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(c,{})}),e.jsx("h2",{children:"Why GNU matters in operating systems"})]}),e.jsx("p",{children:"When people talk about Linux-based systems, many of the tools they use every day often come from GNU. These include compilers, command-line tools, shells, libraries, and system utilities."}),e.jsxs("p",{children:['This is why the Free Software Foundation argues that many systems commonly called "Linux" are more precisely described as ',e.jsx("strong",{children:"GNU/Linux"}),", because the Linux kernel is combined with a large body of GNU software."]}),e.jsxs("div",{className:"compareGrid",children:[e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"Kernel"}),e.jsx("p",{children:"Linux is primarily the kernel, which is the low-level core that talks to hardware and manages resources."})]}),e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"Userland tools"}),e.jsx("p",{children:"GNU provides many of the commands, libraries, and developer tools that make the full system usable."})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Important GNU components"})]}),e.jsx("p",{children:"GNU is made up of many separate software packages. Some of the most important ones are:"}),e.jsx("div",{className:"chipGrid",children:g.map(s=>e.jsx("div",{className:"chipItem",children:s},s))}),e.jsx("p",{children:"These are the kinds of tools that quietly keep huge chunks of software development and system operation running in the background without demanding applause."})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(p,{})}),e.jsx("h2",{children:"GNU and Linux"})]}),e.jsx("p",{children:"GNU and Linux are related, but they are not the same thing."}),e.jsxs("ul",{children:[e.jsx("li",{children:"GNU is a broader operating system project"}),e.jsx("li",{children:"Linux is a kernel"}),e.jsx("li",{children:"Many popular systems combine Linux with GNU tools"}),e.jsx("li",{children:"That is why the term GNU/Linux exists"})]}),e.jsx("p",{children:"This naming debate became famous because technical accuracy and software philosophy collided, as they often do in computing."})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(x,{})}),e.jsx("h2",{children:"GNU is bigger than one kernel"})]}),e.jsxs("p",{children:["GNU was originally intended to have its own kernel, called ",e.jsx("strong",{children:"GNU Hurd"}),". But GNU software can also be used with other kernels, most famously Linux."]}),e.jsx("p",{children:"So GNU is not defined only by one kernel choice. It is better understood as a wider operating system ecosystem."})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(h,{})}),e.jsx("h2",{children:"GNU licenses and free software"})]}),e.jsx("p",{children:"GNU is strongly associated with free software licensing. Some of the best-known GNU licenses are:"}),e.jsx("ul",{children:f.map(s=>e.jsx("li",{children:s},s))}),e.jsx("p",{children:"These licenses were created to protect user freedoms such as the ability to read source code, modify it, and redistribute it under defined conditions."})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(i,{})}),e.jsx("h2",{children:"Simple mental model"})]}),e.jsxs("div",{className:"stepsBox",children:[e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"stepNo",children:"1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Unix inspired the design"}),e.jsx("p",{children:"GNU aimed to be compatible in spirit and structure with Unix systems."})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"stepNo",children:"2"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Free software was the goal"}),e.jsx("p",{children:"Users should have freedom over the software they run."})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"stepNo",children:"3"}),e.jsxs("div",{children:[e.jsx("strong",{children:"GNU built essential tools"}),e.jsx("p",{children:"Compilers, shells, libraries, and utilities were developed as major building blocks."})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"stepNo",children:"4"}),e.jsxs("div",{children:[e.jsx("strong",{children:"GNU became part of modern systems"}),e.jsx("p",{children:"Many Linux-based systems rely heavily on GNU software today."})]})]})]})]}),e.jsxs(r.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:'GNU is a free software operating system project created to build a complete Unix-like system from free components. It became hugely influential through its tools, libraries, licenses, and philosophy. Even when people casually say "Linux", a large part of what they are using is often GNU software under the hood.'})]})]});export{v as default};
