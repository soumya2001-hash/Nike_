import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container ">
      <div className="flex-1 ">
        <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          <span className="text-coral-red "> Special </span> Offer
        </h2>
        <p className=" mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premiere selections to incredible savings, we
          offer unparelleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate the realm of possibilities designed to fulfill your unique
          desire, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="View details" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-grey"
            textColor="text-slate-grey"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
