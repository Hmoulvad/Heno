type Args = {
  className: string;
  condition: string;
};

export default function applyConditionalClassAlpine({
  className,
  condition,
}: Args) {
  return {
    ...{ [":class"]: `{ '${className}': ${condition} }` },
  };
}
