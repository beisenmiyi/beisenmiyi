import Left from "./_components/Left/Left";
import Right from "./_components/Right/Right";

export default function Header() {
  return (
    <div className="flex h-10 w-full items-center justify-around bg-[#dddddd]">
      <Left />
      <Right />
    </div>
  );
}
