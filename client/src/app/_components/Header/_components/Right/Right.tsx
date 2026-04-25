import Avatar from "./_components/Avatar/Avatar";
import Login from "./_components/Login/Login";

export default function Right() {
  return (
    <div className="flex h-full items-center justify-between gap-1">
      <Login />
      <Avatar />
    </div>
  );
}
