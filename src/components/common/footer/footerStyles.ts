import styled from 'styled-components';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
    width: 100%;
    height: var(--footer-height);
    min-height: var(--footer-height);
    background: var(--primary-dark);
    text-shadow: 0.0625rem 0.0625rem 0.1875rem var(--primary-dark);

    @media (max-width: 480px) {
        justify-content: center;
        align-items: center;
    }
`;

export const FooterInnerContainer = styled.div`
    background: var(--primary-dark);
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    justify-content: space-between;
    height: fit-content;
`;

export const InfoContainer = styled.div`
    width: 100%;
    height: fit-content;
    padding: 1.5rem var(--page-padding);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    z-index: 2;

    @media (max-width: 480px) {
        padding: var(--page-padding);
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const Text = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0.5rem 0rem;
    font-size: var(--info);
    background: var(--primary-dark);
    color: var(--secondary-dark);
    gap: 0.25rem;
    border-top: 1px solid var(--secondary-dark);

    @media (max-width: 480px) {
        font-size: 0.75rem;
        margin: 0rem;
    }
`;

export const SocialsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 23rem;

    @media (max-width: 480px) {
        margin-bottom: 2rem;
        align-items: center;

        &:last-child {
            margin-bottom: 0rem;
        }
    }
`;

export const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 14rem;
    height: 100%;
    gap: 1rem;
    font-size: var(--body);

    @media (max-width: 480px) {
        font-size: var(--header-small);
        align-items: center;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    height: 2.5rem;
    display: flex;
    align-items: center;
    color: var(--secondary-dark);
`;

export const Title = styled.div`
    font-size: var(--subtitle);
    text-transform: uppercase;
    color: var(--primary-light);
    font-family: var(--fancy);
    margin-bottom: 1rem;
    text-shadow: 0.0625rem 0.0625rem 0.1875rem var(--primary-dark);

    @media (max-width: 480px) {
        margin-bottom: 0.25rem;
    }
`;

export const SocialsWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 0.15rem;
    width: 12rem;
    min-width: 12rem;
    justify-content: flex-start;
    margin-left: -0.65rem;

    @media (max-width: 480px) {
        gap: 0rem;
        width: 13rem;
        justify-content: space-between;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 14rem;
        min-width: 14rem;
        margin-right: 0.25rem;
    }
`;

export const StyledIconButton = styled(IconButton)`
    &.MuiIconButton-root {
        padding: 0.6rem;
    }
`;
