import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiHome, FiInfo, FiSearch, FiX } from "react-icons/fi";
import { Styled } from "./styled";
import { archivePosts } from "../../lib/archivePosts";

const BlogArchiveNav = ({ onNavigate }) => {
    const location = useLocation();
    const activeItemRef = useRef(null);
    const listRef = useRef(null);
    const [search, setSearch] = useState("");

    const filteredRoutes = useMemo(() => {
        const trimmed = search.trim().toLowerCase();

        if (!trimmed) {
            return archivePosts;
        }

        return archivePosts.filter((item) =>
            item.title.toLowerCase().includes(trimmed),
        );
    }, [search]);

    useEffect(() => {
        const listEl = listRef.current;
        const activeEl = activeItemRef.current;

        if (!listEl || !activeEl) {
            return;
        }

        const listRect = listEl.getBoundingClientRect();
        const activeRect = activeEl.getBoundingClientRect();

        const currentScrollTop = listEl.scrollTop;
        const activeOffsetTop =
            activeRect.top - listRect.top + currentScrollTop;

        const targetScrollTop =
            activeOffsetTop -
            listEl.clientHeight / 2 +
            activeEl.clientHeight / 2;

        const maxScrollTop = listEl.scrollHeight - listEl.clientHeight;
        const nextScrollTop = Math.max(
            0,
            Math.min(targetScrollTop, maxScrollTop),
        );

        listEl.scrollTo({
            top: nextScrollTop,
            behavior: "smooth",
        });
    }, [location.pathname, filteredRoutes]);

    const handleClearSearch = () => {
        setSearch("");
    };

    return (
        <Styled.Wrapper>
            <nav className="pageLinks" aria-label="Main navigation">
                <NavLink to="/" end className="pageLink" onClick={onNavigate}>
                    <FiHome aria-hidden="true" />
                    <span>Home</span>
                </NavLink>
                <NavLink to="/about" className="pageLink" onClick={onNavigate}>
                    <FiInfo aria-hidden="true" />
                    <span>About</span>
                </NavLink>
            </nav>

            <div className="searchBox">
                <FiSearch className="searchIcon" />

                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search archive pages..."
                    aria-label="Search archive pages"
                />

                {search.trim() ? (
                    <button
                        type="button"
                        className="clearButton"
                        onClick={handleClearSearch}
                        aria-label="Clear search"
                        title="Clear search"
                    >
                        <FiX />
                    </button>
                ) : null}
            </div>

            <ul className="navList" ref={listRef}>
                {filteredRoutes.length ? (
                    filteredRoutes.map((item) => {
                        const firstLetter = item.title.charAt(0).toUpperCase();
                        const isActive = location.pathname === item.path;

                        return (
                            <li key={item.path} className="navItem">
                                <NavLink
                                    to={item.path}
                                    className={({ isActive: navIsActive }) =>
                                        `navLink ${navIsActive ? "active" : ""}`
                                    }
                                    ref={isActive ? activeItemRef : null}
                                    onClick={onNavigate}
                                >
                                    <span className="initialBadge">
                                        {firstLetter}
                                    </span>

                                    <span className="textGroup">
                                        <span className="title">
                                            {item.title}
                                        </span>
                                    </span>
                                </NavLink>
                            </li>
                        );
                    })
                ) : (
                    <li className="emptyState">
                        No archive pages match your search.
                    </li>
                )}
            </ul>
        </Styled.Wrapper>
    );
};

export default BlogArchiveNav;
