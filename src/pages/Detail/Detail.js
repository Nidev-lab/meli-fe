import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { Breadcrum } from '../../components/Breadcrum';
import { Layout } from '../../components/Layout';
import { Container } from '../../components/Container';
import ProductDetail from '../../components/ProductDetail/ProductDetail';

const Detail = () => {
  const { id } = useParams();

  const [item, setItem] = useState([]);

  const handleDetail = async () => {
    const resp = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const json = await resp.json();

    setItem(json);
  };

  useEffect(() => {
    handleDetail();
  }, []);

  console.log(item);

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
