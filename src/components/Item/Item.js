import PropTypes from 'prop-types';
import shipping from '../../assets/images/ic_shipping.png';
import './item.scss';

const Item = ({
  picture, price, title, address, freeShipping,
}) => {
  return (
    <article className="d-flex item">
      <div className="py-3 pe-3">
        <img src={picture} alt="item-product" className="rounded image"/>
      </div>
      <div className='d-flex justify-content-between mt-4 w-100'>
        <section className='col-6'>
          <div className='d-flex price'>
            <h4 className='m-0 me-2'>${price.amount}</h4>
            {freeShipping && <img src={shipping} alt="free shipping" className='h-100 align-self-center mt-1' />}
          </div>
          <h5 className='description'>{title}</h5>
        </section>
        <section className='col-2'>
          <p className='location'>{address.state_name}</p>
        </section>
      </div>
    </article>
  );
};

Item.propTypes = {
  picture: PropTypes.string,
  title: PropTypes.string,
  address: PropTypes.object,
  price: PropTypes.object,
  freeShipping: PropTypes.bool,
};

export default Item;
