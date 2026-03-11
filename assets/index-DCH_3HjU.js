import{c as i,j as e,f as o,a as p,o as l,m as t,l as n,G as d,q as c,B as x}from"./index-D1C0sqWO.js";import{S as h}from"./index-DpzaY4xy.js";const r={Wrapper:i.div`
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
            max-width: 840px;
            font-size: 16px;
            line-height: 1.85;
            color: var(--color-text-secondary);
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
            font-size: 16px;
            line-height: 1.2;
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

        .stepsBox {
            margin-top: 16px;
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

        .step p {
            margin: 0;
            font-size: 14px;
        }

        .compareGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 12px;

            @media (max-width: 720px) {
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

        .compareCard h3 {
            margin-bottom: 8px;
        }

        .compareCard p {
            margin: 0;
            font-size: 14px;
            line-height: 1.75;
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
    `,FamilyGrid:i.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;
        margin-top: 8px;

        @media (max-width: 820px) {
            grid-template-columns: 1fr;
        }

        .familyCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 18px;
        }

        .familyIcon {
            width: 42px;
            height: 42px;
            margin-bottom: 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            background: var(--color-surface-3);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
        }

        .familyIcon svg {
            width: 18px;
            height: 18px;
        }

        h3 {
            margin-bottom: 8px;
            font-size: 17px;
        }

        p {
            font-size: 14px;
            line-height: 1.75;
            color: var(--color-text-secondary);
        }

        ul {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-top: 12px;
        }

        ul li {
            position: relative;
            padding-left: 18px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.7;
        }

        ul li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 8px;
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-text-primary);
        }
    `,ExampleGrid:i.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
        margin-top: 8px;

        @media (max-width: 760px) {
            grid-template-columns: 1fr;
        }

        .exampleCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .exampleCard h3 {
            margin-bottom: 8px;
            font-size: 16px;
        }

        .exampleCard p {
            margin: 0;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.75;
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
    `},g="/passion4profession-refactored/assets/image-B7c8q_zy.png",m=[{icon:e.jsx(d,{}),title:"Low-level languages",text:"These are closer to the machine. They give more control over memory and hardware behavior, but they are usually harder to write and maintain.",examples:["Assembly language","Machine code"]},{icon:e.jsx(l,{}),title:"General-purpose languages",text:"These are designed for solving many kinds of software problems. They are flexible and commonly used in real-world development.",examples:["C","C++","Java","Python","JavaScript","Go"]},{icon:e.jsx(c,{}),title:"Web-focused languages",text:"These are commonly used for building websites, web apps, and browser-based experiences.",examples:["JavaScript","TypeScript","PHP"]},{icon:e.jsx(x,{}),title:"Domain-specific languages",text:"These are designed for a particular type of task rather than general software development.",examples:["SQL","HTML","CSS","R","MATLAB"]}],u=[{title:"Syntax",text:"The rules that define how code is written in that language."},{title:"Performance",text:"How efficiently programs written in that language usually run."},{title:"Ease of learning",text:"How beginner-friendly the language feels for new developers."},{title:"Use case",text:"What the language is mainly used for, such as web apps, system software, mobile apps, or data science."},{title:"Portability",text:"How easily software written in that language can run on different systems."},{title:"Tooling and ecosystem",text:"The quality of libraries, frameworks, debuggers, and developer support around the language."}],f=[{title:"C",text:"Often used for systems programming, operating systems, and performance-sensitive software."},{title:"C++",text:"Common in game engines, desktop software, high-performance systems, and complex applications."},{title:"Java",text:"Popular for enterprise applications, backend systems, Android development, and large-scale software."},{title:"Python",text:"Widely used for scripting, automation, data analysis, machine learning, and backend development."},{title:"JavaScript",text:"The language of the browser, also widely used on the server side through Node.js."},{title:"SQL",text:"Used for working with relational databases and querying structured data."}],j=()=>e.jsxs(r.Wrapper,{className:"topicWrapper",children:[e.jsxs(r.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(o,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(p,{}),"Original topic: August 18, 2012"]}),e.jsx(h,{})]}),e.jsx("h1",{children:"Programming Languages"}),e.jsx("p",{className:"lead",children:"A programming language is a formal way of writing instructions for a computer. Different programming languages exist because software problems are different, and no single language is perfect for every kind of task."})]}),e.jsx(r.SectionCard,{children:e.jsx("img",{src:g,alt:""})}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"What is a programming language?"})]}),e.jsx("p",{children:"A programming language is a system of rules, symbols, and syntax used to tell a computer what to do. It lets developers describe logic, process data, control behavior, and build software."}),e.jsx("p",{children:"In simple words, a programming language is the medium between human thinking and machine execution. The computer does not naturally understand high-level ideas, so the language acts like a bridge."})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"Why are there so many languages?"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Different problems need different strengths"}),e.jsx("li",{children:"Some languages focus on speed"}),e.jsx("li",{children:"Some focus on readability and simplicity"}),e.jsx("li",{children:"Some are made for web development"}),e.jsx("li",{children:"Some are built for scientific or database work"}),e.jsx("li",{children:"Some are designed to be close to hardware"})]}),e.jsx("p",{children:"That is why the world ended up with a whole zoo of languages instead of one universal winner."})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"What all languages have in common"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Rules for writing instructions"}),e.jsx("li",{children:"Ways to store and process data"}),e.jsx("li",{children:"Ways to make decisions and repeat actions"}),e.jsx("li",{children:"Ways to organize logic into reusable blocks"}),e.jsx("li",{children:"Ways to interact with input, output, and memory"})]}),e.jsx("p",{children:"The style changes, but the core purpose stays the same: give clear instructions to a machine."})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"How a programming language works"})]}),e.jsx("p",{children:"The code written by a developer usually cannot be executed directly by the hardware as-is. It often goes through a translator such as a compiler or an interpreter."}),e.jsxs("div",{className:"stepsBox",children:[e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"stepNo",children:"1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Write source code"}),e.jsx("p",{children:"The developer writes logic using the language's syntax."})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"stepNo",children:"2"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Translate it"}),e.jsx("p",{children:"A compiler or interpreter converts that code into something the computer can execute."})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"stepNo",children:"3"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Run the program"}),e.jsx("p",{children:"The machine follows the translated instructions and produces output or behavior."})]})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Common language categories"})]}),e.jsx(r.FamilyGrid,{children:m.map(a=>e.jsxs("article",{className:"familyCard",children:[e.jsx("div",{className:"familyIcon",children:a.icon}),e.jsx("h3",{children:a.title}),e.jsx("p",{children:a.text}),e.jsx("ul",{children:a.examples.map(s=>e.jsx("li",{children:s},s))})]},a.title))})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(c,{})}),e.jsx("h2",{children:"Popular examples"})]}),e.jsx(r.ExampleGrid,{children:f.map(a=>e.jsxs("article",{className:"exampleCard",children:[e.jsx("h3",{children:a.title}),e.jsx("p",{children:a.text})]},a.title))})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"How languages are compared"})]}),e.jsx("div",{className:"compareGrid",children:u.map(a=>e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:a.title}),e.jsx("p",{children:a.text})]},a.title))})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"No language is best at everything"})]}),e.jsx("p",{children:"A language that is excellent for low-level system control may not be the easiest for web development. A language that is brilliant for quick scripting may not always be the top choice for ultra-high-performance engine work."}),e.jsx("p",{children:'So the better question is usually not "Which language is the best?" but "Best for what?" That one small twist saves a lot of silly internet wars.'})]}),e.jsxs(r.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"Programming languages are tools for expressing instructions to computers. Different languages exist because different kinds of software need different strengths. The goal is not to find one perfect language, but to choose the right one for the job."})]})]});export{j as default};
