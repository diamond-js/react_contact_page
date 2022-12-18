import { ChangeEvent, ReactNode, useRef } from "react";
import { SELECT_OPTION } from "../../utils/types";
import "./select_block.css";
import chevron_down from "./chevron_down.svg";

interface Props {
  options: string[];
  value?: string;
  placeholder: string;
  required?: boolean;
  errorMsg?: ReactNode | string;
  onChange?: (a: string) => void;
}

const Select = ({
  options,
  value,
  placeholder,
  required,
  errorMsg,
  onChange,
}: Props) => {
  const selectRef = useRef<HTMLDivElement>(null);

  return (
    <div className="select-input" tabIndex={4} ref={selectRef}>
      <div className="select-input__input-box">
        <p className="select-input__label">
          {value ? (
            value
          ) : (
            <>
              {placeholder} <span className="red-txt">{required && "*"}</span>
            </>
          )}
        </p>
        <img className="select-input__dropdow-icon" src={chevron_down} alt="" />

        {
          <div className="select-input__menu">
            {options.map((option) => (
              <div
                key={option}
                className="select-input__option"
                data-selected={option == value ? "true" : ""}
                onClick={() => {
                  if (onChange) onChange(option);
                  selectRef.current?.blur();
                }}
              >
                {option}
              </div>
            ))}
          </div>
        }
      </div>
      {errorMsg && <p className="input__error-msg">{errorMsg}</p>}
    </div>
  );
};

export default Select;
