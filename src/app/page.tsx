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
              className="mr-40 mt-5 overflow-hidden absolute h-[434.2px] w-[214.58px] md:w-[289px] md:h-[586px]"
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
          <Image src="/left-arrow.svg" width={20} height={20} alt="left-arrow" className={style.arrow}/>
          <Image src="/right-arrow.svg" width={20} height={20} alt="right-arrow" className={style.arrow}/>
        </div>
      </section>
      <section className={style.elevate}>

      </section>

    </main>
  );
}
