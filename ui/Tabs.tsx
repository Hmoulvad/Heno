import { css } from "hono/css";
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
      <ul class={tabsStyle}>
        {tabs.map((tab, index) => (
          <li
            {...applyConditionalClassAlpine({
              className: "active",
              condition: `activeTab === ${index}`,
            })}
            class={tabStyle}
            key={tab.label}
          >
            <button x-on:click={`setActiveTab(${index})`}>
              <Display variant="display4" as="span">
                {tab.label}
              </Display>
            </button>
          </li>
        ))}
      </ul>
      {tabs.map((tab, index) => (
        <section
          {...applyConditionalClassAlpine({
            className: "shown",
            condition: `activeTab === ${index}`,
          })}
          class={sectionStyle}
          key={tab.label}
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
  border-bottom: 2px solid transparent;

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

  &.shown {
    display: block;
  }
`;
