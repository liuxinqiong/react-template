// eslint-disable-next-line spaced-comment
/// <reference types="react-scripts" />

declare module '*.less' {
  const classes: Readonly<Record<string, string>>;
  export default classes;
}
