import { useState } from "react";
function Home() {
  const [title, setTitle] = useState("Developer")
  const fun = (any) => {
    setTitle(any.target.value);
  }

  const upperCase = ()=>{
    let newText = title.toUpperCase();
    setTitle(newText)
  }

  return (
    <div>
      <div className="fluid-container bg-primary">
        <div className="container py-5">
          <h1 className="text-light">Preview Text</h1>
          <p className="text-white">{title}</p>
          <input type="text" className="form-control" onChange={fun} id="inputAddress2" placeholder="Type Here" />
          <div className="btn btn-light mt-3" onClick={upperCase}>Convert To UpperCase</div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src="https://cdn.pixabay.com/photo/2024/02/22/02/45/computer-8589003_960_720.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://cdn.pixabay.com/photo/2024/02/22/02/45/computer-8589003_960_720.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://cdn.pixabay.com/photo/2024/02/22/02/45/computer-8589003_960_720.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
