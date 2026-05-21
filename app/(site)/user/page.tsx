"use client";

import { useUser } from "@clerk/nextjs";
import { ButtonLink } from "@/components/ui/Button";

export default function Profile() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
      }}
    >
      <p>{user?.emailAddresses[0].emailAddress}</p>
      <img
        src={user?.imageUrl}
        alt={user?.fullName || "User profile"}
        style={{ borderRadius: 8, width: 80, height: 80 }}
      />
      <div style={{ marginTop: 24, display: "flex", gap: 12 }}>
        <ButtonLink href="/signin" variant="primary">
          Sign In
        </ButtonLink>
        <ButtonLink href="/signup" variant="secondary">
          Sign Up
        </ButtonLink>
      </div>
    </div>
  );
}
