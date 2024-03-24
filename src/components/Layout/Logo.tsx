import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={logo}
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
