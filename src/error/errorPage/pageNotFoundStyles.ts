import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  background-image: url("/customAssets/footer_grid.webp");
  background-size: calc(100vw / 4);
  background-repeat: repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    background-size: 100vw;
  }
`;

export const CodeWrapper = styled.div`
  height: 15rem;
  width: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    height: 10rem;
    width: 20rem;
  }
`;

export const Code = styled.div`
  font-size: 5rem;
`;

export const ErrorMessage = styled.div`
  font-size: 1.5rem;
`;
