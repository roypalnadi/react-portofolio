import Image from "next/image";
import {
  CSS,
  Flutter,
  Golang,
  JS,
  Laravel,
  MongoDB,
  NodeJS,
  PHP,
  PostgresSQL,
  ReactJS,
  Tailwind,
  TS,
} from "../svg";
import Tools from "../component/tools";

export default function EssentialTool() {
  return (
    <>
      <div>
        <h3 className="text-3xl py-1 dark:text-space-white ">
          Essential Tools I Use
        </h3>
        <p className="text-base py-2 w-1/2 text-gray-800 dark:text-gray-200">
          Explore the advanced tools and technologies I use to build
          outstanding, <br />
          high-performance websites and applications.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
        <Tools title={"PHP"} subTitle={"Logical Programming"} icon={<PHP />} />
        <Tools
          title={"Laravel"}
          subTitle={"PHP Framework"}
          icon={<Laravel />}
        />
        <Tools
          title={"Golang"}
          subTitle={"Logical Programming"}
          icon={<Golang />}
        />
        <Tools
          title={"NodeJS"}
          subTitle={"JS Logical Programming"}
          icon={<NodeJS />}
        />
        <Tools
          title={"Javascript"}
          subTitle={"User Experience"}
          icon={<JS />}
        />
        <Tools
          title={"Typescript"}
          subTitle={"Javascript Type"}
          icon={<TS />}
        />
        <Tools title={"CSS"} subTitle={"User Interface"} icon={<CSS />} />
        <Tools
          title={"Tailwind"}
          subTitle={"User Interface"}
          icon={<Tailwind />}
        />
        <Tools
          title={"ReactJS"}
          subTitle={"Framework UI/UX"}
          icon={<ReactJS />}
        />
        <Tools
          title={"Flutter"}
          subTitle={"Mobile Programming"}
          icon={<Flutter />}
        />
        <Tools title={"MongoDB"} subTitle={"Database"} icon={<MongoDB />} />
        <Tools
          title={"PostgresSQL"}
          subTitle={"Database"}
          icon={<PostgresSQL />}
        />
      </div>
      {/* <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1 ">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={web1}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={web2}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={web3}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={web4}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={web5}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={web6}
          />
        </div>
      </div> */}
    </>
  );
}
