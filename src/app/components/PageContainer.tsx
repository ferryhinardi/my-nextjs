import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode[];
};

export default function PageContainer(props: Props) {
  const Childrens = React.Children.toArray(props.children);
  const [Sidebar, MainContent] = Childrens;
  return (
    <div className="flex row-auto gap-4">
      {Sidebar}
      {MainContent}
    </div>
  );
}
