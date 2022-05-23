import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';
import './product_detail.scss';

const ProductDetail = ({
  title, description, soldQuantity, picture, price,
}) => {
  return (
    <div className='product-detail'>
      <article className="row">
        <figure className='m-0 col-12 col-md'>
          <img src={picture} alt="detail product" className="rounded image" />
        </figure>
        <div className='detail-data col-12 col-md'>
          <p className='sold-product'>Nuevo - {soldQuantity} vendidos</p>
          <h4 className='name-product'>{title}</h4>
          <p className='price-product'>
            $<FormattedNumber value={price?.amount} currency="USD" />
          </p>
          <section className='buy-product'>
            <button type='button' className='btn btn-primary w-100'>Comprar</button>
          </section>
        </div>
      </article>
      <section>
        <p className="description-title">Descripcion del producto</p>
        <p className='col-12 col-sm-8 description'>{description}</p>
      </section>
    </div>
  );
};

ProductDetail.propTypes = {
  picture: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.object,
  soldQuantity: PropTypes.number,
};

export default ProductDetail;
