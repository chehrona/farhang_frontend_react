import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 100%;
    height: var(--header-height);
    display: flex;
    background-color: var(--primary-dark);

    @media (max-width: 480px) {
        display: none;
    }
`;

export const SideContainer = styled.div`
    width: var(--header-height);
    height: 100%;
    padding: 1rem 0.65rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.img`
    height: 100%;
    width: 100%;
`;

export const Title = styled.div`
    width: 100%;
    height: 100%;
    font-family: var(--fancy);
    font-size: var(--title);
    color: var(--primary-light);
    display: flex;
    justify-content: center;
    align-items: center;
`;
