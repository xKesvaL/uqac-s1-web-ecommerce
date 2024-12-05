"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();

  const signOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/"); // redirect to home page
        },
      },
    });
  };

  return (
    <div>
      <Button variant="destructive" onClick={signOut}>
        Logout
      </Button>
    </div>
  );
};

export default Logout;
