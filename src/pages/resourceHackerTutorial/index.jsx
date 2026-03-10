import React from "react";
import {
    FiTool,
    FiArchive,
    FiClock,
    FiInfo,
    FiLayers,
    FiEdit3,
    FiPlusSquare,
    FiTerminal,
    FiAlertTriangle,
    FiCheckCircle,
    FiFileText,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const resourceTypes = [
    { name: "AVI", desc: "Animated AVI resources." },
    { name: "Cursor", desc: "Cursor resources." },
    { name: "Bitmap", desc: "Bitmap image resources." },
    { name: "Icon", desc: "Icon resources." },
    { name: "Menu", desc: "Menu definitions." },
    { name: "Dialog", desc: "Dialog box layouts and controls." },
    { name: "String Table", desc: "Text strings used by the file." },
    { name: "Accelerators", desc: "Keyboard shortcut definitions." },
    { name: "Version Info", desc: "Version and metadata information." },
];

const replaceSteps = [
    "Select the resource you want to replace, for example Bitmap -> 131 -> 1033.",
    "Open the Action menu and choose the relevant replace option.",
    "Browse for the new file and open it.",
    "Confirm the resource details and click Replace.",
];

const otherResourceSteps = [
    "Open Action -> Replace Other Resource.",
    "Choose the new file from disk.",
    "Enter Resource Type, Resource Name, and Resource Language.",
    "Use the same resource name and language as the existing resource you want to replace.",
    "Click Replace.",
];

const dialogInsertSteps = [
    "Open the target dialog resource, for example Dialog -> 1020 -> 1033.",
    "Right-click in the dialog editor and choose Insert Control.",
    "Choose the required control such as BITMAP, ICON, BUTTON, or SysAnimate32.",
    "Set the Caption field to the Resource Name you added earlier.",
    "For AVI controls, prefix the resource name with #, for example #144.",
    "Click OK and then compile the script.",
    "Drag the control or use arrow keys to adjust position.",
];

const scriptCommands = [
    "-add",
    "-addskip",
    "-addoverwrite",
    "-modify",
    "-extract",
    "-delete",
];

const ResourceHackerTutorial = () => {
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
                        Original topic: July 18, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>All About Resource Hacker in a Brief Tutorial</h1>

                <p className="lead">
                    Resource Hacker is a Windows resource editing tool that can
                    inspect and modify resources inside files such as EXE, DLL,
                    and CPL. This refactored version turns the old post into a
                    cleaner guide for understanding what the tool does, how its
                    resource system is organized, and how basic editing
                    workflows work.
                </p>

                <div className="creditBox">
                    <strong>Credit note</strong>
                    <p>
                        The original post credited Vishal from AskVG. That
                        acknowledgment is preserved here.
                    </p>
                </div>
            </Styled.HeroCard>

            <Styled.WarningCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiAlertTriangle />
                    </span>
                    <h2>Important warning</h2>
                </div>

                <p>
                    Editing system files is not a toy. Replacing resources in
                    executables, DLLs, or Windows components can break apps,
                    corrupt UI elements, or even damage system stability if done
                    carelessly.
                </p>

                <ul>
                    <li>Always keep a backup of the original file.</li>
                    <li>Never edit critical system files blindly.</li>
                    <li>
                        Test changes on copies first, not live system files.
                    </li>
                    <li>Use this knowledge carefully and responsibly.</li>
                </ul>
            </Styled.WarningCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiInfo />
                    </span>
                    <h2>What Resource Hacker is</h2>
                </div>

                <p>
                    Resource Hacker is a utility used to inspect and edit
                    embedded resources inside Windows program files. These
                    resources can include icons, bitmaps, menus, dialogs,
                    strings, version information, cursors, and more.
                </p>

                <p>
                    In practical terms, it gives you a way to look inside a
                    Windows file and modify the non-code pieces that affect
                    appearance, labels, visual assets, and parts of user
                    interface structure.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiLayers />
                    </span>
                    <h2>Common resource categories</h2>
                </div>

                <div className="resourceGrid">
                    {resourceTypes.map((item) => (
                        <article key={item.name} className="resourceCard">
                            <h3>{item.name}</h3>
                            <p>{item.desc}</p>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiFileText />
                        </span>
                        <h2>How resources are identified</h2>
                    </div>

                    <p>Each resource generally has three key attributes:</p>

                    <ul>
                        <li>Resource Type</li>
                        <li>Resource Name</li>
                        <li>Resource Language</li>
                    </ul>

                    <p>
                        These values matter when viewing, replacing, adding, or
                        scripting operations. If you replace the wrong type,
                        wrong name, or wrong language, your edit may fail or go
                        to the wrong location.
                    </p>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCheckCircle />
                        </span>
                        <h2>Basic workflow idea</h2>
                    </div>

                    <p>
                        Open a file, browse the resource tree in the left pane,
                        select the resource you want to inspect, edit or replace
                        it, then compile or save the result.
                    </p>

                    <p>
                        In other words, Resource Hacker is less like a photo
                        editor and more like a structured internal file editor
                        for Windows resources.
                    </p>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiEdit3 />
                    </span>
                    <h2>Viewing and changing existing resources</h2>
                </div>

                <div className="subSection">
                    <h3>Icons, cursors, and bitmaps</h3>
                    <ol>
                        {replaceSteps.map((step) => (
                            <li key={step}>{step}</li>
                        ))}
                    </ol>
                </div>

                <div className="subSection">
                    <h3>Other resource types such as AVI</h3>
                    <ol>
                        {otherResourceSteps.map((step) => (
                            <li key={step}>{step}</li>
                        ))}
                    </ol>
                </div>

                <div className="subSection">
                    <h3>Menus, strings, and dialogs</h3>
                    <p>
                        For text-based resources such as String Table, Menu, or
                        Dialog, you can edit the resource script directly and
                        then click <strong>Compile Script</strong>.
                    </p>

                    <p>
                        If the edited script contains mistakes, Resource Hacker
                        usually reports an error so you can fix it before
                        saving.
                    </p>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiPlusSquare />
                    </span>
                    <h2>Adding new resources</h2>
                </div>

                <div className="subSection">
                    <h3>Adding bitmaps, icons, cursors, or AVI resources</h3>

                    <ol>
                        <li>Open Action -&gt; Add a new Resource.</li>
                        <li>Choose the new file from disk.</li>
                        <li>Set Resource Type, Resource Name, and Language.</li>
                        <li>
                            Make sure the Resource Name does not clash with an
                            existing one.
                        </li>
                        <li>Click Add Resource.</li>
                    </ol>
                </div>

                <div className="subSection">
                    <h3>Adding new menu items</h3>

                    <p>
                        The original tutorial showed that menu entries can be
                        inserted by editing menu script code directly.
                    </p>

                    <Styled.CodeBlock>
                        {`MENUITEM "Custom_String", 12345, MFT_STRING, MFS_GRAYED | MFS_DEFAULT`}
                    </Styled.CodeBlock>

                    <p>In practice, the shortest form can often be enough:</p>

                    <Styled.CodeBlock>
                        {`MENUITEM "Custom_String", 12345`}
                    </Styled.CodeBlock>

                    <p>
                        Resource Hacker can fill in additional default values
                        automatically.
                    </p>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiLayers />
                    </span>
                    <h2>Inserting added resources into dialog boxes</h2>
                </div>

                <ol>
                    {dialogInsertSteps.map((step) => (
                        <li key={step}>{step}</li>
                    ))}
                </ol>

                <p>
                    This is how newly added visual resources can be surfaced in
                    dialog windows such as run dialogs, progress boxes, or other
                    custom UI layouts.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiTerminal />
                    </span>
                    <h2>Using scripts and command-line automation</h2>
                </div>

                <p>
                    Resource Hacker also supports command-line usage. This makes
                    it useful for repeated operations where manual clicking
                    would be annoying enough to offend the gods of productivity.
                </p>

                <div className="commandGrid">
                    {scriptCommands.map((command) => (
                        <div key={command} className="commandChip">
                            {command}
                        </div>
                    ))}
                </div>

                <h3>Example single command</h3>

                <Styled.CodeBlock>
                    {`ResHacker.exe -addoverwrite explorer.exe, explorer1.exe, MyImage.bmp, bitmap, 143,`}
                </Styled.CodeBlock>

                <h3>Example script structure</h3>

                <Styled.CodeBlock>
                    {`[FILENAMES]
Exe=
SaveAs=
Log=

[COMMANDS]
-addoverwrite ResourceAddress, ResourceType, ResourceName`}
                </Styled.CodeBlock>

                <p>In this script format:</p>

                <ul>
                    <li>
                        <strong>Exe</strong> is the source file.
                    </li>
                    <li>
                        <strong>SaveAs</strong> is the output file.
                    </li>
                    <li>
                        <strong>Log</strong> stores operation details.
                    </li>
                    <li>
                        <strong>COMMANDS</strong> lists the actions to perform.
                    </li>
                </ul>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCheckCircle />
                        </span>
                        <h2>What this tool is great for</h2>
                    </div>

                    <ul>
                        <li>Inspecting embedded resources in Windows files</li>
                        <li>Replacing icons, cursors, or bitmaps</li>
                        <li>Editing string tables and menus</li>
                        <li>Experimenting with dialog resource layouts</li>
                        <li>Automating repeated edits with scripts</li>
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiAlertTriangle />
                        </span>
                        <h2>Where people usually get into trouble</h2>
                    </div>

                    <ul>
                        <li>Editing the wrong file without a backup</li>
                        <li>Using duplicate resource names</li>
                        <li>Wrong language code such as 1033 mismatch</li>
                        <li>Broken dialog scripts after manual edits</li>
                        <li>Trying to save protected system files directly</li>
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    Resource Hacker is a compact but powerful Windows resource
                    editor. It is useful for inspecting and modifying icons,
                    bitmaps, menus, dialogs, strings, and other embedded
                    resources inside program files. Used carefully, it is a very
                    handy customization and exploration tool. Used carelessly,
                    it can turn system files into decorative rubble.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default ResourceHackerTutorial;
