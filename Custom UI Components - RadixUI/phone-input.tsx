import React from "react";
import { CheckIcon, ChevronDown } from "lucide-react";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import { AsYouType, E164Number } from 'libphonenumber-js';

import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  ScrollArea
} from "@/components/ui";

import { cn } from "@/lib/utils";

type PhoneInputProps = Omit<React.ComponentProps<"input">,"onChange" | "value" | "ref"> &
  Omit<RPNInput.Props<typeof RPNInput.default>, "onChange"> & {
    onChange?: (value: RPNInput.Value) => void;
  };

export const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps> =
  React.forwardRef<React.ElementRef<typeof RPNInput.default>, PhoneInputProps>(
    ({ className, onChange, placeholder = "Phone number", ...props }, ref) => {
      const [selectedCountry, setSelectedCountry] = React.useState<RPNInput.Country | undefined>(props.defaultCountry);

      // Update placeholder based on selected country
      const getPlaceholder = React.useCallback(() => {
        if (!selectedCountry) return placeholder;
        
        // Get country code
        const countryCode = RPNInput.getCountryCallingCode(selectedCountry);
        const sampleNumber = '00000000000'; // Generic number with enough digits
        const formattedExample = new AsYouType(selectedCountry).input(sampleNumber);
        
        // Remove any zeros that might appear in the country code part
        const formatExample = formattedExample.replace(/^\+[0-9]+\s/, '');
        
        return `+(${countryCode}) ${formatExample}`;
      }, [selectedCountry, placeholder]);
      
      const handleChange = React.useCallback((value: E164Number | undefined) => {
        onChange?.(value || ("" as RPNInput.Value));
      }, [onChange]);

      return (
        <RPNInput.default
          ref={ref}
          className={cn("flex", className)}
          flagComponent={FlagComponent}
          international
          withCountryCallingCode
          countryCallingCodeEditable={false}
          countrySelectComponent={(props) => (
            <CountrySelect 
              {...props} 
              onCountryChange={(country) => setSelectedCountry(country)}
            />
          )}
          inputComponent={(inputProps) => (
            <InputComponent 
              {...inputProps} 
              placeholder={getPlaceholder()}
              disabled={!selectedCountry}
            />
          )}
          smartCaret
          /**
           * Handles the onChange event.
           *
           * react-phone-number-input might trigger the onChange event as undefined
           * when a valid phone number is not entered. To prevent this,
           * the value is coerced to an empty string.
           *
           * @param {E164Number | undefined} value - The entered value
           */
          onChange={handleChange}
          {...props}
        />
      );
    },
  );
PhoneInput.displayName = "PhoneInput";

const InputComponent = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, ...props }, ref) => {
    const memoizedInput = React.useMemo(() => (
      <Input 
        rounded="custom"
        className={cn("rounded-e-lg rounded-s-none flex-1 border-l border-l-grayscale-300", className)}
        ref={ref}
        {...props}
        color="default"
      />
    ), [className, props.value, props.disabled, props.placeholder]);
    
    return memoizedInput;
  }
);

InputComponent.displayName = "InputComponent";


type CountryEntry = { label: string; value: RPNInput.Country | undefined };

type CountrySelectProps = {
  disabled?: boolean;
  value: RPNInput.Country;
  options: CountryEntry[];
  onChange: (country: RPNInput.Country) => void;
  onCountryChange?: (country: RPNInput.Country) => void;
};

const CountrySelect = ({
  disabled,
  value: selectedCountry,
  options: countryList,
  onChange,
  onCountryChange,
}: CountrySelectProps) => {
  const handleCountryChange = (country: RPNInput.Country) => {
    onChange(country);
    if (onCountryChange) onCountryChange(country);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          className="flex gap-1 rounded-e-none rounded-s-lg border-r-0 px-2 focus:z-10 h-8"
          disabled={disabled}
          variant="primary"
          size="sm"
        >
          <FlagComponent
            country={selectedCountry}
            countryName={selectedCountry}
          />
          <ChevronDown
            className={cn(
              "-mr-1 size-3 opacity-50",
              disabled ? "hidden" : "opacity-100",
            )}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              <ScrollArea className="h-60">
                {countryList.map((country) => (
                  <CommandItem
                    key={country.value || ""}
                    value={country.label}
                    onSelect={() => {
                      if (country.value) handleCountryChange(country.value);
                    }}
                    className="flex items-center gap-2"
                  >
                    {country.value && (
                      <FlagComponent
                        country={country.value}
                        countryName={country.label}
                      />
                    )}
                    <span className="text-sm">{country.label}</span>
                    {selectedCountry === country.value && (
                      <CheckIcon className="ml-auto size-3" />
                    )}
                  </CommandItem>
                ))}
              </ScrollArea>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
  const Flag = country ? flags[country] : null;
  return (
    <span className="flex h-4 w-6 overflow-hidden rounded-sm">
      {Flag && <Flag title={countryName} />}
    </span>
  );
};
