import { cx } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";
import Button from "ui/Button/Button.tsx";
import Display from "ui/Display.tsx";
import X from "ui/Icons/X.tsx";
import {
  asideStyle,
  centerStyle,
  contentStyle,
  dialogStyle,
  headerStyle,
  sectionStyle,
} from "./styles.ts";
import generateId from "utils/generateId.ts";

type Props = PropsWithChildren<{
  ref: string;
  type?: "center" | "aside";
  title: string;
}>;

export default function Dialog({
  children,
  ref,
  type = "center",
  title,
}: Props) {
  const id = generateId("dialog");
  return (
    <dialog
      id={id}
      x-ref={ref}
      x-on:click={`$event.target.id === '${id}' ? $refs.${ref}?.close() : null`}
      class={getDialogStyle(type)}
    >
      <div class={contentStyle}>
        <header class={headerStyle}>
          <Display as="h3">{title}</Display>
          <Button
            size="small"
            x-on:click={`$refs.${ref}?.close()`}
            icon={<X />}
          />
        </header>
        <section class={sectionStyle}>{children}</section>
      </div>
    </dialog>
  );
}

function getDialogStyle(type: Props["type"]) {
  const styles = [dialogStyle];
  styles.push(type === "center" ? centerStyle : asideStyle);
  return cx(...styles);
}
