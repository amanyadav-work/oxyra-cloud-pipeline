'use client'

const Footer = () => {
  const logo = {
    title: "Oxyra",
    url: "/",
  };

  const tagline = "A modular cloud deployment platform for teams that want real observability, reproducible builds, and full infrastructure control.";

  const menuItems = [
    {
      title: "Product",
      links: [
        { text: "Overview", url: "/" },
        { text: "Dashboard", url: "/dashboard" },
        { text: "Import Project", url: "/project/import" },
        { text: "Login", url: "/login" },
        { text: "Sign up", url: "/signup" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "API Server", url: "#" },
        { text: "Build Server", url: "#" },
        { text: "Proxy Server", url: "#" },
        { text: "Real-time Logs", url: "#" },
        { text: "Artifact Storage", url: "#" },
      ],
    },
    {
      title: "Developers",
      links: [
        { text: "GitHub", url: "https://github.com/amanyadav-work" },
        { text: "Architecture", url: "/" },
        { text: "Deployment Flow", url: "/" },
      ],
    },
    {
      title: "Social",
      links: [
        { text: "GitHub", url: "https://github.com/amanyadav-work" },
        { text: "Portfolio", url: "https://yadavaman.com/" },
        { text: "Email", url: "mailto:amansyadav31@gmail.com" },
      ],
    },
  ];

  const copyright = "© 2026 Oxyra Cloud. All rights reserved.";

  const bottomLinks = [
    { text: "Terms and Conditions", url: "/" },
    { text: "Privacy Policy", url: "/" },
  ];

  return (
    <section className="py-32">
      <div className="container max-w-350 mx-auto sm:px-6 lg:px-8">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <a href={logo.url}>
                  <div className="text-base font-semibold text-primary">{logo.title}</div>
                </a>
              </div>
              <p className="mt-4 font-bold">{tagline}</p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;