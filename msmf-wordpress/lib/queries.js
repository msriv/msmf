import { gql } from "@apollo/client";


export const GET_FORM = gql`
query Form($formId: ID!) {
  form(id: $formId, idType: DATABASE_ID) {
    title
    fields {
      nodes {
        fieldId
        label
        type
        ... on ListselectField {
          options {
            value
            label
          }
        }
      }
    }
  }
}
`

export const ALL_POSTS = gql`
  query AllPosts {
    posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
      edges {
        node {
          title
          excerpt
          slug
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          author {
            node {
              name
              firstName
              lastName
              avatar {
                url
              }
            }
          }
        }
      }
    }
  }
`;