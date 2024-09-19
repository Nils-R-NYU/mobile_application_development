import Dropdown from "../components/Dropdown";

export default function DropdownPage(props) {
  const options = ['80%', '100%', '120%'];

  return (
    <>
      <Dropdown options={options}/>
    </>
  );
}
