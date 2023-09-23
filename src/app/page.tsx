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
    <main >
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
                className={style.play}
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
        {/* <div className={style.arrows}>
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
        </div> */}
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
            className={style.elevatePhone1}
          />
          <Image
            src="/phone-send.png"
            width={311.62}
            height={630.56}
            alt="phone-send"
            className={style.elevatePhone2}
          />
          <Image
            src="/bottom-left.png"
            width={281}
            height={207}
            alt="phone-send-wallets"
            className="absolute md:mt-[520px] md:mr-[350px] mr-[160px] mt-[350px] md:w-[281px] md:h-[207px] w-[180px] h-[132px]"
          />
        </div>
        <button className={style.startButton}>Get started</button>
      </section>
      <section className={style.balance}>
        <div className={style.balancePhone}>
          <Image
            src="/swap.png"
            width={281}
            height={207}
            alt="phone-swap"
            className={style.balancePhone1}
          />
          <Image
            src="/qr.png"
            width={281}
            height={207}
            alt="phone-swap"
            className={style.balancePhone2}
          />
        </div>
        <div className={style.balanceText}>
          <p className={style.balanceTitle}>
            Discover a world of convenience, flexibility like never before.
          </p>
          <div className="w-[573px] mt-8">
            <>
              {features.map((feature) => (
                <div key={feature.text}className={style.list1}>
                  <Image
                    src="/star.svg"
                    width={32}
                    height={32}
                    alt="phone-swap"
                    className={style.star}
                  />
                  <p className={style.sublist}>
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
                        className={style.howImage}
                      />
                    </div>
                  </div>
                  <div className={style.howToSubTextContainer}>
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
                  className={style.bottom}
                />
              </div>
            </>
          </div>
          <div className={style.howToPhotoContainer}>
            <div className={style.howPhoto}>
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
        <p className={style.footerTitle}> Gasalt </p>
        <p className={style.footerStarted}> {"Let’s get started on something great"} </p>
        <div className={style.footerButton}>
          <button className="bg-primary-default text-[#FFF] w-[134px] h-[48px] rounded-lg">View Demo</button>
          <button className="transparent border text-[#FFF] border-primary-default w-[134px] h-[48px] rounded-lg">Get started</button>
        </div>
        <div className={style.footerBorder}>
          <p className={style.footerMsg}>© 2023 Gasalt. All rights reserved.</p>
          <div className={style.footerOptions}>
            <p className={style.firstp}>Email</p>
            <p>Github</p>
            <div className={style.thirdp}>
            <p>Terms</p>
            <p>Privacy</p>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
