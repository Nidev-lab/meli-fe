import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return (
    <section className="bg-white rounded">
      {children}
    </section>
  );
};

Container.Proptypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};

export default Container;
