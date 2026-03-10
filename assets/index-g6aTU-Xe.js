import{c as s,j as e,E as d,a as c,l as h,g as a,m as p,F as i,G as n,w as x,t,L as m,K as l,V as u}from"./index-DR_KT_2c.js";import{S as g}from"./index-D4exoH3I.js";const r={Wrapper:s.div`
        width: 100%;
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 24px 20px 40px;
        display: flex;
        flex-direction: column;
        gap: 18px;
    `,HeroCard:s.section`
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
    `,SectionCard:s.section`
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
            margin-bottom: 10px;
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

        .listBox {
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

        .compareGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 16px;

            @media (max-width: 760px) {
                grid-template-columns: 1fr;
            }
        }

        .compareCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .compareCard p {
            margin: 0;
        }
    `,Grid:s.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;

        @media (max-width: 820px) {
            grid-template-columns: 1fr;
        }
    `,InfoCard:s.article`
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
    `,FeatureGrid:s.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;

        @media (max-width: 760px) {
            grid-template-columns: 1fr;
        }

        .featureCard {
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

        .featureCard:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface-2) 0%,
                var(--color-surface-3) 100%
            );
        }

        .featureIcon {
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

        .featureIcon svg {
            width: 20px;
            height: 20px;
        }

        h3 {
            font-size: 18px;
            line-height: 1.2;
            margin-bottom: 8px;
        }

        p {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.75;
        }
    `,FooterNote:s.section`
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
    `},f=["CabView - open cabinet files like ordinary folders","CDAutoPlay - make AutoPlay work on non-audio CDs","Command Prompt Here - open a command prompt from a folder","Contents Menu - access files and folders from a context menu","Desktop Menu - open desktop items from a taskbar menu","Explore From Here - open Explorer with the current folder as root","FindX - add drag-and-drop support to Find/Search","FlexiCD - play audio CDs from the taskbar","Quick Res - change screen resolution quickly","Round Clock - analog clock utility","Send To X - add more destinations to Send To","Shortcut Target Menu - act on the real target behind a shortcut","Telephony Location Selector - switch dialing location","Tweak UI - customize interface and advanced settings","Xmouse - make focus follow the mouse"],w=["MS-DOS Mode Configuration Wizard Customization Tool","Keyboard Remap","Logo Key Control","Conventional Memory Tracker","Windows Process Watcher (WinTop)","Time Zone Editor"],j=["Alt-Tab Replacement Task Switcher","CD Slide Show Generator","ClearType Tuner","Color Control Panel Applet","HTML Slide Show Wizard","Image Resizer","Open Command Window Here","Power Calculator","RAW Image Thumbnailer and Viewer","SyncToy","Taskbar Magnifier","Tweak UI","Virtual Desktop Manager","Webcam Timershot"],v=["Background Switcher","Internet Explorer Find Bar","ISO Image Burner","Shell Audio Player","Super-Fast User Switcher","Virtual CD-ROM Control Panel"],b=[{icon:e.jsx(l,{}),title:"System customization",text:"Tools like Tweak UI gave users access to settings and interface behavior that normal Windows options did not expose clearly."},{icon:e.jsx(n,{}),title:"Power-user shortcuts",text:"Utilities such as Open Command Window Here and Command Prompt Here reduced friction for advanced users and developers."},{icon:e.jsx(t,{}),title:"Media and file helpers",text:"Image Resizer, RAW viewer tools, slideshow utilities, and ISO-related tools improved common daily tasks."},{icon:e.jsx(u,{}),title:"Productivity experiments",text:"Virtual Desktop Manager, task switcher improvements, and SyncToy showed Microsoft experimenting with better workflows."}],W=()=>e.jsxs(r.Wrapper,{className:"topicWrapper",children:[e.jsxs(r.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(d,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(c,{}),"Original topic: August 18, 2012"]}),e.jsx(g,{})]}),e.jsx("h1",{children:"Microsoft PowerToys"}),e.jsx("p",{className:"lead",children:"Microsoft PowerToys are extra utilities released by Microsoft for Windows users who want more control, customization, and convenience than the default operating system normally provides. They were usually aimed at power users, tinkerers, and developers rather than average users."})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(h,{})}),e.jsx("h2",{children:"Simple definition"})]}),e.jsx("p",{children:"PowerToys are optional tools released after a Windows version ships. They are not core parts of Windows itself. Instead, they act like bonus utilities that add new features, shortcuts, experiments, and customization options."}),e.jsx("p",{children:"Because they are not treated like official core Windows components, they usually do not go through the same level of testing and support. That is why they are often seen as useful extras rather than guaranteed built-in features."})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(a,{})}),e.jsx("h2",{children:"Important idea"})]}),e.jsx("p",{children:"PowerToys were often Microsoft's playground for useful ideas. Some features stayed experimental. Some were retired. Some later became normal Windows features."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Not all PowerToys survived future Windows versions"}),e.jsx("li",{children:"Some stopped working after major system changes"}),e.jsx("li",{children:"Some ideas were later built directly into Windows"})]})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(p,{})}),e.jsx("h2",{children:"Who they were for"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Advanced Windows users"}),e.jsx("li",{children:"People who liked customization"}),e.jsx("li",{children:"Users who wanted productivity shortcuts"}),e.jsx("li",{children:"Developers and technical users"})]}),e.jsx("p",{children:'In short, PowerToys were for people who looked at normal Windows settings and thought, "nice, but let me poke the machine a little deeper."'})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(i,{})}),e.jsx("h2",{children:"PowerToys for Windows 95"})]}),e.jsx("p",{children:"The Windows 95 PowerToys set was one of the earliest and most well-known collections. It included many tools for advanced shell behavior, taskbar tricks, and user-interface customization."}),e.jsxs("p",{children:["One of the most famous tools was ",e.jsx("strong",{children:"Tweak UI"}),", which gave users easier access to settings that normally required manual registry edits or deeper system knowledge."]}),e.jsxs("div",{className:"listBox",children:[e.jsx("h3",{children:"Notable Windows 95 PowerToys"}),e.jsx("ul",{children:f.map(o=>e.jsx("li",{children:o},o))})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Windows 95 Kernel Toys"})]}),e.jsxs("p",{children:["After the success of the shell-focused PowerToys, Microsoft also released a smaller set called"," ",e.jsx("strong",{children:"Kernel Toys"}),". These were more focused on system behavior, diagnostics, key remapping, and startup configuration."]}),e.jsxs("div",{className:"listBox",children:[e.jsx("h3",{children:"Kernel Toys included"}),e.jsx("ul",{children:w.map(o=>e.jsx("li",{children:o},o))})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(x,{})}),e.jsx("h2",{children:"PowerToys for Windows XP"})]}),e.jsx("p",{children:"PowerToys for Windows XP were distributed more as separate downloads instead of one single package. By this point, Microsoft had also moved some older useful ideas directly into Windows itself."}),e.jsxs("div",{className:"listBox",children:[e.jsx("h3",{children:"Main Windows XP PowerToys"}),e.jsx("ul",{children:j.map(o=>e.jsx("li",{children:o},o))})]})]}),e.jsx(r.FeatureGrid,{children:b.map(o=>e.jsxs("article",{className:"featureCard",children:[e.jsx("div",{className:"featureIcon",children:o.icon}),e.jsx("h3",{children:o.title}),e.jsx("p",{children:o.text})]},o.title))}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"Spotlight tool: Power Calculator"})]}),e.jsxs("p",{children:["One of the more interesting XP-era PowerToys was"," ",e.jsx("strong",{children:"Power Calculator"}),". It was much more advanced than the default Windows Calculator of that time."]}),e.jsxs("div",{className:"compareGrid",children:[e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"What it could do"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Evaluate more complex expressions"}),e.jsx("li",{children:"Support graphing in Cartesian and polar form"}),e.jsx("li",{children:"Store and reuse functions"}),e.jsx("li",{children:"Convert units"}),e.jsx("li",{children:"Support reverse Polish notation"}),e.jsx("li",{children:"Handle complex numbers"})]})]}),e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"Why it mattered"}),e.jsx("p",{children:"It showed that PowerToys were not just cosmetic tweaks. Some were genuinely powerful tools that gave Windows users functionality far beyond the standard built-in apps."})]})]})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(m,{})}),e.jsx("h2",{children:"Examples that later became normal"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Open command window from a folder"}),e.jsx("li",{children:"Better file and image handling"}),e.jsx("li",{children:"Search and navigation improvements"}),e.jsx("li",{children:"ISO burning in later Windows versions"})]}),e.jsx("p",{children:"This is one of the most interesting things about PowerToys. Sometimes they were basically prototypes for features that Windows later absorbed."})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(a,{})}),e.jsx("h2",{children:"Why older ones faded away"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Windows shell architecture changed"}),e.jsx("li",{children:"User Account Control changed behavior and permissions"}),e.jsx("li",{children:"64-bit systems broke older 32-bit shell extensions"}),e.jsx("li",{children:"Some features were replaced by official built-ins"})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(i,{})}),e.jsx("h2",{children:"Retired XP components"})]}),e.jsx("p",{children:"Some XP PowerToys were later retired because Windows itself caught up or because the tools became outdated."}),e.jsxs("div",{className:"listBox",children:[e.jsx("h3",{children:"Retired tools"}),e.jsx("ul",{children:v.map(o=>e.jsx("li",{children:o},o))})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"Best practical conclusion"})]}),e.jsx("p",{children:"Microsoft PowerToys were optional utility collections that gave Windows users extra control, convenience, and advanced features. They were never meant to be the main operating system itself, but they often filled the gap between what Windows allowed and what advanced users wanted."}),e.jsx("p",{children:"Their real importance is not just the tools themselves. It is the idea behind them: useful experiments, quick wins, and features that serious users actually needed. Some vanished, some evolved, and some quietly became standard parts of the Windows experience."})]}),e.jsxs(r.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"Microsoft PowerToys were bonus Windows utilities for power users. They added customization, productivity tools, shell enhancements, file helpers, and experimental features beyond normal Windows defaults. Over time, some disappeared, some broke, and some became mainstream Windows functionality."})]})]});export{W as default};
