import IconSelector from "../components/IconSelector";
import {
  TbSquareRoundedLetterN,
  TbSquareRoundedLetterY,
  TbSquareRoundedLetterU,
} from "react-icons/tb";

export default function IconSelectorPage() {
  return (
    <IconSelector>
      <TbSquareRoundedLetterN />
      <TbSquareRoundedLetterY />
      <TbSquareRoundedLetterU />
    </IconSelector>
  );
}
