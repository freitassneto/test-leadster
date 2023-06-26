import React from "react";
import { CardVideoStyled } from "./CardVideoStyled";
import Image from "next/image";
import videoThumb from "@/assets/images/thumbnail.png";
import { FaPlay } from "react-icons/fa";

export interface iCardVideoProps {
  title: string;
  description: string;
  url: string;
  onClick: any;
}

export const CardVideo = ({ title, description, url, onClick }: iCardVideoProps) => {
  return (
    <CardVideoStyled>
      <FaPlay className="playButton"/>
      <Image src={videoThumb} alt="Thumbnail do vídeo" width={300} />
      <h5>{title}</h5>
    </CardVideoStyled>
  );
};
