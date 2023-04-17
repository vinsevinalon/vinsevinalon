import Link from 'next/link';

// create an exported navigation component
export default function Navigation() {
    const handleClickLinkedIn = () => {
        window.location.href = 'https://www.linkedin.com/in/vinsevinalon/';
    };
    const handleClickGithub = () => {
        window.location.href = 'https://github.com/vinsevinalon';
    };
    const handleClickCodeCademy = () => {
        window.location.href = 'https://www.codecademy.com/profiles/vinsevinalon'; 
    };
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
            <div className="my-10">
                <ul className="flex flex-row justify-center">
                    <li className="mx-2 nav-item">
                        <svg
                            onClick={handleClickLinkedIn}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            alt="linkedin"
                            fill="#A9a9a9"
                            viewBox="0 0 24 24"
                        >
                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                    </li>
                    <li className="mx-2 nav-item">
                        <svg
                            onClick={handleClickGithub}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            alt="github"
                            fill="#A9a9a9"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </li>
                    <li className="mx-2 nav-item">
                        <svg
                            onClick={handleClickCodeCademy}
                            fill="#A9a9a9"
                            className="h-5 w-5"
                            alt="codecademy"
                            viewBox="0 0 24 24"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M23.827 19.729h-5.595c-.094 0-.17.058-.17.172v1.515c0 .094.058.17.172.17h5.594c.096 0 .172-.044.172-.164v-1.515c0-.105-.057-.166-.173-.166v-.014zM16.463 2.463c.016.034.03.067.047.12v18.79c0 .06-.02.096-.037.114a.168.168 0 0 1-.135.06H.153c-.038 0-.075 0-.097-.02A.181.181 0 0 1 0 21.393V2.564c0-.076.04-.134.096-.15h16.242c.04 0 .096.017.115.034v.016zM1.818 19.573c0 .072.038.135.096.152h12.643c.058-.019.096-.076.096-.154V4.402c0-.073-.039-.134-.098-.15H1.915c-.056.02-.096.073-.096.15l-.003 15.17zm5.174-8.375c.65 0 1.014.177 1.396.62.058.074.153.093.23.034l1.034-.92c.075-.044.058-.164.02-.224-.635-.764-1.554-1.244-2.74-1.244-1.59 0-2.79.795-3.255 2.206-.165.495-.24 1.126-.24 1.98 0 .854.075 1.483.255 1.98.465 1.425 1.665 2.204 3.255 2.204 1.2 0 2.115-.48 2.745-1.216.045-.074.06-.165-.015-.226l-1.037-.915c-.073-.047-.163-.047-.224.027-.39.45-.795.69-1.454.69-.706 0-1.245-.345-1.47-1.035-.136-.39-.166-.87-.166-1.483 0-.615.045-1.068.18-1.47.24-.66.766-1.008 1.486-1.008z" />
                        </svg>
                    </li>
                </ul>
            </div>
        </div>
    );
}
