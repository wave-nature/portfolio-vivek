import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiGithubLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className=" flex items-center gap-x-5 text-lg">
      <Link
        href="https://www.youtube.com/channel/UCanvCjaT7JmatI0xlo9JXtQ"
        target="_blank"
        className=" hover:text-accent transition-all outline-lime-300"
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href="https://www.instagram.com/viveksinghbhadouria/"
        target="_blank"
        className=" hover:text-accent transition-all outline-lime-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href="https://www.linkedin.com/in/vivek-singh-bhadouria-427649200/"
        target="_blank"
        className=" hover:text-accent transition-all outline-lime-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href="https://github.com/wave-nature"
        target="_blank"
        className=" hover:text-accent transition-all outline-lime-300"
      >
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;
