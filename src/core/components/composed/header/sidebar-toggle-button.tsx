"use client";

import { useRef, useEffect } from "react";
import { useSidebar } from "../sidebar/use-sidebar";

export const PureUISidebarToggleButton = () => {
  const { isOpen, toggle, setToggleButtonRef } = useSidebar();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setToggleButtonRef(buttonRef);
  }, [setToggleButtonRef]);

  return (
    <button
      ref={buttonRef}
      onClick={toggle}
      data-open={isOpen}
      className="group cursor-pointer p-[5px] hover:bg-sidebar-accent rounded-md mr-2"
    >
      <div className="relative">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.32698 2.63803C0 3.27976 0 4.11984 0 5.8V10.2C0 11.8802 0 12.7202 0.32698 13.362C0.614601 13.9265 1.07354 14.3854 1.63803 14.673C2.27976 15 3.11984 15 4.8 15H11.2C12.8802 15 13.7202 15 14.362 14.673C14.9265 14.3854 15.3854 13.9265 15.673 13.362C16 12.7202 16 11.8802 16 10.2V5.8C16 4.11984 16 3.27976 15.673 2.63803C15.3854 2.07354 14.9265 1.6146 14.362 1.32698C13.7202 1 12.8802 1 11.2 1H4.8C3.11984 1 2.27976 1 1.63803 1.32698C1.07354 1.6146 0.614601 2.07354 0.32698 2.63803Z"
            className="fill-sidebar-foreground/50"
          ></path>
        </svg>
        <div
          className="w-[1.5px] h-[10px] absolute top-1/2 -translate-y-1/2 left-[3px] rounded-[1px] [transition:width_0.3s_cubic-bezier(.25,.46,.45,.94)] bg-sidebar-primary-foreground"
          style={{ width: isOpen ? "5px" : "2.5px" }}
        ></div>
      </div>
    </button>
  );
};
