import Layout from '../components/Layout';
import Trending from '../components/Trending';
import Media from '../components/Media';
import Loading from '../components/Loading';
import { useRef, useState } from 'react';

const HomePage = function () {
  const [hide, setHide] = useState(false);
  let { current: componentsLoaded } = useRef(0);

  const loading = () => {
    componentsLoaded++;
    if (componentsLoaded === 2) setHide(true);
  };

  return (
    <Layout>
      <Loading hide={hide} />
      <Trending loading={loading} />
      <Media loading={loading} title="Recommended for you" />
    </Layout>
  );
};

export default HomePage;
