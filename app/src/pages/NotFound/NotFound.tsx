import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import NotFound404 from "./404";
import "./NotFound.css";

export function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);

  return (
    <div className="h-screen justify-center">
      <center className="mt-48 m-auto">
        <NotFound404 />
        <div className=" tracking-widest mt-48">
          <span className="mt-4 text-gray-500 text-6xl block">
            <span>4 0 4</span>
          </span>
          <span className="text-gray-500 text-3xl mt-12 block">
            Sorry, We couldn't find what you are looking for!
          </span>
          <span className="mt-4 text-gray-500 text-2xl block">
            Redirecting...
          </span>
        </div>
      </center>
    </div>
  );
}
