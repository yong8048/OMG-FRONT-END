import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  redirect("/login");
  return <div></div>;
}
