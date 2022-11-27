//Importing file
import IconTheme from "./IconTheme"

function Nav() {

    return (
        <nav className="bg-transparent_screen shadow-r_b_shadow fixed backdrop-blur-sm w-[100vw]"> {/*z-20 to make the navBar superimposed on the other elements*/}
            <div className="flex justify-end items-center sm:w-[80vw] lg:w-[60vw] mx-auto py-2 px-4">
                <div className="flex items-center space-x-4">
                  <IconTheme />
                </div>
            </div>
        </nav>
    )
}

export default Nav
