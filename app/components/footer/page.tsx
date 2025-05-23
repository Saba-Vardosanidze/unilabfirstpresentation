import {footerLists} from "@/app/data/footer";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-[var(--grayColorForInput)] px-[16px] pt-[60px] lg:pt-[60px] pb-[60px] w-full overflow-hidden"
    >
      <div className="m-auto lg:px-[100px] w-full lg:max-w-[1440px]">
        <div className="flex lg:flex-row flex-col gap-x-[113px]">
          <div>
            <div className="max-w-[248px]">
              <Link href="/">
                <Image
                  src="/vectors/Logo.svg"
                  alt="logo"
                  width={50}
                  height={50}
                />
              </Link>
              <p className="mt-[14px] mb-[20px] text-[14px] text-[var(--colorBlackOpacity)] leading-[20px]">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
            </div>
            <div className="flex gap-[12px]">
              <a href="https://x.com/" aria-label="Twitter">
                <div className="flex justify-center items-center bg-[var(--colorWhite)] hover:bg-[var(--colorBlack)] border border-[var(--colorBlackborder)] rounded-[100%] w-[28px] h-[28px] transition-all duration-300 cursor-pointer"></div>
              </a>
              <a href="https://facebook.com/" aria-label="Facebook">
                <div className="flex justify-center items-center bg-[var(--colorWhite)] hover:bg-[var(--colorBlack)] border border-[var(--colorBlackborder)] rounded-[100%] w-[28px] h-[28px] transition-all duration-300 cursor-pointer"></div>
              </a>
              <a href="https://instagram.com/" aria-label="Instagram">
                <div className="flex justify-center items-center bg-[var(--colorWhite)] hover:bg-[var(--colorBlack)] border border-[var(--colorBlackborder)] rounded-[100%] w-[28px] h-[28px] transition-all duration-300 cursor-pointer"></div>
              </a>
              <a href="https://github.com/" aria-label="GitHub">
                <div className="flex justify-center items-center bg-[var(--colorWhite)] hover:bg-[var(--colorBlack)] border border-[var(--colorBlackborder)] rounded-[100%] w-[28px] h-[28px] transition-all duration-300 cursor-pointer"></div>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-[89px] gap-y-[24px] lg:gap-x-[113px] mt-[24px] lg:mt-[0px]">
            {footerLists.map((eachElements, index) => (
              <div key={index}>
                <h3 className="font-medium text-[14px] text-[var(--colorWhiteHover)] lg:text-[16px]">
                  {eachElements.title}
                </h3>
                <ul className="flex flex-col gap-[16px] mt-[16px]">
                  {eachElements.links.map((link, index) => (
                    <li
                      key={index}
                      className="text-[14px] text-[var(--colorBlackOpacity)] lg:text-[16px] hover:text-[var(--footerHover)] transition-all duration-300 ease-in-out"
                    >
                      <a href={link.href}>{link.value}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[var(--paragraph-color)] mt-[40px] mb-[16px] h-[1px]"></div>
        <div className="flex lg:flex-row flex-col justify-between items-center gap-y-[16px] text-[14px] text-[var(--colorBlackOpacity)]">
          <p>Solar System © 2000-2023, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
