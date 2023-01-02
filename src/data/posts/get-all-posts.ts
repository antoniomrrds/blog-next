import { POSTS_URL } from '../../config/app-config';
import { PostData } from '../../domain/post/post';
import { fetchJson } from '../../utils/fetch-json';

export const getAllPosts = async (query = ''): Promise<PostData[]> => {
  const URL = `${POSTS_URL}&${query}`;
  const jsonPosts = await fetchJson<PostData[]>(URL);
  console.log(jsonPosts);
  return jsonPosts;
};
