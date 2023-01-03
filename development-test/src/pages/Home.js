import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Photos from "../components/Photos";
import { photos } from "../redux/action";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(photos());
  }, []);
  return (
    <div className="home">
      <Photos />
    </div>
  );
};

export default Home;
