import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 1;
    }
`;

export const ArticleContainer = styled.div`
    position: relative;
    box-sizing: border-box;
    background-color: var(--primary-light);
    padding: 2rem var(--page-padding) 4rem var(--page-padding);
    animation: ${fadeIn} 1s ease-in-out forwards;
    overflow-x: hidden;
    min-height: 100svh;

    @media (max-width: 480px) {
        padding: var(--page-padding);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: var(--page-padding);
    }
`;
