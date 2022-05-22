import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { Breadcrum } from '../../components/Breadcrum';
import { Layout } from '../../components/Layout';
import { Item } from '../../components/Item';
import { Container } from '../../components/Container';
import GlobalContext from '../../context/GlobalContext';

const Home = () => {
  const navigate = useNavigate();

  const { productList } = useContext(GlobalContext);

  if (productList.length === 0) {
    navigate('/');
  }

  return (
    <>
      <Navbar />
      <Layout>
        <Breadcrum categories={productList.categories} />
        <Container>
          {
            productList.items?.map((item, i) => (
              <section key={item.id}>
                <Item {...item} />
                {i !== productList.items.length - 1 && <hr />}
              </section>
            ))
          }
        </Container>
      </Layout>
    </>
  );
};

export default Home;
