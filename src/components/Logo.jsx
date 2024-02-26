import clsx from "clsx";
import Link from "next/link";

const Logo = ({ invert, href, className, children, ...props }) => {
  className = clsx(
    className,
    "black",
    invert ? "text-white hover:text-green-600" : "text-black hover:text-green-600"
  );
  const inner = <span className="relative">{children}</span>;
  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    );
  }
  return (
    <h2
      className={clsx(
        "cursor-pointer font-regular wide duration-300",
        window.innerWidth > 768 ? "text-5xl" : "text-5xl",
        className,
      )}
      {...props}
    >
      {inner}
    </h2>
  );
};

export default Logo;
