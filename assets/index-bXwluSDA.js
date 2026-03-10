import{c as o,j as e,f as n,a as l,C as i,l as s,D as t,E as c,G as d,o as p,s as x,k as h}from"./index-DR_KT_2c.js";import{S as m}from"./index-D4exoH3I.js";const r={Wrapper:o.div`
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

        .heroNotice {
            margin-top: 18px;
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 14px 16px;
            border-radius: var(--radius-md);
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
        }

        .noticeIcon {
            width: 36px;
            height: 36px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 999px;
            background: var(--color-surface-3);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
        }

        .noticeIcon svg {
            width: 16px;
            height: 16px;
        }

        .heroNotice p {
            margin: 0;
            font-size: 14px;
            line-height: 1.75;
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

        .categoryGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 16px;

            @media (max-width: 760px) {
                grid-template-columns: 1fr;
            }
        }

        .categoryCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .categoryCard p {
            margin: 0;
            font-size: 14px;
        }

        .tableWrap {
            margin-top: 16px;
            overflow-x: auto;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 94%,
                transparent
            );
        }

        table {
            width: 100%;
            min-width: 720px;
            border-collapse: collapse;
        }

        thead th {
            text-align: left;
            font-size: 12px;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            color: var(--color-text-muted);
            padding: 14px 16px;
            border-bottom: 1px solid var(--color-border);
            background: var(--color-surface-3);
        }

        tbody td {
            padding: 14px 16px;
            border-top: 1px solid var(--color-border);
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.65;
            vertical-align: top;
        }

        tbody tr:first-child td {
            border-top: none;
        }

        tbody td:first-child {
            color: var(--color-text-primary);
            font-weight: 800;
            white-space: nowrap;
        }

        .safetyList {
            margin-top: 8px;
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

        .compareItem + .compareItem {
            margin-top: 14px;
            padding-top: 14px;
            border-top: 1px solid var(--color-border);
        }

        .compareItem strong {
            display: block;
            margin-bottom: 6px;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .compareItem p {
            margin: 0;
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
    `},g=[{ext:".exe",format:"Executable",os:"Windows"},{ext:".msi",format:"Windows Installer Package",os:"Windows"},{ext:".bat",format:"Batch File",os:"Windows"},{ext:".cmd",format:"Command Script",os:"Windows"},{ext:".com",format:"Command File",os:"Windows"},{ext:".ps1",format:"PowerShell Script",os:"Windows"},{ext:".reg",format:"Registry Data File",os:"Windows"},{ext:".vbs",format:"VBScript File",os:"Windows"},{ext:".wsf",format:"Windows Script File",os:"Windows"},{ext:".jar",format:"Java Archive",os:"Cross-platform with Java"},{ext:".app",format:"Application Bundle",os:"macOS"},{ext:".command",format:"Terminal Command",os:"macOS"},{ext:".workflow",format:"Automator Workflow",os:"macOS"},{ext:".sh",format:"Shell Script",os:"Linux, macOS"},{ext:".bin",format:"Binary Executable",os:"Windows, macOS, Linux"},{ext:".run",format:"Executable Package",os:"Linux"},{ext:".apk",format:"Android Application Package",os:"Android"}],f=[{ext:".docm",format:"Word Macro-Enabled Document",program:"Microsoft Word"},{ext:".xlsm",format:"Excel Macro-Enabled Workbook",program:"Microsoft Excel"},{ext:".pptm",format:"PowerPoint Macro-Enabled Presentation",program:"Microsoft PowerPoint"},{ext:".js",format:"JavaScript Script",program:"Browser or script host"},{ext:".hta",format:"HTML Application",program:"Windows script environment"},{ext:".jar",format:"Java Archive",program:"Java Runtime Environment"},{ext:".pyc",format:"Compiled Python File",program:"Python"},{ext:".ahk",format:"AutoHotkey Script",program:"AutoHotkey"},{ext:".air",format:"Adobe AIR Package",program:"Adobe AIR"},{ext:".scr",format:"Script or screensaver-related executable type",program:"Depends on system/program"}],u=["Do not open executable files from unknown email senders.","Be extra careful with installers, scripts, macros, and shortcut-like files.","A familiar filename does not guarantee a safe file.","Check the source before running anything that can execute commands.","If a file asks to enable macros or extra permissions, slow down and verify first.","Antivirus helps, but basic caution is still your first shield."],v=()=>e.jsxs(r.Wrapper,{className:"topicWrapper",children:[e.jsxs(r.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(n,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(l,{}),"Original topic: January 15, 2013"]}),e.jsx(m,{})]}),e.jsx("h1",{children:"List of executable file extensions"}),e.jsx("p",{className:"lead",children:"An executable file is a file that can make a system perform an action, run a program, execute a script, apply settings, or trigger commands. That is very different from a normal file that only stores passive content like plain text, images, or audio."}),e.jsxs("div",{className:"heroNotice",children:[e.jsx("span",{className:"noticeIcon",children:e.jsx(i,{})}),e.jsx("p",{children:"Executable files are not automatically bad, but they are more sensitive than ordinary files because they can do things, not just show things."})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Simple meaning"})]}),e.jsx("p",{children:"A file with an executable extension usually means the file format supports some kind of automatic behavior. That may be launching a program, running a script, installing software, changing settings, or executing commands inside another application."}),e.jsx("p",{children:"This is why executable files are powerful and also risky. A trusted installer may be helpful. A malicious executable may damage files, steal data, or change system behavior."})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"Why they matter"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"They can run commands on your device"}),e.jsx("li",{children:"They can install software or change settings"}),e.jsx("li",{children:"They can start trusted tools or malicious payloads"}),e.jsx("li",{children:"They often require more caution than normal files"})]})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(i,{})}),e.jsx("h2",{children:"Important caution"})]}),e.jsx("p",{children:"A file extension alone does not tell you whether a file is safe or unsafe. It only tells you that the file may be able to execute something."}),e.jsx("p",{children:"Safety depends on the source, the file content, the program opening it, and the permissions involved."})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(c,{})}),e.jsx("h2",{children:"Two useful categories"})]}),e.jsxs("div",{className:"categoryGrid",children:[e.jsxs("div",{className:"categoryCard",children:[e.jsx("h3",{children:"Directly executable or highly sensitive"}),e.jsx("p",{children:"These are file types that operating systems or core runtimes commonly know how to run with little extra help."})]}),e.jsxs("div",{className:"categoryCard",children:[e.jsx("h3",{children:"Program-dependent executables"}),e.jsx("p",{children:"These need a specific application to interpret and execute their commands, such as macro files, script files, or package files tied to a tool."})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"Common high-risk executable extensions"})]}),e.jsx("p",{children:"These are common examples of executable or strongly action-capable file types. This is not a complete list, but it covers the ones most people should recognize."}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Extension"}),e.jsx("th",{children:"Format"}),e.jsx("th",{children:"Operating system"})]})}),e.jsx("tbody",{children:g.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:a.ext}),e.jsx("td",{children:a.format}),e.jsx("td",{children:a.os})]},`${a.ext}-${a.os}`))})]})})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(p,{})}),e.jsx("h2",{children:"Program-dependent executable formats"})]}),e.jsx("p",{children:"Some file types are only executable if the right software is installed. If that software exists on the machine, the file may be just as sensitive as a traditional executable."}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Extension"}),e.jsx("th",{children:"Format"}),e.jsx("th",{children:"Common program or runtime"})]})}),e.jsx("tbody",{children:f.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:a.ext}),e.jsx("td",{children:a.format}),e.jsx("td",{children:a.program})]},`${a.ext}-${a.program}`))})]})})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(x,{})}),e.jsx("h2",{children:"Examples of ordinary vs executable thinking"})]}),e.jsxs("div",{className:"compareItem",children:[e.jsx("strong",{children:"Usually passive"}),e.jsx("p",{children:".jpg, .png, .txt, .mp3, .pdf"})]}),e.jsxs("div",{className:"compareItem",children:[e.jsx("strong",{children:"Potentially executable or action-capable"}),e.jsx("p",{children:".exe, .msi, .bat, .sh, .jar, .ps1, .docm"})]})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(h,{})}),e.jsx("h2",{children:"Why incomplete lists are normal"})]}),e.jsx("p",{children:"There is no perfectly finished master list because new tools, scripting engines, runtimes, and package formats keep appearing. Some extensions are only meaningful in specific software ecosystems."}),e.jsx("p",{children:"So the better goal is not memorizing every obscure extension in the universe. The better goal is learning the pattern: if a file can run commands or trigger automation, treat it carefully."})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"Safe habits before opening such files"})]}),e.jsx("ul",{className:"safetyList",children:u.map(a=>e.jsx("li",{children:a},a))})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Best practical conclusion"})]}),e.jsx("p",{children:"Executable file extensions matter because they indicate that a file may do something active on a system. That can be useful, like installing trusted software, or dangerous, like running malicious code."}),e.jsx("p",{children:"The smartest habit is simple: do not judge by extension alone, but always respect action-capable files more than passive files."})]}),e.jsxs(r.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"Executable file extensions belong to files that can launch programs, run scripts, install software, trigger macros, or execute commands through a runtime or application. They are not automatically dangerous, but they deserve extra caution, especially when they come from unknown or untrusted sources."})]})]});export{v as default};
