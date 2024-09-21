import Header from "@/components/Header";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Home() {
  const token = cookies().get("token");
  if (!token) {
    redirect("/login");
  }
  return <div></div>;
}
