import React from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import FeatureCard from '../components/feature-card'
import Question from '../components/question'

const Home = (props) => {
  return (
    <>
      <div className="home-container10">
        <Head>
          <title>DOGE X GROK</title>
          <meta property="og:title" content="DOGE X GROK" />
        </Head>
        <div className="home-header">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <span className="home-logo1">
              DogeXGrok ($DXG)
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div data-thq="thq-navbar-nav" className="home-desktop-menu">
              <nav className="home-links1">
                <a href="#toko" className="home-nav11">
                  Token Supply
                </a>
                <a href="#road" className="home-nav21">
                  Roadmap
                </a>
                <a href="#parts" className="home-nav31">
                  Partners
                </a>
                <a href="#disc" className="home-nav41">
                  Disclaimer
                </a>
              </nav>
              <div className="home-buttons1"></div>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon10">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div className="home-nav5">
                <div className="home-top">
                  <span className="home-logo2">CRYPTO</span>
                  <div data-thq="thq-close-menu" className="home-close-menu">
                    <svg viewBox="0 0 1024 1024" className="home-icon12">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="home-links2">
                  <span className="home-nav12">Token Supply</span>
                  <span className="home-nav22">Roadmap</span>
                  <span className="home-nav32">Partners</span>
                  <span href="#parts" className="home-nav42">
                    Disclaimer
                  </span>
                </nav>
                <div className="home-buttons2"></div>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon14"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon16"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon18"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <div className="home-hero1">
          <div className="home-hero2">
            <div className="home-container11">
              <h1 className="home-hero-heading heading1">
                We are here to unite all meme token community together
              </h1>
              <a
                href="https://pump.fun/coin/CoC7z57vYfvmZJtpumUrzWtBQZvVUmQ8jct6Jqz4pump"
                target="_blank"
                rel="noreferrer noopener"
                className="home-hero-sub-heading"
              >
                BUY NOW
              </a>
              <div className="home-btn-group">
                <button className="home-hero-button2 button">
                  CA: CoC7z57vYfvmZJtpumUrzWtBQZvVUmQ8jct6Jqz4pump
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="home-details1">
          <div className="home-details2">
            <div className="home-container12">
              <h2 className="home-details-heading heading2">About Us</h2>
              <span className="home-details-sub-heading">
                <span className="home-text10">
                  Introducing Doge X Grok (DXG), the meme token that unites the
                  power of the Doge community, Twitter enthusiasts (X), and the
                  innovative world of AI by Elon Musk&apos;s Grok. With a total
                  supply of 499,000,000,000,000,000, DXG is set to revolutionize
                  the crypto ecosystem.
                </span>
                <br className="home-text11"></br>
                <span>
                  DXG operates on a 5% tax for both buying and selling,
                  contributing to its sustainability and community-driven
                  growth. The burning mechanism ensures a deflationary aspect,
                  enhancing scarcity over time and potentially increasing the
                  value of each token.
                </span>
                <br className="home-text13"></br>
                <br className="home-text14"></br>
                <br className="home-text15"></br>
                <br className="home-text16"></br>
                <span>
                  Embracing the future of decentralized finance (DeFi), DXG
                  integrates seamlessly with NFTs, offering a comprehensive
                  experience for crypto enthusiasts. The inclusion of Elon
                  Musk&apos;s AI, Grok, adds a unique and futuristic dimension
                  to the community, fostering innovation and technological
                  advancement within the meme coin space.
                </span>
                <br className="home-text18"></br>
                <br className="home-text19"></br>
                <br className="home-text20"></br>
                <br className="home-text21"></br>
              </span>
            </div>
            <div className="home-details-image"></div>
          </div>
        </div>
        <div className="home-features1">
          <div className="home-features-container">
            <div className="home-features2">
              <div className="home-container13">
                <h2 id="toko" className="home-features-heading heading2">
                  Tokenomics
                </h2>
              </div>
              <div className="home-container14">
                <FeatureCard
                  heading="Name"
                  subHeading="DOGEXGROK"
                ></FeatureCard>
                <FeatureCard
                  heading="Total Supply"
                  subHeading="1 billion"
                ></FeatureCard>
                <FeatureCard heading="Symbol" subHeading="DXG"></FeatureCard>
              </div>
            </div>
          </div>
        </div>
        <div className="home-pricing1">
          <div className="home-pricing2">
            <div className="home-container15">
              <h2 id="road" className="home-pricing-heading heading2">
                Roadmap
              </h2>
            </div>
            <div className="home-container16">
              <div className="home-pricing-card1">
                <div className="home-container17">
                  <span className="home-free-plan-description">
                    {' '}
                    Pre-launch Preparation
                  </span>
                </div>
                <div className="home-container18">
                  <span className="home-free-plan-price">Phase 1:</span>
                </div>
                <div className="home-container19">
                  <div className="home-container20">
                    <span className="home-text22">✔</span>
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
              <div className="home-pricing-card2">
                <div className="home-container21">
                  <span className="home-basic-plan-description">
                    Presale Fair Launch on PinkSale
                  </span>
                </div>
                <div className="home-container22">
                  <span className="home-basic-plan-pricing">Phase 2:</span>
                </div>
                <div className="home-container23">
                  <div className="home-container24">
                    <span className="home-text30">✔</span>
                    <span className="home-text31">
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
              <div className="home-pricing-card3">
                <div className="home-container25">
                  <span className="home-pro-plan-description1">
                    Post-launch Stabilization
                  </span>
                </div>
                <div className="home-container26">
                  <span className="home-pro-plan-pricing1">Phase 3:</span>
                </div>
                <div className="home-container27">
                  <div className="home-container28">
                    <span className="home-text39">✔</span>
                    <span className="home-text40">
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
              <div className="home-pricing-card4">
                <div className="home-container29">
                  <span className="home-pro-plan-description2">
                    Community Growth and Development
                  </span>
                </div>
                <div className="home-container30">
                  <span className="home-pro-plan-pricing2">Phase 4:</span>
                </div>
                <div className="home-container31">
                  <div className="home-container32">
                    <span className="home-text48">✔</span>
                    <span className="home-text49">
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
        <div className="home-gallery1">
          <div className="home-gallery2">
            <h1 id="parts" className="home-gallery-heading heading2">
              Our Partners
            </h1>
            <div className="home-container33">
              <img
                alt="image"
                src="/1_0y89qcf-ncigqqxds1ch8g-200h.jpg"
                className="home-image1"
              />
            </div>
            <div className="home-container34">
              <img
                alt="image"
                src="/f7bla1hx0aar8ld-400w.jpg"
                className="home-image2"
              />
            </div>
            <div className="home-container35">
              <img
                alt="image"
                src="/pancakeswap-cake3276-400w.jpg"
                className="home-image3"
              />
            </div>
          </div>
        </div>
        <div className="home-banner1">
          <div className="home-banner2">
            <h1 className="home-banner-heading heading2">
              Token Supply and Price Details
            </h1>
            <span className="home-banner-sub-heading">
              Learn about our token supply and current price
            </span>
            <button className="home-banner-button button">View Details</button>
          </div>
        </div>
        <div className="home-faq1">
          <div className="home-faq-container">
            <div className="home-faq2">
              <div className="home-container36">
                <span className="home-text57 sectionTitle">
                  <span>FAQ</span>
                  <br></br>
                </span>
                <h2 className="home-text60 heading2">Common questions</h2>
                <span className="home-text61">
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
              <div className="home-container37">
                <Question
                  answer="The total token supply is XXXX tokens."
                  question="What is the total token supply?"
                ></Question>
                <Question
                  answer="The current price of the token is XXXX."
                  question="What is the current price of the token?"
                ></Question>
                <Question
                  answer="The steps planned for the first quarter are XXXX."
                  question="What are the steps planned for the first quarter?"
                ></Question>
                <Question
                  answer="Our partners include XXXX, XXXX, and XXXX."
                  question="Who are the partners of our crypto currency?"
                ></Question>
                <Question
                  answer="The disclaimer for our crypto currency is XXXX."
                  question="What is the disclaimer for our crypto currency?"
                ></Question>
              </div>
            </div>
          </div>
        </div>
        <div className="home-feature-card">
          <h2 id="disc" className="home-text78">
            Disclaimer:
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h2>
          <span className="home-text79">
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
        <div className="home-footer1">
          <footer className="home-footer2">
            <div className="home-container38">
              <span className="home-logo3">
                DogeXGrok
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <nav className="home-nav6">
                <a href="#toko" className="home-nav13">
                  Token Supply
                </a>
                <a href="#road" className="home-nav23">
                  Roadmap
                </a>
                <a href="#parts" className="home-nav33">
                  Partners
                </a>
                <a href="#disc" className="home-nav43">
                  Disclaimer
                </a>
              </nav>
            </div>
            <div className="home-separator"></div>
            <div className="home-container39">
              <span className="home-text88">
                Copyright ©️ at DogeXGrok community 2023
              </span>
              <div className="home-icon-group2">
                <a
                  href="https://t.me/DogeXGrok"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon20">
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
          .home-container10 {
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
            background-color: #f1948a;
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
          .home-logo1 {
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
          .home-links1 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-nav11 {
            transition: 0.3s;
            text-decoration: none;
          }
          .home-nav11:hover {
            color: #3d6e70ff;
          }
          .home-nav21 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-nav21:hover {
            color: #3d6e70ff;
          }
          .home-nav31 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-nav31:hover {
            color: #3d6e70ff;
          }
          .home-nav41 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-nav41:hover {
            color: #3d6e70ff;
          }
          .home-buttons1 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon10 {
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
          .home-nav5 {
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
          .home-logo2 {
            font-size: 2em;
            font-weight: bold;
          }
          .home-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon12 {
            fill: var(--dl-color-gray-900);
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .home-links2 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-nav12 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-nav22 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-nav32 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-nav42 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-buttons2 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon16 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon18 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-hero1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            background-color: #f1948a;
          }
          .home-hero2 {
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
          .home-container11 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-hero-heading {
            color: #5740de;
            max-width: 800px;
            text-align: center;
            font-family: 'Yey2';
            line-height: 1.6;
          }
          .home-hero-sub-heading {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-align: center;
            line-height: 1.6;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            animation-name: rubberBand;
            animation-delay: 0s;
            text-decoration: none;
            background-color: #ff0606;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
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
          .home-details1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            min-width: auto;
            align-items: center;
            justify-content: center;
          }
          .home-details2 {
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
          .home-container12 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-details-heading {
            color: #5740de;
            width: 80%;
            text-align: left;
            font-family: 'Yey2';
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
          .home-text11 {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            line-height: 1.6;
          }
          .home-text13 {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            line-height: 1.6;
          }
          .home-text14 {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            line-height: 1.6;
          }
          .home-text15 {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            line-height: 1.6;
          }
          .home-text16 {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            line-height: 1.6;
          }
          .home-text18 {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            line-height: 1.6;
          }
          .home-text19 {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            line-height: 1.6;
          }
          .home-text20 {
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
            background-image: url('/img_20241122_182917_484_enhanced%20(2)-500h.png');
            background-position: center;
          }
          .home-features1 {
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
          .home-features2 {
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
          .home-container13 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-features-heading {
            color: #5740de;
            font-family: 'Yey2';
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-container14 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
          }
          .home-pricing1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-pricing2 {
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
            background-color: #f1948a;
          }
          .home-container15 {
            gap: 0;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-pricing-heading {
            color: #5740de;
            font-family: 'Yey2';
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-container16 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            justify-content: center;
          }
          .home-pricing-card1 {
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
          .home-container17 {
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
          .home-container18 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-free-plan-price {
            font-size: 4rem;
            font-weight: 700;
          }
          .home-container19 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-container20 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text22 {
            color: var(--dl-color-gray-800);
          }
          .home-free-plan-features {
            color: #ffffff;
          }
          .home-pricing-card2 {
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
          .home-container21 {
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
          .home-container22 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-basic-plan-pricing {
            font-size: 4rem;
            font-weight: 700;
          }
          .home-container23 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-container24 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text30 {
            color: var(--dl-color-gray-800);
          }
          .home-text31 {
            color: #ffffff;
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
          .home-container25 {
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
          .home-container26 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-pro-plan-pricing1 {
            font-size: 4rem;
            font-weight: 700;
          }
          .home-container27 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-container28 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text39 {
            color: var(--dl-color-gray-800);
          }
          .home-text40 {
            color: #ffffff;
            line-height: 1.6;
          }
          .home-pricing-card4 {
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
          .home-container29 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-pro-plan-description2 {
            color: #ffffff;
            line-height: 1.6;
          }
          .home-container30 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-pro-plan-pricing2 {
            font-size: 4rem;
            font-weight: 700;
          }
          .home-container31 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-container32 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text48 {
            color: var(--dl-color-gray-800);
          }
          .home-text49 {
            color: #ffffff;
            line-height: 1.6;
          }
          .home-gallery1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-gallery2 {
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
            color: #5740de;
            text-align: center;
            font-family: 'Yey2';
            line-height: 1.6;
          }
          .home-container33 {
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
          .home-container34 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image2 {
            width: 350px;
            height: 200px;
            object-fit: cover;
          }
          .home-container35 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image3 {
            width: 350px;
            height: 253px;
            object-fit: cover;
          }
          .home-banner1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .home-banner2 {
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
          .home-faq1 {
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
          .home-faq2 {
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
          .home-container36 {
            display: flex;
            max-width: 35%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text57 {
            color: var(--dl-color-primary1-blue80);
            font-family: 'Raleway';
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text60 {
            font-family: 'Raleway';
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text61 {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            text-align: left;
            line-height: 1.6;
          }
          .home-container37 {
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
          .home-text78 {
            color: #5740de;
            font-family: 'Yey2';
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text79 {
            color: #000000;
          }
          .home-footer1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .home-footer2 {
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
          .home-container38 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-logo3 {
            color: var(--dl-color-gray-white);
            font-size: 2em;
            font-weight: bold;
          }
          .home-nav6 {
            flex: 0 0 auto;
            display: flex;
            margin-top: 0px;
            align-items: center;
            flex-direction: row;
          }
          .home-nav13 {
            color: var(--dl-color-secondary-gray500);
            margin-left: 0px;
            text-decoration: none;
          }
          .home-nav23 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-nav33 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-nav43 {
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
          .home-container39 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text88 {
            color: var(--dl-color-secondary-gray500);
          }
          .home-icon-group2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link {
            display: contents;
          }
          .home-icon20 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
            text-decoration: none;
          }
          @media (max-width: 1600px) {
            .home-header {
              background-color: #f1948a;
            }
            .home-hero1 {
              background-color: #f1948a;
            }
            .home-hero-heading {
              color: #5740de;
              font-family: Yey2;
            }
            .home-hero-sub-heading {
              font-family: Comic Sans MS;
              animation-name: rubberBand;
              animation-delay: 0s;
              animation-duration: 300ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .home-hero-button2 {
              font-family: Comic Sans MS;
            }
            .home-details-heading {
              color: #5740de;
              font-family: Yey2;
            }
            .home-details-sub-heading {
              font-family: Comic Sans MS;
            }
            .home-features-container {
              border-radius: var(--dl-radius-radius-radius8);
              background-color: #b8e274;
            }
            .home-features2 {
              border-radius: var(--dl-radius-radius-radius8);
              background-color: #b8e274;
            }
            .home-features-heading {
              color: #5740de;
              font-family: Yey2;
            }
            .home-pricing2 {
              background-color: #f1948a;
            }
            .home-pricing-heading {
              color: #5740de;
              font-family: Yey2;
            }
            .home-pricing-card1 {
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
            .home-pricing-card2 {
              background-color: #d43d40;
            }
            .home-basic-plan-description {
              color: #ffffff;
              font-family: Comic Sans MS;
            }
            .home-basic-plan-pricing {
              font-family: Comic Sans MS;
            }
            .home-text31 {
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
            .home-text40 {
              color: #ffffff;
              font-family: Comic Sans MS;
            }
            .home-pricing-card4 {
              background-color: #d43d40;
            }
            .home-pro-plan-description2 {
              color: #ffffff;
              font-family: Comic Sans MS;
            }
            .home-pro-plan-pricing2 {
              font-family: Comic Sans MS;
            }
            .home-text49 {
              color: #ffffff;
              font-family: Comic Sans MS;
            }
            .home-gallery1 {
              background-color: #f1948a;
            }
            .home-gallery2 {
              background-color: #f1948a;
            }
            .home-gallery-heading {
              color: #5740de;
              font-family: Yey2;
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
            .home-image3 {
              width: 350px;
              height: 200px;
              border-radius: var(--dl-radius-radius-radius8);
            }
            .home-banner2 {
              display: none;
            }
            .home-faq2 {
              display: none;
            }
            .home-text78 {
              color: #5740de;
              font-family: Yey2;
            }
            .home-text79 {
              color: #000000;
              font-family: Comic Sans MS;
            }
            .home-logo3 {
              font-family: Comic Sans MS;
            }
            .home-nav13 {
              font-family: Comic Sans MS;
            }
            .home-nav23 {
              font-family: Comic Sans MS;
            }
            .home-nav33 {
              font-family: Comic Sans MS;
            }
            .home-nav43 {
              font-family: Comic Sans MS;
            }
            .home-text88 {
              color: var(--dl-color-secondary-gray500);
              font-family: Comic Sans MS;
            }
            .home-icon20 {
              fill: #d9d9d9;
            }
          }
          @media (max-width: 1200px) {
            .home-header {
              background-color: #f1948a;
            }
            .home-hero-heading {
              color: rgb(87, 64, 222);
              font-family: Yey2;
              line-height: 1.6;
            }
            .home-details-heading {
              font-family: YeyeyRegular;
            }
            .home-features2 {
              background-color: #39dad7;
            }
            .home-features-heading {
              font-family: Yey2;
            }
            .home-pricing2 {
              background-color: #f1948a;
            }
            .home-pricing-heading {
              font-family: Yey2;
            }
            .home-pricing-card1 {
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
            .home-pricing-card2 {
              height: 689px;
            }
            .home-basic-plan-description {
              line-height: 1.6;
            }
            .home-basic-plan-pricing {
              font-size: 4rem;
              font-weight: 700;
            }
            .home-text31 {
              color: #ffffff;
              text-align: left;
            }
            .home-pricing-card3 {
              height: 762px;
            }
            .home-pro-plan-description1 {
              line-height: 1.6;
            }
            .home-pro-plan-pricing1 {
              font-size: 4rem;
            }
            .home-text40 {
              color: #ffffff;
              line-height: 1.6;
            }
            .home-pricing-card4 {
              height: 876px;
            }
            .home-pro-plan-description2 {
              line-height: 1.6;
            }
            .home-pro-plan-pricing2 {
              font-size: 4rem;
              font-weight: 700;
            }
            .home-text49 {
              color: #ffffff;
            }
            .home-gallery2 {
              background-color: #f1948a;
            }
            .home-gallery-heading {
              font-family: Yey2;
            }
            .home-image1 {
              width: 350px;
              height: 200px;
            }
            .home-image2 {
              width: 350px;
              height: 200px;
            }
            .home-image3 {
              width: 350px;
              height: 200px;
            }
            .home-text78 {
              font-family: Yey2;
            }
            .home-logo3 {
              font-family: Comic Sans MS;
            }
            .home-icon20 {
              fill: #d9d9d9;
            }
          }
          @media (max-width: 991px) {
            .home-header {
              background-color: #f1948a;
            }
            .home-hero2 {
              flex-direction: column;
            }
            .home-container11 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home-hero-heading {
              color: #5740de;
              text-align: center;
            }
            .home-hero-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-details-heading {
              color: #5740de;
            }
            .home-details-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-text10 {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-text21 {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-features-heading {
              color: #5740de;
            }
            .home-pricing2 {
              background-color: #f1948a;
            }
            .home-container16 {
              align-items: center;
              flex-direction: column;
            }
            .home-pricing-card1 {
              width: 100%;
              padding: var(--dl-space-space-twounits);
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
            .home-pricing-card4 {
              width: 100%;
              max-width: 450px;
            }
            .home-gallery2 {
              background-color: #f1948a;
            }
            .home-image1 {
              width: 300px;
              height: 200px;
            }
            .home-image2 {
              width: 300px;
              height: 200px;
            }
            .home-image3 {
              width: 300px;
              height: 200px;
            }
            .home-banner-sub-heading {
              max-width: 100%;
            }
            .home-text61 {
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
            .home-nav12 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav22 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav32 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav42 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-hero2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-hero-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-details2 {
              align-items: center;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
              justify-content: center;
            }
            .home-container12 {
              align-items: center;
              justify-content: flex-start;
            }
            .home-details-heading {
              color: #5740de;
              text-align: center;
            }
            .home-details-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text10 {
              text-align: center;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text21 {
              text-align: center;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-details-image {
              margin-top: var(--dl-space-space-threeunits);
              margin-left: 0px;
            }
            .home-features2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-features-heading {
              color: #5740de;
            }
            .home-container14 {
              grid-template-columns: 1fr;
            }
            .home-pricing2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              background-color: #f1948a;
            }
            .home-pricing-heading {
              color: #5740de;
            }
            .home-container16 {
              align-items: center;
              flex-direction: column;
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
            .home-pricing-card4 {
              width: 100%;
              max-width: 450px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-gallery2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              background-color: #f1948a;
            }
            .home-gallery-heading {
              color: #5740de;
            }
            .home-image1 {
              width: 300px;
              height: 200px;
            }
            .home-image2 {
              width: 300px;
              height: 200px;
            }
            .home-image3 {
              width: 300px;
              height: 200px;
            }
            .home-banner2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-banner-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-faq2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-container36 {
              max-width: 100%;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .home-text61 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text78 {
              color: #5740de;
            }
            .home-footer2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container39 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-text88 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .home-header {
              background-color: #f1948a;
            }
            .home-navbar-interactive {
              width: 90%;
              padding: var(--dl-space-space-unit);
            }
            .home-logo1 {
              font-size: 1.5em;
            }
            .home-desktop-menu {
              display: none;
            }
            .home-nav11 {
              text-decoration: none;
            }
            .home-nav21 {
              text-decoration: none;
            }
            .home-nav31 {
              text-decoration: none;
            }
            .home-nav41 {
              text-decoration: none;
            }
            .home-burger-menu {
              display: flex;
            }
            .home-icon10 {
              display: none;
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-logo2 {
              font-size: 1.5em;
            }
            .home-icon12 {
              fill: var(--dl-color-gray-900);
            }
            .home-nav42 {
              color: var(--dl-color-gray-black);
            }
            .home-hero2 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container11 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-btn-group {
              flex-direction: column;
            }
            .home-hero-button2 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .home-details-heading {
              color: #5740de;
            }
            .home-details-image {
              width: 450px;
            }
            .home-features2 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-features-heading {
              color: #5740de;
            }
            .home-pricing2 {
              background-color: #f1948a;
            }
            .home-pricing-heading {
              color: #5740de;
            }
            .home-pricing-card3 {
              margin-bottom: 0px;
            }
            .home-pricing-card4 {
              margin-bottom: 0px;
            }
            .home-gallery2 {
              padding: var(--dl-space-space-unit);
              background-color: #f1948a;
            }
            .home-gallery-heading {
              color: #5740de;
            }
            .home-image1 {
              flex: 1;
              width: 300px;
              height: 200px;
            }
            .home-image2 {
              width: 300px;
              height: 200px;
            }
            .home-image3 {
              width: 300px;
              height: 200px;
            }
            .home-banner2 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text78 {
              color: #5740de;
              font-style: normal;
              font-weight: 600;
            }
            .home-text79 {
              color: #000000;
            }
            .home-footer2 {
              padding: var(--dl-space-space-unit);
            }
            .home-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container39 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-text88 {
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

export async function getStaticProps(context) {
  const messages = (await import('/locales/' + context.locale + '.json'))
    .default
  return {
    props: {
      messages,
      ...context,
    },
  }
}
