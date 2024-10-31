import { useSelector } from "react-redux";

function UserName() {
  const user = useSelector((store) => store.user.username);
  if (!user) return null;
  return <p className="hidden text-sm font-semibold md:block">{user}</p>;
}

export default UserName;
