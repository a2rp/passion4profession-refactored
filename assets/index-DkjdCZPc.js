import{c as i,j as e,a0 as s,a as l,a2 as d,l as o,a3 as n,m as h,a4 as p,A as t,a5 as x,a6 as c}from"./index-DR_KT_2c.js";import{S as m}from"./index-D4exoH3I.js";const r={Wrapper:i.div`
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
            margin-bottom: 12px;
        }

        .subLead {
            max-width: 860px;
            font-size: 15px;
            line-height: 1.8;
            color: var(--color-text-muted);
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
            line-height: 1.25;
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

        .atomGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
            margin: 16px 0;

            @media (max-width: 760px) {
                grid-template-columns: 1fr;
            }
        }

        .atomItem {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 16px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
        }

        .atomBadge {
            width: 36px;
            height: 36px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            font-size: 16px;
            font-weight: 900;
            line-height: 1;
        }

        .atomBadge.positive {
            background: var(--color-text-primary);
            color: var(--color-text-inverse);
        }

        .atomBadge.neutral {
            background: var(--color-surface-3);
            color: var(--color-text-primary);
        }

        .atomBadge.negative {
            background: var(--color-surface);
            color: var(--color-text-primary);
        }

        .formulaBox {
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

        .formulaBox.compact {
            max-width: 460px;
        }

        .formula {
            font-size: 22px;
            font-weight: 900;
            line-height: 1.15;
            color: var(--color-text-primary);
            margin-bottom: 10px;
            letter-spacing: -0.02em;
        }

        .formulaBox ul {
            margin-top: 0;
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

        .compareCard h3 {
            margin-bottom: 8px;
        }

        .compareCard p {
            margin: 0;
            font-size: 14px;
        }

        .exampleCallout {
            margin-top: 16px;
            padding: 16px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: linear-gradient(
                180deg,
                var(--color-surface-2),
                var(--color-surface-3)
            );
        }

        .exampleCallout strong {
            display: block;
            margin-bottom: 6px;
        }

        .exampleCallout p {
            margin: 0;
        }

        .exampleGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;

            @media (max-width: 860px) {
                grid-template-columns: 1fr;
            }
        }

        .exampleCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            padding: 16px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
        }

        .exampleCard h3 {
            margin-bottom: 8px;
        }

        .exampleCard p {
            margin: 0;
            font-size: 14px;
        }
    `,KeyTermSection:i.section`
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
        }

        .termGrid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 14px;

            @media (max-width: 980px) {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            @media (max-width: 640px) {
                grid-template-columns: 1fr;
            }
        }

        .termCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 18px;
        }

        .termIcon {
            width: 40px;
            height: 40px;
            margin-bottom: 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 999px;
            background: var(--color-surface-3);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
        }

        .termIcon svg {
            width: 18px;
            height: 18px;
        }

        .termCard h3 {
            font-size: 17px;
            line-height: 1.2;
            margin-bottom: 8px;
        }

        .termCard p {
            color: var(--color-text-secondary);
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

        .formulaBox {
            margin-top: 14px;
            padding: 14px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
        }

        .formula {
            font-size: 20px;
            font-weight: 900;
            color: var(--color-text-primary);
            margin: 0;
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
    `},g=[{title:"Charge",value:"A basic electrical property of matter. Protons are positive and electrons are negative.",icon:e.jsx(n,{})},{title:"Voltage",value:"The electrical push or potential difference between two points.",icon:e.jsx(s,{})},{title:"Current",value:"The flow of electric charge through a conductor.",icon:e.jsx(t,{})},{title:"Resistance",value:"The opposition to current flow in a material.",icon:e.jsx(c,{})}],u=[{title:"Static electricity",text:"Rubbing materials together can move electrons from one object to another, creating charge imbalance."},{title:"Battery",text:"Chemical reactions inside a battery separate charges and maintain a voltage difference."},{title:"Light bulb",text:"Current flowing through a bulb converts electrical energy into light and heat."}],b=()=>e.jsxs(r.Wrapper,{className:"topicWrapper",children:[e.jsxs(r.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(s,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(l,{}),"Original topic: August 20, 2012"]}),e.jsx(m,{})]}),e.jsx("h1",{children:"Introduction to Electricity"}),e.jsx("p",{className:"lead",children:"Electricity is one of the most important ideas in science and engineering. It explains how charge behaves, how current flows, why voltage matters, why resistance slows current, and how electrical power does useful work in real devices."}),e.jsx("p",{className:"subLead",children:"This page turns the old archive note into a cleaner and more structured explanation of the core ideas: atom, charge, electric balance, static electricity, voltage, current, resistance, power, and Ohm's law."})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"The atom"})]}),e.jsx("p",{children:"Everything around us is made of atoms. Atoms are the basic building blocks of matter. An atom contains a nucleus at the center, and that nucleus contains protons and usually neutrons. Electrons exist around the nucleus."}),e.jsxs("div",{className:"atomGrid",children:[e.jsxs("div",{className:"atomItem",children:[e.jsx("span",{className:"atomBadge positive",children:"+"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Proton"}),e.jsx("p",{children:"Has a positive charge."})]})]}),e.jsxs("div",{className:"atomItem",children:[e.jsx("span",{className:"atomBadge neutral",children:"0"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Neutron"}),e.jsx("p",{children:"Has no electric charge."})]})]}),e.jsxs("div",{className:"atomItem",children:[e.jsx("span",{className:"atomBadge negative",children:"-"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Electron"}),e.jsx("p",{children:"Has a negative charge."})]})]})]}),e.jsx("p",{children:"In a stable atom, the number of electrons is usually equal to the number of protons. That keeps the atom electrically balanced overall."})]}),e.jsxs(r.KeyTermSection,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Core electrical terms"})]}),e.jsx("div",{className:"termGrid",children:g.map(a=>e.jsxs("article",{className:"termCard",children:[e.jsx("div",{className:"termIcon",children:a.icon}),e.jsx("h3",{children:a.title}),e.jsx("p",{children:a.value})]},a.title))})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"Electric charge"})]}),e.jsx("p",{children:"Charge is the reason electric forces exist. Opposite charges attract, and like charges repel."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Proton and electron attract each other"}),e.jsx("li",{children:"Proton and proton repel each other"}),e.jsx("li",{children:"Electron and electron repel each other"})]}),e.jsx("p",{children:"This attraction and repulsion is one of the most fundamental behaviors in electricity."})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(h,{})}),e.jsx("h2",{children:"Electric balance"})]}),e.jsx("p",{children:"Most ordinary matter has an equal number of protons and electrons, so it has no overall charge."}),e.jsx("p",{children:"That does not mean charge is absent. It means positive and negative charges are balanced. The charges are still there, just not showing up as a net charge."})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(p,{})}),e.jsx("h2",{children:"Static electricity"})]}),e.jsx("p",{children:"Static electricity happens when electrons move from one object to another and create an imbalance of charge. One object may become overall positive, while another becomes overall negative."}),e.jsx("p",{children:"A simple example is rubbing two materials together. Electrons can be transferred, and the objects may then attract or repel each other depending on their charge."}),e.jsxs("div",{className:"exampleCallout",children:[e.jsx("strong",{children:"Example"}),e.jsx("p",{children:"If electrons move away from a glass rod and onto silk, the rod becomes more positive and the silk becomes more negative."})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"Measuring charge"})]}),e.jsxs("p",{children:["Electric charge is measured in ",e.jsx("strong",{children:"coulombs"}),". One coulomb is a large quantity of charge at the microscopic level because electrons are extremely tiny."]}),e.jsx("p",{children:"Coulomb's law describes the electric force between charged objects. It says the force becomes stronger when charges are larger and weaker when the distance between them increases."}),e.jsxs("div",{className:"formulaBox",children:[e.jsx("div",{className:"formula",children:"F = kqq' / r²"}),e.jsxs("ul",{children:[e.jsx("li",{children:"F = force"}),e.jsx("li",{children:"q and q' = charges"}),e.jsx("li",{children:"r = distance between them"}),e.jsx("li",{children:"k = Coulomb constant"})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Voltage"})]}),e.jsx("p",{children:"Voltage is the electrical potential difference between two points. It can be thought of as the push that encourages charge to move."}),e.jsx("p",{children:"If one place has more charge imbalance than another, a voltage exists between them. Batteries create this kind of difference between their terminals."}),e.jsxs("div",{className:"compareGrid",children:[e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"Simple idea"}),e.jsx("p",{children:"Voltage is the electrical push or pressure."})]}),e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"Mathematical idea"}),e.jsx("p",{children:"1 volt = 1 joule of energy per 1 coulomb of charge."})]})]}),e.jsx("div",{className:"formulaBox compact",children:e.jsx("div",{className:"formula",children:"1 Volt = 1 Joule / 1 Coulomb"})})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"Electric current"})]}),e.jsx("p",{children:"Electric current is the flow of electric charge. In many conductors, especially metals, electrons are able to move more freely than in insulating materials."}),e.jsx("p",{children:"When a conductor is connected across a voltage difference, charges begin to move. That movement is current."}),e.jsx("div",{className:"formulaBox compact",children:e.jsx("div",{className:"formula",children:"1 ampere = 1 coulomb per second"})})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(x,{})}),e.jsx("h2",{children:"Batteries and continuous current"})]}),e.jsx("p",{children:"If charge simply flowed once and stopped, electrical devices would be almost useless. Batteries solve this by using chemical reactions to keep separating charges and maintain a voltage difference."}),e.jsx("p",{children:"That is why a flashlight can keep glowing instead of working for a tiny fraction of a second. The battery keeps supplying charge until its chemical energy runs out."})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(c,{})}),e.jsx("h2",{children:"Resistance"})]}),e.jsx("p",{children:"Resistance is the opposition to current flow. When electrons move through a conductor, they interact with atoms in the material and lose some energy."}),e.jsxs("p",{children:["This is one reason wires and components can heat up. Resistance is measured in ",e.jsx("strong",{children:"ohms"}),"."]})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(s,{})}),e.jsx("h2",{children:"Power"})]}),e.jsx("p",{children:"Electrical power tells us how fast electrical energy is being used or converted into another form such as light, motion, or heat."}),e.jsx("div",{className:"formulaBox compact",children:e.jsx("div",{className:"formula",children:"P = I × V"})}),e.jsxs("p",{children:["Power is measured in ",e.jsx("strong",{children:"watts"}),"."]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Ohm's law"})]}),e.jsx("p",{children:"Ohm's law connects voltage, current, and resistance. It is one of the most important basic relationships in electricity."}),e.jsxs("div",{className:"formulaBox",children:[e.jsx("div",{className:"formula",children:"V = I × R"}),e.jsxs("ul",{children:[e.jsx("li",{children:"V = voltage in volts"}),e.jsx("li",{children:"I = current in amperes"}),e.jsx("li",{children:"R = resistance in ohms"})]})]}),e.jsxs("div",{className:"exampleCallout",children:[e.jsx("strong",{children:"Example"}),e.jsx("p",{children:"If you know the voltage and resistance, you can find the current. If you know current and resistance, you can find voltage. This law is the little Swiss army knife of simple circuit calculations."})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Real-world examples"})]}),e.jsx("div",{className:"exampleGrid",children:u.map(a=>e.jsxs("article",{className:"exampleCard",children:[e.jsx("h3",{children:a.title}),e.jsx("p",{children:a.text})]},a.title))})]}),e.jsxs(r.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"Electricity starts with charge. A charge imbalance creates voltage. Voltage can drive current through a conductor. Resistance opposes that current. Power describes how fast energy is used, and Ohm's law helps connect the main ideas mathematically."})]})]});export{b as default};
