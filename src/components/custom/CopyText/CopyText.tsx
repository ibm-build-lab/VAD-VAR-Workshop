import styles from './CopyText.module.scss';

interface CopyTextProps {
  text?: string | null;
}

export default function CopyText(props: CopyTextProps) {
  const { text } = props;

  return (
    <pre className={styles.copyText}>
      <pre>
        <span>
          <span>
            {text}
            {'\n'}
          </span>
        </span>
      </pre>
    </pre>
  );
}
