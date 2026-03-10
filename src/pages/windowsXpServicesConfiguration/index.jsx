import React from "react";
import {
    FiAlertTriangle,
    FiCheckCircle,
    FiClock,
    FiCpu,
    FiInfo,
    FiLayers,
    FiMonitor,
    FiSettings,
    FiShield,
    FiTool,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const serviceList = [
    {
        name: "Alerter",
        note: "Can usually be set to Manual on many personal systems.",
    },
    {
        name: "Computer Browser",
        note: "Often not needed on simple single-PC setups.",
    },
    {
        name: "Distributed Link Tracking Client",
        note: "If you have NTFS partitions and rely on linked files, review before changing.",
    },
    {
        name: "Fast User Switching Compatibility",
        note: "Changing this may remove the Switch User option.",
    },
    {
        name: "Indexing Service",
        note: "Can reduce background activity if you do not need file indexing.",
    },
    {
        name: "Internet Connection Firewall / Internet Connection Sharing",
        note: "Review carefully if the machine shares internet or uses XP firewall features.",
    },
    {
        name: "Messenger",
        note: "Old Windows service, not the same thing as modern chat apps.",
    },
    {
        name: "Remote Registry",
        note: "Often recommended to disable for security reasons on old systems.",
        highlight: "security",
    },
    {
        name: "Secondary Logon",
        note: "May be unnecessary on some home systems depending on usage.",
    },
    {
        name: "Server",
        note: "Review before changing if the machine shares files or printers.",
    },
    {
        name: "System Restore",
        note: "Only consider changing this if you do not use System Restore.",
    },
    {
        name: "TCP/IP NetBIOS Helper",
        note: "May be unnecessary in some environments, but depends on old network usage.",
    },
    {
        name: "Uninterruptible Power Supply",
        note: "Only relevant if the machine actually uses a UPS device.",
    },
    {
        name: "Upload Manager",
        note: "Can often be set to Manual on many systems.",
    },
    {
        name: "Wireless Zero Configuration",
        note: "Needed for many XP-era wireless setups, so review carefully before changing.",
    },
];

const WindowsXpServicesConfiguration = () => {
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
                        Original topic: July 21, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>
                    Windows XP Services Configuration: Turn Off / Disable
                    Unnecessary Services to Optimize Performance
                </h1>

                <p className="lead">
                    This archive note was originally about reducing unnecessary
                    background services in Windows XP to improve performance.
                    The main practical idea was simple: review services that are
                    not needed on a particular machine and set them to{" "}
                    <strong>Manual</strong> instead of leaving everything
                    running all the time.
                </p>
            </Styled.HeroCard>

            <Styled.WarningCard>
                <div className="sectionHead">
                    <span className="iconWrap warning">
                        <FiAlertTriangle />
                    </span>
                    <h2>Important historical context</h2>
                </div>

                <p>
                    This topic is specific to <strong>Windows XP</strong>, which
                    is now a very old operating system. The advice here should
                    be understood as an archive-era optimization note, not as a
                    general recommendation for modern Windows versions.
                </p>

                <p>
                    Services are not random decoration. Many are tied to system
                    features, networking, device support, user switching,
                    restore tools, and security behavior. So changing services
                    without understanding them can break things in weird and
                    deeply annoying ways.
                </p>
            </Styled.WarningCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCpu />
                        </span>
                        <h2>Main idea</h2>
                    </div>

                    <p>
                        A fresh XP installation could run many background
                        services. Some systems did not need all of them,
                        especially home machines with simpler usage. Reducing
                        unnecessary background activity could sometimes make the
                        system feel lighter.
                    </p>

                    <p>
                        The key point in the original post was not "blindly
                        disable everything". It was "review what you do not use
                        and prefer Manual where safe".
                    </p>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCheckCircle />
                        </span>
                        <h2>Best rule from the original note</h2>
                    </div>

                    <p>
                        Prefer setting a service to <strong>Manual</strong>{" "}
                        instead of <strong>Disabled</strong>.
                    </p>

                    <ul>
                        <li>
                            Manual means Windows can still start the service if
                            needed
                        </li>
                        <li>
                            Disabled means Windows cannot start it even when it
                            wants to
                        </li>
                        <li>
                            Manual is usually safer than fully disabling things
                        </li>
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiSettings />
                    </span>
                    <h2>How the original guide suggested opening Services</h2>
                </div>

                <div className="stepsBox">
                    <div className="step">
                        <span className="stepNo">1</span>
                        <div>
                            <strong>Right-click My Computer</strong>
                            <p>
                                Select <strong>Manage</strong>.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <span className="stepNo">2</span>
                        <div>
                            <strong>Open Services</strong>
                            <p>
                                Go to <strong>Services and Applications</strong>{" "}
                                and then <strong>Services</strong>.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <span className="stepNo">3</span>
                        <div>
                            <strong>Open a service entry</strong>
                            <p>
                                Double-click the service and review its startup
                                type.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <span className="stepNo">4</span>
                        <div>
                            <strong>Prefer Manual</strong>
                            <p>
                                The original note strongly recommended Manual
                                instead of Disabled.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="tipBox">
                    <strong>
                        Alternate path mentioned in the original post:
                    </strong>
                    <p>
                        You could also open it through Administrative Tools and
                        then Computer Management.
                    </p>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiShield />
                    </span>
                    <h2>Manual vs Disabled</h2>
                </div>

                <div className="compareGrid">
                    <div className="compareCard safer">
                        <h3>Manual</h3>
                        <p>
                            Safer choice for many cases. The service does not
                            always run automatically, but Windows can still
                            start it when required.
                        </p>
                    </div>

                    <div className="compareCard risky">
                        <h3>Disabled</h3>
                        <p>
                            Riskier choice. If Windows or some feature needs the
                            service, it may fail and produce errors because the
                            service is blocked from starting.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiTool />
                    </span>
                    <h2>Services mentioned in the original archive post</h2>
                </div>

                <p className="sectionIntro">
                    These were the services listed in the original note as
                    candidates to review and often set to Manual, depending on
                    the system and the way it was used.
                </p>

                <div className="serviceGrid">
                    {serviceList.map((service) => (
                        <article
                            key={service.name}
                            className={`serviceCard ${
                                service.highlight ? service.highlight : ""
                            }`}
                        >
                            <div className="serviceTop">
                                <h3>{service.name}</h3>

                                {service.highlight === "security" ? (
                                    <span className="tag">Security note</span>
                                ) : (
                                    <span className="tag">Review</span>
                                )}
                            </div>

                            <p>{service.note}</p>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiMonitor />
                        </span>
                        <h2>When this kind of tuning made sense</h2>
                    </div>

                    <ul>
                        <li>Older hardware with limited RAM</li>
                        <li>Single-user personal systems</li>
                        <li>
                            Machines not using many network-sharing features
                        </li>
                        <li>
                            Systems where every little bit of background load
                            mattered
                        </li>
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiInfo />
                        </span>
                        <h2>When caution was required</h2>
                    </div>

                    <ul>
                        <li>File sharing or printer sharing was in use</li>
                        <li>Wireless networking depended on XP services</li>
                        <li>System Restore was actually needed</li>
                        <li>
                            Remote or administrative features were being used
                        </li>
                        <li>Special hardware or enterprise setup existed</li>
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Refactored conclusion</h2>
                </div>

                <p>
                    The useful principle in this old XP tuning advice is still
                    understandable: do not let unnecessary background services
                    consume system resources without reason. But the safer and
                    smarter approach is always to understand what a service does
                    before changing it.
                </p>

                <p>
                    In the original note, the strongest practical advice was to
                    use <strong>Manual</strong> rather than{" "}
                    <strong>Disabled</strong>, because Manual keeps Windows from
                    painting itself into a corner.
                </p>
            </Styled.SectionCard>
        </Styled.Wrapper>
    );
};

export default WindowsXpServicesConfiguration;
