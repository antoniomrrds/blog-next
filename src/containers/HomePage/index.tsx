import Head from 'next/head';

import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
import { Container } from './styles';
import { PostCard } from '../../components/PostCard';
import { Footer } from '../../components/Footer';

import { PostData } from '../../domain/post/post';
import { SITE_NAME } from '../../config/app-config';

export type HomePageProps = {
  posts: PostData[];
};

export const HomePage = ({ posts }: HomePageProps) => {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content="this is my tech blog" />
      </Head>
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
