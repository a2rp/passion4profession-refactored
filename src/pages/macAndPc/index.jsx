import React from "react";
import {
    FiMonitor,
    FiCpu,
    FiCheckCircle,
    FiAlertCircle,
    FiGrid,
    FiHardDrive,
    FiCode,
    FiShield,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const comparisonRows = [
    {
        label: "Core idea",
        mac: "Tightly controlled hardware and software experience from Apple.",
        pc: "Broader ecosystem with many hardware brands and configurations.",
    },
    {
        label: "Flexibility",
        mac: "More curated and opinionated user experience.",
        pc: "Usually offers more hardware variety, upgrade choice, and custom builds.",
    },
    {
        label: "Software compatibility",
        mac: "Strong support for general productivity, creative tools, and development.",
        pc: "Very broad support, especially for legacy software, gaming, and specialized enterprise tools.",
    },
    {
        label: "Gaming",
        mac: "Improved over time, but still not the primary gaming platform for most users.",
        pc: "Usually stronger choice for high-end gaming and wider game support.",
    },
    {
        label: "User experience",
        mac: "Known for consistency and polished integration.",
        pc: "Can be excellent, but quality depends more on the hardware and setup.",
    },
    {
        label: "Best for",
        mac: "Users who want a streamlined ecosystem and strong hardware-software integration.",
        pc: "Users who want choice, customization, broad compatibility, or gaming focus.",
    },
];

const strengths = {
    mac: [
        "Tight integration between hardware and operating system",
        "Consistent design and polished user experience",
        "Strong reputation in creative and media workflows",
        "Good ecosystem integration with other Apple devices",
    ],
    pc: [
        "Huge hardware variety across many price ranges",
        "Wider game support and broader software coverage",
        "Easier to customize, repair, or upgrade in many cases",
        "Large presence in business, education, and gaming ecosystems",
    ],
};

const MacAndPc = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiMonitor />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiCpu />
                        Original topic: May 30, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>Mac and PC</h1>

                <p className="lead">
                    The old Mac vs PC debate has always attracted strong
                    opinions, but the useful question is not "which side wins?"
                    The useful question is "which kind of computer fits the
                    user, the workflow, and the budget better?"
                </p>

                <p className="lead secondary">
                    In simple terms, a Mac is an Apple computer running macOS,
                    while a PC in common usage usually means a computer running
                    Windows. Both are personal computers. They simply come from
                    different ecosystems, design choices, and product
                    philosophies.
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
                    A Mac is built by Apple and runs macOS. A PC, in everyday
                    tech language, usually refers to a Windows computer made by
                    companies such as Dell, HP, Lenovo, ASUS, Acer, MSI, and
                    many others.
                </p>

                <p>
                    Both can browse the web, run office software, play media,
                    connect to networks, use printers, store files, and handle
                    normal day-to-day computing tasks. The real differences show
                    up in ecosystem design, hardware choice, software support,
                    gaming, customization, and user preference.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiGrid />
                        </span>
                        <h2>What a Mac usually emphasizes</h2>
                    </div>

                    <ul>
                        {strengths.mac.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiHardDrive />
                        </span>
                        <h2>What a PC usually emphasizes</h2>
                    </div>

                    <ul>
                        {strengths.pc.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiAlertCircle />
                    </span>
                    <h2>Important correction to old myths</h2>
                </div>

                <p>
                    It is not accurate to say that Macs "think like humans"
                    while PCs think in the opposite way. Both are machines. Both
                    process data according to software and hardware design. The
                    real difference is not mystical intelligence. It is user
                    interface design, operating system behavior, hardware
                    integration, and software ecosystem.
                </p>

                <p>
                    It is also not useful to claim that one platform can do
                    absolutely everything the other can do in exactly the same
                    way. In practice, capability depends on specific software,
                    hardware support, workflows, licensing, and compatibility.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCode />
                    </span>
                    <h2>Software and file compatibility</h2>
                </div>

                <p>
                    Many common file formats work across both platforms. Office
                    documents, images, PDFs, audio files, videos, and archives
                    can usually be exchanged between Mac and PC without drama,
                    assuming compatible apps are installed.
                </p>

                <p>
                    Many major apps also exist on both platforms, though not
                    every title does. Some workflows depend on platform-specific
                    software, and that can become a deciding factor.
                </p>

                <div className="exampleBox">
                    <h3>Practical rule</h3>

                    <ul>
                        <li>
                            Check the exact software you rely on before choosing
                            a platform
                        </li>
                        <li>
                            Check whether your file formats and plugins work the
                            same way
                        </li>
                        <li>
                            Check whether your hardware devices have proper
                            support
                        </li>
                    </ul>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiShield />
                    </span>
                    <h2>Stability, maintenance, and control</h2>
                </div>

                <p>
                    Macs are often praised for a stable and consistent overall
                    experience because Apple controls both hardware and software
                    more tightly. That reduces some variables.
                </p>

                <p>
                    PCs can also be very stable, but the experience depends more
                    on the exact hardware manufacturer, driver quality, Windows
                    setup, and how the machine is maintained. The upside is that
                    users often get more choice in components, upgrades, and
                    pricing.
                </p>
            </Styled.SectionCard>

            <Styled.TableCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiMonitor />
                    </span>
                    <h2>Mac vs PC at a glance</h2>
                </div>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Mac</th>
                                <th>PC</th>
                            </tr>
                        </thead>

                        <tbody>
                            {comparisonRows.map((row) => (
                                <tr key={row.label}>
                                    <td>{row.label}</td>
                                    <td>{row.mac}</td>
                                    <td>{row.pc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Styled.TableCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCheckCircle />
                        </span>
                        <h2>Choose a Mac if</h2>
                    </div>

                    <ul>
                        <li>
                            You value ecosystem integration with other Apple
                            devices
                        </li>
                        <li>
                            You want a more controlled hardware-software setup
                        </li>
                        <li>
                            Your workflow fits well within macOS-supported tools
                        </li>
                        <li>
                            You prefer consistency over maximum hardware choice
                        </li>
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCheckCircle />
                        </span>
                        <h2>Choose a PC if</h2>
                    </div>

                    <ul>
                        <li>
                            You want more hardware choices across many budgets
                        </li>
                        <li>
                            You care about gaming, custom builds, or upgrades
                        </li>
                        <li>
                            You depend on Windows-specific tools or enterprise
                            software
                        </li>
                        <li>
                            You want maximum flexibility in parts and vendors
                        </li>
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiAlertCircle />
                    </span>
                    <h2>Best conclusion</h2>
                </div>

                <p>
                    The better computer is not decided by fan shouting, logo
                    worship, or operating-system tribalism. It depends on what
                    you actually need to do.
                </p>

                <p>
                    If a user wants a polished ecosystem with tight integration,
                    a Mac may fit better. If a user wants wide hardware choice,
                    gaming strength, legacy compatibility, or deep
                    customization, a PC may fit better.
                </p>

                <p>
                    The smartest choice is the one that matches the user's work,
                    comfort, software needs, and budget.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>

                <p>
                    Mac and PC are both capable computing platforms. A Mac
                    usually offers a more tightly integrated experience, while a
                    PC usually offers broader choice and flexibility. Neither is
                    automatically better for everyone. The right choice depends
                    on the person using it.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default MacAndPc;
