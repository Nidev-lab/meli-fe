const Breadcrum = () => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb my-3">
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <li className="breadcrumb-item active" aria-current="page">Library</li>
      </ol>
    </nav>
  );
};

export default Breadcrum;
