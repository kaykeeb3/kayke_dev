import React from "react";

interface Props {
  title: string;
}

const TitleComponent: React.FC<Props> = ({ title }) => {
  return (
    <span className="text-3xl md:text-2xl font-semibold flex items-center xl:p-0 xl:mb-3 text-zinc-200 max-[600px]:pl-0 max-[600px]:mb-2 text-[1.6rem] max-[600px] pl-3">
      <span className="w-6 h-1 bg-blue-600 mr-3 md:mr-4"></span>
      {title}
    </span>
  );
};

export default TitleComponent;
