import PropTypes from 'prop-types';

const Container = ({ children, className }) => {
  return (
    <section className={`bg-white rounded mb-5 ${className}`}>
      {children}
    </section>
  );
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  className: PropTypes.string,
};

export default Container;
