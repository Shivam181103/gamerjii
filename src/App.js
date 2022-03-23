import './App.css'
import Slider from 'react-slick';
import {Link,Routes,Route} from 'react-router-dom';
// import joinnow from ' https://app.adjust.net.in/czs3n9n?engagement_type=fallback_click'
function Secothird() {
  if (
    window.innerWidth <= 720) {
    return (<> <div className="third-col seconds">
      <div> <h1>WCC3-WEEKLY TOURNAMENT</h1> </div>
      <div className='date'>  <p style={{ color: 'yellow' }} >Date: 20-03-2022 to 20-03-2022 | ID:0KKDKA</p></div>
      <div>
        <p>Map: Chennai</p>
        <p>Perspective:2 </p>
        <p>Round :4</p>
      </div>
      <div>
        <p>Winning: 500</p>
        <p>Winner: 2 </p>
        <p>Entry Fees : 0</p>
      </div>

      <div>
        <p> Hosted By:</p>
      </div>
    </div>
      <div className="third-col first"><a href=" https://app.adjust.net.in/czs3n9n?engagement_type=fallback_click"> <h1>JOIN NOW</h1> </a></div>

    </>)
  }
  else {

    return (
      <>  <div className="third-col first"><a href=" https://app.adjust.net.in/czs3n9n?engagement_type=fallback_click"> <h1>JOIN NOW</h1> </a></div>
        <div className="third-col seconds">
          <div> <h1>WCC3-WEEKLY TOURNAMENT</h1> </div>
          <div className='date'>  <p style={{ color: 'yellow' }} >Date: 20-03-2022 to 20-03-2022 | ID:0KKDKA</p></div>
          <div>
            <p>Map: Chennai</p>
            <p>Perspective:2 </p>
            <p>Round :4</p>
          </div>
          <div>
            <p>Winning: 500</p>
            <p>Winner: 2 </p>
            <p>Entry Fees : 0</p>
          </div>

          <div>
            <p> Hosted By:</p>
          </div>
        </div>

      </>
    )
  }




}

function App() {

  const setting = {

    infinite: true,
    speed: 500,
    accessibility: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    accessibility: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          intialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };
  return (
    <>

      <div className="containers">
        <div className="firster">
          {/* <nav class="  navbar navbar-expand-lg navbar-dark  navi">
            <div class="container-fluid">

              <button class="navbar-toggler  burger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon  burger-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav navii-item-cont">
                  <li class="nav-item">
                    <a class="nav-link  " aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#faq">Faqs</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#footer">Contact</a>
                  </li>

                </ul>
              </div>
            </div>
          </nav> */}
          <div className="landing">
            <img className='logo' src="https://www.gamerji.com/img/logo.png" alt="" />
            <h1>PLAY ESPORTS TOURNAMENTS</h1>
            <h3>&amp; WIN REWARDS</h3>
            <p>Your first step to become a gamer!</p>
            {/* <a href=" https://app.adjust.net.in/czs3n9n?engagement_type=fallback_click">
              {" "}
              <img
                src="https://cdnflags.dream11.com/d11-static-pages/images/d11_playstore.webp"
                alt=""
              />
            </a> */}
             {/* <Routes>
            
            <Route path='/joinNow' element={<joinnow/>}/>
            
            </Routes> */}
            <button className='btn btn-lg download-btn'>
              <img src="https://freeiconshop.com/wp-content/uploads/edd/android-solid.png" alt="" />
              <div className="btn-text">

                <p>Download our</p>
                <h3>
                  Android App
                </h3>
              </div>
            </button>
          </div>
          <div className="row carausel-cont">
            <div className="col carausel-text col-lg-3 col-md-3 col-sm-12">
              <h1>GAMES</h1>
              <p>
                Daily tournaments for your favourite games. Build your stats &amp; win exciting
                prizes!{" "}
              </p>
            </div>
            <div className="sliders col col-lg-9 col-md-9 col-sm-12">

              <Slider {...setting}>

                <div className="game">
                  <div className='game-inside pubg'>

                  </div>
                  <p>PUBG</p>
                </div>
                <div className="game">
                  <div className='game-inside cod'>

                  </div>
                  <p>COD</p>
                </div>
                <div className="game">
                  <div className='game-inside valorant'>

                  </div>
                  <p>VALORANT</p>
                </div>
                <div className="game">
                  <div className='game-inside wcc3'>
                    <img src="" alt="" />
                  </div>
                  <p>WCC3</p>
                </div>
                <div className="game">
                  <div className='game-inside BGMI'>
                    <img src="" alt="" />
                  </div>
                  <p>BGMI</p>
                </div>

              </Slider>
            </div>
          </div>
          <h1 className='featured'>FEATURED TOURNAMENTS</h1>
        </div>

      </div>
      <div className="seco-third">
        <div className="second ">

          <div className="second-col first">
            <h1>WCC3-WEEKLY TOURNAMENT</h1>
            <div className='date'>  <p style={{ color: 'yellow' }} >Date: 20-03-2022 to 20-03-2022 | ID:0KKDKA</p></div>
            <div>
              <p>Map: Chennai</p>
              <p>Perspective:2 </p>
              <p>Round :4</p>
            </div>
            <div>
              <p>Winning: 500</p>
              <p>Winner: 2 </p>
              <p>Entry Fees : 0</p>
            </div>

            <div>
              <p> Hosted By:</p>
            </div>
          </div>
          <div className="second-col seconds">   
           
          <a href=" https://app.adjust.net.in/czs3n9n?engagement_type=fallback_click"><h1>JOIN NOW</h1></a>
          </div>

        </div>

        <div className="third">
          <Secothird />
        </div>
      </div>
      <div className='Faqs' id='faq'>
        <h1>Gamerji FAQs</h1>
        <div className='dropdown'>
          <div class="accordion accordion-flush dropdown-faqs" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button accord-btn collapsed dropdown-btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  Can i actually win money on gamerji app ?
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body acord-text acord-text">Absolutely! Lots of players have already won big prizes on gamerji and you can too. We host different kinds of cash contests, each with its own entry fee and prize money.
                  choose a contest that you want to play, defeat and celebrate big wins.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button accord-btn collapsed dropdown-btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Is it safe to add money on Gamerji ?
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body acord-text">Why not ? Adding money on Gamerji is completely safe and secure. we have many different payment options on gamerji app. We promise you to ensure that your personal data is completely safe with us.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button accord-btn collapsed dropdown-btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  How Gamerji Score is Calculated ?
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body acord-text">Your gamerji score is calculated based on the contests you have joined and your ranks.
                  Joining league: 5 points
                  Rank 1: 50 Points Rank 2: 40 Points Rank 3: 30 Points Rank 4 to 10: 20 Points Rank 11 to 20: 10 Points Rank 21 to 30: 5 Points.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingFour">
                <button class="accordion-button accord-btn collapsed dropdown-btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                  Can Gamerji be Played Outside India ?
                </button>
              </h2>
              <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body acord-text">Gamerji is only open to residents of india, so a player from abroad cannot register or play on gamerji.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingFive">
                <button class="accordion-button accord-btn collapsed dropdown-btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                  Can I add cash on Gamerji using digital wallets like Paytm or Phonepe ?
                </button>
              </h2>
              <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body acord-text">Yes, to link wallet, head to Account section of the app and link your Phonepe wallet. Follow the onscreen instructions, and authenticate using the OTP sent to your number.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingSix">
                <button class="accordion-button accord-btn collapsed dropdown-btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                  Which Gamerji app to Download ?
                </button>
              </h2>
              <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body acord-text">Download the official Gamerji Android app from our website www.Gamerji.com. Apps that allow you to win money are not available on the Google Play Store.</div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingSeven">
                <button class="accordion-button accord-btn collapsed dropdown-btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                  Which Gamerji app to Download ?
                </button>
              </h2>
              <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body acord-text">Download the official Gamerji Android app from our website www.Gamerji.com. Apps that allow you to win money are not available on the Google Play Store.</div>
              </div>
            </div>


            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingNine">
                <button class="accordion-button accord-btn collapsed dropdown-btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                  How to Play On Gamerji App ?
                </button>
              </h2>
              <div id="flush-collapseNine" class="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body acord-text">Log in with your mobile number to register on Gamerji App. Follow the instruction as you set up your personalised player profile. Once done, follow the steps to participate in this game of mind and thrills !
                  •	Select the Tournament.
                  •	Select the game type you would want play under.
                  •	Select the type of contest you want to join, make sure to read the description of each contest to make sure it is right for you.
                  •	You'll will receive a room ID and a password 15 mins before the scheduled start of the match on the app, email & SMS. Use this </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="footer" id='footer'>
        <div className='imgs'> <img src="https://www.gamerji.com/img/logo.png" alt="" />
        </div> <h4>Social Channels</h4>
        <div className='links'>
          <a href=""> Facebook  </a>
          <a href=""> Instagram </a>
          <a href=""> LinkedIn </a>
          <a href=""> Youtube </a>
        </div>
        <div className='about'>
          <p>About</p>
          <p>|</p>
          <p>Terms& Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
        <p>@copyright 2020-22</p>
      </div>
    </>
  );
}

export default App;
