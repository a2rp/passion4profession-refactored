import React from "react";
import {
    FiClock,
    FiGlobe,
    FiMail,
    FiServer,
    FiShield,
    FiDatabase,
    FiSettings,
    FiAlertCircle,
    FiCheckCircle,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const commonPorts = [
    {
        port: "20",
        service: "FTP data",
        description: "File Transfer Protocol data channel",
        tcp: true,
        udp: false,
        category: "File Transfer",
    },
    {
        port: "21",
        service: "FTP command",
        description: "File Transfer Protocol command channel",
        tcp: true,
        udp: false,
        category: "File Transfer",
    },
    {
        port: "22",
        service: "SSH",
        description: "Secure Shell for remote login and administration",
        tcp: true,
        udp: false,
        category: "Remote Access",
    },
    {
        port: "23",
        service: "Telnet",
        description: "Older remote terminal protocol without encryption",
        tcp: true,
        udp: false,
        category: "Remote Access",
    },
    {
        port: "25",
        service: "SMTP",
        description: "Simple Mail Transfer Protocol for sending mail",
        tcp: true,
        udp: false,
        category: "Email",
    },
    {
        port: "43",
        service: "WHOIS",
        description: "Domain registration and lookup queries",
        tcp: true,
        udp: false,
        category: "Internet Services",
    },
    {
        port: "53",
        service: "DNS",
        description: "Domain Name System for name resolution",
        tcp: true,
        udp: true,
        category: "Internet Services",
    },
    {
        port: "67",
        service: "DHCP Server",
        description: "Dynamic Host Configuration Protocol server port",
        tcp: false,
        udp: true,
        category: "Networking",
    },
    {
        port: "68",
        service: "DHCP Client",
        description: "Dynamic Host Configuration Protocol client port",
        tcp: false,
        udp: true,
        category: "Networking",
    },
    {
        port: "80",
        service: "HTTP",
        description: "Standard web traffic for websites and web servers",
        tcp: true,
        udp: true,
        category: "Web",
    },
    {
        port: "110",
        service: "POP3",
        description: "Post Office Protocol version 3 for receiving email",
        tcp: true,
        udp: false,
        category: "Email",
    },
    {
        port: "123",
        service: "NTP",
        description: "Network Time Protocol for clock synchronization",
        tcp: false,
        udp: true,
        category: "Networking",
    },
    {
        port: "143",
        service: "IMAP",
        description: "Internet Message Access Protocol for receiving email",
        tcp: true,
        udp: false,
        category: "Email",
    },
    {
        port: "443",
        service: "HTTPS / SSL",
        description:
            "Encrypted web traffic, secure web servers, and control panels",
        tcp: true,
        udp: true,
        category: "Web",
    },
    {
        port: "1433",
        service: "MSSQL",
        description: "Microsoft SQL Server database access",
        tcp: true,
        udp: true,
        category: "Database",
    },
    {
        port: "2082",
        service: "cPanel",
        description: "Hosting control panel access",
        tcp: true,
        udp: false,
        category: "Hosting",
    },
    {
        port: "2083",
        service: "cPanel over SSL",
        description: "Secure hosting control panel access",
        tcp: true,
        udp: false,
        category: "Hosting",
    },
    {
        port: "2095",
        service: "cPanel Webmail",
        description: "Webmail access for cPanel hosting",
        tcp: true,
        udp: false,
        category: "Hosting",
    },
    {
        port: "2096",
        service: "cPanel Webmail over SSL",
        description: "Secure webmail access for cPanel hosting",
        tcp: true,
        udp: false,
        category: "Hosting",
    },
    {
        port: "3128",
        service: "Squid Proxy",
        description: "Default proxy port often used by Squid",
        tcp: true,
        udp: false,
        category: "Proxy",
    },
    {
        port: "3306",
        service: "MySQL",
        description: "MySQL database server access",
        tcp: true,
        udp: true,
        category: "Database",
    },
    {
        port: "8080",
        service: "HTTP Alternate",
        description: "Alternate web server port when 80 is already in use",
        tcp: true,
        udp: false,
        category: "Web",
    },
    {
        port: "8443",
        service: "Plesk Control Panel",
        description: "Secure admin access for Plesk hosting panel",
        tcp: true,
        udp: false,
        category: "Hosting",
    },
];

const quickGroups = [
    {
        icon: <FiGlobe />,
        title: "Web",
        text: "Ports like 80, 443, and 8080 are common for websites, APIs, and admin panels.",
    },
    {
        icon: <FiMail />,
        title: "Email",
        text: "Ports like 25, 110, and 143 are linked with sending and receiving email.",
    },
    {
        icon: <FiDatabase />,
        title: "Database",
        text: "Ports like 1433 and 3306 are commonly used for database servers.",
    },
    {
        icon: <FiShield />,
        title: "Remote access",
        text: "Ports like 22 and 23 are associated with connecting to remote systems.",
    },
];

const CommonPortLists = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiServer />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiClock />
                        Original topic: October 3, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>Common Port Lists</h1>

                <p className="lead">
                    A port number helps identify a specific network service on a
                    computer. When data reaches a machine, the port helps the
                    operating system figure out which application or service
                    should handle it. Think of the IP address as the building
                    and the port as the room number inside it.
                </p>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>What is a port?</h2>
                </div>

                <p>
                    A port is a logical communication endpoint used by network
                    applications. It is not a physical socket on your computer.
                    Instead, it is a numbered channel used by software.
                </p>

                <p>
                    For example, a web server may listen on port 80 or 443,
                    while a database server may listen on 3306 or 1433. If the
                    correct port is not open, accessible, or expected by the
                    client, communication will fail.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                {quickGroups.map((item) => (
                    <Styled.InfoCard key={item.title}>
                        <div className="sectionHead">
                            <span className="iconWrap">{item.icon}</span>
                            <h2>{item.title}</h2>
                        </div>

                        <p>{item.text}</p>
                    </Styled.InfoCard>
                ))}
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiShield />
                    </span>
                    <h2>TCP and UDP in simple words</h2>
                </div>

                <div className="compareGrid">
                    <div className="compareCard">
                        <h3>TCP</h3>
                        <p>
                            TCP stands for Transmission Control Protocol. It is
                            connection-oriented and focuses more on reliability,
                            order, and error checking.
                        </p>
                    </div>

                    <div className="compareCard">
                        <h3>UDP</h3>
                        <p>
                            UDP stands for User Datagram Protocol. It is lighter
                            and faster, but it does not guarantee delivery in
                            the same way TCP does.
                        </p>
                    </div>
                </div>

                <p>
                    Some services use only TCP, some use only UDP, and some can
                    use both depending on the situation.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiServer />
                    </span>
                    <h2>Common ports table</h2>
                </div>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Port</th>
                                <th>Service</th>
                                <th>Description</th>
                                <th>TCP</th>
                                <th>UDP</th>
                            </tr>
                        </thead>

                        <tbody>
                            {commonPorts.map((item) => (
                                <tr key={`${item.port}-${item.service}`}>
                                    <td className="portCell">{item.port}</td>
                                    <td>{item.service}</td>
                                    <td>{item.description}</td>
                                    <td>
                                        <span
                                            className={`protocolBadge ${
                                                item.tcp ? "on" : "off"
                                            }`}
                                        >
                                            {item.tcp ? "Yes" : "No"}
                                        </span>
                                    </td>
                                    <td>
                                        <span
                                            className={`protocolBadge ${
                                                item.udp ? "on" : "off"
                                            }`}
                                        >
                                            {item.udp ? "Yes" : "No"}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiSettings />
                    </span>
                    <h2>How to read this list properly</h2>
                </div>

                <ul>
                    <li>
                        A port number tells you where a service usually listens
                    </li>
                    <li>A service can be configured to use a different port</li>
                    <li>
                        Some applications use these as defaults, not as strict
                        permanent rules
                    </li>
                    <li>
                        Firewalls, proxies, containers, and hosting panels may
                        change the actual exposed port
                    </li>
                </ul>

                <p>
                    So do not treat port lists as sacred stone tablets from the
                    networking gods. They are common defaults, not universal
                    laws.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiAlertCircle />
                    </span>
                    <h2>Important note</h2>
                </div>

                <p>
                    Port numbers alone do not guarantee security or identity.
                    Just because something is running on port 443 does not mean
                    it is automatically safe, and just because a service usually
                    uses one port does not mean it cannot be moved to another.
                </p>

                <p>
                    In real systems, always verify the actual service,
                    configuration, firewall rules, and transport protocol.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    Common port lists help you quickly recognize which service
                    may be running on a machine. Ports such as 80, 443, 22,
                    3306, and 1433 are widely known defaults, but real-world
                    systems can customize them. Learn the common ports, but also
                    remember that configuration can always change.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default CommonPortLists;
