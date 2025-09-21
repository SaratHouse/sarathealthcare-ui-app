import { forwardRef } from "react";

interface InputProps {
  title?: string;
  type: string;
  iconName?: string;
  readonly?: boolean;
  placeholder?: string;
  isRequired?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = forwardRef<HTMLInputElement, InputProps>(
  ({ title, type, iconName, placeholder, readonly = false, isRequired = false, value, onChange }, ref) => {
    return (
      <div className="flex flex-col gap-2 text-sm w-full">
        {title && <div className="font-semibold tracking-wide">{title} {isRequired && <span className="font-bold text-sm text-red-600">*</span>} </div>}
        <div className="flex flex-row items-center py-3 bg-white border border-gray-300 rounded-lg w-full">
          {iconName && (
            <i
              className={`fi ${iconName} text-center px-2 mb-[-.3rem] text-lg text-[#006dad]`}
            ></i>
          )}
          <input
            type={type}
            placeholder={placeholder}
            readOnly={type !== "date" && readonly}
            ref={ref}
            value={value}
            onChange={onChange}
            className="outline-none px-3 bg-transparent text-black w-full"
          />
        </div>
      </div>
    );
  }
);

export default InputField;
