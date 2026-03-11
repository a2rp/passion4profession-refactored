import{c as i,j as e,F as c,a as d,C as o,ah as t,f as a,s as l,l as n,aD as p,aH as x,G as h}from"./index-D1C0sqWO.js";import{S as u}from"./index-DpzaY4xy.js";const r={Wrapper:i.div`
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

        .creditBox {
            margin-top: 18px;
            padding: 16px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
        }

        .creditBox strong {
            display: block;
            margin-bottom: 6px;
        }

        .creditBox p {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.75;
        }
    `,WarningCard:i.section`
        border: 1px solid
            color-mix(in srgb, var(--color-border-light) 85%, transparent);
        border-radius: var(--radius-lg);
        background: linear-gradient(
            180deg,
            color-mix(in srgb, var(--color-surface-2) 100%, transparent),
            color-mix(in srgb, var(--color-surface-3) 100%, transparent)
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
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
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

        li {
            position: relative;
            padding-left: 18px;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
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
            margin: 0 0 10px;
        }

        p {
            color: var(--color-text-secondary);
            font-size: 15px;
            line-height: 1.85;
        }

        p + p {
            margin-top: 12px;
        }

        ul,
        ol {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 12px;
            padding-left: 0;
        }

        li {
            position: relative;
            padding-left: 18px;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        ol li::before,
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

        .subSection + .subSection {
            margin-top: 18px;
            padding-top: 18px;
            border-top: 1px solid var(--color-border);
        }

        .resourceGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
            margin-top: 8px;

            @media (max-width: 900px) {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            @media (max-width: 640px) {
                grid-template-columns: 1fr;
            }
        }

        .resourceCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .resourceCard h3 {
            margin-bottom: 8px;
            font-size: 16px;
        }

        .resourceCard p {
            font-size: 14px;
            line-height: 1.7;
        }

        .commandGrid {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin: 14px 0 18px;
        }

        .commandChip {
            min-height: 34px;
            padding: 0 12px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-primary);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 13px;
            font-weight: 800;
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
            margin-top: 12px;
        }

        li {
            position: relative;
            padding-left: 18px;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
        }
    `,CodeBlock:i.pre`
        margin: 12px 0;
        background: var(--color-code-bg);
        color: var(--color-code-text);
        border: 1px solid var(--color-code-border);
        border-radius: var(--radius-md);
        padding: 16px;
        overflow-x: auto;
        line-height: 1.7;
        font-size: 13px;
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
    `},g=[{name:"AVI",desc:"Animated AVI resources."},{name:"Cursor",desc:"Cursor resources."},{name:"Bitmap",desc:"Bitmap image resources."},{name:"Icon",desc:"Icon resources."},{name:"Menu",desc:"Menu definitions."},{name:"Dialog",desc:"Dialog box layouts and controls."},{name:"String Table",desc:"Text strings used by the file."},{name:"Accelerators",desc:"Keyboard shortcut definitions."},{name:"Version Info",desc:"Version and metadata information."}],m=["Select the resource you want to replace, for example Bitmap -> 131 -> 1033.","Open the Action menu and choose the relevant replace option.","Browse for the new file and open it.","Confirm the resource details and click Replace."],f=["Open Action -> Replace Other Resource.","Choose the new file from disk.","Enter Resource Type, Resource Name, and Resource Language.","Use the same resource name and language as the existing resource you want to replace.","Click Replace."],j=["Open the target dialog resource, for example Dialog -> 1020 -> 1033.","Right-click in the dialog editor and choose Insert Control.","Choose the required control such as BITMAP, ICON, BUTTON, or SysAnimate32.","Set the Caption field to the Resource Name you added earlier.","For AVI controls, prefix the resource name with #, for example #144.","Click OK and then compile the script.","Drag the control or use arrow keys to adjust position."],b=["-add","-addskip","-addoverwrite","-modify","-extract","-delete"],w=()=>e.jsxs(r.Wrapper,{className:"topicWrapper",children:[e.jsxs(r.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(c,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(d,{}),"Original topic: July 18, 2012"]}),e.jsx(u,{})]}),e.jsx("h1",{children:"All About Resource Hacker in a Brief Tutorial"}),e.jsx("p",{className:"lead",children:"Resource Hacker is a Windows resource editing tool that can inspect and modify resources inside files such as EXE, DLL, and CPL. This refactored version turns the old post into a cleaner guide for understanding what the tool does, how its resource system is organized, and how basic editing workflows work."}),e.jsxs("div",{className:"creditBox",children:[e.jsx("strong",{children:"Credit note"}),e.jsx("p",{children:"The original post credited Vishal from AskVG. That acknowledgment is preserved here."})]})]}),e.jsxs(r.WarningCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Important warning"})]}),e.jsx("p",{children:"Editing system files is not a toy. Replacing resources in executables, DLLs, or Windows components can break apps, corrupt UI elements, or even damage system stability if done carelessly."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Always keep a backup of the original file."}),e.jsx("li",{children:"Never edit critical system files blindly."}),e.jsx("li",{children:"Test changes on copies first, not live system files."}),e.jsx("li",{children:"Use this knowledge carefully and responsibly."})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"What Resource Hacker is"})]}),e.jsx("p",{children:"Resource Hacker is a utility used to inspect and edit embedded resources inside Windows program files. These resources can include icons, bitmaps, menus, dialogs, strings, version information, cursors, and more."}),e.jsx("p",{children:"In practical terms, it gives you a way to look inside a Windows file and modify the non-code pieces that affect appearance, labels, visual assets, and parts of user interface structure."})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(a,{})}),e.jsx("h2",{children:"Common resource categories"})]}),e.jsx("div",{className:"resourceGrid",children:g.map(s=>e.jsxs("article",{className:"resourceCard",children:[e.jsx("h3",{children:s.name}),e.jsx("p",{children:s.desc})]},s.name))})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"How resources are identified"})]}),e.jsx("p",{children:"Each resource generally has three key attributes:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Resource Type"}),e.jsx("li",{children:"Resource Name"}),e.jsx("li",{children:"Resource Language"})]}),e.jsx("p",{children:"These values matter when viewing, replacing, adding, or scripting operations. If you replace the wrong type, wrong name, or wrong language, your edit may fail or go to the wrong location."})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Basic workflow idea"})]}),e.jsx("p",{children:"Open a file, browse the resource tree in the left pane, select the resource you want to inspect, edit or replace it, then compile or save the result."}),e.jsx("p",{children:"In other words, Resource Hacker is less like a photo editor and more like a structured internal file editor for Windows resources."})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(p,{})}),e.jsx("h2",{children:"Viewing and changing existing resources"})]}),e.jsxs("div",{className:"subSection",children:[e.jsx("h3",{children:"Icons, cursors, and bitmaps"}),e.jsx("ol",{children:m.map(s=>e.jsx("li",{children:s},s))})]}),e.jsxs("div",{className:"subSection",children:[e.jsx("h3",{children:"Other resource types such as AVI"}),e.jsx("ol",{children:f.map(s=>e.jsx("li",{children:s},s))})]}),e.jsxs("div",{className:"subSection",children:[e.jsx("h3",{children:"Menus, strings, and dialogs"}),e.jsxs("p",{children:["For text-based resources such as String Table, Menu, or Dialog, you can edit the resource script directly and then click ",e.jsx("strong",{children:"Compile Script"}),"."]}),e.jsx("p",{children:"If the edited script contains mistakes, Resource Hacker usually reports an error so you can fix it before saving."})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(x,{})}),e.jsx("h2",{children:"Adding new resources"})]}),e.jsxs("div",{className:"subSection",children:[e.jsx("h3",{children:"Adding bitmaps, icons, cursors, or AVI resources"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Open Action -> Add a new Resource."}),e.jsx("li",{children:"Choose the new file from disk."}),e.jsx("li",{children:"Set Resource Type, Resource Name, and Language."}),e.jsx("li",{children:"Make sure the Resource Name does not clash with an existing one."}),e.jsx("li",{children:"Click Add Resource."})]})]}),e.jsxs("div",{className:"subSection",children:[e.jsx("h3",{children:"Adding new menu items"}),e.jsx("p",{children:"The original tutorial showed that menu entries can be inserted by editing menu script code directly."}),e.jsx(r.CodeBlock,{children:'MENUITEM "Custom_String", 12345, MFT_STRING, MFS_GRAYED | MFS_DEFAULT'}),e.jsx("p",{children:"In practice, the shortest form can often be enough:"}),e.jsx(r.CodeBlock,{children:'MENUITEM "Custom_String", 12345'}),e.jsx("p",{children:"Resource Hacker can fill in additional default values automatically."})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(a,{})}),e.jsx("h2",{children:"Inserting added resources into dialog boxes"})]}),e.jsx("ol",{children:j.map(s=>e.jsx("li",{children:s},s))}),e.jsx("p",{children:"This is how newly added visual resources can be surfaced in dialog windows such as run dialogs, progress boxes, or other custom UI layouts."})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(h,{})}),e.jsx("h2",{children:"Using scripts and command-line automation"})]}),e.jsx("p",{children:"Resource Hacker also supports command-line usage. This makes it useful for repeated operations where manual clicking would be annoying enough to offend the gods of productivity."}),e.jsx("div",{className:"commandGrid",children:b.map(s=>e.jsx("div",{className:"commandChip",children:s},s))}),e.jsx("h3",{children:"Example single command"}),e.jsx(r.CodeBlock,{children:"ResHacker.exe -addoverwrite explorer.exe, explorer1.exe, MyImage.bmp, bitmap, 143,"}),e.jsx("h3",{children:"Example script structure"}),e.jsx(r.CodeBlock,{children:`[FILENAMES]
Exe=
SaveAs=
Log=

[COMMANDS]
-addoverwrite ResourceAddress, ResourceType, ResourceName`}),e.jsx("p",{children:"In this script format:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Exe"})," is the source file."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"SaveAs"})," is the output file."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Log"})," stores operation details."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"COMMANDS"})," lists the actions to perform."]})]})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"What this tool is great for"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Inspecting embedded resources in Windows files"}),e.jsx("li",{children:"Replacing icons, cursors, or bitmaps"}),e.jsx("li",{children:"Editing string tables and menus"}),e.jsx("li",{children:"Experimenting with dialog resource layouts"}),e.jsx("li",{children:"Automating repeated edits with scripts"})]})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Where people usually get into trouble"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Editing the wrong file without a backup"}),e.jsx("li",{children:"Using duplicate resource names"}),e.jsx("li",{children:"Wrong language code such as 1033 mismatch"}),e.jsx("li",{children:"Broken dialog scripts after manual edits"}),e.jsx("li",{children:"Trying to save protected system files directly"})]})]})]}),e.jsxs(r.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"Resource Hacker is a compact but powerful Windows resource editor. It is useful for inspecting and modifying icons, bitmaps, menus, dialogs, strings, and other embedded resources inside program files. Used carefully, it is a very handy customization and exploration tool. Used carelessly, it can turn system files into decorative rubble."})]})]});export{w as default};
