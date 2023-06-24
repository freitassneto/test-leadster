import React from "react";
import { HeaderStyled } from "./HeaderStyled";
import Image from "next/image";
import logo from "../../assets/images/logo.png"

export const Header = () => {
  return (
    <HeaderStyled>
      <Image src={logo} alt={"Logo Leadster"} />
    </HeaderStyled>
  );
};
