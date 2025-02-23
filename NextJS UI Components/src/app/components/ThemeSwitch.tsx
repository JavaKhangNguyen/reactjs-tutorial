"use client";
import { HiOutlineSun as SunIcon, HiOutlineMoon as MoonIcon } from "react-icons/hi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  if (!mounted) return <>...</>;

  if (currentTheme === "dark") {
    return <SunIcon className="h-8 w-8 dark:text-white" onClick={() => setTheme("light")} />;
  }

  if (currentTheme === "light") {
    return (
      <MoonIcon className="h-8 w-8 text-gray-900 " onClick={() => setTheme("dark")} />
    );
  }
}        