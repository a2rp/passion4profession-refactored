import React from "react";
import {
    FiMonitor,
    FiCalendar,
    FiMousePointer,
    FiLayout,
    FiCpu,
    FiLayers,
    FiTrendingUp,
    FiBox,
    FiInfo,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const keyPoints = [
    {
        icon: <FiCalendar />,
        title: "1984 launch",
        text: "The Macintosh was introduced on January 24, 1984 and became one of the earliest commercially successful personal computers with a graphical user interface.",
    },
    {
        icon: <FiMousePointer />,
        title: "Mouse-driven interface",
        text: "It helped popularize the use of a mouse and windows-based interaction instead of relying only on command-line input.",
    },
    {
        icon: <FiTrendingUp />,
        title: "Brand revival",
        text: "In 1998, Apple revitalized the Macintosh line with the iMac, which simplified its product lineup and became a major success.",
    },
    {
        icon: <FiLayers />,
        title: "Apple-controlled platform",
        text: "Apple designed both the hardware and the operating system, giving the Mac a tightly integrated ecosystem.",
    },
];

const timelineItems = [
    {
        year: "1984",
        title: "Original Macintosh introduced",
        text: "The first Macintosh arrived with a graphical user interface and mouse-driven experience that stood apart from command-line systems.",
    },
    {
        year: "Late 1980s",
        title: "Strong early success",
        text: "The Macintosh line gained recognition, while Apple also continued to benefit from the strength of the Apple II family.",
    },
    {
        year: "1990s",
        title: "Pressure from the Wintel world",
        text: "The personal computer market shifted heavily toward IBM PC compatibles running MS-DOS and Microsoft Windows.",
    },
    {
        year: "1998",
        title: "iMac refreshes the brand",
        text: "Apple reorganized its consumer desktop line and introduced the iMac, which helped revive the Mac brand.",
    },
    {
        year: "Modern era",
        title: "Mac expands across form factors",
        text: "The Mac family grew into desktops, all-in-one systems, compact machines, and laptops for home, education, and creative work.",
    },
];

const architectureCards = [
    {
        title: "Motorola 68k era",
        text: "The earliest Macintosh models used Motorola 68k processors.",
    },
    {
        title: "PowerPC era",
        text: "From 1994 to 2006, many Macintosh models used PowerPC processors.",
    },
    {
        title: "Intel era",
        text: "Later Macs moved to Intel x86-64 processors, allowing broader compatibility and easier support for other operating systems.",
    },
];

const productExamples = [
    "iMac",
    "Mac mini",
    "Mac Pro",
    "MacBook Air",
    "MacBook Pro",
];

const Macintosh = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiBox />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiCalendar />
                        Original topic: May 30, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>Macintosh</h1>

                <p className="lead">
                    Macintosh, often called <strong>Mac</strong>, is
                    Apple&apos;s long-running family of personal computers. It
                    became one of the most influential computer lines in
                    personal computing history because it helped popularize the
                    graphical user interface, mouse-based interaction, and a
                    tightly integrated hardware-plus-software experience.
                </p>

                <div className="heroMetaGrid">
                    <div className="heroMetaCard">
                        <span className="metaIcon">
                            <FiMonitor />
                        </span>
                        <div>
                            <strong>Computer family</strong>
                            <span>Apple personal computers</span>
                        </div>
                    </div>

                    <div className="heroMetaCard">
                        <span className="metaIcon">
                            <FiLayout />
                        </span>
                        <div>
                            <strong>Known for</strong>
                            <span>GUI and mouse-first computing</span>
                        </div>
                    </div>

                    <div className="heroMetaCard">
                        <span className="metaIcon">
                            <FiCpu />
                        </span>
                        <div>
                            <strong>Platform model</strong>
                            <span>
                                Apple hardware plus Apple operating system
                            </span>
                        </div>
                    </div>
                </div>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiInfo />
                    </span>
                    <h2>Simple definition</h2>
                </div>

                <p>
                    Macintosh is a series of personal computers designed,
                    developed, and marketed by Apple. The first Macintosh was
                    introduced in 1984 and became famous for bringing a more
                    visual way of using a computer into the mainstream.
                </p>

                <p>
                    Instead of depending mainly on typed commands, it used a
                    graphical user interface, icons, windows, and a mouse. That
                    shift mattered a lot because it made computers feel more
                    approachable to many people.
                </p>
            </Styled.SectionCard>

            <Styled.HighlightGrid>
                {keyPoints.map((item) => (
                    <article key={item.title} className="highlightCard">
                        <div className="highlightIcon">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </article>
                ))}
            </Styled.HighlightGrid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiMousePointer />
                    </span>
                    <h2>Why the original Macintosh mattered</h2>
                </div>

                <p>
                    The original Macintosh was not the first computer ever to
                    use graphical ideas, but it was one of the first
                    commercially successful systems to make that style of
                    computing widely visible. It helped move personal computing
                    away from a world dominated by command lines and into a
                    world of windows, menus, and pointer-based interaction.
                </p>

                <div className="compareGrid">
                    <div className="compareCard">
                        <h3>Command-line style</h3>
                        <p>
                            The user types commands and must remember many exact
                            instructions.
                        </p>
                    </div>

                    <div className="compareCard">
                        <h3>Macintosh style</h3>
                        <p>
                            The user clicks visual items, opens windows, and
                            works through a graphical interface.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiTrendingUp />
                    </span>
                    <h2>Macintosh through time</h2>
                </div>

                <div className="timeline">
                    {timelineItems.map((item) => (
                        <div
                            className="timelineItem"
                            key={item.year + item.title}
                        >
                            <span className="timelineYear">{item.year}</span>

                            <div className="timelineContent">
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiLayers />
                        </span>
                        <h2>Apple&apos;s integrated approach</h2>
                    </div>

                    <p>
                        One defining feature of the Mac platform is vertical
                        integration. Apple does not just sell the computer
                        hardware. It also develops the operating system that is
                        meant to run on that hardware.
                    </p>

                    <ul>
                        <li>Apple designs the machine</li>
                        <li>Apple builds the operating system experience</li>
                        <li>Apple controls the overall product direction</li>
                        <li>
                            The result is a tightly connected hardware and
                            software platform
                        </li>
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCpu />
                        </span>
                        <h2>Processor eras</h2>
                    </div>

                    <div className="miniStack">
                        {architectureCards.map((item) => (
                            <div className="miniCard" key={item.title}>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiMonitor />
                    </span>
                    <h2>Mac product examples</h2>
                </div>

                <p>
                    Over time, the Macintosh family expanded into different
                    categories for different users, including home users,
                    students, professionals, and creative workers.
                </p>

                <div className="chipRow">
                    {productExamples.map((item) => (
                        <span key={item} className="chip">
                            {item}
                        </span>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiBox />
                    </span>
                    <h2>Operating systems and flexibility</h2>
                </div>

                <p>
                    The Mac platform is strongly associated with Apple&apos;s
                    own operating system. That was a major part of its identity.
                    At the same time, later Mac systems were also capable of
                    running alternative operating systems in some situations.
                </p>

                <ul>
                    <li>Apple&apos;s own operating system remained central</li>
                    <li>
                        Intel-based Macs made it easier to run some non-Apple
                        operating systems
                    </li>
                    <li>
                        Even so, the Mac was fundamentally built as an Apple
                        platform first
                    </li>
                </ul>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiInfo />
                    </span>
                    <h2>Best practical takeaway</h2>
                </div>

                <p>
                    Macintosh is important not just because it is a product
                    line, but because it helped shape how many people think a
                    personal computer should work. Visual interaction, tight
                    hardware-software design, and a more polished user
                    experience all became central parts of the Mac identity.
                </p>

                <p>
                    In simple terms, the Macintosh helped make computing feel
                    less like commanding a machine and more like using a visual
                    tool.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    Macintosh is Apple&apos;s family of personal computers and
                    one of the most influential names in desktop and laptop
                    computing. Its early success came from making graphical,
                    mouse-driven computing more mainstream, and its long-term
                    identity came from Apple&apos;s tightly integrated approach
                    to hardware and software.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default Macintosh;
