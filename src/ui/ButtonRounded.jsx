/* eslint-disable react/prop-types */
function ButtonRounded({ onClick, children }) {
  if (onClick)
    return (
      <button
        className="rounded-half h-8 w-8 bg-rose-400 text-xl font-bold text-stone-800"
        onClick={onClick}
      >
        {children}
      </button>
    );

  return (
    <button className="rounded-half h-8 w-8 bg-rose-400 text-xl font-bold text-stone-800">
      {children}
    </button>
  );
}

export default ButtonRounded;
