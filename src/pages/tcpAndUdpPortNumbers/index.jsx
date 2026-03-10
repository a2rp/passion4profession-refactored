import React from "react";
import {
    FiHash,
    FiClock,
    FiServer,
    FiRadio,
    FiShield,
    FiAlertCircle,
    FiCheckCircle,
    FiLayers,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const wellKnownPorts = [
    { port: "20", protocol: "TCP", service: "FTP data" },
    { port: "21", protocol: "TCP", service: "FTP control" },
    { port: "22", protocol: "TCP", service: "SSH" },
    { port: "23", protocol: "TCP", service: "Telnet" },
    { port: "25", protocol: "TCP", service: "SMTP" },
    { port: "53", protocol: "TCP / UDP", service: "DNS" },
    { port: "67", protocol: "UDP", service: "DHCP server" },
    { port: "68", protocol: "UDP", service: "DHCP client" },
    { port: "69", protocol: "UDP", service: "TFTP" },
    { port: "80", protocol: "TCP", service: "HTTP" },
    { port: "110", protocol: "TCP", service: "POP3" },
    { port: "123", protocol: "UDP", service: "NTP" },
    { port: "143", protocol: "TCP", service: "IMAP" },
    { port: "161", protocol: "UDP", service: "SNMP" },
    { port: "389", protocol: "TCP / UDP", service: "LDAP" },
    { port: "443", protocol: "TCP", service: "HTTPS" },
    { port: "445", protocol: "TCP", service: "SMB / Microsoft-DS" },
    { port: "3389", protocol: "TCP / UDP", service: "RDP" },
];

const registeredPorts = [
    { port: "1080", protocol: "TCP", service: "SOCKS proxy" },
    { port: "1194", protocol: "TCP / UDP", service: "OpenVPN" },
    { port: "1433", protocol: "TCP", service: "Microsoft SQL Server" },
    { port: "1521", protocol: "TCP", service: "Oracle listener" },
    { port: "1883", protocol: "TCP / UDP", service: "MQTT" },
    { port: "2049", protocol: "TCP / UDP", service: "NFS" },
    { port: "3306", protocol: "TCP / UDP", service: "MySQL" },
    { port: "3389", protocol: "TCP / UDP", service: "RDP" },
    { port: "3478", protocol: "TCP / UDP", service: "STUN / TURN" },
    { port: "3690", protocol: "TCP / UDP", service: "Subversion" },
    { port: "5432", protocol: "TCP / UDP", service: "PostgreSQL" },
    { port: "5900", protocol: "TCP / UDP", service: "VNC" },
    { port: "6379", protocol: "TCP", service: "Redis" },
    { port: "8080", protocol: "TCP", service: "HTTP alternate" },
];

const modernDevPorts = [
    { port: "3000", service: "Common dev server port" },
    { port: "4173", service: "Vite preview default" },
    { port: "5000", service: "Custom backend / tooling" },
    { port: "5173", service: "Vite dev server default" },
    { port: "8000", service: "Python / alternate HTTP servers" },
    { port: "8080", service: "Alternate HTTP / app servers" },
    { port: "27017", service: "MongoDB" },
];

const TcpAndUdpPortNumbers = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiHash />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiClock />
                        Original topic: October 3, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>List of TCP and UDP port numbers</h1>

                <p className="lead">
                    Port numbers are logical communication endpoints used by
                    network protocols. They help a single device run many
                    different network services at the same time. For example,
                    one machine can serve a website, handle SSH logins, and talk
                    to a database because each service listens on a different
                    port.
                </p>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiLayers />
                    </span>
                    <h2>What is a port number?</h2>
                </div>

                <p>
                    A port number is a numeric identifier used at the transport
                    layer. It tells the operating system which application or
                    service should receive incoming network traffic.
                </p>

                <p>
                    Think of an IP address as the building address and the port
                    number as the specific room number inside that building.
                    Same building, many rooms. Same machine, many services.
                </p>

                <div className="noteBox">
                    <strong>Example</strong>
                    <p>
                        If a browser visits a website, it usually connects to
                        port 80 for HTTP or port 443 for HTTPS.
                    </p>
                </div>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiServer />
                        </span>
                        <h2>TCP in simple words</h2>
                    </div>

                    <p>
                        TCP stands for Transmission Control Protocol. It is
                        connection-oriented and focuses on reliable delivery.
                    </p>

                    <ul>
                        <li>Data arrives in order</li>
                        <li>Lost packets can be retransmitted</li>
                        <li>Useful when correctness matters</li>
                        <li>Common for web, email, SSH, databases</li>
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiRadio />
                        </span>
                        <h2>UDP in simple words</h2>
                    </div>

                    <p>
                        UDP stands for User Datagram Protocol. It is faster and
                        lighter, but it does not guarantee delivery or order.
                    </p>

                    <ul>
                        <li>Less overhead than TCP</li>
                        <li>No connection setup like TCP</li>
                        <li>Useful for speed-sensitive traffic</li>
                        <li>Common for DNS, streaming, gaming, VoIP</li>
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Main port ranges</h2>
                </div>

                <div className="rangeGrid">
                    <div className="rangeCard">
                        <h3>0 - 1023</h3>
                        <p className="rangeLabel">Well-known ports</p>
                        <p>
                            Common system and standard service ports. These are
                            the famous ones like 22, 53, 80, and 443.
                        </p>
                    </div>

                    <div className="rangeCard">
                        <h3>1024 - 49151</h3>
                        <p className="rangeLabel">Registered ports</p>
                        <p>
                            Assigned to many specific applications and services,
                            but not as universal as the well-known group.
                        </p>
                    </div>

                    <div className="rangeCard">
                        <h3>49152 - 65535</h3>
                        <p className="rangeLabel">Dynamic / private ports</p>
                        <p>
                            Often used temporarily by clients or by custom
                            software for ephemeral connections.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.TableSection>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiServer />
                    </span>
                    <h2>Important well-known ports</h2>
                </div>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Port</th>
                                <th>Protocol</th>
                                <th>Service</th>
                            </tr>
                        </thead>
                        <tbody>
                            {wellKnownPorts.map((item) => (
                                <tr key={`${item.port}-${item.service}`}>
                                    <td>{item.port}</td>
                                    <td>{item.protocol}</td>
                                    <td>{item.service}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Styled.TableSection>

            <Styled.TableSection>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiLayers />
                    </span>
                    <h2>Useful registered ports</h2>
                </div>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Port</th>
                                <th>Protocol</th>
                                <th>Service</th>
                            </tr>
                        </thead>
                        <tbody>
                            {registeredPorts.map((item) => (
                                <tr key={`${item.port}-${item.service}`}>
                                    <td>{item.port}</td>
                                    <td>{item.protocol}</td>
                                    <td>{item.service}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Styled.TableSection>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiHash />
                    </span>
                    <h2>Ports modern developers see often</h2>
                </div>

                <div className="devPortsGrid">
                    {modernDevPorts.map((item) => (
                        <div
                            className="devPortCard"
                            key={`${item.port}-${item.service}`}
                        >
                            <div className="portNo">{item.port}</div>
                            <div className="portDesc">{item.service}</div>
                        </div>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiAlertCircle />
                        </span>
                        <h2>Important practical notes</h2>
                    </div>

                    <ul>
                        <li>
                            The same port number can mean different things for
                            TCP and UDP
                        </li>
                        <li>
                            Some ports are official, but real-world software may
                            still use them unofficially
                        </li>
                        <li>Many apps allow port changes in configuration</li>
                        <li>
                            Seeing a port number alone does not prove which app
                            is running there
                        </li>
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiShield />
                        </span>
                        <h2>Security angle</h2>
                    </div>

                    <ul>
                        <li>Open ports increase exposure to the network</li>
                        <li>Unused ports should usually not be left exposed</li>
                        <li>Firewalls control which ports are reachable</li>
                        <li>
                            Sensitive services like SSH, databases, and admin
                            panels need careful access control
                        </li>
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Best way to remember this topic</h2>
                </div>

                <div className="memoryGrid">
                    <div className="memoryCard">
                        <strong>IP address</strong>
                        <p>Which machine?</p>
                    </div>

                    <div className="memoryCard">
                        <strong>Port number</strong>
                        <p>Which service on that machine?</p>
                    </div>

                    <div className="memoryCard">
                        <strong>TCP or UDP</strong>
                        <p>What style of communication is used?</p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    TCP and UDP port numbers help network traffic reach the
                    correct application on a machine. Well-known ports cover
                    standard services, registered ports are used by many named
                    applications, and dynamic ports are commonly used for
                    temporary or custom communication. The giant raw list is
                    useful as a reference, but understanding the structure is
                    much more valuable than memorizing thousands of numbers like
                    a haunted spreadsheet.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default TcpAndUdpPortNumbers;
