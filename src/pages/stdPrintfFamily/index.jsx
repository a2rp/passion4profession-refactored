import React from "react";
import {
    FiTerminal,
    FiClock,
    FiCheckCircle,
    FiAlertTriangle,
    FiFileText,
    FiEdit,
    FiCode,
    FiShield,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const functionCards = [
    {
        name: "std::printf",
        signature: "int printf(const char* format, ...);",
        purpose:
            "Writes formatted output to standard output, usually the console.",
        useCase: "Use it when you want to print text directly to the terminal.",
    },
    {
        name: "std::fprintf",
        signature: "int fprintf(FILE* stream, const char* format, ...);",
        purpose: "Writes formatted output to a file stream.",
        useCase:
            "Use it when output should go to a file or another stream instead of stdout.",
    },
    {
        name: "std::sprintf",
        signature: "int sprintf(char* buffer, const char* format, ...);",
        purpose: "Writes formatted output into a character buffer.",
        useCase: "Use it when you want to build a formatted string in memory.",
    },
    {
        name: "std::snprintf",
        signature:
            "int snprintf(char* buffer, int bufSize, const char* format, ...);",
        purpose: "Writes formatted output into a buffer with a size limit.",
        useCase:
            "Use it when you want safer string formatting and want to avoid buffer overflow.",
    },
];

const formatExamples = [
    {
        specifier: "%d or %i",
        meaning: "Signed decimal integer",
        example: 'std::printf("%d", 42);',
        output: "42",
    },
    {
        specifier: "%u",
        meaning: "Unsigned decimal integer",
        example: 'std::printf("%u", 42);',
        output: "42",
    },
    {
        specifier: "%x / %X",
        meaning: "Hexadecimal integer",
        example: 'std::printf("%x", 26);',
        output: "1a",
    },
    {
        specifier: "%o",
        meaning: "Octal integer",
        example: 'std::printf("%o", 10);',
        output: "12",
    },
    {
        specifier: "%f",
        meaning: "Floating-point number",
        example: 'std::printf("%f", 3.14);',
        output: "3.140000",
    },
    {
        specifier: "%e / %E",
        meaning: "Scientific notation",
        example: 'std::printf("%e", 3.14);',
        output: "3.140000e+00",
    },
    {
        specifier: "%c",
        meaning: "Single character",
        example: 'std::printf("%c", 65);',
        output: "A",
    },
    {
        specifier: "%s",
        meaning: "Character string",
        example: 'std::printf("%s", "Hello");',
        output: "Hello",
    },
    {
        specifier: "%%",
        meaning: "Literal percent sign",
        example: 'std::printf("100%% done");',
        output: "100% done",
    },
    {
        specifier: "%p",
        meaning: "Pointer value",
        example: 'std::printf("%p", ptr);',
        output: "Implementation-defined address text",
    },
];

const flagsData = [
    {
        flag: "-",
        meaning: "Left-justifies the result inside the field width.",
    },
    {
        flag: "+",
        meaning: "Always shows the sign for signed numbers.",
    },
    {
        flag: "space",
        meaning: "Adds a leading space if no sign is printed.",
    },
    {
        flag: "#",
        meaning: "Uses an alternative form such as 0x for hex in some cases.",
    },
    {
        flag: "0",
        meaning: "Pads numeric output with leading zeros.",
    },
];

const stdPrintfFamily = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiTerminal />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiClock />
                        Original topic: August 20, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>std::printf, std::fprintf, std::sprintf, std::snprintf</h1>

                <p className="lead">
                    These functions belong to the C-style formatted output
                    family. They take a format string plus extra values, convert
                    those values into text, and then send the result to
                    different destinations such as the console, a file, or a
                    memory buffer.
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
                    All four functions do almost the same core job: format data
                    into text. The main difference is{" "}
                    <strong>where the text goes</strong>.
                </p>

                <div className="summaryGrid">
                    {functionCards.map((item) => (
                        <article key={item.name} className="summaryCard">
                            <h3>{item.name}</h3>
                            <code>{item.signature}</code>
                            <p>{item.purpose}</p>
                            <span>{item.useCase}</span>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiTerminal />
                        </span>
                        <h2>Where each one writes</h2>
                    </div>

                    <ul>
                        <li>
                            <strong>std::printf</strong> writes to standard
                            output
                        </li>
                        <li>
                            <strong>std::fprintf</strong> writes to a file
                            stream
                        </li>
                        <li>
                            <strong>std::sprintf</strong> writes to a character
                            buffer
                        </li>
                        <li>
                            <strong>std::snprintf</strong> writes to a character
                            buffer with a size limit
                        </li>
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiShield />
                        </span>
                        <h2>Most important safety note</h2>
                    </div>

                    <p>
                        <strong>std::sprintf</strong> can be dangerous if the
                        buffer is too small, because it does not know the buffer
                        size.
                    </p>

                    <p>
                        <strong>std::snprintf</strong> is usually the safer
                        choice because you tell it the maximum number of
                        characters it may write.
                    </p>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCode />
                    </span>
                    <h2>Function-by-function explanation</h2>
                </div>

                <div className="stepList">
                    <div className="stepItem">
                        <span className="stepNo">1</span>
                        <div>
                            <h3>std::printf</h3>
                            <p>
                                Use this for formatted console output. It is the
                                most common starting point when learning
                                formatted printing.
                            </p>
                            <pre>
                                <code>{`std::printf("Name: %s, Age: %d\\n", "Ashish", 25);`}</code>
                            </pre>
                        </div>
                    </div>

                    <div className="stepItem">
                        <span className="stepNo">2</span>
                        <div>
                            <h3>std::fprintf</h3>
                            <p>
                                This works like printf, but sends output to a
                                file stream.
                            </p>
                            <pre>
                                <code>{`std::fprintf(file, "Score: %d\\n", 98);`}</code>
                            </pre>
                        </div>
                    </div>

                    <div className="stepItem">
                        <span className="stepNo">3</span>
                        <div>
                            <h3>std::sprintf</h3>
                            <p>
                                This writes formatted text into a buffer in
                                memory. It is powerful but risky if the buffer
                                size is not controlled.
                            </p>
                            <pre>
                                <code>{`char buffer[100];
std::sprintf(buffer, "Total: %d", 150);`}</code>
                            </pre>
                        </div>
                    </div>

                    <div className="stepItem">
                        <span className="stepNo">4</span>
                        <div>
                            <h3>std::snprintf</h3>
                            <p>
                                This is similar to sprintf, but safer because it
                                limits the number of characters written.
                            </p>
                            <pre>
                                <code>{`char buffer[100];
std::snprintf(buffer, sizeof(buffer), "Total: %d", 150);`}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiEdit />
                    </span>
                    <h2>How the format string works</h2>
                </div>

                <p>
                    The format string tells the function how to convert each
                    value into text. Normal characters are printed as they are,
                    while items beginning with <code>%</code> act as conversion
                    instructions.
                </p>

                <div className="exampleBox">
                    <h3>Example</h3>
                    <pre>
                        <code>{`std::printf("Name: %s, Marks: %d, Average: %.2f\\n", "Ashish", 95, 91.75);`}</code>
                    </pre>

                    <p>Here:</p>

                    <ul>
                        <li>
                            <code>%s</code> prints a string
                        </li>
                        <li>
                            <code>%d</code> prints an integer
                        </li>
                        <li>
                            <code>%.2f</code> prints a floating-point value with
                            2 digits after the decimal point
                        </li>
                    </ul>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiFileText />
                    </span>
                    <h2>Common format specifiers</h2>
                </div>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Specifier</th>
                                <th>Meaning</th>
                                <th>Example</th>
                                <th>Output idea</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formatExamples.map((item) => (
                                <tr key={item.specifier}>
                                    <td>{item.specifier}</td>
                                    <td>{item.meaning}</td>
                                    <td>
                                        <code>{item.example}</code>
                                    </td>
                                    <td>{item.output}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCheckCircle />
                        </span>
                        <h2>Field width and precision</h2>
                    </div>

                    <p>
                        These functions let you control spacing and numeric
                        detail.
                    </p>

                    <ul>
                        <li>
                            <code>%10s</code> means minimum width 10
                        </li>
                        <li>
                            <code>%-10s</code> means left-aligned in width 10
                        </li>
                        <li>
                            <code>%.2f</code> means 2 digits after the decimal
                            point
                        </li>
                        <li>
                            <code>%.6i</code> means integer padded to at least 6
                            digits
                        </li>
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiAlertTriangle />
                        </span>
                        <h2>Useful flags</h2>
                    </div>

                    <ul>
                        {flagsData.map((item) => (
                            <li key={item.flag}>
                                <strong>{item.flag}</strong> - {item.meaning}
                            </li>
                        ))}
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCode />
                    </span>
                    <h2>Refactored practical examples</h2>
                </div>

                <div className="codeGrid">
                    <div className="codeCard">
                        <h3>Console output</h3>
                        <pre>
                            <code>{`std::printf("User: %s\\n", "Ashish");
std::printf("Score: %d\\n", 95);
std::printf("Average: %.2f\\n", 91.75);`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <h3>File output</h3>
                        <pre>
                            <code>{`std::fprintf(file, "Log: %s\\n", "Started");
std::fprintf(file, "Items: %d\\n", 12);`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <h3>Buffer output</h3>
                        <pre>
                            <code>{`char buffer[100];
std::snprintf(buffer, sizeof(buffer), "ID-%04d", 27);`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <h3>Hex and percent</h3>
                        <pre>
                            <code>{`std::printf("Hex: %#x\\n", 26);
std::printf("Done: 100%%\\n");`}</code>
                        </pre>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiShield />
                    </span>
                    <h2>Return values and truncation</h2>
                </div>

                <p>
                    These functions usually return the number of characters
                    written. If an error occurs, they return a negative value.
                </p>

                <p>
                    <strong>std::snprintf</strong> is a bit special. If the
                    output gets truncated because the buffer is too small, it
                    returns the total number of characters that <em>would</em>{" "}
                    have been written if enough space had been available.
                </p>

                <div className="noteCard">
                    <strong>Why that matters</strong>
                    <p>
                        This lets you detect truncation and decide whether you
                        need a bigger buffer.
                    </p>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiAlertTriangle />
                    </span>
                    <h2>Best practices</h2>
                </div>

                <ul>
                    <li>
                        Prefer <code>std::snprintf</code> over{" "}
                        <code>std::sprintf</code> when possible
                    </li>
                    <li>
                        Match the format specifier with the correct argument
                        type
                    </li>
                    <li>Be careful with buffer sizes</li>
                    <li>
                        Use <code>%%</code> when you want a literal percent sign
                    </li>
                    <li>
                        Use precision such as <code>%.2f</code> for cleaner
                        numeric output
                    </li>
                    <li>Check return values when writing robust code</li>
                </ul>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    <code>std::printf</code>, <code>std::fprintf</code>,{" "}
                    <code>std::sprintf</code>, and <code>std::snprintf</code>{" "}
                    are formatted output functions that differ mainly in where
                    they send the result. They are extremely useful, but the
                    most important habit is to use them carefully, especially
                    when writing into memory buffers.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default stdPrintfFamily;
