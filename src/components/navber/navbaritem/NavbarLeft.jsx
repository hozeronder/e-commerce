import React from 'react'
import {useNavigate} from "react-router-dom";
import {Fragment} from 'react'
import {Menu, Transition} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function NavbarLeft() {

    const navigate = useNavigate()

    return (<Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2">
                    MENU
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true"/>
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
                <Menu.Items
                    className="absolute left-0 z-10 mt-16 md:mt-6 w-36 origin-top-right rounded-md text-white">
                    <div className="py-1">
                        <Menu.Item>
                            {({active}) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-none text-white' : 'text-white',
                                        'block px-4 py-2'
                                    )}
                                >
                                    Account settings
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({active}) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-none text-white' : 'text-white',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Support
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({active}) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-none text-white' : 'text-white',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    License
                                </a>
                            )}
                        </Menu.Item>
                        <form method="POST" action="#">
                            <Menu.Item>
                                {({active}) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                            active ? 'bg-none text-white' : 'text-white',
                                            'block w-full px-4 py-2 text-left text-sm'
                                        )}
                                    >
                                        Sign out
                                    </button>
                                )}
                            </Menu.Item>
                        </form>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default NavbarLeft
