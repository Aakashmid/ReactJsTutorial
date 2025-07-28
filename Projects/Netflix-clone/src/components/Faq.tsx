import FaqData, { type FaqDataType } from '@/assets/dummyData/faqData'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion'
import { PlusIcon } from 'lucide-react'



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
                    <AccordionItem value={`item-${item.id}`} className="">
                        <AccordionTrigger className="text-white bg-gray p-6 flex rounded-none w-full hover:bg-[#444444] transition-colors duration-300">
                            <p className="grow text-left text-lg font-normal">
                                {item.question}
                            </p>
                            
                            <PlusIcon className="w-6 h-auto text-white"
                            />
                        </AccordionTrigger>
                        <AccordionContent className="mt-[1px] flex flex-col p-6 text-lg gap-4 text-balance text-white bg-gray">
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