import React from "react";
import { Container, PageButton, VideoListStyled } from "./VideoListStyled";
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
              <option value="Junho">Junho</option>
              <option value="Maio">Maio</option>
              <option value="Abril">Abril</option>
              <option value="Março">Março</option>
              <option value="Fevereiro">Fevereiro</option>
              <option value="Janeiro">Janeiro</option>
            </select>
          </div>
        </div>
        <div className="line"></div>
        <ul className="videoList">
          {videoList.videos.map((video) => (
            <CardVideo
              key={video.id}
              title={video.titulo}
              description={video.titulo}
              url={video.url}
            />
          ))}
        </ul>
        <div className="line"></div>
        <PageButton>
          <p>Página</p>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
        </PageButton>
      </Container>
    </VideoListStyled>
  );
};
