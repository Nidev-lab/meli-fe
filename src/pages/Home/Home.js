import { useContext } from 'react';
import { Navbar } from '../../components/Navbar';
import { Breadcrum } from '../../components/Breadcrum';
import { Layout } from '../../components/Layout';
import { Item } from '../../components/Item';
import { Container } from '../../components/Container';
import GlobalContext from '../../context/GlobalContext';

const Home = () => {
  const { productList } = useContext(GlobalContext);

  console.log(productList);
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
