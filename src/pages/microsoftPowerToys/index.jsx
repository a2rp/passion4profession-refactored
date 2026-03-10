import React from "react";
import {
    FiTool,
    FiClock,
    FiSettings,
    FiMonitor,
    FiImage,
    FiFolder,
    FiTerminal,
    FiGrid,
    FiCpu,
    FiArchive,
    FiCheckCircle,
    FiAlertCircle,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const windows95PowerToys = [
    "CabView - open cabinet files like ordinary folders",
    "CDAutoPlay - make AutoPlay work on non-audio CDs",
    "Command Prompt Here - open a command prompt from a folder",
    "Contents Menu - access files and folders from a context menu",
    "Desktop Menu - open desktop items from a taskbar menu",
    "Explore From Here - open Explorer with the current folder as root",
    "FindX - add drag-and-drop support to Find/Search",
    "FlexiCD - play audio CDs from the taskbar",
    "Quick Res - change screen resolution quickly",
    "Round Clock - analog clock utility",
    "Send To X - add more destinations to Send To",
    "Shortcut Target Menu - act on the real target behind a shortcut",
    "Telephony Location Selector - switch dialing location",
    "Tweak UI - customize interface and advanced settings",
    "Xmouse - make focus follow the mouse",
];

const windows95KernelToys = [
    "MS-DOS Mode Configuration Wizard Customization Tool",
    "Keyboard Remap",
    "Logo Key Control",
    "Conventional Memory Tracker",
    "Windows Process Watcher (WinTop)",
    "Time Zone Editor",
];

const windowsXPTools = [
    "Alt-Tab Replacement Task Switcher",
    "CD Slide Show Generator",
    "ClearType Tuner",
    "Color Control Panel Applet",
    "HTML Slide Show Wizard",
    "Image Resizer",
    "Open Command Window Here",
    "Power Calculator",
    "RAW Image Thumbnailer and Viewer",
    "SyncToy",
    "Taskbar Magnifier",
    "Tweak UI",
    "Virtual Desktop Manager",
    "Webcam Timershot",
];

const retiredXPTools = [
    "Background Switcher",
    "Internet Explorer Find Bar",
    "ISO Image Burner",
    "Shell Audio Player",
    "Super-Fast User Switcher",
    "Virtual CD-ROM Control Panel",
];

const featureGroups = [
    {
        icon: <FiSettings />,
        title: "System customization",
        text: "Tools like Tweak UI gave users access to settings and interface behavior that normal Windows options did not expose clearly.",
    },
    {
        icon: <FiTerminal />,
        title: "Power-user shortcuts",
        text: "Utilities such as Open Command Window Here and Command Prompt Here reduced friction for advanced users and developers.",
    },
    {
        icon: <FiImage />,
        title: "Media and file helpers",
        text: "Image Resizer, RAW viewer tools, slideshow utilities, and ISO-related tools improved common daily tasks.",
    },
    {
        icon: <FiGrid />,
        title: "Productivity experiments",
        text: "Virtual Desktop Manager, task switcher improvements, and SyncToy showed Microsoft experimenting with better workflows.",
    },
];

const MicrosoftPowerToys = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiTool />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiClock />
                        Original topic: August 18, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>Microsoft PowerToys</h1>

                <p className="lead">
                    Microsoft PowerToys are extra utilities released by
                    Microsoft for Windows users who want more control,
                    customization, and convenience than the default operating
                    system normally provides. They were usually aimed at power
                    users, tinkerers, and developers rather than average users.
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
                    PowerToys are optional tools released after a Windows
                    version ships. They are not core parts of Windows itself.
                    Instead, they act like bonus utilities that add new
                    features, shortcuts, experiments, and customization options.
                </p>

                <p>
                    Because they are not treated like official core Windows
                    components, they usually do not go through the same level of
                    testing and support. That is why they are often seen as
                    useful extras rather than guaranteed built-in features.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiAlertCircle />
                        </span>
                        <h2>Important idea</h2>
                    </div>

                    <p>
                        PowerToys were often Microsoft's playground for useful
                        ideas. Some features stayed experimental. Some were
                        retired. Some later became normal Windows features.
                    </p>

                    <ul>
                        <li>
                            Not all PowerToys survived future Windows versions
                        </li>
                        <li>Some stopped working after major system changes</li>
                        <li>
                            Some ideas were later built directly into Windows
                        </li>
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCpu />
                        </span>
                        <h2>Who they were for</h2>
                    </div>

                    <ul>
                        <li>Advanced Windows users</li>
                        <li>People who liked customization</li>
                        <li>Users who wanted productivity shortcuts</li>
                        <li>Developers and technical users</li>
                    </ul>

                    <p>
                        In short, PowerToys were for people who looked at normal
                        Windows settings and thought, "nice, but let me poke the
                        machine a little deeper."
                    </p>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiArchive />
                    </span>
                    <h2>PowerToys for Windows 95</h2>
                </div>

                <p>
                    The Windows 95 PowerToys set was one of the earliest and
                    most well-known collections. It included many tools for
                    advanced shell behavior, taskbar tricks, and user-interface
                    customization.
                </p>

                <p>
                    One of the most famous tools was <strong>Tweak UI</strong>,
                    which gave users easier access to settings that normally
                    required manual registry edits or deeper system knowledge.
                </p>

                <div className="listBox">
                    <h3>Notable Windows 95 PowerToys</h3>
                    <ul>
                        {windows95PowerToys.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiTerminal />
                    </span>
                    <h2>Windows 95 Kernel Toys</h2>
                </div>

                <p>
                    After the success of the shell-focused PowerToys, Microsoft
                    also released a smaller set called{" "}
                    <strong>Kernel Toys</strong>. These were more focused on
                    system behavior, diagnostics, key remapping, and startup
                    configuration.
                </p>

                <div className="listBox">
                    <h3>Kernel Toys included</h3>
                    <ul>
                        {windows95KernelToys.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiMonitor />
                    </span>
                    <h2>PowerToys for Windows XP</h2>
                </div>

                <p>
                    PowerToys for Windows XP were distributed more as separate
                    downloads instead of one single package. By this point,
                    Microsoft had also moved some older useful ideas directly
                    into Windows itself.
                </p>

                <div className="listBox">
                    <h3>Main Windows XP PowerToys</h3>
                    <ul>
                        {windowsXPTools.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </Styled.SectionCard>

            <Styled.FeatureGrid>
                {featureGroups.map((item) => (
                    <article key={item.title} className="featureCard">
                        <div className="featureIcon">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </article>
                ))}
            </Styled.FeatureGrid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiImage />
                    </span>
                    <h2>Spotlight tool: Power Calculator</h2>
                </div>

                <p>
                    One of the more interesting XP-era PowerToys was{" "}
                    <strong>Power Calculator</strong>. It was much more advanced
                    than the default Windows Calculator of that time.
                </p>

                <div className="compareGrid">
                    <div className="compareCard">
                        <h3>What it could do</h3>
                        <ul>
                            <li>Evaluate more complex expressions</li>
                            <li>
                                Support graphing in Cartesian and polar form
                            </li>
                            <li>Store and reuse functions</li>
                            <li>Convert units</li>
                            <li>Support reverse Polish notation</li>
                            <li>Handle complex numbers</li>
                        </ul>
                    </div>

                    <div className="compareCard">
                        <h3>Why it mattered</h3>
                        <p>
                            It showed that PowerToys were not just cosmetic
                            tweaks. Some were genuinely powerful tools that gave
                            Windows users functionality far beyond the standard
                            built-in apps.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiFolder />
                        </span>
                        <h2>Examples that later became normal</h2>
                    </div>

                    <ul>
                        <li>Open command window from a folder</li>
                        <li>Better file and image handling</li>
                        <li>Search and navigation improvements</li>
                        <li>ISO burning in later Windows versions</li>
                    </ul>

                    <p>
                        This is one of the most interesting things about
                        PowerToys. Sometimes they were basically prototypes for
                        features that Windows later absorbed.
                    </p>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiAlertCircle />
                        </span>
                        <h2>Why older ones faded away</h2>
                    </div>

                    <ul>
                        <li>Windows shell architecture changed</li>
                        <li>
                            User Account Control changed behavior and
                            permissions
                        </li>
                        <li>
                            64-bit systems broke older 32-bit shell extensions
                        </li>
                        <li>
                            Some features were replaced by official built-ins
                        </li>
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiArchive />
                    </span>
                    <h2>Retired XP components</h2>
                </div>

                <p>
                    Some XP PowerToys were later retired because Windows itself
                    caught up or because the tools became outdated.
                </p>

                <div className="listBox">
                    <h3>Retired tools</h3>
                    <ul>
                        {retiredXPTools.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiSettings />
                    </span>
                    <h2>Best practical conclusion</h2>
                </div>

                <p>
                    Microsoft PowerToys were optional utility collections that
                    gave Windows users extra control, convenience, and advanced
                    features. They were never meant to be the main operating
                    system itself, but they often filled the gap between what
                    Windows allowed and what advanced users wanted.
                </p>

                <p>
                    Their real importance is not just the tools themselves. It
                    is the idea behind them: useful experiments, quick wins, and
                    features that serious users actually needed. Some vanished,
                    some evolved, and some quietly became standard parts of the
                    Windows experience.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    Microsoft PowerToys were bonus Windows utilities for power
                    users. They added customization, productivity tools, shell
                    enhancements, file helpers, and experimental features beyond
                    normal Windows defaults. Over time, some disappeared, some
                    broke, and some became mainstream Windows functionality.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default MicrosoftPowerToys;
