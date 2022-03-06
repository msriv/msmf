export interface ISitemap {
  page: string;
  slug: string;
  subroutes?: Array<ISitemap>;
  dropmenu?: Array<ISitemap>;
  route?: string;
  cta?: boolean;
}

export const Sitemap: Array<ISitemap> = [
  {
    page: "",
    route: "/",
    slug: "",
    subroutes: [
      {
        page: "Incubation",
        route: "/incubation",
        slug: "incubation",
      },
      { page: "ADRC", route: "/adrc", slug: "adrc" },
      { page: "Philanthropy", slug: "philanthropy", route: "/philanthropy" },
      { page: "Research", slug: "research", route: "/research" },
    ],
  },
  {
    page: "Incubation",
    route: "/incubation",
    slug: "incubation",
    subroutes: [
      {
        page: "Programs",
        slug: "programs",
        route: "/incubation/programs",
      },
      {
        page: "People",
        slug: "people",
        route: "/incubation/people",
      },
      {
        page: "Events",
        slug: "events",
        route: "/incubation/events",
      },
      {
        page: "Portfolios",
        slug: "portfolios",
        route: "/incubation/portfolios",
      },
      {
        page: "Partners",
        slug: "partners",
        route: "/incubation/partners",
      },
      {
        page: "Mentors",
        slug: "mentors",
        route: "/incubation/mentors",
      },
      {
        page: "MSMF",
        slug: "msmf",
        dropmenu: [
          {
            page: "Philanthropy",
            slug: "philanthropy",
            route: "/philanthropy",
          },
          {
            page: "Incubation",
            slug: "incubation",
            route: "/incubation",
          },
          {
            page: "Research",
            slug: "research",
            route: "/research",
          },
          {
            page: "ADRC",
            slug: "adrc",
            route: "/adrc",
          },
        ],
      },
      {
        page: "Get Incubated",
        slug: "get-incubated",
        route: "/incubation/get-incubated",
        cta: true,
      },
    ],
  },
  {
    page: "ADRC",
    route: "/adrc",
    slug: "adrc",
    subroutes: [
      {
        page: "About Us",
        slug: "about-us",
        route: "/adrc/about-us",
      },
      {
        page: "Tests",
        slug: "tests",
        dropmenu: [
          {
            page: "Brain Tumor",
            slug: "brain-tumor",
            route: "/adrc/tests/brain-tumor",
          },
          {
            page: "Covid",
            slug: "covid",
            route: "/adrc/tests/covid",
          },
          {
            page: "Transplant",
            slug: "transplant",
            route: "/adrc/tests/transplant",
          },
        ],
      },
      {
        page: "Research",
        slug: "research",
        route: "/adrc/research",
      },
      {
        page: "MSMF",
        slug: "msmf",
        dropmenu: [
          {
            page: "Philanthropy",
            slug: "philanthropy",
            route: "/philanthropy",
          },
          {
            page: "Incubation",
            slug: "incubation",
            route: "/incubation",
          },
          {
            page: "Research",
            slug: "research",
            route: "/research",
          },
          {
            page: "ADRC",
            slug: "adrc",
            route: "/adrc",
          },
        ],
      },
    ],
  },
  {
    page: "Philanthropy",
    slug: "philanthropy",
    route: "/philanthopy",
    subroutes: [
      {
        page: "Programs",
        slug: "programs",
        route: "/philanthropy/programs",
      },
      {
        page: "Impact",
        slug: "impact",
        route: "/philanthropy/impact",
      },
      {
        page: "People",
        slug: "people",
        route: "/philanthropy/people",
      },
      {
        page: "Support Us",
        slug: "support-us",
        route: "/philanthropy/support-us",
      },
      {
        page: "MSMF",
        slug: "msmf",
        dropmenu: [
          {
            page: "Philanthropy",
            slug: "philanthropy",
            route: "/philanthropy",
          },
          {
            page: "Incubation",
            slug: "incubation",
            route: "/incubation",
          },
          {
            page: "Research",
            slug: "research",
            route: "/research",
          },
          {
            page: "ADRC",
            slug: "adrc",
            route: "/adrc",
          },
        ],
      },
      {
        page: "Donate",
        slug: "donate",
        route: "/philanthropy/donate",
        cta: true,
      },
    ],
  },
  {
    page: "Research",
    slug: "research",
    route: "/research",
    subroutes: [
      {
        page: "Research Programs",
        slug: "research-programs",
        dropmenu: [
          {
            page: "Molecular Immunology",
            slug: "molecular-immunology",
            route: "/research/research-programs/molecular-immunology",
          },
          {
            page: "Integrated Head and Neck Oncology",
            slug: "integrated-head-and-neck-oncology",
            route:
              "/research/research-programs/integrated-head-and-neck-oncology",
          },
          {
            page: "Neuro Oncology",
            slug: "neuro-oncology",
            route: "/research/research-programs/neuro-oncology",
          },
          {
            page: "Product Research",
            slug: "product-research",
            route: "/research/research-programs/product-research",
          },
        ],
      },
      {
        page: "Facilities",
        slug: "facilities",
        route: "/research/facilities",
      },
      {
        page: "People",
        slug: "people",
        route: "/research/people",
      },
      {
        page: "Academics",
        slug: "academics",
        route: "/research/academics",
      },
      {
        page: "MSMF",
        slug: "msmf",
        dropmenu: [
          {
            page: "Philanthropy",
            slug: "philanthropy",
            route: "/philanthropy",
          },
          {
            page: "Incubation",
            slug: "incubation",
            route: "/incubation",
          },
          {
            page: "Research",
            slug: "research",
            route: "/research",
          },
          {
            page: "ADRC",
            slug: "adrc",
            route: "/adrc",
          },
        ],
      },
      {
        page: "Apply Now",
        slug: "apply-now",
        route: "/research/apply-now",
        cta: true,
      },
    ],
  },
];
