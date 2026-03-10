import React, { useMemo, useState } from "react";
import {
    FiArchive,
    FiClock,
    FiSearch,
    FiList,
    FiBarChart2,
    FiType,
    FiAlertCircle,
} from "react-icons/fi";
import { Styled } from "./styled";
import wordsData from "./data/allWords";
import ShareButtons from "../../components/shareButton";

const getMeaningText = (item) => {
    return item.meaning?.trim()
        ? item.meaning
        : `Meaning not added yet for "${item.word}". This page already supports hover meanings, so you can enrich the dataset later without changing the UI.`;
};

const CommonWords1000 = () => {
    const [search, setSearch] = useState("");

    const filteredWords = useMemo(() => {
        const query = search.trim().toLowerCase();

        if (!query) {
            return wordsData;
        }

        return wordsData.filter((item) => {
            const rankMatch = String(item.rank).includes(query);
            const wordMatch = item.word.toLowerCase().includes(query);
            const meaningMatch = item.meaning
                ? item.meaning.toLowerCase().includes(query)
                : false;

            return rankMatch || wordMatch || meaningMatch;
        });
    }, [search]);

    const stats = useMemo(() => {
        const total = wordsData.length;
        const firstRank = total ? wordsData[0].rank : "-";
        const lastRank = total ? wordsData[total - 1].rank : "-";

        return {
            total,
            firstRank,
            lastRank,
        };
    }, []);

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

                <h1>1000 Most Common Words in English</h1>

                <p className="lead">
                    This page is a cleaner, searchable rebuild of the original
                    archive post. The old version had a useful rank-wise list
                    but rough alignment. This version keeps the ranked
                    vocabulary idea, makes it easier to browse, and supports
                    hover details for future dictionary-style expansion.
                </p>

                <div className="statsGrid">
                    <div className="statCard">
                        <span className="statIcon">
                            <FiList />
                        </span>

                        <div>
                            <strong>{stats.total}</strong>
                            <span>Entries currently loaded</span>
                        </div>
                    </div>

                    <div className="statCard">
                        <span className="statIcon">
                            <FiBarChart2 />
                        </span>

                        <div>
                            <strong>
                                {stats.firstRank} - {stats.lastRank}
                            </strong>
                            <span>Rank range in current dataset</span>
                        </div>
                    </div>

                    <div className="statCard">
                        <span className="statIcon">
                            <FiType />
                        </span>

                        <div>
                            <strong>{filteredWords.length}</strong>
                            <span>Results matching current search</span>
                        </div>
                    </div>
                </div>
            </Styled.HeroCard>

            <Styled.InfoCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiAlertCircle />
                    </span>
                    <h2>About this refactored version</h2>
                </div>

                <p>
                    The original archive post listed the words rank-wise but the
                    visual layout was misaligned in many places. This version
                    turns the same idea into a structured vocabulary explorer.
                </p>

                <p>
                    Hover or focus on any word card to view its detail panel.
                    Since the original source was only a ranked word list, this
                    page is designed so meanings can be filled in gradually.
                </p>
            </Styled.InfoCard>

            <Styled.ControlCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiSearch />
                    </span>
                    <h2>Search ranked words</h2>
                </div>

                <div className="searchRow">
                    <div className="searchBox">
                        <FiSearch className="searchIcon" />

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search by rank, word, or meaning..."
                            aria-label="Search by rank, word, or meaning"
                        />
                    </div>

                    <button
                        type="button"
                        className="clearBtn"
                        onClick={() => setSearch("")}
                    >
                        Reset
                    </button>
                </div>
            </Styled.ControlCard>

            <Styled.ListCard>
                <div className="sectionHead">
                    <span className="iconWrap">
                        <FiList />
                    </span>
                    <h2>Ranked vocabulary list</h2>
                </div>

                {filteredWords.length ? (
                    <div className="wordGrid">
                        {filteredWords.map((item) => (
                            <article
                                key={`${item.rank}-${item.word}`}
                                className="wordCard"
                                tabIndex={0}
                            >
                                <div className="rankBadge">#{item.rank}</div>

                                <div className="wordContent">
                                    <h3>{item.word}</h3>
                                    <p className="wordHint">
                                        Hover to view meaning
                                    </p>
                                </div>

                                <div className="tooltipCard">
                                    <div className="tooltipHead">
                                        <strong>{item.word}</strong>
                                        <span>Rank #{item.rank}</span>
                                    </div>

                                    <p>{getMeaningText(item)}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="emptyState">
                        No entries match the current search.
                    </div>
                )}
            </Styled.ListCard>

            <Styled.FooterNote>
                <h2>Recommended data shape</h2>

                <p>
                    Right now the page already supports all 1000 ranked words.
                    You can enrich any entry later by adding a meaning field in
                    the data file.
                </p>

                <pre>{`{
    rank: 1,
    word: "the",
    meaning: "Used to refer to a specific person or thing."
}`}</pre>

                <p>
                    That way the hover panel becomes a proper mini-dictionary
                    without changing the component again.
                </p>
            </Styled.FooterNote>
        </Styled.Wrapper>
    );
};

export default CommonWords1000;
