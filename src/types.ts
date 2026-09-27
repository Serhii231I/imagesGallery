export interface Image {
  id: number;
  alt_description: string | null;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
  };
  likes: number;
}
