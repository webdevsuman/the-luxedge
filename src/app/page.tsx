"use client";
import { useTest } from "@/hooks/react-query/useTest";
import { RootState } from "@/redux-toolkit/store/store";
import { useSelector } from "react-redux";

export default function Home() {
  //--------------------------- Checking Redux setup working
  const { loading } = useSelector((state: RootState) => {
    // console.log(state);
    return state.test;
  });

  console.log("Loading state from Redux", loading);

  //---------------------------Checking TanStack setup working
  const {isLoading} = useTest();
  console.log("From tanstack query:",isLoading);
  

  return <div></div>;
}
