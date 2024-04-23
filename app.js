// console.log('app');
const express = require("express");
const { connect, default: mongoose } = require("mongoose");

// const password = '18nngvp0Eq74ihhJ';
const PORT = 3000;
const app = express();
const dbURL = `mongodb://localhost:27017/blogs`;

const blogRouter = require('./routes/blogRouter');
const commentRouter = require('./routes/commentRouter');
const favoriteRouter = require('./routes/favoriteRouter');
// const categoryRouter = require('./routes/categoryRouter');
const adminRouter = require('./routes/adminRouter');
const authRouter = require('./routes/authRouter');
const { requireAuth } = require("./middleware/Authmiddleware");

mongoose.connect(dbURL)
.then(()=>app.listen(PORT,
     ()=>console.log("listening...........")
    ))
.catch(err=>console.log(err.message));

app.use(express.json());

app.use('/api/blogs',requireAuth, blogRouter) // protected for anonymus and all approved by admin for authenticated user
app.use('/api/comments', commentRouter) 
app.use('/api/favorites', favoriteRouter)
// app.use('/api/category', categoryRouter)
app.use('/api/admin/',requireAuth, adminRouter)
app.use('/api/auth',requireAuth, authRouter)