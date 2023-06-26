import styled from "styled-components";

export const CardVideoStyled = styled.li`
  width: 300px;
  height: 234px;
  border-radius: 8px;
  box-shadow: 0px 5px 10px 3px rgba(0, 0, 0, 0.1);
  position: relative;
  cursor: pointer;

  h5 {
    font-size: 14px;
    font-weight: 600;
    padding: 12px 20px;
  }

  &:hover {
    color: var(--color-blue-200);
    transition: ease 0.5s;
  }

  &:hover::after {
    content: "";
    transition: ease 0.5s;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 72%;
    background-color: rgba(0, 0, 255, 0.2);
    border-radius: 8px 8px 0 0;
  }

  &:hover .playButton {
    opacity: 1;
    transition: ease 0.5s;
  }

  .playButton {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: ease 0.5s;
    color: var(--color-white);
    font-size: 50px;
  }
`;
