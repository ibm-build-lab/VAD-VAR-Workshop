'use client';

import { IconButton } from '@carbon/react';
import { Close, ZoomIn, ZoomOut, ZoomReset } from '@carbon/react/icons';
import NextImage from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import styles from './Image.module.scss';

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export default function Image(props: ImageProps) {
  const [isOpen, setOpen] = useState<boolean>(false);
  const { alt = '', src = '' } = props;

  const dialogRef = useRef<HTMLDialogElement>(null);

  const close = () => setOpen(false);
  const open = () => setOpen(true);

  useEffect(() => {
    if (!dialogRef.current) return;
    dialogRef.current[isOpen ? 'showModal' : 'close']();
    document.documentElement.style.overflowY = isOpen ? 'hidden' : '';
  }, [isOpen]);

  return (
    <>
      <dialog className={styles.dialog} ref={dialogRef} onClose={close}>
        {isOpen && (
          <TransformWrapper
            minScale={0.5}
            maxScale={2}
            initialScale={0.9}
            centerOnInit
            limitToBounds>
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                <div className={styles.closeButton}>
                  <IconButton
                    label='Close'
                    align='left'
                    onClick={close}
                    kind='secondary'
                    autoFocus={false}>
                    <Close />
                  </IconButton>
                </div>

                <div className={styles.controls}>
                  <IconButton
                    label='Zoom in'
                    align='top'
                    onClick={() => zoomOut()}
                    kind='secondary'
                    autoFocus={false}>
                    <ZoomOut />
                  </IconButton>
                  <IconButton
                    label='Zoom reset'
                    align='top'
                    onClick={() => resetTransform()}
                    kind='secondary'
                    autoFocus={false}>
                    <ZoomReset />
                  </IconButton>
                  <IconButton
                    label='Zoom out'
                    align='top'
                    onClick={() => zoomIn()}
                    kind='secondary'
                    autoFocus={false}>
                    <ZoomIn />
                  </IconButton>
                </div>

                <TransformComponent
                  wrapperStyle={{ width: '100%', height: '100vh' }}>
                  <NextImage
                    src={src}
                    alt={alt}
                    width={1000}
                    height={1000}
                    onClick={open}
                    style={{
                      width: '100%',
                      height: '100vh',
                      objectFit: 'contain'
                ***REMOVED***}
                  />
                </TransformComponent>
              </>
    ***REMOVED***}
          </TransformWrapper>
***REMOVED***}
      </dialog>
      <span className={styles.wrapper}>
        <NextImage
          alt={alt}
          src={src}
          width={1000}
          height={1000}
          onClick={open}
        />
      </span>
    </>
  );
}
