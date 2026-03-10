import React from "react";
import {
    FiMonitor,
    FiShield,
    FiDollarSign,
    FiHardDrive,
    FiFolder,
    FiUser,
    FiSettings,
    FiCheckCircle,
    FiAlertCircle,
    FiCode,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const comparisonCards = [
    {
        icon: <FiCode />,
        title: "Source model",
        linux: "Linux is open source, so its code can be viewed, modified, and redistributed under open-source licenses.",
        windows:
            "Windows is proprietary software. Its source code is generally not available for public modification.",
    },
    {
        icon: <FiSettings />,
        title: "Customization",
        linux: "Linux distributions can be customized heavily, from desktop environment to services and system behavior.",
        windows:
            "Windows supports many settings and tools, but deep OS-level customization is much more restricted.",
    },
    {
        icon: <FiDollarSign />,
        title: "Cost and licensing",
        linux: "Many Linux distributions are available at no cost and can often be installed on many systems.",
        windows:
            "Windows usually requires a paid license depending on edition, hardware, or enterprise agreements.",
    },
    {
        icon: <FiShield />,
        title: "Security model",
        linux: "Linux uses a strong user and permissions model, with clear separation between normal users and administrative access.",
        windows:
            "Windows also has user accounts, permissions, and admin access, but historically it has been targeted more often by malware because of its popularity.",
    },
    {
        icon: <FiHardDrive />,
        title: "Boot and storage",
        linux: "Linux is flexible in boot configuration and traditionally often uses a dedicated swap partition or swap file.",
        windows:
            "Windows typically uses a page file for virtual memory and follows its own boot and partition conventions.",
    },
    {
        icon: <FiFolder />,
        title: "File system style",
        linux: "Linux uses a unified directory tree starting from '/'. Paths use forward slashes and file names are case-sensitive by default.",
        windows:
            "Windows commonly uses drive letters like C: and D:. Paths traditionally use backslashes and file names are usually case-insensitive.",
    },
];

const keyPoints = [
    "Linux is open source and encourages modification and redistribution.",
    "Windows is proprietary and controlled mainly by Microsoft.",
    "Linux distributions come from many communities and companies.",
    "Windows is usually more standardized for consumer desktop use.",
    "Linux is known for flexibility, scripting power, and server use.",
    "Windows is known for broad desktop software support and familiarity.",
];

const LinuxVsWindows = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiMonitor />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiCode />
                        Original topic: May 30, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>Linux vs Windows</h1>

                <p className="lead">
                    Linux and Windows are both operating systems, but they are
                    built around very different ideas. Linux is known for being
                    open, flexible, and highly customizable. Windows is known
                    for broad consumer adoption, commercial software support,
                    and a more controlled ecosystem.
                </p>

                <div className="heroSummary">
                    <div className="summaryCard linux">
                        <h2>Linux</h2>
                        <p>
                            Open-source operating system family with many
                            distributions, strong customization, and wide use in
                            servers, development, and power-user workflows.
                        </p>
                    </div>

                    <div className="summaryCard windows">
                        <h2>Windows</h2>
                        <p>
                            Proprietary operating system family from Microsoft,
                            widely used on personal computers and known for
                            mainstream software and hardware compatibility.
                        </p>
                    </div>
                </div>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Simple definition</h2>
                </div>

                <p>
                    Linux is not a single product in the same way Windows is. It
                    is a family of operating systems built around the Linux
                    kernel, combined with different tools, desktop environments,
                    and package systems. That is why people talk about Linux
                    distributions such as Ubuntu, Fedora, Debian, Arch, and
                    others.
                </p>

                <p>
                    Windows, on the other hand, is mainly developed and
                    distributed by Microsoft. Different editions exist, but the
                    ecosystem is more centrally controlled.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCode />
                        </span>
                        <h2>What made Linux different</h2>
                    </div>

                    <p>
                        One major reason Linux became important was that it gave
                        users and developers more freedom to inspect, change,
                        and extend the system.
                    </p>

                    <ul>
                        {keyPoints.map((point) => (
                            <li key={point}>{point}</li>
                        ))}
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiAlertCircle />
                        </span>
                        <h2>Important reality check</h2>
                    </div>

                    <p>
                        Neither system is universally "better" in every
                        situation. The real answer depends on what the computer
                        is being used for.
                    </p>

                    <ul>
                        <li>
                            Linux is often preferred for servers and development
                        </li>
                        <li>
                            Windows is often preferred for mainstream desktop
                            apps and gaming compatibility
                        </li>
                        <li>Both have strengths, weaknesses, and trade-offs</li>
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiSettings />
                    </span>
                    <h2>Major comparison areas</h2>
                </div>

                <div className="comparisonGrid">
                    {comparisonCards.map((item) => (
                        <article key={item.title} className="comparisonCard">
                            <div className="topRow">
                                <span className="miniIcon">{item.icon}</span>
                                <h3>{item.title}</h3>
                            </div>

                            <div className="compareColumns">
                                <div className="side linux">
                                    <strong>Linux</strong>
                                    <p>{item.linux}</p>
                                </div>

                                <div className="side windows">
                                    <strong>Windows</strong>
                                    <p>{item.windows}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiUser />
                    </span>
                    <h2>Users, permissions, and security</h2>
                </div>

                <p>
                    The original note correctly highlighted that Linux strongly
                    separates normal users from administrative control. A normal
                    user account is meant for day-to-day work, while elevated
                    privileges are used only when needed.
                </p>

                <p>
                    Windows also supports permissions, administrative users, and
                    security controls, but Linux became especially respected in
                    technical communities for its permission model and its use
                    in server environments.
                </p>

                <div className="noteBox">
                    <h3>Important nuance</h3>
                    <p>
                        It is more accurate to say Linux often has a strong
                        security reputation rather than claiming it is simply
                        "secure" and Windows is not. Security depends on
                        configuration, updates, software choices, and user
                        behavior on both systems.
                    </p>
                </div>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiFolder />
                        </span>
                        <h2>Paths and file naming</h2>
                    </div>

                    <ul>
                        <li>
                            Linux paths use forward slashes like
                            /home/user/file.txt
                        </li>
                        <li>
                            Windows paths traditionally use backslashes like
                            C:\Users\Name\File.txt
                        </li>
                        <li>Linux file names are usually case-sensitive</li>
                        <li>
                            Windows file names are usually case-insensitive in
                            normal use
                        </li>
                    </ul>

                    <p>
                        That means files such as "abc" and "aBC" are different
                        on Linux, but often treated as the same on Windows.
                    </p>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiHardDrive />
                        </span>
                        <h2>Directory structure</h2>
                    </div>

                    <p>
                        Windows traditionally uses drive letters such as C:, D:,
                        and E:. Linux uses a single unified tree rooted at "/".
                    </p>

                    <ul>
                        <li>Linux starts from one main root directory</li>
                        <li>
                            Windows often presents storage as separate drives
                        </li>
                        <li>
                            Linux home folders encourage user-specific
                            organization
                        </li>
                        <li>
                            Backups can be easier when files are kept inside the
                            user home directory
                        </li>
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiMonitor />
                    </span>
                    <h2>Distributions and ecosystem</h2>
                </div>

                <p>
                    The original post listed several Linux distributions. That
                    general idea is correct: Linux comes in many variants built
                    by different communities or companies. Each distribution can
                    choose different package managers, desktop environments,
                    default tools, and release styles.
                </p>

                <div className="distroGrid">
                    <div className="distroCard">
                        <h3>Linux examples</h3>
                        <p>
                            Ubuntu, Debian, Fedora, Red Hat Enterprise Linux,
                            openSUSE, Arch Linux, Linux Mint and many others.
                        </p>
                    </div>

                    <div className="distroCard">
                        <h3>Windows family</h3>
                        <p>
                            Windows editions mainly come from Microsoft, such as
                            Home, Pro, Enterprise, and Server editions.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Best practical conclusion</h2>
                </div>

                <p>
                    Linux is powerful when you want control, customization,
                    scripting, server reliability, or open-source flexibility.
                    Windows is powerful when you want broad commercial software
                    compatibility, a familiar desktop environment, and strong
                    support for common consumer workflows.
                </p>

                <p>
                    So the smarter comparison is not "Which one is absolutely
                    better?" but rather "Which one fits the job better?"
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    Linux and Windows are both important operating systems, but
                    they differ in source model, customization, licensing, file
                    structure, and ecosystem design. Linux gives more freedom
                    and flexibility. Windows gives more standardization and
                    mainstream compatibility. The better choice depends on the
                    user's goals.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default LinuxVsWindows;
