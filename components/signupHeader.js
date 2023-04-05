import Link from "next/link";
import SolidButton from "../components/solidButton";

function SignUpHeader() {
    return (
        <div className="flex justify-between items-center py-12 px-10 font-mono bg-[#FCFCFC]">
            <h1 className="font-bold text-[34px]"><a href="/">CLIPSMATE</a></h1>
            <div className="items-center gap-8 hidden sm:flex">
                <p className="text-[14px]">Already have an account?</p>
                <SolidButton text={"Login"} link={"/login"} />
            </div>
        </div>

    )
}

export default SignUpHeader;