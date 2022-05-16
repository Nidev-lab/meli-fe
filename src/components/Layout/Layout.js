import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <main className='row justify-content-center gx-0'>
      <section className="col-12 col-md-10">
        {children}
      </section>
    </main>
  );
};

Layout.Proptypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};

export default Layout;
