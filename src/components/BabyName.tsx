import React from 'react';
import { NameInfo } from '../types';

export interface BabyNameProps {
    info: NameInfo;
    onClick: (info: NameInfo) => void;
}

export function BabyName(props: BabyNameProps) {
    // { name, id, sex }
    const { name } = props.info;
    return <div
        className='babyName'
        onClick={() => props.onClick(props.info)}
    >
        {name}
    </div>;
}
