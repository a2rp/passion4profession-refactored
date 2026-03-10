import{c as a,j as e,f as s,k as o,l as i,m as t,g as n,n as l,o as d}from"./index-BxgJM-x-.js";import{S as c}from"./index-D6FK_vhk.js";const r={Wrapper:a.div`
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
            max-width: 820px;
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

        .exampleBox,
        .stepsBox {
            margin-top: 16px;
        }

        .exampleBox {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .stepsBox {
            display: flex;
            flex-direction: column;
            gap: 12px;
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

        .compareGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 16px;

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
    `},x=()=>e.jsxs(r.Wrapper,{className:"topicWrapper",children:[e.jsxs(r.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(s,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(o,{}),"Original topic: June 8, 2013"]}),e.jsx(c,{})]}),e.jsx("h1",{children:"What is the meaning of platform independence?"}),e.jsx("p",{className:"lead",children:"Platform independence means software can run on multiple platforms with little or no change. In simple words, the same logic should work on different systems instead of being locked to only one machine, one operating system, or one runtime environment."})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(i,{})}),e.jsx("h2",{children:"Simple definition"})]}),e.jsx("p",{children:"When a program is platform independent, it does not depend too tightly on one specific environment. That means the same code, or almost the same code, can run on different platforms such as Windows, Linux, or macOS."}),e.jsx("p",{children:'The exact meaning depends on what you call a "platform". In some cases, platform means the operating system. In some cases, it means the hardware architecture. In other cases, it means a runtime environment such as the Java Virtual Machine, also called the JVM.'})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"What can a platform mean?"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"A specific operating system such as Windows or Linux"}),e.jsx("li",{children:"A hardware type such as x86, ARM, or some embedded device"}),e.jsx("li",{children:"A machine setup with its own memory, storage, and system limits"}),e.jsx("li",{children:"A runtime environment such as the JVM"})]}),e.jsx("p",{children:"So platform independence is not always absolute. It depends on which level you are talking about."})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Important truth"})]}),e.jsx("p",{children:"Nothing is perfectly platform independent. There are always small differences, limits, or edge cases hiding under the carpet like tiny technical goblins."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Different file path separators"}),e.jsx("li",{children:"Different file system rules"}),e.jsx("li",{children:"Different memory limits"}),e.jsx("li",{children:"Different hardware capabilities"}),e.jsx("li",{children:"Different runtime bugs on different systems"})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"Why portability can still fail"})]}),e.jsx("p",{children:"Even if software is designed to be portable, it can still fail in practice. For example, a program may work fine on a machine with a lot of RAM but crash on a weaker system. Another program may assume a filename can be very long, but some platforms may have stricter limits."}),e.jsx("p",{children:'So platform independence does not mean "works everywhere no matter what". It means the software is designed to avoid unnecessary dependence on platform-specific details.'})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"Source code portability vs compiled output"})]}),e.jsx("p",{children:"Some languages are portable mainly at the source-code level. C and C++ are good examples. The source code can often be moved between platforms, but after compilation the generated native machine code becomes platform specific."}),e.jsx("p",{children:"That means a compiled program built for Windows usually cannot be run directly on Linux, and a build for one CPU architecture may not work on another architecture."}),e.jsxs("div",{className:"exampleBox",children:[e.jsx("h3",{children:"Quick idea"}),e.jsxs("ul",{children:[e.jsx("li",{children:"C or C++ source code may be portable with changes or recompilation"}),e.jsx("li",{children:"Native compiled binaries are usually platform specific"}),e.jsx("li",{children:"Portability often exists before compilation, not after it"})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Why Java is a famous example"})]}),e.jsx("p",{children:"Java is often used to explain platform independence because Java code is compiled into bytecode instead of directly into native machine instructions. That bytecode runs on the JVM."}),e.jsx("p",{children:"Since the JVM exists for many platforms, the same Java application can usually run on Windows, Linux, and other systems without changing the application code itself."}),e.jsxs("div",{className:"stepsBox",children:[e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"stepNo",children:"1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Write Java source code"}),e.jsx("p",{children:"The programmer writes normal Java classes and logic."})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"stepNo",children:"2"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Compile to bytecode"}),e.jsx("p",{children:"The code becomes platform-independent bytecode."})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"stepNo",children:"3"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Run through the JVM"}),e.jsx("p",{children:"The JVM on each system handles platform-specific execution under the hood."})]})]})]})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(i,{})}),e.jsx("h2",{children:"What makes Java portable"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Same bytecode can run on many systems"}),e.jsx("li",{children:"Standard libraries behave in a consistent way across platforms"}),e.jsx("li",{children:"File handling, networking, and other APIs are abstracted by the Java runtime"}),e.jsx("li",{children:"Pure Java libraries are usually easier to keep portable"})]})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Where Java can still become platform specific"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"If code depends on native libraries written in C or C++"}),e.jsx("li",{children:"If code talks directly to special hardware or device drivers"}),e.jsx("li",{children:"If platform-specific assumptions are hardcoded"}),e.jsx("li",{children:"If runtime or implementation bugs appear only on one platform"})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Classic example: file paths"})]}),e.jsx("p",{children:"A common portability mistake is hardcoding path separators. One system may use one format while another system may use a different one. Good platform-independent code avoids such assumptions and uses the language or standard library tools made for that purpose."}),e.jsxs("div",{className:"compareGrid",children:[e.jsxs("div",{className:"compareCard bad",children:[e.jsx("h3",{children:"Less portable thinking"}),e.jsx("p",{children:"Assume every system stores paths in exactly the same way."})]}),e.jsxs("div",{className:"compareCard good",children:[e.jsx("h3",{children:"More portable thinking"}),e.jsx("p",{children:"Use standard library utilities that adapt to the current platform."})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(i,{})}),e.jsx("h2",{children:"Best practical conclusion"})]}),e.jsx("p",{children:"Platform independence is not magic. It is careful software design. A program becomes portable when the developer avoids unnecessary system-specific assumptions and uses abstractions provided by the language or runtime."}),e.jsx("p",{children:"Java comes very close to practical platform independence because it uses bytecode plus the JVM. But even then, proper testing on different platforms is still necessary."})]}),e.jsxs(r.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"Platform independence means software can run on multiple platforms with little or no change. It is never perfectly absolute, but some technologies such as Java make it highly practical by hiding many platform-specific details behind a common runtime environment."})]})]});export{x as default};
