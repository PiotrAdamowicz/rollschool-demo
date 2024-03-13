import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Close, HamburgerButton } from "@icon-park/react";
import { links } from "../links";
import type { Link } from "../../types";
import NavItem from "./NavItem";
import NavLink from "./NavLink";

export default function HamburgerDrawer({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const { label, subNav } = data;
  const { navigation } = links;

  return (
    <div className="h-full w-fit flex justify-self-center align-middle justify-center">
      <HamburgerButton
        className="my-2 sm:my-0 text-5xl sm:text-8xl sm:mr-8 justify-self-center align-middle cursor-pointer hover:scale-95 ease-in-out absolute rounded transition-all delay-300 text-azul-400 hover:shadow-md hover:sm:shadow-azul-300 bg-transparent z-10 top-2 right-2 justify-end"
        strokeWidth={5}
        theme="outline"
        onClick={() => setIsOpen(true)}
      />
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-secondary bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 w-full lg:w-1/2 flex max-w-screen-sm sm:max-w-screen-3xl pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen">
                    <div className="absolute right-0 top-0 z-20 mx-8 flex pr-2 pt-4 ">
                      <button
                        type="button"
                        className="relative rounded-md text-dim_gray-700 transition-transform duration-300 hover:text-dim_gray-800 hover:rotate-90 focus:outline-none focus:ring-0 ring-0"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <Close size="5rem" theme="outline" />
                      </button>
                    </div>
                    <div className="flex h-full flex-col bg-gradient-to-b from-dim_gray-900 to-ruddy_blue-300 py-6 shadow-xl">
                      <div className="relative mt-6 flex-1">
                        <ul className="mt-10">
                          {navigation.map((link: Link) =>
                            "subNav" in link ? (
                              <NavItem key={link.href} data={link} />
                            ) : (
                              <NavLink key={link.href} data={link} />
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
