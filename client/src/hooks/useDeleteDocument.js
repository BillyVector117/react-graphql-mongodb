import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const DELETE_MESSAGE = gql`
  mutation DeleteMessage($id: ID) {
    deleteMessage(id: $id) {
      _id
    }
  }
`
const useDeleteDocument = async (documentID) => {
  const [deleteMessage] = useMutation(DELETE_MESSAGE) // Create and execute mutation
  await deleteMessage({ variables: { documentID } }) // use deleteMessage mutation setting documentID clicked to remove

  return { msg: "success removed!" }
}

export default useDeleteDocument
