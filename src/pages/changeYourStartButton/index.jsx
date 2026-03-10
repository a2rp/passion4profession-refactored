import React from "react";
import {
    FiAlertTriangle,
    FiArchive,
    FiClock,
    FiEdit3,
    FiFileText,
    FiLayers,
    FiMonitor,
    FiShield,
    FiTool,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const ChangeYourStartButton = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiArchive />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiClock />
                        Original topic: July 19, 2012
                    </span>

                    <span className="badge muted">
                        <FiMonitor />
                        Historical Windows XP tweak
                    </span>

                    <ShareButtons />
                </div>

                <h1>Change your Start button</h1>

                <p className="lead">
                    This archive note explains an old Windows XP customization
                    trick where the Start button text could be changed by
                    editing system resources and updating a registry value. It
                    was an interesting customization experiment from the Windows
                    XP era, but it also came with real risk because it involved
                    modifying core system behavior.
                </p>
            </Styled.HeroCard>

            <Styled.WarningCard>
                <div className="sectionHead">
                    <span className="iconWrap warning">
                        <FiAlertTriangle />
                    </span>
                    <h2>Important archive context</h2>
                </div>

                <p>
                    This method was written for <strong>Windows XP</strong>,
                    which is now obsolete. It required editing{" "}
                    <strong>explorer.exe</strong> and changing the{" "}
                    <strong>Windows Registry</strong>. That kind of tweak could
                    break the shell or leave the system unstable if done
                    incorrectly.
                </p>

                <p>
                    So this page should be treated as a historical archive note,
                    not as a recommended modern customization guide.
                </p>
            </Styled.WarningCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiFileText />
                    </span>
                    <h2>What the original idea was</h2>
                </div>

                <p>
                    The original blog post was about changing the text shown on
                    the Windows XP Start button. At that time, some people
                    believed the button text had to be exactly 5 characters long
                    because the default word was "Start". The original note
                    pushed back on that myth and showed that longer text could
                    also be used.
                </p>

                <p>The core idea was simple:</p>

                <ul>
                    <li>Take a backup of the original Windows shell file</li>
                    <li>Edit the visible Start text inside explorer.exe</li>
                    <li>Save a modified copy</li>
                    <li>Point Windows to load that modified copy at startup</li>
                </ul>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiLayers />
                        </span>
                        <h2>Why this worked</h2>
                    </div>

                    <p>
                        In Windows XP, the Start button label was part of the
                        resources bundled into the shell executable. By editing
                        that resource string, the visible text could be changed.
                    </p>

                    <p>
                        Then, by changing which shell executable Windows loaded,
                        the modified version could be used during startup.
                    </p>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiShield />
                        </span>
                        <h2>Why it was risky</h2>
                    </div>

                    <ul>
                        <li>It changed a core system executable</li>
                        <li>It required registry editing</li>
                        <li>It could prevent the normal shell from loading</li>
                        <li>
                            Any typo or wrong path could cause startup issues
                        </li>
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiTool />
                    </span>
                    <h2>Refactored step-by-step summary</h2>
                </div>

                <div className="stepsBox">
                    <div className="stepCard">
                        <span className="stepNo">1</span>
                        <div>
                            <h3>Back up the original shell file</h3>
                            <p>
                                The first step was to back up{" "}
                                <strong>c:\Windows\explorer.exe</strong> before
                                making any changes.
                            </p>
                        </div>
                    </div>

                    <div className="stepCard">
                        <span className="stepNo">2</span>
                        <div>
                            <h3>Open the file in Resource Hacker</h3>
                            <p>
                                Because explorer.exe is a binary file, it could
                                not be edited like a normal text file. A tool
                                such as Resource Hacker was used to edit the
                                resource strings inside it.
                            </p>
                        </div>
                    </div>

                    <div className="stepCard">
                        <span className="stepNo">3</span>
                        <div>
                            <h3>Find the Start button string</h3>
                            <p>
                                The original post points to the String Table
                                section and the resource entry where the text
                                "start" could be replaced with another label.
                            </p>
                        </div>
                    </div>

                    <div className="stepCard">
                        <span className="stepNo">4</span>
                        <div>
                            <h3>Compile and save a new file</h3>
                            <p>
                                After replacing the text, the edited resource
                                had to be compiled and then saved as a separate
                                explorer.exe copy instead of overwriting the
                                original file directly.
                            </p>
                        </div>
                    </div>

                    <div className="stepCard">
                        <span className="stepNo">5</span>
                        <div>
                            <h3>Update the shell path in the registry</h3>
                            <p>
                                The registry value for the shell was then
                                changed so Windows would load the modified
                                explorer executable at login.
                            </p>
                        </div>
                    </div>

                    <div className="stepCard">
                        <span className="stepNo">6</span>
                        <div>
                            <h3>Log off or reboot to see the effect</h3>
                            <p>
                                Once Windows started using the modified shell,
                                the custom Start button text appeared.
                            </p>
                        </div>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiEdit3 />
                    </span>
                    <h2>The myth mentioned in the original post</h2>
                </div>

                <p>
                    A common claim at the time was that the Start button name
                    had to remain exactly 5 characters long because the default
                    label was "Start". The original post argued against that and
                    reported that longer custom text worked without causing a
                    problem.
                </p>

                <div className="compareGrid">
                    <div className="compareCard bad">
                        <h3>Myth</h3>
                        <p>
                            The button text must always stay 5 characters long.
                        </p>
                    </div>

                    <div className="compareCard good">
                        <h3>Observation</h3>
                        <p>
                            Different text lengths could work because the label
                            was being changed as a resource string.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiShield />
                    </span>
                    <h2>Better modern takeaway</h2>
                </div>

                <p>
                    The most useful thing to preserve from this archive post is
                    not the exact tweak itself, but the curiosity behind it.
                    This was part of an era when people heavily customized
                    Windows XP by patching resources, replacing icons, and
                    editing startup components.
                </p>

                <p>
                    Today, directly modifying system executables is generally a
                    poor idea unless you are doing controlled reverse
                    engineering, testing inside a safe environment, or working
                    on legacy systems with proper backups.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiMonitor />
                    </span>
                    <h2>Why this post still matters in the archive</h2>
                </div>

                <ul>
                    <li>
                        It shows early experimentation with system internals
                    </li>
                    <li>It reflects the Windows XP customization culture</li>
                    <li>It documents an old myth and challenges it</li>
                    <li>It captures the spirit of learning by trying things</li>
                </ul>

                <p>
                    So even if the exact tweak is outdated, it still belongs in
                    the archive because it says something about that phase of
                    computing and curiosity.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>

                <p>
                    This old note described how to change the Windows XP Start
                    button text by editing explorer.exe resources and updating
                    the shell registry entry. It was a classic XP-era tweak:
                    clever, hacky, and risky. Today it works best as a
                    historical customization archive rather than as a modern
                    how-to.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default ChangeYourStartButton;
