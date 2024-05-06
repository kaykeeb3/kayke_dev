import React from "react";

interface CenteredLayoutProps {
  children: React.ReactNode;
}

function CenteredLayout({ children }: CenteredLayoutProps) {
  return (
    <div className="flex items-center justify-center">
      <main className="xl:w-[1120px] lg:w-[900px] md:w-[800px]">
        {children}
      </main>
    </div>
  );
}

export default CenteredLayout;
