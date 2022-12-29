type CommentType = {
  name: string;
  champion: string;
  version: string;
  contents: string;
  createdAt: Date;
};

type CommentsType = CommentType[];

type GetCommentsByChampionNameResponseType = CommentsType;

type PostCommentBodyType = {
  name: string;
  champion: string;
  version: string;
  contents: string;
};
