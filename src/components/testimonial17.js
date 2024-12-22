import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial17-text31">Testimonials</span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial17-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text36">
                  I have been using the trading view indicators from this
                  website for a while now, and I must say they have
                  significantly improved my analysis. The price action concepts
                  are top-notch!
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial17-text33">John Doe</span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text34">
                            Forex Trader
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text30">5 stars</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial17-text28">
                            Jane Smith
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text37">
                            Cryptocurrency Investor
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text29">
                        Great selection of indicators. The oscillator matrix has
                        been a game-changer for me in identifying market trends
                        accurately.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial17-text25">
                            David Williams
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text35">
                            Stock Trader
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text26">
                        Highly recommend these indicators to any trader looking
                        to enhance their technical analysis skills. Excellent
                        customer service as well!
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial17-text32">
                            Sarah Johnson
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text27">
                            Commodities Trader
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text24">
                        The indicators offered on this website are worth every
                        penny. They have helped me make more informed trading
                        decisions.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  review4: undefined,
  author3Name: undefined,
  review3: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1525337132786-5828a43893af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDg1MTQ3Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Position: undefined,
  author2Name: undefined,
  author1Alt: 'Image of John Doe',
  review2: undefined,
  review1: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1486649567693-aaa9b2e59385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDg1MTQ3M3w&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1541190990694-4a612732721c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDg1MTQ3Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Name: undefined,
  author1Name: undefined,
  author1Position: undefined,
  author3Position: undefined,
  author4Alt: 'Image of Sarah Johnson',
  author3Alt: 'Image of David Williams',
  author2Alt: 'Image of Jane Smith',
  author2Src:
    'https://images.unsplash.com/photo-1712685884811-5f1cf73e3d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDg1MTQ3M3w&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  author2Position: undefined,
}

Testimonial17.propTypes = {
  review4: PropTypes.element,
  author3Name: PropTypes.element,
  review3: PropTypes.element,
  author4Src: PropTypes.string,
  author4Position: PropTypes.element,
  author2Name: PropTypes.element,
  author1Alt: PropTypes.string,
  review2: PropTypes.element,
  review1: PropTypes.element,
  author3Src: PropTypes.string,
  heading1: PropTypes.element,
  author1Src: PropTypes.string,
  author4Name: PropTypes.element,
  author1Name: PropTypes.element,
  author1Position: PropTypes.element,
  author3Position: PropTypes.element,
  author4Alt: PropTypes.string,
  author3Alt: PropTypes.string,
  author2Alt: PropTypes.string,
  author2Src: PropTypes.string,
  content1: PropTypes.element,
  author2Position: PropTypes.element,
}

export default Testimonial17
