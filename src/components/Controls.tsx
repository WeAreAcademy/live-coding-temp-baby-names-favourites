import { GenderSelector, NameInfo } from "../types";

interface ControlsProps {
    allBabyNames: NameInfo[];
    namesToShowInMain: NameInfo[];
    onGenderSelectionClick: (option: GenderSelector) => void;
    currentGenderSelector: GenderSelector;
}
export default function Controls(props: ControlsProps) {

    const {
        allBabyNames,
        currentGenderSelector,
        namesToShowInMain,
        onGenderSelectionClick
    } = props;
    return (
        <div className='controls'>
            There are {allBabyNames.length} total.
            Showing {namesToShowInMain.length}
            <button onClick={() => onGenderSelectionClick('f')}>F</button>
            <button onClick={() => onGenderSelectionClick('m')}>M</button>
            <button onClick={() => onGenderSelectionClick('a')}>A</button>
            {currentGenderSelector}
        </div>
    )

}