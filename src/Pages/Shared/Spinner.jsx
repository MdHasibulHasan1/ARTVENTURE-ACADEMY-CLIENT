import { CgSpinner } from "react-icons/cg";

const Spinner = () => {
  return (
    <div className="font-semibold text-xl">
      <div className="flex justify-center items-center gap-2 h-[80vh]">
        <div className="animate-spin border-gray-900">
          <CgSpinner />
        </div>
        <div>Loading...</div>
      </div>
    </div>
  );
};

export default Spinner;
