import { css, cx } from "hono/css";
import type { Child } from "hono/jsx";
import Display from "ui/Display.tsx";
import applyConditionalClassAlpine from "utils/alpine/applyConditionalClassAlpine.ts";

type Tab = {
  label: string;
  content: Child;
};

type Props = {
  tabs: Tab[];
  activeTab?: number;
};

export default function Tabs({ tabs, activeTab = 0 }: Props) {
  return (
    <div
      class={tabsContainerStyle}
      x-data={`{ activeTab: ${activeTab}, setActiveTab(index) { this.activeTab = index } }`}
    >
      <ul class={tabsStyle} role="tablist">
        {tabs.map((tab, index) => (
          <li
            class={cx(tabStyle, activeTab === index ? "active" : "")}
            key={tab.label}
            role="presentation"
            {...applyConditionalClassAlpine({
              className: "active",
              condition: `activeTab === ${index}`,
            })}
          >
            <button
              x-on:click={`setActiveTab(${index})`}
              role="tab"
              aria-controls={`tab-content-${index}`}
              id={`tab-${index}`}
            >
              <Display variant="display4" as="span">
                {tab.label}
              </Display>
            </button>
          </li>
        ))}
      </ul>
      {tabs.map((tab, index) => (
        <section
          class={cx(sectionStyle, activeTab === index ? "active" : "")}
          key={tab.label}
          id={`tab-content-${index}`}
          role="tabpanel"
          aria-labelledby={`tab-${index}`}
          {...applyConditionalClassAlpine({
            className: "active",
            condition: `activeTab === ${index}`,
          })}
        >
          {tab.content}
        </section>
      ))}
    </div>
  );
}

const tabsContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: var(--size-4);
`;

const tabsStyle = css`
  display: flex;
  list-style: none;
  gap: var(--size-4);
`;

const tabStyle = css`
  transition: border-bottom-color 0.3s;
  border-bottom: var(--border-size-2) solid transparent;

  & > button {
    background: none;
    border: none;
    cursor: pointer;
  }

  &.active {
    border-bottom-color: white;
  }

  &:hover {
    border-bottom-color: white;
  }
`;

const sectionStyle = css`
  display: none;

  &.active {
    display: block;
  }
`;
