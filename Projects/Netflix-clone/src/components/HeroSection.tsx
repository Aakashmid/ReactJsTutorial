import { Button } from "./ui/button"
import { Input } from "./ui/input"

const HeroSection = () => {
    return (
        <div className="hero-section-wrapper relative  ">
            {/*  put bg image on this div*/}
            <div className="relative bg-[url('/public/images/landing-page-bg.jpg')] bg-cover   bg-center flex justify-center items-center  h-[36rem] xl:h-screen ">
                <span className="bg-black/70 inset-0 absolute z-10 "></span>
                <div className="content  px-10  md:w-[27rem] text-white z-20">
                    <div className="text-center flex flex-col gap-2">
                        <h2 className=" headline font-bold text-[2rem]  leading-[2.5rem]">
                            Unlimited moveies, TV shows , and more
                        </h2>
                        <p className="subheadline">Starts at $7.99. Cancel anytime.</p>
                    </div>
                    <div className="call-to-action text-center mt-3">
                        <p className="">Ready to watch? Enter your email to create
                            or restart your membership.</p>
                        <form className="flex md:flex-row flex-col  items-center mt-4 gap-4">
                            <Input placeholder="Email address" className="px-4 focus:ring focus:ring-offset-2 focus:ring-white py-3 rounded  bg-[#161616]/70" />
                            <Button className="text-lg px-4 py-3 bg-red-primary w-fit rounded ">
                                Get Started {">"}
                            </Button>
                        </form>
                    </div>
                </div>
                <div className="h-1 "></div>
            </div>
        </div>
    )
}

export default HeroSection