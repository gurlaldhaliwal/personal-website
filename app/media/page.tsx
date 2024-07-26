import Link from "next/link";
import { mont } from "../utilities/fonts";

const bhangraLinks = [
    {title: "bhangra blowout 2022", href: "https://www.youtube.com/watch?v=snWfgsJexnQ"},
    {title: "bhangra blowout 2023", href: "https://www.youtube.com/watch?v=9AcMdqgubUU"},
    {title: "bhangra blowout 2024", href: "https://www.youtube.com/watch?v=V9gIDdPhXrA"},
]

const writingLinks = [
    {title: "metaphysics - time travel", href: "https://docs.google.com/document/d/17zug4PKgcrfvgj_hIXA3OZfc-oZI1b6ByWX3HxAsAW4/view"},
    {title: "short story - family", href: "https://drive.google.com/file/d/1g9xZMXeNHKSs0KQI-lzM9UFyaiH-REpg/view"}
]

const pictures = [

]
export default function Page() {
  return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl">bhangra performances:</h1>
        <div className={mont.className}>
        {Object.entries(bhangraLinks).map(([path, { title, href }]) => {
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
        <div className="mt-12">
        <h1 className="text-3xl">literature:</h1>  
        <div className={mont.className}>
        {Object.entries(writingLinks).map(([path, { title, href }]) => {
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
      </div>
  );
}
