import { Plus_Jakarta_Sans } from "next/font/google";
import styled from "styled-components";

export const BigBannerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  padding: 100px 0;
  background-color: var(--color-blue-100);

  p {
    color: var(--color-blue-300);
    font-weight: 600;
    font-size: 14px;
    border: 2px solid var(--color-blue-300);
    padding: 5px 12px;
    border-radius: 20px 20px 20px 0px;
  }

  h3 {
    font-size: 50px;
  }

  img {
    position: absolute;
    top: 0;
    right: 1;
  }
  h2 {
    position: relative;
    font-size: 80px;
    font-weight: 700;
    color: var(--color-blue-300);
  }

  strong {
    font-weight: 800;
  }
`;
