"use client";
import { useSession, signOut } from "next-auth/react";
export default function Page() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      <p>Welcome Admin</p>
    </>
  );
}
