const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-white mt-10">
      <aside>
        <img
          className="h-12 w-12 rounded-xl bg-base-200"
          src={"https://i.ibb.co/SnPVV97/restaurant9491-logowik-com.webp"}
          alt=""
        />
        <p>
          Food Unity
          <br />
          Providing reliable tech since 1992
        </p>
        <p className="mt-4">Copyright © 2024 - All right reserved</p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
