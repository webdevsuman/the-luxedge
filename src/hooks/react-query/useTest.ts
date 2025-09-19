import { useQuery } from "@tanstack/react-query";

export const useTest = () =>
  useQuery({
    queryKey: ["test"],
    queryFn: () => {
    //   console.log("Tanstack is working!");
      return null;
    },
  });
