import ClockLoader from "react-spinners/ClockLoader";

const Spinner = ({ loading }) => {
  return (
    <div >
      <div className="flex items-center h-[80vh] justify-center">
        <ClockLoader color={"#fca311"} loading={loading} size={100} />
      </div>
    </div>
  );
};

export default Spinner;
