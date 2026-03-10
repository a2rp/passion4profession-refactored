import React from "react";
import {
    FiDisc,
    FiClock,
    FiAlertCircle,
    FiCheckCircle,
    FiMusic,
    FiHardDrive,
    FiRefreshCw,
    FiVolume2,
    FiInfo,
    FiArrowRight,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const conversionTargets = [
    "MP3",
    "WMA",
    "WAV",
    "OGG",
    "FLAC",
    "AAC",
    "MP4",
    "MPC",
    "APE",
];

const relatedAudioFormats = [
    "MP3",
    "WMA",
    "WAV",
    "OGG",
    "RA",
    "RMM",
    "RAM",
    "RAX",
    "RPM",
    "RM",
    "RMVB",
    "CDA",
    "FLAC",
    "APE",
    "APL",
    "AAC",
    "M4A",
    "MPP",
    "MPC",
    "MP+",
    "MP4",
    "OFR",
    "SPX",
    "TTA",
    "WV",
    "MOD",
];

const WhatIsCdaFile = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiDisc />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiClock />
                        Original topic: July 29, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>What is a .cda file?</h1>

                <p className="lead">
                    A <strong>.cda</strong> file is commonly seen when you open
                    an audio CD on a computer, but it is not the real music file
                    itself. It is more like a track reference used by the system
                    to represent a song on the CD. The actual audio data lives
                    on the CD in standard CD audio form, not inside the small
                    `.cda` entry you see.
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
                    CD Audio tracks shown as <strong>.cda</strong> are
                    representations of tracks on a compact disc. They do not
                    contain the full actual PCM audio data in the same way that
                    normal files like <strong>.mp3</strong> or{" "}
                    <strong>.wav</strong> do on your hard disk.
                </p>

                <p>
                    That is why a <strong>.cda</strong> item can usually be
                    played only while the original audio CD is present in the
                    CD-ROM drive. If you simply copy the `.cda` file to your
                    hard disk, it generally will not work like a real audio
                    file.
                </p>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiAlertCircle />
                        </span>
                        <h2>Important reality</h2>
                    </div>

                    <ul>
                        <li>.cda is not the actual music data file</li>
                        <li>It represents a track on the audio CD</li>
                        <li>It depends on the CD being present</li>
                        <li>
                            Copying only the `.cda` entry to a hard drive is not
                            enough
                        </li>
                    </ul>

                    <p>
                        So the `.cda` file is more like a doorway than the room
                        itself.
                    </p>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiHardDrive />
                        </span>
                        <h2>Why it confuses people</h2>
                    </div>

                    <p>
                        On a computer, we are used to files actually containing
                        their data. But with audio CDs, the track display can
                        look like normal files even when the system is really
                        showing references to CD tracks.
                    </p>

                    <p>
                        That is why many people copy a `.cda` file and then
                        wonder why it refuses to play later. The tiny file was
                        never the full song in the first place.
                    </p>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiDisc />
                    </span>
                    <h2>How audio CD data is actually stored</h2>
                </div>

                <p>
                    Commercial compact discs store music using standard CD audio
                    encoding. The commonly cited standard uses:
                </p>

                <ul>
                    <li>Sampling rate: 44.1 kHz</li>
                    <li>Sample size: 16 bits per sample</li>
                    <li>Channels: mono or stereo</li>
                </ul>

                <p>
                    The original note also explained the storage math. Let us
                    rewrite that clearly.
                </p>

                <div className="formulaGrid">
                    <div className="formulaCard">
                        <h3>Mono calculation</h3>
                        <p>
                            44,100 samples per second × 2 bytes per sample =
                            <strong> 88,200 bytes per second</strong>
                        </p>
                    </div>

                    <div className="formulaCard">
                        <h3>Stereo calculation</h3>
                        <p>
                            Stereo uses 2 channels, so it needs about
                            <strong> 176,400 bytes per second</strong>
                        </p>
                    </div>
                </div>

                <p>
                    That works out to roughly <strong>10 MB per minute</strong>{" "}
                    of stereo sound, which is why compression formats became so
                    important.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiVolume2 />
                    </span>
                    <h2>Why compression matters</h2>
                </div>

                <p>
                    Raw CD-quality audio takes a lot of storage compared with
                    compressed formats. That is one big reason formats like
                    <strong> MP3</strong> became popular. They reduce file size
                    so music is easier to store, transfer, and keep on normal
                    devices.
                </p>

                <div className="compareGrid">
                    <div className="compareCard">
                        <h3>Uncompressed or less compressed</h3>
                        <ul>
                            <li>Higher storage use</li>
                            <li>Closer to original audio data</li>
                            <li>Examples: WAV, FLAC</li>
                        </ul>
                    </div>

                    <div className="compareCard">
                        <h3>Lossy compressed</h3>
                        <ul>
                            <li>Smaller file size</li>
                            <li>Easier to store and share</li>
                            <li>Examples: MP3, AAC, WMA</li>
                        </ul>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiRefreshCw />
                    </span>
                    <h2>Can a .cda file be converted?</h2>
                </div>

                <p>
                    Strictly speaking, you do not "convert" the tiny `.cda`
                    reference file by itself into music. What really happens is
                    that software reads the audio track from the CD and then
                    saves that track in another format on your hard disk. In
                    normal everyday language, people still say things like
                    "convert CDA to MP3", even though the actual work is more
                    like extracting or ripping the audio track from the disc.
                </p>

                <div className="flowRow">
                    <div className="flowBox">Audio CD track</div>
                    <span className="flowArrow">
                        <FiArrowRight />
                    </span>
                    <div className="flowBox">Read or rip from CD</div>
                    <span className="flowArrow">
                        <FiArrowRight />
                    </span>
                    <div className="flowBox">Save as MP3, WAV, FLAC, etc.</div>
                </div>

                <p>
                    The original post mentioned audio conversion tools and
                    examples such as CDA to MP3, WMA, WAV, APE, and more. That
                    practical idea still holds: to store the music on a hard
                    disk, you need to extract the CD audio into a real audio
                    format.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiMusic />
                    </span>
                    <h2>Common target formats</h2>
                </div>

                <p>
                    The original note listed these common target formats for CD
                    audio extraction or conversion workflows:
                </p>

                <div className="chipGrid">
                    {conversionTargets.map((item) => (
                        <span key={item} className="chip">
                            {item}
                        </span>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiInfo />
                    </span>
                    <h2>Other audio formats mentioned in the original note</h2>
                </div>

                <p>
                    The original page also referenced a broader list of audio
                    formats supported by audio conversion tools. For
                    completeness, they are preserved here:
                </p>

                <div className="chipGrid subtle">
                    {relatedAudioFormats.map((item) => (
                        <span key={item} className="chip">
                            {item}
                        </span>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCheckCircle />
                        </span>
                        <h2>Practical takeaway</h2>
                    </div>

                    <ul>
                        <li>
                            A `.cda` entry usually works only when the original
                            CD is available
                        </li>
                        <li>
                            Copying it to hard disk does not normally preserve
                            the song
                        </li>
                        <li>
                            To keep the music, extract it into a real audio
                            format
                        </li>
                        <li>
                            Formats like MP3, WAV, AAC, or FLAC are actual files
                            you can store
                        </li>
                    </ul>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiAlertCircle />
                        </span>
                        <h2>Modern clarification</h2>
                    </div>

                    <p>
                        The original post said computers cannot store files in
                        CDA format. The more precise way to say it is this:
                        computers do not usually treat `.cda` as a normal audio
                        data file for long-term storage. Instead, the real CD
                        audio must be read from the disc and saved into another
                        actual audio file format.
                    </p>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Best practical conclusion</h2>
                </div>

                <p>
                    A `.cda` file is not the actual song in the way an MP3 or
                    WAV file is. It is mainly a track representation for audio
                    CDs. That is why it usually plays only from the CD itself
                    and not after simple copying to a hard drive.
                </p>

                <p>
                    If you want to keep CD music on your computer, the proper
                    approach is to extract or rip the track and save it into a
                    real audio format such as MP3, WAV, AAC, FLAC, or another
                    supported type.
                </p>
            </Styled.SectionCard>

            <Styled.SourceNote>
                <h2>Archive note</h2>
                <p>
                    This page is a refactored version of the original blog note
                    posted on July 29, 2012. The original included a source
                    credit to coolutils.com and listed CDA-related conversion
                    examples. That historical context has been preserved here in
                    cleaner form.
                </p>
            </Styled.SourceNote>
        </Styled.Wrapper>
    );
};

export default WhatIsCdaFile;
