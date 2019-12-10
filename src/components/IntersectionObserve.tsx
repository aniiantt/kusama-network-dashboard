import React, { useRef } from 'react';

import { BaseComponentProps } from '../types';
import { useIntersection } from '../common';

type IntersectionObserveProps = {
  rootMargin?: string;
  threshold?: number;
};

const IntersectionObserve: React.FC<IntersectionObserveProps & BaseComponentProps> = ({
  component: Component = 'div',
  rootMargin = '0px',
  threshold = 1,
  ...other
}) => {
  const containerRef = useRef(null);

  const intersection = useIntersection(containerRef, {
    root: null,
    rootMargin: rootMargin,
    threshold: threshold,
  });

  console.log(intersection);

  return <Component ref={containerRef} {...other} />;
};

export default IntersectionObserve;
