import React from "react";
import {
    FiBookOpen,
    FiClock,
    FiCode,
    FiLayers,
    FiLink,
    FiMessageCircle,
    FiTerminal,
    FiUsers,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const jargonExamples = [
    {
        term: "Hack",
        meaning:
            "A clever, unusual, or improvised technical solution. In old hacker culture, this often had a positive meaning.",
    },
    {
        term: "Hacker",
        meaning:
            "Originally, a person who enjoys exploring systems, solving technical problems, and building clever solutions.",
    },
    {
        term: "Foo / Bar / Baz",
        meaning:
            "Placeholder words commonly used in programming examples when the real name does not matter.",
    },
    {
        term: "Kludge",
        meaning:
            "A messy or awkward solution that works, even if it is not elegant.",
    },
    {
        term: "Wizard",
        meaning:
            "A highly skilled technical person who understands systems deeply.",
    },
    {
        term: "Bogus",
        meaning: "Incorrect, fake, invalid, or not trustworthy.",
    },
];

const culturePoints = [
    "It captures the personality of early computing culture",
    "It explains how programmers and system people used words differently from normal everyday speech",
    "It preserves technical slang, humor, and mindset from hacker communities",
    "It helps readers understand older documentation, mailing lists, and technical discussions",
];

const FromHackersJargonFile = () => {
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
                        Original topic archive entry
                    </span>

                    <ShareButtons />
                </div>

                <h1>From Hackers Jargon File</h1>

                <p className="lead">
                    The old post was a short reference pointing to the "Hackers
                    Jargon File". In a cleaner and more useful form, this topic
                    is really about understanding the language, humor, and
                    culture of early hacker communities.
                </p>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiMessageCircle />
                    </span>
                    <h2>What is the Hackers Jargon File?</h2>
                </div>

                <p>
                    The Hackers Jargon File is a well-known collection of words,
                    slang, expressions, jokes, and technical cultural terms used
                    by programmers, hackers, and computing enthusiasts. It is
                    not just a dictionary. It is also a cultural record of how
                    technical people talked, thought, and described the strange
                    little world of computing.
                </p>

                <p>
                    Many of the words in it are playful, informal, and
                    community-driven. Some terms describe software behavior,
                    some describe people, and some describe clever solutions or
                    broken systems in the most entertainingly nerdy way
                    possible.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiUsers />
                        </span>
                        <h2>Why it matters</h2>
                    </div>

                    <ul>
                        {culturePoints.map((point) => (
                            <li key={point}>{point}</li>
                        ))}
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiLayers />
                        </span>
                        <h2>What it is not</h2>
                    </div>

                    <ul>
                        <li>It is not a formal programming textbook</li>
                        <li>It is not a language specification</li>
                        <li>It is not only about illegal hacking</li>
                        <li>
                            It is not limited to security terms or cybercrime
                            language
                        </li>
                    </ul>

                    <p>
                        A lot of people hear the word "hacker" and imagine only
                        security attacks. Historically, the word had a much
                        broader and often more creative meaning.
                    </p>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCode />
                    </span>
                    <h2>What the word "hacker" originally meant</h2>
                </div>

                <p>
                    In older computing culture, a hacker was often seen as a
                    curious, highly engaged technical person who enjoyed deeply
                    understanding systems and creating clever solutions. The
                    focus was on exploration, building, experimentation, and
                    elegant problem-solving.
                </p>

                <p>
                    Over time, popular media narrowed the word into something
                    much more dramatic and suspicious. That is why older hacker
                    culture and modern public understanding of the term do not
                    always match.
                </p>

                <div className="compareGrid">
                    <div className="compareCard">
                        <h3>Older culture meaning</h3>
                        <p>
                            A creative technical builder, explorer, and
                            problem-solver.
                        </p>
                    </div>

                    <div className="compareCard">
                        <h3>Popular modern misunderstanding</h3>
                        <p>
                            Someone who only breaks into systems or performs
                            cyber attacks.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiTerminal />
                    </span>
                    <h2>Examples of jargon-style terms</h2>
                </div>

                <Styled.ExampleGrid>
                    {jargonExamples.map((item) => (
                        <article key={item.term} className="exampleCard">
                            <h3>{item.term}</h3>
                            <p>{item.meaning}</p>
                        </article>
                    ))}
                </Styled.ExampleGrid>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiBookOpen />
                    </span>
                    <h2>Why this kind of file is interesting</h2>
                </div>

                <p>
                    Programming is not only syntax, APIs, and compilers. It is
                    also a culture. Communities invent terms, jokes, shorthand,
                    and shared mental models. The Hackers Jargon File is
                    interesting because it records that living culture rather
                    than just technical rules.
                </p>

                <p>
                    It also reminds us that computing history was built by
                    curious people with strong personalities, inside jokes, and
                    a tendency to name serious things in delightfully unserious
                    ways.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiLink />
                    </span>
                    <h2>Credit and source note</h2>
                </div>

                <p>
                    The original archive note referenced the Hackers Jargon File
                    and credited <strong>catb.org</strong>. This refactored page
                    keeps that spirit, but expands the topic into a clearer
                    explanation of what the jargon file represents and why it is
                    worth knowing.
                </p>

                <a
                    href="http://catb.org"
                    target="_blank"
                    rel="noreferrer"
                    className="sourceLink"
                >
                    Visit catb.org
                </a>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    The Hackers Jargon File is a cultural glossary of computing
                    slang, humor, and technical expressions from hacker and
                    programmer communities. It matters not because it teaches a
                    programming language directly, but because it helps explain
                    the mindset, vocabulary, and history of the people who built
                    much of computing culture.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default FromHackersJargonFile;
