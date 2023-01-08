export type PostID = number;

export type PostAuthor = {
  data: {
    id: PostID;
    attributes: {
      name: string;
      created_at: string;
      updated_at: string;
      publishedAt: string;
    };
  };
};

export type PostCategory = {
  data: {
    id: PostID;
    attributes: {
      name: string;
      created_at: string;
      updated_at: string;
      publishedAt: string;
    };
  };
};

export type PostCreatedBy = {
  id: PostID;
  firstname: string;
  lastname: string;
  username: null;
};

export type PostCoverFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

export type PostCover = PostCoverFormat & {
  id: PostID;
  alternativeText: string;
  caption: string;
  previewUrl: null;
  provider: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
  formats: {
    thumbnail: PostCoverFormat;
    small: PostCoverFormat;
    medium: PostCoverFormat;
    large: PostCoverFormat;
  };
};

export type DataCover = {
  id: PostID;
  data: {
    attributes: PostCover;
  };
};
export type PaginationData = {
  pagination: { start: string; limit: string; total: string };
};

export type PostData = {
  id: PostID;
  attributes: {
    title: string;
    content: string;
    slug: string;
    author: PostAuthor;
    category: PostCategory;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    cover: DataCover;
  };
  content: string;
};
