import Link from "next/link";
import { mont } from "../utilities/fonts";

const projs = [
    {title: "US accidents exploratory analysis (python + ml)", href: "https://jovian.com/gurlaldhaliwal/414-final-project"},
    {title: "houston sikh youth camp (react + python)", href: "https://houstonsikhyouthcamp.org/"},
    {title: "sikh archive (currently in the making react + nextjs", href: "https://www.sikhamericanhistory.org/"},
    {title: "this website (nextjs + react)", href: "\\"},
]

export default function Page() {
  return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl">projects:</h1>
        <div className={mont.className}>
        {Object.entries(projs).map(([path, { title, href }]) => {
              return (
                <Link
                  key={path}
                  href={href}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 text-xl mt-4"
                >
                  <li>{title}</li>
                </Link>
              );
            })}
        </div>
      </div>
  );
}
