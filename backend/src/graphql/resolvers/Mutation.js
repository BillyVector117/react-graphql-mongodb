import Message from "../../models/Message.";

const Mutation = {
    // When API calls for createMessage it receives three params and create a new mongoDB document, then save it.
    createMessage: async (_, { title, content, author }) => {
        const newMessage = new Message({ title, content, author })
        return await newMessage.save()
    },
    deleteMessage: async (_, { id }) => {
        return await Message.findByIdAndDelete(id)
    },
    pingTesting: (_, { result }) => {
        return `ping - ${result}`
    }
};

export default Mutation;