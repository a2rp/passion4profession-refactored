import React, { useMemo, useState } from "react";
import {
    FiBookOpen,
    FiClock,
    FiSearch,
    FiType,
    FiFilter,
    FiArchive,
    FiInfo,
} from "react-icons/fi";
import { Styled } from "./styled";
import wordsData from "./data/allWords";
import ShareButtons from "../../components/shareButton";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const CollegiateWords5000 = () => {
    const [search, setSearch] = useState("");
    const [activeLetter, setActiveLetter] = useState("ALL");

    const filteredWords = useMemo(() => {
        const query = search.trim().toLowerCase();

        return wordsData.filter((item) => {
            const matchesSearch =
                !query ||
                item.word.toLowerCase().includes(query) ||
                item.definition.toLowerCase().includes(query);

            const matchesLetter =
                activeLetter === "ALL" ||
                item.word.charAt(0).toUpperCase() === activeLetter;

            return matchesSearch && matchesLetter;
        });
    }, [search, activeLetter]);

    const groupedWords = useMemo(() => {
        return filteredWords.reduce((acc, item) => {
            const letter = item.word.charAt(0).toUpperCase();

            if (!acc[letter]) {
                acc[letter] = [];
            }

            acc[letter].push(item);
            return acc;
        }, {});
    }, [filteredWords]);

    const visibleLetters = Object.keys(groupedWords).sort();

    const handleClearSearch = () => {
        setSearch("");
        setActiveLetter("ALL");
    };

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
                        Original topic: July 21, 2012
                    </span>

                    <ShareButtons />
                </div>

                <h1>5000 Collegiate Words with Brief Definitions</h1>

                <p className="lead">
                    This page is a refactored version of the old blog archive
                    entry. The original post was essentially a large vocabulary
                    list. Here it is reorganized into a cleaner searchable
                    glossary layout so it is easier to browse, revise, and grow
                    over time.
                </p>

                <div className="statsRow">
                    <div className="statCard">
                        <span className="statIcon">
                            <FiBookOpen />
                        </span>
                        <div>
                            <strong>{wordsData.length}</strong>
                            <span>Entries currently added here</span>
                        </div>
                    </div>

                    <div className="statCard">
                        <span className="statIcon">
                            <FiType />
                        </span>
                        <div>
                            <strong>{filteredWords.length}</strong>
                            <span>Entries matching current filters</span>
                        </div>
                    </div>

                    <div className="statCard">
                        <span className="statIcon">
                            <FiInfo />
                        </span>
                        <div>
                            <strong>5000</strong>
                            <span>Original target list from archive title</span>
                        </div>
                    </div>
                </div>
            </Styled.HeroCard>

            <Styled.InfoCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiInfo />
                    </span>
                    <h2>About this refactored page</h2>
                </div>

                <p>
                    The original archive post was a long word list. In this
                    version, the content is arranged like a mini dictionary with
                    search, alphabet filtering, grouped sections, and word
                    cards.
                </p>

                <p>
                    I have included every entry that you pasted in your message.
                    Since the middle part of the original list was not included
                    here and was replaced by dots, this page is structured so
                    the remaining entries can be added cleanly in the same data
                    array without changing the layout.
                </p>
            </Styled.InfoCard>

            <Styled.ControlCard>
                <div className="controlTop">
                    <div className="sectionHead">
                        <span className="iconWrap">
                            <FiSearch />
                        </span>
                        <h2>Explore the glossary</h2>
                    </div>
                </div>

                <div className="searchRow">
                    <div className="searchBox">
                        <FiSearch className="searchIcon" />

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search by word or definition..."
                            aria-label="Search words and definitions"
                        />
                    </div>

                    <button
                        type="button"
                        className="clearBtn"
                        onClick={handleClearSearch}
                    >
                        Reset filters
                    </button>
                </div>

                <div className="alphabetRow">
                    <button
                        type="button"
                        className={`alphaBtn ${
                            activeLetter === "ALL" ? "active" : ""
                        }`}
                        onClick={() => setActiveLetter("ALL")}
                    >
                        All
                    </button>

                    {alphabet.map((letter) => {
                        const hasWords = wordsData.some(
                            (item) =>
                                item.word.charAt(0).toUpperCase() === letter,
                        );

                        return (
                            <button
                                key={letter}
                                type="button"
                                className={`alphaBtn ${
                                    activeLetter === letter ? "active" : ""
                                } ${hasWords ? "" : "disabledLike"}`}
                                onClick={() => setActiveLetter(letter)}
                            >
                                {letter}
                            </button>
                        );
                    })}
                </div>
            </Styled.ControlCard>

            <Styled.SectionCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiFilter />
                    </span>
                    <h2>Glossary view</h2>
                </div>

                {filteredWords.length ? (
                    <div className="groupStack">
                        {visibleLetters.map((letter) => (
                            <section key={letter} className="letterSection">
                                <div className="letterHeader">
                                    <span className="letterBadge">
                                        {letter}
                                    </span>
                                    <h3>Words starting with {letter}</h3>
                                </div>

                                <div className="wordGrid">
                                    {groupedWords[letter].map((item) => (
                                        <article
                                            key={`${item.word}-${item.definition}`}
                                            className="wordCard"
                                        >
                                            <div className="wordTop">
                                                <h4>{item.word}</h4>
                                                <span className="partTag">
                                                    {item.partOfSpeech}
                                                </span>
                                            </div>

                                            <p>{item.definition}</p>
                                        </article>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                ) : (
                    <div className="emptyState">
                        No entries match the current search or letter filter.
                    </div>
                )}
            </Styled.SectionCard>

            <Styled.FooterNote>
                <h2>How to complete the full archive version</h2>

                <p>
                    To restore the full original post, continue adding the
                    missing words into the <strong>wordsData</strong> array
                    using the same object format:
                </p>

                <pre>{`{
    word: "example",
    partOfSpeech: "n.",
    definition: "A brief definition goes here.",
}`}</pre>

                <p>
                    Once the full list is pasted in, this page will
                    automatically support search, filtering, grouping, and clean
                    reading without any additional layout changes.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default CollegiateWords5000;
