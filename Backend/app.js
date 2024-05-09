const express = require("express");
const { connect, default: mongoose } = require("mongoose");
const cors = require('cors');
// const password = '18nngvp0Eq74ihhJ';
const PORT = 3000;
const app = express();
const dbURL = `mongodb://localhost:27017/blogs`;

const bloglistRouter = require('./routes/bloglistRouter');
const blogRouter = require('./routes/blogRouter');
const userAccessRouter = require('./routes/userAccessRouter');
const commentRouter = require('./routes/commentRouter');
const favoriteRouter = require('./routes/favoriteRouter');
const categoryRouter = require('./routes/categoryRouter');
const adminRouter = require('./routes/adminRouter');
const authRouter = require('./routes/authRouter');
const { requireAuth, adminAuth } = require("./middleware/Authmiddleware");

mongoose.connect(dbURL)
.then(()=>app.listen(PORT,
     ()=>console.log("listening...........")
    ))
.catch(err=>console.log(err.message));

app.use(express.json());
app.use(cors());
// app.get('/', (req, res) => {
//     res.send('Welcome to the API');
//   });
// app.get('*', checkUser)
app.use('/api/blog/all', bloglistRouter) // protected for anonymus fom db and all approved by admin for authenticated user
app.use('/api/blog',requireAuth, blogRouter) // for auth user

app.use('/api/user/access',requireAuth, userAccessRouter);
app.use('/api/comments',requireAuth, commentRouter);
app.use('/api/favorites',requireAuth, favoriteRouter);
app.use('/api/category', categoryRouter);
app.use('/api/admin/',requireAuth, adminAuth, adminRouter);
app.use('/api/auth',requireAuth, authRouter);