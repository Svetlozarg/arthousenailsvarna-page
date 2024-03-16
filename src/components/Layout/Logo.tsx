import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="https://ik.imagekit.io/obelussoft/Arthousenailsvarna/arthouse-logo_WL7rBEGm-.png"
        width={200}
        height={70}
        alt="Art House Nails Varna Logo"
        priority
        style={{ width: "200px", height: "auto", objectFit: "cover" }}
      />
    </Link>
  );
};

export default Logo;
