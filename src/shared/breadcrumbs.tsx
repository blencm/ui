import * as React from 'react';
import { Slash } from 'lucide-react';
import { Fragment } from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '../components/breadcrumb';

export type BreadcrumbItemProps = {
  title: string;
  link?: string;
  className?: string;
};

export type BreadcrumbsProps = {
  items: BreadcrumbItemProps[];
  className?: string;
  classNameList?: string;
  separator?: React.ReactNode;
};

function Breadcrumbs({
  items,
  className,
  classNameList,
  separator = <Slash />
}: BreadcrumbsProps) {
  return (
    <Breadcrumb className={className}>
      <BreadcrumbList className={classNameList}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <Fragment key={`${item.title}-${index}`}>
              {!isLast ? (
                <BreadcrumbItem className={item.className}>
                  <BreadcrumbLink href={item.link ?? '#'}>
                    {item.title}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              ) : (
                <BreadcrumbItem className={item.className}>
                  <BreadcrumbPage>{item.title}</BreadcrumbPage>
                </BreadcrumbItem>
              )}

              {!isLast ? (
                <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>
              ) : null}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export { Breadcrumbs };
