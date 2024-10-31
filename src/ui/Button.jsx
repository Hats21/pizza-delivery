import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Button({ children, disabled, to, type, onClick }) {
  const base =
    " text-xs inline-block rounded-full bg-amber-600 font-semibold uppercase tracking-wide transition-colors duration-200 hover:bg-amber-400 focus:bg-amber-300 focus:outline-none focus:ring focus:ring-amber-300 focus:ring-offset-2 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + " px-4 py-3 sm:px-6 sm:py-4",
    secondary:
      "text-sm hover:text-stone-800 focus:text-stone-800 px-4 py-2.5 sm:px-6 sm:py-3 inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide transition-colors duration-200 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed text-stone-400 ",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
  };
  if (to)
    return (
      <Link to={to} className={`${styles[type]}`}>
        {children}
      </Link>
    );

  if (!onClick)
    return (
      <button disabled={disabled} className={`${styles[type]}`}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={`${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
