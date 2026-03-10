import{c as o,j as e,I as s,a,l,g as h,J as p,K as i,w as c,L as x,q as m}from"./index-BxgJM-x-.js";import{S as u}from"./index-D6FK_vhk.js";const t={Wrapper:o.div`
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
            align-items: flex-start;
            gap: 10px;
            margin-bottom: 14px;
        }

        .sectionHeadText {
            min-width: 0;
        }

        .sectionSubText {
            margin-top: 6px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.75;
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
    `,ShortcutTable:o.div`
        width: 100%;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        overflow: hidden;
        background: color-mix(in srgb, var(--color-surface-2) 94%, transparent);

        .tableHead,
        .tableRow {
            display: grid;
            grid-template-columns: minmax(180px, 260px) minmax(0, 1fr);
        }

        .tableHead {
            background: var(--color-surface-3);
            border-bottom: 1px solid var(--color-border);
        }

        .tableHead > div {
            padding: 14px 16px;
            font-size: 13px;
            font-weight: 800;
            color: var(--color-text-primary);
            letter-spacing: 0.02em;
        }

        .tableRow + .tableRow {
            border-top: 1px solid var(--color-border);
        }

        .shortcutKey,
        .shortcutAction {
            padding: 14px 16px;
        }

        .shortcutKey {
            border-right: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-3) 86%,
                transparent
            );
        }

        .shortcutKey span {
            display: inline-flex;
            align-items: center;
            min-height: 32px;
            padding: 0 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-primary);
            font-size: 13px;
            font-weight: 800;
            line-height: 1.2;
        }

        .shortcutAction {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.7;
        }

        @media (max-width: 760px) {
            .tableHead {
                display: none;
            }

            .tableRow {
                grid-template-columns: 1fr;
            }

            .shortcutKey {
                border-right: 0;
                border-bottom: 1px solid var(--color-border);
            }
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
    `},g=[["Ctrl + C","Copy the selected item"],["Ctrl + X","Cut the selected item"],["Ctrl + V","Paste the copied or cut item"],["Ctrl + Z","Undo the previous action"],["Delete","Delete the selected item"],["Shift + Delete","Delete the selected item permanently without sending it to the Recycle Bin"],["Ctrl + A","Select all items or all text"],["F2","Rename the selected item"],["F3","Search for a file or folder"],["Alt + Enter","Open the properties of the selected item"],["Alt + F4","Close the active window or quit the active program"],["Alt + Tab","Switch between open applications"],["Alt + Esc","Cycle through open items in the order they were opened"],["F5","Refresh or update the active window"],["Esc","Cancel the current task"]],f=[["Ctrl + Right Arrow","Move the cursor to the beginning of the next word"],["Ctrl + Left Arrow","Move the cursor to the beginning of the previous word"],["Ctrl + Down Arrow","Move the cursor to the beginning of the next paragraph"],["Ctrl + Up Arrow","Move the cursor to the beginning of the previous paragraph"],["Ctrl + Shift + Arrow Keys","Select a block of text word by word or paragraph by paragraph"],["Shift + Arrow Keys","Select text or more than one item"]],w=[["Tab","Move forward through options"],["Shift + Tab","Move backward through options"],["Ctrl + Tab","Move forward through tabs"],["Ctrl + Shift + Tab","Move backward through tabs"],["Enter","Perform the command for the active option or button"],["Spacebar","Select or clear a check box"],["Arrow Keys","Select an option button in a group"],["F1","Open Help"],["F4","Display items in the active list"],["Backspace","Open the parent folder in Open or Save As dialogs"]],b=[["Windows","Open or hide the Start menu"],["Windows + D","Show the desktop"],["Windows + M","Minimize all windows"],["Windows + Shift + M","Restore minimized windows"],["Windows + E","Open File Explorer or My Computer"],["Windows + F","Search for a file or folder"],["Ctrl + Windows + F","Search for computers"],["Windows + F1","Open Windows Help"],["Windows + L","Lock the computer"],["Windows + R","Open the Run dialog box"],["Windows + U","Open Utility Manager or accessibility tools"],["Windows + Break","Open System Properties"]],v=[["End","Go to the bottom of the active window"],["Home","Go to the top of the active window"],["Num Lock + *","Show all subfolders under the selected folder"],["Num Lock + +","Show the contents of the selected folder"],["Num Lock + -","Collapse the selected folder"],["Left Arrow","Collapse the current folder or select the parent folder"],["Right Arrow","Expand the current folder or select the first subfolder"],["Backspace","Go up one folder level"],["Alt + Spacebar","Open the system menu for the active window"]],y=[["Right Arrow","Move right or to the beginning of the next line"],["Left Arrow","Move left or to the end of the previous line"],["Up Arrow","Move up one row"],["Down Arrow","Move down one row"],["Page Up","Move up one screen"],["Page Down","Move down one screen"],["Home","Move to the beginning of the line"],["End","Move to the end of the line"],["Ctrl + Home","Move to the first character"],["Ctrl + End","Move to the last character"],["Spacebar","Toggle between enlarged and normal mode for a selected character"]],j=[["Ctrl + O","Open a saved console"],["Ctrl + N","Open a new console"],["Ctrl + S","Save the current console"],["Ctrl + M","Add or remove a console item"],["Ctrl + W","Open a new window"],["F5","Refresh all console windows"],["Alt + Spacebar","Open the MMC window menu"],["Alt + F4","Close the console"],["Alt + A","Open the Action menu"],["Alt + V","Open the View menu"],["Alt + F","Open the File menu"],["Alt + O","Open the Favorites menu"]],C=[["Ctrl + P","Print the current page or active pane"],["Alt + -","Open the window menu for the active console window"],["Shift + F10","Open the action shortcut menu for the selected item"],["F1","Open Help for the selected item"],["F5","Refresh all console windows"],["Ctrl + F10","Maximize the active console window"],["Ctrl + F5","Restore the active console window"],["Alt + Enter","Open the Properties dialog for the selected item"],["F2","Rename the selected item"],["Ctrl + F4","Close the active console window"]],S=[["Ctrl + Alt + End","Open the Windows Security dialog on the remote system"],["Alt + Page Up","Switch between programs from left to right"],["Alt + Page Down","Switch between programs from right to left"],["Alt + Insert","Cycle through programs in recent-use order"],["Alt + Home","Open the Start menu"],["Ctrl + Alt + Break","Toggle between full-screen mode and window mode"],["Alt + Delete","Open the Windows menu"],["Ctrl + Alt + -","Capture a snapshot of the active remote window"],["Ctrl + Alt + +","Capture a snapshot of the full remote client window"]],k=[["Ctrl + B","Open the Organize Favorites dialog"],["Ctrl + E","Open the Search bar"],["Ctrl + F","Open Find"],["Ctrl + H","Open the History bar"],["Ctrl + I","Open the Favorites bar"],["Ctrl + L","Open the address or open dialog"],["Ctrl + N","Open another browser window with the same address"],["Ctrl + O","Open the Open dialog"],["Ctrl + P","Open the Print dialog"],["Ctrl + R","Refresh the current web page"]],A=[["Right Shift for 8 seconds","Turn Filter Keys on or off"],["Left Alt + Left Shift + Print Screen","Turn High Contrast on or off"],["Left Alt + Left Shift + Num Lock","Turn Mouse Keys on or off"],["Shift 5 times","Turn Sticky Keys on or off"],["Num Lock for 5 seconds","Turn Toggle Keys on or off"],["Windows + U","Open Utility Manager"]],M=[{icon:e.jsx(p,{}),title:"Basic Windows shortcuts",description:"Everyday shortcuts used for copying, deleting, selecting, switching windows, refreshing, and general work.",items:g},{icon:e.jsx(s,{}),title:"Text navigation and selection",description:"Useful when working inside editors, documents, input fields, and text-heavy applications.",items:f},{icon:e.jsx(i,{}),title:"Dialog box shortcuts",description:"These help when moving through tabs, buttons, check boxes, and common dialog windows.",items:w},{icon:e.jsx(c,{}),title:"Windows logo shortcuts",description:"Fast shortcuts centered around the Windows key for system access, desktop control, and navigation.",items:b},{icon:e.jsx(x,{}),title:"Windows Explorer shortcuts",description:"Helpful when navigating folders and expanding or collapsing directory trees.",items:v},{icon:e.jsx(s,{}),title:"Character Map shortcuts",description:"Navigation shortcuts used inside the Character Map utility after a character is selected.",items:y},{icon:e.jsx(i,{}),title:"MMC main window shortcuts",description:"Useful inside Microsoft Management Console for opening, saving, refreshing, and navigating menus.",items:j},{icon:e.jsx(i,{}),title:"MMC console window shortcuts",description:"Shortcuts for working inside active MMC console panes and windows.",items:C},{icon:e.jsx(c,{}),title:"Remote Desktop shortcuts",description:"Useful when working inside Remote Desktop sessions where local and remote key handling differ.",items:S},{icon:e.jsx(m,{}),title:"Internet Explorer shortcuts",description:"Classic browser shortcuts for search, favorites, history, printing, and refresh actions.",items:k},{icon:e.jsx(i,{}),title:"Accessibility shortcuts",description:"Keyboard combinations that quickly enable or disable accessibility features in Windows.",items:A}],W=()=>e.jsxs(t.Wrapper,{className:"topicWrapper",children:[e.jsxs(t.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(s,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(a,{}),"Original topic: December 12, 2012"]}),e.jsx(u,{})]}),e.jsx("h1",{children:"Keyboard Shortcuts"}),e.jsx("p",{className:"lead",children:"Keyboard shortcuts are combinations of keys that perform actions quickly without using the mouse. They save time, reduce repetitive movement, and make everyday computer work much faster once they become muscle memory."})]}),e.jsxs(t.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"What are keyboard shortcuts?"})]}),e.jsx("p",{children:"A keyboard shortcut is a key combination that triggers a command directly. Instead of opening menus and clicking buttons, you press a few keys together and the action happens immediately."}),e.jsxs("p",{children:["For example, ",e.jsx("strong",{children:"Ctrl + C"})," copies,"," ",e.jsx("strong",{children:"Ctrl + V"})," pastes, and"," ",e.jsx("strong",{children:"Alt + Tab"})," switches between open windows. These are small actions, but repeated hundreds of times, they save a huge amount of effort."]})]}),e.jsxs(t.Grid,{children:[e.jsxs(t.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"Why they matter"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"They make common tasks faster"}),e.jsx("li",{children:"They reduce reliance on the mouse"}),e.jsx("li",{children:"They improve workflow and focus"}),e.jsx("li",{children:"They are especially useful for power users"}),e.jsx("li",{children:"Many shortcuts work across multiple applications"})]})]}),e.jsxs(t.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(a,{})}),e.jsx("h2",{children:"How to learn them"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Start with copy, paste, undo, and select all"}),e.jsx("li",{children:"Learn window switching and desktop shortcuts next"}),e.jsx("li",{children:"Practice file explorer shortcuts during daily work"}),e.jsx("li",{children:"Use a few shortcuts repeatedly until they become automatic"}),e.jsx("li",{children:"Do not try to memorize everything at once like a keyboard wizard exam"})]})]})]}),M.map(r=>e.jsxs(t.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:r.icon}),e.jsxs("div",{className:"sectionHeadText",children:[e.jsx("h2",{children:r.title}),e.jsx("p",{className:"sectionSubText",children:r.description})]})]}),e.jsxs(t.ShortcutTable,{children:[e.jsxs("div",{className:"tableHead",children:[e.jsx("div",{children:"Shortcut"}),e.jsx("div",{children:"Action"})]}),r.items.map(([n,d])=>e.jsxs("div",{className:"tableRow",children:[e.jsx("div",{className:"shortcutKey",children:e.jsx("span",{children:n})}),e.jsx("div",{className:"shortcutAction",children:d})]},`${r.title}-${n}`))]})]},r.title)),e.jsxs(t.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(h,{})}),e.jsx("h2",{children:"Important note"})]}),e.jsx("p",{children:"Some shortcuts in old Windows references belong to older versions of the operating system or older Microsoft tools such as classic Internet Explorer and old MMC workflows. The idea still matters, but exact behavior can differ in modern Windows versions and modern browsers."}),e.jsx("p",{children:"So treat this page as a useful reference and foundation, then verify the exact behavior on your current system."})]}),e.jsxs(t.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"Keyboard shortcuts are one of the easiest ways to work faster on a computer. Start with the most common ones, use them daily, and slowly build up your speed. A few shortcuts learned well are more useful than a giant list admired from a distance."})]})]});export{W as default};
