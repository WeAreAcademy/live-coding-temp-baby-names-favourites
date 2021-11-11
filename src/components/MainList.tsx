import { NameInfo } from "../types";
import { BabyName } from "./BabyName";

export interface MainListProps {
    names: NameInfo[];
    onClick: (info: NameInfo) => void;
}

export function MainList(props: MainListProps) {
    return (
        <div className='namesList'>
            {props.names.map(nameInfo => (
                <BabyName
                    key={nameInfo.id}
                    info={nameInfo}
                    onClick={props.onClick}
                />
            )
            )}
        </div>
    )
}