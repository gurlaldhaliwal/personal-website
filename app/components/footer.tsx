import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function Footer() {
  return (
      <div className="flex flex-row text-xl mt-8">
        <Link
          href={"https://github.com/gurlaldhaliwal"}
          className="hover:underline flex items-center mr-4"
        >
          <GoArrowUpRight className="mr-0.5" />
          <p>{"GitHub"}</p>
        </Link>
        <Link
          href={"https://www.linkedin.com/in/gurlal-dhaliwal/"}
          className="hover:underline flex items-center mr-4"
        >
          <GoArrowUpRight className="mr-0.5" />
          <p>{"LinkedIn"}</p>
        </Link>
      </div>
  );
}
