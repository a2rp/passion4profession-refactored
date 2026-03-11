import{c as s,j as e,f as o,a as h,l as i,M as n,m as x,q as t,O as l,D as d,k as c,P as m}from"./index-D1C0sqWO.js";import{S as g}from"./index-DpzaY4xy.js";const a={Wrapper:s.div`
        width: 100%;
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 24px 20px 40px;
        display: flex;
        flex-direction: column;
        gap: 18px;
    `,HeroCard:s.section`
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
    `,SectionCard:s.section`
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

        .layersGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
            margin-top: 8px;

            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }
        }

        .layerCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-lg);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 18px;
        }

        .layerTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            margin-bottom: 14px;
        }

        .layerNumber {
            width: 42px;
            height: 42px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: var(--color-text-primary);
            color: var(--color-text-inverse);
            font-size: 16px;
            font-weight: 900;
            line-height: 1;
        }

        .layerIcon {
            width: 42px;
            height: 42px;
            border-radius: var(--radius-sm);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: var(--color-surface-3);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
        }

        .layerIcon svg {
            width: 18px;
            height: 18px;
        }

        .layerCard h3 {
            font-size: 20px;
            margin-bottom: 10px;
        }

        .purpose {
            margin-bottom: 12px;
        }

        .miniBlock + .miniBlock {
            margin-top: 12px;
        }

        .miniBlock strong {
            display: block;
            margin-bottom: 6px;
            font-size: 13px;
        }

        .miniBlock p {
            font-size: 14px;
            line-height: 1.75;
            margin: 0;
        }

        .deviceGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 8px;

            @media (max-width: 760px) {
                grid-template-columns: 1fr;
            }
        }

        .deviceCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .deviceCard h3 {
            margin-bottom: 8px;
        }

        .deviceCard p {
            margin: 0;
            font-size: 14px;
            line-height: 1.75;
        }
    `,Grid:s.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;

        @media (max-width: 820px) {
            grid-template-columns: 1fr;
        }
    `,InfoCard:s.article`
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

        .flowList {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: 14px;
        }

        .flowItem {
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

        .flowNo {
            width: 32px;
            height: 32px;
            flex-shrink: 0;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: var(--color-text-primary);
            color: var(--color-text-inverse);
            font-size: 13px;
            font-weight: 900;
            line-height: 1;
        }

        .flowItem p {
            margin: 0;
        }
    `,FooterNote:s.section`
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
    `},u=[{number:7,name:"Application",icon:e.jsx(t,{}),purpose:"Provides network services directly to user-facing applications.",examples:"HTTP, HTTPS, FTP, SMTP, DNS, browsers, email clients, chat apps",analogy:"This is the part the user sees and interacts with, like opening a browser or sending an email."},{number:6,name:"Presentation",icon:e.jsx(c,{}),purpose:"Handles data formatting, translation, encryption, and compression.",examples:"SSL/TLS concepts, JPEG, PNG, ASCII, UTF-8, data serialization",analogy:"It makes sure both sides understand the data in the same format."},{number:5,name:"Session",icon:e.jsx(i,{}),purpose:"Creates, manages, and ends communication sessions between systems.",examples:"Session establishment, checkpoints, reconnect behavior",analogy:"It is like managing a conversation so both sides know when it starts, continues, and ends."},{number:4,name:"Transport",icon:e.jsx(d,{}),purpose:"Provides end-to-end data delivery, reliability, segmentation, and flow control.",examples:"TCP, UDP, ports, retransmission, sequencing",analogy:"It makes sure the message reaches the correct application, and in TCP's case, reaches reliably."},{number:3,name:"Network",icon:e.jsx(n,{}),purpose:"Handles logical addressing and routing data between networks.",examples:"IP addresses, routers, packet forwarding, routing paths",analogy:"It decides where the data should go across different networks."},{number:2,name:"Data Link",icon:e.jsx(l,{}),purpose:"Handles framing, MAC addressing, local delivery, and error detection on the same network segment.",examples:"Ethernet frames, switches, MAC addresses, ARP-related local context",analogy:"It helps devices communicate correctly on the same local network."},{number:1,name:"Physical",icon:e.jsx(m,{}),purpose:"Transmits raw bits over the actual physical medium.",examples:"Cables, signals, radio waves, connectors, electrical and optical transmission",analogy:"This is the actual wire, signal, or radio path carrying the bits."}],b=["You type a website address in your browser","The application layer handles the user-facing request","The presentation layer helps with format and encryption-related handling","The session layer manages the communication session","The transport layer breaks data into segments and uses ports","The network layer adds IP addressing and routing logic","The data link layer prepares frames for the local network","The physical layer sends bits through cable or wireless signal"],f=[{title:"Router",description:"Mostly associated with the Network layer because it forwards packets using IP addresses."},{title:"Switch",description:"Mostly associated with the Data Link layer because it uses MAC addresses inside a local network."},{title:"Hub",description:"Associated with the Physical layer because it simply repeats signals without intelligent forwarding."},{title:"Browser or email client",description:"Seen at the Application layer because this is where the user interacts with network services."}],v=()=>e.jsxs(a.Wrapper,{className:"topicWrapper",children:[e.jsxs(a.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(o,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(h,{}),"Original topic: November 25, 2012"]}),e.jsx(g,{})]}),e.jsx("h1",{children:"OSI Model"}),e.jsx("p",{className:"lead",children:"The OSI Model, or Open Systems Interconnection Model, is a conceptual framework that explains how data moves from one computer to another through a network. It breaks networking into 7 layers so each part of communication can be understood more clearly."})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(i,{})}),e.jsx("h2",{children:"Simple definition"})]}),e.jsx("p",{children:"The OSI Model is not a physical machine or a software package. It is a learning model. It helps us understand what each part of network communication is responsible for."}),e.jsx("p",{children:"Instead of seeing networking as one giant tangled noodle monster, the OSI Model divides it into 7 layers. Each layer has its own job and works with the layers above and below it."})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(o,{})}),e.jsx("h2",{children:"The 7 layers of the OSI Model"})]}),e.jsx("div",{className:"layersGrid",children:u.map(r=>e.jsxs("article",{className:"layerCard",children:[e.jsxs("div",{className:"layerTop",children:[e.jsx("div",{className:"layerNumber",children:r.number}),e.jsx("div",{className:"layerIcon",children:r.icon})]}),e.jsx("h3",{children:r.name}),e.jsx("p",{className:"purpose",children:r.purpose}),e.jsxs("div",{className:"miniBlock",children:[e.jsx("strong",{children:"Examples"}),e.jsx("p",{children:r.examples})]}),e.jsxs("div",{className:"miniBlock",children:[e.jsx("strong",{children:"In simple words"}),e.jsx("p",{children:r.analogy})]})]},r.number))})]}),e.jsxs(a.Grid,{children:[e.jsxs(a.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"How communication happens"})]}),e.jsx("p",{children:"When one computer sends data, the data moves from the top layer down to the bottom layer on the sender side. Then it travels through the network. On the receiver side, it moves from the bottom layer back up to the top."}),e.jsx("div",{className:"flowList",children:b.map((r,p)=>e.jsxs("div",{className:"flowItem",children:[e.jsx("span",{className:"flowNo",children:p+1}),e.jsx("p",{children:r})]},r))})]}),e.jsxs(a.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(x,{})}),e.jsx("h2",{children:"Why this model matters"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"It makes networking easier to learn"}),e.jsx("li",{children:"It helps isolate problems layer by layer"}),e.jsx("li",{children:"It gives a common language for discussion"}),e.jsx("li",{children:"It helps explain how protocols and devices fit together"}),e.jsx("li",{children:"It reduces confusion when debugging network issues"})]}),e.jsx("p",{children:"For example, if a cable is broken, the issue is likely near the Physical layer. If an IP route is wrong, the issue is more likely at the Network layer."})]})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"Easy real-world example"})]}),e.jsx("p",{children:"Suppose you open a website in your browser. Your browser belongs near the Application layer. The request gets formatted, possibly encrypted, split into transport-level pieces, assigned IP addressing for routing, packed into frames for the local network, and finally sent as electrical or wireless signals."}),e.jsx("p",{children:"The receiving side does the reverse. That is why networking works like a stack: each layer adds its own information on the way down, and removes it on the way up."})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"Devices and layers"})]}),e.jsx("div",{className:"deviceGrid",children:f.map(r=>e.jsxs("article",{className:"deviceCard",children:[e.jsx("h3",{children:r.title}),e.jsx("p",{children:r.description})]},r.title))})]}),e.jsxs(a.Grid,{children:[e.jsxs(a.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"Common exam and interview trap"})]}),e.jsx("p",{children:"The OSI Model is a conceptual model, not a rule that all real systems literally implement layer by layer in a pure textbook way."}),e.jsx("p",{children:"Real-world protocols often blur boundaries. Still, the model is extremely useful for understanding and explaining networking."})]}),e.jsxs(a.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(c,{})}),e.jsx("h2",{children:"OSI vs practical internet networking"})]}),e.jsx("p",{children:"In actual internet discussions, people often use the TCP/IP model more directly. But the OSI Model remains popular for teaching because it breaks things into finer layers and makes the ideas easier to separate."})]})]}),e.jsxs(a.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(i,{})}),e.jsx("h2",{children:"Best practical conclusion"})]}),e.jsx("p",{children:"The OSI Model helps you think clearly about network communication. Each layer has its own role, from the actual cable and signals at the bottom to user-facing applications at the top."}),e.jsx("p",{children:"Once you understand these layers, networking stops looking like black magic and starts looking like organized packet choreography."})]}),e.jsxs(a.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"The OSI Model is a 7-layer conceptual framework used to understand how data moves through a network. It helps explain protocols, devices, troubleshooting, and the flow of communication in a structured way."})]})]});export{v as default};
