"use client";
import { useTest } from "@/hooks/react-query/useTest";
import { RootState } from "@/redux-toolkit/store/store";
import Destination from "@/ui/components/Destination/Destination";
import FeaturedHotels from "@/ui/components/FeaturedHotels/FeaturedHotels";
import Hero from "@/ui/components/Hero/Hero";
import OffersSection from "@/ui/components/OfferSection/OffersSection";
import ScrollingBanner1 from "@/ui/components/ScrollingBanner-1/ScrollingBanner";
import ScrollingBanner2 from "@/ui/components/ScrollingBanner-2/ScrollingBanner";
import SubscribeSection from "@/ui/components/SubscribeSection/SubscribeSection";
import { useSelector } from "react-redux";

export default function Home() {
  //--------------------------- Checking Redux setup working
  const { loading } = useSelector((state: RootState) => {
    // console.log(state);
    return state.test;
  });

  console.log("Loading state from Redux", loading);

  //---------------------------Checking TanStack setup working
  const { isLoading } = useTest();
  console.log("From tanstack query:", isLoading);

  return (
    <div>
      <Hero />
      <OffersSection />
      {/* Banner 1 */}
      <ScrollingBanner1 />
      <Destination />
      {/* Banner 1 */}
      <ScrollingBanner2 />
      <FeaturedHotels />
      <SubscribeSection/>
      <ScrollingBanner1 />
    </div>
  );
}
