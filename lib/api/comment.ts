import axios from '@lib/api/index';

export const getCommentsByChampionName = async (championName: string) => {
  const response = await axios.get<GetCommentsByChampionNameResponseType>(
    `/comments?champion=${championName}`,
  );
  return response.data;
};

export const postComment = async (body: PostCommentBodyType) => {
  const response = await axios.post('/comments', body);
  return response.data;
};
