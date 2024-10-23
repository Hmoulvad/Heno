import { css } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";
import ChevronDown from "ui/Icons/Chevron/Down.tsx";
import Typography from "ui/Typography.tsx";
import applyConditionalClassAlpine from "utils/alpine/applyConditionalClassAlpine.ts";

type Props = PropsWithChildren<{
  title: string;
}>;

export default function Accordion({ title, children }: Props) {
  const contentId = title;

  return (
    <div x-data={`{ open: false }`} className={containerStyles}>
      <button
        x-on:click="open = ! open"
        className={headerStyle}
        aria-controls={contentId}
      >
        <Typography as="span">{title}</Typography>
        <span
          class={iconStyle}
          {...applyConditionalClassAlpine({
            className: "expanded",
            condition: "open === true",
          })}
        >
          <ChevronDown />
        </span>
      </button>
      <div
        id={contentId}
        className={contentWrapperStyle}
        role="region"
        aria-labelledby={contentId}
        {...applyConditionalClassAlpine({
          className: "expanded",
          condition: "open === true",
        })}
      >
        <div className={hiddenContentStyle}>
          <Typography className={contentStyle}>{children}</Typography>
        </div>
      </div>
    </div>
  );
}

const containerStyles = css`
  width: 100%;
  display: grid;
  border: var(--border-size-1) solid white;
  min-height: var(--size-8);
`;

const headerStyle = css`
  display: flex;
  cursor: pointer;
  align-items: center;
  background-color: transparent;
  padding-inline: var(--size-3);
  height: var(--size-8);
  border: none;
  justify-content: space-between;
`;

const iconStyle = css`
  height: var(--size-4);
  width: var(--size-4);
  transition: transform 500ms ease-in-out;

  &.expanded {
    transform: rotate(180deg);
  }
`;

const contentWrapperStyle = css`
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 500ms ease-in-out;

  &.expanded {
    grid-template-rows: 1fr;
  }
`;

const hiddenContentStyle = css`
  overflow: hidden;
`;

const contentStyle = css`
  padding-bottom: var(--size-3);
  padding-inline: var(--size-3);
`;
