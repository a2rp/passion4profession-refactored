import React from "react";
import {
    FiFileText,
    FiClock,
    FiCheckCircle,
    FiAlertCircle,
    FiImage,
    FiFilm,
    FiMusic,
    FiGlobe,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const extensionExamples = [
    { type: "TIFF image files", shortExt: ".tif", longExt: ".tiff" },
    { type: "JPEG image files", shortExt: ".jpg", longExt: ".jpeg" },
    { type: "PICT image files", shortExt: ".pct", longExt: ".pict" },
    { type: "MPEG video files", shortExt: ".mpg", longExt: ".mpeg" },
    { type: "QuickTime video files", shortExt: ".mov", longExt: ".moov" },
    { type: "MIDI music files", shortExt: ".mid", longExt: ".midi" },
    { type: "AIFF audio files", shortExt: ".aif", longExt: ".aiff" },
    { type: "WAVE audio files", shortExt: ".wav", longExt: ".wave" },
    { type: "HTML web files", shortExt: ".htm", longExt: ".html" },
    { type: "MIME encoded files", shortExt: ".mim", longExt: ".mime" },
];

const WhyBoth3And4LetterExtensions = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiFileText />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiClock />
                        Original topic: February 13, 2013
                    </span>

                    <ShareButtons />
                </div>

                <h1>
                    Why do both 3-letter and 4-letter file extensions exist?
                </h1>

                <p className="lead">
                    Some file types use both 3-letter and 4-letter extensions
                    even though the file format is the same. A classic example
                    is <strong>.tif</strong> and <strong>.tiff</strong>. The
                    data inside the file can be identical. The difference is
                    mainly historical and comes from older operating system
                    limitations.
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
                    In early versions of Windows, file extensions were commonly
                    limited to 3 characters. Because of that, longer names had
                    to be shortened. So formats like <strong>TIFF</strong> were
                    often saved as <strong>.tif</strong> instead of{" "}
                    <strong>.tiff</strong>.
                </p>

                <p>
                    Later, operating systems became more flexible and started
                    supporting longer file extensions. That is why both short
                    and long versions began to appear for the same file type.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiAlertCircle />
                        </span>
                        <h2>Important point</h2>
                    </div>

                    <p>
                        In many cases, the extension is different but the actual
                        file format is the same.
                    </p>

                    <ul>
                        <li>
                            .tif and .tiff usually refer to the same TIFF format
                        </li>
                        <li>
                            .jpg and .jpeg usually refer to the same JPEG format
                        </li>
                        <li>
                            .htm and .html usually refer to the same HTML format
                        </li>
                    </ul>

                    <p>
                        So changing the extension name does not always mean the
                        content format has changed.
                    </p>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCheckCircle />
                        </span>
                        <h2>Why it happened</h2>
                    </div>

                    <ul>
                        <li>
                            Older Windows conventions favored 3-letter
                            extensions
                        </li>
                        <li>Some longer names had to be abbreviated</li>
                        <li>
                            Other systems were less strict about extension
                            length
                        </li>
                        <li>
                            Later systems supported both short and long forms
                        </li>
                    </ul>

                    <p>
                        That left us with a small museum of duplicate extension
                        names still wandering around today.
                    </p>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiFileText />
                    </span>
                    <h2>Classic example: .tif vs .tiff</h2>
                </div>

                <p>
                    TIFF stands for <strong>Tagged Image File Format</strong>.
                    The full descriptive extension is <strong>.tiff</strong>.
                    But because older Windows systems preferred shorter
                    extensions, <strong>.tif</strong> became the common version.
                </p>

                <div className="compareGrid">
                    <div className="compareCard">
                        <h3>Short form</h3>
                        <p>
                            <strong>.tif</strong>
                        </p>
                        <span>
                            Popular because of older 3-letter extension habits
                        </span>
                    </div>

                    <div className="compareCard">
                        <h3>Long form</h3>
                        <p>
                            <strong>.tiff</strong>
                        </p>
                        <span>
                            More descriptive, but the same format in many cases
                        </span>
                    </div>
                </div>

                <p>
                    The practical result is that both may open the same way in
                    supported programs.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiClock />
                    </span>
                    <h2>Historical reason</h2>
                </div>

                <div className="timeline">
                    <div className="timeItem">
                        <span className="dot" />
                        <div>
                            <strong>Older systems</strong>
                            <p>
                                Shorter file extensions were common, especially
                                on Windows.
                            </p>
                        </div>
                    </div>

                    <div className="timeItem">
                        <span className="dot" />
                        <div>
                            <strong>Abbreviated names appeared</strong>
                            <p>
                                Long extensions like .tiff were shortened to
                                .tif, .jpeg to .jpg, and so on.
                            </p>
                        </div>
                    </div>

                    <div className="timeItem">
                        <span className="dot" />
                        <div>
                            <strong>Modern systems became flexible</strong>
                            <p>
                                Longer extensions were accepted, so both forms
                                continued to exist.
                            </p>
                        </div>
                    </div>

                    <div className="timeItem">
                        <span className="dot" />
                        <div>
                            <strong>Today</strong>
                            <p>
                                Many programs still prefer the shorter form
                                because it became a familiar convention.
                            </p>
                        </div>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Common examples</h2>
                </div>

                <Styled.ExampleGrid>
                    {extensionExamples.map((item) => (
                        <article
                            key={`${item.type}-${item.shortExt}`}
                            className="exampleCard"
                        >
                            <div className="topRow">
                                <span className="miniIcon">
                                    {item.type
                                        .toLowerCase()
                                        .includes("image") ? (
                                        <FiImage />
                                    ) : item.type
                                          .toLowerCase()
                                          .includes("video") ? (
                                        <FiFilm />
                                    ) : item.type
                                          .toLowerCase()
                                          .includes("audio") ||
                                      item.type
                                          .toLowerCase()
                                          .includes("music") ? (
                                        <FiMusic />
                                    ) : item.type
                                          .toLowerCase()
                                          .includes("html") ? (
                                        <FiGlobe />
                                    ) : (
                                        <FiFileText />
                                    )}
                                </span>

                                <h3>{item.type}</h3>
                            </div>

                            <div className="extRow">
                                <span className="ext">{item.shortExt}</span>
                                <span className="arrow">and</span>
                                <span className="ext">{item.longExt}</span>
                            </div>
                        </article>
                    ))}
                </Styled.ExampleGrid>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiAlertCircle />
                    </span>
                    <h2>Which one should you use?</h2>
                </div>

                <p>
                    In many cases, the shorter 3-letter version became the more
                    common convention, especially because people got used to it
                    over time.
                </p>

                <ul>
                    <li>
                        <strong>.jpg</strong> is often more common than{" "}
                        <strong>.jpeg</strong>
                    </li>
                    <li>
                        <strong>.tif</strong> is often more common than{" "}
                        <strong>.tiff</strong>
                    </li>
                    <li>
                        <strong>.htm</strong> and <strong>.html</strong> both
                        exist, but <strong>.html</strong> is very common today
                    </li>
                </ul>

                <p>
                    So there is no single universal rule for every case.
                    Historically, shorter ones were more standard, but modern
                    usage depends on the format and ecosystem.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Best practical conclusion</h2>
                </div>

                <p>
                    Both 3-letter and 4-letter file extensions exist mainly
                    because of historical system limitations and later operating
                    system improvements. The format itself often stayed the
                    same, while the extension spelling changed.
                </p>

                <p>
                    In practice, software usually understands both forms if they
                    refer to the same format. So the difference is often about
                    convention, compatibility, and history rather than actual
                    file structure.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    Some file types have both short and long extensions because
                    older systems pushed developers toward 3-letter names, while
                    newer systems allowed longer descriptive names. That is why
                    pairs like .tif and .tiff, or .jpg and .jpeg, still exist
                    today.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default WhyBoth3And4LetterExtensions;
