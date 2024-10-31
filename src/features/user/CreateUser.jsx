/* eslint-disable no-unused-vars */
import { useState } from "react";
import Button from "../../ui/Button";
import { updateName } from "../user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;

    dispatch(updateName(username));
    setUsername("");
    navigate("/menu");
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72"
      />

      {username !== "" && (
        <div>
          <Button type="primary" onClick={(e) => handleSubmit(e)}>
            Start ordering
          </Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;