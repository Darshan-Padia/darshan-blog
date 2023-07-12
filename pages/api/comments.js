import { GraphQLClient, gql } from "graphql-request";


export const config = {
    api: {
      bodyParser: true,
    },
  };
const comments = async(req, res) => {
   
    
    ////console.log('req.body');
    ////console.log(req);
    ////console.log('res');
    ////console.log(res);

    const { name, email, comment, slug } = req.body;

    //  const graphqlAPI = process.env.NEXT_PUBLIC_GRAPCMS_ENDPOINT;
     const graphqlAPI = NEXT_PUBLIC_GRAPCMS_ENDPOINT;

    const graphQLClient = new GraphQLClient(graphqlAPI, {
        headers: {
            authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
        }
    });
    
    const query = gql`
        mutation CreateComment(
            $name: String!
            $email: String!
            $comment: String!
            $slug: String!
        ) {
            createComment(
                data: {
                    name: $name,
                    email: $email,
                    comment: $comment,
                    post: { connect: { slug: $slug } }
                }
            ) {
                id
            }
        }
    `;
  
    // creating dummy data for testing


        
    graphQLClient.request(query, req.body).then((data) => {
        // checking if data is tehre or any error and debugging if not returning data
        ////console.log(data);
        return res.status(200).json(data);
    }).catch((error) => {
        ////console.log(error);
        return res.status(500).json(error);
    });
    //

    // return res.status(200).send(result);


}

// export default async function POST(req){
//     ////console.log(req);
// }
export default comments;

