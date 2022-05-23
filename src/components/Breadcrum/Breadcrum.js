import PropTypes from 'prop-types';

const Breadcrum = ({ categories }) => {
  return (
    <nav className="my-3 mx-3 mx-md-0">
      {
        categories?.map((category, i) => (
          <span key={i}>
            <span>
              {i === categories.length - 1 ? <b>{category}</b> : <span>{category}</span>}
            </span>
            {i !== categories.length - 1 && <span className="mx-2">{'>'}</span>}
          </span>
        ))
      }
    </nav>
  );
};

Breadcrum.propTypes = {
  categories: PropTypes.array,
};

export default Breadcrum;
