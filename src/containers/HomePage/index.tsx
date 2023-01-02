import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
import { Container } from './styles';
import { PostCard } from '../../components/PostCard';
import { Footer } from '../../components/Footer';

import { PostData } from '../../domain/post/post';

export type HomePageProps = {
  posts: PostData[];
};

export const HomePage = ({ posts }: HomePageProps) => {
  return (
    <>
      <Header />
      <MainContainer>
        <Container>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              cover={
                post.attributes.cover.data?.attributes.formats?.small?.url || ''
              }
              slug={post.attributes.slug}
              title={post.attributes.title}
            />
          ))}
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
};
