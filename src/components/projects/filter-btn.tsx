import { category } from "../catogory";
import "@/styles/filter-btn.css"

interface filter{
    label : category;
    isSelected : boolean;
    onClick : () => void;

}

export default function FilterBtn({ label, isSelected, onClick }: filter){
    return(
        <button
            onClick={onClick}
            className={`filter-btn ${isSelected ? "selected" : "not-selected"}`}
        >
            {label}
        </button>
    )
}