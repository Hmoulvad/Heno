import type { JSX } from "hono/jsx";
import Typography from "ui/Typography.tsx";
import { getButtonStyle } from "./styles.ts";
import type { ButtonProps } from "./types.ts";

type Props = ButtonProps & JSX.IntrinsicElements["button"];

export default function Button({
  children,
  fill = false,
  icon,
  iconPosition = "right",
  size = "medium",
  disabled = false,
  ...rest
}: Props) {
  const fallbackLabel = typeof children === "string" ? children : undefined;
  return (
    <button
      class={getButtonStyle({ size, iconPosition, fill })}
      disabled={disabled}
      aria-label={fallbackLabel}
      {...rest}
    >
      {children ? (
        <Typography as="span" variant="body">
          {children}
        </Typography>
      ) : null}
      {icon ? icon : null}
    </button>
  );
}
