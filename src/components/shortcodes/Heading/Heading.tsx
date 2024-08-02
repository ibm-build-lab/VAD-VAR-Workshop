import { FC, createElement } from 'react';
import styles from './Heading.module.scss';

const LEVELS = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'] as const;

interface HeadingProps extends React.ComponentProps<'h1'> {
  level: (typeof LEVELS)[number];
}

function Heading(props: HeadingProps) {
  const { level, children, ...rest } = props;
  return createElement(
    level.toLowerCase(),
    { ...rest, className: styles.heading },
    children
  );
}

const Headings = LEVELS.reduce(
  (acc, curr) => {
    acc[curr] = (props: Omit<HeadingProps, 'level'>) => (
      <Heading {...props} level={curr} />
    );

    return acc;
  },
  {} as Record<HeadingProps['level'], FC>
);

export default Headings;
