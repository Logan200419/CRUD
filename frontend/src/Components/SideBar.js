function SideBar(){
    return <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-2 bg-light sidebar vh-100 p-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Settings</a>
              </li>
            </ul>
    </div>
    </div>
    </div>
}

export default SideBar;