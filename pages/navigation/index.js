import Link from 'next/link';

// create an exported navigation component
export default function Navigation() {
    return (
        <div className="my-10">
            <ul className="flex flex-row justify-center">
                <li className="mx-1 nav-item">
                    <Link href="/">ABOUT |</Link>
                </li>
                <li className="mx-1 nav-item">
                    <Link href="/works">WORKS | </Link>
                </li>
                <li className="mx-1 nav-item">
                    <Link href="/contact">CONTACT</Link>
                </li>
            </ul>
        </div>
    );
}
