import{c as a,j as e,k as h,a as p,l as i,m as n,o as t,f as l,G as x,g as o,B as d}from"./index-BxgJM-x-.js";import{S as m}from"./index-D6FK_vhk.js";const r={Wrapper:a.div`
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

        .compareCard.bad {
            box-shadow: inset 3px 0 0 var(--color-text-muted);
        }

        .compareCard.good {
            box-shadow: inset 3px 0 0 var(--color-text-primary);
        }

        .compareCard p {
            margin: 0;
            font-size: 14px;
        }

        .stepsBox {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin: 16px 0;
        }

        .step {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 14px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
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

        .step p {
            margin: 0;
        }

        .codeBlock {
            margin: 16px 0;
        }

        .codeBlock pre {
            margin: 0;
            white-space: pre-wrap;
            word-break: break-word;
        }

        .noteBox {
            margin-top: 16px;
            padding: 16px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
        }

        .noteBox p {
            margin: 0;
            font-size: 14px;
        }

        .tableWrap {
            width: 100%;
            overflow-x: auto;
            margin-top: 14px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
        }

        table {
            width: 100%;
            min-width: 680px;
            border-collapse: collapse;
            background: var(--color-surface-2);
        }

        th,
        td {
            text-align: left;
            padding: 14px 16px;
            border-bottom: 1px solid var(--color-border);
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
            vertical-align: top;
        }

        th {
            background: var(--color-surface-3);
            color: var(--color-text-primary);
            font-weight: 800;
        }

        tbody tr:last-child td {
            border-bottom: none;
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

        .topRow {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 12px;
        }

        .miniIcon {
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

        .miniIcon svg {
            width: 18px;
            height: 18px;
        }

        h3 {
            font-size: 20px;
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
    `},g=[{title:"CPU",text:"The CPU reads instructions, decodes them, and performs operations step by step.",icon:e.jsx(n,{})},{title:"Memory",text:"Programs and data are stored in memory. The CPU reads instructions from memory while running a program.",icon:e.jsx(d,{})},{title:"Registers",text:"Registers are tiny storage locations inside the CPU used for fast operations and control.",icon:e.jsx(l,{})},{title:"Instructions",text:"Assembly code uses human-readable mnemonics like MOV and INT instead of raw numeric opcodes.",icon:e.jsx(t,{})}],u=["Load a value into AX","Copy that value into DS","Write a byte into memory","Trigger an interrupt to return control"],v=()=>e.jsxs(r.Wrapper,{className:"topicWrapper",children:[e.jsxs(r.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(h,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(p,{}),"Original topic: August 20, 2012"]}),e.jsx(m,{})]}),e.jsx("h1",{children:"Introduction to Assembly Language Programming"}),e.jsx("p",{className:"lead",children:"Assembly language is one of the lowest-level ways to program a computer. It lets a programmer work very close to the CPU by writing instructions that map directly to machine-level operations. It is harder than high-level programming, but it gives deep insight into how computers actually execute code."})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(i,{})}),e.jsx("h2",{children:"Simple definition"})]}),e.jsxs("p",{children:["Assembly language is a human-readable representation of machine instructions. Instead of writing raw numeric opcode values, a programmer writes short instruction names such as",e.jsx("strong",{children:" MOV"}),", ",e.jsx("strong",{children:"ADD"}),", or"," ",e.jsx("strong",{children:"INT"}),". An assembler then converts those instructions into machine code that the processor can run."]}),e.jsx("p",{children:"It is called a low-level language because it sits very close to the hardware. That makes it powerful, precise, and fast, but also more difficult to write and understand than languages such as C, Java, or JavaScript."})]}),e.jsx(r.Grid,{children:g.map(s=>e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"topRow",children:[e.jsx("span",{className:"miniIcon",children:s.icon}),e.jsx("h3",{children:s.title})]}),e.jsx("p",{children:s.text})]},s.title))}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"The basic idea behind a program"})]}),e.jsx("p",{children:"At a very low level, a program is just a sequence of instructions stored in memory. The CPU reads one instruction at a time, decodes it, and performs the required action. Different instructions tell the CPU to move data, perform calculations, compare values, jump to other instructions, or interact with the operating system."}),e.jsx("p",{children:"In raw machine code, these instructions are represented as numbers. Computers understand those numbers directly, but humans generally do not. Assembly language exists to make those operations readable enough for humans to write and reason about."})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"Why assembly language exists"})]}),e.jsx("p",{children:"Writing programs as raw numbers is extremely inconvenient. Imagine trying to build software by memorizing numeric instruction codes instead of using meaningful words. That is exactly the swamp assembly language helps us escape."}),e.jsxs("div",{className:"compareGrid",children:[e.jsxs("div",{className:"compareCard bad",children:[e.jsx("h3",{children:"Raw machine code"}),e.jsx("p",{children:"Hard for humans to read, write, and debug because everything appears as numeric instruction data."})]}),e.jsxs("div",{className:"compareCard good",children:[e.jsx("h3",{children:"Assembly language"}),e.jsx("p",{children:"Uses readable mnemonics and symbolic structure, making machine-level programming much more practical."})]})]}),e.jsx("p",{children:"An assembler converts assembly instructions into machine code, so the CPU still gets the exact binary form it needs."})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"Registers and memory"})]}),e.jsx("p",{children:"Assembly programming often involves working with registers. Registers are very small storage locations inside the CPU. They are much faster than normal memory and are used heavily during instruction execution."}),e.jsxs("p",{children:["Some registers are general purpose, while others are used for more specific control-related tasks depending on the CPU architecture. In older Intel-style examples, registers such as ",e.jsx("strong",{children:"AX"})," and ",e.jsx("strong",{children:"BX"})," are commonly seen."]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Registers are inside the CPU and are very fast"}),e.jsx("li",{children:"Memory is larger but slower than registers"}),e.jsx("li",{children:"Programs move values between registers and memory constantly"}),e.jsx("li",{children:"Understanding registers helps explain how instructions really work"})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(x,{})}),e.jsx("h2",{children:"A tiny example conceptually"})]}),e.jsx("p",{children:"A small assembly program might do something like this:"}),e.jsx("div",{className:"stepsBox",children:u.map((s,c)=>e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"stepNo",children:c+1}),e.jsx("p",{children:s})]},s))}),e.jsx("div",{className:"codeBlock",children:e.jsx("pre",{children:`MOV AX, value
MOV DS, AX
MOV [address], data
INT 20h`})}),e.jsx("p",{children:"The exact meaning depends on the processor, addressing mode, and execution environment. But the main lesson is simple: assembly instructions directly control how data is moved and how the CPU behaves."})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"topRow",children:[e.jsx("span",{className:"miniIcon",children:e.jsx(i,{})}),e.jsx("h3",{children:"Why assembly is valuable"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"It teaches how CPUs execute instructions"}),e.jsx("li",{children:"It improves understanding of memory and registers"}),e.jsx("li",{children:"It helps explain how compilers work underneath"}),e.jsx("li",{children:"It makes low-level debugging and systems work easier to understand"})]})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"topRow",children:[e.jsx("span",{className:"miniIcon",children:e.jsx(o,{})}),e.jsx("h3",{children:"Why assembly is difficult"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"It is architecture specific and not portable"}),e.jsx("li",{children:"It is more verbose for larger tasks"}),e.jsx("li",{children:"It lacks many high-level conveniences"}),e.jsx("li",{children:"Small mistakes can cause confusing low-level bugs"})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"About the old MS-DOS debug example"})]}),e.jsxs("p",{children:["Many classic assembly tutorials used old MS-DOS tools such as ",e.jsx("strong",{children:"Debug"})," to manually enter instructions, inspect memory, and run tiny programs. That approach was useful for learning, but it belongs to a much older software environment."]}),e.jsx("p",{children:"Today, assembly is more commonly explored using modern assemblers, emulators, debuggers, or educational tools tailored for current operating systems and CPU architectures."}),e.jsxs("div",{className:"noteBox",children:[e.jsx("h3",{children:"Important note"}),e.jsx("p",{children:"The specific registers, interrupts, memory addresses, and execution details shown in older tutorials are often tied to old x86 real-mode or DOS-era environments. They should be understood as historical learning examples, not universal modern practice."})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"Assembly language vs high-level languages"})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Aspect"}),e.jsx("th",{children:"Assembly language"}),e.jsx("th",{children:"High-level languages"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Abstraction level"}),e.jsx("td",{children:"Very low"}),e.jsx("td",{children:"Much higher"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Portability"}),e.jsx("td",{children:"Usually poor"}),e.jsx("td",{children:"Usually better"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Hardware control"}),e.jsx("td",{children:"Very direct"}),e.jsx("td",{children:"More abstracted"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Ease of writing"}),e.jsx("td",{children:"Harder"}),e.jsx("td",{children:"Easier"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Learning value"}),e.jsx("td",{children:"Excellent for internals"}),e.jsx("td",{children:"Excellent for faster development"})]})]})]})})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(i,{})}),e.jsx("h2",{children:"Best practical conclusion"})]}),e.jsx("p",{children:"Assembly language is not the easiest language to write, but it is one of the best ways to understand how software and hardware meet. It reveals how the CPU, registers, memory, and instructions work together at a fundamental level."}),e.jsx("p",{children:"Even if you never become a full-time assembly programmer, learning the basics can make you a stronger programmer in every other language. It sharpens your understanding of what your code is really asking the machine to do."})]}),e.jsxs(r.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"Assembly language is a low-level programming language that gives direct access to CPU-style instructions through readable mnemonics. It is architecture-specific and harder than high-level programming, but it provides unmatched insight into how computers actually execute code."})]})]});export{v as default};
