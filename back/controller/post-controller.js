import Post from "../schemab/post-schema.js";

export const createPost = async (request, response) => {
  try {
    const post = await new Post(request.body);
    post.save();

    response.status(200).json("Post saved successfully");
  } catch (error) {
    response.status(500).json(error);
  }
  console.log(request.body);
};

export const getAllPost = async (request, response) => {
  try {
    let posts = await Post.find({});
    response.status(200).json(posts);
  } catch (error) {
    response.status(500).json(error);
  }
};
export const getPost = async (request, response) => {
  try {
    const post = await findById(request.params.id);
    response.status(200).json(post);
  } catch (error) {
    response.status(500).json(error);
  }
};
export const deletePost = async (request, response) => {
  try {
    const post = await Post.findById(request.params.id);

    await post.delete();

    response.status(200).json("post deleted successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};