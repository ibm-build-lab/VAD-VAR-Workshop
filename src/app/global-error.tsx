'use client'; // Error components must be Client Components

import { Button } from '@carbon/react';
import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error(props: ErrorProps) {
  const { error, reset } = props;

  useEffect(() => {
    // Log the error to an error reporting service
    console.log(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
