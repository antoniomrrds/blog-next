import { Date } from '../Date';
import { Container } from './styled';
import Link from 'next/link';

export type PostDetailsProps = {
  date: string;
  author: string;
  category: string;
};

export const PostDetails = ({ author, category, date }: PostDetailsProps) => {
  return (
    <Container>
      Publicado em <Date date={date} /> por {author} |{' '}
      <Link
        as={`/post/page/1/${category.toLowerCase()}`}
        href="/post/page/[...param]"
      >
        {category}
      </Link>
    </Container>
  );
};
