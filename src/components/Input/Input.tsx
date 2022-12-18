import { InputHTMLAttributes, ReactNode, useId } from "react";
import "./input_block.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMsg?: ReactNode | string;
}

const Input = ({ errorMsg, ...inputAttributes }: Props) => {
  const { placeholder, ...remainingInputAttributes } = inputAttributes;
  const randomId = useId();
  const id = remainingInputAttributes.id || "input__box" + randomId;
  return (
    <div className="input" data-error={errorMsg && "true"}>
      <div className="input__input-box">
        <label
          htmlFor={id}
          style={{ display: remainingInputAttributes.value ? "none" : "" }}
        >
          {placeholder}{" "}
          <span className="red-txt">
            {remainingInputAttributes.required && "*"}
          </span>
        </label>

        <input {...remainingInputAttributes} id={id} />
      </div>
      {errorMsg && <p className="input__error-msg">{errorMsg}</p>}
    </div>
  );
};

export default Input;
