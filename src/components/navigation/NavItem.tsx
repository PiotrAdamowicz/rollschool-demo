import { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

export default function NavItem({ data }) {
  let [isShowing, setIsShowing] = useState(false);
  const { label, subNav, target = "_self" } = data;

  return (
    <Menu
      as="li"
      className="relative flex justify-center align-middle transition-all duration-200 border-transparent border-4 hover:border-b-green_yellow-500 rounded"
    >
      <>
        <Menu.Button
          onClick={(e) => setIsShowing((isShowing) => !isShowing)}
          className="text-2xl font-bold text-secondary w-full"
        >
          {label}
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transform transition ease-in-out duration-500 sm:duration-700"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-500 sm:duration-700"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <Menu.Items className="text-white absolute w-full top-full left-0 right-0 bg-gradient-to-b from-prussian_blue-500 to-azul-500 flex justify-center text-center flex-col shadow-2xl rounded gap-1 px-4 py-4">
            {subNav.map((link) => (
              <Menu.Item key={link.href}>
                {({ active }) => (
                  <a
                    target={target}
                    className={`${
                      active && "border-b-green_yellow-500"
                    } text-xl border-transparent border-4 rounded transition-all duration-200`}
                    href={link.href}
                  >
                    {link.label}
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </>
    </Menu>
  );
}
