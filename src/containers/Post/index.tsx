import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
import { PostData } from '../../domain/post/post';
import { Footer } from '../../components/Footer/index';

export type PostProps = {
  post: PostData;
};

export const Post = ({ post }: PostProps) => {
  return (
    <>
      <Header />
      <MainContainer>
        <h2>{post.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </MainContainer>
      <Footer />
    </>
  );
};
