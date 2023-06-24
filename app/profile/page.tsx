import { authConfig } from '@/configs/auth';
import { getServerSession } from 'next-auth/next';
import Image from 'next/image';

export default async function Profile() {
  const session = await getServerSession(authConfig);

  const imageStyle = {
    borderRadius: '50%',
    border: '2px solid blue',
  };

  return (
    <div>
      <h1>Profile of {session?.user?.name}</h1>
      {session?.user?.image && (
        <Image
          width={96}
          height={96}
          style={imageStyle}
          src={session.user.image}
          alt="User's Logo"
        />
      )}
    </div>
  );
}
