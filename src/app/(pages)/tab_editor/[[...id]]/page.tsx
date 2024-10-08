import GuitarTab from '@/features/guitar_tab';
import { NextPage } from 'next';
import { z } from 'zod';

const TabEditor: NextPage = params => {
  const result = ParamsSchema.safeParse(params);
  if (result.success) return <GuitarTab id={result.data.params.id[0]} />;
  else return <GuitarTab />;
};

export default TabEditor;

const ParamsSchema = z.object({
  params: z.object({ id: z.array(z.string()) }),
});
