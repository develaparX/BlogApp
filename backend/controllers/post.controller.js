import ImageKit from "imagekit";
import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const getPosts = async (req, res) => {
  const posts = await Post.find();
  res.status(200).json(posts);
};

export const getPost = async (req, res) => {
  const slug = req.params.slug;
  const post = await Post.findOne({ slug: slug });
  res.status(200).json(post);
};

export const createPost = async (req, res) => {
  try {
    const clerkUserId = req.auth.userId;

    console.log(req.headers);

    if (!clerkUserId) {
      return res.status(401).json("Not authenticated");
    }

    const user = await User.findOne({ clerkUserId });

    if (!user) {
      return res.status(404).json("User not found");
    }

    let slug = req.body.title.replace(/ /g, "-").toLowerCase();

    let existingPost = await Post.findOne({ slug });

    let counter = 2;

    while (existingPost) {
      slug = `${slug}-${counter}`;
      existingPost = await Post.findOne({ slug });
      counter++;
    }

    const newPost = new Post({ user: user._id, slug, ...req.body });

    const post = await newPost.save();
    res.status(200).json(post);
  } catch (error) {
    console.log("error create:", error);
  }
};

export const deletePost = async (req, res) => {
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) {
    return res.status(401).json("Not authenticated");
  }

  const user = await User.findOne({ clerkUserId });

  if (!user) {
    return res.status(404).json("User not found");
  }

  const deletedPost = await Post.findOneAndDelete({
    _id: req.params.id,
    user: user._id,
  });

  if (!deletedPost) {
    return res.status(403).json("You can delete only your post!");
  }

  res.status(200).json("Post has been deleted!");
};

const imagekit = new ImageKit({
  urlEndpoint: process.env.IK_URL_ENDPOINT,
  publicKey: process.env.IK_PUBLIC_KEY,
  privateKey: process.env.IK_PRIVATE_KEY,
});

export const uploadAuth = async (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
};
