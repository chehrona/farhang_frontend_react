import styled from 'styled-components';

export const SectionWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: var(--gap);
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-weight: bold;
    color: var(--primary-dark);
    font-size: var(--subtitle);
`;

export const Text = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    font-size: var(--body);
`;

export const List = styled.div`
    padding: calc(var(--gap) / 2) 0rem calc(var(--gap) / 2) 1rem;
    font-size: var(--body);
`;
