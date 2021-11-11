import React from 'react';
import { BabyName } from './BabyName';
import { NameInfo } from '../types';

interface FavouritesListProps {
    allInfo: NameInfo[];
    idsList: number[];
    onClick: (info: NameInfo) => void;
}

export function FavouritesList(props: FavouritesListProps) {

    const { allInfo, idsList, onClick } = props;

    const favouritesNameInfos: NameInfo[] = allInfo.filter(
        (nameInfo: NameInfo) => idsList.includes(nameInfo.id)
    );

    return (
        <div className='favouritesList'>
            <strong>Favourites</strong>
            <div className='namesList'>
                {favouritesNameInfos.map((nameInfo) => (
                    <BabyName
                        info={nameInfo}
                        key={nameInfo.id}
                        onClick={onClick} />)
                )}
            </div>
        </div>);

}
