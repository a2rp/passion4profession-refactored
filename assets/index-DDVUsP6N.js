import{c as r,j as e,E as i,a as c,ab as o,m as n,l as p,w as l,ac as t,f as d}from"./index-DR_KT_2c.js";import{S as h}from"./index-D4exoH3I.js";const s={Wrapper:r.div`
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
            max-width: 860px;
            font-size: 16px;
            line-height: 1.85;
            color: var(--color-text-secondary);
        }

        .metaStrip {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 20px;

            @media (max-width: 700px) {
                grid-template-columns: 1fr;
            }
        }

        .metaCard {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            padding: 14px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
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

        .metaCard strong {
            display: block;
            margin-bottom: 4px;
            font-size: 14px;
        }

        .metaCard span:last-child {
            display: block;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
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

        p {
            color: var(--color-text-secondary);
            font-size: 15px;
            line-height: 1.85;
        }

        p + p {
            margin-top: 12px;
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

        .miniCard {
            margin-top: 14px;
            margin-bottom: 14px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 14px;
        }

        .miniCard strong {
            display: block;
            margin-bottom: 6px;
        }

        .miniCard p {
            margin: 0;
            font-size: 14px;
        }

        .useCaseList {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 10px;
        }

        .useCaseList li {
            position: relative;
            padding-left: 18px;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .useCaseList li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
        }
    `,Grid:r.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;

        @media (max-width: 820px) {
            grid-template-columns: 1fr;
        }
    `,GridTwo:r.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;

        @media (max-width: 820px) {
            grid-template-columns: 1fr;
        }
    `,FeatureCard:r.article`
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background: linear-gradient(
            180deg,
            var(--color-surface) 0%,
            var(--color-surface-2) 100%
        );
        box-shadow: 0 18px 40px var(--color-shadow);
        padding: 20px;

        .topRow {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 12px;
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
            font-size: 20px;
            line-height: 1.15;
        }

        p {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.8;
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

        p + p {
            margin-top: 10px;
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
    `},x=["Find which program has locked a file or folder","Inspect handles opened by a process","Inspect DLLs loaded by a process","Investigate handle leaks","Troubleshoot DLL version conflicts","Understand how Windows processes are behaving"],m=[{title:"Live process list",text:"The top pane shows active processes and related details such as the owning account.",icon:e.jsx(l,{})},{title:"Handle view",text:"Shows the handles opened by the selected process, useful when a file or directory is locked.",icon:e.jsx(i,{})},{title:"DLL view",text:"Shows loaded DLLs and memory-mapped files for the selected process.",icon:e.jsx(d,{})},{title:"Search capability",text:"Lets you search for open handles or loaded DLLs across processes.",icon:e.jsx(t,{})}],f=()=>e.jsxs(s.Wrapper,{className:"topicWrapper",children:[e.jsxs(s.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(i,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(c,{}),"Original topic: August 18, 2012"]}),e.jsx(h,{})]}),e.jsx("h1",{children:"Process Explorer"}),e.jsx("p",{className:"lead",children:"Process Explorer is a Windows system utility that helps you inspect running processes in more detail than the normal Task Manager. It can show which files, folders, handles, and DLLs a process is using, making it extremely useful for debugging, troubleshooting, and understanding how Windows applications work under the hood."}),e.jsxs("div",{className:"metaStrip",children:[e.jsxs("div",{className:"metaCard",children:[e.jsx("span",{className:"metaIcon",children:e.jsx(o,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Utility type"}),e.jsx("span",{children:"Advanced process inspection tool"})]})]}),e.jsxs("div",{className:"metaCard",children:[e.jsx("span",{className:"metaIcon",children:e.jsx(n,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Platform"}),e.jsx("span",{children:"Windows"})]})]})]})]}),e.jsxs(s.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(p,{})}),e.jsx("h2",{children:"Simple explanation"})]}),e.jsx("p",{children:"Sometimes a file cannot be deleted, renamed, or moved because some process is still using it. The problem is that Windows usually does not clearly tell you which program is holding it. Process Explorer helps solve that mystery."}),e.jsx("p",{children:"It can show what each running process has opened. That means you can use it to discover which process has a file, folder, or library in use."})]}),e.jsx(s.Grid,{children:m.map(a=>e.jsxs(s.FeatureCard,{children:[e.jsxs("div",{className:"topRow",children:[e.jsx("span",{className:"iconWrap",children:a.icon}),e.jsx("h2",{children:a.title})]}),e.jsx("p",{children:a.text})]},a.title))}),e.jsxs(s.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"How the interface works"})]}),e.jsx("p",{children:"Process Explorer is typically understood as a tool with two main panes."}),e.jsxs("div",{className:"stepsBox",children:[e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"stepNo",children:"1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Top window"}),e.jsx("p",{children:"Shows the currently active processes. This helps you see what is running on the system and who owns each process."})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"stepNo",children:"2"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Bottom window in handle mode"}),e.jsx("p",{children:"Shows the handles opened by the selected process. This is useful when you want to know which process is using a specific file or directory."})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"stepNo",children:"3"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Bottom window in DLL mode"}),e.jsx("p",{children:"Shows the DLLs and memory-mapped files loaded by the selected process."})]})]})]})]}),e.jsxs(s.GridTwo,{children:[e.jsxs(s.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"Why the search feature matters"})]}),e.jsx("p",{children:"One of the most useful features is search. Instead of manually checking process after process, you can search for a filename, handle, or DLL and quickly find the process using it."}),e.jsx("p",{children:"This is especially handy when a file is locked and Windows gives you the usual vague drama instead of a useful answer."})]}),e.jsxs(s.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"Why DLL information is useful"})]}),e.jsx("p",{children:"Applications often load shared libraries called DLLs. If the wrong version is loaded, an application may crash or behave strangely. Process Explorer helps reveal which DLLs are currently loaded by a process."}),e.jsx("p",{children:"This makes it useful for investigating DLL conflicts and version-related issues."})]})]}),e.jsxs(s.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(i,{})}),e.jsx("h2",{children:"Common use cases"})]}),e.jsx("ul",{className:"useCaseList",children:x.map(a=>e.jsx("li",{children:a},a))})]}),e.jsxs(s.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Installation and usage"})]}),e.jsx("p",{children:"Process Explorer is simple to start. Typically, you just run the executable file. No complicated setup ceremony is needed."}),e.jsxs("div",{className:"miniCard",children:[e.jsx("strong",{children:"Basic start"}),e.jsx("p",{children:"Run the Process Explorer executable and begin inspecting processes."})]}),e.jsx("p",{children:"Once opened, you can select a process, switch the lower pane mode, and use search to inspect files, handles, and DLLs."})]}),e.jsxs(s.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Why this tool is valuable"})]}),e.jsx("p",{children:"Process Explorer is useful not only for fixing problems but also for learning how Windows behaves internally. It gives visibility into processes, resources, and loaded modules in a way that normal users rarely see."}),e.jsx("p",{children:"For students, developers, power users, and troubleshooters, it is one of those tools that feels small until the day it saves you from hours of confusion."})]}),e.jsxs(s.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:'Process Explorer is an advanced Windows utility for inspecting running processes, open handles, loaded DLLs, and related system activity. Its real strength is helping you answer practical questions like "Which program is using this file?" and "What exactly has this process loaded?"'})]})]});export{f as default};
