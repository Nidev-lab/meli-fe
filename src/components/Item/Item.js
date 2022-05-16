import shipping from '../../assets/images/ic_shipping.png';
import './item.scss';

const Item = () => {
  return (
    <section className="d-flex item">
      <div className="p-3">
        <img src='https://picsum.photos/200' alt="item-product" className="rounded image"/>
      </div>
      <div className='d-flex justify-content-between mt-4 w-100'>
        <section className='col-6'>
          <div className='d-flex price'>
            <h4 className='m-0 me-2'>$1980</h4>
            <img src={shipping} alt="free shipping" className='h-100 align-self-center mt-1'/>
          </div>
          <h5 className='description'>Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico</h5>
        </section>
        <section className='col-2'>
          <p className='location'>Capital Federal</p>
        </section>
      </div>
    </section>
  );
};

export default Item;
