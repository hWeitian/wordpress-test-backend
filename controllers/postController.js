const axios = require("axios");
const db = require("../db/models/index");
require("dotenv").config();

const { Post } = db;

async function getAll(req, res) {
  let config = {
    headers: {
      Authorization: `Basic ${process.env.WORDPRESS_KEY}`,
    },
  };
  try {
    const wordPressPost = await axios.get(
      "https://hweitian.com/wp-json/wp/v2/posts",
      config
    );
    return res.json(wordPressPost.data);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

async function updatePost(req, res) {
  const postId = req.params.id;
  const newPost = req.body;
  let config = {
    headers: {
      Authorization: `Basic ${process.env.WORDPRESS_KEY}`,
    },
  };
  const url = `https://hweitian.com/wp-json/wp/v2/pages/${postId}`;

  try {
    const response = await axios.post(url, newPost, config);
    const wordPressPost = await axios.get(
      "https://hweitian.com/wp-json/wp/v2/posts",
      config
    );
    console.log(response.data["id"]);
    return res.json(wordPressPost.data);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

async function addOnePost(req, res) {
  const newPost = req.body;
  console.log(newPost);
  let config = {
    headers: {
      Authorization: `Basic ${process.env.WORDPRESS_KEY}`,
    },
  };
  try {
    await axios.post(
      "https://hweitian.com/wp-json/wp/v2/posts",
      newPost,
      config
    );
    const wordPressPost = await axios.get(
      "https://hweitian.com/wp-json/wp/v2/posts",
      config
    );
    return res.json(wordPressPost.data);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

module.exports = { getAll, addOnePost, updatePost };
