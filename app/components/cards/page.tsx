import SpaceCard from "../spaceCard/page";

const Cards = () => {
  return (
    <div className="bottom-[50px] z-40 absolute flex lg:flex-row flex-col justify-center gap-[15px] px-[20px] lg:px-[120px] w-full max-w-[1488px] min-h-[200px]">
      <SpaceCard
        title="Birth of Stars"
        description="Deep within nebulae, clouds of dust and gas give rise to new stars — the cosmic cradle where the building blocks of life are formed."
      />
      <SpaceCard
        title="Mystery of the Black Hole"
        description="With unimaginable gravity, a black hole pulls in everything around it — even light. It remains one of the most fascinating enigmas of the universe."
      />
      <SpaceCard
        title="Journey Through Space"
        description="Humanity’s dream beyond the stars — through rockets, satellites, and perhaps one day, footprints on Mars — we are stepping into a new era of cosmic exploration."
      />
    </div>
  );
};

export default Cards;
