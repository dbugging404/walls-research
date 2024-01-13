import { gql } from '@apollo/client';

export const CareersQuery = gql`
  query CareersQuery {
    careers {
      id
      position
      location
      qualification
      experience
      slug
      description
      jobDescription
      link
      isActive
    }
  }
`;

export const BlogsPageQuery = gql`
  query BlogsPageQuery($limit: Int!, $offset: Int!) {
    blogsConnection(first: $limit, skip: $offset, orderBy: publishedOn_DESC) {
      Blogs: edges {
        node {
          id
          title
          slug
          excerpt
          published
          coverImage {
            url
          }
          authors {
            id
            name
            role
            photo {
              url
            }
          }
          category
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        pageSize
      }
      aggregate {
        count
      }
    }
  }
`;

export const BlogsQuery = gql`
  query BlogsQuery {
    blogs(orderBy: publishedOn_DESC) {
      id
      title
      slug
      publishedOn
      coverImage {
        url
      }
      authors {
        id
        name
        role
        photo {
          url
        }
      }
      content
      category
    }
  }
`;
