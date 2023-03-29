declare module '@carbon/react' {
  import types from 'carbon-components-react';
  export = types;
}

declare module '@carbon/react/icons' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const icon: { Launch: any; InformationSquare: any };
  export = icon;
}
