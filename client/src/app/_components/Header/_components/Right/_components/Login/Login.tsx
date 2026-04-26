"use client";

import { useUserStore } from "@/src/store/useUserStore";

export default function Login() {
  return (
    <div className="flex h-full cursor-pointer items-center justify-center">
      {useUserStore((state) => state.user)?.name || "登录"}
    </div>
  );
}
