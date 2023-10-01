import Link from "next/link";
import Image from "next/image";
import logo from "@/app/images/logo.png";

export default function Footer() {
  return (
    <div className="bg-amazon_light p-4 flex items-start gap-4 justify-center">
      <Image src={logo} alt={"logo"} className="w-28" />
      <p className="text-lightText text-sm">
        All rights reserved
        <Link
          href={"/"}
          className="hover:text-white hover:underline transition duration-300"
        >
          @reactbd.com
        </Link>
      </p>
    </div>
  );
}
