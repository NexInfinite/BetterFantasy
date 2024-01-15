import { usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";
import { BellIcon, XMarkIcon, UserIcon } from "@heroicons/react/24/outline";
import { Menu, MenuList, MenuItem, MenuButton, Button } from "@chakra-ui/react";
import { FaChevronDown, FaBars } from "react-icons/fa";
import { changeTheme } from "@/utils/helper";
import Link from "next/link";

const navigation = {
  "": [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ],
  f1: [
    { name: "Home", href: "/f1" },
    { name: "Leagues", href: "/f1/leagues" },
    { name: "Teams", href: "/f1/teams" },
  ],
  valorant: [{ name: "Home", href: "/valorant" }],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function getPathRoot() {
  if (Object.keys(navigation).includes(usePathname().split("/")[1]))
    return usePathname().split("/")[1];
  else return "";
}

export default function NavBar() {
  return (
    <div className="relative z-10 pb-6 sm:pb-12 font-theme-regular">
      <Disclosure as="nav" className="bg-navbar-main drop-shadow-md">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                {/* Mobile menu button*/}
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden text-white">
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-navbar-hover hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <FaBars className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                  <img
                    className="ml-2 h-6 w-auto"
                    src="/favicon.svg"
                    alt="Better F1 Fantasy"
                  />
                </div>

                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink items-center">
                    <img
                      className="hidden sm:block md:hidden h-8 w-auto"
                      src="/favicon.svg"
                      alt="Better F1 Fantasy"
                    />
                    <img
                      className="hidden md:block h-8 w-auto"
                      src="/logo.svg"
                      alt="Better F1 Fantasy"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation[getPathRoot()].map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          scroll={false}
                          className={classNames(
                            usePathname().toLowerCase() == item.href
                              ? "ring-2 ring-inset ring-white text-white"
                              : "text-white hover:bg-navbar-hover",
                            "rounded-md px-3 py-2 text-sm font-medium",
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right hand side */}
                <div className="relative inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Leagues */}
                  <Menu offset={[0, 5]}>
                    <MenuButton
                      as={Button}
                      rightIcon={<FaChevronDown />}
                      className="mr-4 rounded-md ring-2 ring-inset ring-white text-white px-3 py-2 text-xs font-medium sm:text-md"
                    >
                      {getPathRoot() == ""
                        ? "Select A League"
                        : getPathRoot().toUpperCase()}
                    </MenuButton>
                    <MenuList className="rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <MenuItem>
                        <Link
                          href="/"
                          className="rounded-t-md w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => changeTheme("")}
                        >
                          Home
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          href="/f1"
                          className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => changeTheme("f1")}
                        >
                          F1
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          href="/valorant"
                          className="rounded-b-md w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => changeTheme("valorant")}
                        >
                          Valorant{" "}
                          {/* NOTE: THE LAST ITEM MUST BE rounded-b-md AND NOT rounded-md!!! - Make sure the one above is just rounded-b-md */}
                        </Link>
                      </MenuItem>
                    </MenuList>
                  </Menu>

                  {/* Notifications */}
                  <button
                    type="button"
                    className="relative rounded-full bg-navbar-hover p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-950"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                      alt="notifications"
                    />
                  </button>

                  {/* Profile dropdown */}
                  <Menu offset={[0, 5]}>
                    <MenuButton
                      as={Button}
                      className="relative ml-2 rounded-full bg-navbar-hover p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-950"
                    >
                      <UserIcon
                        className="h-6 w-6"
                        aria-hidden="true"
                        alt="Profile Icon and Dropdown"
                      />
                    </MenuButton>
                    <MenuList className="rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <MenuItem>
                        <Link
                          href="/login"
                          className="rounded-t-md w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => changeTheme("")}
                        >
                          Login
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          href="/profile"
                          className="rounded-t-md w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => changeTheme("")}
                        >
                          Profile
                        </Link>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation[getPathRoot()].map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      usePathname() == item.href
                        ? "text-white bg-navbar-hover"
                        : "text-white hover:bg-red-850",
                      "block rounded-md px-3 py-2 text-base font-medium",
                    )}
                    aria-current={
                      usePathname() == item.href ? "page" : undefined
                    }
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
