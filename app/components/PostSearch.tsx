'use client';
import { useState, FormEventHandler } from 'react';
import { getPostsBySearch } from '../services/getPosts';
import { log } from 'console';

type Props = {
  onSearch: (value: any[]) => void;
};

export const PostSearch = ({ onSearch }: Props) => {
  const [search, setSearch] = useState('');

  const handleSearch: FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault();
    const posts = await getPostsBySearch(search);
    onSearch(posts);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={event => setSearch(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
