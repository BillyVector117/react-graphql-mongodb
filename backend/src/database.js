import mongoose from "mongoose";
// 82Qq8HCGGh5DSaxp
mongoose.connect('mongodb+srv://XXXXXXXXXX:XXXXXXXXXX@cluster0.hfojr.mongodb.net/XXXXXXXXXX?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(database => console.log('Database connected!'))

    .catch(error => console.log(error))
