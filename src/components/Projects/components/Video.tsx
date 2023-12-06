import React from "react"
interface Props {
  video: string
}

const Video: React.FC<Props> = ({ video }) => {
  return (
    <iframe
      className="video"
      src={video}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    >
      Seu navegador não suporta esse recurso
    </iframe>
  )
}

export default Video
