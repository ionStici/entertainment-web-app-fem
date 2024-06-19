import Layout from '../components/Layout';
import Trending from '../components/Trending';
import Media from '../components/Media';
import Loading from '../components/Loading';
import { useRef, useState } from 'react';

const HomePage = function () {
  const title = 'Recommended for you';

  const [hide, setHide] = useState(false);
  let componentsLoaded = useRef(0);

  const loading = () => {
    componentsLoaded.current++;
    if (componentsLoaded.current === 2) setHide(true);
  };

  return (
    <Layout>
      <Loading hide={hide} />
      <Trending loading={loading} />
      <Media loading={loading} title={title} />
    </Layout>
  );
};

export default HomePage;
