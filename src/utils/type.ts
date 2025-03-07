export interface VideoType {
  _id: string;
  title: string;
  thumbnailUrl: string;
  views: number;
  unitOfViews: string;
  likes: number;
  unitOfLikes: string;
  shares: number;
  unitOfShares: string;
  videoUrl: string;
}

export interface VideoProps {
  title: string;
  thumbnail: string;
  views: number;
  unitOfViews: string;
  likes: number;
  unitOfLikes: string;
  shares: number;
  unitOfShares: string;
  videoUrl: string;
}

export interface Ttestimonial {
  name : string;
  title : string;
  feedback : string;
  image : string;
}