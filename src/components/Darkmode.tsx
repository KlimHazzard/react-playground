import React, { useEffect, useState } from "react";

export const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-md bg-primary text-primary-foreground"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};
