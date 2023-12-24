import React from 'react'
import Head from 'next/head'

import FeatureCard from '../components/feature-card'
import Question from '../components/question'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>DOGE X GROK</title>
          <meta property="og:title" content="DOGE X GROK" />
        </Head>
        <div className="home-header">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <span className="home-logo">
              DogeXGrok ($DXG)
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div data-thq="thq-navbar-nav" className="home-desktop-menu">
              <nav className="home-links">
                <a href="#toko">Token Supply</a>
                <a href="#road" className="home-nav2">
                  Roadmap
                </a>
                <a href="#parts" className="home-nav3">
                  Partners
                </a>
                <a href="#disc" className="home-nav4">
                  Disclaimer
                </a>
              </nav>
              <div className="home-buttons"></div>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div className="home-nav">
                <div className="home-top">
                  <span className="home-logo1">CRYPTO</span>
                  <div data-thq="thq-close-menu" className="home-close-menu">
                    <svg viewBox="0 0 1024 1024" className="home-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="home-links1">
                  <span className="home-nav11">Token Supply</span>
                  <span className="home-nav21">Roadmap</span>
                  <span className="home-nav31">Partners</span>
                  <span href="#parts" className="home-nav41">
                    Disclaimer
                  </span>
                </nav>
                <div className="home-buttons1"></div>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <div className="home-hero">
          <div className="home-hero1">
            <div className="home-container01">
              <h1 className="home-hero-heading heading1">
                Most Promising Meme Token In The Crypto Field
              </h1>
              <span className="home-hero-sub-heading">BUY NOW</span>
              <div className="home-btn-group">
                <button className="home-hero-button2 button">
                  CA: 0x00000000000000
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="home-details">
          <div className="home-details1">
            <div className="home-container02">
              <h2 className="home-details-heading heading2">About Us</h2>
              <span className="home-details-sub-heading">
                <span className="home-text">
                  Introducing Doge X Grok (DXG), the meme token that unites the
                  power of the Doge community, Twitter enthusiasts (X), and the
                  innovative world of AI by Elon Musk&apos;s Grok. With a total
                  supply of 499,000,000,000,000,000, DXG is set to revolutionize
                  the crypto ecosystem.
                </span>
                <br className="home-text01"></br>
                <span>
                  DXG operates on a 5% tax for both buying and selling,
                  contributing to its sustainability and community-driven
                  growth. The burning mechanism ensures a deflationary aspect,
                  enhancing scarcity over time and potentially increasing the
                  value of each token.
                </span>
                <br className="home-text03"></br>
                <br className="home-text04"></br>
                <br className="home-text05"></br>
                <br className="home-text06"></br>
                <span>
                  Embracing the future of decentralized finance (DeFi), DXG
                  integrates seamlessly with NFTs, offering a comprehensive
                  experience for crypto enthusiasts. The inclusion of Elon
                  Musk&apos;s AI, Grok, adds a unique and futuristic dimension
                  to the community, fostering innovation and technological
                  advancement within the meme coin space.
                </span>
                <br className="home-text08"></br>
                <br className="home-text09"></br>
                <br className="home-text10"></br>
                <br className="home-text11"></br>
              </span>
            </div>
            <div className="home-details-image"></div>
          </div>
        </div>
        <div className="home-features">
          <div className="home-features-container">
            <div className="home-features1">
              <div className="home-container03">
                <h2 id="toko" className="home-features-heading heading2">
                  Tokenomics
                </h2>
              </div>
              <div className="home-container04">
                <FeatureCard
                  Heading="Name"
                  SubHeading="DOGEXGROK"
                ></FeatureCard>
                <FeatureCard
                  Heading="Total Supply"
                  SubHeading="499 quadrillion"
                ></FeatureCard>
                <FeatureCard Heading="Symbol" SubHeading="DXG"></FeatureCard>
              </div>
            </div>
          </div>
        </div>
        <div className="home-pricing">
          <div className="home-pricing1">
            <div className="home-container05">
              <h2 id="road" className="home-pricing-heading heading2">
                Roadmap
              </h2>
            </div>
            <div className="home-container06">
              <div className="home-pricing-card">
                <div className="home-container07">
                  <span className="home-free-plan-description">
                    {' '}
                    Pre-launch Preparation
                  </span>
                </div>
                <div className="home-container08">
                  <span className="home-free-plan-price">Phase 1:</span>
                </div>
                <div className="home-container09">
                  <div className="home-container10">
                    <span className="home-text12">✔</span>
                    <span className="home-free-plan-features">
                      <span>
                        Develop a compelling plan outlining the purpose,
                        utility, and uniqueness of DogeXGrok.
                      </span>
                      <br></br>
                      <span>
                        Create social media accounts and a dedicated website to
                        build a community.
                      </span>
                      <br></br>
                      <span>
                        Initiate partnerships with influencers and meme creators
                        to generate pre-launch hype.
                      </span>
                      <br></br>
                      <span>
                        Conduct thorough security audits for the smart contract
                        to ensure a secure and fair launch.
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-pricing-card1">
                <div className="home-container11">
                  <span className="home-basic-plan-description">
                    Presale Fair Launch on PinkSale
                  </span>
                </div>
                <div className="home-container12">
                  <span className="home-basic-plan-pricing">Phase 2:</span>
                </div>
                <div className="home-container13">
                  <div className="home-container14">
                    <span className="home-text20">✔</span>
                    <span className="home-text21">
                      <span>
                        Set a reasonable hard cap and allocate tokens for the
                        presale on PinkSale.
                      </span>
                      <br></br>
                      <span>
                        Implement a fair token distribution strategy to avoid
                        concentration among a few holders.
                      </span>
                      <br></br>
                      <span>
                        Run an extensive marketing campaign leading up to the
                        presale, utilizing social media, forums, and
                        influencers.
                      </span>
                      <br></br>
                      <span>
                        Engage the community through AMA (Ask Me Anything)
                        sessions to address any concerns or questions.
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-pricing-card2">
                <div className="home-container15">
                  <span className="home-pro-plan-description">
                    Post-launch Stabilization
                  </span>
                </div>
                <div className="home-container16">
                  <span className="home-pro-plan-pricing">Phase 3:</span>
                </div>
                <div className="home-container17">
                  <div className="home-container18">
                    <span className="home-text29">✔</span>
                    <span className="home-text30">
                      <span>
                        Launch on PancakeSwap immediately after the presale
                        concludes.
                      </span>
                      <br></br>
                      <span>
                        Lock liquidity on PancakeSwap for an extended period to
                        provide confidence to investors.
                      </span>
                      <br></br>
                      <span>
                        Implement a buyback mechanism using a portion of the
                        transaction fees to stabilize the token price.
                      </span>
                      <br></br>
                      <span>
                        Continue marketing efforts to maintain and grow the
                        community.
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-pricing-card3">
                <div className="home-container19">
                  <span className="home-pro-plan-description1">
                    Community Growth and Development
                  </span>
                </div>
                <div className="home-container20">
                  <span className="home-pro-plan-pricing1">Phase 4:</span>
                </div>
                <div className="home-container21">
                  <div className="home-container22">
                    <span className="home-text38">✔</span>
                    <span className="home-text39">
                      <span>
                        Allocate funds for community-driven initiatives, such as
                        meme contests, giveaways, and community development
                        grants.
                      </span>
                      <br></br>
                      <span>
                        Explore additional exchanges to increase liquidity and
                        accessibility.
                      </span>
                      <br></br>
                      <span>
                        Develop partnerships and collaborations within the
                        crypto and meme communities.
                      </span>
                      <br></br>
                      <span>
                        Regularly update the community on project developments
                        through social media, newsletters, and AMAs.
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-gallery">
          <div className="home-gallery1">
            <h1 id="parts" className="home-gallery-heading heading2">
              Our Partners
            </h1>
            <div className="home-container23">
              <img
                alt="image"
                src="/1_0y89qcf-ncigqqxds1ch8g-200h.jpg"
                className="home-image"
              />
            </div>
            <div className="home-container24">
              <img
                alt="image"
                src="/f7bla1hx0aar8ld-400w.jpg"
                className="home-image1"
              />
            </div>
            <div className="home-container25">
              <img
                alt="image"
                src="/pancakeswap-cake3276-400w.jpg"
                className="home-image2"
              />
            </div>
          </div>
        </div>
        <div className="home-banner">
          <div className="home-banner1">
            <h1 className="home-banner-heading heading2">
              Token Supply and Price Details
            </h1>
            <span className="home-banner-sub-heading">
              Learn about our token supply and current price
            </span>
            <button className="home-banner-button button">View Details</button>
          </div>
        </div>
        <div className="home-faq">
          <div className="home-faq-container">
            <div className="home-faq1">
              <div className="home-container26">
                <span className="home-text47 sectionTitle">
                  <span>FAQ</span>
                  <br></br>
                </span>
                <h2 className="home-text50 heading2">Common questions</h2>
                <span className="home-text51">
                  <span>
                    Here are some of the most common questions that we get.
                  </span>
                  <br></br>
                  <span>
                    <span>
                      <span>
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
                    <span>
                      <span>
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
                  </span>
                  <span>
                    <span>
                      <span>
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
                    <span>
                      <span>
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
                  </span>
                </span>
              </div>
              <div className="home-container27">
                <Question
                  Answer="The total token supply is XXXX tokens."
                  Question="What is the total token supply?"
                ></Question>
                <Question
                  Answer="The current price of the token is XXXX."
                  Question="What is the current price of the token?"
                ></Question>
                <Question
                  Answer="The steps planned for the first quarter are XXXX."
                  Question="What are the steps planned for the first quarter?"
                ></Question>
                <Question
                  Answer="Our partners include XXXX, XXXX, and XXXX."
                  Question="Who are the partners of our crypto currency?"
                ></Question>
                <Question
                  Answer="The disclaimer for our crypto currency is XXXX."
                  Question="What is the disclaimer for our crypto currency?"
                ></Question>
              </div>
            </div>
          </div>
        </div>
        <div className="home-feature-card">
          <h2 id="disc" className="home-text68">
            Disclaimer:
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h2>
          <span className="home-text69">
            <span>
              The information provided here is for informational purposes only
              and should not be considered financial advice. Investing in
              cryptocurrency, including meme tokens like Doge X Grok (DXG),
              involves inherent risks, and users should conduct their own
              research and exercise caution before making any investment
              decisions. The content provided does not guarantee any specific
              outcomes, and past performance is not indicative of future
              results. Cryptocurrency markets are highly volatile, and prices
              can fluctuate rapidly. Always consult with a financial advisor and
              only invest what you can afford to lose. The user is solely
              responsible for their investment choices, and this disclaimer
              absolves the author and the platform from any liability related to
              financial decisions made based on the information provided.
            </span>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <span>
              $DogeXGrok is just a BEP20 meme coin with no intrinsic value or
              expectation of financial return. It’s built by a committed and
              based set of contributors solely for entertainment &amp; community
              engagement purposes.
            </span>
            <br></br>
            <br></br>
          </span>
        </div>
        <div className="home-footer">
          <footer className="home-footer1">
            <div className="home-container28">
              <span className="home-logo2">
                DogeXGrok
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <nav className="home-nav1 home-nav1">
                <a href="#toko" className="home-nav12">
                  Token Supply
                </a>
                <a href="#road" className="home-nav22">
                  Roadmap
                </a>
                <a href="#parts" className="home-nav32">
                  Partners
                </a>
                <a href="#disc" className="home-nav42">
                  Disclaimer
                </a>
              </nav>
            </div>
            <div className="home-separator"></div>
            <div className="home-container29">
              <span className="home-text78">
                Copyright ©️ at DogeXGrok community 2023
              </span>
              <div className="home-icon-group1">
                <a
                  href="https://x.com/DogeXGrok "
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon10"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
                <a
                  href="https:// t.me/DogeXGrok"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link1"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M512 0c-282.8 0-512 229.2-512 512s229.2 512 512 512 512-229.2 512-512-229.2-512-512-512zM763.6 351l-84 395.8c-5.8 28.2-22.8 34.8-46.4 21.8l-128-94.6-61.4 59.8c-7.2 7-12.8 12.8-25.6 12.8-16.6 0-13.8-6.2-19.4-22l-43.6-143.2-126.6-39.4c-27.4-8.4-27.6-27.2 6.2-40.6l493.2-190.4c22.4-10.2 44.2 5.4 35.6 40z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-header {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            background-color: #eb0101;
          }
          .home-navbar-interactive {
            width: 90%;
            display: flex;
            position: sticky;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-threeunits);
            border-radius: 50px;
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .home-logo {
            font-size: 2em;
            font-family: 'Lato';
            font-weight: bold;
            text-transform: uppercase;
          }
          .home-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .home-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-nav1 {
            transition: 0.3s;
            text-decoration: none;
          }
          .home-nav1:hover {
            color: #3d6e70ff;
          }
          .home-nav2 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-nav2:hover {
            color: #3d6e70ff;
          }
          .home-nav3 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-nav3:hover {
            color: #3d6e70ff;
          }
          .home-nav4 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-nav4:hover {
            color: #3d6e70ff;
          }
          .home-buttons {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            border-radius: 50px;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-logo1 {
            font-size: 2em;
            font-weight: bold;
          }
          .home-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            fill: var(--dl-color-gray-900);
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .home-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-nav11 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-nav21 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-nav31 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-nav41 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-buttons1 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-hero {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            background-color: #ef4747;
          }
          .home-hero1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            min-height: auto;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-container01 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-hero-heading {
            color: var(--dl-color-gray-white);
            max-width: 800px;
            text-align: center;
            font-family: 'Raleway';
            line-height: 1.6;
          }
          .home-hero-sub-heading {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-align: center;
            line-height: 1.6;
          }
          .home-btn-group {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-hero-button2 {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            font-weight: bold;
            padding-top: var(--dl-space-space-unit);
            border-color: transparent;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: transparent;
          }
          .home-hero-button2:hover {
            border-color: var(--dl-color-gray-white);
          }
          .home-details {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            min-width: auto;
            align-items: center;
            justify-content: center;
          }
          .home-details1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: space-between;
          }
          .home-container02 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-details-heading {
            width: 80%;
            text-align: left;
            font-family: 'Raleway';
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-details-sub-heading {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            text-align: left;
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text01 {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            line-height: 1.6;
          }
          .home-text03 {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            line-height: 1.6;
          }
          .home-text04 {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            line-height: 1.6;
          }
          .home-text05 {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            line-height: 1.6;
          }
          .home-text06 {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            line-height: 1.6;
          }
          .home-text08 {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            line-height: 1.6;
          }
          .home-text09 {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            line-height: 1.6;
          }
          .home-text10 {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            line-height: 1.6;
          }
          .home-details-image {
            width: 500px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 500px;
            display: flex;
            position: relative;
            align-items: center;
            margin-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/l5-500h.png');
            background-position: center;
          }
          .home-features {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-features-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-secondary-grey400);
          }
          .home-features1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: flex-start;
          }
          .home-container03 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-features-heading {
            font-family: 'Raleway';
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-container04 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
          }
          .home-pricing {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-pricing1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
            background-color: #df6666;
          }
          .home-container05 {
            gap: 0;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-pricing-heading {
            font-family: 'Raleway';
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-container06 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            justify-content: center;
          }
          .home-pricing-card {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 450px;
            min-height: 450px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: #d43d40;
          }
          .home-container07 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-free-plan-description {
            color: #ffffff;
            line-height: 1.6;
          }
          .home-container08 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-free-plan-price {
            font-size: 4rem;
            font-weight: 700;
          }
          .home-container09 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-container10 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text12 {
            color: var(--dl-color-gray-800);
          }
          .home-free-plan-features {
            color: #ffffff;
          }
          .home-pricing-card1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: 450px;
            min-height: 450px;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            background-color: #d43d40;
          }
          .home-container11 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-basic-plan-description {
            color: #ffffff;
            line-height: 1.6;
          }
          .home-container12 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-basic-plan-pricing {
            font-size: 4rem;
            font-weight: 700;
          }
          .home-container13 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-container14 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text20 {
            color: var(--dl-color-gray-800);
          }
          .home-text21 {
            color: #ffffff;
          }
          .home-pricing-card2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 450px;
            min-height: 450px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: #d43d40;
          }
          .home-container15 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-pro-plan-description {
            color: #ffffff;
            line-height: 1.6;
          }
          .home-container16 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-pro-plan-pricing {
            font-size: 4rem;
            font-weight: 700;
          }
          .home-container17 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-container18 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text29 {
            color: var(--dl-color-gray-800);
          }
          .home-text30 {
            color: #ffffff;
            line-height: 1.6;
          }
          .home-pricing-card3 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 450px;
            min-height: 450px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: #d43d40;
          }
          .home-container19 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-pro-plan-description1 {
            color: #ffffff;
            line-height: 1.6;
          }
          .home-container20 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-pro-plan-pricing1 {
            font-size: 4rem;
            font-weight: 700;
          }
          .home-container21 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-container22 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text38 {
            color: var(--dl-color-gray-800);
          }
          .home-text39 {
            color: #ffffff;
            line-height: 1.6;
          }
          .home-gallery {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-gallery1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .home-gallery-heading {
            text-align: center;
            font-family: 'Raleway';
            line-height: 1.6;
          }
          .home-container23 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image {
            width: 350px;
            height: 200px;
            object-fit: cover;
          }
          .home-container24 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image1 {
            width: 350px;
            height: 200px;
            object-fit: cover;
          }
          .home-container25 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image2 {
            width: 350px;
            height: 253px;
            object-fit: cover;
          }
          .home-banner {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .home-banner1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: var(--dl-size-size-maxwidth);
            display: none;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: flex-start;
          }
          .home-banner-heading {
            color: var(--dl-color-gray-white);
            text-align: center;
            font-family: 'Raleway';
            line-height: 1.6;
          }
          .home-banner-sub-heading {
            color: var(--dl-color-gray-white);
            max-width: var(--dl-size-size-maxwidth);
            text-align: center;
            line-height: 1.6;
          }
          .home-banner-button {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            font-weight: 700;
            padding-top: 1.5rem;
            border-width: 0px;
            padding-left: 3rem;
            border-radius: 45px;
            padding-right: 3rem;
            padding-bottom: 1.5rem;
            background-color: var(--dl-color-primary1-blue100);
          }
          .home-banner-button:hover {
            border-color: rgba(41, 20, 119, 0.9);
            background-color: rgba(41, 20, 119, 0.9);
          }
          .home-faq {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-faq-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-faq1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: 580px;
            display: none;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .home-container26 {
            display: flex;
            max-width: 35%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text47 {
            color: var(--dl-color-primary1-blue80);
            font-family: 'Raleway';
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text50 {
            font-family: 'Raleway';
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text51 {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            text-align: left;
            line-height: 1.6;
          }
          .home-container27 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #bfd682;
          }
          .home-text68 {
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text69 {
            color: #000000;
          }
          .home-footer {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .home-footer1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: space-between;
          }
          .home-container28 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-logo2 {
            color: var(--dl-color-gray-white);
            font-size: 2em;
            font-weight: bold;
          }
          .home-nav1 {
            flex: 0 0 auto;
            display: flex;
            margin-top: 0px;
            align-items: center;
            flex-direction: row;
          }
          .home-nav12 {
            color: var(--dl-color-secondary-gray500);
            margin-left: 0px;
            text-decoration: none;
          }
          .home-nav22 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-nav32 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-nav42 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-separator {
            flex: 0 0 auto;
            width: 100%;
            height: 0px;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            margin-left: 0px;
            border-color: var(--dl-color-gray-800);
            border-style: solid;
            border-width: 1px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-container29 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text78 {
            color: var(--dl-color-secondary-gray500);
          }
          .home-icon-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link {
            display: contents;
          }
          .home-icon10 {
            fill: var(--dl-color-secondary-gray500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-link1 {
            display: contents;
          }
          .home-icon12 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
            text-decoration: none;
          }
          @media (max-width: 1600px) {
            .home-header {
              background-color: #eb0101;
            }
            .home-hero {
              background-color: #ef4747;
            }
            .home-hero-heading {
              font-family: Comic Sans MS;
            }
            .home-hero-sub-heading {
              font-family: Comic Sans MS;
            }
            .home-hero-button2 {
              font-family: Comic Sans MS;
            }
            .home-details-heading {
              font-family: Comic Sans MS;
            }
            .home-details-sub-heading {
              font-family: Comic Sans MS;
            }
            .home-features-container {
              border-radius: var(--dl-radius-radius-radius8);
              background-color: #b8e274;
            }
            .home-features1 {
              border-radius: var(--dl-radius-radius-radius8);
              background-color: #b8e274;
            }
            .home-features-heading {
              font-family: Comic Sans MS;
            }
            .home-pricing1 {
              background-color: #df6666;
            }
            .home-pricing-heading {
              font-family: Comic Sans MS;
            }
            .home-pricing-card {
              background-color: #d43d40;
            }
            .home-free-plan-description {
              color: #ffffff;
              font-family: Comic Sans MS;
            }
            .home-free-plan-price {
              font-family: Comic Sans MS;
            }
            .home-free-plan-features {
              color: #ffffff;
              font-family: Comic Sans MS;
            }
            .home-pricing-card1 {
              background-color: #d43d40;
            }
            .home-basic-plan-description {
              color: #ffffff;
              font-family: Comic Sans MS;
            }
            .home-basic-plan-pricing {
              font-family: Comic Sans MS;
            }
            .home-text21 {
              color: #ffffff;
              font-family: Comic Sans MS;
            }
            .home-pricing-card2 {
              background-color: #d43d40;
            }
            .home-pro-plan-description {
              color: #ffffff;
              font-family: Comic Sans MS;
            }
            .home-pro-plan-pricing {
              font-family: Comic Sans MS;
            }
            .home-text30 {
              color: #ffffff;
              font-family: Comic Sans MS;
            }
            .home-pricing-card3 {
              background-color: #d43d40;
            }
            .home-pro-plan-description1 {
              color: #ffffff;
              font-family: Comic Sans MS;
            }
            .home-pro-plan-pricing1 {
              font-family: Comic Sans MS;
            }
            .home-text39 {
              color: #ffffff;
              font-family: Comic Sans MS;
            }
            .home-gallery {
              background-color: #e16163;
            }
            .home-gallery1 {
              background-color: #e16163;
            }
            .home-gallery-heading {
              font-family: Comic Sans MS;
            }
            .home-image {
              width: 350px;
              height: 200px;
              border-radius: var(--dl-radius-radius-radius8);
            }
            .home-image1 {
              width: 350px;
              height: 200px;
              border-radius: var(--dl-radius-radius-radius8);
            }
            .home-image2 {
              width: 350px;
              height: 200px;
              border-radius: var(--dl-radius-radius-radius8);
            }
            .home-banner1 {
              display: none;
            }
            .home-faq1 {
              display: none;
            }
            .home-text68 {
              font-family: Comic Sans MS;
            }
            .home-text69 {
              color: #000000;
              font-family: Comic Sans MS;
            }
            .home-logo2 {
              font-family: Comic Sans MS;
            }
            .home-nav12 {
              font-family: Comic Sans MS;
            }
            .home-nav22 {
              font-family: Comic Sans MS;
            }
            .home-nav32 {
              font-family: Comic Sans MS;
            }
            .home-nav42 {
              font-family: Comic Sans MS;
            }
            .home-text78 {
              color: var(--dl-color-secondary-gray500);
              font-family: Comic Sans MS;
            }
            .home-icon12 {
              fill: #d9d9d9;
            }
          }
          @media (max-width: 1200px) {
            .home-features1 {
              background-color: #39dad7;
            }
            .home-pricing1 {
              background-color: #df6666;
            }
            .home-pricing-card {
              height: 673px;
              margin-bottom: 0px;
            }
            .home-free-plan-description {
              line-height: 1.6;
            }
            .home-free-plan-price {
              font-size: 4rem;
              font-weight: 700;
            }
            .home-free-plan-features {
              color: #ffffff;
            }
            .home-pricing-card1 {
              height: 689px;
            }
            .home-basic-plan-description {
              line-height: 1.6;
            }
            .home-basic-plan-pricing {
              font-size: 4rem;
              font-weight: 700;
            }
            .home-text21 {
              color: #ffffff;
              text-align: left;
            }
            .home-pricing-card2 {
              height: 762px;
            }
            .home-pro-plan-description {
              line-height: 1.6;
            }
            .home-pro-plan-pricing {
              font-size: 4rem;
            }
            .home-text30 {
              color: #ffffff;
              line-height: 1.6;
            }
            .home-pricing-card3 {
              height: 876px;
            }
            .home-pro-plan-description1 {
              line-height: 1.6;
            }
            .home-pro-plan-pricing1 {
              font-size: 4rem;
              font-weight: 700;
            }
            .home-text39 {
              color: #ffffff;
            }
            .home-image {
              width: 350px;
              height: 200px;
            }
            .home-image1 {
              width: 350px;
              height: 200px;
            }
            .home-image2 {
              width: 350px;
              height: 200px;
            }
            .home-icon12 {
              fill: #d9d9d9;
            }
          }
          @media (max-width: 991px) {
            .home-hero1 {
              flex-direction: column;
            }
            .home-container01 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home-hero-heading {
              text-align: center;
            }
            .home-hero-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-details-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-text {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-text11 {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-container06 {
              align-items: center;
              flex-direction: column;
            }
            .home-pricing-card {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              max-width: 450px;
            }
            .home-pricing-card1 {
              width: 100%;
              max-width: 450px;
            }
            .home-pricing-card2 {
              width: 100%;
              max-width: 450px;
            }
            .home-pricing-card3 {
              width: 100%;
              max-width: 450px;
            }
            .home-image {
              width: 300px;
              height: 200px;
            }
            .home-image1 {
              width: 300px;
              height: 200px;
            }
            .home-image2 {
              width: 300px;
              height: 200px;
            }
            .home-banner-sub-heading {
              max-width: 100%;
            }
            .home-text51 {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .home-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-burger-menu {
              align-items: center;
              justify-content: center;
            }
            .home-mobile-menu {
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-nav11 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav21 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav31 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav41 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-hero-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-details1 {
              align-items: center;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
              justify-content: center;
            }
            .home-container02 {
              align-items: center;
              justify-content: flex-start;
            }
            .home-details-heading {
              text-align: center;
            }
            .home-details-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text {
              text-align: center;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text11 {
              text-align: center;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-details-image {
              margin-top: var(--dl-space-space-threeunits);
              margin-left: 0px;
            }
            .home-features1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container04 {
              grid-template-columns: 1fr;
            }
            .home-pricing1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container06 {
              align-items: center;
              flex-direction: column;
            }
            .home-pricing-card {
              width: 100%;
              max-width: 450px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-pricing-card1 {
              width: 100%;
              max-width: 450px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-pricing-card2 {
              width: 100%;
              max-width: 450px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-pricing-card3 {
              width: 100%;
              max-width: 450px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-gallery1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-image {
              width: 300px;
              height: 200px;
            }
            .home-image1 {
              width: 300px;
              height: 200px;
            }
            .home-image2 {
              width: 300px;
              height: 200px;
            }
            .home-banner1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-banner-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-faq1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-container26 {
              max-width: 100%;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .home-text51 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-footer1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container29 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-text78 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .home-navbar-interactive {
              width: 90%;
              padding: var(--dl-space-space-unit);
            }
            .home-logo {
              font-size: 1.5em;
            }
            .home-desktop-menu {
              display: none;
            }
            .home-nav1 {
              text-decoration: none;
            }
            .home-nav2 {
              text-decoration: none;
            }
            .home-nav3 {
              text-decoration: none;
            }
            .home-nav4 {
              text-decoration: none;
            }
            .home-burger-menu {
              display: flex;
            }
            .home-icon {
              display: none;
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-logo1 {
              font-size: 1.5em;
            }
            .home-icon02 {
              fill: var(--dl-color-gray-900);
            }
            .home-nav41 {
              color: var(--dl-color-gray-black);
            }
            .home-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container01 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-btn-group {
              flex-direction: column;
            }
            .home-hero-button2 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .home-details-image {
              width: 450px;
            }
            .home-features1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-pricing-card2 {
              margin-bottom: 0px;
            }
            .home-pricing-card3 {
              margin-bottom: 0px;
            }
            .home-gallery1 {
              padding: var(--dl-space-space-unit);
            }
            .home-image {
              flex: 1;
              width: 300px;
              height: 200px;
            }
            .home-image1 {
              width: 300px;
              height: 200px;
            }
            .home-image2 {
              width: 300px;
              height: 200px;
            }
            .home-banner1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text68 {
              font-style: normal;
              font-weight: 600;
            }
            .home-text69 {
              color: #000000;
            }
            .home-footer1 {
              padding: var(--dl-space-space-unit);
            }
            .home-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container29 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-text78 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
