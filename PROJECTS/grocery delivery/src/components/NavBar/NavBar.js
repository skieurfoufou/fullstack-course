import "./NavBar.css";

const NavBar = () => {
  return (
    <nav class="NavBar navbar-dark bg-primary justify-content-between">
      <i class="fas fa-shopping-cart"></i>
      <a class="navbar-brand">GROCERY DELIVERY</a>
      <form class="form-inline">
        <input
          class="form-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};

export default NavBar;
