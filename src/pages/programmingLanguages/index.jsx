import React from "react";
import {
    FiCode,
    FiClock,
    FiLayers,
    FiCpu,
    FiTerminal,
    FiDatabase,
    FiGlobe,
    FiCheckCircle,
} from "react-icons/fi";
import { Styled } from "./styled";
import image from "./images/image.png";
import ShareButtons from "../../components/shareButton";

const languageFamilies = [
    {
        icon: <FiTerminal />,
        title: "Low-level languages",
        text: "These are closer to the machine. They give more control over memory and hardware behavior, but they are usually harder to write and maintain.",
        examples: ["Assembly language", "Machine code"],
    },
    {
        icon: <FiCode />,
        title: "General-purpose languages",
        text: "These are designed for solving many kinds of software problems. They are flexible and commonly used in real-world development.",
        examples: ["C", "C++", "Java", "Python", "JavaScript", "Go"],
    },
    {
        icon: <FiGlobe />,
        title: "Web-focused languages",
        text: "These are commonly used for building websites, web apps, and browser-based experiences.",
        examples: ["JavaScript", "TypeScript", "PHP"],
    },
    {
        icon: <FiDatabase />,
        title: "Domain-specific languages",
        text: "These are designed for a particular type of task rather than general software development.",
        examples: ["SQL", "HTML", "CSS", "R", "MATLAB"],
    },
];

const comparisonPoints = [
    {
        title: "Syntax",
        text: "The rules that define how code is written in that language.",
    },
    {
        title: "Performance",
        text: "How efficiently programs written in that language usually run.",
    },
    {
        title: "Ease of learning",
        text: "How beginner-friendly the language feels for new developers.",
    },
    {
        title: "Use case",
        text: "What the language is mainly used for, such as web apps, system software, mobile apps, or data science.",
    },
    {
        title: "Portability",
        text: "How easily software written in that language can run on different systems.",
    },
    {
        title: "Tooling and ecosystem",
        text: "The quality of libraries, frameworks, debuggers, and developer support around the language.",
    },
];

const examples = [
    {
        title: "C",
        text: "Often used for systems programming, operating systems, and performance-sensitive software.",
    },
    {
        title: "C++",
        text: "Common in game engines, desktop software, high-performance systems, and complex applications.",
    },
    {
        title: "Java",
        text: "Popular for enterprise applications, backend systems, Android development, and large-scale software.",
    },
    {
        title: "Python",
        text: "Widely used for scripting, automation, data analysis, machine learning, and backend development.",
    },
    {
        title: "JavaScript",
        text: "The language of the browser, also widely used on the server side through Node.js.",
    },
    {
        title: "SQL",
        text: "Used for working with relational databases and querying structured data.",
    },
];

const ProgrammingLanguages = () => {
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
                        Original topic: August 18, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>Programming Languages</h1>

                <p className="lead">
                    A programming language is a formal way of writing
                    instructions for a computer. Different programming languages
                    exist because software problems are different, and no single
                    language is perfect for every kind of task.
                </p>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <img src={image} alt="" />
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCode />
                    </span>
                    <h2>What is a programming language?</h2>
                </div>

                <p>
                    A programming language is a system of rules, symbols, and
                    syntax used to tell a computer what to do. It lets
                    developers describe logic, process data, control behavior,
                    and build software.
                </p>

                <p>
                    In simple words, a programming language is the medium
                    between human thinking and machine execution. The computer
                    does not naturally understand high-level ideas, so the
                    language acts like a bridge.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCpu />
                        </span>
                        <h2>Why are there so many languages?</h2>
                    </div>

                    <ul>
                        <li>Different problems need different strengths</li>
                        <li>Some languages focus on speed</li>
                        <li>Some focus on readability and simplicity</li>
                        <li>Some are made for web development</li>
                        <li>Some are built for scientific or database work</li>
                        <li>Some are designed to be close to hardware</li>
                    </ul>

                    <p>
                        That is why the world ended up with a whole zoo of
                        languages instead of one universal winner.
                    </p>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCheckCircle />
                        </span>
                        <h2>What all languages have in common</h2>
                    </div>

                    <ul>
                        <li>Rules for writing instructions</li>
                        <li>Ways to store and process data</li>
                        <li>Ways to make decisions and repeat actions</li>
                        <li>Ways to organize logic into reusable blocks</li>
                        <li>Ways to interact with input, output, and memory</li>
                    </ul>

                    <p>
                        The style changes, but the core purpose stays the same:
                        give clear instructions to a machine.
                    </p>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiTerminal />
                    </span>
                    <h2>How a programming language works</h2>
                </div>

                <p>
                    The code written by a developer usually cannot be executed
                    directly by the hardware as-is. It often goes through a
                    translator such as a compiler or an interpreter.
                </p>

                <div className="stepsBox">
                    <div className="step">
                        <span className="stepNo">1</span>
                        <div>
                            <strong>Write source code</strong>
                            <p>
                                The developer writes logic using the language's
                                syntax.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <span className="stepNo">2</span>
                        <div>
                            <strong>Translate it</strong>
                            <p>
                                A compiler or interpreter converts that code
                                into something the computer can execute.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <span className="stepNo">3</span>
                        <div>
                            <strong>Run the program</strong>
                            <p>
                                The machine follows the translated instructions
                                and produces output or behavior.
                            </p>
                        </div>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiLayers />
                    </span>
                    <h2>Common language categories</h2>
                </div>

                <Styled.FamilyGrid>
                    {languageFamilies.map((item) => (
                        <article key={item.title} className="familyCard">
                            <div className="familyIcon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>

                            <ul>
                                {item.examples.map((example) => (
                                    <li key={example}>{example}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </Styled.FamilyGrid>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiGlobe />
                    </span>
                    <h2>Popular examples</h2>
                </div>

                <Styled.ExampleGrid>
                    {examples.map((item) => (
                        <article key={item.title} className="exampleCard">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </Styled.ExampleGrid>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>How languages are compared</h2>
                </div>

                <div className="compareGrid">
                    {comparisonPoints.map((item) => (
                        <div key={item.title} className="compareCard">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCpu />
                    </span>
                    <h2>No language is best at everything</h2>
                </div>

                <p>
                    A language that is excellent for low-level system control
                    may not be the easiest for web development. A language that
                    is brilliant for quick scripting may not always be the top
                    choice for ultra-high-performance engine work.
                </p>

                <p>
                    So the better question is usually not "Which language is the
                    best?" but "Best for what?" That one small twist saves a lot
                    of silly internet wars.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    Programming languages are tools for expressing instructions
                    to computers. Different languages exist because different
                    kinds of software need different strengths. The goal is not
                    to find one perfect language, but to choose the right one
                    for the job.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default ProgrammingLanguages;
