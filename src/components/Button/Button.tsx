import { ButtonHTMLAttributes } from "react";
import "./button_block.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...buttonAttributes }: Props) => {
  return (
    <button {...buttonAttributes} className="btn">
      {children}
    </button>
  );
};

export default Button;
