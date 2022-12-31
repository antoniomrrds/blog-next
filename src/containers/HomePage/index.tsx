import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
import { PostData } from '../../domain/post/post';
import { Container } from './styles';

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
            <h2 key={post.id}>{post.attributes.title}</h2>
          ))}
        </Container>
      </MainContainer>
    </>
  );
};
