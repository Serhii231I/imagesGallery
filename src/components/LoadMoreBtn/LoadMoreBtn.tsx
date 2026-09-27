import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn = ({ onClick }: LoadMoreBtnProps) => (
  <div className={s.loadMoreBtnContainer}>
    <button className={s.loadMoreBtn} onClick={onClick}>
      Load more
    </button>
  </div>
);
export default LoadMoreBtn;
