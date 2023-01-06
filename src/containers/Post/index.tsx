import Head from 'next/head';

import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
import { Heading } from '../../components/Heading';
import { PostCover } from '../../components/PostCover';
import { PostDetails } from '../../components/PostDetails';
import { PostContainer } from '../../components/PostContainer';
import { Comments } from '../../components/Comments';
import { Footer } from '../../components/Footer/index';

import { removeHtml } from '../../utils/remove-html';
import { PostData } from '../../domain/post/post';
import { SITE_NAME } from '../../config/app-config';

export type PostProps = {
  post: PostData;
};

export const Post = ({ post }: PostProps) => {
  const message = `${post.attributes.title} - ${SITE_NAME}`;
  return (
    <>
      <Head>
        <title>{message}</title>
        <meta
          name="description"
          content={removeHtml(post.content).slice(0, 150)}
        />
      </Head>
      <Header />
      <MainContainer>
        <Heading>{post.attributes.title}</Heading>
        <PostCover
          coverUrl={post.attributes.cover.data.attributes.formats.large.url}
          alt={post.attributes.title}
        />
        <PostDetails
          author={post.attributes.author.data.attributes.name}
          category={post.attributes.category.data.attributes.name}
          date={post.attributes.createdAt}
        />
        <PostContainer content={post.content} />
        <Comments title={post.attributes.title} slug={post.attributes.slug} />
      </MainContainer>
      <Footer />
    </>
  );
};
