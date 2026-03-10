import{c as o,j as e,F as a,a as s,C as n,E as l,w as d,l as c,t as p,K as h}from"./index-DR_KT_2c.js";import{S as x}from"./index-D4exoH3I.js";const r={Wrapper:o.div`
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
            max-width: 840px;
            font-size: 16px;
            line-height: 1.85;
            color: var(--color-text-secondary);
        }
    `,WarningCard:o.section`
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

        .iconWrap.warning {
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

        ul {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 14px;
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

        p + p {
            margin-top: 12px;
        }

        ul {
            display: flex;
            flex-direction: column;
            gap: 10px;
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

        pre {
            margin-top: 14px;
            background: var(--color-code-bg);
            color: var(--color-code-text);
            border: 1px solid var(--color-code-border);
            border-radius: var(--radius-md);
            padding: 16px;
            overflow-x: auto;
            line-height: 1.7;
            font-size: 13px;
        }

        .stepsStack {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .stepCard {
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
            padding: 14px;
        }

        .stepNumber {
            width: 34px;
            height: 34px;
            flex-shrink: 0;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: var(--color-text-primary);
            color: var(--color-text-inverse);
            font-size: 14px;
            font-weight: 900;
            line-height: 1;
        }

        .stepContent h3 {
            font-size: 17px;
            line-height: 1.2;
            margin-bottom: 6px;
        }

        .stepContent p {
            font-size: 14px;
            line-height: 1.75;
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

        .creditLine {
            margin-top: 12px;
            color: var(--color-text-muted);
            font-size: 13px;
        }
    `},m=["A Windows XP system","Resource Hacker","An image editor such as Photoshop","Basic access to system files","Care while editing boot configuration"],g=[{title:"Create a backup kernel copy",text:"Copy windows/system32/ntoskrnl.exe to windows/system32/mykrnl.exe so you edit a duplicate instead of touching the original file directly."},{title:"Open the copied file in Resource Hacker",text:"Launch Resource Hacker and open windows/system32/mykrnl.exe."},{title:"Locate the boot screen bitmap",text:"The startup screen bitmaps are usually 1, 8, and 10. In the original tutorial, bitmap 1 is the one that needed editing."},{title:"Export the bitmap",text:"Use the save bitmap action and export bitmap 1 to your hard drive."},{title:"Open the bitmap in Photoshop",text:"The image may appear completely black at first. That is expected because of the limited color mode being used."},{title:"Load the correct color table",text:"Go to Image, then Mode, then Color Table, and load the 16-color palette so the splash image becomes visible."},{title:"Edit or replace the image carefully",text:"Keep the same dimensions and the same palette. If you break the format, the boot screen may not render correctly."},{title:"Replace the bitmap in Resource Hacker",text:"Return to Resource Hacker and use the replace bitmap action to insert your edited version into mykrnl.exe."},{title:"Save the modified kernel copy",text:"Save the edited file as mykrnl.exe."},{title:"Edit boot.ini to use the custom kernel",text:"Add /KERNEL=Mykrnl.exe to the Windows XP boot entry so XP loads the modified kernel file instead of the default one."},{title:"Restart and test",text:"Reboot the system and confirm whether the custom boot screen appears correctly."},{title:"Restore the default boot screen if needed",text:"To go back to the original splash screen, remove /KERNEL=Mykrnl.exe from boot.ini."}],u=["Do not edit the original ntoskrnl.exe directly.","Always keep a way to restore boot.ini.","Keep image size and palette exactly compatible.","Test carefully because broken boot settings can stop XP from loading properly.","This is mainly a legacy customization technique for old Windows XP systems."],b=`[boot loader]
timeout=30
default=multi(0)disk(0)rdisk(0)partition(2)\\WINDOWS

[operating systems]
multi(0)disk(0)rdisk(0)partition(2)\\WINDOWS="Microsoft Windows XP Professional" /fastdetect /KERNEL=Mykrnl.exe
C:\\="Microsoft Windows 98 SE"`,y=()=>e.jsxs(r.Wrapper,{className:"topicWrapper",children:[e.jsxs(r.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(a,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(s,{}),"Original topic: July 18, 2012"]}),e.jsx(x,{})]}),e.jsx("h1",{children:"Change Windows XP Boot Screen"}),e.jsx("p",{className:"lead",children:"This archive note explains an old Windows XP customization method where the boot splash screen is changed by editing a copied kernel file and pointing the XP boot entry to that modified version."})]}),e.jsxs(r.WarningCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap warning",children:e.jsx(n,{})}),e.jsx("h2",{children:"Important note before trying this"})]}),e.jsx("p",{children:"Windows XP is an old and unsupported operating system. This method is a legacy customization trick and should be treated carefully. Editing boot-related files incorrectly can cause startup problems."}),e.jsx("ul",{children:u.map(t=>e.jsx("li",{children:t},t))})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"What you need"})]}),e.jsx("ul",{children:m.map(t=>e.jsx("li",{children:t},t))})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"What this method does"})]}),e.jsx("p",{children:"Instead of changing the original XP kernel file directly, this method creates a duplicate kernel, replaces the boot bitmap inside it, and tells boot.ini to use the copied kernel during startup."}),e.jsx("p",{children:"That is a safer approach than directly patching the main system kernel, though still not risk-free."})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(c,{})}),e.jsx("h2",{children:"Refactored step-by-step method"})]}),e.jsx("div",{className:"stepsStack",children:g.map((t,i)=>e.jsxs("div",{className:"stepCard",children:[e.jsx("div",{className:"stepNumber",children:i+1}),e.jsxs("div",{className:"stepContent",children:[e.jsx("h3",{children:t.title}),e.jsx("p",{children:t.text})]})]},t.title))})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(p,{})}),e.jsx("h2",{children:"Why the bitmap looks black at first"})]}),e.jsx("p",{children:"The original tutorial notes that the exported boot bitmap may appear completely black in Photoshop at first. This usually happens because the boot image uses a restricted indexed color palette rather than a normal modern color setup."}),e.jsx("p",{children:"Loading the correct 16-color palette makes the image visible again. That is why the palette must be preserved when editing or replacing the splash screen."})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(h,{})}),e.jsx("h2",{children:"boot.ini example"})]}),e.jsx("p",{children:"The old tutorial used a dual-boot example and added a custom kernel argument to the Windows XP entry."}),e.jsx("pre",{children:b}),e.jsx("p",{children:"To restore the original XP splash screen, remove the custom kernel argument from the XP boot entry."})]}),e.jsxs(r.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"This is a classic Windows XP-era customization method: duplicate the kernel file, replace the boot bitmap inside the duplicate, and update boot.ini to load the modified copy during startup. It is a clever old-school trick, but one that should be handled carefully because it touches boot configuration."}),e.jsx("p",{className:"creditLine",children:"Based on the original shared tutorial credited in the old archive post."})]})]});export{y as default};
