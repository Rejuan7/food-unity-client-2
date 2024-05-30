const Donation = () => {
  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://i.ibb.co/V3sr0QM/donating.jpg"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-xl"
            />
          </div>

          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-3xl font-bold leading-none">
              Why Waste Food?{" "}
              <span className="text-red-600">Save it for the Poor</span>
            </h1>
            <p className="mt-6 mb-8 text-xl sm:mb-12">
              In a world marred by hunger, wasting food is a travesty. Each
              scrap discarded represents a missed chance to ease suffering. It's
              vital to acknowledge the moral imperative of curbing waste and
              aiding the needy. By promoting mindful consumption and embracing
              food unity, we can combat insecurity. Let's redefine our food
              habits to ensure no one goes hungry while viable food is
              needlessly discarded.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donation;
