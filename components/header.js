import InvertButton from "./invertButton";
import SolidButton from "./solidButton";

function HeaderComponent() {
    return (
        <div className="block mr-auto ml-auto w-full fixed z-[999]"> 
            <div className="flex justify-between items-center p-8 font-mono rounded-3xl bg-blue opacity-95 mt-4 mx-4">
                <h1 className="font-bold text-light text-[34px]"><a href="/">CLIPSMATE</a></h1>
                <div className="items-center gap-2  hidden sm:flex">
                    <InvertButton text={"Login"} link={"/login"} />
                    <SolidButton text={"Get Started"} link={"/signup"} />
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent;