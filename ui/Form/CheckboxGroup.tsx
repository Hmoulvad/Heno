import Typography from "ui/Typography.tsx";
import Checkbox from "ui/Form/Checkbox.tsx";
import type { InputProps } from "./types.ts";
import { css } from "hono/css";

type Props = {
  options: Omit<Parameters<typeof Checkbox>["0"], "name">[];
} & InputProps;

export default function CheckboxGroup({ label, name, options }: Props) {
  return (
    <div className={checkboxGroupStyles}>
      <Typography>{label}</Typography>
      {options.map((option) => (
        <Checkbox name={name} {...option} />
      ))}
    </div>
  );
}

const checkboxGroupStyles = css`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--size-2);
`;
