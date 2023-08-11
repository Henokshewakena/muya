import Image from "next/image";
import Link from "next/link";

function LargerBlog() {
  return (
    <section className="h-auto bg-gray-1 text-black flex flex-col py-7">
      <div className="flex justify-center mb-10">
        <h1 className="font-imprima font-normal text-3xl text-center w-3/12 text-black">
          Check Out this speedy meals
        </h1>
      </div>
      <div className="flex justify-between px-24 py-5">
        <div className="grid grid-cols-1 gap-2">
          <Image
            className="icons"
            alt="dish"
            src="/assets/blog1.webp"
            width={300}
            height={200}
          />
          <h1 className="w-4/5 font-bold font-imprima">
            Moroccan braised chicken with Kalamata olives, lemon, and carrots
          </h1>
          <p className="w-4/5 text-sm font-imprima text-gray-600">
            Carb-Conscious, Dairy-Free, Gluten Free Friendly, Less Calories,
            Paleo, Protein Plus, Soy-Free
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <Image
            className="icons"
            alt="dish"
            src="/assets/blog2.webp"
            width={300}
            height={200}
          />
          <h1 className="w-4/5 font-bold font-imprima">
            Seared romaine salad with spiced chickpeas, roasted peppers, and
            almonds
          </h1>
          <p className="w-4/5 text-sm font-imprima text-gray-600">
            Pescatarian, Soy-Free, Vegetarian
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <Image
            className="icons"
            alt="dish"
            src="/assets/blog3.webp"
            width={300}
            height={200}
          />
          <h1 className="w-4/5 font-bold font-imprima">
            Moroccan braised chicken with Kalamata olives, lemon, and carrots
          </h1>
          <p className="w-4/5 text-sm font-imprima text-gray-600">
            No prep. No mess. Our meals arrive ready to heat and eat in minutes.
          </p>
        </div>
      </div>
      <div className="flex justify-between px-24 py-5">
        <div className="grid grid-cols-1 gap-2">
          <Image
            className="icons"
            alt="dish"
            src="/assets/blog1.webp"
            width={300}
            height={200}
          />
          <h1 className="w-4/5 font-bold font-imprima">
            Moroccan braised chicken with Kalamata olives, lemon, and carrots
          </h1>
          <p className="w-4/5 text-sm font-imprima text-gray-600">
            Carb-Conscious, Dairy-Free, Gluten Free Friendly, Less Calories,
            Paleo, Protein Plus, Soy-Free
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <Image
            className="icons"
            alt="dish"
            src="/assets/blog2.webp"
            width={300}
            height={200}
          />
          <h1 className="w-4/5 font-bold font-imprima">
            Seared romaine salad with spiced chickpeas, roasted peppers, and
            almonds
          </h1>
          <p className="w-4/5 text-sm font-imprima text-gray-600">
            Pescatarian, Soy-Free, Vegetarian
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <Image
            className="icons"
            alt="dish"
            src="/assets/blog3.webp"
            width={300}
            height={200}
          />
          <h1 className="w-4/5 font-bold font-imprima">
            Moroccan braised chicken with Kalamata olives, lemon, and carrots
          </h1>
          <p className="w-4/5 text-sm font-imprima text-gray-600">
            No prep. No mess. Our meals arrive ready to heat and eat in minutes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default LargerBlog;
