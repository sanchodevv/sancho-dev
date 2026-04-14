import About from "../pages/about/about";
import Blog from "../pages/blog/blog";
import Contact from "../pages/contact/contact";
import Partfolio from "../pages/partfolio/partfolio";
import Resume from "../pages/resume/resume";

export const routes = [
    {
        id: 1,
        path: "/",
        element: <About />
    },
    {
        id: 2,
        path: "/resume",
        element: <Resume />
    },
    {
        id: 3,
        path: "/partfolio",
        element: <Partfolio />
    },
    {
        id: 4,
        path: "/blog",
        element: <Blog />
    },{
        id: 5,
        path: "/contact",
        element: <Contact />
    }
]