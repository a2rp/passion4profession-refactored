import{c as i,Q as l,j as e,d as g,a as f,f as x,ah as b,a0 as y,A as v,w,n as k,I as A,m as j,G as C}from"./index-D1C0sqWO.js";import{S as M}from"./index-DpzaY4xy.js";const a={Wrapper:i.div`
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
            font-size: clamp(30px, 4vw, 52px);
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
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 20px;

            @media (max-width: 760px) {
                grid-template-columns: 1fr;
            }
        }

        .heroMetaCard {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            padding: 16px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
        }

        .heroMetaIcon {
            width: 40px;
            height: 40px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            background: var(--color-surface-3);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
        }

        .heroMetaIcon svg {
            width: 18px;
            height: 18px;
        }

        .heroMetaCard strong {
            display: block;
            margin-bottom: 4px;
            font-size: 14px;
            line-height: 1.3;
        }

        .heroMetaCard span:last-child {
            display: block;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `,MeasurementsCard:i.section`
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

        .iconWrap svg {
            width: 18px;
            height: 18px;
        }

        h2 {
            font-size: 24px;
            line-height: 1.12;
            margin-bottom: 6px;
        }

        p {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.7;
        }

        .measurementList {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px 18px;

            @media (max-width: 760px) {
                grid-template-columns: 1fr;
            }
        }

        .measurementList li {
            position: relative;
            padding-left: 18px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.75;
        }

        .measurementList li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
        }
    `,AlphabetCard:i.section`
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

        .iconWrap svg {
            width: 18px;
            height: 18px;
        }

        h2 {
            font-size: 24px;
            line-height: 1.12;
            margin-bottom: 6px;
        }

        p {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.7;
        }

        .alphabetRow {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .alphaChip {
            min-width: 38px;
            height: 38px;
            padding: 0 12px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: var(--color-surface-3);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
            font-size: 13px;
            font-weight: 800;
            transition:
                background var(--transition-fast),
                border-color var(--transition-fast),
                color var(--transition-fast),
                transform var(--transition-fast),
                box-shadow var(--transition-fast);
        }

        .alphaChip:hover {
            background: var(--color-surface);
            border-color: var(--color-border-light);
            transform: translateY(-1px);
        }

        .alphaChip.active {
            background: var(--color-text-primary);
            color: var(--color-text-inverse);
            border-color: var(--color-text-primary);
            box-shadow: 0 10px 24px var(--color-shadow);
        }
    `,GroupCard:i.section`
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
            margin-bottom: 18px;
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
            margin-bottom: 6px;
        }

        .sectionHead p {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.7;
        }

        .glossaryGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;

            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }
        }

        .termCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            padding: 16px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            transition:
                transform var(--transition-fast),
                border-color var(--transition-fast),
                background var(--transition-fast),
                box-shadow var(--transition-fast);
            scroll-margin-top: 96px;
        }

        .termCard:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-surface-3) 92%,
                transparent
            );
        }

        .termCard.termPulse {
            animation: termPulse 900ms ease;
        }

        .termCard h3 {
            font-size: 16px;
            line-height: 1.25;
            margin-bottom: 8px;
            color: var(--color-text-primary);
            text-transform: none;
        }

        .termCard p {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.75;
        }

        @keyframes termPulse {
            0% {
                box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.14);
            }
            50% {
                box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.08);
            }
            100% {
                box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
            }
        }

        html[data-theme="light"] & {
            .termCard.termPulse {
                animation: termPulseLight 900ms ease;
            }

            @keyframes termPulseLight {
                0% {
                    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.12);
                }
                50% {
                    box-shadow: 0 0 0 8px rgba(0, 0, 0, 0.07);
                }
                100% {
                    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
                }
            }
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
    `},T=["A bit = one binary digit, either 1 or 0","The word 'bit' comes from 'binary digit'","8 bits = 1 byte","1024 bytes = 1 kilobyte","K = kilobyte","Kb = kilobit","MB = megabyte","Mb = megabit","MB/s = megabytes per second","Mb/s = megabits per second","bps = bits per second","Example: 155 Mb/s = 19.38 MB/s"],n=[{title:"System basics",icon:e.jsx(w,{}),items:[{term:"access time",description:"The performance measure of a hard drive or other storage device that tells how long it takes to locate a file."},{term:"active program or window",description:"The application or window currently at the front, also called the foreground window."},{term:"alert or alert box",description:"A message shown on screen, usually to tell you that something went wrong or needs attention."},{term:"application",description:"A program in which you do your work."},{term:"background",description:"Part of multitasking. A program can continue running in the background while another is used in the foreground."},{term:"backup",description:"A copy of a file or disk created for safety, recovery, or archiving."},{term:"boot",description:"To start up a computer."},{term:"bug",description:"A programming error that causes a program to behave in an unexpected way."},{term:"CPU",description:"Central Processing Unit. The main processing chip, often called the brain of the computer."},{term:"crash",description:"A system malfunction in which the computer stops working and must be restarted."},{term:"data",description:"Information processed by a computer."},{term:"database",description:"An electronic collection of information that can usually be searched, sorted, and managed."},{term:"desktop",description:"Can refer to the Finder or the visible backdrop of the screen where windows and icons appear."},{term:"document",description:"A file you create, as opposed to the application that created it."},{term:"download",description:"To transfer data from another computer to your computer. The receiver downloads and the sender uploads."},{term:"driver",description:"A file that tells the computer how to communicate with attached hardware such as a printer."},{term:"extension",description:"A startup program that runs when the Mac starts and enhances its function."},{term:"file",description:"A general word for stored computer data, including applications, documents, control panels, and more."},{term:"finder",description:"The core file management environment on classic Mac systems. It handles tasks like copying, renaming, and deleting files."},{term:"folder",description:"An electronic subdirectory that contains files."},{term:"freeze",description:"A system error that causes the cursor or system to stop responding."},{term:"hard drive",description:"A large-capacity storage device made of multiple disks inside a rigid enclosure."},{term:"initialize",description:"To format a disk for use by the computer. This creates a new directory and prepares tracks for storing data."},{term:"installer",description:"Software used to install a program on a hard drive."},{term:"launch",description:"To start an application."},{term:"memory",description:"The temporary storage area where data is kept while being used or changed. This usually refers to RAM."},{term:"multi tasking",description:"Running more than one application in memory at the same time."},{term:"native mode",description:"Using the computer's original operating system or native execution mode."},{term:"operating system",description:"The system software that controls the computer and provides the base environment for programs to run."},{term:"peripheral",description:"An add-on component connected to the computer, such as a printer, scanner, or external drive."},{term:"RAM",description:"Random-Access Memory. Temporary working memory used while the computer is running."},{term:"ROM",description:"Read Only Memory. Memory that can be read from but normally not written to."},{term:"save",description:"To write a file onto a disk or storage device."},{term:"save as",description:"A file menu command used to save a file under a new name or in a new location."},{term:"server",description:"A central computer dedicated to sending and receiving data for other computers on a network."},{term:"shut down",description:"The command used to turn off the computer safely."},{term:"software",description:"Files and programs that contain instructions for a computer."},{term:"start up disk",description:"The disk that contains the system software used to start the computer."},{term:"System file",description:"A file in the System folder that allows the Mac to start and run."},{term:"System folder",description:"The important folder that contains at least the System file and the Finder."},{term:"virtual memory",description:"Using part of the hard drive as if it were RAM."}]},{title:"Storage and file handling",icon:e.jsx(k,{}),items:[{term:"alias",description:"An icon that points to a file, folder, or application in classic Mac systems."},{term:"bit",description:"The smallest piece of information used by the computer. It comes from 'binary digit' and is either 1 or 0."},{term:"byte",description:"A unit of information made of 8 bits."},{term:"cartridge drive",description:"A storage device in which the storage medium is a removable cartridge."},{term:"CD-ROM",description:"Compact Disc Read-Only Memory."},{term:"Clipboard",description:"A temporary portion of memory where copied or cut data is stored before being pasted."},{term:"compression",description:"A method for reducing file size by removing redundancy or encoding data more efficiently. Examples include JPEG, MPEG, and LZW."},{term:"defragment or optimize",description:"To combine file fragments into contiguous blocks on storage so data is stored more efficiently."},{term:"desktop file",description:"An invisible file in which the Finder stores information about files and icons."},{term:"digitize",description:"To convert analog or continuous data into digital data that the computer can use."},{term:"disk",description:"A spinning magnetic or optical storage medium on which data can be stored."},{term:"disk drive",description:"The hardware that reads data from disks and writes data to disks."},{term:"disk window",description:"A window that displays the contents or directory of a disk."},{term:"floppy",description:"A 3.5-inch rigid disk used for storage. The name came from older larger floppy disks that were physically flexible."},{term:"fragmentation",description:"The breaking up of a file into many separate locations in memory or on a disk."},{term:"gig",description:"A casual way to refer to a gigabyte, which equals 1024 megabytes."},{term:"head crash",description:"A hard disk failure caused by the read or write heads touching the spinning disk surface."},{term:"high density disk",description:"A 1.4 MB floppy disk."},{term:"K",description:"Short for kilobyte."},{term:"kilobyte",description:"1024 bytes."},{term:"MB",description:"Short for megabyte."},{term:"megabyte",description:"1024 kilobytes."},{term:"optical disk",description:"A high-capacity storage medium read by laser light."},{term:"partition",description:"A logical subdivision of a hard drive that is treated like a separate drive."},{term:"paste",description:"To insert text or other material from the clipboard or copy buffer."},{term:"root directory",description:"The main top-level directory of a drive."},{term:"WORM",description:"Write Once Read Many. A type of optical disk that can be written only once, similar in concept to a CD-ROM for final storage."}]},{title:"Interface and interaction",icon:e.jsx(A,{}),items:[{term:"apple menu",description:"The menu on the left side of the classic Mac screen header. In older systems it contained desk accessories and later additional items."},{term:"application menu",description:"The menu on the right side of the screen header that lists running applications."},{term:"Chooser",description:"A desk accessory used to select a printer, other external device, or log onto a network."},{term:"command",description:"The act of giving an instruction to the Mac through a menu choice or keystroke."},{term:"command key",description:"A modifier key used with other keys to activate functions on the Mac."},{term:"control key",description:"A rarely used modifier key on classic Mac systems."},{term:"control panel",description:"A program used to change settings or the way the Mac looks and behaves."},{term:"cursor",description:"The pointer, usually arrow- or cross-shaped, controlled by the mouse."},{term:"dialog box",description:"A message box that appears when the system needs additional information before completing a command."},{term:"drag",description:"To move the mouse while holding down its button."},{term:"drag and drop",description:"A feature that lets you drag one item, such as a document icon, onto another, such as an application icon, to open or process it."},{term:"get info",description:"A Finder command that opens an information window for a selected file icon."},{term:"highlight",description:"To select an icon or text by clicking or dragging over it."},{term:"icon",description:"A graphic symbol that represents an application, file, folder, or command."},{term:"insertion point",description:"The blinking marker in a document that shows where the next typed character will appear."},{term:"keyboard shortcut",description:"A key combination that performs an action otherwise available in a menu."},{term:"landscape",description:"A print orientation in which the page is printed sideways relative to portrait mode."},{term:"menu",description:"A list of program commands grouped by topic."},{term:"menu bar",description:"The horizontal bar across the top of the Mac screen that lists menus."},{term:"palette",description:"A small floating window that contains tools used in an application."},{term:"point",description:"A printing measurement. One point is 1/72 of an inch. Twelve points equal one pica."},{term:"pop-up menu",description:"Any menu that does not live at the top menu bar and instead appears near the place you interact with."},{term:"resize box",description:"The small square at the lower-right corner of a window used to change window size by dragging."},{term:"scroll",description:"To move the contents of a window so hidden items come into view."},{term:"scroll bar",description:"A bar at the edge of a window containing a scroll box used for navigation."},{term:"scroll box",description:"The movable box inside a scroll bar used to navigate within a window."},{term:"title bar",description:"The horizontal bar at the top of a window showing the name of the file or folder."},{term:"zoom box",description:"A small square in the upper-right corner of a window that expands the window to fill the screen."}]},{title:"Hardware, buses, and connections",icon:e.jsx(j,{}),items:[{term:"bus",description:"An electronic pathway used to move data between computer components."},{term:"card",description:"A printed circuit board that adds a feature or capability to a computer."},{term:"clock rate or MHz",description:"The instruction processing speed of a computer, measured in millions of cycles per second."},{term:"daisy chaining",description:"Connecting multiple devices one after another in a series."},{term:"Ethernet",description:"A networking protocol used for fast communication and file transfer across a network."},{term:"expansion slot",description:"A connector inside the computer where an additional printed circuit board can be plugged in."},{term:"fibre channel",description:"A technology used in high-speed data storage and networking topologies."},{term:"footprint",description:"The amount of desk or table space occupied by a piece of equipment."},{term:"interrupt button",description:"A button used mainly by programmers to enter debugging mode, usually near the reset button."},{term:"NuBus",description:"An older Mac expansion bus architecture used for intelligent, self-configuring boards. It is different from PCI."},{term:"PCI",description:"Peripheral Component Interchange. A newer and faster bus architecture than NuBus."},{term:"port",description:"A connection socket or jack on the computer."},{term:"Power PC",description:"A processor design developed by Apple, IBM, and Motorola using RISC concepts."},{term:"Power Mac",description:"A family of Macintosh computers built around the PowerPC chip."},{term:"print spooler",description:"A program that temporarily stores print jobs on the hard drive so printing can continue in the background."},{term:"QuickTime",description:"An Apple system extension used to compress, edit, and play animation, movies, and sound on the Mac."},{term:"reset switch",description:"A switch used to restart the computer after a crash or freeze."},{term:"RISC",description:"Reduced Instruction Set Computing. A processor design approach using a smaller set of instructions."},{term:"serial port",description:"A port that sends data one piece after another in sequence."},{term:"SCSI",description:"Small Computer System Interface. A standard for connecting and communicating with storage and other devices."},{term:"SCSI address",description:"A unique number assigned to each device in a SCSI chain. Traditional ranges ran from 0 to 7, while some versions supported more IDs."},{term:"SCSI port",description:"A connector used to attach SCSI devices to the computer. Classic Mac systems often used a 25-pin native SCSI port."},{term:"SCSI terminator",description:"A device placed at the end of a SCSI chain to properly complete the circuit."},{term:"surge suppressor",description:"A power strip with protective circuitry that reduces the effect of electrical surges. It is not the same as a UPS."},{term:"UPS",description:"Short for Uninterruptible Power Source."},{term:"Uninterruptible Power Source or UPS",description:"A battery-backed power device that keeps the computer running for a short time during power failure so work can be saved safely."}]},{title:"Programming, formats, and technical concepts",icon:e.jsx(C,{}),items:[{term:"ASCII",description:"American Standard Code for Information Interchange. A widely used data format for exchanging information between computers and programs."},{term:"compiler",description:"A program that converts source code into a form that a computer can run or process."},{term:"DOS",description:"Disk Operating System, commonly associated with IBM PCs."},{term:"DPI",description:"Dots Per Inch. A measure of visual detail and print or display clarity."},{term:"font",description:"A typeface containing characters of an alphabet or other symbol set."},{term:"multi finder",description:"A component of System 6 that allowed the Mac to multitask."},{term:"nanosecond",description:"One billionth of a second. The original note included a joke comparing this to the speed with which certain films end up on airplanes."},{term:"PC",description:"Personal Computer. Often used specifically to refer to IBM-compatible systems running DOS or related operating systems."},{term:"spreadsheet",description:"A program designed to look like an electronic ledger for calculations and tabular data."},{term:"32 bit addressing",description:"A feature that allows the Mac to recognize and use more than 8 MB of memory."},{term:"upload",description:"To send a file from one computer to another across a network."},{term:"vaporware",description:"Software that is advertised, and sometimes even sold, before it actually exists in a releasable form."}]}],S=n.reduce((c,d)=>c+d.items.length,0),P=()=>{const c=l.useRef({}),[d,m]=l.useState(""),h=l.useMemo(()=>{const r=new Set;return n.forEach(t=>{t.items.forEach(s=>{const o=s.term.charAt(0).toUpperCase();r.add(o)})}),Array.from(r).sort()},[]),u=r=>{m(r);const t=n.flatMap(p=>p.items).find(p=>p.term.charAt(0).toUpperCase()===r);if(!t)return;const s=t.term.toLowerCase(),o=c.current[s];o&&(o.scrollIntoView({behavior:"smooth",block:"start"}),o.classList.remove("termPulse"),window.requestAnimationFrame(()=>{o.classList.add("termPulse")}))};return e.jsxs(a.Wrapper,{className:"topicWrapper",children:[e.jsxs(a.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(g,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(f,{}),"Original topic: August 8, 2012"]}),e.jsx(M,{})]}),e.jsx("h1",{children:"Basic Computer Terminology"}),e.jsx("p",{className:"lead",children:"This page is a refactored glossary based on the original archive note. It keeps the original spirit intact, but organizes the terms into cleaner sections so they are easier to study, revise, and browse."}),e.jsxs("div",{className:"heroMetaGrid",children:[e.jsxs("div",{className:"heroMetaCard",children:[e.jsx("span",{className:"heroMetaIcon",children:e.jsx(x,{})}),e.jsxs("div",{children:[e.jsxs("strong",{children:[n.length," grouped sections"]}),e.jsx("span",{children:"System basics, storage, UI, hardware, and more"})]})]}),e.jsxs("div",{className:"heroMetaCard",children:[e.jsx("span",{className:"heroMetaIcon",children:e.jsx(b,{})}),e.jsxs("div",{children:[e.jsxs("strong",{children:[S," glossary entries"]}),e.jsx("span",{children:"Original terms preserved and restructured"})]})]})]})]}),e.jsxs(a.MeasurementsCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(y,{})}),e.jsxs("div",{children:[e.jsx("h2",{children:"Measurements summary"}),e.jsx("p",{children:"A cleaned-up version of the measurement note from the original post."})]})]}),e.jsx("ul",{className:"measurementList",children:T.map(r=>e.jsx("li",{children:r},r))})]}),e.jsxs(a.AlphabetCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(v,{})}),e.jsxs("div",{children:[e.jsx("h2",{children:"Quick alphabet scan"}),e.jsx("p",{children:"Click a letter to jump to the first glossary term that starts with it."})]})]}),e.jsx("div",{className:"alphabetRow",children:h.map(r=>e.jsx("button",{type:"button",className:`alphaChip ${d===r?"active":""}`,onClick:()=>u(r),"aria-label":`Jump to terms starting with ${r}`,title:`Jump to ${r}`,children:r},r))})]}),n.map(r=>e.jsxs(a.GroupCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:r.icon}),e.jsxs("div",{children:[e.jsx("h2",{children:r.title}),e.jsxs("p",{children:[r.items.length," terms in this section"]})]})]}),e.jsx("div",{className:"glossaryGrid",children:r.items.map(t=>{const s=t.term.toLowerCase();return e.jsxs("article",{className:"termCard",ref:o=>{o&&(c.current[s]=o)},children:[e.jsx("h3",{children:t.term}),e.jsx("p",{children:t.description})]},t.term)})})]},r.title)),e.jsxs(a.FooterNote,{children:[e.jsx("h2",{children:"Final note"}),e.jsx("p",{children:"The original post was a long terminology dump, which is useful, but a bit like opening a toolbox and having every wrench fall on your foot at once. This version keeps the terms while organizing them into a more readable glossary structure."})]})]})};export{P as default};
