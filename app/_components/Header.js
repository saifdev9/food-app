"use client";

import Image from "next/image";
import Link from "next/link";
import Img from "@/public/images/logo.png";

import styles from "./Header.module.css";
import HeaderBcg from "./HeaderBcg";
import { usePathname } from "next/navigation";

const path = [
  { href: "/meals", label: "Browser Meals" },
  { href: "/community", label: "Foodies Community" },
];

function Header() {
  const pathname = usePathname();

  return (
    <>
      <HeaderBcg />

      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={Img} alt="Logo" priority />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            {path.map((paths) => (
              <li key={paths.label}>
                <Link
                  href={paths.href}
                  className={
                    pathname.startsWith(paths.href) ? styles.active : ""
                  }
                >
                  {paths.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
