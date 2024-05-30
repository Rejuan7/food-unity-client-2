
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="flex items-center h-full p-16 bg-black dark:text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <div>
              <img className=" rounded-3xl my-5" src={'https://i.ibb.co/jfvwMw7/404-error-template-with-forest-night-23-2147786003.jpg'} alt="" />
          </div>
          <p className="mt-4 mb-8 text-white text-2xl font-medium dark:text-gray-600">
            But don't worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
          >
            <button className="btn btn-primary text-white">Back to homepage</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
