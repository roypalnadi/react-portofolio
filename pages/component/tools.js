import { FadeLeft } from "../fade";

export default function Tools({ icon, title, subTitle }) {
  return (
    <FadeLeft>
      <div className="border border-space-200 dark:border-space-white bg-white dark:bg-space-200 rounded-md flex p-2 gap-2">
        <div className="bg-space-300 rounded-md w-full h-12 w-12 grid place-items-center p-2">
          {icon}
        </div>
        <div className="content-center">
          <p className="text-gray-800 dark:text-gray-200 text-sm text-200 font-bold">
            {title}
          </p>
          <p className="text-gray-800 dark:text-gray-200 text-xs">{subTitle}</p>
        </div>
      </div>
    </FadeLeft>
  );
}
