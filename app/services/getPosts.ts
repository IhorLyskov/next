export async function getAllPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 10,
    },
  });
  if (!response.ok) throw new Error('Unable to fetch posts!!');

  return response.json();
}

export async function getPostById(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 10,
      },
    }
  );
  if (!response.ok) throw new Error('Unable to fetch post!!');

  return response.json();
}

export const getPostsBySearch = async (search: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${search}`
  );

  if (!response.ok) throw new Error('Unable to fetch posts!!');

  return response.json();
};
