/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import {
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
} from "./cartSlice";
import ButtonRounded from "../../ui/ButtonRounded";
function CartItem({ item }) {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="s py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <div className="flex items-center gap-4">
          <ButtonRounded
            type="small"
            onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
          >
            -
          </ButtonRounded>
          <p>{quantity}</p>
          <ButtonRounded
            type="small"
            onClick={() => dispatch(increaseItemQuantity(pizzaId))}
          >
            +
          </ButtonRounded>

          <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
            Delete
          </Button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
