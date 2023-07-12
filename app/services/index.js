import exp from "constants";
import { request, gql } from "graphql-request";
import { get } from "http";
import useSWR from "swr";

// const graphqlAPI = process.env.NEXT_PUBLIC_GRAPCMS_ENDPOINT;
const graphqlAPI = NEXT_PUBLIC_GRAPCMS_ENDPOINT;


// wrting query to know the total number of posts
export const getTotalPosts = async (categories) => {

  // getting total posts categorywise and if there are no categories selected then getting all posts
  if (categories.length > 0) {
    const query = gql`
      query MyQuery($categories: [String!]) {
        postsConnection(where: { categories_some: { slug_in: $categories } }) {
          aggregate {
            count
          }
        }
      }
    `;
    const results = await request(graphqlAPI, query, { categories });
    ////console.log(results.postsConnection.aggregate.count, 'postConnection counts');
    return results.postsConnection.aggregate.count;
  }else{
    const query = gql`
      query MyQuery {
        postsConnection {
          aggregate {
            count
          }
        }
      }
    `;
    const results = await request(graphqlAPI, query);
    ////console.log(results.postsConnection.aggregate.count, 'postConnection counts');
    return results.postsConnection.aggregate.count;
  }


    // const query = gql`
    //     query ToatalPosts {
    //         postsConnection {
    //             aggregate {
    //                 count
    //             }
    //         }
    //     }
    // `;
    // const results = await request(graphqlAPI, query);
    // ////console.log(
    //     results.postsConnection.aggregate.count,
    //     "postConnection counts"
    // );
    // return results.postsConnection.aggregate.count;
};

export const getPosts = async (articlesPerPage, offset, categories) => {
    // getting posts categorywise and if there are no categories selected then getting all posts
    if (categories.length > 0) {
      // ////console.log(categories,'in getPostssssss-------------sssss');
      ////console.log(articlesPerPage, offset, categories,'in getPostssssss-------------sssss');
        const query = gql`
            query MyQuery(
                $articlesPerPage: Int!
                $offset: Int!
                $categories: [String!]
            ) {
                postsConnection(
                    first: $articlesPerPage
                    skip: $offset
                    orderBy: createdAt_DESC
                    where: { categories_some: { slug_in: $categories } }
                ) {
                    edges {
                        node {
                            author {
                                bio
                                name
                                id
                                photo {
                                    url
                                }
                            }
                            createdAt
                            slug
                            titile
                            excerpt
                            featuredImage {
                                url
                            }
                            categories {
                                name
                            }
                        }
                    }
                }
            }
        `;
        const results = await request(graphqlAPI, query, {
            articlesPerPage,
            offset,
            categories,
        });
        return results.postsConnection.edges;
    } else {
        const query = gql`
            query MyQuery($articlesPerPage: Int!, $offset: Int!) {
                postsConnection(
                    first: $articlesPerPage
                    skip: $offset
                    orderBy: createdAt_DESC
                ) {
                    edges {
                        node {
                            author {
                                bio
                                name
                                id
                                photo {
                                    url
                                }
                            }
                            createdAt
                            slug
                            titile
                            excerpt
                            featuredImage {
                                url
                            }
                            categories {
                                name
                            }
                        }
                    }
                }
            }
        `;
        const results = await request(graphqlAPI, query, {
            articlesPerPage,
            offset,
        });
        return results.postsConnection.edges;
    }
};

export const getPostDetail = async (slug) => {
    const query = gql`
        query GetPostDetail($slug: String!) {
            posts(where: { slug: $slug }) {
                author {
                    bio
                    name
                    id
                    photo {
                        url
                    }
                }
                createdAt
                slug
                titile
                excerpt
                featuredImage {
                    url
                }
                categories {
                    name
                    slug
                }
                content {
                    raw
                }
            }
        }
    `;
    const results = await request(graphqlAPI, query, { slug });
    return results.posts[0];
};

export const getRecentPosts = async () => {
    const query = gql`
    query getPostDetials() {

      posts(
        orderBy : createdAt_ASC
        last : 3
      ) {
        titile
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
    const results = await request(graphqlAPI, query);
    return results.posts;
};

export const getSimilarPosts = async (categories, slug) => {
    const query = gql`
        query GetPostDetails($slug: String!, $categories: [String!]) {
            posts(
                where: {
                    slug_not: $slug
                    AND: { categories_some: { slug_in: $categories } }
                }
                last: 3
            ) {
                author {
                    name
                    photo {
                        url
                    }
                }
                titile
                featuredImage {
                    url
                }
                createdAt
                slug
            }
        }
    `;
    const result = await request(graphqlAPI, query, { slug, categories });

    return result.posts;
};

export const getCategories = async () => {
    const query = gql`
        query getCategories {
            categories(first: 100) {
                name
                slug
            }
        }
    `;
    const results = await request(graphqlAPI, query);
    return results.categories;
};

export const submitComment = async (obj) => {
    if (Object.keys(obj).length === 0) {
        ////console.log("empty");
        return;
    }

    ////console.log("obj");
    ////console.log(obj);

    const result = await fetch("/api/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    });

    // ////console.log(result);
    return result.json();
};

export const getComments = async (slug) => {
    ////console.log("in index getComents");
    ////console.log("slug", slug);
    const query = gql`
        query getcomments($slug: String!) {
            comments(where: { post: { slug: $slug } }) {
                name
                comment
                createdAt
            }
        }
    `;
    const slugObj = { slug };
    // ////console.log('slugObj', slugObj);
    const results = await request(graphqlAPI, query, slugObj);

    ////console.log("results");
    ////console.log(results.comments);
    return results.comments;
};
