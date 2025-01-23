import About from "./About/About"
import Contact from "./Contact/Contact"
import CursorCircle from "./CursorCircle/CursorCircle"

import Header from "./Header/Header"
import Project from "./Projects/Project"


const Component = () =>{

    return(
        <div className="">
            <Header />
            <Project/>
            <About />
            <Contact />
            <CursorCircle />
        </div>
    )
}

export default Component