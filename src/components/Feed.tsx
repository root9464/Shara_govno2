import { Post } from '../App';

type FeedProps = {
  posts: Post[];
};

export const Feed = ({ posts }: FeedProps) => (
  <div className='flex flex-col gap-5'>
    {posts.map((post) => (
      <div key={post.title} className='flex flex-col gap-2.5 rounded-lg bg-blue-600/15 p-2 text-blue-600'>
        <div className='rounded-sm bg-white p-2'>
          <h1 className='text-2xl font-bold'>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      </div>
    ))}
  </div>
);
