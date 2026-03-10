import React from "react";
import {
    FiClock,
    FiUser,
    FiMapPin,
    FiFeather,
    FiBookOpen,
    FiCpu,
    FiImage,
    FiStar,
    FiLayers,
    FiPenTool,
    FiActivity,
    FiAlertCircle,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const identityStats = [
    {
        label: "Full name",
        value: "Leonardo di ser Piero da Vinci",
        icon: <FiUser />,
    },
    {
        label: "Born",
        value: "April 15, 1452 - Vinci, Republic of Florence",
        icon: <FiClock />,
    },
    {
        label: "Died",
        value: "May 2, 1519 - Amboise, Kingdom of France",
        icon: <FiMapPin />,
    },
    {
        label: "Nationality",
        value: "Italian (Tuscany)",
        icon: <FiFeather />,
    },
];

const roles = [
    "Painter",
    "Sculptor",
    "Architect",
    "Musician",
    "Scientist",
    "Mathematician",
    "Engineer",
    "Inventor",
    "Anatomist",
    "Geologist",
    "Cartographer",
    "Botanist",
    "Writer",
];

const famousWorks = [
    "Mona Lisa",
    "The Last Supper",
    "The Vitruvian Man",
    "Lady with an Ermine",
];

const innovations = [
    "Helicopter concept",
    "Tank concept",
    "Concentrated solar power concept",
    "Calculator concept",
    "Double hull idea",
    "Rudimentary plate tectonics thinking",
    "Automated bobbin winder",
    "Machine for testing wire tensile strength",
];

const timeline = [
    {
        year: "1452",
        title: "Birth in Vinci",
        text: "Leonardo was born in Vinci, in the Republic of Florence, to Piero da Vinci and Caterina.",
    },
    {
        year: "Early life",
        title: "Education under Verrocchio",
        text: "He was trained in the studio of the renowned Florentine artist Andrea del Verrocchio.",
    },
    {
        year: "Milan years",
        title: "Worked for Ludovico il Moro",
        text: "A major part of his earlier career was spent in the service of Ludovico il Moro in Milan.",
    },
    {
        year: "Later years",
        title: "Worked across Italian cities",
        text: "He also worked in Rome, Bologna, and Venice during different phases of his life.",
    },
    {
        year: "Final phase",
        title: "Last years in France",
        text: "He spent his final years in France under the patronage of Francis I.",
    },
];

const AboutLeonardo = () => {
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
                        Original topic: August 7, 2012
                    </span>

                    <ShareButtons />
                </div>

                <div className="heroGrid">
                    <div className="heroContent">
                        <h1>The Man Who Never Slept</h1>

                        <p className="lead">
                            Leonardo da Vinci is remembered not just as a
                            painter, but as one of history's most extraordinary
                            polymaths. He moved across art, science,
                            engineering, anatomy, architecture, and invention
                            with a level of curiosity that still feels almost
                            unfair to the rest of humanity. The title "The Man
                            Who Never Slept" captures that restless creative
                            energy, even though it should be read as a symbolic
                            description, not a literal medical claim.
                        </p>

                        <div className="highlightRow">
                            <div className="miniHighlight">
                                <FiStar />
                                Renaissance polymath
                            </div>
                            <div className="miniHighlight">
                                <FiPenTool />
                                Master painter
                            </div>
                            <div className="miniHighlight">
                                <FiCpu />
                                Inventive thinker
                            </div>
                        </div>
                    </div>

                    <div className="heroPanel">
                        <h2>At a glance</h2>

                        <div className="statList">
                            {identityStats.map((item) => (
                                <div key={item.label} className="statItem">
                                    <span className="statIcon">
                                        {item.icon}
                                    </span>

                                    <div className="statText">
                                        <span className="statLabel">
                                            {item.label}
                                        </span>
                                        <span className="statValue">
                                            {item.value}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiUser />
                    </span>
                    <h2>Who was Leonardo da Vinci?</h2>
                </div>

                <p>
                    Leonardo di ser Piero da Vinci was an Italian Renaissance
                    polymath. He is often described as the archetype of the
                    Renaissance man because his interests were not limited to a
                    single field. He worked across painting, sculpture,
                    architecture, science, mathematics, engineering, invention,
                    anatomy, geology, cartography, botany, music, and writing.
                </p>

                <p>
                    He is widely regarded as one of the greatest painters of all
                    time and one of the most broadly talented individuals in
                    recorded history. What makes him so remarkable is not only
                    the range of his interests, but the seriousness with which
                    he pursued each one.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiLayers />
                        </span>
                        <h2>Fields associated with Leonardo</h2>
                    </div>

                    <div className="chipGrid">
                        {roles.map((item) => (
                            <span key={item} className="chip">
                                {item}
                            </span>
                        ))}
                    </div>

                    <p>
                        This range is exactly why Leonardo is often treated as a
                        symbol of Renaissance humanism: deep curiosity joined
                        with practical observation.
                    </p>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiImage />
                        </span>
                        <h2>Best-known works</h2>
                    </div>

                    <ul>
                        {famousWorks.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>

                    <p>
                        Among these, the Mona Lisa became one of the most famous
                        portraits in the world, while The Last Supper became one
                        of the most reproduced religious paintings ever made.
                    </p>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiBookOpen />
                    </span>
                    <h2>Early life and background</h2>
                </div>

                <p>
                    Leonardo was born out of wedlock to Piero da Vinci, a
                    notary, and Caterina, a peasant woman, in Vinci near
                    Florence. He was later educated in the workshop of Andrea
                    del Verrocchio, one of Florence's important artists and
                    teachers.
                </p>

                <p>
                    That training shaped his artistic foundation, but Leonardo's
                    mind was never content to remain inside one discipline. Even
                    when he painted, he observed nature like a scientist. Even
                    when he studied machines, he sketched like an artist.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiClock />
                    </span>
                    <h2>Career timeline</h2>
                </div>

                <div className="timeline">
                    {timeline.map((item) => (
                        <div
                            key={`${item.year}-${item.title}`}
                            className="timeItem"
                        >
                            <div className="timeYear">{item.year}</div>

                            <div className="timeContent">
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiPenTool />
                    </span>
                    <h2>Leonardo the painter</h2>
                </div>

                <p>
                    Leonardo is famous first as a painter, and rightly so. His
                    surviving paintings are relatively few, partly because he
                    experimented constantly with techniques and partly because
                    he was known for delay and unfinished work. But the works
                    that do survive had an enormous influence on later artists.
                </p>

                <p>
                    The Mona Lisa is widely recognized as one of the most famous
                    portraits ever painted. The Last Supper became one of the
                    most influential religious compositions in Western art. His
                    drawing of the Vitruvian Man also became a cultural icon,
                    reproduced on everything from textbooks to currency and
                    merchandise.
                </p>

                <div className="quoteBox">
                    <p>
                        A small number of surviving works, but an immense
                        long-term influence.
                    </p>
                </div>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCpu />
                        </span>
                        <h2>Technological imagination</h2>
                    </div>

                    <p>
                        Leonardo was revered for his technological ingenuity. He
                        imagined machines and systems far ahead of his time,
                        even if many were not built during his lifetime.
                    </p>

                    <ul>
                        {innovations.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiActivity />
                        </span>
                        <h2>Scientific and technical study</h2>
                    </div>

                    <p>
                        He also made important observations in anatomy, civil
                        engineering, optics, and hydrodynamics. However, much of
                        this work was not published in ways that gave it a
                        direct scientific influence during later centuries.
                    </p>

                    <p>
                        That does not reduce its brilliance. It simply means his
                        notebooks were often more like private laboratories of
                        thought than formal public publications.
                    </p>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiFeather />
                    </span>
                    <h2>Why he still fascinates people</h2>
                </div>

                <p>
                    Leonardo fascinates people because he appears to unite
                    opposites that are often separated in ordinary life. He was
                    artistic and analytical. He was observational and
                    imaginative. He was interested in beauty, but also in
                    mechanism, motion, structure, anatomy, and mathematics.
                </p>

                <p>
                    He did not fit neatly into one profession. He seemed to live
                    as though the world itself was a giant unfinished notebook.
                    That is why people still return to him whenever they talk
                    about curiosity, invention, genius, or the ideal of broad
                    human potential.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiAlertCircle />
                    </span>
                    <h2>Important note about the title</h2>
                </div>

                <p>
                    The title "The Man Who Never Slept" works well as a dramatic
                    phrase, but it should not be taken literally. What it really
                    suggests is Leonardo's relentless curiosity and astonishing
                    range of work. The deeper truth is not that he never slept,
                    but that he seemed mentally awake in more directions than
                    most people manage in one lifetime.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    Leonardo da Vinci was one of history's greatest polymaths: a
                    painter, inventor, engineer, anatomist, and thinker whose
                    work embodied the Renaissance ideal of human curiosity. His
                    paintings changed art, his notebooks revealed extraordinary
                    invention, and his reputation endures because he treated the
                    world as something to be observed, questioned, and endlessly
                    explored.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default AboutLeonardo;
