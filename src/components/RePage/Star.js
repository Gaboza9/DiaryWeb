import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = f => f }) => (
    <FaStar 
        class="fs-4"
        color={selected ? "red" : "grey"}
        onClick={onSelect}
    />
);

export default Star;