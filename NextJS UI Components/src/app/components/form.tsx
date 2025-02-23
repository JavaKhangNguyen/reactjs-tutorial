'use client';
import React, { useState, useEffect } from "react";
import { Button, Loading, Input, InputPass, Textarea, PhoneInput } from "@/components/ui";
import { Star } from "lucide-react";
import { motion } from "motion/react";

export const Form = () => {
    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [inputPass, setInputPass] = useState('');
    const [inputPhone, setInputPhone] = useState('');
    const [submittedValue, setSubmittedValue] = useState('Save and see your changes instantly');
    const [submittedPass, setSubmittedPass] = useState('');
    const [submittedPhone, setSubmittedPhone] = useState('');
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const MATCHED_PASSWORD = "Password123!";

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValue(event.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputPass(e.target.value);
        setIsSuccess(false);
        setIsError(false);
      };

    // Re-adjust the logic handling states here - need to reset state every time it changes
    const handleButtonClick = () => {
        setLoading(true);
        setIsSuccess(false);
        setIsError(false);
        setSubmittedPass('')
        setTimeout(() => {
            setSubmittedValue(inputValue);
            setSubmittedPass(inputPass); 
            setLoading(false);
        }, 2000);
    };

    // Potential inconsistent state here also
    const validatePassword = () => {
        if (submittedPass === "") {
            setIsSuccess(false);
            setIsError(false);
            return;
        }
        if (submittedPass === MATCHED_PASSWORD) {
            setIsSuccess(true);
            setIsError(false);
        } 
        else {
            setIsSuccess(false);
            setIsError(true);
        }
      };
    
      useEffect(() => {
        validatePassword();
      }, [submittedPass]);
    
    
    return (
        <motion.div 
            initial={{ x: -100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ type: "spring", stiffness: 100 }}
            className="flex flex-col gap-4 justify-center sm:items-start"
        >
            <motion.p 
                key={submittedValue} 
                initial={{ x: -100, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ type: "spring", stiffness: 100 }}
                className='text-h2 violet-1 text-transparent bg-clip-text dark:text-white'
            >
                {submittedValue}
            </motion.p>
            <motion.p 
                key={submittedPass} 
                initial={{ x: -100, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ type: "spring", stiffness: 100 }}
                className='text-h4 blue-1 text-transparent bg-clip-text dark:text-white'
            >
                {submittedPass}
            </motion.p>
            <Input 
                className="w-1/2 mx-auto"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={(event) => event.key === "Enter" && handleButtonClick()}
                loading={loading}
                success={isSuccess}
                error={isError}
                icon={<Star className="text-white"/>}
                iconLeft
                iconRight
                label="Description"
                helperText="Hint"
                placeholder="Enter your text here"
            />
            {/* <Textarea 
                className="w-1/2 mx-auto"
                placeholder="Your message"
                label="Description"
                helperText="Hint"
                value={inputValue}
                onChange={handleInputChange}
                maxLength={1200}
                loading={loading}
                success={isSuccess}
                error={isError}
            /> */}
            <InputPass 
                className="w-1/2 mx-auto"
                label="Password"
                placeholder="Enter your password"
                helperText={isSuccess ? "Password is correct" : isError ?  "Password is incorrect" : "Enter your password"}
                value={inputPass}
                onChange={handlePasswordChange}
                onKeyDown={(event) => event.key === "Enter" && handleButtonClick()}
                loading={loading}
                success={isSuccess}
                error={isError}
            />
            {/* <PhoneInput className="mx-auto w-1/2" placeholder="Enter your phone number"/> */}
            <Button 
                className="mx-auto" 
                onClick={handleButtonClick}
                disabled={loading || (inputValue.length === 0 && inputPass.length === 0)}
            >
                {/* Case with icon */}
                {/* {loading ? <Loading /> : <Plus /> } */}

                {/* Case of no icon */}
                {loading && <Loading />}
                Submit
            </Button>
        </motion.div>
    )
}