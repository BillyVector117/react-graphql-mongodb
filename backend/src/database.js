import mongoose from "mongoose";
// 82Qq8HCGGh5DSaxp
mongoose.connect('mongodb+srv://billy:ZyYmUSKSGJkaQKTp@cluster0.hfojr.mongodb.net/reactGraphQLMongo?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(database => console.log('Database connected!'))

    .catch(error => console.log(error))
