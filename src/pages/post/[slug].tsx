import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Error from 'next/error';

import { Post } from '../../containers/Post';

import { countAllPosts } from '../../data/posts/count-all-posts';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { getPosts } from '../../data/posts/get-post';
import { PostData } from '../../domain/post/post';

export type DynamicPostProps = {
  post: PostData;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div> The page is still loading,Please wait...</div>;
  }

  if (!post?.attributes?.title) {
    return <Error statusCode={404} />;
  }
  return <Post post={post} />;
};

export default DynamicPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPosts();
  const posts = await getAllPosts(`_limit=${numberOfPosts}`);
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.attributes.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getPosts(ctx.params.slug);
  const post = posts.length > 0 ? posts[0] : {};
  return {
    props: {
      post: post,
    },
  };
};
