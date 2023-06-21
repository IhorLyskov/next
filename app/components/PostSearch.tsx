'use client';
import { useState, FormEventHandler } from 'react';
import { getPostsBySearch } from '../services/getPosts';
import useSWR from 'swr';

export const PostSearch = () => {
  const { mutate } = useSWR('posts');

  const [search, setSearch] = useState('');

  const handleSearch: FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault();
    const posts = await getPostsBySearch(search);
    mutate(posts);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="Enter string for search"
        value={search}
        onChange={event => setSearch(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
