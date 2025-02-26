"use client";
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Loading } from "@/components/ui";
import { cva } from "class-variance-authority";
import { CircleCheck, TriangleAlert } from "lucide-react";

const inputVariants = cva(
  [
    "file:text-foreground pl-2 placeholder:text-grayscale-700 text-white selection:bg-blue-500 selection:text-primary-foreground aria-invalid:outline-destructive/60 aria-invalid:ring-destructive/20 dark:aria-invalid:outline-destructive dark:aria-invalid:ring-destructive/50 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 aria-invalid:outline-destructive/60 dark:aria-invalid:outline-destructive dark:aria-invalid:ring-destructive/40 aria-invalid:ring-destructive/20 aria-invalid:border-destructive/60 dark:aria-invalid:border-destructive h-10 w-full min-w-0 border-none text-base shadow-xs transition-[color,box-shadow] file:inline-flex file:h-7 file:bg-transparent file:text-sm file:font-medium focus:border-secondary-300 focus:outline focus:outline-secondary-300 focus-visible:outline-1 disabled:pointer-events-none disabled:cursor-not-allowed disabled:text-grayscale-500 aria-invalid:focus-visible:ring-[3px] aria-invalid:focus-visible:outline-none md:text-sm dark:aria-invalid:focus-visible:ring-4 after:text-secondary-300 after:content-[*]",
  ],
  {
    variants: {
      color: {
        default: "bg-grayscale-200",
        success: "bg-success-1000 border-success-600 focus:border-success-600 outline-success-600 focus:outline-success-600",
        error: "bg-error-1000 border-error-600 focus:border-error-600 outline-error-600 focus:outline-error-600",
      },
      rounded: {
        default: "rounded-md",
        none: "rounded-none",
        custom: "", 
      },
    },
    defaultVariants: {
      color: "default",
      rounded: "default",
    },
  }
);


interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  required?: boolean;
  loading?: boolean;
  success?: boolean;
  error?: boolean;
  icon?: React.JSX.Element;
  iconLeft?: boolean;
  iconRight?: boolean;
  rounded?: "default" | "none" | "custom"; 
}

export type InputProps = BaseInputProps & React.ComponentProps<"input">;

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    className,
    label,
    loading,
    required = false,
    color,
    helperText,
    type,
    success,
    error,
    icon,
    iconLeft,
    iconRight,
    rounded = "default", 
    ...props
  }: InputProps,
  ref
) {

  const getInputColor = (): "default" | "success" | "error" => {
    if (success) return "success";
    if (error) return "error";
    return (color as "default" | "success" | "error") || "default";
  };

  const getStatusIcon = () => {
    if (loading) return <Loading />;
    if (success) return <CircleCheck className="text-success-600" />;
    if (error) return <TriangleAlert className="text-error-600" />;
    return null;
  };

  const shouldShowStatusIcon = loading || success || error;

  return (
    <div className={cn("w-full min-w-1/2", className)}>
      {label && (
        <div
          data-slot="label"
          className="text-caption-regular leading-none select-none pb-2 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
        >
          {label}
        </div>
      )}
      <div className="flex flex-col w-full">
        <div className="relative w-full">
          <input
            type={type}
            ref={ref}
            data-slot="input"
            className={cn(inputVariants({color: getInputColor() , rounded: rounded }), iconLeft && "pl-8", className)}
            disabled={loading || props.disabled}
            required={required}
            aria-invalid={error ? "true" : "false"}
            {...props}
          />
          
          {/* Left icon */}
          {icon && iconLeft && (
            <div className="absolute left-1 top-1/2 -translate-y-1/2 flex items-center">
              {icon}
            </div>
          )}
          
          {/* Right icon */}
          {icon && iconRight && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
              {shouldShowStatusIcon ? getStatusIcon() : icon}                  
            </div>
          )}
          
        </div>

        {/* Helper text */}
        {(helperText || shouldShowStatusIcon) && (
          <div className="flex items-center gap-2 pt-2">
            {getStatusIcon()}
            <div
              data-slot="label"
              className="text-hint-regular leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
            >
              {helperText}
            </div>
          </div>
        )}
      </div>
    </div>
  );
})