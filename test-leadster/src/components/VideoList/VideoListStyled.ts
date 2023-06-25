import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
`;

export const VideoListStyled = styled.section`
  background-color: var(--color-white);
  padding: 50px 0;

  .topList {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul {
      display: flex;
      gap: 20px;
      margin-bottom: 30px;

      button {
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50px;
        border: 1px solid var(--color-black);
        background-color: transparent;

        padding: 10px 16px;
        font-size: 1.4rem;

        transition: ease 0.5s;
      }

      button:hover {
        color: var(--color-blue-300);
        border: 1px solid var(--color-blue-300);
        transition: ease 0.5s;
        scale: 1.05;
      }

      button:focus {
        background-color: var(--color-blue-300);
        border: 1px solid var(--color-blue-300);
        color: var(--color-white);
      }
    }

    div {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 30px;
      p {
        font-weight: 600;
      }

      select {
        padding: 10px 10px;
        border-radius: 8px;
        cursor: pointer;
      }
    }
  }

  .videoList {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .line {
    border-bottom: 2px solid lightgrey;
    margin-bottom: 20px;
  }
`;

export const PageButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  p {
    font-size: 1.6rem;
    font-weight: 600;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: transparent;
    background-color: transparent;

    padding: 5px 10px;
    font-size: 1.4rem;

    transition: ease 0.5s;
  }

  button:focus {
    border: 1px solid var(--color-blue-300);
    border-radius: 8px;
    color: var(--color-blue-300);
    font-weight: 600;
    transition: ease 0.5s;
  }
`;
