const Post = require('../models/post');
const slugify = require('slugify');
const post = require('../models/post');


exports.create = (req, res) => {
    console.log(req.body);
    const { title, content, user, field } = req.body
    const slug = slugify(title)
    //validate

    switch (true) {
        case !title:
            return res.status(400).json({ error: 'Title is required' })
            break;
        case !content:
            return res.status(400).json({ error: 'Content is required' })
            break;
      
    }


    //create post

    Post.create({ title, content, user, slug, field }, (err, post) => {
        if (err) {
            console.log(err)
            res.status(400).json({ error: 'Duplicate post.Try another title' })
        }

        res.json(post);
    })

};


//All POst // .limit(2) // (This limits the posts on the home page)

exports.list = (req, res) => {
    Post.find({})
    .sort({createdAt:-1}) 
    .exec((err, posts) => {
        if (err) console.log(err)
        res.json(posts);

    });
};


//Single Post

exports.read = (req, res) => {
    const {slug} = req.params
    console.log(req.params.slug)
    Post.findOne({slug}).exec((err, post) => {
        if (err) console.log(err)
        res.json(post);

    });
};

//Search title by words
exports.list = (req, res) => {
  var title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Post.find(condition)
  .sort({createdAt:-1}) 

    .then(data => {
      res.send(data);
    }) 
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving posts."
      });
    });
};


//Search Posts by id
