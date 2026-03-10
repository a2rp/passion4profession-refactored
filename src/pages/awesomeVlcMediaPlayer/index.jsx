import React from "react";
import {
    FiArchive,
    FiClock,
    FiPlayCircle,
    FiVideo,
    FiMusic,
    FiSettings,
    FiTool,
    FiMonitor,
    FiCheckCircle,
    FiLayers,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const featureCards = [
    {
        icon: <FiVideo />,
        title: "Plays many formats",
        text: "VLC is known for handling a very wide range of audio and video formats without asking users to hunt for extra codec packs.",
    },
    {
        icon: <FiMusic />,
        title: "Audio and video in one place",
        text: "It works as a media player for movies, songs, recorded clips, and many common media files in a single lightweight application.",
    },
    {
        icon: <FiSettings />,
        title: "Powerful settings",
        text: "VLC offers advanced options for subtitles, playback speed, audio tracks, filters, equalizer controls, and streaming behavior.",
    },
    {
        icon: <FiMonitor />,
        title: "Useful across platforms",
        text: "It became popular partly because it is available on multiple operating systems and stays practical for everyday media tasks.",
    },
];

const useCases = [
    "Play downloaded video and audio files",
    "Open files that other players fail to recognize",
    "Watch videos with subtitle support",
    "Change playback speed for learning or review",
    "Use keyboard shortcuts for fast control",
    "Test media files during development or content work",
];

const strengths = [
    "Simple to start using",
    "Supports many formats",
    "Widely trusted by users",
    "Useful for both normal users and power users",
    "Practical controls for everyday playback",
];

const AwesomeVlcMediaPlayer = () => {
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

                <h1>Awesome VLC media player</h1>

                <p className="lead">
                    This archive post originally had only a title and almost no
                    explanation. In this refactored version, the topic is turned
                    into a cleaner reference note about why VLC became such a
                    popular and practical media player.
                </p>

                <div className="metaRow">
                    <div className="metaCard">
                        <span className="metaIcon">
                            <FiPlayCircle />
                        </span>
                        <div>
                            <strong>What it is</strong>
                            <span>
                                A flexible media player used for audio, video,
                                and more
                            </span>
                        </div>
                    </div>

                    <div className="metaCard">
                        <span className="metaIcon">
                            <FiTool />
                        </span>
                        <div>
                            <strong>Why it matters</strong>
                            <span>
                                It solves playback problems without much drama
                            </span>
                        </div>
                    </div>
                </div>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>What is VLC Media Player?</h2>
                </div>

                <p>
                    VLC Media Player is a general-purpose media player that can
                    open many types of video and audio files. It became widely
                    popular because people could install it and immediately play
                    files that other players often struggled with.
                </p>

                <p>
                    In practical terms, VLC earned its reputation by being the
                    tool users opened when a media file refused to cooperate
                    elsewhere. That alone made it legendary internet survival
                    gear.
                </p>
            </Styled.SectionCard>

            <Styled.FeatureGrid>
                {featureCards.map((item) => (
                    <article key={item.title} className="featureCard">
                        <div className="featureIcon">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </article>
                ))}
            </Styled.FeatureGrid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiLayers />
                    </span>
                    <h2>Why VLC became so popular</h2>
                </div>

                <p>
                    Many users did not care about codec theory, container
                    formats, or media internals. They just wanted a file to
                    open. VLC became famous because it usually did exactly that.
                </p>

                <div className="reasonGrid">
                    <div className="reasonCard">
                        <h3>Less friction</h3>
                        <p>
                            It reduced the need to install random extra codec
                            bundles just to play a single file.
                        </p>
                    </div>

                    <div className="reasonCard">
                        <h3>Practical controls</h3>
                        <p>
                            Users could manage subtitles, volume, speed, and
                            playback behavior from one familiar interface.
                        </p>
                    </div>

                    <div className="reasonCard">
                        <h3>Works for normal users</h3>
                        <p>
                            Even if someone knew nothing about media formats,
                            VLC was often easy enough to use immediately.
                        </p>
                    </div>

                    <div className="reasonCard">
                        <h3>Works for advanced users too</h3>
                        <p>
                            More technical users could go deeper with streams,
                            settings, filters, and format-specific options.
                        </p>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.TwoCol>
                <section className="infoCard">
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiPlayCircle />
                        </span>
                        <h2>Common use cases</h2>
                    </div>

                    <ul>
                        {useCases.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>

                <section className="infoCard">
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiCheckCircle />
                        </span>
                        <h2>Why users liked it</h2>
                    </div>

                    <ul>
                        {strengths.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>
            </Styled.TwoCol>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiSettings />
                    </span>
                    <h2>Useful things people often do in VLC</h2>
                </div>

                <div className="stepsStack">
                    <div className="stepCard">
                        <span className="stepNo">1</span>
                        <div>
                            <strong>Open difficult media files</strong>
                            <p>
                                VLC is often the first thing people try when a
                                video or audio file fails elsewhere.
                            </p>
                        </div>
                    </div>

                    <div className="stepCard">
                        <span className="stepNo">2</span>
                        <div>
                            <strong>Use subtitles</strong>
                            <p>
                                Users commonly load subtitle files and adjust
                                playback without much setup.
                            </p>
                        </div>
                    </div>

                    <div className="stepCard">
                        <span className="stepNo">3</span>
                        <div>
                            <strong>Control speed and navigation</strong>
                            <p>
                                It is useful for learning, review, and quickly
                                moving through media content.
                            </p>
                        </div>
                    </div>

                    <div className="stepCard">
                        <span className="stepNo">4</span>
                        <div>
                            <strong>Handle everyday media tasks</strong>
                            <p>
                                For many users, VLC becomes the default
                                “just-play-the-file” software.
                            </p>
                        </div>
                    </div>
                </div>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiArchive />
                    </span>
                    <h2>Archive note</h2>
                </div>

                <p>
                    The original blog entry was extremely short, so this page is
                    intentionally a better structured rewrite rather than a fake
                    reconstruction of missing old text.
                </p>

                <p>
                    That is actually the spirit of this project: keep the root
                    idea, improve the explanation, and turn scattered old titles
                    into pages that are genuinely useful now.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    VLC Media Player became popular because it was practical,
                    flexible, and reliable for opening many media files with
                    less hassle. This refactored archive page turns an old
                    title-only note into a cleaner explanation of why VLC
                    mattered to so many users.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default AwesomeVlcMediaPlayer;
