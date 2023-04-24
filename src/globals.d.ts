declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

// until @carbon/react has native declarations for all packages we'll add our own
declare module '@carbon/react/icons' {
  interface IconProps {
    size?: number;
    fill?: string;
  }

  type CarbonIcon = React.FC<IconProps>;

  const icon: {
    Launch: CarbonIcon;
    InformationSquare: CarbonIcon;
    Calendar: CarbonIcon;
    Time: CarbonIcon;
    RequestQuote: CarbonIcon;
    EarthFilled: CarbonIcon;
  };
  export = icon;
}

declare module '@carbon/react' {
  import types from 'carbon-components-react';

  interface StackProps {
    className?: string;
    gap?: number;
    orientation?: 'horizontal' | 'vertical';
  }

  export function usePrefix();
  export = { ...types, Stack = React.FC<StackProps> };
}
