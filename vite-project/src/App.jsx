import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <img src="/banner1.jpg" alt="Banner" className="banner" />
        <div className="header">
          <div className="search-container">
            <img src="/searchIcon.jpg" alt="searchIcon" className="searchIcon" />
            <input type="search" placeholder="search here..." className="searchInput" />
          </div>
          <img src="/logo.jpg" alt="logo" className="logo" />
          <div className="header-button">
            <button className="subscribe">SUBSCRIBE</button>
            <button className="sign-in">SIGN IN</button>
          </div>
        </div>

        <div className="nav">
          <ul className="navbar-list">
            <li className="nav-item home" > <b>Home</b></li>
            <li className="nav-item"><b>Categories</b></li>
            <li className="nav-item"><b>IR Prime</b></li>
            <li className="nav-item"><b>Events</b></li>
            <li className="nav-item"><b>Bookstore</b></li>
            <li className="nav-item"><b>Newsletter</b></li>
            <li className="nav-item"><b>Video</b></li>
          </ul>
        </div>
        <div className='sub-nav'>
          <ul className="navbar-sub">
            <li className="sub-item " > Fashion & Lifestyle</li>
            <li className="sub-item home" > .</li>
            <li className="sub-item">Beauty & Wellness</li>
            <li className="sub-item home" > .</li>
            <li className="sub-item">Consumer Durables & IT</li>
            <li className="sub-item home" > .</li>
            <li className="sub-item">Entertainment</li>
            <li className="sub-item home" > .</li>
            <li className="sub-item">Home Decor & Furnishing</li>
            <li className="sub-item home" > .</li>
            <li className="sub-item">Specialty Retail</li>
          </ul>
        </div>

        <div class="about section " id="about">
          <div class="about__container bd-grid">
            <div className='top-news'>
              <div class="about__img">
                <img src="/hotspots.jpg" alt="hotspots" className="hotspots" />
              </div>
              <div>
                <h2 class="about__subtitle">HOTSPOT</h2>
                <p class="about__text">Luxury hotspots: 5 most expensive <br /> high streets in the...
                </p>
              </div>
            </div>

            <div className='top-news'>
              <div class="about__img">
                <img src="/AI.jpg" alt="hotspots" className="hotspots" />
              </div>
              <div>
                <h2 class="about__subtitle">AI</h2>
                <p class="about__text">5 ways to leverage the power of ChatGPT in retail
                </p>
              </div>
            </div>

            <div className='top-news'>
              <div class="about__img">
                <img src="/shipping.jpg" alt="hotspots" className="hotspots" />
              </div>
              <div>
                <h2 class="about__subtitle">SHIPPING</h2>
                <p class="about__text">Reliance to open 250 Azorte stores in 2-3 years
                </p>
              </div>
            </div>

          </div>
        </div>

        <div class="news-section">
          <div class="left-column">
            <div class="featured-news">
              <img src="/rahul.jpg" alt="rahul" className="rahul" />
            </div>
            <div class="additional-news">
              <div class="news-item">
                <img src="/wowMomo.jpg" alt="wowMomo" className="wowMomo" />
                <h3>Wow! Momo Foods enters Bhopal with Wow!</h3>
                <p>#Citywalk #reel stories podcast</p>
              </div>
              <div class="news-item">
                <img src="/kfc.jpg" alt="kfc" className="kfc" />
                <h3>KFC opens another outlet in Punjab</h3>
                <p>#Beverage #reel stories podcast</p>
              </div>
              <div class="news-item">
                <img src="/flowers.jpg" alt="flowers" className="flowers" />
                <h3>FNP (Ferns N Petals) appoints Ashish Goel</h3>
                <p>#Citywalk #reel stories podcast</p>
              </div>
            </div>
          </div>

          <div class="right-column">
            <h2>Latest News</h2>
            <div class="news-list right">
              <div class="news-item">
                <img src="image 27.jpg" alt="News Image" />
                <h3>Unwrapping the Archies’ reinvention plan</h3>
              </div>
              <div class="news-item right">
                <img src="ai-store.jpg" alt="News Image" />
                <h3>How AI is enhancing stores, How AI is enhancing stores</h3>
              </div>
            </div>
          </div>
        </div>

        <div class="trending-section">
          <h2>Trending</h2>
          <div class="trending-tags">
            <button>Rahul Gandhi In Manipur</button>
            <button>Meta</button>
            <button>E-Commerce</button>
            <button>Live Cricket Score</button>
            <button>Adipurush</button>
            <button>Sushant Singh Rajputdeath case</button>
            <button>Myntra launches </button>
            <button>E-commerce</button>
            <button>Live Cricket Score</button>
            <button>Bigg Boss</button>
            <button>IPL</button>
          </div>
        </div>

        <div className='leader-research'>
          <div class="leaders-ink-section">
            <h2 className='Leaders-head'>Leaders Ink</h2>
            <div class="leaders">
              <div class="leaders-item">
                <img src="/image 22.jpg" alt="image" className="leaders-img" />
                <h3>Top 5 iconic Apple stores across the world by design</h3>
                <p>Arundhati Roy</p>
              </div>
              <div class="leaders-item">
                <img src="/stock.jpg" alt="stock" className="leaders-img" />
                <h3>Rollercoaster ride of four retail industry IPOs</h3>
                <p>Vikram Seth</p>
              </div>
              <div class="leaders-item">
                <img src="/miniso.jpg" alt="miniso" className="leaders-img" />
                <h3>Uniqlo India’s Success Mantra: Making headway...</h3>
                <p>Jhumpa Lahiri</p>
              </div>
            </div>
          </div>

          <div class="research-section">
            <h2>Research</h2>
            <div class="leaders">
              <div class="leaders-item">
                <img src="/res1.jpg" alt="res1" className="leaders-img" />
                <h3>Human touchpoint is extremely important for us</h3>
                <p>Fashion</p>
              </div>
              <div class="leaders-item">
                <img src="/res2.jpg" alt="res2" className="leaders-img" />
                <h3>US denim brand Lee opens outlets <br /> in Sikar, Patna</h3>
                <p>Beauty</p>
              </div>
            </div>
          </div>
        </div>

        <div class="video-wall">

          <div class="main-video">
            <h2>IR Video Wall</h2>
            <img src="ytb.jpg" alt="ytb" />
            <div class="video-title">Reebok opens store at Lulu Mall, Lucknow</div>
          </div>

          <div class="side-videos">
            <div class="side-section">
              <h3>Retail With Rasul</h3>
              <div class="video-thumbnail">
                <img src="gold.jpg" alt="ytb" />
                <p>Senco Gold IPO subscribed 69% on first day</p>
              </div>
              <div class="video-thumbnail">
                <img src="fam.jpg" alt="ytb" />
                <p>India D2C Summit & Awards 2023</p>
              </div>
            </div>

            <div class="side-section">
              <h3>The Store</h3>
              <div class="video-thumbnail">
                <img src="ranveer.jpg" alt="ytb" />
                <p>Fastrack Smart onboards Ranveer Singh</p>
              </div>
              <div class="video-thumbnail">
                <img src="planet.jpg" alt="ytb" />
                <p>Planet Fashion by ABFRL opens 2 outlets</p>
              </div>
            </div>

            <div class="side-section">
              <h3>IR Studio</h3>
              <div class="video-thumbnail">
                <img src="interior.jpg" alt="ytb" />
                <p>Zoca Cafe launches outlet in Bengaluru</p>
              </div>
              <div class="video-thumbnail">
                <img src="image 27.jpg" alt="ytb" />
                <p>Unwrapping the Archies' reinvention plan</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Web-special">
          <h2>Web Special</h2>
          <div className="web-spe">
            <img src="/rahul.jpg" alt="rahul" className="rahul-web" />
            <ul className="list">
              <li className="list-item">Cinema industry welcomes lowering GST rates</li>
              <li className="list-item">Patanjali Ayurved to sell 7% stake in Patanjali</li>
              <li className="list-item">Select Citywalk opens 4 new stores in June</li>
              <li className="list-item">Govt imposes import restrictions on certain gold</li>
              <li className="list-item">Joom Marketplace offers a global window for sellers</li>
            </ul>
            <img src="/image 41.jpg" alt="rahul" className="rahul" />
          </div>
        </div>

        <div class="leaders-ink-section">
          <h2 className='Leaders-head'>Food & beverage</h2>
          <div class="leaders">
            <div class="leaders-item">
              <img src="/wowMomo.jpg" alt="wowMomo" className="Food-img" />
              <h3>Wow! Momo Foods enters Bhopal <br />with Wow! Momo, Wow China</h3>
              <p>Arundhati Roy</p>
            </div>
            <div class="leaders-item">
              <img src="/barista.jpg" alt="stock" className="Food-img" />
              <h3>Barista Coffee Company opens  <br />its first café in Ahmedabad</h3>
              <p>#Life Style</p>
            </div>
            <div class="leaders-item">
              <img src="/good.jpg" alt="miniso" className="Food-img" />
              <h3>Good Flippin’ Burgers raises <br /> $4 Million in Series A Round</h3>
              <p>#Life Style</p>
            </div>

            <div class="leaders-item">
              <img src="/shake.jpg" alt="miniso" className="Food-img" />
              <h3>How Keventers is milking <br />milkshakes business opportunity</h3>
              <p>#Life Style</p>
            </div>

            <div class="leaders-item">
              <img src="/bbq.jpg" alt="miniso" className="Food-img" />
              <h3>Uniqlo India’s Success Mantra:  <br />Making headway...</h3>
              <p>#Life Style</p>
            </div>
          </div>
        </div>


      </div>
    </>
  );
}

export default App;
