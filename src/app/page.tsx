"use client";
import Image from "next/image";
import Script from "next/script";
import { Slide, Fade, Zoom } from "react-awesome-reveal";
import style from "@/styles/page.module.scss";
import Modal from "@/Components/Modal";
import { useState } from "react";
const prefix = "";
const whyCards = [
  {
    logo: `/pay.svg`,
    title: "Pay with any token",
    detail:
      "Send tokens to any address and choose to pay your transaction fees in the token you prefer.",
  },
  {
    logo: `/browser.svg`,
    title: "Gasalt’s in-app browser",
    detail:
      "Dive into the exciting world of DApps right from our in-app browser, and yes, you can pay transaction fees your way!",
  },
  {
    logo: `/send.svg`,
    title: "Send funds to multiple addresses",
    detail:
      "Send multiple tokens to numerous addresses in a single transaction. Saving time  was never this easy!",
  },
  {
    logo: `/open.svg`,
    title: "Open source and free",
    detail:
      "Send multiple tokens to numerous addresses in a single transaction. Saving time and energy was never this easy!",
  },
];
const features = [
  {
    text: "Simplify sharing with a complimentary .gasalt.ens domain.",
  },
  {
    text: "Enjoy fee-free transfers and swaps.",
  },
  {
    text: "Don't miss our Gasalt token airdrop.",
  },
  {
    text: "Automatic backup, no need to worry about seed phrases.",
  },
];

const howTos = [
  {
    image: `/heart.svg`,
    title: "Download the official Gasalt wallet",
    note: "Begin your journey by downloading the official Gasalt wallet. It's your gateway to a world of convenience and control.",
  },
  {
    image: `/refresh.svg`,
    title: "Log in using your email.",
    note: "No more tedious sign-up processes or manual backups! Simply log in using your email and experience quick and secure access to your wallet.",
  },
  {
    image: `/ignore.svg`,
    title: "Set up your free Gasalt ENS name",
    note: "Make sharing your wallet address a breeze with your very own Gasalt ENS name – absolutely free!",
  },
  {
    image: `/plus.svg`,
    title: "Start receiving tokens into your wallet",
    note: "Once you're set up, start receiving tokens into your wallet effortlessly. Gasalt makes managing your crypto assets a seamless experience.",
  },
];

export default function Home() {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  const slideLeft = (event: any) => {
    event.preventDefault();
    let slider = document.getElementById("slider")!;
    slider!.scrollLeft = slider.scrollLeft += 300;
  };

  const slideRight = (event: any) => {
    event.preventDefault();
    let slider = document.getElementById("slider")!;
    slider.scrollLeft = slider.scrollLeft -= 300;
  };

  return (
    <main>
      <section className={style.landing}>
        <div className={style.nav}>
          <p className={style.logo}>Gasalt</p>
          <button onClick={() => setShowWaitlistModal(true)}>
            Get started
          </button>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center px-20 h-[1000px] md:h-[850px] mt-10">
          <div className="flex-1 md:w-[756px] text-white w-[361px] h-[339px] md:h-[485px]">
            <p className={style.heroTitle}>
              Effortlessly send tokens anywhere, pay fees your way!
            </p>
            <p className={style.heroFooter}>
              {`Seamlessly send tokens, choose your preferred transaction fee token, explore DApps within the app, and simplify multi-token transfers.`}{" "}
            </p>
            <div className="flex justify-between  mt-10 md:mt-16 md:w-[338px] w-[330px] md:mx-0 mx-auto h-[46px] mb-10">
              <Fade cascade direction="up" delay={500} triggerOnce>
                <Image
                  src={`/app-store.svg`}
                  width={157}
                  height={46}
                  alt="app-store"
                  className="cursor-pointer"
                />
                <Image
                  src={`/play-store.svg`}
                  width={157}
                  height={46}
                  alt="app-store"
                  className={`${style.play} cursor-pointer`}
                />
              </Fade>
            </div>
          </div>
          <Slide cascade direction="right" delay={100} triggerOnce>
            <div className="flex relative md:w-[550px] w-full my-20 pb-10">
              <Image
                className="absolute md:h-[630.56px] h-[467px] md:right-0 ml-[55px]"
                src={`/phone-front.svg`}
                width={311}
                height={630}
                alt="iphone"
              />
              <Image
                className="mt-5 md:mt-7 md:h-[585.27px] h-[434.2px] md:ml-[75px] -ml-[55px]"
                src={`/phone-balance.svg`}
                width={289}
                height={586}
                alt="iphone"
              />
            </div>
          </Slide>
        </div>
      </section>
      <section className={style.why}>
        <p className={style.whyTitle}>Why Gasalt?</p>
        <p className="md:w-[879px] w-[348px] text-[#BBB8EA] text-[20px] md:text-[24px] text-center mx-auto my-12">{`While other wallets fall short, we've cracked the code to empower you with seamless DApp interaction on the Ethereum network.`}</p>
        <div className="md:flex overflow-x-hidden" id="slider">
          <Fade direction="right" delay={200} cascade triggerOnce>
            {whyCards.map((card) => (
              <div
                key={card.logo}
                className="rounded-xl p-5 border-2 border-[#2C2A56] mb-4 md:mr-4 md:h-[460px] w-[340px] md:w-[415px] py-10"
              >
                <div className="bg-[#0D0C27] h-[99.2px] md:h-[90px] w-[99.2px] md:w-[90px] rounded-xl flex justify-center">
                  <Image
                    src={card.logo}
                    width={72}
                    height={72}
                    alt="pay-logo"
                  />
                </div>
                <p className="mt-4 text-[24px] md:text-[32px] text-[#CECCEF] w-[292px] md:w-[351px]">
                  {card.title}
                </p>
                <p className="text-[#BBB8EA] mt-4 text-[16px] md:text-[24px] md:leading-[33px] w-[292px] md:w-[351px]">
                  {card.detail}
                </p>
              </div>
            ))}
          </Fade>
        </div>
        <div className={style.arrows}>
          <Zoom delay={200} direction="left" triggerOnce>
            <Image
              src={`/left-arrow.svg`}
              width={20}
              height={20}
              alt="left-arrow"
              className={style.arrow}
              onClick={slideRight}
            />
            <Image
              src={`/right-arrow.svg`}
              width={20}
              height={20}
              alt="right-arrow"
              className={style.arrow}
              onClick={slideLeft}
            />
          </Zoom>
        </div>
      </section>
      <section className="flex py-[120px] md:flex-row-reverse flex-col px-4 md:px-20">
        <div className="flex-1 flex justify-center items-center flex-col">
          <Image
            src={`/top-right.png`}
            width={185}
            height={177}
            alt="phone-send"
            // className="absolute ml-[200px]"
            className="absolute mb-[400px] md:mb-[570px] ml-[180px] md:ml-[340px] w-[118px] h-[113px] md:w-[185px] md:h-[177px]"
          />
          <Image
            src={`/phone-send.png`}
            width={300}
            height={600}
            alt="phone-send"
            // className="border"
            // className="mt-20"
            className="h-[403.56px] w-[199.44px] md:w-[300px] md:h-[600px]"
          />
          <Image
            src={`/bottom-left.png`}
            width={250}
            height={207}
            alt="phone-send-wallets"
            // className="absolute -mt-20 -ml-36"
            className="absolute md:mt-[520px] md:mr-[450px] mr-[160px] mt-[350px] md:w-[281px] md:h-[207px] w-[180px] h-[132px]"
          />
        </div>
        {/* <div className=""></div> */}

        <Slide
          direction="left"
          cascade
          delay={200}
          className="flex-1 justify-center items-center flex mt-[65px] md:mt-0"
        >
          <div className={style.elevateText}>
            <p className={style.elevateTitle}>
              Elevate your DApp experience with Gasalt, the game-changing
              meta-transaction wallet.
            </p>
            <p className={style.elevateNote}>
              Gasalt not only offers seamless meta-transactions but also
              empowers you to actively engage with Ethereum DApps.
            </p>
            <div className={style.startButton}>
              <button>Get Started</button>
            </div>
          </div>
        </Slide>
        {/* <Slide direction="left" cascade delay={200}>
          
        </Slide> */}
      </section>
      <section className="flex md:py-[120px] px-4 md:px-20 relative md:flex-row flex-col">
        <div className="flex-1">
          <Image
            src={`/swap.png`}
            width={311}
            height={630}
            alt="phone-swap"
            className="h-[504px] w-[249px] md:h-[630px] md:w-[311px] mr-20"
          />
          <Image
            src={`/qr.png`}
            width={281}
            height={207}
            alt="phone-swap"
            className="absolute -mt-[300px] md:-mt-[380px] ml-[150px] md:ml-[200px] w-[205px] h-[327px] md:h-[409px] md:w-[257px]"
          />
        </div>
        <Slide delay={200} direction="right" className="flex-1 pb-36">
          <div className={style.balanceText}>
            <p className={style.balanceTitle}>
              Discover a world of convenience, flexibility like never before.
            </p>
            <div className={style.balanceList}>
              <>
                {features.map((feature) => (
                  <div key={feature.text} className="flex">
                    <Image
                      src={`/star.svg`}
                      width={32}
                      height={32}
                      alt="phone-swap"
                      className="h-1/3 mt-8 md:h-auto md:mt-0"
                    />
                    <p className="text-[20px] w-[302px] md:w-[517px] md:text-[24px] md:leading-[29px] leading-[20px] text-[#BBB8EA] ml-4 my-5">
                      {" "}
                      {feature.text}
                    </p>
                  </div>
                ))}
                <button className=" bg-primary-default w-[136px] h-[44px] text-[#F6F6F6] rounded-lg mt-5 hover:bg-primary-hover hover:border hover:border-primary-default">
                  Get started
                </button>
              </>
            </div>
          </div>
        </Slide>
      </section>
      <section className={style.howTo}>
        <p className={style.howToTitle}>Using Gasalt is as Easy as 1-2-3!</p>
        <div className="md:flex md:flex-row-reverse mt-10">
          <div className="flex-1 h-[560px] flex justify-center">
            <div className="bg-gradient-to-b from-[#554CDB] to-[#3830A9] h-[450px] overflow-y-hidden rounded-xl mt-5 md:w-[70%]">
              <Slide direction="up" triggerOnce>
                <Image
                  className="mx-auto mt-[150px] h-[500px]"
                  src={`/phone-front.svg`}
                  width={332}
                  height={673}
                  alt="iphone"
                />
              </Slide>
            </div>
          </div>
          <div className="flex-1 h-[560px] space-y-8">
            <Fade
              cascade
              direction="up"
              delay={500}
              triggerOnce
              className="flex ml-5 md:ml-0 my-4"
            >
              {howTos.map((how) => (
                <div key={how.image} className="flex">
                  <div className="w-[48px] h-[48px] bg-[#F9F5FF] flex justify-center items-center rounded-full">
                    <div className="w-[40px] h-[40px] bg-[#F4EBFF] flex justify-center items-center rounded-full">
                      <Image
                        src={how.image}
                        width={20}
                        height={40}
                        alt="phone-swap"
                        className="w-[20.9px] h-[18.23px]"
                      />
                    </div>
                  </div>
                  <div className="ml-2 md:w-[496px] text-[#667085] text-[16px] mt-2">
                    <p className="text-[#101828] leading-[30px] text-[20px] md:w-[496px] w-[291px] mb-1 font-medium">
                      {how.title}
                    </p>
                    <p className="text-[#667085] leading-[24px] text-[16px] md:w-[496px] w-[291px]">
                      {how.note}
                    </p>
                  </div>
                </div>
              ))}
            </Fade>
            <div className="flex md:ml-[55px] md:space-x-6 md:flex-row flex-col space-y-10 ml-[70px] md:space-y-0">
              <Fade direction="up" cascade delay={200} className="">
                <Image
                  src={`/app-store-black.png`}
                  width={157}
                  height={46}
                  alt="app-store-black"
                  className="cursor-pointer"
                />
                <Image
                  src={`/play-store-black.png`}
                  width={157}
                  height={46}
                  alt="play-store-black"
                  className={`${style.black} cursor-pointer`}
                />
              </Fade>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#0F0D2C] md:h-[400px] h-[600px]">
        <p className="text-[#FFFFFF] text-[32px] text-center pt-16 font-semibold mb-3">
          Gasalt
        </p>
        <p className={style.footerHeader}>
          {"Let's get started on something great"}{" "}
        </p>
        <div className="mx-auto w-[310px] pt-10 space-x-10 mb-10">
          <button className="bg-primary-default text-[#FFF] w-[134px] h-[48px] rounded-lg">
            View Demo
          </button>
          <button
            onClick={() => setShowWaitlistModal(true)}
            className={`transparent text-[#FFF] border-primary-default w-[134px] h-[48px] rounded-lg`}
          >
            Get started
          </button>
        </div>
        <hr className="w-[80%] mx-auto" />
        <div className="w-[80%] md:flex-row mx-auto flex-col-reverse flex justify-between mt-10 md:mx-auto text-[16px] text-[#98A2B3]">
          <p className="text-center mt-5 md:mt-0">
            © 2023 Gasalt. All rights reserved.
          </p>
          <div className="flex md:flex-row flex-col justify-center items-center space-y-5 md:space-y-0 md:space-x-5 leading-[24px]">
            <p>Email</p>
            <p>Github</p>
            <div className="flex space-x-5">
              <p>Terms</p>
              <p>Privacy</p>
            </div>
          </div>
        </div>
      </footer>
      {showWaitlistModal && (
        <WaitListModal setShowWaitlistModal={setShowWaitlistModal} />
      )}
    </main>
  );
}

const WaitListModal = ({
  setShowWaitlistModal,
}: {
  setShowWaitlistModal: any;
}) => {
  return (
    <Modal setShowModal={setShowWaitlistModal}>
      <Script src="https://getlaunchlist.com/js/widget.js" defer />

      <h3 className="font-semibold text-lg">Be the first to know</h3>
      <div
        className="launchlist-widget"
        data-key-id="z4OLWR"
        data-height="180px"
      ></div>
    </Modal>
  );
};
