import { useState } from 'react';
import { Feed } from './components/Feed';
import { Header } from './components/Header';
import { Modal } from './components/Modal';

export type Post = {
  title: string;
  body: string;
};

export default function App() {
  const [createPost, setCreatePost] = useState<Post[] | null>(null);

  console.log(createPost);

  return (
    <div className='relative flex h-full w-full flex-col gap-5'>
      <Header />
      <Feed posts={createPost ?? []} />

      <Modal onCreatePost={setCreatePost} />
    </div>
  );
}
