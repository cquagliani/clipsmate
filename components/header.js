import Link from "next/link";

function HeaderComponent() {
    return (
        <div className="flex justify-between items-center p-8 font-mono bg-transparent">
            <h1 className="font-bold text-[34px]"><a href="/">CLIPSMATE</a></h1>
            <div className="flex items-center gap-8">
                <Link href="/login">Login</Link>
                <Link className="border border-gray-600 border-solid bg-blue-900 text-white rounded-2xl py-4 px-6 font-bold" href="/signup">Get Started</Link>
            </div>
        </div>

    )
}

export default HeaderComponent;