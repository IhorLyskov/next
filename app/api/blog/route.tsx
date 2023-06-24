import { NextResponse } from 'next/server';
import { headers, cookies } from 'next/headers';

export async function GET(req: Request) {
  const headerList = headers();
  const type = headerList.get('Content-Type');
  const cookiesList = cookies();
  const coo2 = cookiesList.get('Cookie_1')?.value;
  return NextResponse.json({ type, coo2 });
}
