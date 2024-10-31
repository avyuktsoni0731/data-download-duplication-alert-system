// app/page.tsx

"use client";

import React, { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function HomePage() {
  const { data: session, status } = useSession();

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [profilePicture, setProfilePicture] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    if (status === "authenticated") {
      setIsSignedIn(true);
      setProfilePicture(session?.user?.image || "/default-profile.png");
      setUserName(session?.user?.name || "User");
    } else if (status === "unauthenticated") {
      setIsSignedIn(false);
    }
  }, [status, session]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "50px",
      }}
    >
      <h1>Welcome to the Home Page</h1>

      {isSignedIn ? (
        <div key="signedIn" style={{ textAlign: "center" }}>
          <p>Welcome, {userName}!</p>
          <Image
            src={profilePicture}
            alt="User Profile"
            width={100}
            height={100}
            style={{ borderRadius: "50%" }}
          />
          <button
            onClick={() => signOut()}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#0070f3",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          key="signIn"
          onClick={() => signIn("google")} // Adjust provider as needed
          style={{
            padding: "10px 20px",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      )}
    </div>
  );
}
