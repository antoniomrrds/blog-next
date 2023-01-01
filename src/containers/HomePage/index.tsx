import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
import { PostCard } from '../../components/PostCard';
import { PostData } from '../../domain/post/post';
import { Container } from './styles';

export type HomePageProps = {
  posts: PostData[];
};

export const HomePage = ({ posts }: HomePageProps) => {
  console.log(posts);
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
    </>
  );
};
