import Link from "next/link";
import clsx from "clsx";
import logo from "@/assest/img/logo.png"
import Image from "next/image";
const Logo = ({ className, props }) => {
  return (
    <Link href={"/"}>
       <div className="">
           <Image
                  src={logo}
                  alt=" Logo"
                className="ml-20"
                  width={50}
                  height={50}
                  priority
                />
        <h2
          className={clsx(
            "text-3xl font-bold text-gray-900 ",
            className
          )}
          {...props}
        >
          Designer Desire
        </h2>
       </div>
    </Link>
  );
};

export default Logo;
