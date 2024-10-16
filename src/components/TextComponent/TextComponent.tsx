import React from "react";

import "./TextComponent.css";

interface ITextComponent {
  label: string;
  variant: string;
}

export const TextComponent: React.FC<ITextComponent> = ({ label, variant }) => {
  return (
    <div className="text__container">
      <p className={`text ${variant}`}>{label}</p>
    </div>
  );
};
