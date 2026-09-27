import type { Image } from "../../types";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery = ({ images, onImageClick }: ImageGalleryProps) => (
  <ul className={s.imageList}>
    {images.map((image) => (
      <li className={s.imageItem} key={image.id}>
        <div className={s.imageDescription}>
          <ImageCard
            src={image.urls.small}
            alt={image.alt_description ?? "Image"}
            onClick={() => onImageClick(image)}
          />
        </div>
      </li>
    ))}
  </ul>
);
export default ImageGallery;
