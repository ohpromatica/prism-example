import React, { forwardRef } from "react";

export interface BreadcrumbsProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /** Separator between breadcrumbs */
  separator?: React.ReactNode;

  /** React nodes that should be separated */
  children: React.ReactNode;
}

export const Breadcrumbs = forwardRef<HTMLDivElement, BreadcrumbsProps>(
  (props: BreadcrumbsProps, ref) => {
    const items = React.Children.toArray(props.children).reduce(
      (acc: any[], child: any, index, array) => {
        acc.push(
          React.cloneElement(child, {
            className: "leading-none whitespace-nowrap",
            key: index,
          })
        );

        if (index !== array.length - 1) {
          acc.push(
            <span
              className="flex items-center justify-center mx-2 text-sm leading-none text-gray-500"
              key={`separator-${index}`}
            >
              {props.separator}
            </span>
          );
        }

        return acc;
      },
      []
    );

    return (
      <div className="flex" ref={ref}>
        {items}
      </div>
    );
  }
);
