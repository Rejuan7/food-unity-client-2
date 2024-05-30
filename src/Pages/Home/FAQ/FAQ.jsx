const FAQ = () => {
  return (
    <div>
      <h2 className="text-5xl font-extrabold text-center mb-16">
        Frequently <span className="text-red-600">Asked</span> Questions
      </h2>
      <div className="flex  gap-8 my-10">
        <div>
          <div className="collapse collapse-plus bg-base-200 mb-2">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              How does the food sharing process work?
            </div>
            <div className="collapse-content">
              <p>
                It's simple! If you have excess food or want to contribute, just
                create a listing detailing the type of food, quantity, and
                pick-up/delivery preferences. Those in need can then browse
                listings and connect with donors to arrange collection or
                delivery.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mb-2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How can I ensure the safety and quality of donated food?
            </div>
            <div className="collapse-content">
              <p>
                Donor safety is our priority. We encourage donors to adhere to
                food safety guidelines and provide accurate descriptions of the
                items they offer. Additionally, recipients can ask questions and
                inspect donations before accepting them to ensure quality and
                freshness.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mb-2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How can I get involved if I'm not able to donate food?
            </div>
            <div className="collapse-content">
              <p>
                There are many ways to support our mission! You can volunteer
                your time to help distribute food, spread awareness about our
                platform, or even make monetary contributions to support our
                operations and outreach efforts.
              </p>
            </div>
          </div>
        </div>
        <div></div>
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-4">
            Donate Food To Save Humanity
          </h2>
          <p className="text-xl">
            Join our cause to donate food for humanity's sake. Every
            contribution, no matter how big or small, has a profound impact on
            someone's life. Together, we can make a difference by alleviating
            hunger and nourishing communities in need. Let's unite in our
            efforts to ensure that no one goes to bed hungry and that everyone
            has access to the nutritious food they deserve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
