import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="https://ik.imagekit.io/obelussoft/Arthousenailsvarna/arthouse_logo_GiWoTdVtm.png?updatedAt=1707491939301"
        width={200}
        height={70}
        alt="logo"
        priority
      />
    </Link>
  );
};

export default Logo;
