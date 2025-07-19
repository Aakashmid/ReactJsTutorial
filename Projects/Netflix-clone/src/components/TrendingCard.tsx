import React from 'react'
import { Card, CardContent, CardFooter } from './ui/card'

const TrendingCard = ({ img, number }: { img: string, number: number }) => {
    return (
        <Card>
            <CardContent>
                <img src={img} alt="" />
            </CardContent>
            <CardFooter>
             {number}
            </CardFooter>
        </Card>
    )
}

export default TrendingCard