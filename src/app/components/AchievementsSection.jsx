"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "20",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100,000",
  },
  {
    metric: "Years",
    value: getYearsSinceJan2022(),
    postfix: getMonthsSinceJan2022()
  },
];

function getYearsSinceJan2022() {
  const jan2022 = new Date('January 1, 2022');
  const currentTime = new Date();

  const timeDifference = currentTime - jan2022;

  const millisecondsInMonth = 1000 * 60 * 60 * 24 * 30.44; 
  const months = timeDifference / millisecondsInMonth;

  const years = Math.floor(months / 12);

  return years;
}

function getMonthsSinceJan2022() {
  const jan2022 = new Date('January 1, 2022');
  const currentTime = new Date();

  const timeDifference = currentTime - jan2022;

  // Convert the time difference to months
  const millisecondsInMonth = 1000 * 60 * 60 * 24 * 30.44; // average number of days in a month
  const months = timeDifference / millisecondsInMonth;

  // Return the remaining months
  const remainingMonths = Math.floor(months % 12);

  return `.${remainingMonths}`;
}

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
