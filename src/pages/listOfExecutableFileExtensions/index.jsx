import React from "react";
import {
    FiAlertTriangle,
    FiCheckCircle,
    FiCode,
    FiFileText,
    FiLayers,
    FiShield,
    FiTerminal,
    FiTool,
    FiBox,
    FiClock,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const highRiskExtensions = [
    { ext: ".exe", format: "Executable", os: "Windows" },
    { ext: ".msi", format: "Windows Installer Package", os: "Windows" },
    { ext: ".bat", format: "Batch File", os: "Windows" },
    { ext: ".cmd", format: "Command Script", os: "Windows" },
    { ext: ".com", format: "Command File", os: "Windows" },
    { ext: ".ps1", format: "PowerShell Script", os: "Windows" },
    { ext: ".reg", format: "Registry Data File", os: "Windows" },
    { ext: ".vbs", format: "VBScript File", os: "Windows" },
    { ext: ".wsf", format: "Windows Script File", os: "Windows" },
    { ext: ".jar", format: "Java Archive", os: "Cross-platform with Java" },
    { ext: ".app", format: "Application Bundle", os: "macOS" },
    { ext: ".command", format: "Terminal Command", os: "macOS" },
    { ext: ".workflow", format: "Automator Workflow", os: "macOS" },
    { ext: ".sh", format: "Shell Script", os: "Linux, macOS" },
    { ext: ".bin", format: "Binary Executable", os: "Windows, macOS, Linux" },
    { ext: ".run", format: "Executable Package", os: "Linux" },
    { ext: ".apk", format: "Android Application Package", os: "Android" },
];

const programDependentExtensions = [
    {
        ext: ".docm",
        format: "Word Macro-Enabled Document",
        program: "Microsoft Word",
    },
    {
        ext: ".xlsm",
        format: "Excel Macro-Enabled Workbook",
        program: "Microsoft Excel",
    },
    {
        ext: ".pptm",
        format: "PowerPoint Macro-Enabled Presentation",
        program: "Microsoft PowerPoint",
    },
    {
        ext: ".js",
        format: "JavaScript Script",
        program: "Browser or script host",
    },
    {
        ext: ".hta",
        format: "HTML Application",
        program: "Windows script environment",
    },
    {
        ext: ".jar",
        format: "Java Archive",
        program: "Java Runtime Environment",
    },
    { ext: ".pyc", format: "Compiled Python File", program: "Python" },
    { ext: ".ahk", format: "AutoHotkey Script", program: "AutoHotkey" },
    { ext: ".air", format: "Adobe AIR Package", program: "Adobe AIR" },
    {
        ext: ".scr",
        format: "Script or screensaver-related executable type",
        program: "Depends on system/program",
    },
];

const safetyTips = [
    "Do not open executable files from unknown email senders.",
    "Be extra careful with installers, scripts, macros, and shortcut-like files.",
    "A familiar filename does not guarantee a safe file.",
    "Check the source before running anything that can execute commands.",
    "If a file asks to enable macros or extra permissions, slow down and verify first.",
    "Antivirus helps, but basic caution is still your first shield.",
];

const ExecutableFileExtensions = () => {
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
                        Original topic: January 15, 2013
                    </span>

                    <ShareButtons />
                </div>

                <h1>List of executable file extensions</h1>

                <p className="lead">
                    An executable file is a file that can make a system perform
                    an action, run a program, execute a script, apply settings,
                    or trigger commands. That is very different from a normal
                    file that only stores passive content like plain text,
                    images, or audio.
                </p>

                <div className="heroNotice">
                    <span className="noticeIcon">
                        <FiAlertTriangle />
                    </span>
                    <p>
                        Executable files are not automatically bad, but they are
                        more sensitive than ordinary files because they can do
                        things, not just show things.
                    </p>
                </div>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Simple meaning</h2>
                </div>

                <p>
                    A file with an executable extension usually means the file
                    format supports some kind of automatic behavior. That may be
                    launching a program, running a script, installing software,
                    changing settings, or executing commands inside another
                    application.
                </p>

                <p>
                    This is why executable files are powerful and also risky. A
                    trusted installer may be helpful. A malicious executable may
                    damage files, steal data, or change system behavior.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiShield />
                        </span>
                        <h2>Why they matter</h2>
                    </div>

                    <ul>
                        <li>They can run commands on your device</li>
                        <li>They can install software or change settings</li>
                        <li>
                            They can start trusted tools or malicious payloads
                        </li>
                        <li>
                            They often require more caution than normal files
                        </li>
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiAlertTriangle />
                        </span>
                        <h2>Important caution</h2>
                    </div>

                    <p>
                        A file extension alone does not tell you whether a file
                        is safe or unsafe. It only tells you that the file may
                        be able to execute something.
                    </p>

                    <p>
                        Safety depends on the source, the file content, the
                        program opening it, and the permissions involved.
                    </p>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiTool />
                    </span>
                    <h2>Two useful categories</h2>
                </div>

                <div className="categoryGrid">
                    <div className="categoryCard">
                        <h3>Directly executable or highly sensitive</h3>
                        <p>
                            These are file types that operating systems or core
                            runtimes commonly know how to run with little extra
                            help.
                        </p>
                    </div>

                    <div className="categoryCard">
                        <h3>Program-dependent executables</h3>
                        <p>
                            These need a specific application to interpret and
                            execute their commands, such as macro files, script
                            files, or package files tied to a tool.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiTerminal />
                    </span>
                    <h2>Common high-risk executable extensions</h2>
                </div>

                <p>
                    These are common examples of executable or strongly
                    action-capable file types. This is not a complete list, but
                    it covers the ones most people should recognize.
                </p>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Extension</th>
                                <th>Format</th>
                                <th>Operating system</th>
                            </tr>
                        </thead>

                        <tbody>
                            {highRiskExtensions.map((item) => (
                                <tr key={`${item.ext}-${item.os}`}>
                                    <td>{item.ext}</td>
                                    <td>{item.format}</td>
                                    <td>{item.os}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCode />
                    </span>
                    <h2>Program-dependent executable formats</h2>
                </div>

                <p>
                    Some file types are only executable if the right software is
                    installed. If that software exists on the machine, the file
                    may be just as sensitive as a traditional executable.
                </p>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Extension</th>
                                <th>Format</th>
                                <th>Common program or runtime</th>
                            </tr>
                        </thead>

                        <tbody>
                            {programDependentExtensions.map((item) => (
                                <tr key={`${item.ext}-${item.program}`}>
                                    <td>{item.ext}</td>
                                    <td>{item.format}</td>
                                    <td>{item.program}</td>
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
                            <FiFileText />
                        </span>
                        <h2>Examples of ordinary vs executable thinking</h2>
                    </div>

                    <div className="compareItem">
                        <strong>Usually passive</strong>
                        <p>.jpg, .png, .txt, .mp3, .pdf</p>
                    </div>

                    <div className="compareItem">
                        <strong>
                            Potentially executable or action-capable
                        </strong>
                        <p>.exe, .msi, .bat, .sh, .jar, .ps1, .docm</p>
                    </div>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiBox />
                        </span>
                        <h2>Why incomplete lists are normal</h2>
                    </div>

                    <p>
                        There is no perfectly finished master list because new
                        tools, scripting engines, runtimes, and package formats
                        keep appearing. Some extensions are only meaningful in
                        specific software ecosystems.
                    </p>

                    <p>
                        So the better goal is not memorizing every obscure
                        extension in the universe. The better goal is learning
                        the pattern: if a file can run commands or trigger
                        automation, treat it carefully.
                    </p>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiShield />
                    </span>
                    <h2>Safe habits before opening such files</h2>
                </div>

                <ul className="safetyList">
                    {safetyTips.map((tip) => (
                        <li key={tip}>{tip}</li>
                    ))}
                </ul>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Best practical conclusion</h2>
                </div>

                <p>
                    Executable file extensions matter because they indicate that
                    a file may do something active on a system. That can be
                    useful, like installing trusted software, or dangerous, like
                    running malicious code.
                </p>

                <p>
                    The smartest habit is simple: do not judge by extension
                    alone, but always respect action-capable files more than
                    passive files.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    Executable file extensions belong to files that can launch
                    programs, run scripts, install software, trigger macros, or
                    execute commands through a runtime or application. They are
                    not automatically dangerous, but they deserve extra caution,
                    especially when they come from unknown or untrusted sources.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default ExecutableFileExtensions;
