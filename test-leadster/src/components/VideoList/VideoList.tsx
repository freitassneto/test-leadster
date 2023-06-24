import React from "react";
import { Container, VideoListStyled } from "./VideoListStyled";
import videoList from "../../database/database.json";
import { CardVideo } from "./CardVideo/CardVideo";

export const VideoList = () => {
  return (
    <VideoListStyled>
      <Container>
        <div className="topList">
          <ul>
            <button>Agências</button>
            <button>Chatbot</button>
            <button>Marketing Digital</button>
            <button>Geração de Leads</button>
            <button>Mídia Paga</button>
          </ul>
          <div>
            <p>Ordenar por</p>
            <select name="select" id="select">
              <option value="">Data de publicação</option>
              <option value="">Junho</option>
              <option value="">Maio</option>
              <option value="">Abril</option>
              <option value="">Março</option>
              <option value="">Fevereiro</option>
              <option value="">Janeiro</option>
            </select>
          </div>
          <div className="line"></div>
        </div>
        <ul className="videoList">
          {videoList.videos.map((video, index) => (
            <CardVideo key={index} title={video.titulo} />
          ))}
        </ul>
      </Container>
    </VideoListStyled>
  );
};
