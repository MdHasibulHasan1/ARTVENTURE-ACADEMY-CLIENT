import { Link } from "react-router-dom";

const NotDataFound = ({ message, address, label }) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center pb-16">
      <p className="text-gray-600 text-xl lg:text-3xl">{message}</p>
      <Link to={address}>
        <button className="btn-sm btn-link glass btn">{label}</button>
      </Link>
    </div>
  );
};

export default NotDataFound;
