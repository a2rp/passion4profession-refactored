import React, { useMemo, useState } from "react";
import {
    FiTerminal,
    FiClock,
    FiSearch,
    FiFilter,
    FiShield,
    FiSettings,
    FiUserPlus,
    FiCpu,
    FiPower,
    FiActivity,
    FiInfo,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const commandsData = [
    {
        name: "at",
        category: "Scheduling",
        icon: <FiClock />,
        summary:
            "Execute a command or script at a specified time and at regular intervals.",
        syntax: "at [[-V] [-q queue] [-f file] [-m] [-l] [-d] [-b] [-v] time] | [-c job [job ...]]",
        options: [
            { flag: "-V", meaning: "Show the version of at." },
            { flag: "-q queue", meaning: "Specifies the queue to use." },
            {
                flag: "-f file",
                meaning: "Get the job information from a file.",
            },
            {
                flag: "-m",
                meaning: "Email job status to user after completion.",
            },
            { flag: "-l", meaning: "List the jobs currently in the queue." },
            { flag: "-d", meaning: "Remove the job from the queue." },
            {
                flag: "-b",
                meaning:
                    "Allows a job to be run based on the current system status.",
            },
            {
                flag: "-v",
                meaning: "Shows completed jobs still in the queue.",
            },
            {
                flag: "time",
                meaning:
                    "The time that the job should run. MM/DD/YY and/or HH:MM specification is supported.",
            },
            {
                flag: "-c job [job ...]",
                meaning:
                    "The task that should be performed at the specified time.",
            },
        ],
    },
    {
        name: "date",
        category: "System",
        icon: <FiClock />,
        summary: "Display and set the system date and time.",
        syntax: "date [-u | --utc | --universal] [-d | --date=datestring] [-R | --rfc-822] [[yyyy]mmddhhmm [yy][.ss]]",
        options: [
            {
                flag: "-u | --utc | --universal",
                meaning: "Print or set universal time.",
            },
            {
                flag: "-d | --date=datestring",
                meaning: "Display the time shown by the specified string.",
            },
            {
                flag: "-R | --rfc-822",
                meaning: "Show the time in RFC-822 format.",
            },
            {
                flag: "[[yyyy]mmddhhmm [yy][.ss]]",
                meaning: "The format for the date and time.",
            },
        ],
    },
    {
        name: "halt",
        category: "Power",
        icon: <FiPower />,
        summary: "Power down or restart the system.",
        syntax: "halt [-d] [-f] [-h] [-i] [-n] [-p] [-w]",
        options: [
            {
                flag: "-d",
                meaning: "Do not write wtmp record before shutting down.",
            },
            { flag: "-f", meaning: "Force a shutdown or restart." },
            {
                flag: "-h",
                meaning: "Place hard drives into standby before shutting down.",
            },
            {
                flag: "-i",
                meaning: "Shut down network interfaces before shutting down.",
            },
            {
                flag: "-n",
                meaning: "Do not sync before shutting down. Implies -d.",
            },
            {
                flag: "-p",
                meaning: "Halt with a poweroff rather than restart.",
            },
            {
                flag: "-w",
                meaning: "Do not shutdown or restart, but write wtmp record.",
            },
        ],
    },
    {
        name: "kill",
        category: "Processes",
        icon: <FiCpu />,
        summary: "Terminate a system process.",
        syntax: "kill [-l [signal] | [-s signal | -p]] [-a] [--] pid ...",
        options: [
            {
                flag: "-l [signal]",
                meaning: "Print a list of signal names.",
            },
            {
                flag: "-s signal",
                meaning:
                    "The signal to send to the process. Signal 9 sends SIGKILL.",
            },
            {
                flag: "-p",
                meaning:
                    "Print the process id for the specified process and do not send a signal.",
            },
            {
                flag: "-a",
                meaning: "Do not restrict commandname-to-pid conversion.",
            },
        ],
    },
    {
        name: "newaliases",
        category: "Mail",
        icon: <FiSettings />,
        summary: "Rebuild the mail aliases database.",
        syntax: "newaliases",
        options: [],
        notes: [
            "This command does not take any parameters.",
            "It is functionally equivalent to sendmail -bi.",
        ],
    },
    {
        name: "passwd",
        category: "Users",
        icon: <FiShield />,
        summary: "Manage user passwords.",
        syntax: "passwd [-d | --delete] [-f | --force] [-i | --inactive=days] [-k | --keep-tokens] [-l | --lock] [-n | --minimum=days] [-S | --status] [--stdin] [-u | --unlock] [-w | --warning=days] [-x | --maximum=days] [username]",
        options: [
            {
                flag: "-d | --delete",
                meaning: "Root only: Delete the password for the user.",
            },
            {
                flag: "-f | --force",
                meaning: "Force the operation to complete.",
            },
            {
                flag: "-i | --inactive=days",
                meaning:
                    "Root only: Number of days after password expiry before the account is disabled.",
            },
            {
                flag: "-k | --keep-tokens",
                meaning: "Keep authentication tokens that have not expired.",
            },
            {
                flag: "-l | --lock",
                meaning: "Root only: Lock the specified account.",
            },
            {
                flag: "-n | --minimum=days",
                meaning:
                    "Root only: Minimum number of days before password can be changed again.",
            },
            {
                flag: "-S | --status",
                meaning: "Root only: Display password status of the account.",
            },
            {
                flag: "-u | --unlock",
                meaning: "Root only: Unlock the specified account.",
            },
            {
                flag: "-w | --warning=days",
                meaning:
                    "Root only: Number of warning days before password expiry.",
            },
            {
                flag: "-x | --maximum=days",
                meaning: "Root only: Maximum life of a password.",
            },
            {
                flag: "username",
                meaning: "The username on which to perform the operation.",
            },
        ],
    },
    {
        name: "ps",
        category: "Processes",
        icon: <FiActivity />,
        summary: "Display process statistics.",
        syntax: "ps [a] [-A] [-a] [C] [c] [-C processname] [{--cols num | --columns num | --width num}] [-d] [e] [-e] [{f | --forest}] [-f] [g] [{-G RGID | --Group RGID}] [{-g groupname | --group groupname}] [{h | --no-headers}] [-H] [--headers] [--html] [{j | -j}] [{l | -l}] [L] [{--lines num | --rows num}] [{m | -m}] [n] [{N | -n}] [-N | --deselect] [{--nul | --null | --zero}] [O] [{o | -o | --format}] [{p pid | -p pid | --pid pid}] [r] [s] [{S | --cumulative}] [{-s session | --sid session}] [--sort sortkey] [{-t tty | t tty | T tty | --tty tty}] [{-U RUID | --User RUID}] [{-u userid | --user userid}] [v] [{w | -w}] [x] [X] [-y]",
        options: [
            {
                flag: "a",
                meaning:
                    "Show information for all processes on this terminal including those belonging to other users.",
            },
            { flag: "-A", meaning: "Show information for all processes." },
            {
                flag: "-a",
                meaning:
                    "Show information for all processes with a TTY except session leaders.",
            },
            { flag: "C", meaning: "Show the raw CPU time." },
            { flag: "c", meaning: "Show the true command name." },
            {
                flag: "-C processname",
                meaning: "Show information for matching process name.",
            },
            {
                flag: "--cols num | --columns num | --width num",
                meaning: "Set the screen width.",
            },
            {
                flag: "-d",
                meaning:
                    "Show information for all processes except session leaders.",
            },
            {
                flag: "e",
                meaning: "Show the environment after each command.",
            },
            {
                flag: "-e",
                meaning: "Show information for all processes.",
            },
            {
                flag: "f | --forest",
                meaning: "Display process listing with ASCII tree view.",
            },
            { flag: "-f", meaning: "Display full process listing." },
            {
                flag: "g",
                meaning: "Show all process information.",
            },
            {
                flag: "-G RGID | --Group RGID",
                meaning: "Show processes with matching real group ID.",
            },
            {
                flag: "-g groupname | --group groupname",
                meaning: "Show processes matching effective group name.",
            },
            {
                flag: "h | --no-headers",
                meaning: "Do not print header lines.",
            },
            { flag: "-H", meaning: "Display process hierarchy." },
            { flag: "--headers", meaning: "Repeat header lines." },
            { flag: "--html", meaning: "Print HTML-escaped output." },
            { flag: "j | -j", meaning: "Display jobs format." },
            { flag: "l | -l", meaning: "Display long listing format." },
            { flag: "L", meaning: "List all formats." },
            {
                flag: "--lines num | --rows num",
                meaning: "Set the screen height.",
            },
            { flag: "m | -m", meaning: "Display all threads." },
            {
                flag: "n",
                meaning: "Numeric output for WCHAN and USER.",
            },
            { flag: "N | -n", meaning: "Set namelist file." },
            {
                flag: "-N | --deselect",
                meaning: "Negate the selection.",
            },
            {
                flag: "--nul | --null | --zero",
                meaning: "Unjustified output with NULs.",
            },
            { flag: "O", meaning: "Overloaded sort order." },
            {
                flag: "o | -o | --format",
                meaning: "User-defined display format.",
            },
            {
                flag: "p pid | -p pid | --pid pid",
                meaning: "Show information for matching process ID.",
            },
            { flag: "r", meaning: "Show information for running processes." },
            { flag: "s", meaning: "Display signal format." },
            {
                flag: "S | --cumulative",
                meaning: "Include dead child process information.",
            },
            {
                flag: "-s session | --sid session",
                meaning: "Show processes belonging to matching session.",
            },
            { flag: "--sort sortkey", meaning: "Sort order." },
            {
                flag: "-t tty | t tty | T tty | --tty tty",
                meaning: "Show processes on the specified terminal.",
            },
            {
                flag: "-U RUID | --User RUID",
                meaning: "Show processes with matching real user ID.",
            },
            {
                flag: "-u userid | --user userid",
                meaning: "Show processes with matching effective user ID.",
            },
            { flag: "v", meaning: "Display virtual memory format." },
            { flag: "w | -w", meaning: "Display wide output." },
            {
                flag: "x",
                meaning: "Show processes without controlling TTYs.",
            },
            { flag: "X", meaning: "Display Linux i386 format." },
            { flag: "-y", meaning: "Do not show flags." },
        ],
        notes: [
            "This command has many output and filtering options.",
            "In practice, many users start with simpler forms like ps, ps -ef, or ps aux on modern systems.",
        ],
    },
    {
        name: "shutdown",
        category: "Power",
        icon: <FiPower />,
        summary: "Shut down the system. Must be logged in as root.",
        syntax: "shutdown [-a] [-c] [-f] [-F] [-h] [-n] [-k] [-r] [-t seconds] time [message]",
        options: [
            { flag: "-a", meaning: "Use /etc/shutdown.allow." },
            { flag: "-c", meaning: "Cancel an in-progress shutdown." },
            {
                flag: "-f",
                meaning: "Skip the file system check upon reboot.",
            },
            {
                flag: "-F",
                meaning: "Force a file system check upon reboot.",
            },
            {
                flag: "-h",
                meaning: "Halt the system after the shutdown is complete.",
            },
            {
                flag: "-n",
                meaning: "Go down fast and do not use init.",
            },
            {
                flag: "-k",
                meaning:
                    "Only warn about a pending shutdown but do not actually do it.",
            },
            {
                flag: "-r",
                meaning: "Reboot the system after the shutdown.",
            },
            {
                flag: "-t seconds",
                meaning:
                    "The number of seconds to wait before sending kill signal.",
            },
            {
                flag: "time",
                meaning: "The time to shutdown, for example 'now'.",
            },
            {
                flag: "message",
                meaning: "Warning message to send to attached users.",
            },
        ],
    },
    {
        name: "sudo",
        category: "Privileges",
        icon: <FiShield />,
        summary: "Run a command as another user.",
        syntax: "sudo [-k] | [-K] | [-l] | [-v] | [-V] | [-b] [-H] [-P] [-S] [-p prompt] [-u username | #uid] [-s] | [command]",
        options: [
            { flag: "-k", meaning: "Invalidate a user's timestamp." },
            { flag: "-K", meaning: "Remove a user's timestamp." },
            { flag: "-l", meaning: "Show allowed commands for the user." },
            { flag: "-v", meaning: "Validate the user's timestamp." },
            { flag: "-V", meaning: "Show version." },
            {
                flag: "-b",
                meaning: "Run the specified command in the background.",
            },
            {
                flag: "-H",
                meaning: "Set HOME variable to match the specified user.",
            },
            { flag: "-P", meaning: "Preserve the user's group vector." },
            {
                flag: "-S",
                meaning: "Read password from file rather than terminal.",
            },
            {
                flag: "-p prompt",
                meaning: "Use a custom password prompt.",
            },
            {
                flag: "-u username | #uid",
                meaning: "The user or user ID.",
            },
            {
                flag: "-s",
                meaning: "Run the shell specified in the SHELL variable.",
            },
            { flag: "command", meaning: "The command to run." },
        ],
    },
    {
        name: "top",
        category: "Monitoring",
        icon: <FiActivity />,
        summary: "Interactive process and system monitor.",
        syntax: "top [b] [c] [C] [d delay] [i] [p pid] [q] [s] [S] [n iterations]",
        options: [
            {
                flag: "b",
                meaning: "Batch mode. Use with n to specify iteration count.",
            },
            {
                flag: "c",
                meaning: "Display command line rather than command name.",
            },
            {
                flag: "C",
                meaning: "On SMP systems, display total CPU statistics.",
            },
            {
                flag: "d delay",
                meaning: "Set delay between screen updates.",
            },
            { flag: "i", meaning: "Ignore idle and zombie processes." },
            {
                flag: "p pid",
                meaning:
                    "Monitor processes with the specified process ID. Can be specified multiple times.",
            },
            { flag: "q", meaning: "Refresh without delay." },
            { flag: "s", meaning: "Run in secure mode." },
            {
                flag: "S",
                meaning:
                    "Show process utilization as a cumulative figure built on previous process state.",
            },
            {
                flag: "n iterations",
                meaning:
                    "Use with batch mode to run a certain number of times.",
            },
        ],
    },
    {
        name: "useradd",
        category: "Users",
        icon: <FiUserPlus />,
        summary: "Add a new user to the system. Must be logged in as root.",
        syntax: "useradd [-A {method | DEFAULT},...] [-c comment] [-d homedir] [-e expiredate] [-f inactivetime] [-g initialgroup] [-G group [...]] [-m [-k skeletondir]] [-n] [-r] [-s shell] [-u uid [-o]] login",
        options: [
            {
                flag: "-A {method | DEFAULT},...",
                meaning:
                    "The name of the program that will authenticate the user.",
            },
            {
                flag: "-c comment",
                meaning: "A comment to associate with the user account.",
            },
            {
                flag: "-d homedir",
                meaning: "The location of the user's home directory.",
            },
        ],
        notes: [
            "Your original post says more options continue after this point.",
            "This page currently preserves the visible part that you pasted.",
        ],
    },
];

const categories = [
    "All",
    "System",
    "Scheduling",
    "Power",
    "Processes",
    "Mail",
    "Users",
    "Privileges",
    "Monitoring",
];

const QuickReferenceLinuxCommands = () => {
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredCommands = useMemo(() => {
        const query = search.trim().toLowerCase();

        return commandsData.filter((command) => {
            const matchesCategory =
                activeCategory === "All" || command.category === activeCategory;

            const haystack = [
                command.name,
                command.category,
                command.summary,
                command.syntax,
                ...(command.options || []).map(
                    (item) => `${item.flag} ${item.meaning}`,
                ),
                ...(command.notes || []),
            ]
                .join(" ")
                .toLowerCase();

            const matchesSearch = !query || haystack.includes(query);

            return matchesCategory && matchesSearch;
        });
    }, [search, activeCategory]);

    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiTerminal />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiClock />
                        Original topic: July 21, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>Quick Reference - Linux Commands</h1>

                <p className="lead">
                    This page is a refactored version of the old archive post.
                    Instead of a plain block of command notes, the content is
                    reorganized into searchable reference cards so commands,
                    syntax, and options are easier to scan and revise.
                </p>

                <div className="heroMeta">
                    <div className="metaCard">
                        <span className="metaIcon">
                            <FiTerminal />
                        </span>
                        <div>
                            <strong>{commandsData.length}</strong>
                            <span>Commands currently preserved here</span>
                        </div>
                    </div>

                    <div className="metaCard">
                        <span className="metaIcon">
                            <FiSearch />
                        </span>
                        <div>
                            <strong>{filteredCommands.length}</strong>
                            <span>Commands matching current filters</span>
                        </div>
                    </div>

                    <div className="metaCard">
                        <span className="metaIcon">
                            <FiInfo />
                        </span>
                        <div>
                            <strong>More coming</strong>
                            <span>
                                The original archive notes continue beyond this
                                part
                            </span>
                        </div>
                    </div>
                </div>
            </Styled.HeroCard>

            <Styled.ControlCard>
                <div className="controlHead">
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiFilter />
                        </span>
                        <h2>Filter and search</h2>
                    </div>
                </div>

                <div className="searchRow">
                    <div className="searchBox">
                        <FiSearch className="searchIcon" />

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search by command, option, or description..."
                            aria-label="Search Linux commands"
                        />
                    </div>
                </div>

                <div className="chipRow">
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            className={`chip ${
                                activeCategory === category ? "active" : ""
                            }`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </Styled.ControlCard>

            <Styled.InfoCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiInfo />
                    </span>
                    <h2>About this refactored page</h2>
                </div>

                <p>
                    The original post was a compact Linux command reference.
                    This version keeps the same core information but
                    restructures it into readable cards with categories, syntax
                    blocks, and option lists.
                </p>

                <p>
                    The visible commands from your pasted archive content are
                    all included here. Since your original note says "There are
                    more... I will post it", this layout is designed so more
                    command objects can be appended later without changing the
                    page structure.
                </p>
            </Styled.InfoCard>

            <Styled.CommandSection>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiTerminal />
                    </span>
                    <h2>Command reference</h2>
                </div>

                {filteredCommands.length ? (
                    <div className="commandGrid">
                        {filteredCommands.map((command) => (
                            <article key={command.name} className="commandCard">
                                <div className="commandTop">
                                    <div className="titleWrap">
                                        <span className="commandIcon">
                                            {command.icon}
                                        </span>

                                        <div>
                                            <h3>{command.name}</h3>
                                            <span className="categoryTag">
                                                {command.category}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <p className="summary">{command.summary}</p>

                                <div className="syntaxBox">
                                    <div className="syntaxLabel">Syntax</div>
                                    <pre>{command.syntax}</pre>
                                </div>

                                {command.options?.length ? (
                                    <div className="optionBlock">
                                        <h4>Options</h4>

                                        <div className="optionList">
                                            {command.options.map((option) => (
                                                <div
                                                    key={`${command.name}-${option.flag}`}
                                                    className="optionItem"
                                                >
                                                    <div className="flag">
                                                        {option.flag}
                                                    </div>
                                                    <div className="meaning">
                                                        {option.meaning}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : null}

                                {command.notes?.length ? (
                                    <div className="noteBlock">
                                        <h4>Notes</h4>

                                        <ul>
                                            {command.notes.map((note) => (
                                                <li key={note}>{note}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : null}
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="emptyState">
                        No commands match the current search or category filter.
                    </div>
                )}
            </Styled.CommandSection>

            <Styled.FooterNote>
                <h2>How to extend this page later</h2>

                <p>
                    Add more command objects to the data array using the same
                    structure:
                </p>

                <pre>{`{
    name: "ls",
    category: "System",
    icon: <FiTerminal />,
    summary: "List directory contents.",
    syntax: "ls [options] [file...]",
    options: [
        { flag: "-l", meaning: "Use long listing format." }
    ],
    notes: ["Optional extra notes here."]
}`}</pre>

                <p>
                    Once added, the page will automatically support searching,
                    category filtering, and card rendering without any layout
                    changes.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default QuickReferenceLinuxCommands;
