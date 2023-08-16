import React from "react";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { hover } from "@testing-library/user-event/dist/hover";

function NavbarLeft() {
    const navigate = useNavigate();

    return (
        <Menu as="div">
            <div>
                <Menu.Button className="flex gap-x-1.5 rounded-md">
                    MENU
                    <ChevronDownIcon className="-mr-1 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
                className="bg-white bg-opacity-20"
            >
                <Menu.Items className="absolute left-50 z-10 mt-1 w-26 origin-top-right rounded-md">
                    <div className="py-1">
                        <Menu.Item>
                            <a href="#" className="block px-2 py-1 tracking-widest font-sans font-extralight text-sm">
                                ACCOUNT
                            </a>
                        </Menu.Item>
                        <Menu.Item>
                            <a href="#" className="block px-2 py-1 tracking-widest font-sans font-extralight text-sm">
                                SUPPORT
                            </a>
                        </Menu.Item>
                        <Menu.Item>
                            <a href="#" className="block px-2 py-1 tracking-widest font-sans font-extralight text-sm">
                                LICENSE
                            </a>
                        </Menu.Item>
                        <form method="POST" action="#">
                            <Menu.Item>
                                <button type="submit" className="block px-2 py-1 tracking-widest font-sans font-extralight text-sm">
                                    SIGN OUT
                                </button>
                            </Menu.Item>
                        </form>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}

export default NavbarLeft;
