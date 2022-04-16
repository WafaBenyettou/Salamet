if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const DataBase = require('./database')
const userRoutes = require('./routes/users')
const blogRoutes = require('./routes/blogs')
const session = require('express-session')
const { corsOptions } = require('./middleware')
const passport = require('passport')
const User = require('./models/user')
const LocalStrategy = require('passport-local')
const MongoDBStore = require('connect-mongo')

const secret = process.env.SECRET || 'thisshouldbeabettersecret!'

const store = MongoDBStore.create({
    mongoUrl: process.env.DB_URL || 'mongodb://localhost:27017/salamet',
    secret,
    touchAfter: 24 * 60 * 60
})

store.on("error", function (e) {
    console.log("SESSION STORE ERROR", e)
})

const sessionConfig = {
    store,
    name: 'session',
    secret,
    resave: false,//don't save session if unmodified
    saveUninitialized: true,// don't create session until something stored
    cookie: {
        httpOnly: true,
        // secure: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

app.use(session(sessionConfig))
// app.use(cors(corsOptions))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.urlencoded({ extended: true }))
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())




app.use('/', userRoutes)
app.use('/blog', blogRoutes)



// Serve any static files
app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});




const port = process.env.PORT || 5000
app.listen(port, () => console.log('Server Started on port ' + port))