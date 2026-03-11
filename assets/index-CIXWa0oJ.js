import{c as s,j as r,y as i,a as c,f as a,O as t,T as l,l as n,g as d,D as p}from"./index-D1C0sqWO.js";import{S as x}from"./index-DpzaY4xy.js";const o={Wrapper:s.div`
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
            font-size: 18px;
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

        .noteBox {
            margin-top: 16px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .noteBox strong {
            display: block;
            margin-bottom: 6px;
        }

        .noteBox p {
            margin: 0;
            font-size: 14px;
        }

        .rangeGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
            margin-top: 10px;

            @media (max-width: 860px) {
                grid-template-columns: 1fr;
            }
        }

        .rangeCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .rangeCard h3 {
            margin-bottom: 6px;
        }

        .rangeLabel {
            color: var(--color-text-primary);
            font-weight: 700;
            margin-bottom: 8px;
        }

        .devPortsGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
            margin-top: 8px;

            @media (max-width: 860px) {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            @media (max-width: 560px) {
                grid-template-columns: 1fr;
            }
        }

        .devPortCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .portNo {
            font-size: 22px;
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 6px;
        }

        .portDesc {
            font-size: 14px;
            line-height: 1.7;
            color: var(--color-text-secondary);
        }

        .memoryGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
            margin-top: 8px;

            @media (max-width: 760px) {
                grid-template-columns: 1fr;
            }
        }

        .memoryCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            padding: 16px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
        }

        .memoryCard strong {
            display: block;
            margin-bottom: 6px;
        }

        .memoryCard p {
            margin: 0;
            font-size: 14px;
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
    `,TableSection:s.section`
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

        .tableWrap {
            overflow-x: auto;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
        }

        table {
            width: 100%;
            min-width: 620px;
            border-collapse: collapse;
        }

        thead th {
            text-align: left;
            font-size: 13px;
            font-weight: 800;
            color: var(--color-text-primary);
            background: var(--color-surface-3);
            padding: 14px 16px;
            border-bottom: 1px solid var(--color-border);
        }

        tbody td {
            padding: 14px 16px;
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            border-top: 1px solid var(--color-border);
            vertical-align: top;
        }

        tbody tr:hover td {
            background: color-mix(
                in srgb,
                var(--color-surface-3) 88%,
                transparent
            );
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
    `},h=[{port:"20",protocol:"TCP",service:"FTP data"},{port:"21",protocol:"TCP",service:"FTP control"},{port:"22",protocol:"TCP",service:"SSH"},{port:"23",protocol:"TCP",service:"Telnet"},{port:"25",protocol:"TCP",service:"SMTP"},{port:"53",protocol:"TCP / UDP",service:"DNS"},{port:"67",protocol:"UDP",service:"DHCP server"},{port:"68",protocol:"UDP",service:"DHCP client"},{port:"69",protocol:"UDP",service:"TFTP"},{port:"80",protocol:"TCP",service:"HTTP"},{port:"110",protocol:"TCP",service:"POP3"},{port:"123",protocol:"UDP",service:"NTP"},{port:"143",protocol:"TCP",service:"IMAP"},{port:"161",protocol:"UDP",service:"SNMP"},{port:"389",protocol:"TCP / UDP",service:"LDAP"},{port:"443",protocol:"TCP",service:"HTTPS"},{port:"445",protocol:"TCP",service:"SMB / Microsoft-DS"},{port:"3389",protocol:"TCP / UDP",service:"RDP"}],m=[{port:"1080",protocol:"TCP",service:"SOCKS proxy"},{port:"1194",protocol:"TCP / UDP",service:"OpenVPN"},{port:"1433",protocol:"TCP",service:"Microsoft SQL Server"},{port:"1521",protocol:"TCP",service:"Oracle listener"},{port:"1883",protocol:"TCP / UDP",service:"MQTT"},{port:"2049",protocol:"TCP / UDP",service:"NFS"},{port:"3306",protocol:"TCP / UDP",service:"MySQL"},{port:"3389",protocol:"TCP / UDP",service:"RDP"},{port:"3478",protocol:"TCP / UDP",service:"STUN / TURN"},{port:"3690",protocol:"TCP / UDP",service:"Subversion"},{port:"5432",protocol:"TCP / UDP",service:"PostgreSQL"},{port:"5900",protocol:"TCP / UDP",service:"VNC"},{port:"6379",protocol:"TCP",service:"Redis"},{port:"8080",protocol:"TCP",service:"HTTP alternate"}],g=[{port:"3000",service:"Common dev server port"},{port:"4173",service:"Vite preview default"},{port:"5000",service:"Custom backend / tooling"},{port:"5173",service:"Vite dev server default"},{port:"8000",service:"Python / alternate HTTP servers"},{port:"8080",service:"Alternate HTTP / app servers"},{port:"27017",service:"MongoDB"}],b=()=>r.jsxs(o.Wrapper,{className:"topicWrapper",children:[r.jsxs(o.HeroCard,{children:[r.jsxs("div",{className:"badgeRow",children:[r.jsxs("span",{className:"badge",children:[r.jsx(i,{}),"Refactored Archive Note"]}),r.jsxs("span",{className:"badge muted",children:[r.jsx(c,{}),"Original topic: October 3, 2012"]}),r.jsx(x,{})]}),r.jsx("h1",{children:"List of TCP and UDP port numbers"}),r.jsx("p",{className:"lead",children:"Port numbers are logical communication endpoints used by network protocols. They help a single device run many different network services at the same time. For example, one machine can serve a website, handle SSH logins, and talk to a database because each service listens on a different port."})]}),r.jsxs(o.SectionCard,{children:[r.jsxs("div",{className:"sectionHead",children:[r.jsx("span",{className:"iconWrap",children:r.jsx(a,{})}),r.jsx("h2",{children:"What is a port number?"})]}),r.jsx("p",{children:"A port number is a numeric identifier used at the transport layer. It tells the operating system which application or service should receive incoming network traffic."}),r.jsx("p",{children:"Think of an IP address as the building address and the port number as the specific room number inside that building. Same building, many rooms. Same machine, many services."}),r.jsxs("div",{className:"noteBox",children:[r.jsx("strong",{children:"Example"}),r.jsx("p",{children:"If a browser visits a website, it usually connects to port 80 for HTTP or port 443 for HTTPS."})]})]}),r.jsxs(o.Grid,{children:[r.jsxs(o.InfoCard,{children:[r.jsxs("div",{className:"sectionHead",children:[r.jsx("span",{className:"iconWrap",children:r.jsx(t,{})}),r.jsx("h2",{children:"TCP in simple words"})]}),r.jsx("p",{children:"TCP stands for Transmission Control Protocol. It is connection-oriented and focuses on reliable delivery."}),r.jsxs("ul",{children:[r.jsx("li",{children:"Data arrives in order"}),r.jsx("li",{children:"Lost packets can be retransmitted"}),r.jsx("li",{children:"Useful when correctness matters"}),r.jsx("li",{children:"Common for web, email, SSH, databases"})]})]}),r.jsxs(o.InfoCard,{children:[r.jsxs("div",{className:"sectionHead",children:[r.jsx("span",{className:"iconWrap",children:r.jsx(l,{})}),r.jsx("h2",{children:"UDP in simple words"})]}),r.jsx("p",{children:"UDP stands for User Datagram Protocol. It is faster and lighter, but it does not guarantee delivery or order."}),r.jsxs("ul",{children:[r.jsx("li",{children:"Less overhead than TCP"}),r.jsx("li",{children:"No connection setup like TCP"}),r.jsx("li",{children:"Useful for speed-sensitive traffic"}),r.jsx("li",{children:"Common for DNS, streaming, gaming, VoIP"})]})]})]}),r.jsxs(o.SectionCard,{children:[r.jsxs("div",{className:"sectionHead",children:[r.jsx("span",{className:"iconWrap",children:r.jsx(n,{})}),r.jsx("h2",{children:"Main port ranges"})]}),r.jsxs("div",{className:"rangeGrid",children:[r.jsxs("div",{className:"rangeCard",children:[r.jsx("h3",{children:"0 - 1023"}),r.jsx("p",{className:"rangeLabel",children:"Well-known ports"}),r.jsx("p",{children:"Common system and standard service ports. These are the famous ones like 22, 53, 80, and 443."})]}),r.jsxs("div",{className:"rangeCard",children:[r.jsx("h3",{children:"1024 - 49151"}),r.jsx("p",{className:"rangeLabel",children:"Registered ports"}),r.jsx("p",{children:"Assigned to many specific applications and services, but not as universal as the well-known group."})]}),r.jsxs("div",{className:"rangeCard",children:[r.jsx("h3",{children:"49152 - 65535"}),r.jsx("p",{className:"rangeLabel",children:"Dynamic / private ports"}),r.jsx("p",{children:"Often used temporarily by clients or by custom software for ephemeral connections."})]})]})]}),r.jsxs(o.TableSection,{children:[r.jsxs("div",{className:"sectionHead",children:[r.jsx("span",{className:"iconWrap",children:r.jsx(t,{})}),r.jsx("h2",{children:"Important well-known ports"})]}),r.jsx("div",{className:"tableWrap",children:r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Port"}),r.jsx("th",{children:"Protocol"}),r.jsx("th",{children:"Service"})]})}),r.jsx("tbody",{children:h.map(e=>r.jsxs("tr",{children:[r.jsx("td",{children:e.port}),r.jsx("td",{children:e.protocol}),r.jsx("td",{children:e.service})]},`${e.port}-${e.service}`))})]})})]}),r.jsxs(o.TableSection,{children:[r.jsxs("div",{className:"sectionHead",children:[r.jsx("span",{className:"iconWrap",children:r.jsx(a,{})}),r.jsx("h2",{children:"Useful registered ports"})]}),r.jsx("div",{className:"tableWrap",children:r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Port"}),r.jsx("th",{children:"Protocol"}),r.jsx("th",{children:"Service"})]})}),r.jsx("tbody",{children:m.map(e=>r.jsxs("tr",{children:[r.jsx("td",{children:e.port}),r.jsx("td",{children:e.protocol}),r.jsx("td",{children:e.service})]},`${e.port}-${e.service}`))})]})})]}),r.jsxs(o.SectionCard,{children:[r.jsxs("div",{className:"sectionHead",children:[r.jsx("span",{className:"iconWrap",children:r.jsx(i,{})}),r.jsx("h2",{children:"Ports modern developers see often"})]}),r.jsx("div",{className:"devPortsGrid",children:g.map(e=>r.jsxs("div",{className:"devPortCard",children:[r.jsx("div",{className:"portNo",children:e.port}),r.jsx("div",{className:"portDesc",children:e.service})]},`${e.port}-${e.service}`))})]}),r.jsxs(o.Grid,{children:[r.jsxs(o.InfoCard,{children:[r.jsxs("div",{className:"sectionHead",children:[r.jsx("span",{className:"iconWrap",children:r.jsx(d,{})}),r.jsx("h2",{children:"Important practical notes"})]}),r.jsxs("ul",{children:[r.jsx("li",{children:"The same port number can mean different things for TCP and UDP"}),r.jsx("li",{children:"Some ports are official, but real-world software may still use them unofficially"}),r.jsx("li",{children:"Many apps allow port changes in configuration"}),r.jsx("li",{children:"Seeing a port number alone does not prove which app is running there"})]})]}),r.jsxs(o.InfoCard,{children:[r.jsxs("div",{className:"sectionHead",children:[r.jsx("span",{className:"iconWrap",children:r.jsx(p,{})}),r.jsx("h2",{children:"Security angle"})]}),r.jsxs("ul",{children:[r.jsx("li",{children:"Open ports increase exposure to the network"}),r.jsx("li",{children:"Unused ports should usually not be left exposed"}),r.jsx("li",{children:"Firewalls control which ports are reachable"}),r.jsx("li",{children:"Sensitive services like SSH, databases, and admin panels need careful access control"})]})]})]}),r.jsxs(o.SectionCard,{children:[r.jsxs("div",{className:"sectionHead",children:[r.jsx("span",{className:"iconWrap",children:r.jsx(n,{})}),r.jsx("h2",{children:"Best way to remember this topic"})]}),r.jsxs("div",{className:"memoryGrid",children:[r.jsxs("div",{className:"memoryCard",children:[r.jsx("strong",{children:"IP address"}),r.jsx("p",{children:"Which machine?"})]}),r.jsxs("div",{className:"memoryCard",children:[r.jsx("strong",{children:"Port number"}),r.jsx("p",{children:"Which service on that machine?"})]}),r.jsxs("div",{className:"memoryCard",children:[r.jsx("strong",{children:"TCP or UDP"}),r.jsx("p",{children:"What style of communication is used?"})]})]})]}),r.jsxs(o.FooterNote,{children:[r.jsx("h2",{children:"Final summary"}),r.jsx("p",{children:"TCP and UDP port numbers help network traffic reach the correct application on a machine. Well-known ports cover standard services, registered ports are used by many named applications, and dynamic ports are commonly used for temporary or custom communication. The giant raw list is useful as a reference, but understanding the structure is much more valuable than memorizing thousands of numbers like a haunted spreadsheet."})]})]});export{b as default};
