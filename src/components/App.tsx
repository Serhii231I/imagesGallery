import { useState, useEffect } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import SearchBar from "./SearchBar/SearchBar";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";
import "./App.css";
import type { Image } from "../types";

const API_KEY = "hPSd_YdcdR-y-7K9YCLUf7GqX1DmigU28igAbGQfZzA";
const BASE_URL = "https://api.unsplash.com";

const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const fetchImages = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`${BASE_URL}/search/photos`, {
        params: { query, page, per_page: 12, client_id: API_KEY },
      });
      if (data.results.length === 0) {
        setError("No images found. Try another query.");
      } else {
        setError(null);
      }
      setImages((prev) => [...prev, ...data.results]);
    } catch (err) {
      setError("Failed to fetch images. Try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (query) fetchImages();
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setError(null);
  };

  const handleLoadMore = () => setPage((prev) => prev + 1);

  return (
    <div>
      <Toaster position="top-left" />
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={setSelectedImage} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default App;
