import { ChangeEvent } from "react";
import "./InputWrapper.css";

type Props = {
  name: string;
  type: "number" | "text";
  label: string;
  value: string | number;
  hasSubmit?: boolean;
  onChange: (e: ChangeEvent<any>) => void;
  onNext?: (() => void) | ((vals: any) => void);
  onBack?: () => void;
  isValid: boolean;
  error?: string;
};

export const InputWrapper: React.FC<Props> = ({
  name,
  type,
  label,
  value,
  hasSubmit = false,
  onChange,
  onNext,
  onBack,
  isValid,
  error,
}) => (
  <div className="input-wrapper">
    <label htmlFor={name}>{label}</label>
    <input
      className="input-wrapper__input"
      id={name}
      type={type}
      name={name}
      onChange={onChange}
      value={value}
    />
    <div className="cta-block">
      {onBack && (
        <button onClick={onBack} type="button" className="cta-block__back">
          Back
        </button>
      )}
      {onNext && (
        <button
          onClick={onNext}
          type={hasSubmit ? "submit" : "button"}
          className="cta-block__next"
          disabled={isValid ? false : true}
        >
          Next
        </button>
      )}
    </div>
    {error && <p className="errorMessage">{error}</p>}
  </div>
);
