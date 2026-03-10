import React from "react";
import {
    FiCode,
    FiRepeat,
    FiCheckCircle,
    FiAlertCircle,
    FiCpu,
    FiDatabase,
    FiLayers,
    FiClock,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const examples = [
    {
        title: "Coding example",
        icon: <FiCode />,
        text: "Writing JavaScript, C, Java, or Python instructions to make a program do something.",
    },
    {
        title: "Encoding example",
        icon: <FiRepeat />,
        text: "Representing text using ASCII or Unicode so systems can store, process, and transfer it properly.",
    },
    {
        title: "Compression example",
        icon: <FiDatabase />,
        text: "Using Huffman encoding to represent data more efficiently.",
    },
    {
        title: "Machine-side example",
        icon: <FiCpu />,
        text: "A machine may encode data internally for storage, transmission, or processing rather than 'code' in the human programming sense.",
    },
];

const DifferenceBetweenCodingAndEncoding = () => {
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
                        Original topic: July 13, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>Difference between coding and encoding</h1>

                <p className="lead">
                    The difference depends on context, but in general{" "}
                    <strong>coding</strong> usually means writing instructions
                    for a computer, while <strong>encoding</strong> usually
                    means converting data into a particular representation or
                    format.
                </p>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Simple answer</h2>
                </div>

                <p>
                    When a person says "I am coding", they usually mean they are
                    writing program logic in some programming language such as
                    JavaScript, C, Java, or Python.
                </p>

                <p>
                    When we talk about "encoding", we usually mean converting
                    information into another form so it can be stored,
                    transmitted, processed, or understood by a system.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCode />
                        </span>
                        <h2>What is coding?</h2>
                    </div>

                    <p>
                        Coding means writing instructions in a programming
                        language to achieve some result.
                    </p>

                    <ul>
                        <li>Writing a function</li>
                        <li>Building a website</li>
                        <li>Creating app logic</li>
                        <li>Automating a task</li>
                    </ul>

                    <p>
                        In everyday software talk, coding is often used as a
                        casual synonym for programming.
                    </p>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiRepeat />
                        </span>
                        <h2>What is encoding?</h2>
                    </div>

                    <p>
                        Encoding means representing data in a specific form
                        according to a rule or system.
                    </p>

                    <ul>
                        <li>Text encoding such as ASCII or Unicode</li>
                        <li>Media encoding such as MP3 or MP4 formats</li>
                        <li>
                            Compression-related encoding such as Huffman
                            encoding
                        </li>
                        <li>Transmission-oriented data representation</li>
                    </ul>

                    <p>
                        The purpose is not usually to write program logic, but
                        to transform or represent data.
                    </p>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiAlertCircle />
                    </span>
                    <h2>Why the confusion happens</h2>
                </div>

                <p>
                    These two words sound related because both involve symbols,
                    rules, and information. But they are used differently.
                </p>

                <div className="compareGrid">
                    <div className="compareCard codingCard">
                        <h3>Coding</h3>
                        <p>
                            Mainly about writing instructions for behavior and
                            logic.
                        </p>
                    </div>

                    <div className="compareCard encodingCard">
                        <h3>Encoding</h3>
                        <p>
                            Mainly about representing data in a defined format
                            or structure.
                        </p>
                    </div>
                </div>

                <p>
                    So if a developer is coding, that usually means they are
                    writing software. If a system is encoding, that usually
                    means it is transforming data into some usable form.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiDatabase />
                    </span>
                    <h2>Encoding examples</h2>
                </div>

                <p>
                    One of the most common uses of encoding is in text and data
                    representation.
                </p>

                <div className="exampleList">
                    <div className="exampleItem">
                        <strong>ASCII</strong>
                        <p>
                            A character encoding system that maps characters to
                            numeric values.
                        </p>
                    </div>

                    <div className="exampleItem">
                        <strong>Unicode</strong>
                        <p>
                            A broader standard that supports many languages and
                            symbols across platforms.
                        </p>
                    </div>

                    <div className="exampleItem">
                        <strong>Huffman encoding</strong>
                        <p>
                            A method used in compression to represent data more
                            efficiently by assigning shorter codes to more
                            frequent items.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCpu />
                    </span>
                    <h2>Human side vs machine side</h2>
                </div>

                <p>A useful mental shortcut is this:</p>

                <div className="stepsBox">
                    <div className="step">
                        <span className="stepNo">1</span>
                        <div>
                            <strong>Human writes code</strong>
                            <p>
                                A programmer writes instructions using a
                                language and syntax.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <span className="stepNo">2</span>
                        <div>
                            <strong>System encodes data</strong>
                            <p>
                                The machine stores, transforms, or transfers
                                information in some encoded form.
                            </p>
                        </div>
                    </div>
                </div>

                <p>
                    This is not a perfect rule for every technical context, but
                    it is a very practical way to remember the difference.
                </p>
            </Styled.SectionCard>

            <Styled.ExampleGrid>
                {examples.map((item) => (
                    <article key={item.title} className="exampleCard">
                        <div className="iconBadge">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </article>
                ))}
            </Styled.ExampleGrid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Best practical conclusion</h2>
                </div>

                <p>
                    Coding is usually about creating program behavior. Encoding
                    is usually about representing or transforming data.
                </p>

                <p>
                    They can appear in the same software system, but they are
                    not the same thing. A developer may code a program that
                    performs encoding. That is where the two ideas shake hands
                    without becoming identical twins.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    Coding means writing instructions in a programming language.
                    Encoding means converting or representing data in a specific
                    format such as ASCII, Unicode, or Huffman encoding. One is
                    mainly about logic and behavior, the other is mainly about
                    representation and transformation.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default DifferenceBetweenCodingAndEncoding;
