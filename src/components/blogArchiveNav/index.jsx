import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiArchive, FiSearch, FiX } from "react-icons/fi";
import { Styled } from "./styled";

const archiveRoutes = [
    {
        title: "What is the meaning of platform independence ???",
        path: "/archive/what-is-the-meaning-of-platform-independence",
    },
    {
        title: "Difference among URI, URL and URN !!!",
        path: "/archive/difference-among-uri-url-and-urn",
    },
    {
        title: "Why both 3 and 4 letter extensions ???",
        path: "/archive/why-both-3-and-4-letter-extensions",
    },
    {
        title: "What is the Difference Between HTM and HTML?",
        path: "/archive/what-is-the-difference-between-htm-and-html",
    },
    {
        title: "MOTHER OF COMPUTER",
        path: "/archive/mother-of-computer",
    },
    {
        title: "1024 Coperbyte = ???",
        path: "/archive/1024-coperbyte",
    },
    {
        title: "What is the SATA, ATA, PATA HDD ??? What are difference among these ??? Which is better ???",
        path: "/archive/what-is-the-sata-ata-pata-hdd",
    },
    {
        title: "List of Executable File Extensions",
        path: "/archive/list-of-executable-file-extensions",
    },
    {
        title: "Exceptions in C",
        path: "/archive/exceptions-in-c",
    },
    {
        title: "Keyboard Shortcuts",
        path: "/archive/keyboard-shortcuts",
    },
    {
        title: "OSI Model",
        path: "/archive/osi-model",
    },
    {
        title: "List of all short forms and full form of the abbreviations",
        path: "/archive/list-of-all-short-forms-and-full-form-of-the-abbreviations",
    },
    {
        title: "Common Port Lists",
        path: "/archive/common-port-lists",
    },
    {
        title: "List of TCP and UDP port numbers",
        path: "/archive/list-of-tcp-and-udp-port-numbers",
    },
    {
        title: "ASCII Control Symbols",
        path: "/archive/ascii-control-symbols",
    },
    {
        title: "Spaghetti Code ???",
        path: "/archive/spaghetti-code",
    },
    {
        title: "List of Programming Languages",
        path: "/archive/list-of-programming-languages",
    },
    {
        title: "What is W3C ?",
        path: "/archive/what-is-w3c",
    },
    {
        title: "Be in contact till I die",
        path: "/archive/be-in-contact-till-i-die",
    },
    // {
    //     title: "Microsoft Computer Dictionary",
    //     path: "/archive/microsoft-computer-dictionary",
    // },
    {
        title: "The Periodic Table",
        path: "/archive/the-periodic-table",
    },
    {
        title: "Intro. to Binary Numbers",
        path: "/archive/intro-to-binary-numbers",
    },
    {
        title: "Intro. to Electricity",
        path: "/archive/intro-to-electricity",
    },
    {
        title: "Intro. to Assembly Language Programming",
        path: "/archive/intro-to-assembly-language-programming",
    },
    {
        title: "What is am, pm and GMT ???",
        path: "/archive/what-is-am-pm-and-gmt",
    },
    {
        title: "C Language Operator Precedence",
        path: "/archive/c-language-operator-precedence",
    },
    {
        title: "std::printf, std::fprintf, std::sprintf, std::snprintf",
        path: "/archive/std-printf-std-fprintf-std-sprintf-std-snprintf",
    },
    {
        title: "Programming Languages",
        path: "/archive/programming-languages",
    },
    {
        title: "What is that process ???",
        path: "/archive/what-is-that-process",
    },
    {
        title: "Process Explorer",
        path: "/archive/process-explorer",
    },
    {
        title: "Microsoft Power Toys",
        path: "/archive/microsoft-power-toys",
    },
    {
        title: "INDIAN FLAG - EVOLUTION",
        path: "/archive/indian-flag-evolution",
    },
    {
        title: "Nokia Phone Codes",
        path: "/archive/nokia-phone-codes",
    },
    {
        title: "World Continents",
        path: "/archive/world-continents",
    },
    {
        title: "Six or Seven Continents on Earth",
        path: "/archive/six-or-seven-continents-on-earth",
    },
    {
        title: "From Hackers Jargon File",
        path: "/archive/from-hackers-jargon-file",
    },
    {
        title: "Why 8 bits = 1 byte ???",
        path: "/archive/why-8-bits-1-byte",
    },
    {
        title: "BASIC COMPUTER TERMINOLOGY",
        path: "/archive/basic-computer-terminology",
    },
    {
        title: "YOU CAN DO IT",
        path: "/archive/you-can-do-it",
    },
    {
        title: "THE MAN WHO NEVER SLEPT",
        path: "/archive/the-man-who-never-slept",
    },
    {
        title: "THIS IS CONFIDENCE",
        path: "/archive/this-is-confidence",
    },
    {
        title: "HTTP Status Code",
        path: "/archive/http-status-code",
    },
    {
        title: "What is *.cda file?",
        path: "/archive/what-is-cda-file",
    },
    {
        title: "0 / 0 = 2",
        path: "/archive/0-divided-by-0-equals-2",
    },
    {
        title: "5000 Collegiate Words with Brief Definitions",
        path: "/archive/5000-collegiate-words-with-brief-definitions",
    },
    {
        title: "101 Romantic Ideas",
        path: "/archive/101-romantic-ideas",
    },
    {
        title: "Quick Reference - Linux Commands",
        path: "/archive/quick-reference-linux-commands",
    },
    {
        title: "Windows XP Services Configuration: Turn Off / Disable Unnecessary Services to Optimize Performance",
        path: "/archive/windows-xp-services-configuration-turn-off-disable-unnecessary-services-to-optimize-performance",
    },
    {
        title: "1000 Most Common Words in English",
        path: "/archive/1000-most-common-words-in-english",
    },
    {
        title: "Create your own icons",
        path: "/archive/create-your-own-icons",
    },
    {
        title: "Windows shortcut keys",
        path: "/archive/windows-shortcut-keys",
    },
    {
        title: "Change your start button",
        path: "/archive/change-your-start-button",
    },
    {
        title: "Change Windows XP Boot Screen",
        path: "/archive/change-windows-xp-boot-screen",
    },
    {
        title: "All About Resource Hacker in a Brief Tutorial, Ultimate Windows Customization Tool",
        path: "/archive/all-about-resource-hacker-in-a-brief-tutorial",
    },
    {
        title: "How to read and write in 1337",
        path: "/archive/how-to-read-and-write-in-1337",
    },
    {
        title: "Awesome VLC media player",
        path: "/archive/awesome-vlc-media-player",
    },
    {
        title: "Check your mobile number",
        path: "/archive/check-your-mobile-number",
    },
    {
        title: "255 Keyboard Alt Codes",
        path: "/archive/255-keyboard-alt-codes",
    },
    {
        title: "Difference between coding and encoding",
        path: "/archive/difference-between-coding-and-encoding",
    },
    {
        title: "Macintosh",
        path: "/archive/macintosh",
    },
    {
        title: "MAC and PC",
        path: "/archive/mac-and-pc",
    },
    {
        title: "GNU",
        path: "/archive/gnu",
    },
    {
        title: "Linux vs Windows",
        path: "/archive/linux-vs-windows",
    },
    {
        title: "UNIX-Like",
        path: "/archive/unix-like",
    },
    {
        title: "Full form of UNIX and LINUX",
        path: "/archive/full-form-of-unix-and-linux",
    },
    {
        title: "DESERVE BEFORE YOU DESIRE",
        path: "/archive/deserve-before-you-desire",
    },
];

const BlogArchiveNav = () => {
    const location = useLocation();
    const activeItemRef = useRef(null);
    const listRef = useRef(null);
    const [search, setSearch] = useState("");

    const filteredRoutes = useMemo(() => {
        const trimmed = search.trim().toLowerCase();

        if (!trimmed) {
            return archiveRoutes;
        }

        return archiveRoutes.filter((item) =>
            item.title.toLowerCase().includes(trimmed),
        );
    }, [search]);

    useEffect(() => {
        const listEl = listRef.current;
        const activeEl = activeItemRef.current;

        if (!listEl || !activeEl) {
            return;
        }

        const listRect = listEl.getBoundingClientRect();
        const activeRect = activeEl.getBoundingClientRect();

        const currentScrollTop = listEl.scrollTop;
        const activeOffsetTop =
            activeRect.top - listRect.top + currentScrollTop;

        const targetScrollTop =
            activeOffsetTop -
            listEl.clientHeight / 2 +
            activeEl.clientHeight / 2;

        const maxScrollTop = listEl.scrollHeight - listEl.clientHeight;
        const nextScrollTop = Math.max(
            0,
            Math.min(targetScrollTop, maxScrollTop),
        );

        listEl.scrollTo({
            top: nextScrollTop,
            behavior: "smooth",
        });
    }, [location.pathname, filteredRoutes]);

    const handleClearSearch = () => {
        setSearch("");
    };

    return (
        <Styled.Wrapper>
            <div className="headerBlock">
                <div className="headerIcon">
                    <FiArchive />
                </div>

                <div className="headerContent">
                    <h2>Blog Archive</h2>
                    <p>
                        Internal routes for the refactored Passion4Profession
                        archive.
                    </p>
                </div>
            </div>

            <div className="searchBox">
                <FiSearch className="searchIcon" />

                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search archive pages..."
                    aria-label="Search archive pages"
                />

                {search.trim() ? (
                    <button
                        type="button"
                        className="clearButton"
                        onClick={handleClearSearch}
                        aria-label="Clear search"
                        title="Clear search"
                    >
                        <FiX />
                    </button>
                ) : null}
            </div>

            <ul className="navList" ref={listRef}>
                {filteredRoutes.length ? (
                    filteredRoutes.map((item) => {
                        const firstLetter = item.title.charAt(0).toUpperCase();
                        const isActive = location.pathname === item.path;

                        return (
                            <li key={item.path} className="navItem">
                                <NavLink
                                    to={item.path}
                                    className={({ isActive: navIsActive }) =>
                                        `navLink ${navIsActive ? "active" : ""}`
                                    }
                                    ref={isActive ? activeItemRef : null}
                                >
                                    <span className="initialBadge">
                                        {firstLetter}
                                    </span>

                                    <span className="textGroup">
                                        <span className="title">
                                            {item.title}
                                        </span>
                                    </span>
                                </NavLink>
                            </li>
                        );
                    })
                ) : (
                    <li className="emptyState">
                        No archive pages match your search.
                    </li>
                )}
            </ul>
        </Styled.Wrapper>
    );
};

export default BlogArchiveNav;
