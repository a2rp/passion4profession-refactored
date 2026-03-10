import React from "react";
import {
    FiMonitor,
    FiClock,
    FiArchive,
    FiAlertTriangle,
    FiTool,
    FiImage,
    FiSettings,
    FiCheckCircle,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const requirements = [
    "A Windows XP system",
    "Resource Hacker",
    "An image editor such as Photoshop",
    "Basic access to system files",
    "Care while editing boot configuration",
];

const steps = [
    {
        title: "Create a backup kernel copy",
        text: "Copy windows/system32/ntoskrnl.exe to windows/system32/mykrnl.exe so you edit a duplicate instead of touching the original file directly.",
    },
    {
        title: "Open the copied file in Resource Hacker",
        text: "Launch Resource Hacker and open windows/system32/mykrnl.exe.",
    },
    {
        title: "Locate the boot screen bitmap",
        text: "The startup screen bitmaps are usually 1, 8, and 10. In the original tutorial, bitmap 1 is the one that needed editing.",
    },
    {
        title: "Export the bitmap",
        text: "Use the save bitmap action and export bitmap 1 to your hard drive.",
    },
    {
        title: "Open the bitmap in Photoshop",
        text: "The image may appear completely black at first. That is expected because of the limited color mode being used.",
    },
    {
        title: "Load the correct color table",
        text: "Go to Image, then Mode, then Color Table, and load the 16-color palette so the splash image becomes visible.",
    },
    {
        title: "Edit or replace the image carefully",
        text: "Keep the same dimensions and the same palette. If you break the format, the boot screen may not render correctly.",
    },
    {
        title: "Replace the bitmap in Resource Hacker",
        text: "Return to Resource Hacker and use the replace bitmap action to insert your edited version into mykrnl.exe.",
    },
    {
        title: "Save the modified kernel copy",
        text: "Save the edited file as mykrnl.exe.",
    },
    {
        title: "Edit boot.ini to use the custom kernel",
        text: "Add /KERNEL=Mykrnl.exe to the Windows XP boot entry so XP loads the modified kernel file instead of the default one.",
    },
    {
        title: "Restart and test",
        text: "Reboot the system and confirm whether the custom boot screen appears correctly.",
    },
    {
        title: "Restore the default boot screen if needed",
        text: "To go back to the original splash screen, remove /KERNEL=Mykrnl.exe from boot.ini.",
    },
];

const tips = [
    "Do not edit the original ntoskrnl.exe directly.",
    "Always keep a way to restore boot.ini.",
    "Keep image size and palette exactly compatible.",
    "Test carefully because broken boot settings can stop XP from loading properly.",
    "This is mainly a legacy customization technique for old Windows XP systems.",
];

const bootIniExample = `[boot loader]
timeout=30
default=multi(0)disk(0)rdisk(0)partition(2)\\WINDOWS

[operating systems]
multi(0)disk(0)rdisk(0)partition(2)\\WINDOWS="Microsoft Windows XP Professional" /fastdetect /KERNEL=Mykrnl.exe
C:\\="Microsoft Windows 98 SE"`;

const ChangeWindowsXpBootScreen = () => {
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

                <h1>Change Windows XP Boot Screen</h1>

                <p className="lead">
                    This archive note explains an old Windows XP customization
                    method where the boot splash screen is changed by editing a
                    copied kernel file and pointing the XP boot entry to that
                    modified version.
                </p>
            </Styled.HeroCard>

            <Styled.WarningCard>
                <div className="sectionHead">
                    <span className="iconWrap warning">
                        <FiAlertTriangle />
                    </span>
                    <h2>Important note before trying this</h2>
                </div>

                <p>
                    Windows XP is an old and unsupported operating system. This
                    method is a legacy customization trick and should be treated
                    carefully. Editing boot-related files incorrectly can cause
                    startup problems.
                </p>

                <ul>
                    {tips.map((tip) => (
                        <li key={tip}>{tip}</li>
                    ))}
                </ul>
            </Styled.WarningCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiTool />
                        </span>
                        <h2>What you need</h2>
                    </div>

                    <ul>
                        {requirements.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiMonitor />
                        </span>
                        <h2>What this method does</h2>
                    </div>

                    <p>
                        Instead of changing the original XP kernel file
                        directly, this method creates a duplicate kernel,
                        replaces the boot bitmap inside it, and tells boot.ini
                        to use the copied kernel during startup.
                    </p>

                    <p>
                        That is a safer approach than directly patching the main
                        system kernel, though still not risk-free.
                    </p>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Refactored step-by-step method</h2>
                </div>

                <div className="stepsStack">
                    {steps.map((step, index) => (
                        <div className="stepCard" key={step.title}>
                            <div className="stepNumber">{index + 1}</div>

                            <div className="stepContent">
                                <h3>{step.title}</h3>
                                <p>{step.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiImage />
                    </span>
                    <h2>Why the bitmap looks black at first</h2>
                </div>

                <p>
                    The original tutorial notes that the exported boot bitmap
                    may appear completely black in Photoshop at first. This
                    usually happens because the boot image uses a restricted
                    indexed color palette rather than a normal modern color
                    setup.
                </p>

                <p>
                    Loading the correct 16-color palette makes the image visible
                    again. That is why the palette must be preserved when
                    editing or replacing the splash screen.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiSettings />
                    </span>
                    <h2>boot.ini example</h2>
                </div>

                <p>
                    The old tutorial used a dual-boot example and added a custom
                    kernel argument to the Windows XP entry.
                </p>

                <pre>{bootIniExample}</pre>

                <p>
                    To restore the original XP splash screen, remove the custom
                    kernel argument from the XP boot entry.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>

                <p>
                    This is a classic Windows XP-era customization method:
                    duplicate the kernel file, replace the boot bitmap inside
                    the duplicate, and update boot.ini to load the modified copy
                    during startup. It is a clever old-school trick, but one
                    that should be handled carefully because it touches boot
                    configuration.
                </p>

                <p className="creditLine">
                    Based on the original shared tutorial credited in the old
                    archive post.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default ChangeWindowsXpBootScreen;
