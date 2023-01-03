import { POSTS_URL } from '../../config/app-config';
import { PostData } from '../../domain/post/post';
import { fetchJson } from '../../utils/fetch-json';

export const getPosts = async (
  slug: string | string[],
): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const URL = `${POSTS_URL}?slug=${slugString}`;
  const jsonPosts = await fetchJson<PostData[]>(URL);
  return jsonPosts;
};
