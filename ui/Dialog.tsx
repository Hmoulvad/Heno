import { css, cx, keyframes } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";
import Button from "ui/Button/Button.tsx";
import Display from "ui/Display.tsx";
import X from "ui/Icons/X.tsx";
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

const backdropFade = keyframes`
  from {
    background-color: transparent;
  }
  to {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const dialogStyle = css`
  display: grid;
  position: fixed;
  inset: 0;
  border: none;
  max-height: 100vh;
  padding: var(--size-3);
  box-shadow: var(--shadow-3);

  &[open] {
    &::backdrop {
      animation: ${backdropFade} 0.4 ease forwards;
    }
  }
`;

const centerStyle = css`
  border-radius: var(--radius-2);
  width: var(--size-15);
  height: var(--size-15);
  max-width: 80vw;
  max-height: 80vh;
  margin: auto;
  transform: scale(0);
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s ease;

  &[open] {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
  }
`;

const asideStyle = css`
  margin-left: auto;
  height: 100vh;
  width: var(--size-15);
  transform: translateX(100%);
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s ease;

  &[open] {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }

  @media only screen and (max-width: 480px) {
    width: 100vw;
    height: 80vh;
    margin-inline: 0;
    margin-top: auto;
    transform: translateY(100%);
    max-width: 100vw;

    &[open] {
      transform: translateY(0);
    }
  }
`;

const contentStyle = css`
  display: grid;
  grid-template-rows: auto 1fr;
`;

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const sectionStyle = css`
  display: grid;
`;
