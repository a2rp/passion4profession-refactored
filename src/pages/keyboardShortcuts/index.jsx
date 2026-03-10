import React from "react";
import {
    FiCommand,
    FiClock,
    FiCopy,
    FiSearch,
    FiFolder,
    FiMonitor,
    FiSettings,
    FiGlobe,
    FiCheckCircle,
    FiAlertCircle,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const basicWindowsShortcuts = [
    ["Ctrl + C", "Copy the selected item"],
    ["Ctrl + X", "Cut the selected item"],
    ["Ctrl + V", "Paste the copied or cut item"],
    ["Ctrl + Z", "Undo the previous action"],
    ["Delete", "Delete the selected item"],
    [
        "Shift + Delete",
        "Delete the selected item permanently without sending it to the Recycle Bin",
    ],
    ["Ctrl + A", "Select all items or all text"],
    ["F2", "Rename the selected item"],
    ["F3", "Search for a file or folder"],
    ["Alt + Enter", "Open the properties of the selected item"],
    ["Alt + F4", "Close the active window or quit the active program"],
    ["Alt + Tab", "Switch between open applications"],
    ["Alt + Esc", "Cycle through open items in the order they were opened"],
    ["F5", "Refresh or update the active window"],
    ["Esc", "Cancel the current task"],
];

const textNavigationShortcuts = [
    ["Ctrl + Right Arrow", "Move the cursor to the beginning of the next word"],
    [
        "Ctrl + Left Arrow",
        "Move the cursor to the beginning of the previous word",
    ],
    [
        "Ctrl + Down Arrow",
        "Move the cursor to the beginning of the next paragraph",
    ],
    [
        "Ctrl + Up Arrow",
        "Move the cursor to the beginning of the previous paragraph",
    ],
    [
        "Ctrl + Shift + Arrow Keys",
        "Select a block of text word by word or paragraph by paragraph",
    ],
    ["Shift + Arrow Keys", "Select text or more than one item"],
];

const dialogShortcuts = [
    ["Tab", "Move forward through options"],
    ["Shift + Tab", "Move backward through options"],
    ["Ctrl + Tab", "Move forward through tabs"],
    ["Ctrl + Shift + Tab", "Move backward through tabs"],
    ["Enter", "Perform the command for the active option or button"],
    ["Spacebar", "Select or clear a check box"],
    ["Arrow Keys", "Select an option button in a group"],
    ["F1", "Open Help"],
    ["F4", "Display items in the active list"],
    ["Backspace", "Open the parent folder in Open or Save As dialogs"],
];

const windowsLogoShortcuts = [
    ["Windows", "Open or hide the Start menu"],
    ["Windows + D", "Show the desktop"],
    ["Windows + M", "Minimize all windows"],
    ["Windows + Shift + M", "Restore minimized windows"],
    ["Windows + E", "Open File Explorer or My Computer"],
    ["Windows + F", "Search for a file or folder"],
    ["Ctrl + Windows + F", "Search for computers"],
    ["Windows + F1", "Open Windows Help"],
    ["Windows + L", "Lock the computer"],
    ["Windows + R", "Open the Run dialog box"],
    ["Windows + U", "Open Utility Manager or accessibility tools"],
    ["Windows + Break", "Open System Properties"],
];

const explorerShortcuts = [
    ["End", "Go to the bottom of the active window"],
    ["Home", "Go to the top of the active window"],
    ["Num Lock + *", "Show all subfolders under the selected folder"],
    ["Num Lock + +", "Show the contents of the selected folder"],
    ["Num Lock + -", "Collapse the selected folder"],
    ["Left Arrow", "Collapse the current folder or select the parent folder"],
    ["Right Arrow", "Expand the current folder or select the first subfolder"],
    ["Backspace", "Go up one folder level"],
    ["Alt + Spacebar", "Open the system menu for the active window"],
];

const characterMapShortcuts = [
    ["Right Arrow", "Move right or to the beginning of the next line"],
    ["Left Arrow", "Move left or to the end of the previous line"],
    ["Up Arrow", "Move up one row"],
    ["Down Arrow", "Move down one row"],
    ["Page Up", "Move up one screen"],
    ["Page Down", "Move down one screen"],
    ["Home", "Move to the beginning of the line"],
    ["End", "Move to the end of the line"],
    ["Ctrl + Home", "Move to the first character"],
    ["Ctrl + End", "Move to the last character"],
    [
        "Spacebar",
        "Toggle between enlarged and normal mode for a selected character",
    ],
];

const mmcMainWindowShortcuts = [
    ["Ctrl + O", "Open a saved console"],
    ["Ctrl + N", "Open a new console"],
    ["Ctrl + S", "Save the current console"],
    ["Ctrl + M", "Add or remove a console item"],
    ["Ctrl + W", "Open a new window"],
    ["F5", "Refresh all console windows"],
    ["Alt + Spacebar", "Open the MMC window menu"],
    ["Alt + F4", "Close the console"],
    ["Alt + A", "Open the Action menu"],
    ["Alt + V", "Open the View menu"],
    ["Alt + F", "Open the File menu"],
    ["Alt + O", "Open the Favorites menu"],
];

const mmcConsoleWindowShortcuts = [
    ["Ctrl + P", "Print the current page or active pane"],
    ["Alt + -", "Open the window menu for the active console window"],
    ["Shift + F10", "Open the action shortcut menu for the selected item"],
    ["F1", "Open Help for the selected item"],
    ["F5", "Refresh all console windows"],
    ["Ctrl + F10", "Maximize the active console window"],
    ["Ctrl + F5", "Restore the active console window"],
    ["Alt + Enter", "Open the Properties dialog for the selected item"],
    ["F2", "Rename the selected item"],
    ["Ctrl + F4", "Close the active console window"],
];

const remoteDesktopShortcuts = [
    [
        "Ctrl + Alt + End",
        "Open the Windows Security dialog on the remote system",
    ],
    ["Alt + Page Up", "Switch between programs from left to right"],
    ["Alt + Page Down", "Switch between programs from right to left"],
    ["Alt + Insert", "Cycle through programs in recent-use order"],
    ["Alt + Home", "Open the Start menu"],
    ["Ctrl + Alt + Break", "Toggle between full-screen mode and window mode"],
    ["Alt + Delete", "Open the Windows menu"],
    ["Ctrl + Alt + -", "Capture a snapshot of the active remote window"],
    ["Ctrl + Alt + +", "Capture a snapshot of the full remote client window"],
];

const internetExplorerShortcuts = [
    ["Ctrl + B", "Open the Organize Favorites dialog"],
    ["Ctrl + E", "Open the Search bar"],
    ["Ctrl + F", "Open Find"],
    ["Ctrl + H", "Open the History bar"],
    ["Ctrl + I", "Open the Favorites bar"],
    ["Ctrl + L", "Open the address or open dialog"],
    ["Ctrl + N", "Open another browser window with the same address"],
    ["Ctrl + O", "Open the Open dialog"],
    ["Ctrl + P", "Open the Print dialog"],
    ["Ctrl + R", "Refresh the current web page"],
];

const accessibilityShortcuts = [
    ["Right Shift for 8 seconds", "Turn Filter Keys on or off"],
    ["Left Alt + Left Shift + Print Screen", "Turn High Contrast on or off"],
    ["Left Alt + Left Shift + Num Lock", "Turn Mouse Keys on or off"],
    ["Shift 5 times", "Turn Sticky Keys on or off"],
    ["Num Lock for 5 seconds", "Turn Toggle Keys on or off"],
    ["Windows + U", "Open Utility Manager"],
];

const shortcutGroups = [
    {
        icon: <FiCopy />,
        title: "Basic Windows shortcuts",
        description:
            "Everyday shortcuts used for copying, deleting, selecting, switching windows, refreshing, and general work.",
        items: basicWindowsShortcuts,
    },
    {
        icon: <FiCommand />,
        title: "Text navigation and selection",
        description:
            "Useful when working inside editors, documents, input fields, and text-heavy applications.",
        items: textNavigationShortcuts,
    },
    {
        icon: <FiSettings />,
        title: "Dialog box shortcuts",
        description:
            "These help when moving through tabs, buttons, check boxes, and common dialog windows.",
        items: dialogShortcuts,
    },
    {
        icon: <FiMonitor />,
        title: "Windows logo shortcuts",
        description:
            "Fast shortcuts centered around the Windows key for system access, desktop control, and navigation.",
        items: windowsLogoShortcuts,
    },
    {
        icon: <FiFolder />,
        title: "Windows Explorer shortcuts",
        description:
            "Helpful when navigating folders and expanding or collapsing directory trees.",
        items: explorerShortcuts,
    },
    {
        icon: <FiCommand />,
        title: "Character Map shortcuts",
        description:
            "Navigation shortcuts used inside the Character Map utility after a character is selected.",
        items: characterMapShortcuts,
    },
    {
        icon: <FiSettings />,
        title: "MMC main window shortcuts",
        description:
            "Useful inside Microsoft Management Console for opening, saving, refreshing, and navigating menus.",
        items: mmcMainWindowShortcuts,
    },
    {
        icon: <FiSettings />,
        title: "MMC console window shortcuts",
        description:
            "Shortcuts for working inside active MMC console panes and windows.",
        items: mmcConsoleWindowShortcuts,
    },
    {
        icon: <FiMonitor />,
        title: "Remote Desktop shortcuts",
        description:
            "Useful when working inside Remote Desktop sessions where local and remote key handling differ.",
        items: remoteDesktopShortcuts,
    },
    {
        icon: <FiGlobe />,
        title: "Internet Explorer shortcuts",
        description:
            "Classic browser shortcuts for search, favorites, history, printing, and refresh actions.",
        items: internetExplorerShortcuts,
    },
    {
        icon: <FiSettings />,
        title: "Accessibility shortcuts",
        description:
            "Keyboard combinations that quickly enable or disable accessibility features in Windows.",
        items: accessibilityShortcuts,
    },
];

const KeyboardShortcuts = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiCommand />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiClock />
                        Original topic: December 12, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>Keyboard Shortcuts</h1>

                <p className="lead">
                    Keyboard shortcuts are combinations of keys that perform
                    actions quickly without using the mouse. They save time,
                    reduce repetitive movement, and make everyday computer work
                    much faster once they become muscle memory.
                </p>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>What are keyboard shortcuts?</h2>
                </div>

                <p>
                    A keyboard shortcut is a key combination that triggers a
                    command directly. Instead of opening menus and clicking
                    buttons, you press a few keys together and the action
                    happens immediately.
                </p>

                <p>
                    For example, <strong>Ctrl + C</strong> copies,{" "}
                    <strong>Ctrl + V</strong> pastes, and{" "}
                    <strong>Alt + Tab</strong> switches between open windows.
                    These are small actions, but repeated hundreds of times,
                    they save a huge amount of effort.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCheckCircle />
                        </span>
                        <h2>Why they matter</h2>
                    </div>

                    <ul>
                        <li>They make common tasks faster</li>
                        <li>They reduce reliance on the mouse</li>
                        <li>They improve workflow and focus</li>
                        <li>They are especially useful for power users</li>
                        <li>
                            Many shortcuts work across multiple applications
                        </li>
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiClock />
                        </span>
                        <h2>How to learn them</h2>
                    </div>

                    <ul>
                        <li>Start with copy, paste, undo, and select all</li>
                        <li>
                            Learn window switching and desktop shortcuts next
                        </li>
                        <li>
                            Practice file explorer shortcuts during daily work
                        </li>
                        <li>
                            Use a few shortcuts repeatedly until they become
                            automatic
                        </li>
                        <li>
                            Do not try to memorize everything at once like a
                            keyboard wizard exam
                        </li>
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            {shortcutGroups.map((group) => (
                <Styled.SectionCard key={group.title}>
                    <div className="sectionHead">
                        <span className="iconWrap">{group.icon}</span>
                        <div className="sectionHeadText">
                            <h2>{group.title}</h2>
                            <p className="sectionSubText">
                                {group.description}
                            </p>
                        </div>
                    </div>

                    <Styled.ShortcutTable>
                        <div className="tableHead">
                            <div>Shortcut</div>
                            <div>Action</div>
                        </div>

                        {group.items.map(([shortcut, action]) => (
                            <div
                                className="tableRow"
                                key={`${group.title}-${shortcut}`}
                            >
                                <div className="shortcutKey">
                                    <span>{shortcut}</span>
                                </div>
                                <div className="shortcutAction">{action}</div>
                            </div>
                        ))}
                    </Styled.ShortcutTable>
                </Styled.SectionCard>
            ))}

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiAlertCircle />
                    </span>
                    <h2>Important note</h2>
                </div>

                <p>
                    Some shortcuts in old Windows references belong to older
                    versions of the operating system or older Microsoft tools
                    such as classic Internet Explorer and old MMC workflows. The
                    idea still matters, but exact behavior can differ in modern
                    Windows versions and modern browsers.
                </p>

                <p>
                    So treat this page as a useful reference and foundation,
                    then verify the exact behavior on your current system.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    Keyboard shortcuts are one of the easiest ways to work
                    faster on a computer. Start with the most common ones, use
                    them daily, and slowly build up your speed. A few shortcuts
                    learned well are more useful than a giant list admired from
                    a distance.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default KeyboardShortcuts;
