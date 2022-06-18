import { Outlet } from 'react-router-dom';

const NoHeaderLayout = () => {
  return (
    <div id="__main">
      <Outlet />
    </div>
  );
};

export default NoHeaderLayout;
