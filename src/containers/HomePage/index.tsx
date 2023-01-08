import Head from 'next/head';

import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
import { AllPostsLinks, Category, Container } from './styles';
import { PostCard } from '../../components/PostCard';
import { Footer } from '../../components/Footer';

import { SITE_NAME } from '../../config/app-config';
import { PostData } from '../../domain/post/post';
import { PaginationData } from '../../domain/post/pagination';
import { Pagination } from '../../components/Pagination';
import Link from 'next/link';

export type HomePageProps = {
  posts: PostData[];
  category?: string;
  pagination?: PaginationData;
};

export const HomePage = ({ posts, category, pagination }: HomePageProps) => {
  const categoryTitle = category ? `${category} - ${SITE_NAME}` : SITE_NAME;
  const paginationTitle =
    (pagination?.nextPage && ` - Page ${pagination?.nextPage - 1}`) || '';
  return (
    <>
      <Head>
        <title>{`${categoryTitle} ${paginationTitle}`}</title>
        <meta name="description" content="this is my tech blog" />
      </Head>
      <Header />
      {category && <Category>Category: {category}</Category>}
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
        <Pagination {...pagination} />
        {!pagination?.nextPage && (
          <Link href="/post/page/[...param]" as="/post/page/1" passHref>
            <AllPostsLinks> See all Posts </AllPostsLinks>
          </Link>
        )}
      </MainContainer>
      <Footer />
    </>
  );
};
