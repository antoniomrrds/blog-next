import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
import { PostData } from '../../domain/post/post';
import { Footer } from '../../components/Footer/index';
import { Heading } from '../../components/Heading';

export type PostProps = {
  post: PostData;
};

export const Post = ({ post }: PostProps) => {
  return (
    <>
      <Header />
      <MainContainer>
        <Heading>{post.attributes.title}</Heading>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </MainContainer>
      <Footer />
    </>
  );
};
