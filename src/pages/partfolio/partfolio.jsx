import React, { useState } from 'react'
import './partfolio.css'
import { motion } from "framer-motion";
const Partfolio = () => {
  const categories = ["All", "Team", "LandingPage", "Shopping", "Dashboard", "Other" ];
    const [activeCategory, setActiveCategory] = useState("All");

    const projects = [
        {
            id: 1,
            title: "Ai Tech",
            link: "https://ai-technologies.vercel.app/",
            img: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWl8ZW58MHx8MHx8fDA%3D",
            category: "Dashboard",
            description: [
                {id: 1, text: "React"},
                {id: 2, text: "Typescript"},
                {id: 1, text: "Tailwind"},

            ]
        },
        {
            id: 2,
            title: "Gavhar",
            link: "https://gavhar-gamma.vercel.app/",
            img: "https://www.gastwerk.com/site/assets/files/72635/gastwerk-hotel-hamburg_restaurant-mangold_interior_06.1760x1100.jpg",
            category: "Shopping",
           description: [
                {id: 1, text: "React"},
                {id: 2, text: "Typescript"},
                {id: 1, text: "Tailwind"},

            ]
        },
        {
            id: 3,
            title: "Cofferoasters",
            link: "https://cofferoasters-seven.vercel.app/",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBNzRJAdOrhmYrFZkG1W-6YEZn5db0P9slVQ&s",
            category: "LandingPage",
            description: [
                {id: 1, text: "Html"},
                {id: 2, text: "Css"},
                {id: 1, text: "Javascript"},

            ]
        },
        {
            id: 4,
            title: "Juniper",
            link: "https://juniper-eight-xi.vercel.app",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdVGfnyg3rVAcSKNN10UhI6WOIcAsNkNOykQ&s",
            category: "LandingPage",
            description: [
                {id: 1, text: "Html"},
                {id: 2, text: "Tailwind"},
                {id: 1, text: "Javascript"},

            ]
        },
        {
            id: 5,
            title: "Movies Catalog",
            link: "https://movies-catolog.vercel.app/",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHnHegmZzaO3qoVwIKSwvmXZOwhkBytQR9Uw&s",
            category: "Other",
           description: [
                {id: 1, text: "Html"},
                {id: 2, text: "Bootstrap"},
                {id: 1, text: "Javascript"},

            ]
        },
        {
            id: 6,
            title: "Trafalgar",
            link: "https://trafalgar-teal-nine.vercel.app/",
            img: "https://www.aha.org/sites/default/files/2023-05/Retail-Clinics-Target-Chronic-Diseases.png",
            category: "LandingPage",
            description: [
                {id: 1, text: "Html"},
                {id: 2, text: "Css"},
                {id: 1, text: "Javascript"},

            ]
        },
        {
            id: 7,
            title: "Alpine",
            link: "https://alpine-delta-six.vercel.app/",
            img: "https://cdn.corporatefinanceinstitute.com/assets/marketing-1024x594.jpeg",
            category: "LandingPage",
            description: [
                {id: 1, text: "React"},
                {id: 2, text: "Typescript"},
                {id: 1, text: "Tailwind"},

            ]
        },
        {
            id: 8,
            title: "Unicorn",
            link: "https://unicorn-beta-ten.vercel.app/",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_3NBFqTfME_LgeOqFfium8HD-Xf9uGw4roQ&s",
            category: "Dashboard",
            description: [
                {id: 1, text: "React"},
                {id: 2, text: "Javascript"},
                {id: 1, text: "i18next"},

            ]
        },
        {
            id: 9,
            title: "To Do List",
            link: "https://to-do-app-delta-mocha.vercel.app/",
            img: "https://imageio.forbes.com/specials-images/dam/imageserve/1092571024/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            category: "Other",
            description: [
                {id: 1, text: "React"},
                {id: 2, text: "Typescript"},
                {id: 1, text: "Tailwind"},

            ]
        },
        {
            id: 10,
            title: "40-Gujum Restaurant",
            link: "https://40-gujum.vercel.app/",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ6LWeNQdKpnOwzkJDNOyurTKivv2_KxknqQ&s",
            category: "LandingPage",
            description: [
                {id: 1, text: "React"},
                {id: 2, text: "Typescript"},
                {id: 1, text: "Tailwind"},

            ]
        },
        {
            id: 11,
            title: "Code Uz",
            link: "https://code-uz-six.vercel.app/",
            img: "https://pedagoo.com/wp-content/uploads/2020/06/2250x1500_czy-warto-korzystac-ze-szkolen-online-ollh.jpg",
            category: "LandingPage",
            description: [
                {id: 1, text: "React"},
                {id: 2, text: "Typescript"},
                {id: 1, text: "Css"},

            ]
        },
        
    ];

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="partfolio">
      <div className="partfolio-info">
        <h1>Partfolio</h1>
      </div>
      <div className='partfolio-filters'>
          {categories.map((category) => (
              <button
                  key={category}
                  className={activeCategory === category ? "active" : ""}
                  type='button'
                  onClick={() => setActiveCategory(category)}
              >
                  {category}
              </button>
          ))}
      </div>
      <div className='part__cards'>
          {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                  <div key={project.id} className='part__card'>
                      <a href={project.link} target='_blank' rel='noreferrer'>
                          <img src={project.img} alt={project.title} />
                      </a>
                      <h4>{project.title}</h4>
                      <div className="fd">
                          {project.description.map((item) => (
                              <p key={item.id}>{item.text}</p>
                          ))}
                      </div>
                  </div>
              ))
          ) : (
              <p>No projects in this category.</p>
          )}
      </div>            
    </section>
  )
}

export default Partfolio
