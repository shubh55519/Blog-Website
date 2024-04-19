const express = require("express");
const { connect, default: mongoose } = require("mongoose");
// const password = '18nngvp0Eq74ihhJ';
const PORT = 3000;
const app = express();
const dbURL = `mongodb://localhost:27017/blogs`;

const blogRouter = require('./routes/blogRouter');

mongoose.connect(dbURL)
.then(()=>app.listen(PORT,
     ()=>console.log("listening...........")
    ))
.catch(err=>console.log(err.message));

app.use(express.json());

app.use('/api/blogs', blogRouter)