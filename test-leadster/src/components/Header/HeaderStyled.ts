import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const HeaderStyled = styled.header`
  background-color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  height: 80px;

  img {
    height: 30px;
    width: 140px;
  }
`;
