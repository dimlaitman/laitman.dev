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
        hours
        price
        link
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
          raw
        }
        slug
        seo {
          title
          description
          keywords
          image {
            url
          }
        }
      }
    }
  `,
};
