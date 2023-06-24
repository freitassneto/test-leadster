import React from "react";
import { BigBannerStyled } from "./BigBannerStyled";
import Image from "next/image";
import assetHeader from "../../assets/images/asset-header.png";

export const BigBanner = () => {
  return (
    <BigBannerStyled>
      <p>WEBINARS EXCLUSIVOS</p>
      <h3>Menos Conversinha</h3>
      <div>
        <Image src={assetHeader} alt={""} />
        <h2>Mais Conversão</h2>
      </div>
      <span>
        Conheça as estratégias que <strong>mudaram o jogo</strong> e como
        aplicá-las no seu negócio
      </span>
    </BigBannerStyled>
  );
};
