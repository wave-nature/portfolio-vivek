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
        href=""
        className=" hover:text-accent transition-all outline-lime-300"
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href=""
        className=" hover:text-accent transition-all outline-lime-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href=""
        className=" hover:text-accent transition-all outline-lime-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href=""
        className=" hover:text-accent transition-all outline-lime-300"
      >
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;
