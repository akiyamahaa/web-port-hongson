type Props = {
  title: string;
  onClick: () => void;
  variant: "bold" | "outline";
  Icon: JSX.Element;
};

const Button = ({ title, onClick, variant = "outline", Icon }: Props) => {
  let stylesVariant;
  if (variant === "bold") {
    stylesVariant = "text-white bg-primary-500";
  } else {
    stylesVariant = "text-primary-500 bg-transparent border border-primary-500";
  }

  return (
    <div
      className={`px-8 py-3 ${stylesVariant} rounded-2xl w-fit flex flex-row items-center gap-2 cursor-pointer hover:opacity-50`}
      onClick={onClick}
    >
      <span className="font-semibold text-lg">{title}</span>
      {Icon}
    </div>
  );
};

export default Button;
