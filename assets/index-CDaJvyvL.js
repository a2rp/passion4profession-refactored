import{c as i,j as e,d as o,a as t,l as n,V as l,f as s,k as d,m as c,a0 as p}from"./index-BxgJM-x-.js";import{S as m}from"./index-D6FK_vhk.js";const r={Wrapper:i.div`
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
            margin: 0 0 8px;
        }

        .compareCard span {
            color: var(--color-text-muted);
            font-size: 13px;
            line-height: 1.65;
            display: block;
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
    `,CardGrid:i.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 14px;
        margin-top: 8px;

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }

        .miniCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .miniCard h3 {
            margin-bottom: 8px;
        }

        .miniCard p {
            font-size: 14px;
            line-height: 1.75;
            color: var(--color-text-secondary);
        }
    `,ElementGrid:i.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 14px;
        margin-top: 8px;

        @media (max-width: 900px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        @media (max-width: 620px) {
            grid-template-columns: 1fr;
        }

        .elementCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .symbol {
            width: 52px;
            height: 52px;
            margin-bottom: 12px;
            border-radius: var(--radius-sm);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: var(--color-text-primary);
            color: var(--color-text-inverse);
            font-size: 18px;
            font-weight: 900;
            line-height: 1;
        }

        .elementCard h3 {
            margin-bottom: 8px;
            font-size: 17px;
        }

        .elementCard p {
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
    `},h="/passion4profession-refactored/assets/image-C3f3dFIZ.png",x=[{title:"Metals",text:"Most elements in the periodic table are metals. They usually conduct heat and electricity well, and many are shiny, strong, and malleable."},{title:"Nonmetals",text:"Nonmetals usually do not conduct electricity well. Many important life-related elements such as oxygen, carbon, and nitrogen are nonmetals."},{title:"Metalloids",text:"Metalloids have properties between metals and nonmetals. Silicon is a famous example because it is widely used in electronics."}],u=[{title:"s-block",text:"Contains elements whose outer electrons enter the s orbital. These include Group 1 and Group 2 elements."},{title:"p-block",text:"Contains many common nonmetals, metalloids, and some metals. This block includes Groups 13 to 18."},{title:"d-block",text:"Contains transition metals such as iron, copper, and zinc. These are often important in industry and engineering."},{title:"f-block",text:"Contains lanthanides and actinides, usually shown separately at the bottom of the table to keep the layout compact."}],g=[{symbol:"H",name:"Hydrogen",note:"The lightest element and the most abundant element in the universe."},{symbol:"O",name:"Oxygen",note:"Essential for respiration and very common in water and the atmosphere."},{symbol:"C",name:"Carbon",note:"A fundamental element in life, fuels, and many materials."},{symbol:"Fe",name:"Iron",note:"An important metal used in construction, machines, and tools."},{symbol:"Si",name:"Silicon",note:"A key semiconductor material used in chips and electronics."},{symbol:"Au",name:"Gold",note:"Known for conductivity, corrosion resistance, and use in jewelry and electronics."}],j=()=>e.jsxs(r.Wrapper,{className:"topicWrapper",children:[e.jsxs(r.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(o,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(t,{}),"Original topic: August 20, 2012"]}),e.jsx(m,{})]}),e.jsx("h1",{children:"The Periodic Table"}),e.jsx("p",{className:"lead",children:"The periodic table is a structured arrangement of chemical elements. It organizes elements in a way that helps us understand their properties, patterns, and relationships. Instead of being a random chart of science symbols, it is one of the most useful maps in chemistry and modern technology."})]}),e.jsx(r.SectionCard,{children:e.jsx("img",{src:h,alt:""})}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Simple definition"})]}),e.jsx("p",{children:"The periodic table is a table of all known chemical elements. Each element is placed according to its atomic number, which is the number of protons in its nucleus."}),e.jsx("p",{children:"Elements with similar chemical behavior appear in similar columns, which makes the table extremely useful for learning patterns instead of memorizing isolated facts like a sleep deprived goblin."})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"How the table is arranged"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Elements are arranged by increasing atomic number"}),e.jsx("li",{children:"Horizontal rows are called periods"}),e.jsx("li",{children:"Vertical columns are called groups"}),e.jsx("li",{children:"Elements in the same group often have similar outer electron patterns"}),e.jsx("li",{children:"Similar electron patterns often lead to similar chemical properties"})]})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Why it matters"})]}),e.jsx("p",{children:"The periodic table helps predict how elements behave, combine, react, and form compounds."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Useful in chemistry"}),e.jsx("li",{children:"Useful in physics and materials science"}),e.jsx("li",{children:"Important in electronics and engineering"}),e.jsx("li",{children:"Helpful in medicine, energy, and manufacturing"})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Periods and groups"})]}),e.jsxs("div",{className:"compareGrid",children:[e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"Periods"}),e.jsx("p",{children:"Periods are the horizontal rows. Moving from left to right across a period changes the atomic number one by one."}),e.jsx("span",{children:"Example: Elements in the same period may have the same number of electron shells."})]}),e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"Groups"}),e.jsx("p",{children:"Groups are the vertical columns. Elements in the same group often behave in similar ways because their outer electron arrangement is similar."}),e.jsx("span",{children:"Example: Group 1 elements are very reactive metals."})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"Major classifications"})]}),e.jsx(r.CardGrid,{children:x.map(a=>e.jsxs("article",{className:"miniCard",children:[e.jsx("h3",{children:a.title}),e.jsx("p",{children:a.text})]},a.title))})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(c,{})}),e.jsx("h2",{children:"Blocks of the periodic table"})]}),e.jsx("p",{children:"The periodic table is also divided into blocks based on the type of orbital being filled by electrons. This is one of the deep patterns behind the layout."}),e.jsx(r.CardGrid,{children:u.map(a=>e.jsxs("article",{className:"miniCard",children:[e.jsx("h3",{children:a.title}),e.jsx("p",{children:a.text})]},a.title))})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(p,{})}),e.jsx("h2",{children:"Examples of familiar elements"})]}),e.jsx(r.ElementGrid,{children:g.map(a=>e.jsxs("article",{className:"elementCard",children:[e.jsx("div",{className:"symbol",children:a.symbol}),e.jsx("h3",{children:a.name}),e.jsx("p",{children:a.note})]},a.symbol))})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Why the periodic table is powerful"})]}),e.jsx("p",{children:"The real beauty of the periodic table is that it is not just a list. It is a pattern system. Once you understand that elements are arranged by atomic number and grouped by recurring properties, the table becomes a tool for prediction."}),e.jsxs("ul",{children:[e.jsx("li",{children:"You can compare reactivity"}),e.jsx("li",{children:"You can identify metals and nonmetals"}),e.jsx("li",{children:"You can understand bonding trends"}),e.jsx("li",{children:"You can connect chemistry to electronics, energy, and materials"})]})]}),e.jsxs(r.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"The periodic table is a structured arrangement of chemical elements based on atomic number. It reveals patterns in chemical behavior and helps us understand matter in a more organized way. It is one of the most important reference systems in science."})]})]});export{j as default};
