import mongoose from "mongoose";
import PostMessage from "../models/postmessage.js";

export const getPosts = async (req, res) => {
  try {
    const PostMessages = await PostMessage.find();
    res.status(200).json(PostMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage({
    ...post,
    createdAt: new Date().toISOString(),
  });

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;

  try {
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No post with this id");

    const updatedPost = await PostMessage.findByIdAndUpdate(
      _id,
      { ...post, _id },
      { new: true }
    );

    res.json(updatedPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No post with this id");

    await PostMessage.findByIdAndRemove(_id);

    res.json({ message: "Post deleted!" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const likePost = async (req, res) => {
  const { id: _id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No post with this id");

    const post = await PostMessage.findById(_id);

    const likedPost = await PostMessage.findByIdAndUpdate(
      _id,
      { likeCount: post.likeCount + 1 },
      { new: true }
    );

    res.json(likedPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
