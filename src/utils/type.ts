export interface VideoType {
  _id: string;
  title: string;
  thumbnailUrl: string;
  views: number;
  likes: number;
  shares: number;
  videoUrl: string;
}

export interface VideoProps {
  title: string;
  thumbnail: string;
  views: number;
  likes: number;
  shares: number;
  videoUrl: string;
}
