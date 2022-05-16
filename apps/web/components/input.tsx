import { UseFormRegisterReturn } from "react-hook-form";

type Params = {
  prop: string;
  register?: UseFormRegisterReturn;
  error?: string | null;
  name?: string;
  placeholder?: string;
  field?: string;
  type?: string;
  value?: string;
  disabled?: boolean;
};

export default function Input({
  prop,
  register,
  error,
  name,
  value,
  field,
  placeholder,
  type = "text",
  disabled = false,
}: Params) {
  return (
    <div className="form-control">
      <input
        type={type}
        placeholder={placeholder}
        className={`input w-[384px] min-h-[72px]  ${
          error ? "input-bordered input-error" : ""
        }`}
        id={prop}
        value={value}
        {...register}
        disabled={disabled}
      />
    </div>
  );
}
