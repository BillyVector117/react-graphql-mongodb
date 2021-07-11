import React from 'react'
// Import Apollo graph to define / make query
import { gql } from 'apollo-boost'
// Allows to use a query
import { useQuery, useMutation } from '@apollo/react-hooks'
const GET_MESSAGES = gql`
    {
  messages {
    _id
    title
    content
    author
  }
}

`;
const DELETE_MESSAGE = gql`
  mutation DeleteMessage($id: ID!) {
    deleteMessage(id: $id) {
      _id
    }
  }

`
const MessageList = () => {

  // data returns: messages.messages[0].properties...
  const { loading, error, data } = useQuery(GET_MESSAGES) // Call to GraphQL-API 
  const [deleteMessage] = useMutation(DELETE_MESSAGE) // Create and execute mutation
  if (loading) return <p>Loading messages...</p>
  if (error) return <p>Something went wrong :(</p>
  const handleDeletion = async (documentID) => {
    console.log(documentID)
    await deleteMessage({ variables: { id: documentID } }) // use deleteMessage mutation setting documentID clicked to remove
    window.location.href = "/"
  }
  console.log(data)
  return (
    <div>
      <h2>Message list</h2>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {
            data.messages.map((item) => {
              return <div key={item._id} className="card m-2 d-flex">
                <div className="card-body d-block ">
                  <button className="btn btn-danger btn-small float-end" title="delete!" onClick={() => handleDeletion(item._id)}>X</button>
                  <h4>{item.title} </h4>
                  <p>{item.content} </p>
                  <p>{item.author} </p>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default MessageList

/*
GET DATA IN GraphQL manager
query GET_MESSAGES{
  messages {
    _id
    title
    content
    author
  }
}
# Write your query or mutation here
mutation {
  createMessage (
    title:"Message 1", content:"Lorem Content 1",author:"Billy"
  ) {
    _id,
    title,
    content,
    author
  }
}
*/