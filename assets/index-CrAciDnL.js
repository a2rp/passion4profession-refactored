import{c as a,j as e,f as c,a as l,l as s,o as n,a1 as o,g as p,B as t,m as d}from"./index-D1C0sqWO.js";import{S as x}from"./index-DpzaY4xy.js";const r={Wrapper:a.div`
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
            max-width: 840px;
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

        .codingCard {
            box-shadow: inset 3px 0 0 var(--color-text-primary);
        }

        .encodingCard {
            box-shadow: inset 3px 0 0 var(--color-text-muted);
        }

        .exampleList {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: 14px;
        }

        .exampleItem {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            padding: 16px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
        }

        .exampleItem strong {
            display: block;
            margin-bottom: 6px;
        }

        .exampleItem p {
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
    `,ExampleGrid:a.section`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;

        @media (max-width: 820px) {
            grid-template-columns: 1fr;
        }

        .exampleCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-lg);
            background: linear-gradient(
                180deg,
                var(--color-surface) 0%,
                var(--color-surface-2) 100%
            );
            box-shadow: 0 18px 40px var(--color-shadow);
            padding: 20px;
        }

        .iconBadge {
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

        .iconBadge svg {
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
    `},h=[{title:"Coding example",icon:e.jsx(n,{}),text:"Writing JavaScript, C, Java, or Python instructions to make a program do something."},{title:"Encoding example",icon:e.jsx(o,{}),text:"Representing text using ASCII or Unicode so systems can store, process, and transfer it properly."},{title:"Compression example",icon:e.jsx(t,{}),text:"Using Huffman encoding to represent data more efficiently."},{title:"Machine-side example",icon:e.jsx(d,{}),text:"A machine may encode data internally for storage, transmission, or processing rather than 'code' in the human programming sense."}],u=()=>e.jsxs(r.Wrapper,{className:"topicWrapper",children:[e.jsxs(r.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(c,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(l,{}),"Original topic: July 13, 2012"]}),e.jsx(x,{})]}),e.jsx("h1",{children:"Difference between coding and encoding"}),e.jsxs("p",{className:"lead",children:["The difference depends on context, but in general"," ",e.jsx("strong",{children:"coding"})," usually means writing instructions for a computer, while ",e.jsx("strong",{children:"encoding"})," usually means converting data into a particular representation or format."]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Simple answer"})]}),e.jsx("p",{children:'When a person says "I am coding", they usually mean they are writing program logic in some programming language such as JavaScript, C, Java, or Python.'}),e.jsx("p",{children:'When we talk about "encoding", we usually mean converting information into another form so it can be stored, transmitted, processed, or understood by a system.'})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"What is coding?"})]}),e.jsx("p",{children:"Coding means writing instructions in a programming language to achieve some result."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Writing a function"}),e.jsx("li",{children:"Building a website"}),e.jsx("li",{children:"Creating app logic"}),e.jsx("li",{children:"Automating a task"})]}),e.jsx("p",{children:"In everyday software talk, coding is often used as a casual synonym for programming."})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"What is encoding?"})]}),e.jsx("p",{children:"Encoding means representing data in a specific form according to a rule or system."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Text encoding such as ASCII or Unicode"}),e.jsx("li",{children:"Media encoding such as MP3 or MP4 formats"}),e.jsx("li",{children:"Compression-related encoding such as Huffman encoding"}),e.jsx("li",{children:"Transmission-oriented data representation"})]}),e.jsx("p",{children:"The purpose is not usually to write program logic, but to transform or represent data."})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(p,{})}),e.jsx("h2",{children:"Why the confusion happens"})]}),e.jsx("p",{children:"These two words sound related because both involve symbols, rules, and information. But they are used differently."}),e.jsxs("div",{className:"compareGrid",children:[e.jsxs("div",{className:"compareCard codingCard",children:[e.jsx("h3",{children:"Coding"}),e.jsx("p",{children:"Mainly about writing instructions for behavior and logic."})]}),e.jsxs("div",{className:"compareCard encodingCard",children:[e.jsx("h3",{children:"Encoding"}),e.jsx("p",{children:"Mainly about representing data in a defined format or structure."})]})]}),e.jsx("p",{children:"So if a developer is coding, that usually means they are writing software. If a system is encoding, that usually means it is transforming data into some usable form."})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"Encoding examples"})]}),e.jsx("p",{children:"One of the most common uses of encoding is in text and data representation."}),e.jsxs("div",{className:"exampleList",children:[e.jsxs("div",{className:"exampleItem",children:[e.jsx("strong",{children:"ASCII"}),e.jsx("p",{children:"A character encoding system that maps characters to numeric values."})]}),e.jsxs("div",{className:"exampleItem",children:[e.jsx("strong",{children:"Unicode"}),e.jsx("p",{children:"A broader standard that supports many languages and symbols across platforms."})]}),e.jsxs("div",{className:"exampleItem",children:[e.jsx("strong",{children:"Huffman encoding"}),e.jsx("p",{children:"A method used in compression to represent data more efficiently by assigning shorter codes to more frequent items."})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"Human side vs machine side"})]}),e.jsx("p",{children:"A useful mental shortcut is this:"}),e.jsxs("div",{className:"stepsBox",children:[e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"stepNo",children:"1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Human writes code"}),e.jsx("p",{children:"A programmer writes instructions using a language and syntax."})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"stepNo",children:"2"}),e.jsxs("div",{children:[e.jsx("strong",{children:"System encodes data"}),e.jsx("p",{children:"The machine stores, transforms, or transfers information in some encoded form."})]})]})]}),e.jsx("p",{children:"This is not a perfect rule for every technical context, but it is a very practical way to remember the difference."})]}),e.jsx(r.ExampleGrid,{children:h.map(i=>e.jsxs("article",{className:"exampleCard",children:[e.jsx("div",{className:"iconBadge",children:i.icon}),e.jsx("h3",{children:i.title}),e.jsx("p",{children:i.text})]},i.title))}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Best practical conclusion"})]}),e.jsx("p",{children:"Coding is usually about creating program behavior. Encoding is usually about representing or transforming data."}),e.jsx("p",{children:"They can appear in the same software system, but they are not the same thing. A developer may code a program that performs encoding. That is where the two ideas shake hands without becoming identical twins."})]}),e.jsxs(r.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"Coding means writing instructions in a programming language. Encoding means converting or representing data in a specific format such as ASCII, Unicode, or Huffman encoding. One is mainly about logic and behavior, the other is mainly about representation and transformation."})]})]});export{u as default};
