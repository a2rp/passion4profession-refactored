import{c as o,j as e,q as a,a as d,l as i,g as n,O as c,ah as l,b as h,D as p,ar as x}from"./index-BxgJM-x-.js";import{S as u}from"./index-D6FK_vhk.js";const t={Wrapper:o.div`
        width: 100%;
        max-width: 1180px;
        margin: 0 auto;
        padding: 24px 20px 40px;
        display: flex;
        flex-direction: column;
        gap: 18px;
    `,HeroCard:o.section`
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
            max-width: 920px;
            font-size: 16px;
            line-height: 1.85;
            color: var(--color-text-secondary);
        }

        .heroMetaGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
            margin-top: 20px;

            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }
        }

        .heroMetaCard {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 16px;
            border-radius: var(--radius-md);
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
        }

        .metaIcon {
            width: 40px;
            height: 40px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            background: var(--color-surface-3);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
        }

        .metaIcon svg {
            width: 18px;
            height: 18px;
        }

        .heroMetaCard strong {
            display: block;
            margin-bottom: 4px;
            font-size: 14px;
        }

        .heroMetaCard span:last-child {
            display: block;
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }
    `,SectionCard:o.section`
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
            align-items: flex-start;
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

        .quickExampleGrid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 14px;

            @media (max-width: 1000px) {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            @media (max-width: 620px) {
                grid-template-columns: 1fr;
            }
        }

        .quickExampleCard {
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 92%,
                transparent
            );
            padding: 16px;
        }

        .quickCode {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 58px;
            min-height: 34px;
            padding: 0 10px;
            border-radius: 999px;
            background: var(--color-text-primary);
            color: var(--color-text-inverse);
            font-size: 13px;
            font-weight: 900;
            margin-bottom: 10px;
        }

        .quickExampleCard h3 {
            margin-bottom: 8px;
        }

        .quickExampleCard p {
            margin: 0;
            font-size: 14px;
        }
    `,Grid:o.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;

        @media (max-width: 820px) {
            grid-template-columns: 1fr;
        }
    `,InfoCard:o.article`
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
            align-items: flex-start;
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
    `,StatusGroupCard:o.section`
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background: linear-gradient(
            180deg,
            var(--color-surface) 0%,
            var(--color-surface-2) 100%
        );
        box-shadow: 0 18px 40px var(--color-shadow);
        padding: 22px;
        overflow: hidden;

        .sectionHead {
            display: flex;
            align-items: flex-start;
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

        .headingText {
            min-width: 0;
        }

        h2 {
            font-size: 24px;
            line-height: 1.12;
            margin-bottom: 6px;
        }

        .headingText p {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.75;
        }

        .tableWrap {
            overflow-x: auto;
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
            border-collapse: collapse;
            min-width: 760px;
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
            vertical-align: top;
            padding: 14px 14px;
            border-top: 1px solid var(--color-border);
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.7;
        }

        tbody tr:first-child td {
            border-top: none;
        }

        tbody td:nth-child(2) {
            color: var(--color-text-primary);
            font-weight: 700;
            min-width: 180px;
        }

        .codeBadge {
            min-width: 56px;
            min-height: 34px;
            padding: 0 10px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 13px;
            font-weight: 900;
            background: var(--color-surface-3);
            color: var(--color-text-primary);
            border: 1px solid var(--color-border);
        }

        &.info .codeBadge {
            box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04);
        }

        &.success .codeBadge {
            background: var(--color-text-primary);
            color: var(--color-text-inverse);
            border-color: var(--color-text-primary);
        }

        &.redirect .codeBadge {
            background: var(--color-surface);
        }

        &.warning .codeBadge {
            background: var(--color-surface-3);
        }

        &.danger .codeBadge {
            background: var(--color-surface-3);
        }
    `,FooterNote:o.section`
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
            max-width: 980px;
            color: var(--color-text-secondary);
            font-size: 15px;
            line-height: 1.85;
        }
    `},m=[{code:"100",title:"Continue",description:"Confirms the client that the first part of the request arrived and tells it to continue with the rest, or ignore it if the request has already been fulfilled."},{code:"101",title:"Switching Protocols",description:"Informs the client that the server is switching protocols to the one specified in the Upgrade header field during the current connection."}],g=[{code:"200",title:"OK",description:"Standard response for successful requests."},{code:"201",title:"Created",description:"The request was fulfilled and a new resource was created."},{code:"202",title:"Accepted",description:"The request was accepted, but processing has not yet completed."},{code:"203",title:"Non-Authoritative Information",description:"The returned meta information was not the definitive set from the origin server."},{code:"204",title:"No Content",description:"The request succeeded and no entity-body needs to be returned."},{code:"205",title:"Reset Content",description:"The request succeeded, but the document view that caused the request should be reset."},{code:"206",title:"Partial Content",description:"A partial GET request completed successfully."}],f=[{code:"300",title:"Multiple Choices",description:"The requested resource has multiple possible representations or locations."},{code:"301",title:"Moved Permanently",description:"The resource has been permanently moved to a different URL."},{code:"302",title:"Found",description:"The resource was found at a different URL, but the client should continue using the original URL."},{code:"303",title:"See Other",description:"The response is available at another URL and should be retrieved using a GET request."},{code:"304",title:"Not Modified",description:"The resource has not changed since the last request."},{code:"305",title:"Use Proxy",description:"The requested resource should be accessed through the proxy given in the location field."},{code:"306",title:"No Longer Used",description:"Reserved for future use."},{code:"307",title:"Temporary Redirect",description:"The resource has been moved temporarily to a different URL."}],v=[{code:"400",title:"Bad Request",description:"The server could not understand the syntax of the request."},{code:"401",title:"Not Authorized",description:"The request requires user authentication."},{code:"402",title:"Payment Required",description:"Reserved for future use."},{code:"403",title:"Forbidden",description:"The server refuses to fulfill the request."},{code:"404",title:"Not Found",description:"The document or file requested by the client was not found."},{code:"405",title:"Method Not Allowed",description:"The method specified in the request line is not allowed for the target resource."},{code:"406",title:"Not Acceptable",description:"The requested resource generates response content that does not match the accept headers."},{code:"407",title:"Proxy Authentication Required",description:"The request requires authentication with a proxy."},{code:"408",title:"Request Timeout",description:"The client failed to send the request within the time allowed by the server."},{code:"409",title:"Conflict",description:"The request could not be completed because of a conflict in the current state of the resource."},{code:"410",title:"Gone",description:"The requested resource is no longer available and has no forwarding address."},{code:"411",title:"Length Required",description:"The server refuses to accept the request without a valid Content-Length header field."},{code:"412",title:"Precondition Failed",description:"A precondition in the request headers evaluated to false."},{code:"413",title:"Request Entity Too Large",description:"The request could not be processed because the request body is larger than allowed by the server."},{code:"414",title:"Request URL Too Long",description:"The request could not be processed because the URL is longer than the server is willing to handle."},{code:"415",title:"Unsupported Media Type",description:"The request body format is not supported by the target resource."},{code:"416",title:"Requested Range Not Satisfiable",description:"The Range request-header field did not contain a valid range value."},{code:"417",title:"Expectation Failed",description:"The expectation given in the Expect request-header could not be fulfilled by the server."},{code:"422",title:"Unprocessable Entity",description:"The request was well-formed but could not be processed because of semantic errors."},{code:"423",title:"Locked",description:"The requested resource is locked."},{code:"424",title:"Failed Dependency",description:"The request failed because a previous request failed."},{code:"426",title:"Upgrade Required",description:"The client should switch to a different protocol, commonly Transport Layer Security."}],b=[{code:"500",title:"Internal Server Error",description:"The request failed because the server encountered an unexpected condition."},{code:"501",title:"Not Implemented",description:"The server does not support the functionality needed to fulfill the request."},{code:"502",title:"Bad Gateway",description:"The server received an invalid response from an upstream server."},{code:"503",title:"Service Unavailable",description:"The server is down or overloaded and cannot handle the request right now."},{code:"504",title:"Gateway Timeout",description:"An upstream server failed to respond within the allowed time."},{code:"505",title:"HTTP Version Not Supported",description:"The server does not support the HTTP version used in the request."}],j=[{id:"1xx",title:"1xx - Informational",icon:e.jsx(l,{}),toneClass:"info",intro:"These status codes tell the client that the request has been received and some further action may continue.",items:m},{id:"2xx",title:"2xx - Success",icon:e.jsx(i,{}),toneClass:"success",intro:"These codes mean the request was received, understood, and handled successfully.",items:g},{id:"3xx",title:"3xx - Redirection",icon:e.jsx(x,{}),toneClass:"redirect",intro:"These codes tell the client that additional action is needed, usually by requesting another URL.",items:f},{id:"4xx",title:"4xx - Client Errors",icon:e.jsx(n,{}),toneClass:"warning",intro:"These codes usually mean something was wrong with the request sent by the client.",items:v},{id:"5xx",title:"5xx - Server Errors",icon:e.jsx(c,{}),toneClass:"danger",intro:"These codes mean the server failed while trying to process a request that otherwise looked valid enough to reach it.",items:b}],w=[{code:"200",title:"Page loaded successfully",text:"A browser requested a page and the server returned it normally."},{code:"301",title:"Permanent redirect",text:"A page moved to a new address and the browser should use the new location in the future."},{code:"404",title:"Missing page",text:"The requested URL does not point to an existing document or resource."},{code:"500",title:"Server-side crash or failure",text:"The request reached the server, but something broke while processing it."}],q=()=>e.jsxs(t.Wrapper,{className:"topicWrapper",children:[e.jsxs(t.HeroCard,{children:[e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:[e.jsx(a,{}),"Refactored Archive Note"]}),e.jsxs("span",{className:"badge muted",children:[e.jsx(d,{}),"Original topic: July 31, 2012"]}),e.jsx(u,{})]}),e.jsx("h1",{children:"HTTP Status Code"}),e.jsxs("p",{className:"lead",children:["Whenever a browser, app, or computer requests something from a web server through HTTP, the server responds with a status code. This code tells us what happened to the request. A normal successful page usually returns"," ",e.jsx("strong",{children:"200 OK"}),", while a missing page commonly returns ",e.jsx("strong",{children:"404 Not Found"}),"."]}),e.jsxs("div",{className:"heroMetaGrid",children:[e.jsxs("div",{className:"heroMetaCard",children:[e.jsx("span",{className:"metaIcon",children:e.jsx(i,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:"200 OK"}),e.jsx("span",{children:"Request worked normally"})]})]}),e.jsxs("div",{className:"heroMetaCard",children:[e.jsx("span",{className:"metaIcon",children:e.jsx(n,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:"404 Not Found"}),e.jsx("span",{children:"Requested page or file was missing"})]})]}),e.jsxs("div",{className:"heroMetaCard",children:[e.jsx("span",{className:"metaIcon",children:e.jsx(c,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:"500 Internal Server Error"}),e.jsx("span",{children:"Something failed on the server side"})]})]})]})]}),e.jsxs(t.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(l,{})}),e.jsx("h2",{children:"What is an HTTP status code?"})]}),e.jsx("p",{children:"Before the actual content of a web page is shown, the server sends response headers. One part of that response is the HTTP status code. It tells the client whether the request was successful, redirected, rejected, incomplete, or failed on the server."}),e.jsx("p",{children:"Users usually notice status codes only when something goes wrong, such as 404. But status codes are returned for normal successful requests too. They are part of the everyday plumbing of the web, the part people do not see unless the pipes burst dramatically."})]}),e.jsxs(t.Grid,{children:[e.jsxs(t.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(h,{})}),e.jsx("h2",{children:"How the flow works"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"The client sends an HTTP request"}),e.jsx("li",{children:"The server receives and processes it"}),e.jsx("li",{children:"The server returns headers with a status code"}),e.jsx("li",{children:"The client decides what to do next based on that code"})]}),e.jsx("p",{children:"Sometimes the client shows the page immediately. Sometimes it follows a redirect. Sometimes it displays an error page."})]}),e.jsxs(t.InfoCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(p,{})}),e.jsx("h2",{children:"Why status codes matter"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"They help browsers understand server responses"}),e.jsx("li",{children:"They help developers debug web applications"}),e.jsx("li",{children:"They affect caching, redirects, and authentication"}),e.jsx("li",{children:"They are important for SEO and API design"})]}),e.jsx("p",{children:"A correct status code is not decoration. It is part of proper communication between systems."})]})]}),e.jsxs(t.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(d,{})}),e.jsx("h2",{children:"Origin of status codes"})]}),e.jsx("p",{children:"As part of early HTTP specifications, HTTP status codes were established in 1992 by the World Wide Web Consortium, also called the W3C. Tim Berners-Lee, who invented the web and the first web browser in 1990, defined the status codes."}),e.jsx("p",{children:"That means these little numeric messages are old internet fossils still doing active duty every single day."})]}),e.jsxs(t.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(i,{})}),e.jsx("h2",{children:"Quick practical examples"})]}),e.jsx("div",{className:"quickExampleGrid",children:w.map(r=>e.jsxs("article",{className:"quickExampleCard",children:[e.jsx("div",{className:"quickCode",children:r.code}),e.jsx("h3",{children:r.title}),e.jsx("p",{children:r.text})]},r.code))})]}),j.map(r=>e.jsxs(t.StatusGroupCard,{className:r.toneClass,children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:r.icon}),e.jsxs("div",{className:"headingText",children:[e.jsx("h2",{children:r.title}),e.jsx("p",{children:r.intro})]})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Code"}),e.jsx("th",{children:"Meaning"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:r.items.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("span",{className:"codeBadge",children:s.code})}),e.jsx("td",{children:s.title}),e.jsx("td",{children:s.description})]},s.code))})]})})]},r.id)),e.jsxs(t.SectionCard,{children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("span",{className:"iconWrap",children:e.jsx(a,{})}),e.jsx("h2",{children:"Refactored takeaway"})]}),e.jsx("p",{children:"HTTP status codes are short numeric signals sent by servers to tell clients what happened to a request. They are grouped into families:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"1xx for informational responses"}),e.jsx("li",{children:"2xx for successful responses"}),e.jsx("li",{children:"3xx for redirections"}),e.jsx("li",{children:"4xx for client-side errors"}),e.jsx("li",{children:"5xx for server-side errors"})]}),e.jsx("p",{children:"Once you understand these groups, web debugging becomes much easier. You stop seeing random numbers and start seeing the story the server is telling."})]}),e.jsxs(t.FooterNote,{children:[e.jsx("h2",{children:"Final summary"}),e.jsx("p",{children:"HTTP status codes are part of the response sent by a server for every HTTP request. They tell whether a request succeeded, redirected somewhere else, failed because of the client, or failed because of the server. The original post listed the major codes one by one, and this refactored version keeps all of them while organizing them into clearer groups and real-world meaning."})]})]});export{q as default};
