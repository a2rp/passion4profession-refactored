import React from "react";
import {
    FiCpu,
    FiDatabase,
    FiCode,
    FiTerminal,
    FiAlertCircle,
    FiCheckCircle,
    FiLayers,
    FiBox,
    FiClock,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const coreIdeas = [
    {
        title: "CPU",
        text: "The CPU reads instructions, decodes them, and performs operations step by step.",
        icon: <FiCpu />,
    },
    {
        title: "Memory",
        text: "Programs and data are stored in memory. The CPU reads instructions from memory while running a program.",
        icon: <FiDatabase />,
    },
    {
        title: "Registers",
        text: "Registers are tiny storage locations inside the CPU used for fast operations and control.",
        icon: <FiLayers />,
    },
    {
        title: "Instructions",
        text: "Assembly code uses human-readable mnemonics like MOV and INT instead of raw numeric opcodes.",
        icon: <FiCode />,
    },
];

const exampleSteps = [
    "Load a value into AX",
    "Copy that value into DS",
    "Write a byte into memory",
    "Trigger an interrupt to return control",
];

const IntroToAssemblyLanguageProgramming = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiBox />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiClock />
                        Original topic: August 20, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>Introduction to Assembly Language Programming</h1>

                <p className="lead">
                    Assembly language is one of the lowest-level ways to program
                    a computer. It lets a programmer work very close to the CPU
                    by writing instructions that map directly to machine-level
                    operations. It is harder than high-level programming, but it
                    gives deep insight into how computers actually execute code.
                </p>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Simple definition</h2>
                </div>

                <p>
                    Assembly language is a human-readable representation of
                    machine instructions. Instead of writing raw numeric opcode
                    values, a programmer writes short instruction names such as
                    <strong> MOV</strong>, <strong>ADD</strong>, or{" "}
                    <strong>INT</strong>. An assembler then converts those
                    instructions into machine code that the processor can run.
                </p>

                <p>
                    It is called a low-level language because it sits very close
                    to the hardware. That makes it powerful, precise, and fast,
                    but also more difficult to write and understand than
                    languages such as C, Java, or JavaScript.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                {coreIdeas.map((item) => (
                    <Styled.InfoCard key={item.title}>
                        <div className="topRow">
                            <span className="miniIcon">{item.icon}</span>
                            <h3>{item.title}</h3>
                        </div>
                        <p>{item.text}</p>
                    </Styled.InfoCard>
                ))}
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCpu />
                    </span>
                    <h2>The basic idea behind a program</h2>
                </div>

                <p>
                    At a very low level, a program is just a sequence of
                    instructions stored in memory. The CPU reads one instruction
                    at a time, decodes it, and performs the required action.
                    Different instructions tell the CPU to move data, perform
                    calculations, compare values, jump to other instructions, or
                    interact with the operating system.
                </p>

                <p>
                    In raw machine code, these instructions are represented as
                    numbers. Computers understand those numbers directly, but
                    humans generally do not. Assembly language exists to make
                    those operations readable enough for humans to write and
                    reason about.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCode />
                    </span>
                    <h2>Why assembly language exists</h2>
                </div>

                <p>
                    Writing programs as raw numbers is extremely inconvenient.
                    Imagine trying to build software by memorizing numeric
                    instruction codes instead of using meaningful words. That is
                    exactly the swamp assembly language helps us escape.
                </p>

                <div className="compareGrid">
                    <div className="compareCard bad">
                        <h3>Raw machine code</h3>
                        <p>
                            Hard for humans to read, write, and debug because
                            everything appears as numeric instruction data.
                        </p>
                    </div>

                    <div className="compareCard good">
                        <h3>Assembly language</h3>
                        <p>
                            Uses readable mnemonics and symbolic structure,
                            making machine-level programming much more
                            practical.
                        </p>
                    </div>
                </div>

                <p>
                    An assembler converts assembly instructions into machine
                    code, so the CPU still gets the exact binary form it needs.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiLayers />
                    </span>
                    <h2>Registers and memory</h2>
                </div>

                <p>
                    Assembly programming often involves working with registers.
                    Registers are very small storage locations inside the CPU.
                    They are much faster than normal memory and are used heavily
                    during instruction execution.
                </p>

                <p>
                    Some registers are general purpose, while others are used
                    for more specific control-related tasks depending on the CPU
                    architecture. In older Intel-style examples, registers such
                    as <strong>AX</strong> and <strong>BX</strong> are commonly
                    seen.
                </p>

                <ul>
                    <li>Registers are inside the CPU and are very fast</li>
                    <li>Memory is larger but slower than registers</li>
                    <li>
                        Programs move values between registers and memory
                        constantly
                    </li>
                    <li>
                        Understanding registers helps explain how instructions
                        really work
                    </li>
                </ul>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiTerminal />
                    </span>
                    <h2>A tiny example conceptually</h2>
                </div>

                <p>A small assembly program might do something like this:</p>

                <div className="stepsBox">
                    {exampleSteps.map((step, index) => (
                        <div className="step" key={step}>
                            <span className="stepNo">{index + 1}</span>
                            <p>{step}</p>
                        </div>
                    ))}
                </div>

                <div className="codeBlock">
                    <pre>{`MOV AX, value
MOV DS, AX
MOV [address], data
INT 20h`}</pre>
                </div>

                <p>
                    The exact meaning depends on the processor, addressing mode,
                    and execution environment. But the main lesson is simple:
                    assembly instructions directly control how data is moved and
                    how the CPU behaves.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="topRow">
                        <span className="miniIcon">
                            <FiCheckCircle />
                        </span>
                        <h3>Why assembly is valuable</h3>
                    </div>

                    <ul>
                        <li>It teaches how CPUs execute instructions</li>
                        <li>
                            It improves understanding of memory and registers
                        </li>
                        <li>It helps explain how compilers work underneath</li>
                        <li>
                            It makes low-level debugging and systems work easier
                            to understand
                        </li>
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="topRow">
                        <span className="miniIcon">
                            <FiAlertCircle />
                        </span>
                        <h3>Why assembly is difficult</h3>
                    </div>

                    <ul>
                        <li>It is architecture specific and not portable</li>
                        <li>It is more verbose for larger tasks</li>
                        <li>It lacks many high-level conveniences</li>
                        <li>
                            Small mistakes can cause confusing low-level bugs
                        </li>
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiAlertCircle />
                    </span>
                    <h2>About the old MS-DOS debug example</h2>
                </div>

                <p>
                    Many classic assembly tutorials used old MS-DOS tools such
                    as <strong>Debug</strong> to manually enter instructions,
                    inspect memory, and run tiny programs. That approach was
                    useful for learning, but it belongs to a much older software
                    environment.
                </p>

                <p>
                    Today, assembly is more commonly explored using modern
                    assemblers, emulators, debuggers, or educational tools
                    tailored for current operating systems and CPU
                    architectures.
                </p>

                <div className="noteBox">
                    <h3>Important note</h3>
                    <p>
                        The specific registers, interrupts, memory addresses,
                        and execution details shown in older tutorials are often
                        tied to old x86 real-mode or DOS-era environments. They
                        should be understood as historical learning examples,
                        not universal modern practice.
                    </p>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiDatabase />
                    </span>
                    <h2>Assembly language vs high-level languages</h2>
                </div>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Aspect</th>
                                <th>Assembly language</th>
                                <th>High-level languages</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Abstraction level</td>
                                <td>Very low</td>
                                <td>Much higher</td>
                            </tr>
                            <tr>
                                <td>Portability</td>
                                <td>Usually poor</td>
                                <td>Usually better</td>
                            </tr>
                            <tr>
                                <td>Hardware control</td>
                                <td>Very direct</td>
                                <td>More abstracted</td>
                            </tr>
                            <tr>
                                <td>Ease of writing</td>
                                <td>Harder</td>
                                <td>Easier</td>
                            </tr>
                            <tr>
                                <td>Learning value</td>
                                <td>Excellent for internals</td>
                                <td>Excellent for faster development</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Best practical conclusion</h2>
                </div>

                <p>
                    Assembly language is not the easiest language to write, but
                    it is one of the best ways to understand how software and
                    hardware meet. It reveals how the CPU, registers, memory,
                    and instructions work together at a fundamental level.
                </p>

                <p>
                    Even if you never become a full-time assembly programmer,
                    learning the basics can make you a stronger programmer in
                    every other language. It sharpens your understanding of what
                    your code is really asking the machine to do.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    Assembly language is a low-level programming language that
                    gives direct access to CPU-style instructions through
                    readable mnemonics. It is architecture-specific and harder
                    than high-level programming, but it provides unmatched
                    insight into how computers actually execute code.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default IntroToAssemblyLanguageProgramming;
