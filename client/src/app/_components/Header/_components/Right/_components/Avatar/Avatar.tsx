import Image from "next/image";

export default function Avatar() {
  return (
    <div className="relative h-10 w-10 overflow-hidden rounded-full">
      <Image src={"/default.png"} alt="头像" fill className="object-cover" />
    </div>
  );
}
