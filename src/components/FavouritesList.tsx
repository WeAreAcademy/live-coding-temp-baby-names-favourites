import React from 'react';
import { BabyName } from './BabyName';
import { NameInfo } from '../types';

interface FavouritesListProps {
    allInfo: NameInfo[];
    idsList: number[];
}
export function FavouritesList(props: FavouritesListProps) {
    const allNamesInfo = props.allInfo;
    const favouritesNameInfos: NameInfo[] = allNamesInfo.filter((nameInfo: NameInfo) => props.idsList.includes(nameInfo.id));
    return (
        <div className='favouritesList'>Favourites List is here!!
            {props.idsList.join('|')}
            <div className='namesList'>
                {favouritesNameInfos.map((nameInfo) => (
                    <BabyName
                        info={nameInfo}
                        key={nameInfo.id}
                        onClick={() => {
                            console.log('clicked from favourites: ' + nameInfo.name);
                        }} />)
                )}
            </div>
        </div>);

}
