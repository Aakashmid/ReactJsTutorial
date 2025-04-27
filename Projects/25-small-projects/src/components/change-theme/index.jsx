import useTheme from "./useTheme";
import './index.css';

export default function ChangeTheme() {
    const [theme, setTheme] = useTheme('theme', 'light');

    return <div data-theme={theme} className="w-full h-screen background-primary transition-all duration-300">
        <div className="flex  items-center ml-20 pt-[10rem] gap-5">
            <h1 className="text-primary text-[3rem]">Hello World !</h1>
            <button className="background-secondary p-2 rounded-lg  cursor-pointer font-medium text-secondary transition-all duration-300" onClick={() => {
                setTheme(theme === 'light' ? 'dark' : 'light');
            }}>Change Theme</button>
        </div>
    </div>
}