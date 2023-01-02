import { photos, detailPhoto } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.photos)
  console.warn('data in main', data);
  return (
    <div>
      <button onClick={() => dispatch(photos())}>photos</button>
    </div>
  );
};

export default Main;
