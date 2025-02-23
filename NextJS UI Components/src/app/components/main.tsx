import React from "react"
import { ThemeSwitch, Form } from "@/app/components"


export const Main = () => {
    return (
      <div className="bg-red-50 dark:bg-black flex flex-col justify-center items-center min-h-screen gap-16 sm:p-20 transition-colors duration-300">
        <ThemeSwitch />
        <Form />
      </div>
    )
}