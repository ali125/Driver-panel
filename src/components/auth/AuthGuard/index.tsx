"use client";
import React, { PropsWithChildren, useRef } from "react";
import { redirect } from "next/navigation";
import { TOKEN_STORE } from "@/constants";

const AuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const initial = useRef<boolean>(false);

  if (typeof window === "undefined") return null;

  const token = localStorage.getItem(TOKEN_STORE);

  if (token) {
    initial.current = true;
  }

  if (!initial.current) {
    redirect("/auth");
  }

  return children;
};

export default AuthGuard;
