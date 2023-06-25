import React from "react";
import YouTube from "react-youtube";

interface YouTubeVideoProps {
  videoId: string;
}

const YouTubeVideo = ({ videoId }: YouTubeVideoProps) => {
  const opts = {
    width: "100%",
    playerVars: {
      // Aqui você pode adicionar opções adicionais para o player do YouTube
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubeVideo;
