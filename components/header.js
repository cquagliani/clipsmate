import Link from "next/link";

function HeaderComponent() {
    return (
        <div className="flex justify-between items-center py-12 px-10 font-mono">
            <h1 className="font-bold text-[34px]"><a href="/">CLIPSMATE</a></h1>
            <div className="flex items-center gap-16">
                <Link href="/">Home</Link>
                <Link href="/features">Features</Link>
                <Link href="/pricing">Pricing</Link>
            </div>
            <div className="flex items-center gap-8">
                <Link href="/login">Login</Link>
                <Link className="border border-gray-600 border-solid bg-blue-300 rounded-3xl py-6 px-6 font-bold" href="/signup">Get Started</Link>
            </div>
        </div>

    )
}

export default HeaderComponent;