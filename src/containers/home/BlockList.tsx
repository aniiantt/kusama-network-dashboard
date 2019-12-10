import React, { useRef, useLayoutEffect } from 'react';

import { useIntersection } from '../../common';
import { IntersectionObserve } from '../../components';
import { useTranslation } from 'react-i18next';
import BlockItem from './BlockItem';

const BlockList: React.FC = () => {
  return (
    <div>
      {[...new Array(100)].map((_, index) => (
        <BlockItem key={index} />
      ))}
      <IntersectionObserve />
    </div>
  );
};

export default BlockList;
