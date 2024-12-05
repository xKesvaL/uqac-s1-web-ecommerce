"use client";

import { ChevronLeftIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <Button onClick={router.back} size="icon" variant="ghost">
      <ChevronLeftIcon />
    </Button>
  );
};

export default BackButton;
