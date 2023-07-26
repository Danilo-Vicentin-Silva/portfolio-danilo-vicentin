interface Props {
  video: string
}

const Video: React.FC<Props> = ({ video }) => {
  console.log(video)
  return (
    <video controls>
      <source src={video} type="video/mp4" />
      Seu navegador nao suporta esse recurso
    </video>
  )
}

export default Video
