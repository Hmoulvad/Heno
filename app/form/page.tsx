import { css } from "hono/css";
import Button from "ui/Button/Button.tsx";
import Calender from "ui/Form/Calender.tsx";
import Checkbox from "ui/Form/Checkbox.tsx";
import Input from "ui/Form/Input.tsx";
import RadioGroup from "ui/Form/RadioGroup.tsx";
import Select from "ui/Form/Select.tsx";
import TextArea from "ui/Form/TextArea.tsx";

export default function FormPage() {
  return (
    <form className={formStyle}>
      <Input
        placeholder="Search for product..."
        label="Product Search"
        name="search"
      />
      <TextArea
        label="Description"
        name="Description"
        placeholder="Insert your description here..."
      />
      <Checkbox label="Show only available products" name="available" />
      <Select
        name="Car choice"
        label="Select a car"
        options={["Volvo", "Saab", "Mercedes", "Audi"]}
      />
      <Calender label="Select a date" name="DeliveryDate" />
      <RadioGroup
        name="Favorite Weblanguage"
        label="Please select your favorite Web language"
        options={[
          { value: "html", label: "HTML" },
          { value: "css", label: "CSS" },
          { value: "js", label: "JavaScript" },
          { value: "ts", label: "TypeScript", defaultChecked: true },
        ]}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

const formStyle = css`
  display: grid;
  gap: var(--size-2);
`;
