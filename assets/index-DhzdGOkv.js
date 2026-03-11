import{c as a,j as e,m as n,a as t,l,g as o,D as c,G as d,K as p,w as x,E as m,b as h}from"./index-D1C0sqWO.js";import{S as u}from"./index-DpzaY4xy.js";const s={Wrapper:a.div`
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

        .step p {
            margin: 0;
            font-size: 14px;
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
    `,ProcessGrid:a.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
        margin-top: 8px;

        @media (max-width: 860px) {
            grid-template-columns: 1fr;
        }

        .processCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .processTop {
            margin-bottom: 12px;
        }

        .processBadge {
            min-height: 32px;
            padding: 0 10px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-primary);
            font-size: 13px;
            font-weight: 900;
            line-height: 1;
        }

        .processSummary {
            margin: 0 0 14px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.75;
        }

        .cautionBox {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            padding: 12px;
            border-radius: var(--radius-sm);
            border: 1px solid var(--color-border);
            background: var(--color-surface);
        }

        .cautionIcon {
            width: 28px;
            height: 28px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 999px;
            background: var(--color-surface-3);
            color: var(--color-text-primary);
        }

        .cautionBox p {
            margin: 0;
            font-size: 13px;
            line-height: 1.7;
            color: var(--color-text-secondary);
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
    `},g=[{title:"Core Windows and system processes",items:[{name:"svchost.exe",summary:"Generic host process used by Windows to run services from DLL files. Multiple instances are normal.",caution:"Do not kill random instances without checking which services are attached to them."},{name:"dwm.exe",summary:"Desktop Window Manager. Handles visual effects such as compositing, transparency, and window previews.",caution:"Usually legitimate and useful. Turning it off changes the desktop visual behavior."},{name:"ctfmon.exe",summary:"Handles alternative user input, language bar, speech input, and certain text services.",caution:"Can be disabled only if you do not use those input features."},{name:"rundll32.exe",summary:"Windows utility used to launch functionality stored inside DLL files.",caution:"Valid when running from the proper system directory, but malware can imitate the name."},{name:"conhost.exe",summary:"Console Window Host. Helps command-line windows behave properly in newer Windows versions.",caution:"Legitimate when located in the proper system folder and signed by Microsoft."},{name:"cmd.exe",summary:"Windows Command Prompt executable used to run command-line instructions.",caution:"Normal if you opened it or a script launched it. Unexpected runs may need investigation."},{name:"mobsync.exe",summary:"Microsoft Sync Center process, used for offline sync and some connected-device scenarios.",caution:"Usually harmless and tied to synchronization features."}]},{title:"Media and update-related processes",items:[{name:"jusched.exe",summary:"Java Update Scheduler. It checks periodically for Java updates.",caution:"Not usually critical for day-to-day running. Can often be disabled if you prefer manual updates."},{name:"wmpnetwk.exe",summary:"Windows Media Player Network Sharing service used for media sharing over a network.",caution:"Can be disabled if you do not use media sharing features."},{name:"wmpnscfg.exe",summary:"Configuration process related to Windows Media Player network sharing.",caution:"Usually appears with media sharing features and is not needed by everyone."},{name:"dpupdchk.exe",summary:"Likely an update checker related to Microsoft IntelliPoint software.",caution:"Often not essential, but removing things blindly can break device software behavior."}]},{title:"Device utility processes",items:[{name:"ipoint.exe",summary:"Microsoft IntelliPoint core process for Microsoft mouse features.",caution:"Safe if installed with Microsoft mouse software. Removing it may disable extra mouse functions."},{name:"itype.exe",summary:"Microsoft IntelliType process for enhanced keyboard features and media keys.",caution:"Usually harmless if installed with Microsoft keyboard software."}]},{title:"Citrix and remote access processes",items:[{name:"wfcrun32.exe",summary:"Citrix process used in corporate remote application environments.",caution:"Common in enterprise setups. Usually safe if installed from Citrix software."},{name:"wfica32.exe",summary:"Citrix ICA client process used for remote application or server access.",caution:"Normal in work environments using Citrix. Not suspicious by itself."}]}],f=["Check the exact process name carefully. Malware often imitates trusted names.","Check the file location. A legitimate Windows process usually runs from its expected system folder.","Check the digital signature or file properties when possible.","Use Task Manager, Process Explorer, or similar tools to inspect command line and parent process.","Do not disable a process only because it looks unfamiliar."],v=["Unknown does not automatically mean dangerous.","System32 location matters for many Windows processes.","Multiple svchost.exe processes are normal on Windows.","Some processes belong to hardware drivers, media tools, or enterprise software.","Disabling the wrong process can break a feature you actually use."],b=()=>e.jsxs(s.Wrapper,{className:"topicWrapper",children:[e.jsxs(s.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(n,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(t,{}),"Original topic: August 18, 2012"]}),e.jsx(u,{})]}),e.jsx("h1",{children:"What is that process?"}),e.jsx("p",{className:"lead",children:"Task Manager often shows process names that look cryptic, suspicious, or just plain annoying. This page explains some of the common processes from the original archive and shows how to think about them more safely and clearly."})]}),e.jsxs(s.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"Simple idea"})]}),e.jsx("p",{children:"A process is simply a running instance of a program or system component. Some processes are part of Windows itself. Some belong to device utilities. Some come from media software, Java, Citrix, or third-party tools."}),e.jsx("p",{children:'So when you see a strange name in Task Manager, the right question is not "Can I kill this?" but "What is it, where is it running from, and what feature depends on it?"'})]}),e.jsxs(s.Grid,{children:[e.jsxs(s.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Common mistake"})]}),e.jsx("p",{children:"Many people assume unfamiliar process names are viruses. That is not a safe conclusion."}),e.jsx("ul",{children:v.map(r=>e.jsx("li",{children:r},r))})]}),e.jsxs(s.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(c,{})}),e.jsx("h2",{children:"Safer mindset"})]}),e.jsx("p",{children:"Investigate first. Disable later. Random process-killing is how operating systems develop emotional damage."}),e.jsx("ul",{children:f.map(r=>e.jsx("li",{children:r},r))})]})]}),e.jsxs(s.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"How to identify a process properly"})]}),e.jsxs("div",{className:"stepsBox",children:[e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"stepNo",children:"1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Check the file location"}),e.jsx("p",{children:"A real Windows process usually lives in an expected folder like System32. A fake copy may run from some strange path."})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"stepNo",children:"2"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Check command line and parent process"}),e.jsx("p",{children:"Tools like Task Manager and Process Explorer can reveal what launched the process and with what arguments."})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"stepNo",children:"3"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Check what feature uses it"}),e.jsx("p",{children:"Some processes exist only because a driver, media feature, remote access tool, or language service needs them."})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"stepNo",children:"4"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Only then decide whether to disable it"}),e.jsx("p",{children:"Disable a process only if you understand the cost of removing it."})]})]})]})]}),g.map(r=>e.jsxs(s.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(p,{})}),e.jsx("h2",{children:r.title})]}),e.jsx(s.ProcessGrid,{children:r.items.map(i=>e.jsxs("article",{className:"processCard",children:[e.jsx("div",{className:"processTop",children:e.jsx("span",{className:"processBadge",children:i.name})}),e.jsx("p",{className:"processSummary",children:i.summary}),e.jsxs("div",{className:"cautionBox",children:[e.jsx("span",{className:"cautionIcon",children:e.jsx(o,{})}),e.jsx("p",{children:i.caution})]})]},i.name))})]},r.title)),e.jsxs(s.Grid,{children:[e.jsxs(s.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(x,{})}),e.jsx("h2",{children:"Examples worth knowing"})]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"svchost.exe"})," is often normal even when many copies are running"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"dwm.exe"})," is part of desktop visual rendering"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"ctfmon.exe"})," relates to text input and language features"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"rundll32.exe"})," launches DLL-based functionality"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"conhost.exe"})," is tied to console windows and command-line behavior"]})]})]}),e.jsxs(s.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(m,{})}),e.jsx("h2",{children:"Useful tools"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Task Manager for basic inspection"}),e.jsx("li",{children:"Process Explorer for deeper process details"}),e.jsx("li",{children:"Services panel for service-related processes"}),e.jsx("li",{children:"Startup configuration tools for auto-run items"}),e.jsx("li",{children:"Antivirus scan if the path or signature looks wrong"})]}),e.jsx("p",{children:"The process name alone is only the first clue, not the verdict."})]})]}),e.jsxs(s.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(h,{})}),e.jsx("h2",{children:"Best practical conclusion"})]}),e.jsx("p",{children:"Many strange-looking processes are perfectly normal. Some belong to Windows internals, some to drivers, some to media sharing, and some to enterprise tools such as Citrix."}),e.jsx("p",{children:"The right way to judge a process is to inspect its location, purpose, parent process, and related software. Process names without context are misleading little goblins."})]}),e.jsxs(s.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"A strange process name does not automatically mean malware. Before disabling anything, check where it lives, what it does, and which feature depends on it. Understanding first, clicking later, is the civilized way."})]})]});export{b as default};
