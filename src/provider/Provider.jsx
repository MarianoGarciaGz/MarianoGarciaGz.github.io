import { v4 } from "uuid";
import { createContext } from "react";

const data = {
  header: {
    menu: [
      { id: 1, title: "Home", href: "#" },
      { id: 2, title: "About", href: "#about" },
      { id: 3, title: "Projects", href: "#projects" },
      { id: 4, title: "Contact", href: "#contact" },
      { id: 5, title: "Blog", href: "#" },
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
