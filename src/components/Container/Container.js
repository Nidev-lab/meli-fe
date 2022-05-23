import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return (
    <section className="bg-white rounded mb-5 px-3">
      {children}
    </section>
  );
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};

export default Container;
