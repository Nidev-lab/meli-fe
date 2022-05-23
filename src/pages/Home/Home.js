import { useContext } from 'react';
import { Breadcrum } from '../../components/Breadcrum';
import { Layout } from '../../components/Layout';
import { Item } from '../../components/Item';
import { Container } from '../../components/Container';
import GlobalContext from '../../context/GlobalContext';
import { Loading } from '../../components/Loading';

const Home = () => {
  const { productList, isLoading } = useContext(GlobalContext);

  return (
    <Layout>
      {isLoading
        ? (
          <Loading />
        )
        : (
          <>
            <Breadcrum categories={productList.categories} />
            <Container className='px-3'>
              {
                productList.items?.map((item, i) => (
                  <section key={item.id}>
                    <Item {...item} />
                    {i !== productList.items.length - 1 && <hr className='m-0' />}
                  </section>
                ))
              }
            </Container>
          </>
        )}
    </Layout>
  );
};

export default Home;
