import * as React from "react";
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps} from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  ["inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"],
  {
    variants: {
      variant: {
        primary: "bg-white dark:bg-grayscale-200 hover:bg-secondary-300 dark:hover:bg-secondary-300 text-b2-bold !text-grayscale-100 dark:!text-white hover:!text-grayscale-100 disabled:bg-grayscale-700 disabled:text-grayscale-700",
        secondary: "bg-grayscale-200 hover:bg-secondary-300 text-b2-bold !text-white hover:!text-grayscale-100 disabled:bg-grayscale-700 disabled:text-grayscale-700",
        text: "bg-transparent text-grayscale-100 dark:text-white hover:!text-secondary-900 disabled:text-grayscale-300",
      },
      size: {
        xl: "min-w-fit h-14 px-8 py-4 text-b2-bold",
        lg: "min-w-fit h-12 px-6 py-3 text-b2-bold",
        sm: "min-w-[117px] h-10 px-2.5 py-5 text-sm-btn-regular",
        "icon-xl": "size-14 gap-2 p-4",
        "icon-lg": "size-12 gap-2 p-4",
        "icon-sm": "size-10 gap-1.5 p-2.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "xl",
    },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        disabled={loading || props.disabled}
      />
    );
  },
);
