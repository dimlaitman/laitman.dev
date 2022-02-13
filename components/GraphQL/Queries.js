import { gql } from "@apollo/client";

export const LOAD_POSTS = gql`
  query {
    posts {
      excerpt
      title
      tags
      slug
      content {
        raw
      }
      coverImage {
        url
        id
      }
    }
  }
`;
