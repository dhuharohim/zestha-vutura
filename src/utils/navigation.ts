// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Portfolio", url: "/portfolio" },
  { name: "Services", url: "/services" },
  // { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      // { name: "Documentation", url: "/welcome-to-docs/" },
      { name: "Portfolio", url: "/portfolio" },
      { name: "Services", url: "/services" },
      { name: "Contact", url: "/contact" },
    ],
  }
  // {
  //   section: "Company",
  //   links: [
  //     { name: "About us", url: "#" },
  //     { name: "Blog", url: "/blog" },
  //     { name: "Careers", url: "#" },
  //     { name: "Customers", url: "#" },
  //   ],
  // },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/dhuharohim",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};