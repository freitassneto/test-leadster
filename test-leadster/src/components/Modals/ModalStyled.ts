import { styled } from "styled-components";

export const Container = styled.div`
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    background-color: var(--color-white);
    padding: 20px;
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.25);
    width: 100%;
    max-width: 650px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 22px;
    position: relative;

    h3 {
      span {
        color: var(--color-blue-300);
      }
      font-size: 2rem;
      font-weight: 500;
      width: 300px;
      text-align: center;

      margin-bottom: 20px;
    }

    .closeButton {
      position: absolute;
      top: 0;
      right: 0;
      background-color: transparent;
      border: none;
      padding-right: 20px;
      padding-top: 20px;
      color: gray;
    }

    > div {
      width: 100%;
    }

    h4 {
      font-weight: 600;
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 1.6rem;
    }

    .line {
      border-bottom: 2px solid lightgrey;
    }

    p {
      margin-top: 10px;
      font-size: 1.6rem;
    }
  }
`;
