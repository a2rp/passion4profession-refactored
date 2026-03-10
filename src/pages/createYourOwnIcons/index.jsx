import React from "react";
import {
    FiImage,
    FiClock,
    FiTool,
    FiGrid,
    FiMonitor,
    FiCheckCircle,
    FiEdit3,
    FiFile,
} from "react-icons/fi";
import { Styled } from "./styled";
import ShareButtons from "../../components/shareButton";

const steps = [
    {
        title: "Open Microsoft Paint",
        text: "Go to Start, then Programs, then Accessories, and open Paint. The original idea behind this method is to use a very basic built-in tool to design a tiny icon manually.",
        icon: <FiMonitor />,
    },
    {
        title: "Set the canvas size",
        text: "In Paint, open the image size or attributes option and set both width and height to 32 pixels. That is the classic icon size used for small desktop-style icons.",
        icon: <FiImage />,
    },
    {
        title: "Enable the grid",
        text: "Turn on zoom and grid view so each tiny square pixel becomes visible. This makes it much easier to draw pixel art instead of guessing where the pixels are landing.",
        icon: <FiGrid />,
    },
    {
        title: "Zoom in heavily",
        text: "Use a large zoom level such as 800 percent. At that scale, each pixel becomes a visible block, which makes manual icon drawing practical.",
        icon: <FiTool />,
    },
    {
        title: "Draw the icon",
        text: "Now create the icon manually. Since the canvas is tiny, the design should be simple, bold, and readable even at very small size.",
        icon: <FiEdit3 />,
    },
    {
        title: "Save the file",
        text: "Save the image as a BMP file first. In older workflows, people often started with BMP because Paint handled it easily.",
        icon: <FiFile />,
    },
    {
        title: "Convert or rename carefully",
        text: "The old note says you can later change the extension to .ico. In practice, that trick may not always produce a fully valid icon file for modern systems, so proper conversion is usually better.",
        icon: <FiCheckCircle />,
    },
];

const tips = [
    "Use very simple shapes because 32x32 is a tiny canvas.",
    "Avoid too many colors or tiny details.",
    "Make the silhouette clear so the icon is recognizable.",
    "Test the icon at actual size, not only while zoomed in.",
    "For modern use, exporting through a proper icon converter is safer than only renaming the file.",
];

const comparison = [
    {
        title: "Old-school method",
        text: "Paint + tiny canvas + BMP + manual pixel drawing. Great for learning how icons work at the pixel level.",
    },
    {
        title: "Modern practical method",
        text: "Design in Paint or any image editor, then convert the image properly into .ico format using a tool that generates valid icon data.",
    },
];

const CreateYourOwnIcons = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <Styled.HeroCard>
                <div className="badgeRow">
                    <span className="badge">
                        <FiImage />
                        Refactored Archive Note
                    </span>

                    <span className="badge muted">
                        <FiClock />
                        Original topic: July 20, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>Create your own icons</h1>

                <p className="lead">
                    This old archive note explains a very simple way to create a
                    small icon by using Microsoft Paint, zooming into a tiny
                    pixel canvas, and drawing the design manually. The method is
                    basic, but it is actually a fun way to understand how pixel
                    icons work.
                </p>
            </Styled.HeroCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiCheckCircle />
                    </span>
                    <h2>Simple idea</h2>
                </div>

                <p>
                    An icon is just a tiny image. In older Windows-style icon
                    workflows, a common size was{" "}
                    <strong>32 by 32 pixels</strong>. That means your design
                    lives inside a very small square grid.
                </p>

                <p>
                    The original method uses Paint because it was available by
                    default and made it possible to draw on a pixel-by-pixel
                    basis. It is simple, beginner-friendly, and kind of charming
                    in a wonderfully ancient-computer way.
                </p>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiTool />
                    </span>
                    <h2>Step-by-step method</h2>
                </div>

                <div className="stepsGrid">
                    {steps.map((step, index) => (
                        <article key={step.title} className="stepCard">
                            <div className="stepTop">
                                <span className="stepNo">{index + 1}</span>
                                <span className="stepIcon">{step.icon}</span>
                            </div>

                            <h3>{step.title}</h3>
                            <p>{step.text}</p>
                        </article>
                    ))}
                </div>
            </Styled.SectionCard>

            <Styled.Grid>
                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiGrid />
                        </span>
                        <h2>Why the grid matters</h2>
                    </div>

                    <p>
                        At icon size, every pixel matters. A single misplaced
                        block can noticeably change the look of the design.
                        Turning on grid view helps you think like a pixel
                        artist.
                    </p>

                    <p>
                        This is also why icons often use strong outlines, simple
                        shapes, and limited detail. Tiny images do not forgive
                        visual chaos. They are small tyrants.
                    </p>
                </Styled.InfoCard>

                <Styled.InfoCard>
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiEdit3 />
                        </span>
                        <h2>Good icon design habits</h2>
                    </div>

                    <ul>
                        {tips.map((tip) => (
                            <li key={tip}>{tip}</li>
                        ))}
                    </ul>
                </Styled.InfoCard>
            </Styled.Grid>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiFile />
                    </span>
                    <h2>BMP vs ICO</h2>
                </div>

                <p>
                    The original note says you can save the image as a BMP file
                    and later change the extension to <strong>.ico</strong>.
                    That idea comes from older DIY workflows, but there is an
                    important practical detail here.
                </p>

                <div className="warningBox">
                    <h3>Important modern note</h3>
                    <p>
                        Simply renaming a file extension does not always convert
                        the actual file format correctly. A file named
                        something.ico is not automatically a proper ICO file
                        internally.
                    </p>
                </div>

                <p>For modern systems, the safer method is:</p>

                <ul>
                    <li>design the icon image first</li>
                    <li>save it normally as an image</li>
                    <li>convert it properly into ICO format</li>
                    <li>then use the resulting ICO file where needed</li>
                </ul>
            </Styled.SectionCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiMonitor />
                    </span>
                    <h2>Old method vs modern method</h2>
                </div>

                <div className="compareGrid">
                    {comparison.map((item) => (
                        <article key={item.title} className="compareCard">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
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
                    The original method is still useful because it teaches the
                    basics of icon design very clearly. You work on a tiny
                    canvas, see the grid, and understand how a small image is
                    built pixel by pixel.
                </p>

                <p>
                    For learning, it is excellent. For real modern usage, it is
                    better to draw the icon and then convert it properly into
                    ICO format instead of depending only on a renamed file
                    extension.
                </p>
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>Final summary</h2>
                <p>
                    You can create your own icon by drawing on a very small
                    pixel canvas in Paint, using zoom and grid view to control
                    each block carefully. The old method is great for learning
                    icon fundamentals, while the modern improvement is to export
                    or convert the finished design into a proper ICO file.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default CreateYourOwnIcons;
