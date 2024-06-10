import React, { createContext, useState } from "react";

export const ClassContext = createContext();

export const ClaseProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <ClassContext.Provider value={{ isActive, toggleClass }}>
      {children}
    </ClassContext.Provider>
  );
};
