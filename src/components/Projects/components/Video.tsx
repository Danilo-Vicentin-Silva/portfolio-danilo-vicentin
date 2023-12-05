import React from "react";
interface Props {
  video: string;
}

const Video: React.FC<Props> = ({ video }) => {
  return (
    <video controls autoPlay loop>
      <source src={video} type="video/mp4" />
      Seu navegador nao suporta esse recurso
    </video>
  );
};

export default Video;
