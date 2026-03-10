import React from "react";
import {
    FiGlobe,
    FiMap,
    FiLayers,
    FiCheckCircle,
    FiAlertCircle,
    FiCompass,
    FiClock,
} from "react-icons/fi";
import { Styled } from "./styled";
import image from "./images/image.png";
import ShareButtons from "../../components/shareButton";

const continents = [
    {
        name: "Asia",
        summary:
            "The largest and most populous continent. It includes countries such as India, China, Japan, and many others.",
        points: [
            "Largest continent by land area",
            "Largest population in the world",
            "Contains a wide range of climates, cultures, and languages",
        ],
    },
    {
        name: "Africa",
        summary:
            "Known for its vast deserts, rich biodiversity, and deep human history. It is the second largest continent.",
        points: [
            "Second largest continent by area",
            "Home to the Sahara Desert",
            "Important in the story of early human origins",
        ],
    },
    {
        name: "North America",
        summary:
            "Includes countries like Canada, the United States, and Mexico, along with many islands and smaller nations.",
        points: [
            "Contains Canada, USA, and Mexico",
            "Has mountains, plains, forests, and deserts",
            "Strong geographic and cultural diversity",
        ],
    },
    {
        name: "South America",
        summary:
            "Famous for the Amazon rainforest, the Andes mountains, and a rich mix of cultures and ecosystems.",
        points: [
            "Home to the Amazon rainforest",
            "Contains the Andes mountain range",
            "Connected to North America by the Isthmus of Panama",
        ],
    },
    {
        name: "Europe",
        summary:
            "A relatively small continent by area, but historically important in trade, science, politics, and industrial development.",
        points: [
            "Smaller in size compared to Asia and Africa",
            "Strong historical influence on modern world systems",
            "Closely connected to Asia in the Eurasian landmass",
        ],
    },
    {
        name: "Australia",
        summary:
            "The smallest continent, sometimes referred to in broader regional discussions as part of Oceania.",
        points: [
            "Smallest continent by land area",
            "Includes unique wildlife and ecosystems",
            "Often discussed together with nearby Pacific islands in regional geography",
        ],
    },
    {
        name: "Antarctica",
        summary:
            "The coldest continent, mostly covered by ice, with no permanent resident population.",
        points: [
            "Covered mostly by ice",
            "Coldest continent on Earth",
            "Used mainly for scientific research stations",
        ],
    },
];

const sevenModel = [
    "Asia",
    "Africa",
    "North America",
    "South America",
    "Europe",
    "Australia",
    "Antarctica",
];

const sixModel = [
    "Asia",
    "Africa",
    "North America",
    "South America",
    "Antarctica",
    "Europe and Asia together as Eurasia",
    "Australia in broader regional discussion may be grouped within Oceania depending on context",
];

const WorldContinents = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiGlobe />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiClock />
                        Original topic: August 14, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>World Continents</h1>

                <p className="lead">
                    Continents are the large land divisions of Earth used in
                    geography to organize the planet into major regions. In the
                    most commonly taught model, there are 7 continents: Asia,
                    Africa, North America, South America, Europe, Australia, and
                    Antarctica.
                </p>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <img src={image} alt="" />
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Simple definition</h2>
                </div>

                <p>
                    A continent is a very large continuous landmass on Earth.
                    The idea is mainly geographic, but it is also influenced by
                    history, culture, and education systems. That means
                    continent boundaries are not always defined by pure physics
                    alone. Humans, as usual, added a little classification
                    chaos.
                </p>

                <p>
                    In school-level geography, the 7-continent model is the most
                    common and easiest to understand.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiMap />
                    </span>
                    <h2>The 7 continents</h2>
                </div>

                <div className="continentGrid">
                    {continents.map((continent) => (
                        <article key={continent.name} className="continentCard">
                            <h3>{continent.name}</h3>
                            <p>{continent.summary}</p>

                            <ul>
                                {continent.points.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiLayers />
                        </span>
                        <h2>Most common model</h2>
                    </div>

                    <p>
                        The 7-continent model is the most familiar one in many
                        schools and general references.
                    </p>

                    <ol>
                        {sevenModel.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ol>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiAlertCircle />
                        </span>
                        <h2>Why some people say 6 continents</h2>
                    </div>

                    <p>
                        In some classifications, Europe and Asia are grouped as
                        Eurasia because they are part of one large connected
                        landmass. In some regional discussions, Australia is
                        also discussed together with nearby islands under the
                        broader idea of Oceania.
                    </p>

                    <ol>
                        {sixModel.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ol>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCompass />
                    </span>
                    <h2>Important thing to understand</h2>
                </div>

                <p>
                    Continents are not always separated in a perfectly simple
                    way. For example, Europe and Asia are connected by land.
                    Their separation is mostly a historical and cultural
                    convention rather than a huge ocean boundary like the one
                    between Africa and South America.
                </p>

                <p>
                    So the concept of continents is partly physical geography
                    and partly human classification. Science gives the land.
                    Humans give the labels. The universe, meanwhile, stays
                    politely silent.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Quick comparison</h2>
                </div>

                <div className="compareGrid">
                    <div className="compareCard">
                        <h3>Physical side</h3>
                        <p>
                            Large connected landmasses, oceans, ice, and surface
                            geography.
                        </p>
                    </div>

                    <div className="compareCard">
                        <h3>Human side</h3>
                        <p>
                            Historical naming, cultural grouping, and school
                            geography conventions.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiGlobe />
                    </span>
                    <h2>Best practical conclusion</h2>
                </div>

                <p>
                    For general learning, exams, and basic geography, it is
                    safest to remember the 7 continents: Asia, Africa, North
                    America, South America, Europe, Australia, and Antarctica.
                </p>

                <p>
                    At the same time, it is also useful to know that some
                    systems use different grouping methods, which is why people
                    sometimes talk about 6 continents instead of 7.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    Continents are the major land divisions of Earth. The most
                    common model uses 7 continents, but other classification
                    systems also exist. The idea is simple for basic geography,
                    though the exact grouping can depend on historical and
                    cultural conventions.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default WorldContinents;
