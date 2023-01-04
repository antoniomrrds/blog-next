import { Container } from './styled';
export type PostCoverProps = {
  alt: string;
  coverUrl: string;
};

export const PostCover = ({ coverUrl, alt }: PostCoverProps) => {
  return <Container src={coverUrl} alt={alt} />;
};
