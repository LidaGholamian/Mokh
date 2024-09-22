"use client";

import { useEffect, useState } from "react";
import Menu from "../../constant/menuItems.json";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import SubMenu from "../../constant/subMenu.json";
import { FaLessThan } from "react-icons/fa";

const useBodyScrollLock = () => {
  const bodyStyle = document.body.style;

  const [isLocke, setIsLock] = useState(bodyStyle.overflowY === "hidden");

  useEffect(() => {
    bodyStyle.overflowY = isLocke ? "hidden" : "auto";
  }, [isLocke, bodyStyle]);

  const toggle = () => setIsLock(!isLocke);

  return [isLocke, toggle];
};

export const DropDown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [lock, setLock] = useState(false);

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
    <div
      className="relative flex flex-col items-center w-[130px]"
      onMouseEnter={handleClick}
      onMouseLeave={handleClick}
    >
      <button
        // onClick={handleClick}

        className="p-4 w-full flex items-center justify-between font-bold tracking-wider text-secondary"
      >
        موضوعات
        {!isOpen ? (
          <MdExpandMore className="h-12" />
        ) : (
          <MdExpandLess className="h-12" />
        )}
        {/* {isLocke ? "UnLock" : "Lock"} */}
      </button>
      {isOpen && (
        <div className="absolute z-20 bg-white top-[60px] flex flex-col items-start pt-[20px] pb-[8px] gap-2 w-[150px] ">
          {Menu.map((item, i) => (
            <div
              onMouseEnter={handleOpen}
              onMouseLeave={handleOpen}
              key={i}
              className="flex w-full justify-between pt-2 pb-2 cursor-pointer hover:bg-neutral"
            >
              <ul className="flex justify-between items-center w-full">
                <li className="w-full h-[30px] font-bold pr-4 text-neutral-base hover:text-neutral_content ">
                  {item.title}
                </li>
                {open && (
                  <div className="duration-1000 w-[700px] h-[325px] text-neutral-base  absolute top-2 right-36 mt-[12px] bg-white z-10 flex flex-col flex-wrap gap-4">
                    {SubMenu.map((item, i) => (
                      <div key={i}>
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
