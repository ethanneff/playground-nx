import { useQuery } from 'react-query';

export const User = () => undefined;

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type UsePosts = {
  isLoading: boolean;
  error: Error | null;
  data: Post[] | undefined;
};

export const usePosts = (): UsePosts => {
  const { isLoading, error, data } = useQuery<Post[], Error>('posts', () =>
    fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
      res.json()
    )
  );

  return { isLoading, error, data };
};
