import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
`;

export const CallToActionStyled = styled.section`
  background-color: var(--color-blue-100);
  padding-top: 30px;
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }

  .infoContent {
    display: flex;
    flex-direction: column;
    gap: 12px;

    h3 {
      font-size: 40px;
      color: var(--color-dark-blue);
    }

    p {
      font-size: 24px;
      color: var(--color-dark-blue);
    }

    .line {
      border-bottom: 2px solid lightgrey;
    }

    .ctaDiv {
      display: flex;
      align-items: center;
      gap: 20px;
      a {
        background-color: var(--color-blue-300);
        padding: 20px 30px;
        color: var(--color-white);
        border: var(--color-blue-300);
        border-radius: 50px;
        transition: 0.5s ease;
        cursor: pointer;
      }
      a:hover {
        opacity: 0.8;
        transition: 0.5s ease;
      }
    }

    .footerContent {
      p {
        font-size: 14px;
        color: var(--color-dark-blue);
      }
    }
  }
`;
