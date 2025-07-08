import React, { useState, ReactNode } from "react";

// Type for item dropdown
interface DropdownItem {
  text: string;
  onClick: () => void;
}

// type for props komponen
interface ButtonGeneralProps {
  children: ReactNode;
  dropdown?: DropdownItem[]; // optional, default []
  bgColor?: string; // optional, default "#3a30ba"
  onClick?: () => void; // optional
}

const ButtonGeneral: React.FC<ButtonGeneralProps> = ({
  children,
  dropdown = [],
  bgColor = "#3a30ba",
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const hasDropdown = dropdown.length > 0;

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const closeDropdown = () => setIsOpen(false);

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={hasDropdown ? toggleDropdown : onClick}
        style={{ backgroundColor: bgColor }}
        className="flex justify-between text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center cursor-pointer me-2 mb-2 hover:opacity-90 transition"
      >
        {children}
        {hasDropdown && (
          <svg
            className="-mr-1 size-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill="#ffffff"
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>

      {hasDropdown && (
        <div
          className={`absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none transition-all duration-200 ease-out transform ${
            isOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {dropdown.map((menu, index) => (
              <a
                key={index}
                onClick={() => {
                  menu.onClick();
                  closeDropdown();
                }}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                role="menuitem"
                tabIndex={-1}
              >
                {menu.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonGeneral;
