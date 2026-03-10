import React from "react";
import {
    FiMonitor,
    FiSearch,
    FiLayers,
    FiCpu,
    FiTool,
    FiDownload,
    FiClock,
    FiCheckCircle,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const useCases = [
    "Find which program has locked a file or folder",
    "Inspect handles opened by a process",
    "Inspect DLLs loaded by a process",
    "Investigate handle leaks",
    "Troubleshoot DLL version conflicts",
    "Understand how Windows processes are behaving",
];

const keyFeatures = [
    {
        title: "Live process list",
        text: "The top pane shows active processes and related details such as the owning account.",
        icon: <FiMonitor />,
    },
    {
        title: "Handle view",
        text: "Shows the handles opened by the selected process, useful when a file or directory is locked.",
        icon: <FiTool />,
    },
    {
        title: "DLL view",
        text: "Shows loaded DLLs and memory-mapped files for the selected process.",
        icon: <FiLayers />,
    },
    {
        title: "Search capability",
        text: "Lets you search for open handles or loaded DLLs across processes.",
        icon: <FiSearch />,
    },
];

const ProcessExplorer = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiTool />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiClock />
                        Original topic: August 18, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>Process Explorer</h1>

                <p className="lead">
                    Process Explorer is a Windows system utility that helps you
                    inspect running processes in more detail than the normal
                    Task Manager. It can show which files, folders, handles, and
                    DLLs a process is using, making it extremely useful for
                    debugging, troubleshooting, and understanding how Windows
                    applications work under the hood.
                </p>

                <div className="metaStrip">
                    <div className="metaCard">
                        <span className="metaIcon">
                            <FiDownload />
                        </span>
                        <div>
                            <strong>Utility type</strong>
                            <span>Advanced process inspection tool</span>
                        </div>
                    </div>

                    <div className="metaCard">
                        <span className="metaIcon">
                            <FiCpu />
                        </span>
                        <div>
                            <strong>Platform</strong>
                            <span>Windows</span>
                        </div>
                    </div>
                </div>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Simple explanation</h2>
                </div>

                <p>
                    Sometimes a file cannot be deleted, renamed, or moved
                    because some process is still using it. The problem is that
                    Windows usually does not clearly tell you which program is
                    holding it. Process Explorer helps solve that mystery.
                </p>

                <p>
                    It can show what each running process has opened. That means
                    you can use it to discover which process has a file, folder,
                    or library in use.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                {keyFeatures.map((item) => (
                    <Styled.FeatureCard key={item.title}>
                        <div className="topRow">
                            <span className="iconWrap">{item.icon}</span>
                            <h2>{item.title}</h2>
                        </div>

                        <p>{item.text}</p>
                    </Styled.FeatureCard>
                ))}
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiMonitor />
                    </span>
                    <h2>How the interface works</h2>
                </div>

                <p>
                    Process Explorer is typically understood as a tool with two
                    main panes.
                </p>

                <div className="stepsBox">
                    <div className="step">
                        <span className="stepNo">1</span>
                        <div>
                            <strong>Top window</strong>
                            <p>
                                Shows the currently active processes. This helps
                                you see what is running on the system and who
                                owns each process.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <span className="stepNo">2</span>
                        <div>
                            <strong>Bottom window in handle mode</strong>
                            <p>
                                Shows the handles opened by the selected
                                process. This is useful when you want to know
                                which process is using a specific file or
                                directory.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <span className="stepNo">3</span>
                        <div>
                            <strong>Bottom window in DLL mode</strong>
                            <p>
                                Shows the DLLs and memory-mapped files loaded by
                                the selected process.
                            </p>
                        </div>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.GridTwo>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiSearch />
                        </span>
                        <h2>Why the search feature matters</h2>
                    </div>

                    <p>
                        One of the most useful features is search. Instead of
                        manually checking process after process, you can search
                        for a filename, handle, or DLL and quickly find the
                        process using it.
                    </p>

                    <p>
                        This is especially handy when a file is locked and
                        Windows gives you the usual vague drama instead of a
                        useful answer.
                    </p>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiLayers />
                        </span>
                        <h2>Why DLL information is useful</h2>
                    </div>

                    <p>
                        Applications often load shared libraries called DLLs. If
                        the wrong version is loaded, an application may crash or
                        behave strangely. Process Explorer helps reveal which
                        DLLs are currently loaded by a process.
                    </p>

                    <p>
                        This makes it useful for investigating DLL conflicts and
                        version-related issues.
                    </p>
                </Styled.InfoCard>
            </Styled.GridTwo>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiTool />
                    </span>
                    <h2>Common use cases</h2>
                </div>

                <ul className="useCaseList">
                    {useCases.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiDownload />
                    </span>
                    <h2>Installation and usage</h2>
                </div>

                <p>
                    Process Explorer is simple to start. Typically, you just run
                    the executable file. No complicated setup ceremony is
                    needed.
                </p>

                <div className="miniCard">
                    <strong>Basic start</strong>
                    <p>
                        Run the Process Explorer executable and begin inspecting
                        processes.
                    </p>
                </div>

                <p>
                    Once opened, you can select a process, switch the lower pane
                    mode, and use search to inspect files, handles, and DLLs.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCpu />
                    </span>
                    <h2>Why this tool is valuable</h2>
                </div>

                <p>
                    Process Explorer is useful not only for fixing problems but
                    also for learning how Windows behaves internally. It gives
                    visibility into processes, resources, and loaded modules in
                    a way that normal users rarely see.
                </p>

                <p>
                    For students, developers, power users, and troubleshooters,
                    it is one of those tools that feels small until the day it
                    saves you from hours of confusion.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    Process Explorer is an advanced Windows utility for
                    inspecting running processes, open handles, loaded DLLs, and
                    related system activity. Its real strength is helping you
                    answer practical questions like "Which program is using this
                    file?" and "What exactly has this process loaded?"
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default ProcessExplorer;
