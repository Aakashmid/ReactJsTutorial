import { Button } from "./ui/button"

const Header = () => {
  return (
    <header className="absolute top-0 z-10 w-full">
      <div className="header-wrapper  bg-transparent px-4 h-20 flex items-center  ">
        <div className="flex justify-between mx-auto items-center w-full">

          <div className="">
          <h2 className="text-3xl text-[#E50914]">Netflix</h2>
          </div>
          <div className="flex items-center gap-2">
            {/* <Button>
              
            </Button> */}
            <Button className="bg-[#E50914] rounded-md px-4 py-1">
              Sign In
            </Button>
          </div>

          {/* <Logo/> */}
        </div>
      </div>
    </header>

  )
}

export default Header