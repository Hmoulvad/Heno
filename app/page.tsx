import { css } from "hono/css";
import Tabs from "ui/Tabs.tsx";
import Button from "ui/Button/Button.tsx";

export default function HomePage() {
  return (
    <section class={gapStyle}>
      <Tabs
        activeTab={1}
        tabs={[
          {
            label: "Tab 1",
            content: <Button>This is Tab1</Button>,
          },
          {
            label: "Tab 2",
            content: <Button>This is Tab2</Button>,
          },
          {
            label: "Tab 3",
            content: <Button>This is Tab3</Button>,
          },
        ]}
      />
    </section>
  );
}

const gapStyle = css`
  display: flex;
  flex-direction: column;
  gap: var(--size-3);
`;
