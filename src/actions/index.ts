'use server';
import { TabInsertableSchema, TabUpdateableSchema } from '@/common/types.';
import { saveTabDb, updateTabDb } from '@/db';
import { getSession } from '@auth0/nextjs-auth0';

export const saveTab = async (formData: FormData) => {
  const form = Object.fromEntries(formData.entries());

  const tabUpdateableResult = TabUpdateableSchema.safeParse(form);
  const tabInsertResult = TabInsertableSchema.safeParse(form);

  const updateSuccess =
    tabUpdateableResult.success && tabUpdateableResult.data.id;

  const session = await getSession();
  const user = session?.user.nickname;

  if (tabInsertResult.success || updateSuccess) {
    if (updateSuccess) {
      await updateTabDb(tabUpdateableResult.data, user);
    } else if (tabInsertResult.success) {
      await saveTabDb(tabInsertResult.data);
    }
  } else {
    throw Error('error saving tab');
  }
};
