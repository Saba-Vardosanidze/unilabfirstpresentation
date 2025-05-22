import Image from "next/image";
type CardInfo = {
  title: string;
  description: string;
};
const SpaceCard = ({title, description}: CardInfo) => {
  return (
    <div className="flex flex-col justify-center items-center gap-[6px] bg-gradient-to-br from-[#05031a] to-[#1e1a4f] shadow-[inset_0_0_12px_4px_#00001a,inset_0px_1px_0px_#222222] m-auto px-[20px] rounded-[8px] w-full max-w-[320px] h-[45px] min-h-[150px] text-[14px] text-white cursor-pointer">
      <h2 className="font-semibold text-[18px] text-white">{title}</h2>
      <p className="text-[#B3B3B3] text-[10px] text-center">{description}</p>
      <Image
        className="absolute"
        src="/png/stars.png"
        alt="stars"
        width={180}
        height={150}
      />
    </div>
  );
};

export default SpaceCard;
