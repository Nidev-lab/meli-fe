import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrum } from '../../components/Breadcrum';
import { Layout } from '../../components/Layout';
import { Container } from '../../components/Container';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import GlobalContext from '../../context/GlobalContext';

const Detail = () => {
  const { productList } = useContext(GlobalContext);
  const { id } = useParams();

  const [item, setItem] = useState([]);

  const handleDetail = async () => {
    const resp = await fetch(`http://localhost:8000/api/items/${id}`);
    const json = await resp.json();

    setItem(json.items);
  };

  useEffect(() => {
    handleDetail();
  }, []);

  return (
    <Layout>
      <Breadcrum categories={productList.categories} />
      <Container>
        <ProductDetail {...item} />
      </Container>
    </Layout>
  );
};

export default Detail;
