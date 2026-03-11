import{c as r,W as n,j as e,f as d,a as l,q as c,X as p,D as h,l as a,Y as o,M as x,o as m}from"./index-D1C0sqWO.js";import{S as g}from"./index-DpzaY4xy.js";const s={Wrapper:r.div`
        width: 100%;
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 24px 20px 40px;
        display: flex;
        flex-direction: column;
        gap: 18px;
    `,HeroCard:r.section`
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
    `,SectionCard:r.section`
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

        .pillGrid {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 16px;
        }

        .pill {
            min-height: 36px;
            padding: 0 14px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-primary);
            font-size: 13px;
            font-weight: 800;
        }

        .stepsList {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: 16px;
        }

        .stepCard {
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
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: var(--color-text-primary);
            color: var(--color-text-inverse);
            font-size: 14px;
            font-weight: 900;
            line-height: 1;
        }

        .stepContent h3 {
            margin-bottom: 6px;
        }

        .stepContent p {
            margin: 0;
            font-size: 14px;
        }
    `,Grid:r.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;

        @media (max-width: 820px) {
            grid-template-columns: 1fr;
        }
    `,InfoCard:r.article`
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

        h3 {
            font-size: 15px;
            margin-bottom: 6px;
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

        .miniCards {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .miniCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            padding: 14px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
        }

        .miniCard p {
            margin: 0;
        }
    `,FooterNote:r.section`
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
    `};function u(i){return n({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 112a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56z"},child:[]},{tag:"path",attr:{d:"m432 112.8-.45.12-.42.13c-1 .28-2 .58-3 .89-18.61 5.46-108.93 30.92-172.56 30.92-59.13 0-141.28-22-167.56-29.47a73.79 73.79 0 0 0-8-2.58c-19-5-32 14.3-32 31.94 0 17.47 15.7 25.79 31.55 31.76v.28l95.22 29.74c9.73 3.73 12.33 7.54 13.6 10.84 4.13 10.59.83 31.56-.34 38.88l-5.8 45-32.19 176.19q-.15.72-.27 1.47l-.23 1.27c-2.32 16.15 9.54 31.82 32 31.82 19.6 0 28.25-13.53 32-31.94s28-157.57 42-157.57 42.84 157.57 42.84 157.57c3.75 18.41 12.4 31.94 32 31.94 22.52 0 34.38-15.74 32-31.94a57.17 57.17 0 0 0-.76-4.06L329 301.27l-5.79-45c-4.19-26.21-.82-34.87.32-36.9a1.09 1.09 0 0 0 .08-.15c1.08-2 6-6.48 17.48-10.79l89.28-31.21a16.9 16.9 0 0 0 1.62-.52c16-6 32-14.3 32-31.93S451 107.81 432 112.8z"},child:[]}]})(i)}const b=["Accessibility","Internationalization","Device independence","Mobile access","Quality assurance"],f=[{title:"Working Draft",text:"A new idea starts as a draft prepared by a Working Group. It is still flexible and open to change."},{title:"Last Call",text:"The draft is shared more broadly so people can review it, raise issues, and suggest improvements."},{title:"Candidate Recommendation",text:"The group now wants real implementation experience to see whether the specification works in practice."},{title:"Proposed Recommendation",text:"After successful review and implementation feedback, the document moves to final internal review."},{title:"Recommendation",text:"This is the final W3C standard-level result. At this point, W3C recommends that people implement it."}],v=["Members can propose ideas and technologies for future standards","Members can participate in Working Groups","Members can help review and shape upcoming Web technologies","Members get access to discussions, drafts, and member-focused collaboration","Members can influence how the future Web is built"],j=[{title:"HTML and XHTML",text:"W3C has guided the development of markup languages used to structure Web pages and documents."},{title:"CSS",text:"W3C has played a major role in the development of Cascading Style Sheets used to control presentation and layout."},{title:"Accessibility",text:"W3C's Web Accessibility Initiative helps make the Web more usable for people with disabilities."}],w=()=>e.jsxs(s.Wrapper,{className:"topicWrapper",children:[e.jsxs(s.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(d,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(l,{}),"Original topic: September 10, 2012"]}),e.jsx(g,{})]}),e.jsx("h1",{children:"What is W3C?"}),e.jsxs("p",{className:"lead",children:["W3C stands for the"," ",e.jsx("strong",{children:"World Wide Web Consortium"}),". It is the main standards organization that helps guide how the Web grows. Its role is to create specifications, recommendations, and guidelines so that the Web remains open, consistent, accessible, and usable across different devices and platforms."]})]}),e.jsxs(s.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(c,{})}),e.jsx("h2",{children:"Simple definition"})]}),e.jsx("p",{children:"W3C is the organization that develops many of the standards behind the modern Web. These standards help browsers, websites, tools, and developers work from a shared set of rules instead of everyone inventing their own private universe."}),e.jsx("p",{children:"In practical terms, W3C helps define how Web technologies such as HTML, CSS, accessibility guidelines, and other Web specifications should work."})]}),e.jsxs(s.Grid,{children:[e.jsxs(s.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(p,{})}),e.jsx("h2",{children:"The birth of W3C"})]}),e.jsxs("p",{children:["W3C was founded in ",e.jsx("strong",{children:"1994"})," by"," ",e.jsx("strong",{children:"Tim Berners-Lee"}),", the inventor of the World Wide Web, at MIT."]}),e.jsx("p",{children:"Its mission was to support the long-term growth of the Web by developing open protocols and guidelines."})]}),e.jsxs(s.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(h,{})}),e.jsx("h2",{children:"Why W3C matters"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"It helps keep the Web open instead of fragmented"}),e.jsx("li",{children:"It improves compatibility across browsers and devices"}),e.jsx("li",{children:"It encourages accessible and usable Web design"}),e.jsx("li",{children:"It provides shared standards for developers and tools"})]})]})]}),e.jsxs(s.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(a,{})}),e.jsx("h2",{children:"Guiding principles"})]}),e.jsx("p",{children:"W3C does not just create specifications randomly. Its work is guided by a set of principles that aim to keep the Web useful for everyone, not just for one company, one browser, or one device type."}),e.jsx("div",{className:"pillGrid",children:b.map(i=>e.jsx("span",{className:"pill",children:i},i))})]}),e.jsxs(s.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Who participates in W3C?"})]}),e.jsx("p",{children:"W3C is not just one person writing Web rules in a secret cave. It includes companies, organizations, experts, and technical groups working together."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Large technology companies"}),e.jsx("li",{children:"Smaller companies and industry groups"}),e.jsx("li",{children:"Technical experts and invited specialists"}),e.jsx("li",{children:"Working Groups, Interest Groups, and Coordination Groups"})]}),e.jsx("p",{children:"Individuals usually do not join in the same way companies do, but they can still contribute through mailing lists, feedback, workshops, invited expert roles, and public review processes."})]}),e.jsxs(s.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(x,{})}),e.jsx("h2",{children:"How W3C standards are created"})]}),e.jsx("p",{children:"W3C standards go through a structured approval path. This is important because a Web standard should not be rushed like a random feature tossed into the void at 2 a.m."}),e.jsx("div",{className:"stepsList",children:f.map((i,t)=>e.jsxs("div",{className:"stepCard",children:[e.jsx("div",{className:"stepNo",children:t+1}),e.jsxs("div",{className:"stepContent",children:[e.jsx("h3",{children:i.title}),e.jsx("p",{children:i.text})]})]},i.title))})]}),e.jsxs(s.Grid,{children:[e.jsxs(s.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(m,{})}),e.jsx("h2",{children:"Examples of W3C impact"})]}),e.jsx("div",{className:"miniCards",children:j.map(i=>e.jsxs("div",{className:"miniCard",children:[e.jsx("h3",{children:i.title}),e.jsx("p",{children:i.text})]},i.title))})]}),e.jsxs(s.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(u,{})}),e.jsx("h2",{children:"Accessibility and W3C"})]}),e.jsx("p",{children:"One of W3C's most important areas is accessibility. Through the Web Accessibility Initiative, W3C helps create guidelines that make the Web more usable for people with disabilities."}),e.jsxs("ul",{children:[e.jsx("li",{children:"WCAG for Web content accessibility"}),e.jsx("li",{children:"ATAG for authoring tool accessibility"}),e.jsx("li",{children:"Guidance for accessible content and tools"})]})]})]}),e.jsxs(s.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"Benefits of W3C membership"})]}),e.jsx("p",{children:"Organizations that become W3C members can take part more directly in shaping future Web standards."}),e.jsx("ul",{children:v.map(i=>e.jsx("li",{children:i},i))})]}),e.jsxs(s.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(a,{})}),e.jsx("h2",{children:"Best practical conclusion"})]}),e.jsx("p",{children:"W3C is the standards body that helps the Web remain open, interoperable, and future-friendly. It has shaped many core technologies used every day, including HTML, CSS, and accessibility guidelines."}),e.jsx("p",{children:"Without shared standards, the Web would become a messy patchwork where sites behaved differently everywhere. W3C exists to reduce that chaos and guide the Web toward consistency and long-term growth."})]}),e.jsxs(s.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"W3C, the World Wide Web Consortium, is the organization that develops important Web standards and guidelines. It was founded by Tim Berners-Lee and plays a major role in technologies such as HTML, CSS, and accessibility standards. Its job is to help the Web stay open, stable, useful, and accessible for everyone."})]})]});export{w as default};
