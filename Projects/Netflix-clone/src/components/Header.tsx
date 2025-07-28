import { Button } from "./ui/button"

const Header = () => {
  return (
    <header className="absolute top-0 z-20  w-full">
      <div className="header-wrapper  bg-transparent px-4 h-20 flex items-center  ">
        <div className="flex justify-between mx-auto items-center w-full">
          <div className="pl-2">
            <img src="/images/netflix-logo.png" alt="" className="h-6 w-auto" />
          </div>
          <div className="flex items-center gap-2">
            {/* <Button>
              
            </Button> */}
            <Button className="bg-red-primary rounded px-4 py-1 text-sm">
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