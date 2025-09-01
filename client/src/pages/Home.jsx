import { useAuth } from "../store/auth";

export const Home = () => {
  const { user } = useAuth();

  return (
    <section className="section-hero">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          {user && <p>Hey {user?.userName}</p>}
          <h1>Welcome to PCP Web</h1>
          <p>
            This is a modern MERN stack application. Explore our features and services.
          </p>
          <div className="btn-group">
            <a href="/contact" className="btn">Connect Now</a>
            <a href="/service" className="btn">Our Services</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/dashboard.jpeg" alt="home page" width="400" height="350" />
        </div>
      </div>
    </section>
  );
};
