import ReasonsData from "@/constants/reasonsData"
import Faq from "@/components/Faq"
import HeroSection from "@/components/HeroSection"
import ReasonCard from "@/components/ReasonCard"
import Trending from "@/components/Trending"

const Home = () => {
  return (
    <div className="homepage-wrapper">
      <div className=" ">
        <HeroSection />
        <div className="pb-10 bg-black relative flex  flex-col gap-14 pt-14  px-5">
          <Trending/>
          <div className="resons-to-join-container">
            <h2 className="text-lg text-white my-2 font-medium">More Reasons to Join</h2>
            <div className="cards-wrapper space-y-2">
              {ReasonsData.map((item) => (
                <ReasonCard key={item.id} id={item.id} title={item.title} description={item.description} imageUrl={item.imageUrl} />
              ))}
            </div>

          </div>
          <div className="faq-container">
            <Faq />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home