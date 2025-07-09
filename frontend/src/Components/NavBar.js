function NavBar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">C.R.U.D</span>

          <button
            className="
  padding-10px-20px
  background-color-#2d72d9
  color-white
  border-none
  border-radius-25px
  font-size-16px
  font-weight-500
  cursor: pointer
  box-shadow-0-2px-5px-rgba(0,0,0,0.15)
  transition-background-color-0.3s-ease
"
          >
            Profile
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
