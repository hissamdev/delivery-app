import Link from "next/link";

export default function Header() {
    return (
        <header className="px-8 py-4 flex"> 
            <Link href="/dashboard" className="ml-auto px-3 py-1 bg-blue-400 hover:bg-blue-400/90 rounded-full text-sm text-white cursor-pointer">Admin</Link>
        </header>
    )
}