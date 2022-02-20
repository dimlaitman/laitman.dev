import { gql } from "@apollo/client";

export const getPostsQuery = {
  query: gql`
    query {
      posts {
        excerpt
        title
        slug
        tag
        coverImage {
          url
        }
      }
    }
  `,
};

export const getPathQuery = {
  query: gql`
    query {
      posts {
        slug
      }
    }
  `,
};

export const getProjectsQuery = {
  query: gql`
    query {
      projects {
        title
        image {
          url
        }
        post {
          raw
        }
        technology
        difficult
        price
      }
    }
  `,
};

export const getAboutmeQuery = {
  query: gql`
    query {
      pages {
        title
        content {
          markdown
          html
          raw
        }
      }
    }
  `,
};
