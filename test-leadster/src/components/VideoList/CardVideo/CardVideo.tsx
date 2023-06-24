import React from "react";
import { CardVideoStyled } from "./CardVideoStyled";
import Image from "next/image";
import videoThumb from "@/assets/images/thumbnail.png";

interface CardVideoProps {
  title: string;
}

export const CardVideo = ({ title }: CardVideoProps) => {
  return (
    <CardVideoStyled>
      <Image src={videoThumb} alt="Thumbnail do vídeo" width={300} />
      <h5>{title}</h5>
    </CardVideoStyled>
  );
};
