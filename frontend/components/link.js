import Link from "next/link";

const HoverLink = ({ children, href }) => (
  <Link
    href={href}
    scroll={false}
    prefetch={false}
    className="transition-color ease-out underline underline-offset-2 hover:text-main hover:bg-red-100"
  >
    {children}
  </Link>
);

export default HoverLink;
