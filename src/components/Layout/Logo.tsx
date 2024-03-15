import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="https://ik.imagekit.io/obelussoft/Arthousenailsvarna/arthouse-logo_WL7rBEGm-.png"
        width={200}
        height={70}
        alt="logo"
        priority
      />
    </Link>
  );
};

export default Logo;
