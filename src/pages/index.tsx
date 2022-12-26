import { GetStaticProps } from 'next';
import { PostData } from '../domain/post/post';

const getPosts = async (): Promise<PostData[]> => {
  const posts = await fetch('http://localhost:1337/api/posts');
  const jsonPosts = await posts.json();
  const { data } = jsonPosts;

  return data;
};

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  return (
    <div>
      {posts.map((post) => (
        <h2 key={post.id}>{post.id}</h2>
      ))}
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
};
