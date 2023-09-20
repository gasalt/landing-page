import Image from "next/image";
import style from "@/styles/page.module.scss";

const whyCards = [
  {
    logo: "/pay.svg",
    title: "Pay with any token",
    detail:
      "Send tokens to any address and choose to pay your transaction fees in the token you prefer.",
  },
  {
    logo: "/browser.svg",
    title: "Gasalt’s in-app browser",
    detail:
      "Dive into the exciting world of DApps right from our in-app browser, and yes, you can pay transaction fees your way!",
  },
  {
    logo: "/send.svg",
    title: "Send funds to multiple addresses",
    detail:
      "Send multiple tokens to numerous addresses in a single transaction. Saving time  was never this easy!",
  },
  {
    logo: "/open.svg",
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
    image: "/heart.svg",
    title: "Download the official Gasalt wallet",
    note: "Begin your journey by downloading the official Gasalt wallet. It's your gateway to a world of convenience and control.",
  },
  {
    image: "/refresh.svg",
    title: "Log in using your email.",
    note: "No more tedious sign-up processes or manual backups! Simply log in using your email and experience quick and secure access to your wallet.",
  },
  {
    image: "/ignore.svg",
    title: "Set up your free Gasalt ENS name",
    note: "Make sharing your wallet address a breeze with your very own Gasalt ENS name – absolutely free!",
  },
  {
    image: "/plus.svg",
    title: "Start receiving tokens into your wallet",
    note: "Once you're set up, start receiving tokens into your wallet effortlessly. Gasalt makes managing your crypto assets a seamless experience.",
  },
];

export default function Home() {
  return (
    <main>
      <section className={style.landing}>
        <div className={style.nav}>
          <p className={style.logo}>Gasalt</p>
          <button>Get started</button>
        </div>
        <div className={style.hero}>
          <div className={style.heroText}>
            <p className={style.heroTitle}>
              Effortlessly send tokens anywhere, pay fees your way!
            </p>
            <p className={style.heroFooter}>
              {`Seamlessly send tokens, choose your preferred transaction fee token, explore DApps within the app, and simplify multi-token transfers.`}{" "}
            </p>
            <div className={style.icons}>
              <Image
                src="/app-store.svg"
                width={157}
                height={46}
                alt="app-store"
              />
              <Image
                src="/play-store.svg"
                width={157}
                height={46}
                alt="app-store"
              />
            </div>
          </div>
          <div className={style.preview}>
            <Image
              className="ml-[90px] z-20 md:w-[311px] md:h-[630px] h-[467px] w-[230.79px]"
              src="/phone-front.svg"
              width={311}
              height={630}
              alt="iphone"
            />
            <Image
              className="md:mr-56 mt-5 overflow-hidden absolute h-[434.2px] w-[214.58px] md:w-[289px] md:h-[586px]"
              src="/phone-balance.svg"
              width={289}
              height={586}
              alt="iphone"
            />
          </div>
        </div>
      </section>
      <section className={style.why}>
        <p className={style.whyTitle}>Why Gasalt?</p>
        <p
          className={style.whyDescription}
        >{`While other wallets fall short, we've cracked the code to empower you with seamless DApp interaction on the Ethereum network.`}</p>
        <div className={style.whyCards}>
          {whyCards.map((card) => (
            <div key={card.logo} className={style.whyCard}>
              <div className={style.whyCardLogo}>
                <Image src={card.logo} width={72} height={72} alt="pay-logo" />
              </div>
              <p className={style.whyCardTitle}>{card.title}</p>
              <p className={style.whyCardDescription}>{card.detail}</p>
            </div>
          ))}
        </div>
        <div className={style.arrows}>
          <Image
            src="/left-arrow.svg"
            width={20}
            height={20}
            alt="left-arrow"
            className={style.arrow}
          />
          <Image
            src="/right-arrow.svg"
            width={20}
            height={20}
            alt="right-arrow"
            className={style.arrow}
          />
        </div>
      </section>
      <section className={style.elevate}>
        <div className={style.elevateText}>
          <p className={style.elevateTitle}>
            Elevate your DApp experience with Gasalt, the game-changing
            meta-transaction wallet.
          </p>
          <p className={style.elevateNote}>
            Gasalt not only offers seamless meta-transactions but also empowers
            you to actively engage with Ethereum DApps.
          </p>
        </div>
        <div className={style.elevatePhone}>
          <Image
            src="/top-right.png"
            width={185}
            height={177}
            alt="phone-send"
            className="absolute mb-[400px] md:mb-[600px] ml-[180px] md:ml-[280px] w-[118px] h-[113px] md:w-[185px] md:h-[177px]"
          />
          <Image
            src="/phone-send.png"
            width={311.62}
            height={630.56}
            alt="phone-send"
            className="h-[403.56px] w-[199.44px] md:w-auto md:h-auto"
          />
          <Image
            src="/bottom-left.png"
            width={281}
            height={207}
            alt="phone-send-wallets"
            className="absolute md:mt-[520px] md:mr-[350px] mr-[160px] mt-[350px] md:w-[281px] md:h-[207px] w-[180px] h-[132px]"
          />
        </div>
      </section>
      <section className={style.balance}>
        <div className={style.balancePhone}>
          <Image
            src="/swap.png"
            width={281}
            height={207}
            alt="phone-swap"
            className="w-[249px] h-[504px] md:mr-15 mr-20"
            // className="absolute md:mt-[520px] md:mr-[350px] mr-[160px] mt-[350px] md:w-[281px] md:h-[207px] w-[180px] h-[132px]"
          />
          <Image
            src="/qr.png"
            width={281}
            height={207}
            alt="phone-swap"
            className="absolute md:w-[257px] md:h-[409px] md:ml-[200px] mt-[280px] w-[205px] h-[327px] ml-20"
          />
        </div>
        <div className={style.balanceText}>
          <p className={style.balanceTitle}>
            Discover a world of convenience, flexibility like never before.
          </p>
          <div className="w-[573px] mt-8">
            <>
              {features.map((feature) => (
                <div key={feature.text} className="flex">
                  <Image
                    src="/star.svg"
                    width={32}
                    height={32}
                    alt="phone-swap"
                  />
                  <p className="text-[20px] md:text-[24px] leading-[29px] text-[#BBB8EA] ml-8 my-5">
                    {" "}
                    {feature.text}
                  </p>
                </div>
              ))}
              <button className={style.startButton}>Get started</button>
            </>
          </div>
        </div>
      </section>
      <section className={style.howTo}>
        <p className={style.howToTitle}>Using Gasalt is as Easy as 1-2-3!</p>
        <div className={style.howToBody}>
          <div className={style.howToText}>
            <>
              {howTos.map((how) => (
                <div key={how.image} className={style.howToGroup}>
                  <div className="w-[48px] h-[48px] bg-[#F9F5FF] flex justify-center items-center rounded-full">
                    <div className="w-[40px] h-[40px] bg-[#F4EBFF] flex justify-center items-center rounded-full">
                      <Image
                        src={how.image}
                        width={20.9}
                        height={18.23}
                        alt="phone-swap"
                        className="w-[20.9px] h-[18.23px]"
                      />
                    </div>
                  </div>
                  <div className="ml-5 w-[496px] text-[#667085]">
                    <p className="text-[20px] text-[#101828]">{how.title}</p>
                    <p>{how.note}</p>
                  </div>
                </div>
              ))}
              <div className={style.howIcons}>
                <Image
                  src="/app-store-black.png"
                  width={157}
                  height={46}
                  alt="app-store-black"
                  className="mr-10"
                />
                <Image
                  src="/play-store-black.png"
                  width={157}
                  height={46}
                  alt="play-store-black"
                />
              </div>
            </>
          </div>
          <div className={style.howToPhoto}>
            <div className={style.howPhotoContainer}>
              <div className="overflow-y-hidden h-[560px]">
                <Image
                  className="mx-auto mt-[150px]"
                  src="/phone-front.svg"
                  width={332}
                  height={673}
                  alt="iphone"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style.footer}>
        <p className="text-[#FFFFFF] text-[32px] text-center pt-16"> Gasalt </p>
        <p className="text-[#FFFFFF] text-[32px] text-center"> {"Let’s get started on something great"} </p>
        <div className="mx-auto w-[310px] pt-10 space-x-10">
          <button className="bg-primary-default text-[#FFF] w-[134px] h-[48px] rounded-lg">View Demo</button>
          <button className="transparent border text-[#FFF] border-primary-default w-[134px] h-[48px] rounded-lg">Get started</button>
        </div>
        <div className="w-[1280px] border-t border-[#475467] mx-auto mt-16 flex">
          <p className="mt-8 text-[#FFF] text-[16px] w-10/12">© 2023 Gasalt. All rights reserved.</p>
          <div className="flex mt-8 text-[#FFF] space-x-5">
            <p>Email</p>
            <p>Github</p>
            <p>Terms</p>
            <p>Privacy</p>
          </div>
        </div>

      </section>
    </main>
  );
}
