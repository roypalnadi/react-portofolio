import { FadeLeft } from "../fade";

export default function Box({ firstTitle, secondTitle, thridTitle }) {
  return (
    <FadeLeft>
      <div className="border border-space-200 dark:border-space-white bg-white dark:bg-space-200 rounded-md py-4 px-6 flex flex-col justify-between h-32">
        <div>
          <div>
            <span className="text-space-neon font-semibold text-sm">
              {firstTitle}
            </span>
          </div>
          <div>
            <span className="text-gray-800 dark:text-gray-200 text-base">
              {secondTitle}
            </span>
          </div>
        </div>
        <div>
          <span className="text-xs text-gray-800 dark:text-gray-200">
            • {thridTitle}
          </span>
        </div>
      </div>
    </FadeLeft>
  );
}
