import React, { useState } from 'react';
import namesData from '../data/babyNames.json';
import { BabyName } from './BabyName';
import { NameInfo } from '../types';
import { FavouritesList } from './FavouritesList';
const allBabyNames: NameInfo[] = namesData;
export function BabyNamesApp() {

  const [favouritesIds, setFavouritesIds] = useState([20, 180, 30]);
  function handleAddToFavourites(info: NameInfo) {
    const newListOfIds = [...favouritesIds, info.id];
    setFavouritesIds(newListOfIds);
  }
  return (
    <div className='babyNamesApp'>
      <div className='controls'>
        There are {allBabyNames.length} allBabyNames
      </div>

      <FavouritesList idsList={favouritesIds} allInfo={allBabyNames} />

      <div className='namesList'>
        {allBabyNames.map(nameInfo => (
          <BabyName
            key={nameInfo.id}
            info={nameInfo}
            onClick={handleAddToFavourites}
          />
        )
        )}
      </div>
    </div>
  );

}
