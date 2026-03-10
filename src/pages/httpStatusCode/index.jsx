import React from "react";
import {
    FiGlobe,
    FiClock,
    FiCheckCircle,
    FiInfo,
    FiArrowRightCircle,
    FiAlertCircle,
    FiShield,
    FiServer,
    FiRefreshCw,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const informationalCodes = [
    {
        code: "100",
        title: "Continue",
        description:
            "Confirms the client that the first part of the request arrived and tells it to continue with the rest, or ignore it if the request has already been fulfilled.",
    },
    {
        code: "101",
        title: "Switching Protocols",
        description:
            "Informs the client that the server is switching protocols to the one specified in the Upgrade header field during the current connection.",
    },
];

const successCodes = [
    {
        code: "200",
        title: "OK",
        description: "Standard response for successful requests.",
    },
    {
        code: "201",
        title: "Created",
        description:
            "The request was fulfilled and a new resource was created.",
    },
    {
        code: "202",
        title: "Accepted",
        description:
            "The request was accepted, but processing has not yet completed.",
    },
    {
        code: "203",
        title: "Non-Authoritative Information",
        description:
            "The returned meta information was not the definitive set from the origin server.",
    },
    {
        code: "204",
        title: "No Content",
        description:
            "The request succeeded and no entity-body needs to be returned.",
    },
    {
        code: "205",
        title: "Reset Content",
        description:
            "The request succeeded, but the document view that caused the request should be reset.",
    },
    {
        code: "206",
        title: "Partial Content",
        description: "A partial GET request completed successfully.",
    },
];

const redirectionCodes = [
    {
        code: "300",
        title: "Multiple Choices",
        description:
            "The requested resource has multiple possible representations or locations.",
    },
    {
        code: "301",
        title: "Moved Permanently",
        description:
            "The resource has been permanently moved to a different URL.",
    },
    {
        code: "302",
        title: "Found",
        description:
            "The resource was found at a different URL, but the client should continue using the original URL.",
    },
    {
        code: "303",
        title: "See Other",
        description:
            "The response is available at another URL and should be retrieved using a GET request.",
    },
    {
        code: "304",
        title: "Not Modified",
        description: "The resource has not changed since the last request.",
    },
    {
        code: "305",
        title: "Use Proxy",
        description:
            "The requested resource should be accessed through the proxy given in the location field.",
    },
    {
        code: "306",
        title: "No Longer Used",
        description: "Reserved for future use.",
    },
    {
        code: "307",
        title: "Temporary Redirect",
        description:
            "The resource has been moved temporarily to a different URL.",
    },
];

const clientErrorCodes = [
    {
        code: "400",
        title: "Bad Request",
        description:
            "The server could not understand the syntax of the request.",
    },
    {
        code: "401",
        title: "Not Authorized",
        description: "The request requires user authentication.",
    },
    {
        code: "402",
        title: "Payment Required",
        description: "Reserved for future use.",
    },
    {
        code: "403",
        title: "Forbidden",
        description: "The server refuses to fulfill the request.",
    },
    {
        code: "404",
        title: "Not Found",
        description:
            "The document or file requested by the client was not found.",
    },
    {
        code: "405",
        title: "Method Not Allowed",
        description:
            "The method specified in the request line is not allowed for the target resource.",
    },
    {
        code: "406",
        title: "Not Acceptable",
        description:
            "The requested resource generates response content that does not match the accept headers.",
    },
    {
        code: "407",
        title: "Proxy Authentication Required",
        description: "The request requires authentication with a proxy.",
    },
    {
        code: "408",
        title: "Request Timeout",
        description:
            "The client failed to send the request within the time allowed by the server.",
    },
    {
        code: "409",
        title: "Conflict",
        description:
            "The request could not be completed because of a conflict in the current state of the resource.",
    },
    {
        code: "410",
        title: "Gone",
        description:
            "The requested resource is no longer available and has no forwarding address.",
    },
    {
        code: "411",
        title: "Length Required",
        description:
            "The server refuses to accept the request without a valid Content-Length header field.",
    },
    {
        code: "412",
        title: "Precondition Failed",
        description:
            "A precondition in the request headers evaluated to false.",
    },
    {
        code: "413",
        title: "Request Entity Too Large",
        description:
            "The request could not be processed because the request body is larger than allowed by the server.",
    },
    {
        code: "414",
        title: "Request URL Too Long",
        description:
            "The request could not be processed because the URL is longer than the server is willing to handle.",
    },
    {
        code: "415",
        title: "Unsupported Media Type",
        description:
            "The request body format is not supported by the target resource.",
    },
    {
        code: "416",
        title: "Requested Range Not Satisfiable",
        description:
            "The Range request-header field did not contain a valid range value.",
    },
    {
        code: "417",
        title: "Expectation Failed",
        description:
            "The expectation given in the Expect request-header could not be fulfilled by the server.",
    },
    {
        code: "422",
        title: "Unprocessable Entity",
        description:
            "The request was well-formed but could not be processed because of semantic errors.",
    },
    {
        code: "423",
        title: "Locked",
        description: "The requested resource is locked.",
    },
    {
        code: "424",
        title: "Failed Dependency",
        description: "The request failed because a previous request failed.",
    },
    {
        code: "426",
        title: "Upgrade Required",
        description:
            "The client should switch to a different protocol, commonly Transport Layer Security.",
    },
];

const serverErrorCodes = [
    {
        code: "500",
        title: "Internal Server Error",
        description:
            "The request failed because the server encountered an unexpected condition.",
    },
    {
        code: "501",
        title: "Not Implemented",
        description:
            "The server does not support the functionality needed to fulfill the request.",
    },
    {
        code: "502",
        title: "Bad Gateway",
        description:
            "The server received an invalid response from an upstream server.",
    },
    {
        code: "503",
        title: "Service Unavailable",
        description:
            "The server is down or overloaded and cannot handle the request right now.",
    },
    {
        code: "504",
        title: "Gateway Timeout",
        description:
            "An upstream server failed to respond within the allowed time.",
    },
    {
        code: "505",
        title: "HTTP Version Not Supported",
        description:
            "The server does not support the HTTP version used in the request.",
    },
];

const statusCodeGroups = [
    {
        id: "1xx",
        title: "1xx - Informational",
        icon: <FiInfo />,
        toneClass: "info",
        intro: "These status codes tell the client that the request has been received and some further action may continue.",
        items: informationalCodes,
    },
    {
        id: "2xx",
        title: "2xx - Success",
        icon: <FiCheckCircle />,
        toneClass: "success",
        intro: "These codes mean the request was received, understood, and handled successfully.",
        items: successCodes,
    },
    {
        id: "3xx",
        title: "3xx - Redirection",
        icon: <FiArrowRightCircle />,
        toneClass: "redirect",
        intro: "These codes tell the client that additional action is needed, usually by requesting another URL.",
        items: redirectionCodes,
    },
    {
        id: "4xx",
        title: "4xx - Client Errors",
        icon: <FiAlertCircle />,
        toneClass: "warning",
        intro: "These codes usually mean something was wrong with the request sent by the client.",
        items: clientErrorCodes,
    },
    {
        id: "5xx",
        title: "5xx - Server Errors",
        icon: <FiServer />,
        toneClass: "danger",
        intro: "These codes mean the server failed while trying to process a request that otherwise looked valid enough to reach it.",
        items: serverErrorCodes,
    },
];

const quickExamples = [
    {
        code: "200",
        title: "Page loaded successfully",
        text: "A browser requested a page and the server returned it normally.",
    },
    {
        code: "301",
        title: "Permanent redirect",
        text: "A page moved to a new address and the browser should use the new location in the future.",
    },
    {
        code: "404",
        title: "Missing page",
        text: "The requested URL does not point to an existing document or resource.",
    },
    {
        code: "500",
        title: "Server-side crash or failure",
        text: "The request reached the server, but something broke while processing it.",
    },
];

const HttpStatusCode = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiGlobe />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiClock />
                        Original topic: July 31, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>HTTP Status Code</h1>

                <p className="lead">
                    Whenever a browser, app, or computer requests something from
                    a web server through HTTP, the server responds with a status
                    code. This code tells us what happened to the request. A
                    normal successful page usually returns{" "}
                    <strong>200 OK</strong>, while a missing page commonly
                    returns <strong>404 Not Found</strong>.
                </p>

                <div className="heroMetaGrid">
                    <div className="heroMetaCard">
                        <span className="metaIcon">
                            <FiCheckCircle />
                        </span>
                        <div>
                            <strong>200 OK</strong>
                            <span>Request worked normally</span>
                        </div>
                    </div>

                    <div className="heroMetaCard">
                        <span className="metaIcon">
                            <FiAlertCircle />
                        </span>
                        <div>
                            <strong>404 Not Found</strong>
                            <span>Requested page or file was missing</span>
                        </div>
                    </div>

                    <div className="heroMetaCard">
                        <span className="metaIcon">
                            <FiServer />
                        </span>
                        <div>
                            <strong>500 Internal Server Error</strong>
                            <span>Something failed on the server side</span>
                        </div>
                    </div>
                </div>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiInfo />
                    </span>
                    <h2>What is an HTTP status code?</h2>
                </div>

                <p>
                    Before the actual content of a web page is shown, the server
                    sends response headers. One part of that response is the
                    HTTP status code. It tells the client whether the request
                    was successful, redirected, rejected, incomplete, or failed
                    on the server.
                </p>

                <p>
                    Users usually notice status codes only when something goes
                    wrong, such as 404. But status codes are returned for normal
                    successful requests too. They are part of the everyday
                    plumbing of the web, the part people do not see unless the
                    pipes burst dramatically.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiRefreshCw />
                        </span>
                        <h2>How the flow works</h2>
                    </div>

                    <ul>
                        <li>The client sends an HTTP request</li>
                        <li>The server receives and processes it</li>
                        <li>The server returns headers with a status code</li>
                        <li>
                            The client decides what to do next based on that
                            code
                        </li>
                    </ul>

                    <p>
                        Sometimes the client shows the page immediately.
                        Sometimes it follows a redirect. Sometimes it displays
                        an error page.
                    </p>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiShield />
                        </span>
                        <h2>Why status codes matter</h2>
                    </div>

                    <ul>
                        <li>They help browsers understand server responses</li>
                        <li>They help developers debug web applications</li>
                        <li>
                            They affect caching, redirects, and authentication
                        </li>
                        <li>They are important for SEO and API design</li>
                    </ul>

                    <p>
                        A correct status code is not decoration. It is part of
                        proper communication between systems.
                    </p>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiClock />
                    </span>
                    <h2>Origin of status codes</h2>
                </div>

                <p>
                    As part of early HTTP specifications, HTTP status codes were
                    established in 1992 by the World Wide Web Consortium, also
                    called the W3C. Tim Berners-Lee, who invented the web and
                    the first web browser in 1990, defined the status codes.
                </p>

                <p>
                    That means these little numeric messages are old internet
                    fossils still doing active duty every single day.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Quick practical examples</h2>
                </div>

                <div className="quickExampleGrid">
                    {quickExamples.map((item) => (
                        <article key={item.code} className="quickExampleCard">
                            <div className="quickCode">{item.code}</div>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            {statusCodeGroups.map((group) => (
                <Styled.StatusGroupCard
                    key={group.id}
                    className={group.toneClass}
                >
                    <div className="sectionHead">
                        <span className="iconWrap">{group.icon}</span>
                        <div className="headingText">
                            <h2>{group.title}</h2>
                            <p>{group.intro}</p>
                        </div>
                    </div>

                    <div className="tableWrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Meaning</th>
                                    <th>Description</th>
                                </tr>
                            </thead>

                            <tbody>
                                {group.items.map((item) => (
                                    <tr key={item.code}>
                                        <td>
                                            <span className="codeBadge">
                                                {item.code}
                                            </span>
                                        </td>
                                        <td>{item.title}</td>
                                        <td>{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Styled.StatusGroupCard>
            ))}

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiGlobe />
                    </span>
                    <h2>Refactored takeaway</h2>
                </div>

                <p>
                    HTTP status codes are short numeric signals sent by servers
                    to tell clients what happened to a request. They are grouped
                    into families:
                </p>

                <ul>
                    <li>1xx for informational responses</li>
                    <li>2xx for successful responses</li>
                    <li>3xx for redirections</li>
                    <li>4xx for client-side errors</li>
                    <li>5xx for server-side errors</li>
                </ul>

                <p>
                    Once you understand these groups, web debugging becomes much
                    easier. You stop seeing random numbers and start seeing the
                    story the server is telling.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    HTTP status codes are part of the response sent by a server
                    for every HTTP request. They tell whether a request
                    succeeded, redirected somewhere else, failed because of the
                    client, or failed because of the server. The original post
                    listed the major codes one by one, and this refactored
                    version keeps all of them while organizing them into clearer
                    groups and real-world meaning.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default HttpStatusCode;
