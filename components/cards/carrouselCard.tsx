import Image from "next/image";
import Link from "next/link";

function carrouselCard() {
  return (
    <section className="carousel">
      <div className="banner-left">
        <Image src="/assets/chicken.png" alt="dish" width={350} height={320} />

        <p className="banner-text">Best Chicken Dishes</p>
        <h1 className="banner-title">Chicken recipes</h1>
      </div>

      <div className="banner-right">
        <Link href="/" className="item">
          <Image src="/assets/logo.png" alt="dishs" width={70} height={50} />
          <p>10 recipes for “tomato pasta” with exquisite sauce</p>
        </Link>

        <Link href="/" className="item">
          <Image src="/assets/logo.png" alt="dishs" width={70} height={50} />
          <p>10 recipes for “tomato pasta” with exquisite sauce</p>
        </Link>

        <Link href="/" className="item">
          <Image src="/assets/logo.png" alt="dishs" width={70} height={50} />
          <p>10 recipes for “tomato pasta” with exquisite sauce</p>
        </Link>
      </div>
    </section>
  );
}

export default carrouselCard;
