import { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

export default function Accordion(props) {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const { items } = props;

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronRight />}
      </span>
    );
    const handleClick = (nextIndex) => {
      setExpandedIndex((currentExpandedIndex) => {
        if (currentExpandedIndex === nextIndex) {
          return -1;
        }
        return nextIndex;
      });
    };
    return (
      <div key={item.id} onClick={handleClick.bind(null, index)}>
        <div className="flex p-3 bg-gray-100 border-b items-center cursor-pointer">
          {icon}
          {item.label}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}
