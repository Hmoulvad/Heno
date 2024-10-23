type Args = {
  className: string;
  condition: string;
};

export default function applyConditionalClassAlpine({
  className,
  condition,
}: Args) {
  return {
    ...{ ["x-bind:class"]: `{'${className}': ${condition}}` },
  };
}
