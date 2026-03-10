import React from "react";
import {
    FiCpu,
    FiClock,
    FiCheckCircle,
    FiAlertCircle,
    FiTerminal,
    FiSettings,
    FiMonitor,
    FiShield,
    FiTool,
    FiRefreshCw,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const processGroups = [
    {
        title: "Core Windows and system processes",
        items: [
            {
                name: "svchost.exe",
                summary:
                    "Generic host process used by Windows to run services from DLL files. Multiple instances are normal.",
                caution:
                    "Do not kill random instances without checking which services are attached to them.",
            },
            {
                name: "dwm.exe",
                summary:
                    "Desktop Window Manager. Handles visual effects such as compositing, transparency, and window previews.",
                caution:
                    "Usually legitimate and useful. Turning it off changes the desktop visual behavior.",
            },
            {
                name: "ctfmon.exe",
                summary:
                    "Handles alternative user input, language bar, speech input, and certain text services.",
                caution:
                    "Can be disabled only if you do not use those input features.",
            },
            {
                name: "rundll32.exe",
                summary:
                    "Windows utility used to launch functionality stored inside DLL files.",
                caution:
                    "Valid when running from the proper system directory, but malware can imitate the name.",
            },
            {
                name: "conhost.exe",
                summary:
                    "Console Window Host. Helps command-line windows behave properly in newer Windows versions.",
                caution:
                    "Legitimate when located in the proper system folder and signed by Microsoft.",
            },
            {
                name: "cmd.exe",
                summary:
                    "Windows Command Prompt executable used to run command-line instructions.",
                caution:
                    "Normal if you opened it or a script launched it. Unexpected runs may need investigation.",
            },
            {
                name: "mobsync.exe",
                summary:
                    "Microsoft Sync Center process, used for offline sync and some connected-device scenarios.",
                caution:
                    "Usually harmless and tied to synchronization features.",
            },
        ],
    },
    {
        title: "Media and update-related processes",
        items: [
            {
                name: "jusched.exe",
                summary:
                    "Java Update Scheduler. It checks periodically for Java updates.",
                caution:
                    "Not usually critical for day-to-day running. Can often be disabled if you prefer manual updates.",
            },
            {
                name: "wmpnetwk.exe",
                summary:
                    "Windows Media Player Network Sharing service used for media sharing over a network.",
                caution:
                    "Can be disabled if you do not use media sharing features.",
            },
            {
                name: "wmpnscfg.exe",
                summary:
                    "Configuration process related to Windows Media Player network sharing.",
                caution:
                    "Usually appears with media sharing features and is not needed by everyone.",
            },
            {
                name: "dpupdchk.exe",
                summary:
                    "Likely an update checker related to Microsoft IntelliPoint software.",
                caution:
                    "Often not essential, but removing things blindly can break device software behavior.",
            },
        ],
    },
    {
        title: "Device utility processes",
        items: [
            {
                name: "ipoint.exe",
                summary:
                    "Microsoft IntelliPoint core process for Microsoft mouse features.",
                caution:
                    "Safe if installed with Microsoft mouse software. Removing it may disable extra mouse functions.",
            },
            {
                name: "itype.exe",
                summary:
                    "Microsoft IntelliType process for enhanced keyboard features and media keys.",
                caution:
                    "Usually harmless if installed with Microsoft keyboard software.",
            },
        ],
    },
    {
        title: "Citrix and remote access processes",
        items: [
            {
                name: "wfcrun32.exe",
                summary:
                    "Citrix process used in corporate remote application environments.",
                caution:
                    "Common in enterprise setups. Usually safe if installed from Citrix software.",
            },
            {
                name: "wfica32.exe",
                summary:
                    "Citrix ICA client process used for remote application or server access.",
                caution:
                    "Normal in work environments using Citrix. Not suspicious by itself.",
            },
        ],
    },
];

const investigationSteps = [
    "Check the exact process name carefully. Malware often imitates trusted names.",
    "Check the file location. A legitimate Windows process usually runs from its expected system folder.",
    "Check the digital signature or file properties when possible.",
    "Use Task Manager, Process Explorer, or similar tools to inspect command line and parent process.",
    "Do not disable a process only because it looks unfamiliar.",
];

const safeRules = [
    "Unknown does not automatically mean dangerous.",
    "System32 location matters for many Windows processes.",
    "Multiple svchost.exe processes are normal on Windows.",
    "Some processes belong to hardware drivers, media tools, or enterprise software.",
    "Disabling the wrong process can break a feature you actually use.",
];

const WhatIsThatProcess = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiCpu />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiClock />
                        Original topic: August 18, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>What is that process?</h1>

                <p className="lead">
                    Task Manager often shows process names that look cryptic,
                    suspicious, or just plain annoying. This page explains some
                    of the common processes from the original archive and shows
                    how to think about them more safely and clearly.
                </p>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Simple idea</h2>
                </div>

                <p>
                    A process is simply a running instance of a program or
                    system component. Some processes are part of Windows itself.
                    Some belong to device utilities. Some come from media
                    software, Java, Citrix, or third-party tools.
                </p>

                <p>
                    So when you see a strange name in Task Manager, the right
                    question is not "Can I kill this?" but "What is it, where is
                    it running from, and what feature depends on it?"
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiAlertCircle />
                        </span>
                        <h2>Common mistake</h2>
                    </div>

                    <p>
                        Many people assume unfamiliar process names are viruses.
                        That is not a safe conclusion.
                    </p>

                    <ul>
                        {safeRules.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiShield />
                        </span>
                        <h2>Safer mindset</h2>
                    </div>

                    <p>
                        Investigate first. Disable later. Random process-killing
                        is how operating systems develop emotional damage.
                    </p>

                    <ul>
                        {investigationSteps.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiTerminal />
                    </span>
                    <h2>How to identify a process properly</h2>
                </div>

                <div className="stepsBox">
                    <div className="step">
                        <span className="stepNo">1</span>
                        <div>
                            <strong>Check the file location</strong>
                            <p>
                                A real Windows process usually lives in an
                                expected folder like System32. A fake copy may
                                run from some strange path.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <span className="stepNo">2</span>
                        <div>
                            <strong>
                                Check command line and parent process
                            </strong>
                            <p>
                                Tools like Task Manager and Process Explorer can
                                reveal what launched the process and with what
                                arguments.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <span className="stepNo">3</span>
                        <div>
                            <strong>Check what feature uses it</strong>
                            <p>
                                Some processes exist only because a driver,
                                media feature, remote access tool, or language
                                service needs them.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <span className="stepNo">4</span>
                        <div>
                            <strong>
                                Only then decide whether to disable it
                            </strong>
                            <p>
                                Disable a process only if you understand the
                                cost of removing it.
                            </p>
                        </div>
                    </div>
                </div>
            </Styled.SectionCard>

            {processGroups.map((group) => (
                <Styled.SectionCard key={group.title}>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiSettings />
                        </span>
                        <h2>{group.title}</h2>
                    </div>

                    <Styled.ProcessGrid>
                        {group.items.map((item) => (
                            <article className="processCard" key={item.name}>
                                <div className="processTop">
                                    <span className="processBadge">
                                        {item.name}
                                    </span>
                                </div>

                                <p className="processSummary">{item.summary}</p>

                                <div className="cautionBox">
                                    <span className="cautionIcon">
                                        <FiAlertCircle />
                                    </span>
                                    <p>{item.caution}</p>
                                </div>
                            </article>
                        ))}
                    </Styled.ProcessGrid>
                </Styled.SectionCard>
            ))}

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiMonitor />
                        </span>
                        <h2>Examples worth knowing</h2>
                    </div>

                    <ul>
                        <li>
                            <strong>svchost.exe</strong> is often normal even
                            when many copies are running
                        </li>
                        <li>
                            <strong>dwm.exe</strong> is part of desktop visual
                            rendering
                        </li>
                        <li>
                            <strong>ctfmon.exe</strong> relates to text input
                            and language features
                        </li>
                        <li>
                            <strong>rundll32.exe</strong> launches DLL-based
                            functionality
                        </li>
                        <li>
                            <strong>conhost.exe</strong> is tied to console
                            windows and command-line behavior
                        </li>
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiTool />
                        </span>
                        <h2>Useful tools</h2>
                    </div>

                    <ul>
                        <li>Task Manager for basic inspection</li>
                        <li>Process Explorer for deeper process details</li>
                        <li>Services panel for service-related processes</li>
                        <li>Startup configuration tools for auto-run items</li>
                        <li>
                            Antivirus scan if the path or signature looks wrong
                        </li>
                    </ul>

                    <p>
                        The process name alone is only the first clue, not the
                        verdict.
                    </p>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiRefreshCw />
                    </span>
                    <h2>Best practical conclusion</h2>
                </div>

                <p>
                    Many strange-looking processes are perfectly normal. Some
                    belong to Windows internals, some to drivers, some to media
                    sharing, and some to enterprise tools such as Citrix.
                </p>

                <p>
                    The right way to judge a process is to inspect its location,
                    purpose, parent process, and related software. Process names
                    without context are misleading little goblins.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    A strange process name does not automatically mean malware.
                    Before disabling anything, check where it lives, what it
                    does, and which feature depends on it. Understanding first,
                    clicking later, is the civilized way.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default WhatIsThatProcess;
