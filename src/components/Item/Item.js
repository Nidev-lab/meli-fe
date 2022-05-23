import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';
import { Link } from 'react-router-dom';
import shipping from '../../assets/images/ic_shipping.png';
import './item.scss';

const Item = ({
  picture, price, title, address, freeShipping, id,
}) => {
  return (
    <Link to={`/items/${id}`} className="d-flex item text-decoration-none">
      <figure className="my-3 me-3">
        <img src={picture} alt="item-product" className="rounded image"/>
      </figure>
      <div className='row justify-content-between mt-4 w-100'>
        <section className='col-12 col-md-6'>
          <div className='d-flex price'>
            <h4 className='m-0 me-2 text-body'>
              $<FormattedNumber value={price?.amount} currency="USD" />
            </h4>
            {freeShipping && <img src={shipping} alt="free shipping" className='h-100 align-self-center mt-1' />}
          </div>
          <h5 className='description text-body'>{title}</h5>
        </section>
        <section className='col-12 col-md-2'>
          <p className='location text-body'>{address.state_name}</p>
        </section>
      </div>
    </Link>
  );
};

Item.propTypes = {
  id: PropTypes.string,
  picture: PropTypes.string,
  title: PropTypes.string,
  address: PropTypes.object,
  price: PropTypes.object,
  freeShipping: PropTypes.bool,
};

export default Item;
