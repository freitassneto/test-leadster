import React from "react";
import { CardVideoStyled } from "./CardVideoStyled";
import Image from "next/image";
import videoThumb from "@/assets/images/thumbnail.png";

export interface iCardVideoProps {
  title: string;
  description: string;
  url: string;
}

export const CardVideo = ({ title }: iCardVideoProps) => {
  return (
    <CardVideoStyled>
      <Image src={videoThumb} alt="Thumbnail do vídeo" width={300} />
      <h5>{title}</h5>
    </CardVideoStyled>
  );
};
