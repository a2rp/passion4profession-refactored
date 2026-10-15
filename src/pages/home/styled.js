import styled from "styled-components";

export const Styled = {
    Wrapper: styled.main`
        width: min(calc(100% - 40px), var(--content-width));
        margin: 0 auto;
        padding: clamp(28px, 5vw, 58px) 0 64px;
        color: var(--color-text-primary);

        .intro {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 24px;
            margin-bottom: 32px;
        }

        .introText {
            max-width: 760px;
        }

        .eyebrow {
            display: inline-block;
            margin-bottom: 12px;
            color: var(--color-primary);
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 0.12em;
            text-transform: uppercase;
        }

        .intro h1 {
            margin: 0 0 12px;
            font-size: clamp(34px, 5vw, 58px);
            line-height: 1.04;
            letter-spacing: -0.045em;
        }

        .intro p {
            max-width: 660px;
            margin: 0;
            color: var(--color-text-secondary);
            font-size: 16px;
            line-height: 1.7;
        }

        .aboutLink,
        .readLink {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            width: fit-content;
            color: var(--color-text-primary);
            font-weight: 750;
            text-decoration: none;
        }

        .aboutLink {
            flex-shrink: 0;
            padding: 11px 15px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-sm);
            background: var(--color-surface);
        }

        .aboutLink:hover,
        .readLink:hover {
            color: var(--color-primary);
        }

        .toolbar {
            display: grid;
            grid-template-columns:
                minmax(220px, 1fr)
                repeat(3, minmax(135px, 190px));
            gap: 12px;
            padding: 14px;
            margin-bottom: 34px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: var(--color-surface);
            box-shadow: 0 14px 34px var(--color-shadow);
        }

        .searchField {
            position: relative;
            display: flex;
            align-items: center;
            min-width: 0;
            color: var(--color-text-muted);
        }

        .searchField > svg {
            position: absolute;
            left: 14px;
            width: 18px;
            height: 18px;
            pointer-events: none;
        }

        .searchField input,
        .selectField select {
            width: 100%;
            min-width: 0;
            height: 46px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-sm);
            outline: none;
            background: var(--color-surface-2);
            color: var(--color-text-primary);
            font: inherit;
        }

        .searchField input {
            padding: 0 42px;
        }

        .searchField input:focus,
        .selectField select:focus {
            border-color: var(--color-primary);
        }

        .selectField {
            display: flex;
            align-items: center;
            gap: 9px;
            min-width: 0;
            color: var(--color-text-muted);
            font-size: 12px;
            font-weight: 700;
        }

        .selectField span {
            flex-shrink: 0;
        }

        .selectControl {
            position: relative;
            flex: 1;
            min-width: 0;
        }

        .selectField select {
            padding: 0 12px;
            font-size: 13px;
            cursor: pointer;
            appearance: none;
            padding-right: 36px;
        }

        .selectChevron {
            position: absolute;
            top: 50%;
            right: 12px;
            width: 15px;
            height: 15px;
            color: var(--color-text-muted);
            pointer-events: none;
            transform: translateY(-50%);
        }

        .resultsHeader {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 16px;
            margin-bottom: 16px;
        }

        .resultsHeader h2 {
            margin: 0 0 5px;
            font-size: clamp(22px, 3vw, 30px);
            letter-spacing: -0.025em;
        }

        .resultsHeader p {
            margin: 0;
            color: var(--color-text-muted);
            font-size: 13px;
        }

        .resetButton {
            border: 0;
            background: transparent;
            color: var(--color-text-secondary);
            font: inherit;
            font-size: 13px;
            font-weight: 700;
            cursor: pointer;
            text-decoration: underline;
            text-underline-offset: 3px;
        }

        .featuredCard,
        .postCard {
            overflow: hidden;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: var(--color-surface);
            box-shadow: 0 14px 36px var(--color-shadow);
        }

        .featuredCard {
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
            min-height: 300px;
            margin-bottom: 28px;
        }

        .featuredImage,
        .cardImage {
            position: relative;
            display: block;
            min-width: 0;
            overflow: hidden;
            background: var(--color-surface-2);
        }

        .featuredImage img,
        .cardImage img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 240ms ease;
        }

        .featuredImage:hover img,
        .cardImage:hover img {
            transform: scale(1.035);
        }

        .imageLabel {
            position: absolute;
            left: 16px;
            bottom: 16px;
            padding: 8px 11px;
            border: 1px solid rgba(255, 255, 255, 0.24);
            border-radius: 999px;
            background: rgba(10, 12, 18, 0.72);
            color: #fff;
            font-size: 11px;
            font-weight: 800;
            backdrop-filter: blur(8px);
        }

        .featuredContent,
        .cardContent {
            min-width: 0;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        .featuredContent {
            justify-content: center;
            padding: clamp(22px, 4vw, 40px);
        }

        .categoryBadge {
            display: inline-flex;
            align-items: center;
            min-height: 26px;
            padding: 0 9px;
            border: 1px solid var(--color-border);
            border-radius: 999px;
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
            font-size: 11px;
            font-weight: 750;
        }

        .postMeta {
            margin: 12px 0 8px;
            color: var(--color-text-muted);
            font-size: 12px;
        }

        .featuredContent h2 {
            margin: 0 0 11px;
            font-size: clamp(25px, 3.2vw, 38px);
            line-height: 1.12;
            letter-spacing: -0.035em;
        }

        .featuredContent h2 a,
        .cardContent h3 a {
            color: inherit;
            text-decoration: none;
        }

        .featuredContent h2 a:hover,
        .cardContent h3 a:hover {
            color: var(--color-primary);
        }

        .summary {
            margin: 0;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.7;
        }

        .featuredContent .readLink {
            margin-top: 20px;
        }

        .postGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 20px;
        }

        .postCard {
            display: flex;
            flex-direction: column;
            transition:
                transform 180ms ease,
                border-color 180ms ease;
        }

        .postCard:hover {
            transform: translateY(-3px);
            border-color: var(--color-border-light);
        }

        .cardImage {
            aspect-ratio: 1.45;
        }

        .cardContent {
            flex: 1;
            padding: 17px;
        }

        .cardContent h3 {
            margin: 11px 0 8px;
            font-size: 18px;
            line-height: 1.35;
            letter-spacing: -0.015em;
        }

        .cardContent .summary {
            display: -webkit-box;
            overflow: hidden;
            margin-bottom: 16px;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
        }

        .cardContent .readLink {
            margin-top: auto;
            font-size: 13px;
        }

        .emptyState {
            padding: 48px 20px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: var(--color-surface);
            text-align: center;
        }

        .emptyState h2 {
            margin: 0 0 8px;
        }

        .emptyState p {
            margin: 0 0 16px;
            color: var(--color-text-secondary);
        }

        .pagination {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 14px;
            margin-top: 32px;
        }

        .pageArrow,
        .pageNumbers button {
            min-width: 38px;
            height: 38px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 7px;
            padding: 0 11px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-sm);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            font: inherit;
            font-size: 13px;
            font-weight: 700;
            cursor: pointer;
        }

        .pageArrow:disabled {
            opacity: 0.4;
            cursor: not-allowed;
        }

        .pageNumbers {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 6px;
        }

        .pageNumbers button.current {
            border-color: var(--color-text-primary);
            background: var(--color-text-primary);
            color: var(--color-text-inverse);
        }

        @media (max-width: 900px) {
            .toolbar {
                grid-template-columns: repeat(3, minmax(0, 1fr));
            }

            .searchField {
                grid-column: 1 / -1;
            }

            .postGrid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .featuredCard {
                min-height: 250px;
            }
        }

        @media (max-width: 640px) {
            width: calc(100% - 32px);
            padding-top: 28px;

            .intro {
                align-items: flex-start;
                flex-direction: column;
                gap: 16px;
                margin-bottom: 22px;
            }

            .toolbar {
                grid-template-columns: 1fr 1fr;
                gap: 9px;
                padding: 10px;
                margin-bottom: 26px;
            }

            .searchField {
                grid-column: 1 / -1;
            }

            .selectField {
                display: block;
            }

            .selectField span {
                display: block;
                margin: 0 0 5px 2px;
            }

            .featuredCard {
                grid-template-columns: 1fr;
            }

            .featuredImage {
                aspect-ratio: 1.45;
            }

            .featuredContent {
                padding: 20px;
            }

            .postGrid {
                grid-template-columns: 1fr;
                gap: 14px;
            }

            .postCard {
                display: grid;
                grid-template-columns: minmax(110px, 0.8fr) minmax(0, 1.2fr);
            }

            .cardImage {
                min-height: 100%;
                aspect-ratio: auto;
            }

            .cardContent {
                padding: 13px;
            }

            .cardContent h3 {
                margin: 8px 0 6px;
                font-size: 15px;
            }

            .cardContent .summary {
                font-size: 12px;
                -webkit-line-clamp: 2;
            }

            .pagination {
                gap: 7px;
            }

            .pageArrow {
                min-width: 38px;
                padding: 0 8px;
            }

            .pageArrow span {
                display: none;
            }
        }
    `,
};
