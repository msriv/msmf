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
        page: "Facilities",
        slug: "facilities",
        route: "/incubation/facilities",
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
            dropmenu: [
              {
                page: "About",
                slug: "molecular-immunology",
                route: "/research/research-programs/molecular-immunology",
              },
              {
                page: "Principal Investigator",
                slug: "molecular-immunology-prinicipal-investigator",
                route:
                  "/research/research-programs/molecular-immunology#prinicipal-investigator",
              },
              {
                page: "Projects",
                slug: "molecular-immunology-projects",
                route:
                  "/research/research-programs/molecular-immunology#projects",
              },
              {
                page: "Funds",
                slug: "molecular-immunology-funds",
                route: "/research/research-programs/molecular-immunology#funds",
              },
              {
                page: "Patents",
                slug: "molecular-immunology-patents",
                route:
                  "/research/research-programs/molecular-immunology#patents",
              },
            ],
          },
          {
            page: "Integrated Head and Neck Oncology",
            slug: "integrated-head-and-neck-oncology",
            route:
              "/research/research-programs/integrated-head-and-neck-oncology",
            dropmenu: [
              {
                page: "About",
                slug: "integrated-head-and-neck-oncology",
                route:
                  "/research/research-programs/integrated-head-and-neck-oncology",
              },
              {
                page: "Principal Investigator",
                slug: "integrated-head-and-neck-oncology-prinicipal-investigator",
                route:
                  "/research/research-programs/integrated-head-and-neck-oncology#prinicipal-investigator",
              },
              {
                page: "Adjunct Research Scientists",
                slug: "integrated-head-and-neck-oncology-adjunct-research-scientists",
                route:
                  "/research/research-programs/integrated-head-and-neck-oncology#adjunct-research-scientists",
              },
              {
                page: "Projects",
                slug: "integrated-head-and-neck-oncology-projects",
                route:
                  "/research/research-programs/integrated-head-and-neck-oncology#projects",
              },
              {
                page: "Funds",
                slug: "integrated-head-and-neck-oncology-funds",
                route:
                  "/research/research-programs/integrated-head-and-neck-oncology#funds",
              },
              {
                page: "Patents",
                slug: "integrated-head-and-neck-oncology-patents",
                route:
                  "/research/research-programs/integrated-head-and-neck-oncology#patents",
              },
              {
                page: "Publications",
                slug: "integrated-head-and-neck-oncology-publications",
                route:
                  "/research/research-programs/integrated-head-and-neck-oncology#publications",
              },
            ],
          },
          {
            page: "Neuro Oncology",
            slug: "neuro-oncology",
            route: "/research/research-programs/neuro-oncology",
            dropmenu: [
              {
                page: "About",
                slug: "neuro-oncology",
                route: "/research/research-programs/neuro-oncology",
              },
              {
                page: "Principal Investigator",
                slug: "neuro-oncology-prinicipal-investigator",
                route:
                  "/research/research-programs/neuro-oncology#prinicipal-investigator",
              },
              {
                page: "Translations",
                slug: "neuro-oncology-translations",
                route:
                  "/research/research-programs/neuro-oncology#translations",
              },
              {
                page: "Projects",
                slug: "neuro-oncology-projects",
                route: "/research/research-programs/neuro-oncology#projects",
              },
            ],
          },
          {
            page: "Product Research",
            slug: "product-research",
            route: "/research/research-programs/product-research",
            dropmenu: [
              {
                page: "About",
                slug: "product-research",
                route: "/research/research-programs/product-research",
              },
              {
                page: "Principal Investigator",
                slug: "product-research-prinicipal-investigator",
                route:
                  "/research/research-programs/product-research#prinicipal-investigator",
              },
              {
                page: "Projects",
                slug: "product-research-projects",
                route: "/research/research-programs/product-research#projects",
              },
              {
                page: "Funds",
                slug: "product-research-funds",
                route: "/research/research-programs/product-research#funds",
              },
              {
                page: "Patents",
                slug: "product-research-patents",
                route: "/research/research-programs/product-research#patents",
              },
            ],
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
