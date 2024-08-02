import styles from './TileGrid.module.scss';

type TileGridProps = React.ComponentProps<'div'>;

export default function TileGrid(props: TileGridProps) {
  const { children } = props;

  return <div className={styles.tileGrid}>{children}</div>;
}
