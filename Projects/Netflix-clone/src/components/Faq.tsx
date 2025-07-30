import FaqData, { type FaqDataType } from '@/constants/faqData'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { PlusIcon, XIcon } from 'lucide-react'



const Faq = () => {
    return (
        <>
            <h2 className="text-lg text-white my-2 font-medium">Frequently Asked Questions</h2>
            <Accordion
                type="single"
                collapsible
                className="w-full space-y-2"
                defaultValue=""
            >
                {FaqData.map((item: FaqDataType) => (
                    <AccordionItem value={`item-${item.id}`} className="" key={item.id}>
                        <AccordionTrigger className=" text-white hover:bg-gray-md bg-gray p-6  rounded-none w-full  transition-colors duration-300 cursor-pointer  ">
                            <p className=" text-left text-lg font-normal ">
                                {item.question}
                            </p>
                        </AccordionTrigger>
                        <AccordionContent className="mt-[2px] flex flex-col p-6 text-lg gap-4 text-balance text-white  bg-gray">
                            {item.answer?.map((para, index) => (
                                <p key={index} className="">
                                    {para}
                                </p>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}

export default Faq