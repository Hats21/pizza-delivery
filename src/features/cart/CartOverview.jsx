import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
// const fakeCart = {
//       pizzaId: 12,
//       name: "Mediterranean",
//       quantity: 2,
//       unitPrice: 16,
//       totalPrice: 32,
//     },

function CartOverview() {
  const cart = useSelector((store) => store.cart.cart);

  if (cart.length === 0) return null;
  const totalPrice = cart.reduce((acc, cur) => acc + cur.totalPrice, 0);
  const totalPizzas = cart.reduce((acc, cur) => acc + cur.quantity, 0);

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-stone-200 sm:py-6">
      <p className="space-x-4 text-sm font-semibold uppercase text-stone-300 sm:space-x-6 md:text-base">
        <span>{totalPizzas}</span> Pizza
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
