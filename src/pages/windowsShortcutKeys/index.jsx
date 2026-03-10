import React from "react";
import {
    FiCommand,
    FiMonitor,
    FiFolder,
    FiSearch,
    FiPlay,
    FiLock,
    FiGrid,
    FiActivity,
    FiInfo,
    FiRepeat,
    FiCheckCircle,
    FiClock,
    FiArchive,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const shortcuts = [
    {
        keys: "Windows + M",
        icon: <FiMonitor />,
        title: "Minimize all windows",
        description:
            "Quickly minimizes all open windows and takes you back to the desktop.",
    },
    {
        keys: "Windows + E",
        icon: <FiFolder />,
        title: "Open File Explorer",
        description:
            "Launches File Explorer instantly so you can browse files and folders.",
    },
    {
        keys: "Windows + F",
        icon: <FiSearch />,
        title: "Find files",
        description:
            "Opens file search on older Windows systems or search-related functionality depending on version.",
    },
    {
        keys: "Windows + R",
        icon: <FiPlay />,
        title: "Open Run dialog",
        description:
            "Opens the Run box where you can launch programs, folders, and system tools quickly.",
    },
    {
        keys: "Windows + L",
        icon: <FiLock />,
        title: "Lock your computer",
        description:
            "Instantly locks the current session and returns to the sign-in screen.",
    },
    {
        keys: "Ctrl + Esc",
        icon: <FiGrid />,
        title: "Open Start menu",
        description:
            "Useful on keyboards that do not have a Windows key. It opens the Start menu.",
    },
    {
        keys: "Ctrl + Shift + Esc",
        icon: <FiActivity />,
        title: "Open Task Manager",
        description:
            "Directly opens Task Manager without needing extra clicks. Very handy for troubleshooting.",
    },
    {
        keys: "Windows + Pause",
        icon: <FiInfo />,
        title: "Open System Properties",
        description:
            "Opens system-related information or properties depending on the Windows version.",
    },
    {
        keys: "Alt + Tab",
        icon: <FiRepeat />,
        title: "Switch running applications",
        description:
            "Lets you cycle through currently open applications quickly.",
    },
    {
        keys: "Alt + Enter",
        icon: <FiCheckCircle />,
        title: "Open selected item properties",
        description:
            "Shows the Properties dialog for the currently selected file, folder, or item.",
    },
];

const usageTips = [
    "Keyboard shortcuts reduce time spent moving between keyboard and mouse.",
    "They become much more useful when repeated daily during normal work.",
    "A few shortcuts used consistently can noticeably improve speed and flow.",
    "Some shortcuts behave a little differently depending on Windows version.",
];

const WindowsShortcutKeys = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiArchive />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiClock />
                        Original topic: July 20, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>Windows shortcut keys</h1>

                <p className="lead">
                    Keyboard shortcuts make working in Windows faster, cleaner,
                    and less annoying than constantly reaching for the mouse.
                    This refactored page turns the original quick note into a
                    clearer reference guide for everyday use.
                </p>

                <div className="heroMeta">
                    <div className="metaCard">
                        <span className="metaIcon">
                            <FiCommand />
                        </span>
                        <div>
                            <strong>{shortcuts.length}</strong>
                            <span>Core shortcuts in this note</span>
                        </div>
                    </div>

                    <div className="metaCard">
                        <span className="metaIcon">
                            <FiMonitor />
                        </span>
                        <div>
                            <strong>Windows</strong>
                            <span>Focus on system and workflow actions</span>
                        </div>
                    </div>
                </div>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiInfo />
                    </span>
                    <h2>Why shortcuts matter</h2>
                </div>

                <p>
                    Mouse-based navigation works, but it is usually slower for
                    repeated actions. Keyboard shortcuts remove extra pointer
                    movement and let you jump straight to commands. Once they
                    become muscle memory, the difference is huge.
                </p>

                <p>
                    The real magic is not in memorizing hundreds of shortcuts.
                    It is in using a small set so often that your hands do the
                    work automatically.
                </p>
            </Styled.SectionCard>

            <Styled.ShortcutSection>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCommand />
                    </span>
                    <h2>Shortcut reference</h2>
                </div>

                <div className="shortcutGrid">
                    {shortcuts.map((item) => (
                        <article key={item.keys} className="shortcutCard">
                            <div className="cardTop">
                                <span className="miniIcon">{item.icon}</span>
                                <span className="keyChip">{item.keys}</span>
                            </div>

                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </article>
                    ))}
                </div>
            </Styled.ShortcutSection>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Quick practical notes</h2>
                </div>

                <div className="notesGrid">
                    <div className="noteBox">
                        <h3>Windows + L</h3>
                        <p>
                            One of the most useful shortcuts in shared spaces.
                            It locks your machine instantly when stepping away.
                        </p>
                    </div>

                    <div className="noteBox">
                        <h3>Ctrl + Shift + Esc</h3>
                        <p>
                            Very useful when a program freezes or starts acting
                            like a deranged toaster.
                        </p>
                    </div>

                    <div className="noteBox">
                        <h3>Alt + Tab</h3>
                        <p>
                            Great for multitasking because it reduces the need
                            to hunt through taskbar icons.
                        </p>
                    </div>

                    <div className="noteBox">
                        <h3>Windows + R</h3>
                        <p>
                            A fast entry point for commands, tools, folders, and
                            administrative utilities.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiRepeat />
                    </span>
                    <h2>Best way to learn them</h2>
                </div>

                <ul className="tipList">
                    {usageTips.map((tip) => (
                        <li key={tip}>{tip}</li>
                    ))}
                </ul>

                <p>
                    Start with just three or four shortcuts and use them every
                    day. That works much better than trying to memorize a giant
                    cheat sheet in one sitting.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    Windows shortcut keys help you work faster by reducing
                    dependence on the mouse. Even a small set of shortcuts like
                    Windows + E, Windows + R, Alt + Tab, and Ctrl + Shift + Esc
                    can improve daily workflow noticeably.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default WindowsShortcutKeys;
