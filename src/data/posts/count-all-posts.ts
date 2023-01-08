import { POSTS_URL } from '../../config/app-config';
import { PaginationData } from '../../domain/post/post';
import { fetchJson } from '../../utils/fetch-json';

export const countAllPosts = async (query = ''): Promise<string> => {
  const URL = `${POSTS_URL}&${query}`;
  const numberOfPosts = await fetchJson<PaginationData>(URL);
  return numberOfPosts.pagination.total;
};
