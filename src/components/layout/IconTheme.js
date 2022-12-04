import { HiSun } from 'react-icons/hi';
import { HiMoon } from 'react-icons/hi';

import { useTheme } from "../../provider/SetTheme"

function IconTheme() {

    const { theme, setTheme } = useTheme()

    return (
        <button>
            {theme === "dark" ? (
                <HiSun className="bg-stone-400 p-2 rounded-lg text-yellow-400 hover:text-yellow-500 duration-500 cursor-pointer" onClick={() => setTheme("light")} size={40} />
            ) : ( 
                <HiMoon className="bg-blue-300 p-2 rounded-lg text-white hover:text-zinc-300 duration-500 cursor-pointer" onClick={() => setTheme("dark")} size={40} />
            )}
        </button>
    )
}

export default IconTheme
