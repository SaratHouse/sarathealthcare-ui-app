import { forwardRef } from "react";

interface InputProps {
  title?: string;
  type: string;
  readonly?: boolean;
  placeholder?: string;
  isRequired?: boolean;
}

const InputField = forwardRef<HTMLInputElement, InputProps>(
  ({ title, type, placeholder, readonly = false, isRequired = false }, ref) => {
    return (
      <div className="flex flex-col gap-2 text-sm w-full">
        {title && <div className="font-semibold tracking-wide">{title} {isRequired && <span className="font-bold text-sm text-red-600">*</span>} </div>}
        <div className="flex flex-row items-center py-3 bg-white border border-gray-300 rounded-lg w-full">
          <input
            type={type}
            placeholder={placeholder}
            readOnly= {readonly}
            ref={ref} // Attach the ref here
            className="outline-none px-3 bg-transparent text-black w-full"
          />
        </div>
      </div>
    );
  }
);

export default InputField;
