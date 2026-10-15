import React from "react";
import {
    FiArchive,
    FiBookOpen,
    FiClock,
    FiCode,
    FiCpu,
    FiExternalLink,
    FiGlobe,
    FiSearch,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../shareButton";

const archiveHighlights = [
    {
        icon: <FiCpu />,
        title: "Everyday computing",
        text: "Straightforward notes on hardware, software, file systems, and the tools we use every day.",
    },
    {
        icon: <FiGlobe />,
        title: "The web and networks",
        text: "Explore internet fundamentals, browsers, networking concepts, and the ways online services connect.",
    },
    {
        icon: <FiCode />,
        title: "Programming and tools",
        text: "Revisit programming basics, useful shortcuts, file types, and practical technical references.",
    },
    {
        icon: <FiBookOpen />,
        title: "Notes worth keeping",
        text: "A mix of explainers, quick reference lists, and curious topics collected for learning at your own pace.",
    },
];

const waysToExplore = [
    "Search the archive when you have a specific question",
    "Browse topics across computing, software, and the web",
    "Sort articles by title or follow the original archive order",
    "Open a focused article and return whenever you need it",
];

const About = () => {
    return (
        <Styled.Wrapper>
            <Styled.HeroSection>
                <div className="heroGlow heroGlowOne" />
                <div className="heroGlow heroGlowTwo" />

                <div className="heroInner">
                    <div className="eyebrowRow">
                        <span className="eyebrowBadge">
                            <FiArchive />
                            Passion4Profession archive
                        </span>
                    </div>

                    <h1>The story behind the archive</h1>

                    <p className="heroText">
                        Passion4Profession began as a place to share what I was
                        learning about computers, software, and the web. This
                        archive brings those articles together in one searchable
                        library, so useful ideas are easier to find and revisit.
                    </p>

                    <ShareButtons />

                    <p>
                        Explore practical guides, computing fundamentals, quick
                        references, and a few curiosities from the original blog.
                        Some articles have been refreshed for clarity while
                        keeping their original subjects and spirit.
                    </p>

                    <div className="metaRow">
                        <div className="metaCard">
                            <span className="metaIcon">
                                <FiClock />
                            </span>
                            <div>
                                <strong>Where it began</strong>
                                <span>Articles from the original Passion4Profession blog</span>
                            </div>
                        </div>

                        <div className="metaCard">
                            <span className="metaIcon">
                                <FiSearch />
                            </span>
                            <div>
                                <strong>Here today</strong>
                                <span>A searchable library of computing notes and guides</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Styled.HeroSection>

            <Styled.ContentSection>
                <div className="contentGrid">
                    <section className="mainCard">
                        <div className="sectionHead">
                            <span className="sectionIcon">
                                <FiBookOpen />
                            </span>
                            <h2>What you’ll find here</h2>
                        </div>

                        <p>
                            The collection ranges from everyday computing and
                            hardware to programming, networking, and the web.
                            Find a quick reminder, get a clearer explanation of
                            a subject, or follow a question into something new.
                        </p>

                        <p>
                            The archive keeps the original blog’s curiosity and
                            range while making its articles easier to browse,
                            read, and return to. Where a topic benefits from a
                            clearer explanation, it is presented with more
                            structure without losing sight of the original idea.
                        </p>
                    </section>

                    <section className="sideCard">
                        <div className="sectionHead">
                            <span className="sectionIcon">
                                <FiExternalLink />
                            </span>
                            <h2>The original blog</h2>
                        </div>

                        <p>
                            This archive grew from the original Passion4Profession
                            blog. Visit it to see the earlier posts and their
                            history.
                        </p>

                        <a
                            href="https://passion4profession.blogspot.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="sourceLink"
                        >
                            passion4profession.blogspot.com
                        </a>
                    </section>
                </div>
            </Styled.ContentSection>

            <Styled.HighlightsSection>
                <div className="sectionTitleRow">
                    <h2>Explore the collection</h2>
                    <p>Practical ideas and references, gathered in one place</p>
                </div>

                <div className="highlightGrid">
                    {archiveHighlights.map((item) => (
                        <article key={item.title} className="highlightCard">
                            <div className="highlightIcon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </Styled.HighlightsSection>

            <Styled.PurposeSection>
                <div className="purposeGrid">
                    <section className="purposeCard">
                        <div className="sectionHead">
                            <span className="sectionIcon">
                                <FiArchive />
                            </span>
                            <h2>Made for revisiting</h2>
                        </div>

                        <p>
                            Some articles answer one specific question; others
                            open the door to a bigger topic. Read what you need,
                            follow your curiosity, and come back whenever a note
                            is useful again. This is a reference library you can
                            explore at your own pace.
                        </p>
                    </section>

                    <section className="purposeCard">
                        <div className="sectionHead">
                            <span className="sectionIcon">
                                <FiSearch />
                            </span>
                            <h2>Ways to explore</h2>
                        </div>

                        <ul className="focusList">
                            {waysToExplore.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </section>
                </div>
            </Styled.PurposeSection>

            <Styled.FooterNote>
                <div className="noteBox">
                    <h2>A note on the archive</h2>
                    <p>
                        These posts began as explanations and notes on the
                        original Passion4Profession blog. This collection keeps
                        that history accessible and makes it easier to explore
                        today.
                    </p>
                </div>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default About;
