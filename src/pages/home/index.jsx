import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
    FiArrowLeft,
    FiArrowRight,
    FiArrowUpRight,
    FiChevronDown,
    FiSearch,
} from "react-icons/fi";
import { archivePosts } from "../../lib/archivePosts";
import ImageWithLoader from "../../components/imageWithLoader";
import { Styled } from "./styled";

const PAGE_SIZE_OPTIONS = ["5", "15", "30", "50", "all"];

const getCategory = ({ title, path }) => {
    const value = `${title} ${path}`.toLowerCase();

    if (/romantic|deserve|confidence|never-slept|you-can-do-it|contact-till/.test(value)) {
        return "Ideas & stories";
    }

    if (/uri|url|urn|http|html|htm|w3c|tcp|udp|port|osi-model/.test(value)) {
        return "Web & networking";
    }

    if (/program|coding|encoding|assembly|binary|spaghetti|printf|c-language|1337/.test(value)) {
        return "Programming";
    }

    if (/keyboard|shortcut|word|abbreviation|alt-code|continents|periodic-table|phone-codes|flag-evolution|gmt|coperbyte/.test(value)) {
        return "Reference";
    }

    return "Computing";
};

const getSummary = (title, category) => {
    const topic = title.replace(/[?!]+/g, "").trim();
    const summaries = {
        "Ideas & stories": `A thoughtful archive note about ${topic.toLowerCase()}, revisited with a little more context.`,
        "Web & networking": `Understand ${topic.toLowerCase()} with a clear explanation of the terms and how they fit together.`,
        Programming: `A practical guide to ${topic.toLowerCase()}, with the core ideas organized into readable notes.`,
        Reference: `A quick, easy-to-scan reference for ${topic.toLowerCase()} from the Passion4Profession archive.`,
        Computing: `Explore ${topic.toLowerCase()} in this refactored computing note from the archive.`,
    };

    return summaries[category];
};

const posts = archivePosts.map((post, index) => {
    const slug = post.path.slice("/archive/".length);
    const category = getCategory(post);

    return {
        ...post,
        slug,
        category,
        summary: getSummary(post.title, category),
        originalOrder: index,
    };
});

const categories = ["All topics", ...new Set(posts.map((post) => post.category))];

const Home = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All topics");
    const [sort, setSort] = useState("archive");
    const [pageSize, setPageSize] = useState("5");
    const [page, setPage] = useState(1);

    const filteredPosts = useMemo(() => {
        const query = search.trim().toLowerCase();
        const result = posts.filter((post) => {
            const matchesQuery =
                !query ||
                `${post.title} ${post.category} ${post.summary}`
                    .toLowerCase()
                    .includes(query);
            const matchesCategory =
                category === "All topics" || post.category === category;

            return matchesQuery && matchesCategory;
        });

        if (sort === "title-asc") {
            result.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sort === "title-desc") {
            result.sort((a, b) => b.title.localeCompare(a.title));
        } else {
            result.sort((a, b) => a.originalOrder - b.originalOrder);
        }

        return result;
    }, [category, search, sort]);

    const postsPerPage =
        pageSize === "all" ? Math.max(1, filteredPosts.length) : Number(pageSize);
    const pageCount = Math.max(
        1,
        Math.ceil(filteredPosts.length / postsPerPage),
    );
    const safePage = Math.min(page, pageCount);
    const pageStart = (safePage - 1) * postsPerPage;
    const pagePosts = filteredPosts.slice(pageStart, pageStart + postsPerPage);
    const featuredPost = pagePosts[0];
    const cardPosts = pagePosts.slice(1);
    const firstResult = filteredPosts.length ? pageStart + 1 : 0;
    const lastResult = Math.min(pageStart + postsPerPage, filteredPosts.length);
    const pageNumbers = Array.from({ length: pageCount }, (_, index) => index + 1);

    const resetFilters = () => {
        setSearch("");
        setCategory("All topics");
        setSort("archive");
        setPage(1);
    };

    return (
        <Styled.Wrapper>
            <section className="intro">
                <div className="introText">
                    <span className="eyebrow">Passion4Profession archive</span>
                    <h1>Ideas worth revisiting.</h1>
                    <p>
                        Browse clear, refactored notes on computing, technology,
                        and the curious ideas that started this archive.
                    </p>
                </div>
                <Link className="aboutLink" to="/about">
                    About this archive <FiArrowUpRight aria-hidden="true" />
                </Link>
            </section>

            <section className="toolbar" aria-label="Filter archive posts">
                <label className="searchField">
                    <FiSearch aria-hidden="true" />
                    <input
                        type="search"
                        value={search}
                        onChange={(event) => {
                            setSearch(event.target.value);
                            setPage(1);
                        }}
                        placeholder="Search articles..."
                        aria-label="Search articles"
                    />
                </label>

                <label className="selectField">
                    <span>Topic</span>
                    <div className="selectControl">
                        <select
                            value={category}
                            onChange={(event) => {
                                setCategory(event.target.value);
                                setPage(1);
                            }}
                            aria-label="Filter by topic"
                        >
                            {categories.map((item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                        <FiChevronDown className="selectChevron" aria-hidden="true" />
                    </div>
                </label>

                <label className="selectField sortField">
                    <span>Sort</span>
                    <div className="selectControl">
                        <select
                            value={sort}
                            onChange={(event) => {
                                setSort(event.target.value);
                                setPage(1);
                            }}
                            aria-label="Sort articles"
                        >
                            <option value="archive">Archive order</option>
                            <option value="title-asc">Title: A to Z</option>
                            <option value="title-desc">Title: Z to A</option>
                        </select>
                        <FiChevronDown className="selectChevron" aria-hidden="true" />
                    </div>
                </label>

                <label className="selectField pageSizeField">
                    <span>Show</span>
                    <div className="selectControl">
                        <select
                            value={pageSize}
                            onChange={(event) => {
                                setPageSize(event.target.value);
                                setPage(1);
                            }}
                            aria-label="Articles per page"
                        >
                            {PAGE_SIZE_OPTIONS.map((option) => (
                                <option key={option} value={option}>
                                    {option === "all" ? "All" : option}
                                </option>
                            ))}
                        </select>
                        <FiChevronDown className="selectChevron" aria-hidden="true" />
                    </div>
                </label>
            </section>

            <div className="resultsHeader">
                <div>
                    <h2>From the archive</h2>
                    <p>
                        {filteredPosts.length
                            ? `Showing ${firstResult}–${lastResult} of ${filteredPosts.length} articles`
                            : "No articles match those filters"}
                    </p>
                </div>
                {search || category !== "All topics" || sort !== "archive" ? (
                    <button className="resetButton" type="button" onClick={resetFilters}>
                        Reset filters
                    </button>
                ) : null}
            </div>

            {featuredPost ? (
                <>
                    <article className="featuredCard">
                        <Link
                            className="featuredImage"
                            to={featuredPost.path}
                            aria-label={`Read ${featuredPost.title}`}
                        >
                            <ImageWithLoader
                                src={`/images/blog-hero/${featuredPost.slug}.jpg`}
                                alt=""
                                fill
                                loading="eager"
                            />
                            <span className="imageLabel">Featured article</span>
                        </Link>
                        <div className="featuredContent">
                            <span className="categoryBadge">{featuredPost.category}</span>
                            <p className="postMeta">Passion4Profession · Archive</p>
                            <h2>
                                <Link to={featuredPost.path}>{featuredPost.title}</Link>
                            </h2>
                            <p className="summary">{featuredPost.summary}</p>
                            <Link className="readLink" to={featuredPost.path}>
                                Read article <FiArrowRight aria-hidden="true" />
                            </Link>
                        </div>
                    </article>

                    {cardPosts.length ? (
                        <section className="postGrid" aria-label="More archive articles">
                            {cardPosts.map((post) => (
                                <article className="postCard" key={post.path}>
                                    <Link
                                        className="cardImage"
                                        to={post.path}
                                        aria-label={`Read ${post.title}`}
                                    >
                                        <ImageWithLoader
                                            src={`/images/blog-hero/${post.slug}.jpg`}
                                            alt=""
                                            fill
                                            loading="lazy"
                                        />
                                    </Link>
                                    <div className="cardContent">
                                        <span className="categoryBadge">{post.category}</span>
                                        <h3>
                                            <Link to={post.path}>{post.title}</Link>
                                        </h3>
                                        <p className="summary">{post.summary}</p>
                                        <Link className="readLink" to={post.path}>
                                            Read article <FiArrowRight aria-hidden="true" />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </section>
                    ) : null}
                </>
            ) : (
                <div className="emptyState">
                    <h2>No matching articles</h2>
                    <p>Try another search term or clear the topic filter.</p>
                    <button type="button" className="resetButton" onClick={resetFilters}>
                        Clear filters
                    </button>
                </div>
            )}

            {filteredPosts.length > postsPerPage ? (
                <nav className="pagination" aria-label="Archive pages">
                    <button
                        type="button"
                        className="pageArrow"
                        onClick={() => setPage(Math.max(1, safePage - 1))}
                        disabled={safePage === 1}
                        aria-label="Previous page"
                    >
                        <FiArrowLeft /> <span>Previous</span>
                    </button>
                    <div className="pageNumbers">
                        {pageNumbers.map((pageNumber) => (
                            <button
                                type="button"
                                key={pageNumber}
                                className={pageNumber === safePage ? "current" : ""}
                                aria-current={pageNumber === safePage ? "page" : undefined}
                                onClick={() => setPage(pageNumber)}
                            >
                                {pageNumber}
                            </button>
                        ))}
                    </div>
                    <button
                        type="button"
                        className="pageArrow"
                        onClick={() => setPage(Math.min(pageCount, safePage + 1))}
                        disabled={safePage === pageCount}
                        aria-label="Next page"
                    >
                        <span>Next</span> <FiArrowRight />
                    </button>
                </nav>
            ) : null}
        </Styled.Wrapper>
    );
};

export default Home;
