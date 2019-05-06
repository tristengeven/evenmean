const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();

mongoose.connect('mongodb+srv://<USERINFOANDPASS>@evencluster0-1hyjx.mongodb.net/test?retryWrites=true')
  .then(() => {
    console.log('Connected to database...');
  })
  .catch((e) => {
    console.log('Connection failed...');
    console.log(e);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.post('/api/posts',(req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    timestamp: req.body.timestamp
  });
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully!'
  });
});

app.get('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'qwertz1',
      title: 'First Server Side Post',
      content: 'Server Content 1'
    },
    {
      id: 'ztrewq2',
      title: 'Second Server Side Post',
      content: 'Server Content 2'
    }
  ];
  res.status(200).json({
    message: 'Posts fetched successfully',
    posts: posts
  });
});

module.exports = app;
