import { Button } from "./ui/button"
import { Input } from "./ui/input"

const HeroSection = () => {
    return (
        <div className="hero-section-wrapper relative  ">
            {/*  put bg image on this div*/}
            <div className="bg-black flex justify-center pb-32 pt-44 ">
                <div className="content w-[20rem]  md:w-[27rem] text-white">
                    <div className="text-center flex flex-col gap-2">
                        <h2 className="headline font-bold text-[2rem]  leading-[2.5rem]">
                            Unlimited moveies, TV shows , and more
                        </h2>
                        <p className="subheadline">Starts at $7.99. Cancel anytime.</p>
                    </div>
                    <div className="call-to-action text-center mt-3">
                        <p className="">Ready to watch? Enter your email to create
                            or restart your membership.</p>
                        <form className="flex md:flex-row flex-col  items-center mt-4 gap-4">
                            <Input placeholder="Email address" className="rounded-none bg-[#161616]"/>
                            <Button className="text-lg bg-[#E50914] w-fit rounded-md">
                                Get Started {">"}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection