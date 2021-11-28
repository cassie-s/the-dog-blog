const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 3001;
const db = require('./config/connection');

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static("./public/images"));


// get dog database

// app.get('api/dogs', (req, res) => {
//   const sql = 'SELECT * FROM dogs';
//   db.query(sql, (err, rows) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: 'connected',
//       data: rows
//     });
//   });
// });

// rendering images

// app.get("/static", (req, res) => {
//     res.render("static");
// });

// app.get("/dynamic", (req, res) => {
//     imageList = [];
//     imageList.push({ src: "images/Dog1.jpeg", name: "dog1" });
//     imageList.push({ src: "images/Dog2.jpeg", name: "dog2" });
//     imageList.push({ src: "images/Dog3.jpeg", name: "dog3" });
//     res.render("dynamic", { imageList: imageList });
// })

// app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
