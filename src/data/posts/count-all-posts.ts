import { POSTS_URL } from '../../config/app-config';
import { fetchJson } from '../../utils/fetch-json';

export const countAllPosts = async (query = ''): Promise<string> => {
  const URL = `${POSTS_URL}/count?${query}`;
  const numberOfPosts = await fetchJson<string>(URL);
  return numberOfPosts;
};
