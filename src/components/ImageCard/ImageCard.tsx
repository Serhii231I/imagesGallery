import s from "./ImageCard.module.css";
interface ImageCardProps {
  src: string;
  alt: string;
  onClick: () => void;
}

const ImageCard = ({ src, alt, onClick }: ImageCardProps) => (
  <div className={s.imageCardContainer} onClick={onClick}>
    <img className={s.smallImg} src={src} alt={alt} />
  </div>
);
export default ImageCard;
