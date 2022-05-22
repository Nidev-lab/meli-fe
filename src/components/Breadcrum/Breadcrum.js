import PropTypes from 'prop-types';

const Breadcrum = ({ categories }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb my-3">
        {
          categories?.map((category, i) => (
            <li key={i} className="breadcrumb-item">
              {
                i === categories.length - 1 ? <b>{category}</b> : <span>{category}</span>
              }
            </li>
          ))
        }
      </ol>
    </nav>
  );
};

Breadcrum.propTypes = {
  categories: PropTypes.array,
};

export default Breadcrum;
