import hero from "./images/illustration-hero.svg"
import musicIcon from "./images/icon-music.svg"
import background from "./images/pattern-background-desktop.svg"
import backgroundMobile from "./images/pattern-background-mobile.svg"

function App() {
  return (
    <>
    <img src={background} alt="background" className="absolute w-full inset-0 backgroundDesktop"/>
    <img src={backgroundMobile} alt="background" className="absolute w-full inset-0 backgroundMobile"/>

      <main>
        <div className="w-96 rounded-2xl overflow-hidden bg-white relative z-10 wrapper">
          <img src={hero} alt="hero" />
          <div className="p-5 text-center textContent">
            <h1 className="text-2xl my-5">Order Summary</h1>
            <p className="leading-tight mb-7">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
            <div className="w-10/12 mx-auto mb-5 flex items-center justify-between p-5 rounded-xl priceContent">
              <div className="price flex items-center gap-4 w-full">
                <img src={musicIcon} alt="music"/>
                <div className="flex items-center justify-center flex-col annualPrice">
                  <h3 className="annualPlan">Annual Plan</h3>
                  <h3 className="priceYear">$59.99/year</h3>
                </div>
              </div>
              <button className="underline underline-offset-1 font-bold changeLink">Change</button>
            </div>
          </div>
            <button className="w-3/4 mb-5 mx-auto font-bold block proceedPayment rounded-xl text-white p-3">Proceed to Payment</button>
            <button className="block mb-10 font-bold mx-auto cancelOrder">Cancel Order</button>
        </div>
        <div className="attribution">
          <span>Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.</span> 
          <span>Coded by <a href="https://github.com/snowsneakers">Patrick Snowden</a>.</span>
        </div>
      </main>
    </>
  );
}

export default App;
