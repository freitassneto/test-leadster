import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
`;

export const FooterStyled = styled.footer`
  background-color: var(--color-white);
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;

  .topFooter {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    span {
      font-size: 11px;
      color: var(--color-gray);
    }
  }

  section {
    display: flex;
    justify-content: space-between;
    ul {
      display: flex;
      flex-direction: column;
      gap: 12px;
      h5 {
        font-size: 18px;
        margin-bottom: 10px;
      }
      li {
        font-size: 12px;
        color: var(--color-gray);
      }
    }

    span {
      color: var(--color-gray);
    }
  }

  .socialBtns {
    display: flex;
    gap: 20px;
    button {
      display: flex;
      align-items: center;
      justify-content: center;

      border: none;
      padding: 8px;
      border-radius: 100%;

      font-size: 14px;
      color: var(--color-gray);
    }
  }

  p {
    font-size: 12px;
  }

  .botFooter {
    display: flex;
    justify-content: space-between;
    span {
      font-size: 11px;
      color: var(--color-gray);
    }
    @media (max-width: 800px) {
      flex-direction: column;
      gap: 10px;
      align-items: center;
    }
  }
`;
