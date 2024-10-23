import { css, cx } from "hono/css";
import type { JSX } from "hono/jsx";
import type { ButtonProps } from "./types.ts";

type Props = Pick<ButtonProps, "icon" | "size"> &
  JSX.IntrinsicElements["button"];

export default function IconButton({ icon, size = "medium", ...rest }: Props) {
  return (
    <button class={getButtonStyle({ size })} {...rest}>
      {icon}
    </button>
  );
}

export function getButtonStyle({ size }: Required<Pick<ButtonProps, "size">>) {
  const args = [baseStyle];
  switch (size) {
    case "small":
      args.push(smallStyle);
      break;
    case "medium":
      args.push(mediumStyle);
      break;
  }

  return cx(...args);
}

const baseStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: fit-content;
  background-color: transparent;
  border-width: var(--border-size-1);
  border-style: solid;
  transition: background-color 0.2s ease;
  gap: var(--size-2);
  color: inherit;
  text-decoration: none;

  &:hover {
    background-color: var(--gray-9);
  }
`;

const smallStyle = css`
  height: var(--size-7);
  width: var(--size-7);
  > svg {
    height: var(--size-4);
    width: var(--size-4);
  }
`;

const mediumStyle = css`
  height: var(--size-8);
  width: var(--size-8);
  svg {
    height: var(--size-5);
    width: var(--size-5);
  }
`;
