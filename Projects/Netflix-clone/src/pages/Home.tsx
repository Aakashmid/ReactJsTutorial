import HeroSection from "@/components/HeroSection"
import Trending from "@/components/Trending"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { PlusIcon } from "lucide-react"


const Home = () => {
  return (
    <div className="homepage-wrapper">
      <div className=" ">
        <HeroSection />
        <div className="pb-10 bg-black relative flex  flex-col gap-14 pt-14  px-5">
          {/* <Trending/> */}
          {/* more resons to join */}
          {/* <div className="">
            
          </div> */}


          <div className="faq-container">
            <h2 className="text-lg text-white my-2 font-medium">Frequently Asked Questions</h2>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >

              <AccordionItem value="item-1" className="mt-2 ">
                <AccordionTrigger className="text-white bg-gray p-6 flex rounded-none">
                  <p className="grow text-lg font-normal">
                    Product Information
                  </p>
                  <PlusIcon className="w-6 h-auto text-white" 
                  />
                </AccordionTrigger>
                <AccordionContent className="mt-[2px] flex flex-col p-6 text-lg gap-4 text-balance text-white bg-gray">
                  <p>
                    Our flagship product combines cutting-edge technology with sleek
                    design. Built with premium materials, it offers unparalleled
                    performance and reliability.
                  </p>
                  <p>
                    Key features include advanced processing capabilities, and an
                    intuitive user interface designed for both beginners and experts.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="mt-2 ">
                <AccordionTrigger className="text-white bg-gray p-6 flex rounded-none">
                  <p className="grow text-lg font-normal">
                    Product Information
                  </p>
                  <PlusIcon className="w-6 h-auto text-white" 
                  />
                </AccordionTrigger>
                <AccordionContent className="mt-[2px] flex flex-col p-6 text-lg gap-4 text-balance text-white bg-gray">
                  <p>
                    Our flagship product combines cutting-edge technology with sleek
                    design. Built with premium materials, it offers unparalleled
                    performance and reliability.
                  </p>
                  <p>
                    Key features include advanced processing capabilities, and an
                    intuitive user interface designed for both beginners and experts.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="mt-2 ">
                <AccordionTrigger className="text-white bg-gray p-6 flex rounded-none">
                  <p className="grow text-lg font-normal">
                    Product Information
                  </p>
                  <PlusIcon className="w-6 h-auto text-white" 
                  />
                </AccordionTrigger>
                <AccordionContent className="mt-[2px] flex flex-col p-6 text-lg gap-4 text-balance text-white bg-gray">
                  <p>
                    Our flagship product combines cutting-edge technology with sleek
                    design. Built with premium materials, it offers unparalleled
                    performance and reliability.
                  </p>
                  <p>
                    Key features include advanced processing capabilities, and an
                    intuitive user interface designed for both beginners and experts.
                  </p>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home