import { css } from "hono/css";
import ChevronRight from "ui/Icons/Chevron/Right.tsx";
import House from "ui/Icons/House.tsx";
import Link from "ui/Link.tsx";

type Props = {
  path: string;
};

export default function Breadcrumbs({ path }: Props) {
  const paths = getPaths(path);

  return (
    <nav aria-label="breadcrumb">
      <ol class={listStyle}>
        <li class={listItemStyle}>
          <a title="Home" href="/">
            <House />
          </a>
        </li>
        {paths.map((path, index) => {
          const currentPath = getPath(paths, index);
          return (
            <>
              <li>
                <ChevronRight />
              </li>
              <li class={listItemStyle} key={currentPath}>
                <Link href={currentPath}>{path}</Link>
              </li>
            </>
          );
        })}
      </ol>
    </nav>
  );
}

function getPaths(path: string) {
  return path.split("/").filter(Boolean);
}

function getPath(paths: string[], index: number) {
  return paths.slice(0, index + 1).join("/");
}

const listStyle = css`
  display: flex;
  list-style: none;
  align-items: center;

  svg {
    fill: white;
    width: var(--size-5);
    height: var(--size-5);
  }
`;

const listItemStyle = css`
  padding: var(--size-1);
  display: flex;
  align-items: center;
  gap: var(--size-2);
`;
