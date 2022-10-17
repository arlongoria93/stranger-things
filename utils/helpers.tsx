export const fetchAllPosts = async () => {
  const res = await fetch(import.meta.env.VITE_API_URL + "/posts");
  const posts = await res.json();
  return posts;
};
