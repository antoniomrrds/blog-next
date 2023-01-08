import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

import { HomePage } from '../../../containers/HomePage';

import { getAllPosts } from '../../../data/posts/get-all-posts';
import { PaginationData } from '../../../domain/post/pagination';
import { PostData } from '../../../domain/post/post';
import { countAllPosts } from '../../../data/posts/count-all-posts';

export type PageProps = {
  posts: PostData[];
  category?: string;
  pagination: PaginationData;
};

export default function Page({ posts, category, pagination }: PageProps) {
  const router = useRouter();

  if (router.isFallback) return <div>Loading ...</div>;

  if (!posts.length) return <div>Page not Found ...</div>;

  return <HomePage posts={posts} category={category} pagination={pagination} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const page = Number(ctx.params.param[0]);
  const category = ctx.params.param[1] || '';
  const postPerPage = 1;
  const startFrom = (page - 1) * postPerPage;
  const nextPage = page + 1;
  const previousPage = page - 1;

  const categoryQuery = category
    ? `&filters[category][name][$contains]=${category}`
    : '';

  const urlQuery = `sort=id:desc&pagination[start]=${startFrom}&pagination[limit]=${postPerPage}${categoryQuery}`;

  const posts = await getAllPosts(urlQuery);

  const numberOfPosts = Number(await countAllPosts(categoryQuery));

  const pagination: PaginationData = {
    nextPage,
    numberOfPosts,
    postPerPage,
    previousPage,
    category,
  };

  return {
    props: { posts, pagination, category },
    revalidate: 600,
  };
};
