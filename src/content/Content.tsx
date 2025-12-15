import React, { ReactNode } from 'react';

type IContentProps = {
  children: ReactNode;
};

const Content = (props: IContentProps) => (
  <div className="prose prose-lg mx-auto mt-8 text-base md:text-lg">
    {props.children}
  </div>
);

export { Content };
