'use client';
import Link from 'next/link';
import useSWR from 'swr';
import { getAllPosts } from '../services/getPosts';
import Loading from './loading';

export const Posts = () => {
  const { data: posts, isLoading } = useSWR('posts', getAllPosts);
  console.log(posts);
  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && posts === undefined && <h2>Opps!!! Net error!!!</h2>}
      {!isLoading && posts && posts.length && (
        <ul>
          {posts.map((post: any) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
      {!isLoading && posts && !posts.length && (
        <h2>Opps!!! Posts not found!!!</h2>
      )}
    </>
  );
};
