'use server';

import { USER_COOKIE } from '@/app/constants/user-cookie';
import { USERS } from '@/app/lib/theme-by-user';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export async function userSelectionFormAction(formData: FormData) {
  const user = formData.get('user');

  if (typeof user !== 'string') {
    throw new Error('Invalid user');
  }

  const userExists = USERS.includes(user);

  if (!userExists) {
    throw new Error('Invalid user');
  }

  const cookieJar = cookies();

  cookieJar.set(USER_COOKIE, user);

  revalidatePath('*');
}
