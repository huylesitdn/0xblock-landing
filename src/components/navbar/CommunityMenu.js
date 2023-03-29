import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@reach/menu-button";

export default function CommunityMenu(props) {
  let title = "Community";

  let [isOverButton, setIsOverButton] = useState(false);
  let [isOverList, setIsOverList] = useState(false);
  let [isOpen, setIsOpen] = useState();
  let [isTouchInput, setIsTouchInput] = useState();
  let [hasClicked, setHasClicked] = useState();
  let button = useRef(null);

  console.log(
    "isOverButton, isOverList, isOpen, isTouchInput, hasClicked: ",
    isOverButton,
    isOverList,
    isOpen,
    isTouchInput,
    hasClicked
  );

  useLayoutEffect(() => {
    if (isOpen && !isOverButton && !isOverList && !isTouchInput) {
      console.log("1111");
      button.current.click();

      // setIsOpen(false);
    } else if (!isOpen && (isOverButton || isOverList) && !isTouchInput) {
      console.log("22222");
      button.current.click();
      // setIsOpen(true);
      setHasClicked(true);
      setIsOpen(!isOpen);
    }
    console.log("33333: ", button);
  }, [isOverButton, isOverList]);

  useEffect(() => {
    // setIsTouchInput(false);
    // setHasClicked(false);
    console.log("4444");
  }, [hasClicked]);

  return (
    <>
      <a className="communityMenu">About</a>

      <ul className="communitySubmenu">
        <li className="nav__submenu-item ">
          <a>Our Company</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Our Team</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Our Portfolio</a>
        </li>
      </ul>
    </>
  );
}
