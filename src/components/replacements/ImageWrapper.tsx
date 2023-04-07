import React from 'react';
import * as styles from '../../styles/components/replacements/ImageWrapper.module.scss';

const ImageWrapper = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const { src = '', alt = '' } = props;

  return (
    <span className={styles.imageWrapper}>
      <img src={src} alt={alt} />
    </span>
  );
};

export default ImageWrapper;
