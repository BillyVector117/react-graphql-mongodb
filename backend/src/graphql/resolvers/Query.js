import Message from "../../models/Message.";
const Query = {
    // Execution of each query
    ping() {
        return "pong!"
    },
    
    // When API calls for messages it returns a mongoDB query RESULT (all documents)
    messages: async () => {
        return await Message.find() // Get all messages
    }
}


export default Query;