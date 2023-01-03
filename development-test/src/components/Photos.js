import { useSelector } from "react-redux";

const Photos = () => {
  let data = useSelector((state) => state.photos);

  return (
    <div>
      <div className="d-flex justify-content-end">
        <div className="row">
          <div className="col d-inline-flex">
            <input
              type="text"
              className="form-control d-inline-flex"
              name="keyword"
            />
            <button
              className="btn btn-outline-secondary d-inline-flex ms-3"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {data.map((item) => (
        <div className="photos mt-5">
          <div className="d-flex justify-content-center">
            <div className="row mt-5">
              <div className="col-md-12 d-inline-flex">
                <div className="photo-sizer d-inline-flex"></div>
                <div className="photo-item m-2 d-inline-flex">
                  <img
                    src={item.urls.small}
                    alt={item.alt_description}
                    className="img-fluid d-inline-flex"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Photos;
