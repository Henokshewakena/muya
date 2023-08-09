import Image from "next/image";

function bannerCard() {
  return (
    <section className="banner">
      <div className="banner-left">
        <Image src="/assets/logo.png" alt="dish" width={250} height={320} />

        <p className="banner-text">Best Chicken Dishes</p>
        <h1 className="banner-title">Chicken recipes</h1>
      </div>

      <div className="banner-right">
        <div className="item">
          <Image src="/assets/logo.png" alt="dishs" width={70} height={50} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            incidunt totam ipsam atque ut possimus
          </p>
        </div>
        <div className="item">
          <Image src="/assets/logo.png" alt="dishs" width={70} height={50} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            incidunt totam ipsam atque ut possimus
          </p>
        </div>
        <div className="item">
          <Image src="/assets/logo.png" alt="dishs" width={70} height={50} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            incidunt totam ipsam atque ut possimus
          </p>
        </div>
      </div>
    </section>
  );
}

export default bannerCard;
