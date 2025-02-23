import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input, InputProps } from "@/components/ui"; 

type InputPassProps = Omit<InputProps,  'icon' | 'iconLeft' | 'iconRight'>

export const InputPass = ({ 
  label,
  placeholder,
  helperText,
  required = false,
  loading = false,
  success = false,
  error = false,
  className,
  ...props 
}: InputPassProps) => {

  const [showPassword, setShowPassword] = useState(false);
  const PasswordIcon = () => (
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="flex items-center justify-center disabled:text-grayscale-500"
    >
      {showPassword ? 
        <EyeOff className="text-white" size={20} /> : 
        <Eye className="text-white" size={20} />
      }
    </button>
  );

  return (
    <Input
      type={showPassword ? "text" : "password"}
      label={label}
      placeholder={placeholder}
      helperText={helperText}
      required={required}
      loading={loading}
      success={success}
      error={error}
      className={className}
      icon={<PasswordIcon />}
      iconRight
      {...props}
    />
  );
};

