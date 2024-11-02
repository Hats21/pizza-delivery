/* eslint-disable react/prop-types */
function ButtonRounded({ onClick, children }) {
  if (onClick)
    return (
      <button
        className="h-8 w-8 rounded-half bg-yellow-400 text-xl font-bold text-stone-800 hover:bg-yellow-500"
        onClick={onClick}
      >
        {children}
      </button>
    );

  return (
    <button className="h-8 w-8 rounded-half bg-yellow-400 text-xl font-bold text-stone-800 hover:bg-yellow-500">
      {children}
    </button>
  );
}

export default ButtonRounded;
