import PaymentButton from "./PaymentButton"

const Home = () => {
  return (
    <div className='h-screen w-screen overflow-y-scroll'>
      <nav className="nav">
        <div className="logo-container">
          <img className="logo" src="assets/logo.png" alt="logo" />
          <img src="assets/menu.png" className="menu-btn" id="menu-btn" />
        </div>
        {/* <ul className="list-items">
            <li className="list">
              <a href="#" className="link">Home</a>
            </li>
            <li className="list">
              <a href="#" className="link">Member</a>
            </li>
            <li className="list">
              <a href="#" className="link">Blog</a>
            </li>
            <li className="list">
              <a href="#" className="link">Privacy</a>
            </li>
            <li className="list">
              <a href="#" className="link">Contact</a>
            </li>
            <div className="btn-container">
              <li className="list">
                <a href="#" className="btn btn-secondary">Login</a>
              </li>
              <li className="list">
                <a href="#" className="btn">Register</a>
              </li>
            </div>
          </ul> */}
      </nav>
      <div className="container">
        <div className="container-left">
          <p className="text-small">Because you deserve better!</p>
          <h2 className="title">
            Get noticed for <span className="title-s">who</span> you are,
            <span className="title-s">not what</span> you look like.
          </h2>
          <p className="text">
            You’re more than just a photo. You have stories to tell, and
            passions to share, and things to talk about that are more
            interesting than the weather. Because you deserve what dating
            deserves: better.
          </p>
          <PaymentButton />
          <div className="stats-container">
            <div className="stats">
              <h1 className="stats-title">15k+</h1>
              <p className="stats-text">Dates and matches made everyday</p>
            </div>

            <div className="stats">
              <h1 className="stats-title stats-title-brown">1,456</h1>
              <p className="stats-text">New members signup every day</p>
            </div>

            <div className="stats">
              <h1 className="stats-title">1M+</h1>
              <p className="stats-text">Members from around the world</p>
            </div>
          </div>
          <img src="/assets/wave-left.png" className="wave-left" />
        </div>

        <div className="container-right">
          <img
            className="couples-img couples-img-desktop"
            src="/assets/couples.png"
            alt=""
          />
          <img
            className="couples-img couples-img-mobile"
            src="/assets/couples-mobile.png"
            alt=""
          />
          <img src="/assets/details.png" className="details-img" />
          <img src="/assets/wave-right.png" className="wave-right" />
        </div>
      </div>
    </div>

  )
}

export default Home
