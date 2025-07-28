import type { ReasonDataType } from "@/assets/dummyData/reasonsData"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const ReasonCard = ({title,description,imageUrl}:ReasonDataType) => {
    return (
        <Card className="rounded-2xl bg-gradient-to-br from-[#192247] to-[#210E17] from-0% to-[99%]  py-6 border-none  gap-2">
            <CardHeader>
                <CardTitle className="text-white text-xl font-medium">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent className="">
                <div className="">
                    <p className="text-white/70 ">
                     {description}
                    </p>
                </div>
                <div className="symbol-container flex w-full justify-end mt-2">
                    <div className="">
                        <img src={imageUrl} alt="television" className="object-cover h-[4.5rem] w-auto aspect-square" />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ReasonCard