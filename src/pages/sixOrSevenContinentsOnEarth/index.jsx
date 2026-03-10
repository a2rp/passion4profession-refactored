import React from "react";
import {
    FiGlobe,
    FiClock,
    FiMap,
    FiLayers,
    FiCheckCircle,
    FiAlertCircle,
} from "react-icons/fi";
import { Styled } from "./styled";
import image from "./images/image.png";
import ShareButtons from "../../components/shareButton";

const sevenContinentModel = [
    "Africa",
    "Antarctica",
    "Asia",
    "Australia",
    "Europe",
    "North America",
    "South America",
];

const sixContinentAmericaModel = [
    "Africa",
    "America",
    "Antarctica",
    "Asia",
    "Australia",
    "Europe",
];

const sixContinentEurasiaModel = [
    "Africa",
    "Antarctica",
    "Australia",
    "Eurasia",
    "North America",
    "South America",
];

const keyIdeas = [
    "There is no single worldwide rule that every school follows in exactly the same way.",
    "The 7-continent model is one of the most commonly taught models.",
    "Some places combine North America and South America into one continent called America.",
    "Some discussions combine Europe and Asia into Eurasia because they form one large landmass.",
    "Continents are not exactly the same thing as world regions.",
];

const SixOrSevenContinentsOnEarth = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiLayers />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiClock />
                        Original topic: August 14, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>Six or seven continents on Earth?</h1>

                <p className="lead">
                    A common answer is <strong>seven continents</strong>, but
                    some educational systems and geographic traditions use{" "}
                    <strong>six</strong>. The reason is simple: continents are
                    not defined only by pure geology. Historical teaching
                    traditions and regional conventions also shape how they are
                    counted.
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
                    <h2>Short answer</h2>
                </div>

                <p>
                    If someone asks this in a general school-level context, the
                    safest answer is usually <strong>seven continents</strong>.
                    That is the model many students learn:
                </p>

                <div className="pillGrid">
                    {sevenContinentModel.map((item) => (
                        <span key={item} className="pill">
                            {item}
                        </span>
                    ))}
                </div>

                <p>
                    But six-continent models also exist, so the deeper answer is
                    that the count depends on the classification system being
                    used.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiMap />
                        </span>
                        <h2>The 7-continent model</h2>
                    </div>

                    <p>
                        This is one of the most widely taught models, especially
                        in many school systems. It treats North America and
                        South America as separate continents, and it also treats
                        Europe and Asia as separate continents.
                    </p>

                    <ul>
                        {sevenContinentModel.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiGlobe />
                        </span>
                        <h2>Why people also say 6</h2>
                    </div>

                    <p>
                        There is more than one 6-continent model. That is where
                        the fun little chaos begins.
                    </p>

                    <ul>
                        <li>
                            One model combines North America and South America
                            into a single continent called America
                        </li>
                        <li>
                            Another model combines Europe and Asia into Eurasia
                        </li>
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiLayers />
                    </span>
                    <h2>Two different 6-continent models</h2>
                </div>

                <div className="compareGrid">
                    <div className="compareCard">
                        <h3>6 continents by combining the Americas</h3>
                        <p>
                            In this model, North America and South America are
                            treated as one continent called{" "}
                            <strong>America</strong>.
                        </p>

                        <div className="pillGrid compact">
                            {sixContinentAmericaModel.map((item) => (
                                <span key={item} className="pill">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="compareCard">
                        <h3>6 continents by combining Europe and Asia</h3>
                        <p>
                            In this model, Europe and Asia are grouped together
                            as <strong>Eurasia</strong> because they form one
                            large connected landmass.
                        </p>

                        <div className="pillGrid compact">
                            {sixContinentEurasiaModel.map((item) => (
                                <span key={item} className="pill">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiAlertCircle />
                    </span>
                    <h2>Why there is no perfectly universal answer</h2>
                </div>

                <p>
                    People often assume continents are a purely scientific fact
                    with one exact final answer carved into cosmic stone. Not
                    quite. The number depends partly on physical geography and
                    partly on human convention.
                </p>

                <ul>
                    {keyIdeas.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>

                <p>
                    That is why different textbooks, countries, and teachers may
                    present slightly different continent counts.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiMap />
                    </span>
                    <h2>Continents vs regions</h2>
                </div>

                <p>
                    Continents and world regions are not exactly the same thing.
                    A continent is a broad landmass classification. A region is
                    a practical grouping used for study, politics, economy,
                    culture, or administration.
                </p>

                <div className="exampleBox">
                    <h3>Example</h3>
                    <p>
                        People may divide the world into regions such as Europe,
                        South America, the Middle East, North Africa, or
                        Oceania. These groupings are useful, but they are not
                        all continents.
                    </p>
                </div>

                <p>
                    So when discussing the world, geographers often use regions
                    for analysis even when the continent count is being debated.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Best practical answer for students</h2>
                </div>

                <p>
                    If your school or exam follows the common modern classroom
                    model, answer <strong>seven continents</strong>.
                </p>

                <p>
                    If the discussion is more advanced, mention that some
                    systems use <strong>six</strong> by combining either:
                </p>

                <ul>
                    <li>North America and South America into America</li>
                    <li>Europe and Asia into Eurasia</li>
                </ul>

                <p>
                    That gives a more complete and intellectually honest answer.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    The most commonly taught answer is that Earth has seven
                    continents. However, six-continent models also exist,
                    depending on whether the Americas are combined or Europe and
                    Asia are combined into Eurasia. So the count is partly a
                    matter of convention, not just a hard physical rule.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default SixOrSevenContinentsOnEarth;
