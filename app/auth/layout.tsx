import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  if (session) {
    redirect("/profile");
  }

  return (
    <div className="min-h-[80vh] flex justify-center items-center">
      {children}
    </div>
  );
}
