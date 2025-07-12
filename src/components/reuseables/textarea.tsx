import { forwardRef } from "react";

interface InputProps {
  title?: string;
  value?: string;
  readonly?: boolean;
  placeholder?: string;
  isRequired?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextareaField = forwardRef<HTMLTextAreaElement, InputProps>(
  ({ title, placeholder, value, readonly = false, isRequired = false, onChange }, ref) => {
    return (
      <div className="flex flex-col gap-1 text-sm w-full">
        {title && <div className="font-bold tracking-wide">{title} {isRequired && <span className="font-bold text-sm text-red-600">*</span>} </div>}
        <div className="flex flex-row items-center py-3 bg-white border border-secondary w-full">
          <textarea
            placeholder= {placeholder}
            readOnly= {readonly}
            rows={5}
            ref={ref}
            value={value}
            onChange={onChange}// Attach the ref here
            className="outline-none px-2 bg-transparent text-black w-full"
          />
        </div>
      </div>
    );
  }
);

export default TextareaField;
