import Link from "next/link";
import SolidButton from "../components/solidButton";

function LoginHeader() {
    return (
        <div className="flex justify-between items-center p-8 font-mono">
            <h1 className="font-bold text-[34px]"><Link href="/">CLIPSMATE</Link></h1>
            <div className="items-center gap-8 hidden sm:flex">
                <p className="text-[14px]">{"Don't have an account?"}</p>
                <SolidButton text={"Get Started"} link={"/signup"} />
            </div>
        </div>

    )
}

export default LoginHeader;