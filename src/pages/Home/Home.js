import { Navbar } from '../../components/Navbar';
import { Breadcrum } from '../../components/Breadcrum';
import { Layout } from '../../components/Layout';
import { Item } from '../../components/Item';
import { Container } from '../../components/Container';

const Home = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Breadcrum />
        <Container>
          <Item />
        </Container>
      </Layout>
    </>
  );
};

export default Home;
