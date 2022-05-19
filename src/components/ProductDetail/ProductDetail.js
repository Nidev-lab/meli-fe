import './product_detail.scss';

const ProductDetail = () => {
  return (
    <div className='product-detail'>
      <article className="d-flex">
        <img src='https://picsum.photos/800' alt="detail product" className="rounded image" />
        <div>
          <p className='sold-product'>Nuevo - 234 vendidos</p>
          <h4 className='name-product'>Deco Reverse Sombrero Oxford</h4>
          <p className='price-product'>$1980,00</p>
          <section className='buy-product'>
            <button type='button' className='btn btn-primary w-100'>Comprar</button>
          </section>
        </div>
      </article>
      <section>
        <p className="description-product">Descripcion del producto</p>
        <p className='col-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque velit laudantium cum,
          voluptas quibusdam veniam repudiandae rerum vel tempore, est blanditiis. Distinctio vitae
          facere quos eligendi provident est deserunt explicabo? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Eaque velit laudantium cum,
          voluptas quibusdam veniam repudiandae rerum vel tempore, est blanditiis. Distinctio vitae
          facere quos eligendi provident est deserunt explicabo?</p>
      </section>
    </div>
  );
};

export default ProductDetail;
