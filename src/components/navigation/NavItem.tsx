import { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

export default function NavItem({ data }) {
  let [isShowing, setIsShowing] = useState(false);
  const { label, subNav, target = "_self" } = data;

  return (
    <Menu
      as="li"
      className="relative flex justify-center align-middle transition-all duration-200 border-transparent border-4  focus-within:border-t-green_yellow-400 hover:border-b-green_yellow-400 rounded"
    >
      <>
        <Menu.Button
          onClick={(e) => setIsShowing((isShowing) => !isShowing)}
          className="font-bold bg-gradient-to-r from-azul-500 to-azul-400 bg-clip-text text-transparent w-full"
        >
          {label}
        </Menu.Button>
        <Transition
          as={Fragment}
          show={isShowing}
          enter="transform transition duration-[400ms]"
          enterFrom="opacity-0 scale-50"
          enterTo="opacity-100 rotate-0 scale-100"
          leave="transform duration-200 transition ease-in-out"
          leaveFrom="opacity-100 rotate-0 scale-100 "
          leaveTo="opacity-0 scale-95 "
        >
          <Menu.Items className=" text-white absolute w-60 top-full left-0 right-0 bg-gradient-to-b from-prussian_blue-500 to-azul-500 flex justify-center text-center flex-col shadow-2xl rounded gap-1 px-8 py-4">
            {subNav.map((link) => (
              <Menu.Item key={link.href}>
                {({ active }) => (
                  <a
                    target={target}
                    className={`${
                      active && "border-b-green_yellow-400"
                    } border-transparent border-4 rounded transition-all duration-200`}
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
