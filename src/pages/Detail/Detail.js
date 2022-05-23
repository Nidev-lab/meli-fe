import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrum } from '../../components/Breadcrum';
import { Layout } from '../../components/Layout';
import { Container } from '../../components/Container';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import GlobalContext from '../../context/GlobalContext';
import Loading from '../../components/Loading/Loading';

const Detail = () => {
  const urlBase = process.env.REACT_APP_URL_BASE;
  const { productList, setIsLoading, isLoading } = useContext(GlobalContext);
  const { id } = useParams();

  const [item, setItem] = useState([]);

  const handleDetail = async () => {
    setIsLoading(true);
    const resp = await fetch(`${urlBase}/${id}`);
    const json = await resp.json();

    setItem(json.items);
    setIsLoading(false);
  };

  useEffect(() => {
    handleDetail();
  }, []);

  return (
    <Layout>
      {isLoading
        ? <Loading />
        : (
          <>
            <Breadcrum categories={productList.categories} />
            <Container>
              <ProductDetail {...item} />
            </Container>
          </>
        )
      }
    </Layout>
  );
};

export default Detail;
