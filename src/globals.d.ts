declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

// until @carbon/react has native declarations for all packages we'll add our own
declare module '@carbon/react/icons' {
  interface IconProps {
    size?: number;
  }

  const icon: {
    Launch: React.FC<IconProps>;
    InformationSquare: React.FC<IconProps>;
    Calendar: React.FC<IconProps>;
    Time: React.FC<IconProps>;
    RequestQuote: React.FC<IconProps>;
  };
  export = icon;
}

declare module '@carbon/react' {
  import types from 'carbon-components-react';

  export function usePrefix();
  export = types;
}
