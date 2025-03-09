import useTheme from "./useTheme";

export default function ChangeTheme(){
    const [theme,setTheme] = useTheme('theme','light');

    return <div data-theme={theme} className="w-full h-full bg-Primary">
        <div className="flex flex-col items-center gap-5">
            <h1 className="text-primary">Hello Workd !</h1>
            <button onClick={()=>{
                setTheme(theme==='light'?'dark':'light');
            }}>Change Theme</button>
        </div>
    </div>
}