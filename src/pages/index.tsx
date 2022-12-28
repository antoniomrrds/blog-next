import { GetStaticProps } from 'next';
import { HomePage } from '../containers/HomePage';
import { getAllPosts } from '../data/posts/get-all-posts';
import { PostData } from '../domain/post/post';

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  return <HomePage posts={posts} />;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
};
