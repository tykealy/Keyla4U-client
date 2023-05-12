import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <Image src="/Logo.png" width="50" height="50" />
          </Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">Club</Link>
        </li>
        <li>
          <Link href="/contact">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/contact">Help</Link>
        </li>
      </ul>
      <ul className="right-item">
        <li>
          <Link href="/favorites">Favourites</Link>
        </li>
        <li>
          <Link href="/booked">Booked</Link>
        </li>
        <li>
          <Link href="/auth">Register</Link>
        </li>
      </ul>

      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          padding: 1rem;
          height: 100px;
        }

        ul {
          display: flex;
          list-style: none;
        }

        .right-item {
          left: 0.5rem;
        }

        li {
          margin-right: 2.5rem;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
