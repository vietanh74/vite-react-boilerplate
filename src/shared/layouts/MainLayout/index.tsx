import DefaultLayout from '@/layouts/default';
import NoHeaderLayout from '@/layouts/noHeader';

const components = {
  default: DefaultLayout,
  noHeader: NoHeaderLayout,
};

const MainLayout = () => {
  return (
    <>
      <DefaultLayout />
    </>
  );
};

export default MainLayout;
