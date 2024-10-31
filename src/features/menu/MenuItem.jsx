/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import {
  addItem,
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
} from "../cart/cartSlice";
import ButtonRounded from "../../ui/ButtonRounded";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const pizzaItem = {
    pizzaId: id,
    ingredients,
    name,
    soldOut,
    unitPrice,
    quantity: 1,
    totalPrice: 1 * unitPrice,
  };
  const dispatch = useDispatch();

  const cart = useSelector((store) => store.cart.cart);

  const ids = cart.map((cur) => cur.pizzaId);

  const isSelected = ids.includes(id);

  let newPizza;
  let addedPizza;

  if (isSelected) {
    newPizza = cart.find((cur) => cur.pizzaId === id);
    addedPizza = newPizza.pizzaId;
    console.log(addedPizza);
  }

  function handleClick() {
    dispatch(addItem(pizzaItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-semibold">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {!soldOut &&
            (isSelected ? (
              <div className="flex items-center gap-1 sm:gap-4">
                <ButtonRounded
                  type="small"
                  onClick={() => dispatch(decreaseItemQuantity(addedPizza))}
                >
                  -
                </ButtonRounded>
                <p>{newPizza.quantity}</p>
                <ButtonRounded
                  type="small"
                  onClick={() => dispatch(increaseItemQuantity(addedPizza))}
                >
                  +
                </ButtonRounded>

                <Button type="small" onClick={() => dispatch(deleteItem(id))}>
                  Delete
                </Button>
              </div>
            ) : (
              <Button type="small" onClick={handleClick}>
                Add to cart
              </Button>
            ))}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
