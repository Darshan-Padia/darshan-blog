const {request, GraphQLClient} = require('graphql-request');
const {gql} = require('graphql-request');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// listen to POST requests to port 4000
app.listen(3001,'localhost')
app.on('listening', function () {
    ////console.log('Express server started on port %s at %s', app.address().port, app.address().address);
});


app.post("/api/comments", async (req, res) => {
// const comments = async (req, res) => {
    // const graphqlAPI = process.env.NEXT_PUBLIC_GRAPCMS_ENDPOINT;
    const graphqlAPI = NEXT_PUBLIC_GRAPCMS_ENDPOINT;

    const graphQLClient = new GraphQLClient(graphqlAPI, {
        headers: {
            authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
        },
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
                    name: $name
                    email: $email
                    comment: $comment
                    post: { connect: { slug: $slug } }
                }
            ) {
                id
            }
        }
    `;
    const result = await graphQLClient.request(query, req.body);
    res.status(200).json({ result });
});

// export default comments;

