import React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { X, CircleCheck, TriangleAlert } from "lucide-react";
import { Loading } from "./loading";

const textAreaVariants = cva(
  [
    "placeholder:text-grayscale-700 text-white text-base min-h-[144px] w-full resize-none rounded-md focus:border-1.5 focus:border-secondary-300 focus:outline focus:outline-secondary-300 bg-grayscale-200 px-3 py-2 focus-visible:outline-1 disabled:cursor-not-allowed disabled:opacity-50 overflow-hidden"
  ], 
  {
    variants: {
      color: {
        default: "bg-grayscale-200",
        success: "bg-info-900 border-success-600 focus:border-success-600 outline-success-600 focus:outline-success-600",
        error: "bg-error-1000 border-error-600 focus:border-error-600 outline-error-600 focus:outline-error-600",
      },
      text:{
        default: "text-grayscale-100",
        success: "text-success-600",
        error: "text-error-600"
      }
    },
    defaultVariants: {
      color: "default",
    },
  }
);

const labelsVariants = cva(
  [
    "text-caption-regular leading-none select-none pb-2 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
  ], 
  {
    variants: {
        color: {
          default: "text-gray-100",
          success: "text-success-600",
          error: "text-error-600"
        }
      },
      defaultVariants: {
        color: "default",
      },
  }
)

const charCountVariants = cva(["text-sm-regular px-2"], 
  {
    variants: {
        color: {
          default: "text-gray-400",
          success: "text-success-600",
          error: "text-error-600"
        }
      },
      defaultVariants: {
        color: "default",
      },
  }
)

type TextAreaVariantProps = VariantProps<typeof textAreaVariants> 
& VariantProps<typeof labelsVariants> & VariantProps<typeof charCountVariants>;

interface BaseTAProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  maxLength?: number;
  symbolVisible?: boolean;
  label?: string;
  required?: boolean;
  loading?: boolean;
  success?: boolean;
  error?: boolean;
  helperText?: string;
}

type TextareaProps = BaseTAProps & TextAreaVariantProps

export function Textarea({ 
  className, 
  label, 
  helperText, 
  maxLength, 
  symbolVisible,
  loading, 
  success, 
  error,
  onChange, 
  ...props 
}: TextareaProps) {
  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  const getTextAreaColor = () => {
    if (success) return "success";
    if (error) return "error";
    return "default";
  };


  const getStatusIcon = () => {
    if (loading) return <Loading />;
    if (success) return <CircleCheck className="text-success-600" />;
    if (error) return <TriangleAlert className="text-error-600" />;
    return null;
  };

  const shouldShowStatusIcon = loading || success || error;

  return (
    <div className={cn("flex flex-col w-full", className)}>
      {label && (
        <div
          data-slot="label"
          className={cn(labelsVariants({ color: getTextAreaColor()}))}
        >
          {label}
        </div>
      )}
      <div className="relative flex items-center w-full">
        <textarea
          data-slot="textarea"
          maxLength={maxLength}
          className={cn(textAreaVariants({ color: getTextAreaColor()}))}
          value={value}
          onChange={handleChange}
          disabled={props.disabled}
          {...props}
        />
        {symbolVisible && value && (
          <button
            onClick={() => setValue("")}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        )}
        {maxLength && (
          <div
            className={cn(
            symbolVisible ? "absolute left-1 bottom-0 pb-1" : "absolute right-0 -top-6",
            charCountVariants({ color: getTextAreaColor() })
            )}
          >
            {value.length}/{maxLength}
          </div>
        )}
      </div>
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
  );
}