import Modal from "react-modal";
import s from "./ImageModal.module.css";
import type { Image } from "../../types";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: Image;
}

const ImageModal = ({ isOpen, onClose, image }: ImageModalProps) => (
  <Modal isOpen={isOpen} onRequestClose={onClose}>
    {image && (
      <div onClick={onClose}>
        <img
          className={s.modalImg}
          src={image.urls.regular}
          alt={image.alt_description ?? "Image"}
        />
        <p>{image.user.name}</p>
        <p>{image.likes} likes</p>
      </div>
    )}
  </Modal>
);
export default ImageModal;
