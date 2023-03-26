import Link from "next/link";

function LoginHeader() {
    return (
        <div className="flex justify-between items-center py-12 px-10 font-mono">
            <h1 className="font-bold text-[34px]"><a href="/">CLIPSMATE</a></h1>
            <div className="flex items-center gap-8">
                <p className="text-[14px]">Don't have an account?</p>
                <Link className="border border-gray-600 border-solid bg-blue-300 rounded-3xl py-6 px-6 font-bold" href="/signup">Get Started</Link>
            </div>
        </div>

    )
}

export default LoginHeader;