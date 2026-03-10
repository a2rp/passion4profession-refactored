import React from "react";
import {
    FiLayers,
    FiClock,
    FiArrowRight,
    FiCheckCircle,
    FiGlobe,
    FiServer,
    FiShield,
    FiBox,
    FiWifi,
    FiCpu,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const osiLayers = [
    {
        number: 7,
        name: "Application",
        icon: <FiGlobe />,
        purpose:
            "Provides network services directly to user-facing applications.",
        examples:
            "HTTP, HTTPS, FTP, SMTP, DNS, browsers, email clients, chat apps",
        analogy:
            "This is the part the user sees and interacts with, like opening a browser or sending an email.",
    },
    {
        number: 6,
        name: "Presentation",
        icon: <FiBox />,
        purpose:
            "Handles data formatting, translation, encryption, and compression.",
        examples:
            "SSL/TLS concepts, JPEG, PNG, ASCII, UTF-8, data serialization",
        analogy:
            "It makes sure both sides understand the data in the same format.",
    },
    {
        number: 5,
        name: "Session",
        icon: <FiCheckCircle />,
        purpose:
            "Creates, manages, and ends communication sessions between systems.",
        examples: "Session establishment, checkpoints, reconnect behavior",
        analogy:
            "It is like managing a conversation so both sides know when it starts, continues, and ends.",
    },
    {
        number: 4,
        name: "Transport",
        icon: <FiShield />,
        purpose:
            "Provides end-to-end data delivery, reliability, segmentation, and flow control.",
        examples: "TCP, UDP, ports, retransmission, sequencing",
        analogy:
            "It makes sure the message reaches the correct application, and in TCP's case, reaches reliably.",
    },
    {
        number: 3,
        name: "Network",
        icon: <FiArrowRight />,
        purpose:
            "Handles logical addressing and routing data between networks.",
        examples: "IP addresses, routers, packet forwarding, routing paths",
        analogy:
            "It decides where the data should go across different networks.",
    },
    {
        number: 2,
        name: "Data Link",
        icon: <FiServer />,
        purpose:
            "Handles framing, MAC addressing, local delivery, and error detection on the same network segment.",
        examples:
            "Ethernet frames, switches, MAC addresses, ARP-related local context",
        analogy:
            "It helps devices communicate correctly on the same local network.",
    },
    {
        number: 1,
        name: "Physical",
        icon: <FiWifi />,
        purpose: "Transmits raw bits over the actual physical medium.",
        examples:
            "Cables, signals, radio waves, connectors, electrical and optical transmission",
        analogy:
            "This is the actual wire, signal, or radio path carrying the bits.",
    },
];

const realWorldFlow = [
    "You type a website address in your browser",
    "The application layer handles the user-facing request",
    "The presentation layer helps with format and encryption-related handling",
    "The session layer manages the communication session",
    "The transport layer breaks data into segments and uses ports",
    "The network layer adds IP addressing and routing logic",
    "The data link layer prepares frames for the local network",
    "The physical layer sends bits through cable or wireless signal",
];

const deviceExamples = [
    {
        title: "Router",
        description:
            "Mostly associated with the Network layer because it forwards packets using IP addresses.",
    },
    {
        title: "Switch",
        description:
            "Mostly associated with the Data Link layer because it uses MAC addresses inside a local network.",
    },
    {
        title: "Hub",
        description:
            "Associated with the Physical layer because it simply repeats signals without intelligent forwarding.",
    },
    {
        title: "Browser or email client",
        description:
            "Seen at the Application layer because this is where the user interacts with network services.",
    },
];

const OsiModel = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiLayers />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiClock />
                        Original topic: November 25, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>OSI Model</h1>

                <p className="lead">
                    The OSI Model, or Open Systems Interconnection Model, is a
                    conceptual framework that explains how data moves from one
                    computer to another through a network. It breaks networking
                    into 7 layers so each part of communication can be
                    understood more clearly.
                </p>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Simple definition</h2>
                </div>

                <p>
                    The OSI Model is not a physical machine or a software
                    package. It is a learning model. It helps us understand what
                    each part of network communication is responsible for.
                </p>

                <p>
                    Instead of seeing networking as one giant tangled noodle
                    monster, the OSI Model divides it into 7 layers. Each layer
                    has its own job and works with the layers above and below
                    it.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiLayers />
                    </span>
                    <h2>The 7 layers of the OSI Model</h2>
                </div>

                <div className="layersGrid">
                    {osiLayers.map((layer) => (
                        <article key={layer.number} className="layerCard">
                            <div className="layerTop">
                                <div className="layerNumber">
                                    {layer.number}
                                </div>
                                <div className="layerIcon">{layer.icon}</div>
                            </div>

                            <h3>{layer.name}</h3>

                            <p className="purpose">{layer.purpose}</p>

                            <div className="miniBlock">
                                <strong>Examples</strong>
                                <p>{layer.examples}</p>
                            </div>

                            <div className="miniBlock">
                                <strong>In simple words</strong>
                                <p>{layer.analogy}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiArrowRight />
                        </span>
                        <h2>How communication happens</h2>
                    </div>

                    <p>
                        When one computer sends data, the data moves from the
                        top layer down to the bottom layer on the sender side.
                        Then it travels through the network. On the receiver
                        side, it moves from the bottom layer back up to the top.
                    </p>

                    <div className="flowList">
                        {realWorldFlow.map((item, index) => (
                            <div key={item} className="flowItem">
                                <span className="flowNo">{index + 1}</span>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCpu />
                        </span>
                        <h2>Why this model matters</h2>
                    </div>

                    <ul>
                        <li>It makes networking easier to learn</li>
                        <li>It helps isolate problems layer by layer</li>
                        <li>It gives a common language for discussion</li>
                        <li>
                            It helps explain how protocols and devices fit
                            together
                        </li>
                        <li>
                            It reduces confusion when debugging network issues
                        </li>
                    </ul>

                    <p>
                        For example, if a cable is broken, the issue is likely
                        near the Physical layer. If an IP route is wrong, the
                        issue is more likely at the Network layer.
                    </p>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiGlobe />
                    </span>
                    <h2>Easy real-world example</h2>
                </div>

                <p>
                    Suppose you open a website in your browser. Your browser
                    belongs near the Application layer. The request gets
                    formatted, possibly encrypted, split into transport-level
                    pieces, assigned IP addressing for routing, packed into
                    frames for the local network, and finally sent as electrical
                    or wireless signals.
                </p>

                <p>
                    The receiving side does the reverse. That is why networking
                    works like a stack: each layer adds its own information on
                    the way down, and removes it on the way up.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiServer />
                    </span>
                    <h2>Devices and layers</h2>
                </div>

                <div className="deviceGrid">
                    {deviceExamples.map((item) => (
                        <article key={item.title} className="deviceCard">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiShield />
                        </span>
                        <h2>Common exam and interview trap</h2>
                    </div>

                    <p>
                        The OSI Model is a conceptual model, not a rule that all
                        real systems literally implement layer by layer in a
                        pure textbook way.
                    </p>

                    <p>
                        Real-world protocols often blur boundaries. Still, the
                        model is extremely useful for understanding and
                        explaining networking.
                    </p>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiBox />
                        </span>
                        <h2>OSI vs practical internet networking</h2>
                    </div>

                    <p>
                        In actual internet discussions, people often use the
                        TCP/IP model more directly. But the OSI Model remains
                        popular for teaching because it breaks things into finer
                        layers and makes the ideas easier to separate.
                    </p>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Best practical conclusion</h2>
                </div>

                <p>
                    The OSI Model helps you think clearly about network
                    communication. Each layer has its own role, from the actual
                    cable and signals at the bottom to user-facing applications
                    at the top.
                </p>

                <p>
                    Once you understand these layers, networking stops looking
                    like black magic and starts looking like organized packet
                    choreography.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    The OSI Model is a 7-layer conceptual framework used to
                    understand how data moves through a network. It helps
                    explain protocols, devices, troubleshooting, and the flow of
                    communication in a structured way.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default OsiModel;
