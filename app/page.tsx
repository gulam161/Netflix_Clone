import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  // @ts-ignore
  // const session = await getServerSession(authOptions);
  // if (!session) {
  //   return redirect("/login");
  // } else {
  //   return redirect("/home");
  // }
}
