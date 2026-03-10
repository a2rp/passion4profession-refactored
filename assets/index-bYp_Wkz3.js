import{c as a,j as e,O as t,a as s,l as n,D as i,K as c,g as l,q as d,R as p,B as x}from"./index-BxgJM-x-.js";import{S as h}from"./index-D6FK_vhk.js";const o={Wrapper:a.div`
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

        .compareCard p {
            margin-top: 8px;
            font-size: 14px;
        }

        .tableWrap {
            width: 100%;
            overflow-x: auto;
            margin-top: 8px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
        }

        table {
            width: 100%;
            min-width: 760px;
            border-collapse: collapse;
        }

        thead th {
            text-align: left;
            padding: 14px 14px;
            font-size: 13px;
            font-weight: 800;
            color: var(--color-text-primary);
            background: var(--color-surface-3);
            border-bottom: 1px solid var(--color-border);
        }

        tbody td {
            padding: 14px 14px;
            vertical-align: top;
            font-size: 14px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            border-top: 1px solid var(--color-border);
        }

        tbody tr:first-child td {
            border-top: none;
        }

        .portCell {
            font-weight: 900;
            color: var(--color-text-primary);
            white-space: nowrap;
        }

        .protocolBadge {
            min-width: 46px;
            min-height: 28px;
            padding: 0 10px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: 800;
            border: 1px solid var(--color-border);
        }

        .protocolBadge.on {
            background: var(--color-text-primary);
            color: var(--color-text-inverse);
            border-color: var(--color-text-primary);
        }

        .protocolBadge.off {
            background: var(--color-surface-3);
            color: var(--color-text-muted);
        }
    `,Grid:a.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;

        @media (max-width: 820px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        @media (max-width: 680px) {
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
    `},m=[{port:"20",service:"FTP data",description:"File Transfer Protocol data channel",tcp:!0,udp:!1,category:"File Transfer"},{port:"21",service:"FTP command",description:"File Transfer Protocol command channel",tcp:!0,udp:!1,category:"File Transfer"},{port:"22",service:"SSH",description:"Secure Shell for remote login and administration",tcp:!0,udp:!1,category:"Remote Access"},{port:"23",service:"Telnet",description:"Older remote terminal protocol without encryption",tcp:!0,udp:!1,category:"Remote Access"},{port:"25",service:"SMTP",description:"Simple Mail Transfer Protocol for sending mail",tcp:!0,udp:!1,category:"Email"},{port:"43",service:"WHOIS",description:"Domain registration and lookup queries",tcp:!0,udp:!1,category:"Internet Services"},{port:"53",service:"DNS",description:"Domain Name System for name resolution",tcp:!0,udp:!0,category:"Internet Services"},{port:"67",service:"DHCP Server",description:"Dynamic Host Configuration Protocol server port",tcp:!1,udp:!0,category:"Networking"},{port:"68",service:"DHCP Client",description:"Dynamic Host Configuration Protocol client port",tcp:!1,udp:!0,category:"Networking"},{port:"80",service:"HTTP",description:"Standard web traffic for websites and web servers",tcp:!0,udp:!0,category:"Web"},{port:"110",service:"POP3",description:"Post Office Protocol version 3 for receiving email",tcp:!0,udp:!1,category:"Email"},{port:"123",service:"NTP",description:"Network Time Protocol for clock synchronization",tcp:!1,udp:!0,category:"Networking"},{port:"143",service:"IMAP",description:"Internet Message Access Protocol for receiving email",tcp:!0,udp:!1,category:"Email"},{port:"443",service:"HTTPS / SSL",description:"Encrypted web traffic, secure web servers, and control panels",tcp:!0,udp:!0,category:"Web"},{port:"1433",service:"MSSQL",description:"Microsoft SQL Server database access",tcp:!0,udp:!0,category:"Database"},{port:"2082",service:"cPanel",description:"Hosting control panel access",tcp:!0,udp:!1,category:"Hosting"},{port:"2083",service:"cPanel over SSL",description:"Secure hosting control panel access",tcp:!0,udp:!1,category:"Hosting"},{port:"2095",service:"cPanel Webmail",description:"Webmail access for cPanel hosting",tcp:!0,udp:!1,category:"Hosting"},{port:"2096",service:"cPanel Webmail over SSL",description:"Secure webmail access for cPanel hosting",tcp:!0,udp:!1,category:"Hosting"},{port:"3128",service:"Squid Proxy",description:"Default proxy port often used by Squid",tcp:!0,udp:!1,category:"Proxy"},{port:"3306",service:"MySQL",description:"MySQL database server access",tcp:!0,udp:!0,category:"Database"},{port:"8080",service:"HTTP Alternate",description:"Alternate web server port when 80 is already in use",tcp:!0,udp:!1,category:"Web"},{port:"8443",service:"Plesk Control Panel",description:"Secure admin access for Plesk hosting panel",tcp:!0,udp:!1,category:"Hosting"}],u=[{icon:e.jsx(d,{}),title:"Web",text:"Ports like 80, 443, and 8080 are common for websites, APIs, and admin panels."},{icon:e.jsx(p,{}),title:"Email",text:"Ports like 25, 110, and 143 are linked with sending and receiving email."},{icon:e.jsx(x,{}),title:"Database",text:"Ports like 1433 and 3306 are commonly used for database servers."},{icon:e.jsx(i,{}),title:"Remote access",text:"Ports like 22 and 23 are associated with connecting to remote systems."}],v=()=>e.jsxs(o.Wrapper,{className:"topicWrapper",children:[e.jsxs(o.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(t,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(s,{}),"Original topic: October 3, 2012"]}),e.jsx(h,{})]}),e.jsx("h1",{children:"Common Port Lists"}),e.jsx("p",{className:"lead",children:"A port number helps identify a specific network service on a computer. When data reaches a machine, the port helps the operating system figure out which application or service should handle it. Think of the IP address as the building and the port as the room number inside it."})]}),e.jsxs(o.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(n,{})}),e.jsx("h2",{children:"What is a port?"})]}),e.jsx("p",{children:"A port is a logical communication endpoint used by network applications. It is not a physical socket on your computer. Instead, it is a numbered channel used by software."}),e.jsx("p",{children:"For example, a web server may listen on port 80 or 443, while a database server may listen on 3306 or 1433. If the correct port is not open, accessible, or expected by the client, communication will fail."})]}),e.jsx(o.Grid,{children:u.map(r=>e.jsxs(o.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:r.icon}),e.jsx("h2",{children:r.title})]}),e.jsx("p",{children:r.text})]},r.title))}),e.jsxs(o.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(i,{})}),e.jsx("h2",{children:"TCP and UDP in simple words"})]}),e.jsxs("div",{className:"compareGrid",children:[e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"TCP"}),e.jsx("p",{children:"TCP stands for Transmission Control Protocol. It is connection-oriented and focuses more on reliability, order, and error checking."})]}),e.jsxs("div",{className:"compareCard",children:[e.jsx("h3",{children:"UDP"}),e.jsx("p",{children:"UDP stands for User Datagram Protocol. It is lighter and faster, but it does not guarantee delivery in the same way TCP does."})]})]}),e.jsx("p",{children:"Some services use only TCP, some use only UDP, and some can use both depending on the situation."})]}),e.jsxs(o.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(t,{})}),e.jsx("h2",{children:"Common ports table"})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Port"}),e.jsx("th",{children:"Service"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"TCP"}),e.jsx("th",{children:"UDP"})]})}),e.jsx("tbody",{children:m.map(r=>e.jsxs("tr",{children:[e.jsx("td",{className:"portCell",children:r.port}),e.jsx("td",{children:r.service}),e.jsx("td",{children:r.description}),e.jsx("td",{children:e.jsx("span",{className:`protocolBadge ${r.tcp?"on":"off"}`,children:r.tcp?"Yes":"No"})}),e.jsx("td",{children:e.jsx("span",{className:`protocolBadge ${r.udp?"on":"off"}`,children:r.udp?"Yes":"No"})})]},`${r.port}-${r.service}`))})]})})]}),e.jsxs(o.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(c,{})}),e.jsx("h2",{children:"How to read this list properly"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"A port number tells you where a service usually listens"}),e.jsx("li",{children:"A service can be configured to use a different port"}),e.jsx("li",{children:"Some applications use these as defaults, not as strict permanent rules"}),e.jsx("li",{children:"Firewalls, proxies, containers, and hosting panels may change the actual exposed port"})]}),e.jsx("p",{children:"So do not treat port lists as sacred stone tablets from the networking gods. They are common defaults, not universal laws."})]}),e.jsxs(o.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"Important note"})]}),e.jsx("p",{children:"Port numbers alone do not guarantee security or identity. Just because something is running on port 443 does not mean it is automatically safe, and just because a service usually uses one port does not mean it cannot be moved to another."}),e.jsx("p",{children:"In real systems, always verify the actual service, configuration, firewall rules, and transport protocol."})]}),e.jsxs(o.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"Common port lists help you quickly recognize which service may be running on a machine. Ports such as 80, 443, 22, 3306, and 1433 are widely known defaults, but real-world systems can customize them. Learn the common ports, but also remember that configuration can always change."})]})]});export{v as default};
