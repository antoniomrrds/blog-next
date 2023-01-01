import { POSTS_URL } from '../../config/app-config';
import { PostData } from '../../domain/post/post';
import { fetchJson } from '../../utils/fetch-json';

export const getAllPosts = async (): Promise<PostData[]> => {
  const jsonPosts = await fetchJson<PostData[]>(POSTS_URL);
  console.log(jsonPosts);
  return jsonPosts;
};
