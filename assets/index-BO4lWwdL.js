import{c as a,j as e,d as o,a as s,al as n,Y as t,f as l,o as d,G as c,ae as p}from"./index-DR_KT_2c.js";import{S as h}from"./index-D4exoH3I.js";const r={Wrapper:a.div`
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

        .compareCard h3 {
            margin-bottom: 8px;
        }

        .compareCard p {
            margin: 0;
            font-size: 14px;
        }

        .sourceLink {
            display: inline-flex;
            align-items: center;
            min-height: 42px;
            padding: 0 14px;
            margin-top: 14px;
            border-radius: var(--radius-sm);
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-primary);
            text-decoration: none;
            font-weight: 700;
            transition:
                background var(--transition-fast),
                border-color var(--transition-fast),
                color var(--transition-fast),
                transform var(--transition-fast);
        }

        .sourceLink:hover {
            background: var(--color-text-primary);
            color: var(--color-text-inverse);
            border-color: var(--color-text-primary);
            text-decoration: none;
            transform: translateY(-1px);
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
    `,ExampleGrid:a.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
        margin-top: 8px;

        @media (max-width: 820px) {
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
            font-size: 16px;
            line-height: 1.2;
            margin-bottom: 8px;
        }

        .exampleCard p {
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
    `},m=[{term:"Hack",meaning:"A clever, unusual, or improvised technical solution. In old hacker culture, this often had a positive meaning."},{term:"Hacker",meaning:"Originally, a person who enjoys exploring systems, solving technical problems, and building clever solutions."},{term:"Foo / Bar / Baz",meaning:"Placeholder words commonly used in programming examples when the real name does not matter."},{term:"Kludge",meaning:"A messy or awkward solution that works, even if it is not elegant."},{term:"Wizard",meaning:"A highly skilled technical person who understands systems deeply."},{term:"Bogus",meaning:"Incorrect, fake, invalid, or not trustworthy."}],x=["It captures the personality of early computing culture","It explains how programmers and system people used words differently from normal everyday speech","It preserves technical slang, humor, and mindset from hacker communities","It helps readers understand older documentation, mailing lists, and technical discussions"],f=()=>e.jsxs(r.Wrapper,{className:"topicWrapper",children:[e.jsxs(r.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(o,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(s,{}),"Original topic archive entry"]}),e.jsx(h,{})]}),e.jsx("h1",{children:"From Hackers Jargon File"}),e.jsx("p",{className:"lead",children:'The old post was a short reference pointing to the "Hackers Jargon File". In a cleaner and more useful form, this topic is really about understanding the language, humor, and culture of early hacker communities.'})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"What is the Hackers Jargon File?"})]}),e.jsx("p",{children:"The Hackers Jargon File is a well-known collection of words, slang, expressions, jokes, and technical cultural terms used by programmers, hackers, and computing enthusiasts. It is not just a dictionary. It is also a cultural record of how technical people talked, thought, and described the strange little world of computing."}),e.jsx("p",{children:"Many of the words in it are playful, informal, and community-driven. Some terms describe software behavior, some describe people, and some describe clever solutions or broken systems in the most entertainingly nerdy way possible."})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"Why it matters"})]}),e.jsx("ul",{children:x.map(i=>e.jsx("li",{children:i},i))})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"What it is not"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"It is not a formal programming textbook"}),e.jsx("li",{children:"It is not a language specification"}),e.jsx("li",{children:"It is not only about illegal hacking"}),e.jsx("li",{children:"It is not limited to security terms or cybercrime language"})]}),e.jsx("p",{children:'A lot of people hear the word "hacker" and imagine only security attacks. Historically, the word had a much broader and often more creative meaning.'})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:'What the word "hacker" originally meant'})]}),e.jsx("p",{children:"In older computing culture, a hacker was often seen as a curious, highly engaged technical person who enjoyed deeply understanding systems and creating clever solutions. The focus was on exploration, building, experimentation, and elegant problem-solving."}),e.jsx("p",{children:"Over time, popular media narrowed the word into something much more dramatic and suspicious. That is why older hacker culture and modern public understanding of the term do not always match."}),e.jsxs("div",{className:"compareGrid",children:[e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"Older culture meaning"}),e.jsx("p",{children:"A creative technical builder, explorer, and problem-solver."})]}),e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"Popular modern misunderstanding"}),e.jsx("p",{children:"Someone who only breaks into systems or performs cyber attacks."})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(c,{})}),e.jsx("h2",{children:"Examples of jargon-style terms"})]}),e.jsx(r.ExampleGrid,{children:m.map(i=>e.jsxs("article",{className:"exampleCard",children:[e.jsx("h3",{children:i.term}),e.jsx("p",{children:i.meaning})]},i.term))})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Why this kind of file is interesting"})]}),e.jsx("p",{children:"Programming is not only syntax, APIs, and compilers. It is also a culture. Communities invent terms, jokes, shorthand, and shared mental models. The Hackers Jargon File is interesting because it records that living culture rather than just technical rules."}),e.jsx("p",{children:"It also reminds us that computing history was built by curious people with strong personalities, inside jokes, and a tendency to name serious things in delightfully unserious ways."})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(p,{})}),e.jsx("h2",{children:"Credit and source note"})]}),e.jsxs("p",{children:["The original archive note referenced the Hackers Jargon File and credited ",e.jsx("strong",{children:"catb.org"}),". This refactored page keeps that spirit, but expands the topic into a clearer explanation of what the jargon file represents and why it is worth knowing."]}),e.jsx("a",{href:"http://catb.org",target:"_blank",rel:"noreferrer",className:"sourceLink",children:"Visit catb.org"})]}),e.jsxs(r.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"The Hackers Jargon File is a cultural glossary of computing slang, humor, and technical expressions from hacker and programmer communities. It matters not because it teaches a programming language directly, but because it helps explain the mindset, vocabulary, and history of the people who built much of computing culture."})]})]});export{f as default};
