import { usePathname } from "next/navigation"
import Link from "next/link";

interface LinkProps {
  href: string;
  name: string;
}

export default function Navlink({ link }: { link: LinkProps }) {
    const pathname = usePathname()
  return (
    <div>
      <Link href={link.href} className={
        `rounded p-1 ${pathname === link.href ? "bg-black text-white" : "text-black"}`
      } key={link.name}>
        {link.name}
      </Link>
    </div>
  );
}
