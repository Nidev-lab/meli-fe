import { useState } from 'react';
import logo from '../../assets/images/Logo_ML.png';
import search from '../../assets/images/ic_Search.png';
import './navbar.scss';

const Navbar = () => {
  const [searchTextParam, setTextSearch] = useState('');

  const handleClick = () => {
    console.log(searchTextParam);
  };

  const handleChange = ({ target }) => {
    const searchData = target.value;

    setTextSearch(searchData);
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-yellow row justify-content-center gx-0'>
      <div className="d-flex col-12 col-md-10">
        <a className="navbar-brand me-4" href="/">
          <img src={logo} alt="logo-mercado-libre" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="w-100">
            <div className="input-group">
              <input type="text" className="form-control border-0 fs-placeholder" placeholder="Nunca dejes de buscar" aria-label="Nunca dejes de buscar" aria-describedby="basic-addon2" onChange={handleChange}/>
              <span className="input-group-text border-0" id="basic-addon2" onClick={handleClick}><img src={search} alt="seach-icon" /></span>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
