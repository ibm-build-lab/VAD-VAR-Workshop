'use client';

import { usePrefix, type Stack } from '@carbon/react';
import cx from 'classnames';
import { createElement, forwardRef } from 'react';
import styles from './Stack.module.scss';

const SPACING_STEPS = [0, 1, 2, 3, 4, 5, 6] as const;

type StackProps = React.ComponentProps<typeof Stack>;
interface CustomStackProps extends Omit<StackProps, 'gap'> {
  spacing?: (typeof SPACING_STEPS)[number];
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  responsive?: boolean;
}

/**
 * FlexBox style stack component based off Chakra UI and Carbon implementation
 *
 * Chakra implementation
 * @see https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/src/stack/stack.tsx
 *
 * Carbon implementation
 * @see https://github.com/carbon-design-system/carbon/blob/2e8523541f0509dee7f30a1a08947a326ade14f2/packages/react/src/components/Stack/Stack.tsx
 */
export default forwardRef<HTMLElement, CustomStackProps>(function Stack(
  props: CustomStackProps,
  ref
) {
  const {
    orientation = 'horizontal',
    as = 'div',
    className,
    children,
    spacing = 0,
    justify,
    align,
    responsive = false,
    ...rest
  } = props;
  const prefix = usePrefix();

  const stackClassName = cx(
    styles.stack,
    styles[orientation],
    justify && [styles.justify, styles[`justify-${justify}`]],
    align && [styles.align, styles[`align-${align}`]],
    orientation === 'horizontal' && responsive && styles.responsive,
    spacing > 0 && `${prefix}--stack-scale-${spacing}`,
    className && className
  );
  return createElement(
    as,
    { ...rest, ref, className: stackClassName },
    children
  );
});
