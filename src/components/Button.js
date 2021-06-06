const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} w-24 min-w-max rounded text-lg mx-auto my-3 px-2 py-1 bg-green-400 text-white shadow-md hover:opacity-50 hover:shadow-none`}
    >
      {children}
    </button>
  );
};

export default Button;
