import Link from "next/link";
import Nav from "./Nav";
import SocialLinks from "./SocialLinks";

export default function Sidebar() {
    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
                    <Link href="/">Chaeho Yoon</Link>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-text-primary sm:text-xl">
                    Full-Stack Software Engineer
                </h2>
                <p className="mt-4 max-w-xs leading-normal text-text-secondary">
                    I build scalable platforms and ship products used by millions.
                </p>
                <Nav />
            </div>
            <SocialLinks />
        </header>
    );
}
