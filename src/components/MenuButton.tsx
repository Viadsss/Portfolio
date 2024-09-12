import React from "react";

type MenuButtonProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, setIsOpen }) => {
  return (
    <button
      className="relative h-8 w-8 md:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/2 transform">
        <span
          className={`absolute block h-0.5 w-5 transform bg-current transition ${isOpen ? "rotate-45" : "-translate-y-1.5"}`}
        ></span>
        <span
          className={`d absolute block h-0.5 w-5 transform bg-current transition ${isOpen ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`absolute block h-0.5 w-5 transform bg-current transition ${isOpen ? "-rotate-45" : "translate-y-1.5"}`}
        ></span>
      </div>
    </button>
  );
};

export default MenuButton;
