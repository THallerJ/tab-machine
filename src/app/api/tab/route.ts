import { getTabDb, deleteTabDb } from '@/db';
import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@auth0/nextjs-auth0';
import { isDynamicServerError } from 'next/dist/client/components/hooks-server-context';

export const GET = async (req: NextRequest) => {
  try {
    const id = req.nextUrl.searchParams.get('id');
    const readonly = req.nextUrl.searchParams.has('readonly');
    const session = await getSession();
    const user = session?.user.nickname;

    let res = null;
    if (id) res = await getTabDb(id, user, !readonly);

    return NextResponse.json(res);
  } catch (e: unknown) {
    if (isDynamicServerError(e)) throw e;
    return NextResponse.json(
      { message: 'error retrieving tab' },
      { status: 500 }
    );
  }
};

export const DELETE = async (req: NextRequest) => {
  try {
    const id = req.nextUrl.searchParams.get('id');
    const session = await getSession();
    const user = session?.user.nickname;

    if (id) await deleteTabDb(id, user);
    return NextResponse.json({ message: 'tab deleted' });
  } catch (e: unknown) {
    if (isDynamicServerError(e)) throw e;
    return NextResponse.json(
      { message: 'error deleting tab' },
      { status: 500 }
    );
  }
};
