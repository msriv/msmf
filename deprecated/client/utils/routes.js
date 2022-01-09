export const SiteRoutes = [
  {
    page: "Homepage",
    slug: "homepage",
    route: "/",
    access: "visitor; admin",
    "sub-routes": [
      {
        page: "Philanthropy",
        slug: "philanthropy",
        route: "/philanthropy",
        access: "visitor; admin",
      },
      {
        page: "Incubation",
        slug: "incubation",
        route: "/incubation",
        access: "visitor; admin",
      },
      {
        page: "Research",
        slug: "research",
        route: "/research",
        access: "visitor; admin",
      },
      {
        page: "Diagnostics",
        slug: "diagnostics",
        route: "/diagnostics",
        access: "visitor; admin",
      },
    ],
  },
  {
    page: "Philanthropy",
    slug: "philanthropy",
    route: "/philanthropy",
    access: "visitor; admin",
    "sub-routes": [
      {
        page: "Programs",
        slug: "programs",
        route: "/philanthropy/programs",
        access: "visitor; admin",
      },
      {
        page: "Impact",
        slug: "impact",
        route: "/philanthropy/impact",
        access: "visitor; admin",
      },
      {
        page: "People",
        slug: "people",
        route: "/philanthropy/people",
        access: "visitor; admin",
      },
      {
        page: "Support Us",
        slug: "support-us",
        route: "/philanthropy/support-us",
        access: "visitor; admin",
      },
      {
        page: "Donate",
        slug: "donate",
        route: "/philanthropy/donate",
        cta: true,
        access: "visitor; admin",
      },
    ],
  },
  {
    page: "Incubation",
    slug: "incubation",
    route: "/incubation",
    access: "visitor; admin",
    "sub-routes": [
      {
        page: "Programs",
        slug: "programs",
        route: "/incubation/programs",
        access: "visitor; admin",
      },
      {
        page: "People",
        slug: "people",
        route: "/incubation/people",
        access: "visitor; admin",
      },
      {
        page: "Events",
        slug: "events",
        route: "/incubation/events",
        access: "visitor; admin",
      },
      {
        page: "Portfolios",
        slug: "portfolios",
        route: "/incubation/portfolios",
        access: "visitor; admin",
      },
      {
        page: "Partners",
        slug: "partners",
        route: "/incubation/partners",
        access: "visitor; admin",
      },
      {
        page: "Get Incubated",
        slug: "get-incubated",
        route: "/incubation/get-incubated",
        cta: true,
        access: "visitor; admin",
      },
    ],
  },
  {
    page: "Research",
    slug: "research",
    route: "/research",
    access: "visitor; admin",
    "sub-routes": [
      {
        page: "Research Programs",
        slug: "research-programs",
        route: "/research/research-programs",
        access: "visitor; admin",
      },
      {
        page: "Resources",
        slug: "resources",
        route: "/research/resources",
        access: "visitor; admin",
      },
      {
        page: "Researchers",
        slug: "researchers",
        route: "/research/researchers",
        access: "visitor; admin",
      },
      {
        page: "PhD",
        slug: "phd",
        route: "/research/phd",
        access: "visitor; admin",
      },
      {
        page: "Contact Us",
        slug: "contact-us",
        route: "/research/contact-us",
        cta: true,
        access: "visitor; admin",
      },
    ],
  },
  {
    page: "Diagnostics",
    slug: "diagnostics",
    route: "/diagnostics",
    access: "visitor; admin",
    "sub-routes": [
      {
        page: "About Us",
        slug: "about-us",
        route: "/diagnostics/about-us",
        access: "visitor; admin",
      },
      {
        page: "Our Tests",
        slug: "our-tests",
        route: "/diagnostics/our-tests",
        access: "visitor; admin",
      },
      {
        page: "Contact Us",
        slug: "contact-us",
        route: "/diagnostics/contact-us",
        cta: true,
        access: "visitor; admin",
      },
    ],
  },
];

export const AdminRoutes = [
  {
    page: "Admin",
    slug: "admin",
    route: "/admin",
    access: "visitor; admin",
    dropdown: [
      {
        page: "Dashboard",
        slug: "dashboard",
        route: "/admin/dashboard",
        access: "admin",
      },
      {
        page: "Login",
        slug: "login",
        route: "/admin/login",
        access: "visitor; admin",
      },
      {
        page: "Logout",
        slug: "logout",
        route: "/admin/logout",
        access: "admin",
      },
    ],
  },
];
