const Button = ({ text }: { text: string }) => {
  return (
    <button className="font-rubik uppercase rounded-[30px] tracking-text text-4xs px-3 py-2 text-color-t top-80 bg-button">
      {text}
    </button>
  );
};

export default Button;
