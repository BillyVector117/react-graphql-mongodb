import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

// Creating mutation
const CREATE_MESSAGE = gql`
    mutation CreateMessage($title: String!, $content: String!, $author: String!) {
        createMessage(title: $title, content: $content, author: $author) {
            _id
        }
    }
`

const MessageForm = () => {
    // 
    const initialData = {
        author: "",
        title: "",
        content: "",
    }
    const [createMessage] = useMutation(CREATE_MESSAGE) // Create mutation
    const [formData, setFormData] = useState(initialData)
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        await createMessage({ variables: { ...formData } }) // use createMessage mutation setting formData values as: author: author...
        window.location.href = "/"
        console.log(formData.title)
    }
    return (
        <div className="row">

            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="">
                            <div className="form-group m-2">
                                <input type="text" name="author" onChange={handleChange} value={formData.author} placeholder=" Author" className="form-control" />
                            </div>
                            <div className="form-group m-2">
                                <input type="text" name="title" onChange={handleChange} value={formData.title} placeholder=" Title..." className="form-control" />
                            </div>
                            <div className="form-group m-2">
                                <textarea className="form-control" name="content" onChange={handleChange} value={formData.content} placeholder=" Content..."></textarea>
                            </div>
                            <div className="form-group d-flex justify-content-center align-content-center">

                                <button className="btn btn-success w-75 m-2">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageForm
