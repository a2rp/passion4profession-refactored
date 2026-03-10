import React from "react";
import {
    FiCpu,
    FiLayers,
    FiHardDrive,
    FiCheckCircle,
    FiAlertCircle,
    FiCode,
    FiBox,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const PlatformIndependence = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiLayers />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiBox />
                        Original topic: June 8, 2013
                    </span>

                    <ShareButtons />
                </div>

                <h1>What is the meaning of platform independence?</h1>

                <p className="lead">
                    Platform independence means software can run on multiple
                    platforms with little or no change. In simple words, the
                    same logic should work on different systems instead of being
                    locked to only one machine, one operating system, or one
                    runtime environment.
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
                    When a program is platform independent, it does not depend
                    too tightly on one specific environment. That means the same
                    code, or almost the same code, can run on different
                    platforms such as Windows, Linux, or macOS.
                </p>

                <p>
                    The exact meaning depends on what you call a "platform". In
                    some cases, platform means the operating system. In some
                    cases, it means the hardware architecture. In other cases,
                    it means a runtime environment such as the Java Virtual
                    Machine, also called the JVM.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCpu />
                        </span>
                        <h2>What can a platform mean?</h2>
                    </div>

                    <ul>
                        <li>
                            A specific operating system such as Windows or Linux
                        </li>
                        <li>
                            A hardware type such as x86, ARM, or some embedded
                            device
                        </li>
                        <li>
                            A machine setup with its own memory, storage, and
                            system limits
                        </li>
                        <li>A runtime environment such as the JVM</li>
                    </ul>

                    <p>
                        So platform independence is not always absolute. It
                        depends on which level you are talking about.
                    </p>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiAlertCircle />
                        </span>
                        <h2>Important truth</h2>
                    </div>

                    <p>
                        Nothing is perfectly platform independent. There are
                        always small differences, limits, or edge cases hiding
                        under the carpet like tiny technical goblins.
                    </p>

                    <ul>
                        <li>Different file path separators</li>
                        <li>Different file system rules</li>
                        <li>Different memory limits</li>
                        <li>Different hardware capabilities</li>
                        <li>Different runtime bugs on different systems</li>
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiHardDrive />
                    </span>
                    <h2>Why portability can still fail</h2>
                </div>

                <p>
                    Even if software is designed to be portable, it can still
                    fail in practice. For example, a program may work fine on a
                    machine with a lot of RAM but crash on a weaker system.
                    Another program may assume a filename can be very long, but
                    some platforms may have stricter limits.
                </p>

                <p>
                    So platform independence does not mean "works everywhere no
                    matter what". It means the software is designed to avoid
                    unnecessary dependence on platform-specific details.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCode />
                    </span>
                    <h2>Source code portability vs compiled output</h2>
                </div>

                <p>
                    Some languages are portable mainly at the source-code level.
                    C and C++ are good examples. The source code can often be
                    moved between platforms, but after compilation the generated
                    native machine code becomes platform specific.
                </p>

                <p>
                    That means a compiled program built for Windows usually
                    cannot be run directly on Linux, and a build for one CPU
                    architecture may not work on another architecture.
                </p>

                <div className="exampleBox">
                    <h3>Quick idea</h3>
                    <ul>
                        <li>
                            C or C++ source code may be portable with changes or
                            recompilation
                        </li>
                        <li>
                            Native compiled binaries are usually platform
                            specific
                        </li>
                        <li>
                            Portability often exists before compilation, not
                            after it
                        </li>
                    </ul>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiBox />
                    </span>
                    <h2>Why Java is a famous example</h2>
                </div>

                <p>
                    Java is often used to explain platform independence because
                    Java code is compiled into bytecode instead of directly into
                    native machine instructions. That bytecode runs on the JVM.
                </p>

                <p>
                    Since the JVM exists for many platforms, the same Java
                    application can usually run on Windows, Linux, and other
                    systems without changing the application code itself.
                </p>

                <div className="stepsBox">
                    <div className="step">
                        <span className="stepNo">1</span>
                        <div>
                            <strong>Write Java source code</strong>
                            <p>
                                The programmer writes normal Java classes and
                                logic.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <span className="stepNo">2</span>
                        <div>
                            <strong>Compile to bytecode</strong>
                            <p>
                                The code becomes platform-independent bytecode.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <span className="stepNo">3</span>
                        <div>
                            <strong>Run through the JVM</strong>
                            <p>
                                The JVM on each system handles platform-specific
                                execution under the hood.
                            </p>
                        </div>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCheckCircle />
                        </span>
                        <h2>What makes Java portable</h2>
                    </div>

                    <ul>
                        <li>Same bytecode can run on many systems</li>
                        <li>
                            Standard libraries behave in a consistent way across
                            platforms
                        </li>
                        <li>
                            File handling, networking, and other APIs are
                            abstracted by the Java runtime
                        </li>
                        <li>
                            Pure Java libraries are usually easier to keep
                            portable
                        </li>
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiAlertCircle />
                        </span>
                        <h2>Where Java can still become platform specific</h2>
                    </div>

                    <ul>
                        <li>
                            If code depends on native libraries written in C or
                            C++
                        </li>
                        <li>
                            If code talks directly to special hardware or device
                            drivers
                        </li>
                        <li>If platform-specific assumptions are hardcoded</li>
                        <li>
                            If runtime or implementation bugs appear only on one
                            platform
                        </li>
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiLayers />
                    </span>
                    <h2>Classic example: file paths</h2>
                </div>

                <p>
                    A common portability mistake is hardcoding path separators.
                    One system may use one format while another system may use a
                    different one. Good platform-independent code avoids such
                    assumptions and uses the language or standard library tools
                    made for that purpose.
                </p>

                <div className="compareGrid">
                    <div className="compareCard bad">
                        <h3>Less portable thinking</h3>
                        <p>
                            Assume every system stores paths in exactly the same
                            way.
                        </p>
                    </div>

                    <div className="compareCard good">
                        <h3>More portable thinking</h3>
                        <p>
                            Use standard library utilities that adapt to the
                            current platform.
                        </p>
                    </div>
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
                    Platform independence is not magic. It is careful software
                    design. A program becomes portable when the developer avoids
                    unnecessary system-specific assumptions and uses
                    abstractions provided by the language or runtime.
                </p>

                <p>
                    Java comes very close to practical platform independence
                    because it uses bytecode plus the JVM. But even then, proper
                    testing on different platforms is still necessary.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    Platform independence means software can run on multiple
                    platforms with little or no change. It is never perfectly
                    absolute, but some technologies such as Java make it highly
                    practical by hiding many platform-specific details behind a
                    common runtime environment.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default PlatformIndependence;
