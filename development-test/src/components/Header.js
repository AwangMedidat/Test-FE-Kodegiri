import { useSelector } from "react-redux";
const Header = () => {
  const result = useSelector((state) => state.photos);
  console.warn("data in header", result);
  return (
    <div className="header">
      <div className="photo-div">
        <span>{result.length}</span>
        <img
          src="https://d1qb2nb5cznatu.cloudfront.net/startups/i/65467-4b3e46561abf4c2727186ffb1aec54cf-medium_jpg.jpg?buster=1544713352"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
