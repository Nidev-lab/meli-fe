import { Navbar } from '../../components/Navbar';
import { Breadcrum } from '../../components/Breadcrum';
import { Layout } from '../../components/Layout';

const Home = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Breadcrum />
      </Layout>
    </>
  );
};

export default Home;
