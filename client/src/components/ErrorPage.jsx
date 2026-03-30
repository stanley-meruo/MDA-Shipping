import { useNavigate } from "react-router-dom";
import Button from "./Button";

const ErrorPage = () => {
    const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen flex flex-col items-center gap-8 justify-center p-6 text-center">
        <div className="space-y-1">
          <h1 className="text-8xl font-bold text-red-600 lg:text-9xl">404</h1>
          <p className="text-xl font-mulish lg:text-2xl">
            Oops! The page you're looking for doesn't exist.
          </p>
          <p className="text-6xl">🚧</p>
        </div>

        <div className="grid">
          <Button
            onClick={() => navigate("/")}
            title="GO BACK HOME"
            className="bg-babyblue py-4 px-8 w-full text-sm text-white rounded-lg font-semibold font-inter hover:bg-gray-100 hover:text-gray-700 hover:scale-90 duration-300 transition-transform cursor-pointer lg:py-5"
          />
        </div>
      </div>
    </>
  );
};
export default ErrorPage;
