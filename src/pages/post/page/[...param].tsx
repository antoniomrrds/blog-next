import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

import { HomePage } from '../../../containers/HomePage';

import { getAllPosts } from '../../../data/posts/get-all-posts';
import { PostData } from '../../../domain/post/post';

export type PageProps = {
  posts: PostData[];
};

export default function Page({ posts }: PageProps) {
  const router = useRouter();

  if (router.isFallback) return <div>Loading ...</div>;

  if (!posts.length) return <div>Page not Found ...</div>;

  return <HomePage posts={posts} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log(ctx);
  const posts = await getAllPosts(
    'sort=id:desc&pagination[start]=0&pagination[limit]=30',
  );

  return {
    props: { posts },
    revalidate: 600,
  };
};
