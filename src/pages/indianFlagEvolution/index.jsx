import React from "react";
import {
    FiFlag,
    FiClock,
    FiLayers,
    FiCheckCircle,
    FiStar,
    FiBookOpen,
} from "react-icons/fi";
import { Styled } from "./styled";
import image from "./images/image.png";
import flag from "./images/flag.png";
import ShareButtons from "../../components/shareButton";

const evolutionItems = [
    {
        year: "1906",
        title: "Early nationalist flag",
        text: "One of the earliest known versions associated with the Indian independence movement appeared in 1906. It used horizontal bands and symbolic elements to represent identity, resistance, and unity.",
    },
    {
        year: "1907",
        title: "Another revolutionary variation",
        text: "A later variation associated with freedom movement circles appeared outside India as well. These early flags were not yet standardized, but they showed that a national symbol was beginning to take shape.",
    },
    {
        year: "1917",
        title: "Home Rule movement phase",
        text: "During the Home Rule movement, another flag design appeared. It reflected the political struggle of the time, though it was still not the final national flag that India would later adopt.",
    },
    {
        year: "1921",
        title: "Proposal with major community colors",
        text: "A flag proposal presented in 1921 is often remembered as an important step toward the modern Indian flag. It introduced a more deliberate idea of representing the people of India through bands and a central symbol.",
    },
    {
        year: "1931",
        title: "A major turning point",
        text: "In 1931, a tricolor design with saffron, white, and green became an important milestone. This version is widely seen as a direct predecessor to the current national flag.",
    },
    {
        year: "1947",
        title: "The national flag of independent India",
        text: "In 1947, India adopted the current national flag. The spinning wheel used in some earlier versions was replaced by the Ashoka Chakra, giving the final design its modern and official form.",
    },
];

const meaningItems = [
    {
        title: "Saffron",
        text: "Represents courage, sacrifice, and strength.",
    },
    {
        title: "White",
        text: "Represents peace, truth, and clarity.",
    },
    {
        title: "Green",
        text: "Represents growth, life, and prosperity.",
    },
    {
        title: "Ashoka Chakra",
        text: "The navy blue wheel at the center represents law, motion, and righteous progress. A nation should move forward, not remain stagnant.",
    },
];

const IndianFlagEvolution = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiBookOpen />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiClock />
                        Original topic: August 16, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>Indian Flag - Evolution</h1>

                <p className="lead">
                    The Indian national flag did not appear in its final form
                    all at once. It evolved through different stages during the
                    freedom movement, with each version reflecting political
                    struggle, national identity, and the growing idea of an
                    independent India.
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
                    The evolution of the Indian flag is the story of how a
                    national symbol gradually developed before independence.
                    Different versions were used at different times, and each
                    design helped shape the final flag adopted in 1947.
                </p>

                <p>
                    So when we talk about the evolution of the Indian flag, we
                    are really talking about the evolution of national identity,
                    public symbolism, and the freedom movement itself.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiFlag />
                        </span>
                        <h2>Why flags matter</h2>
                    </div>

                    <ul>
                        <li>A flag creates visual identity for a nation</li>
                        <li>It gives people a shared symbol to rally around</li>
                        <li>
                            During freedom movements, symbols become especially
                            powerful
                        </li>
                        <li>
                            A flag can represent values, hope, and collective
                            purpose
                        </li>
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiLayers />
                        </span>
                        <h2>Important point</h2>
                    </div>

                    <p>
                        The early flags of India were not all official national
                        flags in the modern sense. Many were proposed,
                        movement-based, or transitional designs connected to the
                        independence struggle.
                    </p>

                    <p>
                        The official national flag of India in its current form
                        was adopted in 1947.
                    </p>
                </Styled.InfoCard>
            </Styled.Grid>

            {/* <Styled.SectionCard>
                <img src={image} alt="" />
            </Styled.SectionCard> */}

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiClock />
                    </span>
                    <h2>Timeline of evolution</h2>
                </div>

                <img src={image} alt="" />

                <div className="timeline">
                    {evolutionItems.map((item) => (
                        <article key={item.year} className="timelineItem">
                            <div className="yearBox">{item.year}</div>

                            <div className="timelineContent">
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiStar />
                    </span>
                    <h2>The final national flag</h2>
                </div>

                <p>
                    The modern national flag of India is a horizontal tricolor
                    with saffron at the top, white in the middle, and green at
                    the bottom. At the center of the white band is the navy blue
                    Ashoka Chakra.
                </p>

                <div className="flagPreview">
                    {/* <div className="stripe saffron" />
                    <div className="stripe white">
                        <div className="chakra" />
                    </div>
                    <div className="stripe green" /> */}
                    <img src={flag} alt="" />
                </div>

                <p>
                    This final form balances symbolism, simplicity, and national
                    identity. It is one of the most recognizable national flags
                    in the world.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Meaning of the major elements</h2>
                </div>

                <div className="meaningGrid">
                    {meaningItems.map((item) => (
                        <article key={item.title} className="meaningCard">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiLayers />
                    </span>
                    <h2>Why the design changed over time</h2>
                </div>

                <p>
                    The design changed because India itself was going through
                    political and social transformation. Early flags reflected
                    ideas, movements, and communities, but the final national
                    flag needed to stand for the whole nation in a more unified
                    and lasting way.
                </p>

                <ul>
                    <li>Earlier designs were part of political movements</li>
                    <li>
                        Later designs moved toward a broader national identity
                    </li>
                    <li>
                        Symbols were refined to create a more stable final form
                    </li>
                    <li>
                        The final flag had to represent an independent republic
                    </li>
                </ul>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    The Indian flag evolved through several important stages
                    before independence. Early versions helped build a national
                    identity during the freedom movement, and the final tricolor
                    with the Ashoka Chakra became the official symbol of
                    independent India in 1947.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default IndianFlagEvolution;
