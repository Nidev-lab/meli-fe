import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/Logo_ML.png';
import search from '../../assets/images/ic_Search.png';
import './navbar.scss';
import GlobalContext from '../../context/GlobalContext';

const Navbar = () => {
  const navigate = useNavigate();

  const { setProductList, searchParam, setIsLoading } = useContext(GlobalContext);
  const [searchTextParam, setTextSearch] = useState(searchParam);

  const handleClick = async () => {
    setIsLoading(true);
    const resp = await fetch(`http://localhost:8000/api/items?q=${searchTextParam}`);
    const json = await resp.json();

    setProductList(json);
    setIsLoading(false);
    navigate(`/items?search?q=${searchTextParam}`);
  };

  const handleChange = ({ target }) => {
    const searchData = target.value;

    setTextSearch(searchData);
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-yellow row justify-content-between justify-content-md-center gx-0 px-3 px-md-0'>
      <div className="d-flex justify-content-between justify-content-md-center col-12 col-md-10">
        <a className="navbar-brand me-4" href="/">
          <img src={logo} alt="logo-mercado-libre" />
        </a>
        <button className="navbar-toggler d-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse d-flex">
          <form className="w-100">
            <div className="input-group">
              <input type="text" className="form-control border-0 fs-placeholder" placeholder="Nunca dejes de buscar" aria-label="Nunca dejes de buscar" aria-describedby="basic-addon2" onChange={handleChange} defaultValue={searchTextParam} />
              <span onClick={handleClick} className="input-group-text border-0" id="basic-addon2"><img src={search} alt="seach-icon" /></span>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
