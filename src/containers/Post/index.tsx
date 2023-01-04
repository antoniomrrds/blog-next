import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
import { Heading } from '../../components/Heading';
import { PostCover } from '../../components/PostCover';
import { PostDetails } from '../../components/PostDetails';
import { Footer } from '../../components/Footer/index';

import { PostData } from '../../domain/post/post';
import { PostContainer } from '../../components/PostContainer';

export type PostProps = {
  post: PostData;
};

export const Post = ({ post }: PostProps) => {
  console.log(post.attributes.createdAt);
  return (
    <>
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
      </MainContainer>
      <Footer />
    </>
  );
};
