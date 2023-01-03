import { POSTS_URL } from '../../config/app-config';
import { PostData } from '../../domain/post/post';
import { fetchJson } from '../../utils/fetch-json';
import { markdownToHtml } from '../../utils/markdown-to-html';

export const getPosts = async (
  slug: string | string[],
): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const URL = `${POSTS_URL}?slug=${slugString}`;
  const jsonPosts = await fetchJson<PostData[]>(URL);
  const content = await markdownToHtml(jsonPosts[0].attributes.content);
  const finalContent = { ...jsonPosts[0], content };
  return [finalContent];
};
