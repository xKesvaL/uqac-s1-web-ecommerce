"use client";

import { useState } from "react";
import { Button } from "../ui/button";

const ProductParameterForm = ({ children }: { children: React.ReactNode }) => {
  const [selected, setSelected] = useState(false);

  return (
    <Button
      className={`text-foreground/80 px-4 py-2 border border-border rounded-full ${
        selected ? "border-foreground" : ""
      }`}
      variant="outline"
      onClick={() => setSelected(!selected)}
    >
      {children}
    </Button>
  );
};

export default ProductParameterForm;
