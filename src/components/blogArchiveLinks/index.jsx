import React from "react";
import { FiArrowUpRight, FiArchive } from "react-icons/fi";
import { Styled } from "./styled";

const archivePosts = [
    {
        title: "What is the meaning of platform independence ???",
        href: "https://passion4profession.blogspot.com/2013/06/what-is-meaning-of-platform-independence.html",
    },
    {
        title: "Difference among URI, URL and URN !!!",
        href: "https://passion4profession.blogspot.com/2013/04/difference-among-uri-url-and-urn.html",
    },
    {
        title: "Why both 3 and 4 letter extensions ???",
        href: "https://passion4profession.blogspot.com/2013/01/why-both-3-and-4-letter-extensions.html",
    },
    {
        title: "What is the Difference Between HTM and HTML?",
        href: "https://passion4profession.blogspot.com/2013/01/what-is-difference-between-htm-and-html.html",
    },
    {
        title: "MOTHER OF COMPUTER",
        href: "https://passion4profession.blogspot.com/2013/01/mother-of-computer.html",
    },
    {
        title: "1024 Coperbyte = ???",
        href: "https://passion4profession.blogspot.com/2013/01/1024-coperbyte.html",
    },
    {
        title: "What is the SATA, ATA, PATA HDD ??? What are difference among these ??? Which is better ???",
        href: "https://passion4profession.blogspot.com/2013/01/what-is-sata-ata-pata-hdd-what-are.html",
    },
    {
        title: "List of Executable File Extensions",
        href: "https://passion4profession.blogspot.com/2013/01/list-of-executable-file-extensions.html",
    },
    {
        title: "Exceptions in C",
        href: "https://passion4profession.blogspot.com/2012/12/exceptions-in-c.html",
    },
    {
        title: "Keyboard Shortcuts",
        href: "https://passion4profession.blogspot.com/2012/12/keyboard-shortcuts.html",
    },
    {
        title: "OSI Model",
        href: "https://passion4profession.blogspot.com/2012/11/osi-model.html",
    },
    {
        title: "List of all short forms and full form of the abbreviations",
        href: "https://passion4profession.blogspot.com/2012/10/list-of-all-short-forms-and-full-form.html",
    },
    {
        title: "Common Port Lists",
        href: "https://passion4profession.blogspot.com/2012/10/common-port-lists.html",
    },
    {
        title: "List of TCP and UDP port numbers",
        href: "https://passion4profession.blogspot.com/2012/10/list-of-tcp-and-udp-port-numbers.html",
    },
    {
        title: "ASCII Control Symbols",
        href: "https://passion4profession.blogspot.com/2012/09/ascii-control-symbols.html",
    },
    {
        title: "Spaghetti Code ???",
        href: "https://passion4profession.blogspot.com/2012/09/spaghetti-code.html",
    },
    {
        title: "List of Programming Languages",
        href: "https://passion4profession.blogspot.com/2012/09/list-of-programming-languages.html",
    },
    {
        title: "What is W3C ?",
        href: "https://passion4profession.blogspot.com/2012/09/what-is-w3c.html",
    },
    {
        title: "Be in contact till I die",
        href: "https://passion4profession.blogspot.com/2012/08/be-in-contact-till-i-die.html",
    },
    {
        title: "Microsoft Computer Dictionary",
        href: "https://passion4profession.blogspot.com/2012/08/microsoft-computer-dictionary.html",
    },
    {
        title: "The Periodic Table",
        href: "https://passion4profession.blogspot.com/2012/08/the-periodic-table_20.html",
    },
    {
        title: "Intro. to Binary Numbers",
        href: "https://passion4profession.blogspot.com/2012/08/intro-to-binary-numbers.html",
    },
    {
        title: "Intro. to Electricity",
        href: "https://passion4profession.blogspot.com/2012/08/intro-to-electricity.html",
    },
    {
        title: "Intro. to Assembly Language Programming",
        href: "https://passion4profession.blogspot.com/2012/08/intro-to-assembly-language-programming.html",
    },
    {
        title: "What is am, pm and GMT ???",
        href: "https://passion4profession.blogspot.com/2012/08/what-is-am-pm-and-gmt.html",
    },
    {
        title: "C Language Operator Precedence",
        href: "https://passion4profession.blogspot.com/2012/08/c-language-operator-precedence.html",
    },
    {
        title: "std::printf, std::fprintf, std::sprintf, std::snprintf",
        href: "https://passion4profession.blogspot.com/2012/08/stdprintf-stdfprintf-stdsprintf.html",
    },
    {
        title: "Programming Languages",
        href: "https://passion4profession.blogspot.com/2012/08/programming-languages.html",
    },
    {
        title: "What is that process ???",
        href: "https://passion4profession.blogspot.com/2012/08/svchostexe.html",
    },
    {
        title: "Process Explorer",
        href: "https://passion4profession.blogspot.com/2012/08/process-explorer.html",
    },
    {
        title: "Microsoft Power Toys",
        href: "https://passion4profession.blogspot.com/2012/08/microsoft-power-toys.html",
    },
    {
        title: "INDIAN FLAG - EVOLUTION",
        href: "https://passion4profession.blogspot.com/2012/08/indian-flag-evolution.html",
    },
    {
        title: "Nokia Phone Codes",
        href: "https://passion4profession.blogspot.com/2012/08/nokia-phone-codes.html",
    },
    {
        title: "World Continents",
        href: "https://passion4profession.blogspot.com/2012/08/world-continents.html",
    },
    {
        title: "Six or Seven Continents on Earth",
        href: "https://passion4profession.blogspot.com/2012/08/six-or-seven-continents-on-earth.html",
    },
    {
        title: "From Hackers Jargon File",
        href: "https://passion4profession.blogspot.com/2012/08/from-hackers-jargon-file.html",
    },
    {
        title: "Why 8 bits = 1 byte ???",
        href: "https://passion4profession.blogspot.com/2012/08/why-8-bits-1-byte.html",
    },
    {
        title: "BASIC COMPUTER TERMINOLOGY",
        href: "https://passion4profession.blogspot.com/2012/08/basic-computer-terminology_4696.html",
    },
    {
        title: "YOU CAN DO IT",
        href: "https://passion4profession.blogspot.com/2012/08/you-can-do-it.html",
    },
    {
        title: "THE MAN WHO NEVER SLEPT",
        href: "https://passion4profession.blogspot.com/2012/08/the-man-who-never-slept.html",
    },
    {
        title: "THIS IS CONFIDENCE",
        href: "https://passion4profession.blogspot.com/2012/08/this-is-confidence.html",
    },
    {
        title: "HTTP Status Code",
        href: "https://passion4profession.blogspot.com/2012/07/http-status-code.html",
    },
    {
        title: "What is *.cda file?",
        href: "https://passion4profession.blogspot.com/2012/07/what-is-cda.html",
    },
    {
        title: "0 / 0 = 2",
        href: "https://passion4profession.blogspot.com/2012/07/0-0-2.html",
    },
    {
        title: "5000 Collegiate Words with Brief Definitions",
        href: "https://passion4profession.blogspot.com/2012/07/5000-collegiate-words-with-brief.html",
    },
    {
        title: "101 Romantic Ideas",
        href: "https://passion4profession.blogspot.com/2012/07/101-romantic-ideas.html",
    },
    {
        title: "Quick Reference - Linux Commands",
        href: "https://passion4profession.blogspot.com/2012/07/quick-reference-linux-commands.html",
    },
    {
        title: "Windows XP Services Configuration: Turn Off / Disable Unnecessary Services to Optimize Performance",
        href: "https://passion4profession.blogspot.com/2012/07/windows-xp-services-configuration-turn.html",
    },
    {
        title: "1000 Most Common Words in English",
        href: "https://passion4profession.blogspot.com/2012/07/1000-most-common-words-in-english.html",
    },
    {
        title: "Create your own icons",
        href: "https://passion4profession.blogspot.com/2012/07/create-your-own-icons.html",
    },
    {
        title: "Windows shortcut keys",
        href: "https://passion4profession.blogspot.com/2012/07/windows-shortcut-keys.html",
    },
    {
        title: "Change your start button",
        href: "https://passion4profession.blogspot.com/2012/07/change-your-start-button.html",
    },
    {
        title: "Change Windows XP Boot Screen",
        href: "https://passion4profession.blogspot.com/2012/07/change-windows-xp-boot-screen.html",
    },
    {
        title: "All About Resource Hacker in a Brief Tutorial, Ultimate Windows Customization Tool",
        href: "https://passion4profession.blogspot.com/2012/07/all-about-resource-hacker-in-brief.html",
    },
    {
        title: "How to read and write in 1337",
        href: "https://passion4profession.blogspot.com/2012/07/how-to-read-and-write-in-1337.html",
    },
    {
        title: "Awesome VLC media player",
        href: "https://passion4profession.blogspot.com/2012/07/awesome-vlc-media-player.html",
    },
    {
        title: "Check your mobile number",
        href: "https://passion4profession.blogspot.com/2012/07/check-your-mobile-number.html",
    },
    {
        title: "255 Keyboard Alt Codes",
        href: "https://passion4profession.blogspot.com/2012/07/255-keyboard-alt-codes.html",
    },
    {
        title: "Difference between coding and encoding",
        href: "https://passion4profession.blogspot.com/2012/07/difference-between-coding-and-encoding.html",
    },
    {
        title: "Macintosh",
        href: "https://passion4profession.blogspot.com/2012/05/macintosh.html",
    },
    {
        title: "MAC and PC",
        href: "https://passion4profession.blogspot.com/2012/05/mac-and-pc.html",
    },
    {
        title: "GNU",
        href: "https://passion4profession.blogspot.com/2012/05/gnu.html",
    },
    {
        title: "Linux vs Windows",
        href: "https://passion4profession.blogspot.com/2012/05/linux-vs-windows.html",
    },
    {
        title: "UNIX-Like",
        href: "https://passion4profession.blogspot.com/2012/05/unix-like.html",
    },
    {
        title: "Full form of UNIX and LINUX",
        href: "https://passion4profession.blogspot.com/2012/05/unix-and-linux.html",
    },
    {
        title: "DESERVE BEFORE YOU DESIRE",
        href: "https://passion4profession.blogspot.com/2012/05/deserve-before-you-desire.html",
    },
];

const BlogArchiveLinks = () => {
    return (
        <Styled.Wrapper>
            <div className="topRow">
                <div className="iconWrap">
                    <FiArchive />
                </div>

                <div className="headingContent">
                    <h2>Original Blog Archive Links</h2>
                    <p>
                        Direct links to the old Passion4Profession blog posts.
                    </p>
                </div>
            </div>

            <ul className="archiveList">
                {archivePosts.map((post) => (
                    <li key={post.href} className="archiveItem">
                        <a
                            href={post.href}
                            target="_blank"
                            rel="noreferrer"
                            className="archiveLink"
                        >
                            <span className="linkText">{post.title}</span>
                            <span className="linkIcon">
                                <FiArrowUpRight />
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </Styled.Wrapper>
    );
};

export default BlogArchiveLinks;
