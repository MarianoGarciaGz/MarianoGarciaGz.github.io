import { v4 } from "uuid";
import { createContext } from "react";

const data = {
  header: {
    menu: [
      { id: 1, title: "Home", href: "#", icon: "house" },
      { id: 2, title: "Technologies", href: "#technologies", icon: "cpu-fill" },
      { id: 3, title: "Projects", href: "#projects", icon: "journals" },
      { id: 4, title: "About", href: "#about", icon: "info-circle-fill" },
      { id: 5, title: "Contact", href: "#contact", icon: "person-circle" },
    ],
  },
  about: {
    title: "About me",
    description: "",
  },
  projects: {
    title: "Projects",
    description: "This are some projects that I have worked",
    botton: "Github",
    list: [
      {
        id: v4(),
        src: "#",
        date: "November 16, 2022",
        title: "Seguridad Mafer",
      },
      {
        id: v4(),
        src: "#",
        date: "November 16, 2022",
        title: "Codesaur Technologies",
      },
    ],
  },
};

export const GlobalContext = createContext(data);

export const Provider = ({ children }) => {
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};
