import React, { useRef, useEffect } from 'react';

import { BaseComponentProps } from '../types';
import { useIntersection } from '../common';

type IntersectionObserveProps = {
  rootMargin?: string;
  threshold?: number;
  observe?(): void;
};

const IntersectionObserve: React.FC<IntersectionObserveProps & BaseComponentProps> = React.memo(
  ({ component: Component = 'div', rootMargin = '0px', threshold = 1, observe = () => {}, ...other }) => {
    const containerRef = useRef(null);

    const intersection = useIntersection(containerRef, {
      root: null,
      rootMargin: rootMargin,
      threshold: threshold,
    });

    const radio = intersection ? intersection.intersectionRatio : 0;

    useEffect(() => {
      if (radio >= 1) observe();
    }, [radio, observe]);

    return <Component ref={containerRef} {...other} />;
  }
);

export default IntersectionObserve;
