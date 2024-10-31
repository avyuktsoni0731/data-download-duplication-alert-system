"use client";
import { signIn, signOut } from "next-auth/react";

export default function Home() {
  const login = async () => {
    signIn("google");
  };
  const logout = async () => {
    signOut();
  };

  return (
    <>
      <div>
        <button onClick={() => login()}>Login</button>
      </div>
      <div>
        <button onClick={() => logout()}>Logout</button>
      </div>
    </>
  );
}
