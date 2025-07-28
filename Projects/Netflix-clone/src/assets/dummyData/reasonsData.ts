// resons to watch data

export interface ReasonDataType {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}

const ReasonsData: ReasonDataType[] = [
    {
        id: 1,
        title: "Enjoy on your TV",
        description: "Watch on Smart TVs, Playstation, Xbox,Chromecast, Apple TV, Blu-ray players, and more.",
        imageUrl: "/images/icons/television.png"
    },
    {
        id: 2,
        title: "Download your shows to watch offline",
        description: "Save your favorites easily and always have something to watch.",
        imageUrl: "/images/icons/download.png"
    },
    {
        id: 3,
        title: "Watch everywhere",
        description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
        imageUrl: "/images/icons/telescope.png"
    },
    {
        id: 4,
        title: "Create profiles for kids",
        description: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
        imageUrl: "/images/icons/profiles.png"
    }
]

export default ReasonsData