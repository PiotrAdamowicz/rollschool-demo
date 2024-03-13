interface Props {
  data: {
    href: string;
    label: string;
  };
  onClick: () => void;
}

export default function NavLink({ data, onClick }: Props) {
  const { href, label } = data;
  return (
    <li
      onClick={onClick}
      className="flex justify-center align-middle transition-all duration-200 border-transparent border-4  border-l-8 hover:border-l-green_yellow-500 rounded text-center"
    >
      <a
        className="h-fit text-secondary font-bold text-2xl sm:text-4xl md:text-5xl lg:text-4xl 2xl:text-5xl"
        href={href}
      >
        {label}
      </a>
    </li>
  );
}
