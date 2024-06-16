import { Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { Link, NavLink } from "react-router-dom";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Todo List 2</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Theme
            </span>
          </label>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-semibold leading-6 
              ${isActive ? "text-blue-700" : "text-gray-900"}`
            }
          >
            Password Gen
          </NavLink>
          <NavLink
            to="/curr"
            className={({ isActive }) =>
              `text-sm font-semibold leading-6 
              ${isActive ? "text-blue-700" : "text-gray-900"}`
            }
          >
            Currency conv
          </NavLink>
          <NavLink
            to="/todo1"
            className={({ isActive }) =>
              `text-sm font-semibold leading-6 
              ${isActive ? "text-blue-700" : "text-gray-900"}`
            }
          >
            Todo List 1
          </NavLink>
          <NavLink
            to="/todo2"
            className={({ isActive }) =>
              `text-sm font-semibold leading-6 
              ${isActive ? "text-blue-700" : "text-gray-900"}`
            }
          >
            Todo List 2
          </NavLink>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Todo List 2</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Theme
                  </span>
                </label>

                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    ` -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50
              ${isActive ? "text-blue-700" : "text-gray-900"}`
                  }
                >
                  Password Gen
                </NavLink>

                <NavLink
                  to="/curr"
                  className={({ isActive }) =>
                    ` -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50
              ${isActive ? "text-blue-700" : "text-gray-900"}`
                  }
                >
                  Currency conv
                </NavLink>

                <NavLink
                  to="/todo1"
                  className={({ isActive }) =>
                    ` -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50
              ${isActive ? "text-blue-700" : "text-gray-900"}`
                  }
                >
                  Todo 1
                </NavLink>

                <NavLink
                  to="/todo2"
                  className={({ isActive }) =>
                    ` -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50
              ${isActive ? "text-blue-700" : "text-gray-900"}`
                  }
                >
                  Todo 2
                </NavLink>
              </div>
              <div className="py-6">
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
