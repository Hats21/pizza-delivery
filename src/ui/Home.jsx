// eslint-disable-next-line no-unused-vars
import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
function Home() {
  const user = useSelector((store) => store.user.username);

  return (
    <div className="my-8 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-amber-600">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {user === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {user}
        </Button>
      )}
    </div>
  );
}

export default Home;