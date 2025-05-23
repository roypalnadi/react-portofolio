import { FadeRight } from "../fade";

export default function BoxProfile({ firstTitle, secondTitle, icon }) {
  return (
    <FadeRight>
      <div className="border bg-white dark:bg-space-200 rounded-md p-3">
        <div className="flex gap-2 items-start">
          <div>{icon}</div>
          <div>
            <div>
              <span className="text-gray-800 dark:text-space-white font-semibold text-sm">
                {firstTitle}
              </span>
            </div>
            <div className="leading-none">
              <span className="text-gray-800 dark:text-gray-200 text-xs">
                {secondTitle}
              </span>
            </div>
          </div>
        </div>
      </div>
    </FadeRight>
  );
}
