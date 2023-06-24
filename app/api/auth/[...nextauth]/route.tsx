import NextAuth from 'next-auth';
import { authConfig } from '../../../../configs/auth';

const handler = NextAuth(authConfig);

console.log(handler);
export { handler as GET, handler as POST };
