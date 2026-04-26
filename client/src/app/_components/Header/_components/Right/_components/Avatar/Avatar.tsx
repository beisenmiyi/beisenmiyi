"use client";

import { useUserStore } from "@/src/store/useUserStore";
import Image from "next/image";

export default function Avatar() {
  return (
    <div className="h-9 w-9 overflow-hidden rounded-full">
      <Image
        src={useUserStore((state) => state.user)?.avatar || "/default.png"}
        alt="头像"
        className="object-cover"
        width={36}
        height={36}
      />
    </div>
  );
}
