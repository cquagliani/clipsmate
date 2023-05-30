import Link from "next/link";
import SolidButton from "../components/solidButton";

function SignUpHeader() {
    return (
        <div className="flex justify-between items-center p-8 font-mono">
            <h1 className="font-bold text-[34px]"><Link href="/">CLIPSMATE</Link></h1>
            <div className="items-center gap-8 hidden sm:flex">
                <p className="text-[14px]">Already have an account?</p>
                <SolidButton text={"Login"} link={"/login"} />
            </div>
        </div>

    )
}

export default SignUpHeader;