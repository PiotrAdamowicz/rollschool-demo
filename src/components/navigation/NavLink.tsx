interface Props {
  data: {
    href: string;
    label: string;
  };
}

export default function NavLink({ data }: Props) {
  const { href, label } = data;
  return (
    <li className="flex justify-center align-middle transition-all duration-200 border-transparent border-4 hover:border-b-green_yellow-500 rounded m-2 py-2 px-3 text-center">
      <a className="h-fit text-secondary font-bold text-2xl" href={href}>
        {label}
      </a>
    </li>
  );
}
