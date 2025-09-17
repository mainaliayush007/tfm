import React, { useState } from "react";
import { Button } from "./button";
import { cn } from "../../lib/utils";

interface NavigationItem {
  label: string;
  active: boolean;
}

interface MobileNavProps {
  navigationItems: NavigationItem[];
}

export const MobileNav: React.FC<MobileNavProps> = ({ navigationItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop Navigation - Hidden on mobile */}
      <nav className="hidden md:block border-t-2 border-b-2 border-[#8B4513] py-3">
        <div className="flex justify-center space-x-4 md:space-x-8  text-sm">
          {navigationItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className={`h-auto px-3 py-1 lg:text-xl text-sm font-bold tracking-wider ${
                item.active
                  ? "text-[#c41e3a] underline"
                  : "text-[#8B4513] hover:text-[#c41e3a]"
              }`}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Header with Hamburger */}
        <div className="flex justify-between items-center border-t-2 border-b-2 border-[#8B4513] py-3 px-4">
          <span className="text-[#8B4513] font-bold text-sm">MENU</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="h-8 w-8 text-[#8B4513] hover:text-[#c41e3a]"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col space-y-1">
              <div
                className={cn(
                  "w-5 h-0.5 bg-current transition-all duration-300",
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                )}
              />
              <div
                className={cn(
                  "w-5 h-0.5 bg-current transition-all duration-300",
                  isOpen ? "opacity-0" : ""
                )}
              />
              <div
                className={cn(
                  "w-5 h-0.5 bg-current transition-all duration-300",
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                )}
              />
            </div>
          </Button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out bg-[#f5f3e8] border-b-2 border-[#8B4513]",
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-4 px-4 space-y-2">
            {navigationItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className={cn(
                  "w-full justify-start h-auto px-4 py-3 text-sm font-bold tracking-wider rounded-md",
                  item.active
                    ? "text-[#c41e3a] bg-white/50 underline"
                    : "text-[#8B4513] hover:text-[#c41e3a] hover:bg-white/30"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
