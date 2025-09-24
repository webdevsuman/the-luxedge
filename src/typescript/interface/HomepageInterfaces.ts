// Offer Section
export interface OfferCardProps {
  image: string;
  subtitle: string;
  title: string;
  code?: string;
  button?: string;
  titleColor?: string;
}

//Featured Hotels
export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}