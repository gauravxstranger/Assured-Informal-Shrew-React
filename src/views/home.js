import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Assured Informal Shrew</title>
        <meta property="og:title" content="Assured Informal Shrew" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">#home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">#indicators</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">#about</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">#contact</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">Indicators</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">About Us</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Contact</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Explore Now</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Contact Us</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110">
              Welcome to our trading view indicators store.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">
              Explore a variety of price action concepts and oscillator matrix
              indicators.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Learn more about our mission and vision.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">
              Get in touch with us for any inquiries.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">Shop Now</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115">Learn More</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116">
              Explore our collection of trading view indicators, including price
              action concepts and oscillator matrix, designed to take your
              technical analysis to the next level.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117">
              Enhance Your Trading Analysis with Our Indicators
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118">Price Action Concepts</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119">Price Action Indicators</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120">Oscillator Matrix Indicators</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121">
              Explore a variety of price action indicators to elevate your
              trading decisions.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122">
              Improve your technical analysis with our range of price action
              concepts.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123">
              Enhance your trading strategies with our oscillator matrix
              indicators.
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">Explore Indicators</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Browse our collection of trading view indicators, price action
              concepts, and oscillator matrix to take your technical analysis to
              the next level.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126">Enhance Your Trading Analysis</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text127">Price Action Concepts</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text128">Oscillator Matrix</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text129">Customizable Indicators</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text130">
              Enhance your technical analysis with our exclusive price action
              indicators.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Utilize our oscillator matrix to identify potential market trends
              and reversals.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text132">
              Tailor indicators to suit your trading style and preferences.
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text133">Basic plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text134">Business plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text135">Enterprise plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text136">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text137">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text138">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text139">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text140">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text143">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text144">$49</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text145">$79</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text146">$99</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text147">Add to Cart</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text148">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text149">$499</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text150">Add to Cart</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text151">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text152">$799</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text153">Add to Cart</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text154">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text155">$999</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text156">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text157">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text158">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text159">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text160">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text161">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text162">Price Action Concepts</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text163">Support and Resistance Levels</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text164">Candlestick Patterns</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text165">Oscillator Matrix</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text166">Moving Average Crossovers</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text167">Relative Strength Index (RSI)</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text169">Advanced Chart Patterns</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text170">Fibonacci Retracement Levels</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text171">MACD Divergence Signals</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text172">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text174">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text177">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text180">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text181">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text182">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text183">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text184">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text185">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text186">Browse Indicators</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text187">Select Indicators</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text188">Add to Cart</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text189">Checkout</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text190">
              Explore our wide range of trading view indicators, including price
              action concepts and oscillator matrix.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text191">
              Choose the indicators that best suit your trading style and
              technical analysis needs.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text192">
              Add your selected indicators to the cart for a seamless shopping
              experience.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text193">
              Complete your purchase securely and start enhancing your trading
              strategies with our premium indicators.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text194">5 stars</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text195">
              Great selection of indicators. The oscillator matrix has been a
              game-changer for me in identifying market trends accurately.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text196">
              Highly recommend these indicators to any trader looking to enhance
              their technical analysis skills. Excellent customer service as
              well!
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text197">
              The indicators offered on this website are worth every penny. They
              have helped me make more informed trading decisions.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text198">
              I have been using the trading view indicators from this website
              for a while now, and I must say they have significantly improved
              my analysis. The price action concepts are top-notch!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text199">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text200">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text201">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text202">David Williams</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text203">Sarah Johnson</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text204">Forex Trader</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text205">Cryptocurrency Investor</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text206">Stock Trader</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text207">Commodities Trader</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text208">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text209">Locations</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210">Bucharest</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text211">Cluj - Napoca</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text212">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text213">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text214">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text215">Products</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text216">About Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text217">Contact Us</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text218">FAQs</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text219">Terms and Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text220">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text221">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
