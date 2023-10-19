import { USER_COOKIE } from '@/app/constants/user-cookie';
import { createCSSThemeString } from '@/app/lib/create-css-string';
import { getThemeByUser } from '@/app/lib/theme-by-user';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export const GET = () => {
  const cookieJar = cookies();

  const userCookie = cookieJar.get(USER_COOKIE);

  const user = userCookie ? userCookie.value : 'default';

  const theme = getThemeByUser(user);

  const cssString = createCSSThemeString(theme);

  return new Response(cssString, {
    headers: {
      'content-type': 'text/css; charset=utf-8',
      'cache-control': 'no-cache',
    },
  });
};
