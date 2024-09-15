"use client";

import { useState } from "react";
import Menu from "../../constant/menuItems.json";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import SubMenu from "../../constant/subMenu.json";
import { FaLessThan } from "react-icons/fa";

export const DropDown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }
  function handleOpen() {
    setOpen((prev) => !prev);
  }

  function handleClose() {
    setClose((prev) => !prev);
  }

  return (
    <div className="relative flex flex-col items-center w-[130px]">
      <button
        onClick={handleClick}
        className="p-4 w-full flex items-center justify-between font-bold tracking-wider text-secondary"
      >
        موضوعات
        {!isOpen ? (
          <MdExpandMore className="h-12" />
        ) : (
          <MdExpandLess className="h-12" />
        )}
      </button>
      {isOpen && (
        <div className="absolute z-10 bg-white top-[90px] flex flex-col items-start p-2 gap-2 w-[150px]">
          {Menu.map((item, i) => (
            <div
              key={i}
              className="flex w-full justify-between pt-2 pb-2 cursor-pointer hover:bg-neutral"
            >
              <ul className="flex justify-between items-center w-full">
                <li
                  className="w-full h-[30px] font-bold pr-4 text-neutral-base hover:text-neutral_content "
                  onMouseEnter={handleOpen}
                  onMouseLeave={handleOpen}
                >
                  {item.title}
                </li>
                {open && (
                  <div className="duration-1000 w-[700px] h-[325px] text-neutral-base  absolute top-2 right-36 bg-white z-10 flex flex-col flex-wrap gap-4">
                    {SubMenu.map((item, i) => (
                      <div>
                        <ul className="flex justify-between items-center w-[160px]">
                          <li className="w-full h-[30px] hover:text-neutral_content pr-4 duration-500">
                            {item.title}
                          </li>
                          <FaLessThan className="w-2 h-2" />
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
