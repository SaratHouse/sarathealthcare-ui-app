import { forwardRef } from "react";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  isRequired?: boolean;
}

const CheckboxField = ({ label, checked, onChange, isRequired }: CheckboxProps) => {
  return (
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-5 w-5 text-[#006dad] border-gray-300 rounded"
      />
      <div className="font-medium">
        {label} {isRequired && <span className="font-bold text-sm text-red-600">*</span>}
      </div>
    </div>
  );
};

export default CheckboxField;
