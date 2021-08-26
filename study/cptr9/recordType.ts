type PageInfo = {
  title: string;
};

type Page = "home" | "about" | "contact";

// Record<Page, PageInfo> == Page를 Key로 하고, PageInfo를 값으로 한다
const nav: Record<Page, PageInfo> = {
  home: { title: "Home" },
  about: { title: "About" },
  contact: { title: "Contact" },
};
