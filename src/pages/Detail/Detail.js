import { Navbar } from '../../components/Navbar';
import { Breadcrum } from '../../components/Breadcrum';
import { Layout } from '../../components/Layout';
import { Container } from '../../components/Container';
import ProductDetail from '../../components/ProductDetail/ProductDetail';

const Detail = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Breadcrum />
        <Container>
          <ProductDetail />
        </Container>
      </Layout>
    </>
  );
};

export default Detail;
