import { css } from "hono/css";
import Radio from "ui/Form/Radio.tsx";
import Typography from "ui/Typography.tsx";
import type { InputProps } from "./types.ts";

type Props = {
  options: Omit<Parameters<typeof Radio>["0"], "name">[];
} & InputProps;

export default function RadioGroup({ label, name, options }: Props) {
  return (
    <fieldset className={radioGroupStyles}>
      <Typography as="legend">{label}</Typography>
      {options.map((option) => (
        <Radio name={name} {...option} />
      ))}
    </fieldset>
  );
}

const radioGroupStyles = css`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--size-2);
  border: none;
`;
