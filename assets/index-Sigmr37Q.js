import{c as i,j as e,f as n,a as o,C as t,m as d,l as a,K as l,D as c,E as p,w as h,ah as x}from"./index-D1C0sqWO.js";import{S as g}from"./index-DpzaY4xy.js";const r={Wrapper:i.div`
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
            font-size: clamp(28px, 4vw, 46px);
            line-height: 1.04;
            letter-spacing: -0.04em;
            margin-bottom: 14px;
        }

        .lead {
            max-width: 860px;
            font-size: 16px;
            line-height: 1.85;
            color: var(--color-text-secondary);
        }
    `,WarningCard:i.section`
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

        .iconWrap.warning {
            background: var(--color-surface-3);
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

        p {
            color: var(--color-text-secondary);
            font-size: 15px;
            line-height: 1.85;
        }

        p + p {
            margin-top: 12px;
        }

        .sectionIntro {
            margin-bottom: 16px;
        }

        .stepsBox {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: 6px;
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

        .tipBox {
            margin-top: 16px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 90%,
                transparent
            );
            padding: 16px;
        }

        .tipBox strong {
            display: block;
            margin-bottom: 6px;
        }

        .tipBox p {
            margin: 0;
            font-size: 14px;
        }

        .compareGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 6px;

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

        .compareCard.safer {
            box-shadow: inset 3px 0 0 var(--color-text-primary);
        }

        .compareCard.risky {
            box-shadow: inset 3px 0 0 var(--color-text-muted);
        }

        .compareCard h3 {
            font-size: 18px;
            line-height: 1.15;
            margin-bottom: 8px;
        }

        .compareCard p {
            margin: 0;
            font-size: 14px;
        }

        .serviceGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 10px;

            @media (max-width: 860px) {
                grid-template-columns: 1fr;
            }
        }

        .serviceCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
            transition:
                transform var(--transition-fast),
                border-color var(--transition-fast),
                background var(--transition-fast);
        }

        .serviceCard:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-surface-3) 94%,
                transparent
            );
        }

        .serviceCard.security {
            box-shadow: inset 3px 0 0 var(--color-text-primary);
        }

        .serviceTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            margin-bottom: 10px;
        }

        .serviceTop h3 {
            font-size: 17px;
            line-height: 1.2;
        }

        .tag {
            min-height: 28px;
            padding: 0 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-3);
            color: var(--color-text-secondary);
            font-size: 11px;
            font-weight: 800;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .serviceCard p {
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

        .creditBox {
            margin-top: 14px;
            display: inline-flex;
            flex-direction: column;
            gap: 4px;
            padding: 14px 16px;
            border-radius: var(--radius-md);
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
        }

        .creditBox span {
            color: var(--color-text-muted);
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.06em;
        }

        .creditBox strong {
            font-size: 15px;
            line-height: 1.3;
        }
    `},m=[{name:"Alerter",note:"Can usually be set to Manual on many personal systems."},{name:"Computer Browser",note:"Often not needed on simple single-PC setups."},{name:"Distributed Link Tracking Client",note:"If you have NTFS partitions and rely on linked files, review before changing."},{name:"Fast User Switching Compatibility",note:"Changing this may remove the Switch User option."},{name:"Indexing Service",note:"Can reduce background activity if you do not need file indexing."},{name:"Internet Connection Firewall / Internet Connection Sharing",note:"Review carefully if the machine shares internet or uses XP firewall features."},{name:"Messenger",note:"Old Windows service, not the same thing as modern chat apps."},{name:"Remote Registry",note:"Often recommended to disable for security reasons on old systems.",highlight:"security"},{name:"Secondary Logon",note:"May be unnecessary on some home systems depending on usage."},{name:"Server",note:"Review before changing if the machine shares files or printers."},{name:"System Restore",note:"Only consider changing this if you do not use System Restore."},{name:"TCP/IP NetBIOS Helper",note:"May be unnecessary in some environments, but depends on old network usage."},{name:"Uninterruptible Power Supply",note:"Only relevant if the machine actually uses a UPS device."},{name:"Upload Manager",note:"Can often be set to Manual on many systems."},{name:"Wireless Zero Configuration",note:"Needed for many XP-era wireless setups, so review carefully before changing."}],f=()=>e.jsxs(r.Wrapper,{className:"topicWrapper",children:[e.jsxs(r.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(n,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(o,{}),"Original topic: July 21, 2012"]}),e.jsx(g,{})]}),e.jsx("h1",{children:"Windows XP Services Configuration: Turn Off / Disable Unnecessary Services to Optimize Performance"}),e.jsxs("p",{className:"lead",children:["This archive note was originally about reducing unnecessary background services in Windows XP to improve performance. The main practical idea was simple: review services that are not needed on a particular machine and set them to"," ",e.jsx("strong",{children:"Manual"})," instead of leaving everything running all the time."]})]}),e.jsxs(r.WarningCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap warning",children:e.jsx(t,{})}),e.jsx("h2",{children:"Important historical context"})]}),e.jsxs("p",{children:["This topic is specific to ",e.jsx("strong",{children:"Windows XP"}),", which is now a very old operating system. The advice here should be understood as an archive-era optimization note, not as a general recommendation for modern Windows versions."]}),e.jsx("p",{children:"Services are not random decoration. Many are tied to system features, networking, device support, user switching, restore tools, and security behavior. So changing services without understanding them can break things in weird and deeply annoying ways."})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"Main idea"})]}),e.jsx("p",{children:"A fresh XP installation could run many background services. Some systems did not need all of them, especially home machines with simpler usage. Reducing unnecessary background activity could sometimes make the system feel lighter."}),e.jsx("p",{children:'The key point in the original post was not "blindly disable everything". It was "review what you do not use and prefer Manual where safe".'})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(a,{})}),e.jsx("h2",{children:"Best rule from the original note"})]}),e.jsxs("p",{children:["Prefer setting a service to ",e.jsx("strong",{children:"Manual"})," ","instead of ",e.jsx("strong",{children:"Disabled"}),"."]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Manual means Windows can still start the service if needed"}),e.jsx("li",{children:"Disabled means Windows cannot start it even when it wants to"}),e.jsx("li",{children:"Manual is usually safer than fully disabling things"})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"How the original guide suggested opening Services"})]}),e.jsxs("div",{className:"stepsBox",children:[e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"stepNo",children:"1"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Right-click My Computer"}),e.jsxs("p",{children:["Select ",e.jsx("strong",{children:"Manage"}),"."]})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"stepNo",children:"2"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Open Services"}),e.jsxs("p",{children:["Go to ",e.jsx("strong",{children:"Services and Applications"})," ","and then ",e.jsx("strong",{children:"Services"}),"."]})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"stepNo",children:"3"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Open a service entry"}),e.jsx("p",{children:"Double-click the service and review its startup type."})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"stepNo",children:"4"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Prefer Manual"}),e.jsx("p",{children:"The original note strongly recommended Manual instead of Disabled."})]})]})]}),e.jsxs("div",{className:"tipBox",children:[e.jsx("strong",{children:"Alternate path mentioned in the original post:"}),e.jsx("p",{children:"You could also open it through Administrative Tools and then Computer Management."})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(c,{})}),e.jsx("h2",{children:"Manual vs Disabled"})]}),e.jsxs("div",{className:"compareGrid",children:[e.jsxs("div",{className:"compareCard safer",children:[e.jsx("h3",{children:"Manual"}),e.jsx("p",{children:"Safer choice for many cases. The service does not always run automatically, but Windows can still start it when required."})]}),e.jsxs("div",{className:"compareCard risky",children:[e.jsx("h3",{children:"Disabled"}),e.jsx("p",{children:"Riskier choice. If Windows or some feature needs the service, it may fail and produce errors because the service is blocked from starting."})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(p,{})}),e.jsx("h2",{children:"Services mentioned in the original archive post"})]}),e.jsx("p",{className:"sectionIntro",children:"These were the services listed in the original note as candidates to review and often set to Manual, depending on the system and the way it was used."}),e.jsx("div",{className:"serviceGrid",children:m.map(s=>e.jsxs("article",{className:`serviceCard ${s.highlight?s.highlight:""}`,children:[e.jsxs("div",{className:"serviceTop",children:[e.jsx("h3",{children:s.name}),s.highlight==="security"?e.jsx("span",{className:"tag",children:"Security note"}):e.jsx("span",{className:"tag",children:"Review"})]}),e.jsx("p",{children:s.note})]},s.name))})]}),e.jsxs(r.Grid,{children:[e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(h,{})}),e.jsx("h2",{children:"When this kind of tuning made sense"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Older hardware with limited RAM"}),e.jsx("li",{children:"Single-user personal systems"}),e.jsx("li",{children:"Machines not using many network-sharing features"}),e.jsx("li",{children:"Systems where every little bit of background load mattered"})]})]}),e.jsxs(r.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(x,{})}),e.jsx("h2",{children:"When caution was required"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"File sharing or printer sharing was in use"}),e.jsx("li",{children:"Wireless networking depended on XP services"}),e.jsx("li",{children:"System Restore was actually needed"}),e.jsx("li",{children:"Remote or administrative features were being used"}),e.jsx("li",{children:"Special hardware or enterprise setup existed"})]})]})]}),e.jsxs(r.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(a,{})}),e.jsx("h2",{children:"Refactored conclusion"})]}),e.jsx("p",{children:"The useful principle in this old XP tuning advice is still understandable: do not let unnecessary background services consume system resources without reason. But the safer and smarter approach is always to understand what a service does before changing it."}),e.jsxs("p",{children:["In the original note, the strongest practical advice was to use ",e.jsx("strong",{children:"Manual"})," rather than"," ",e.jsx("strong",{children:"Disabled"}),", because Manual keeps Windows from painting itself into a corner."]})]})]});export{f as default};
