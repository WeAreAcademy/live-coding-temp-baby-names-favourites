import React, { useState } from 'react';
import namesData from '../data/babyNames.json';
import { GenderSelector, NameInfo } from '../types';
import Controls from './Controls';
import { FavouritesList } from './FavouritesList';
import { MainList } from './MainList';

const allBabyNames: NameInfo[] = namesData as NameInfo[];

export function BabyNamesApp() {

  const [favouritesIds, setFavouritesIds] = useState<number[]>([]);
  const [genderSelector, setGenderSelector] = useState<GenderSelector>('a');

  const namesToShowInMain = allBabyNames
    .filter(info => !favouritesIds.includes(info.id))
    .filter(info => genderSelector === 'a' || info.sex === genderSelector);

  function handleGenderSelection(gender: GenderSelector) {
    setGenderSelector(gender);
  }

  function handleAddToFavourites(info: NameInfo) {
    //don't allow duplicate to enter list
    if (favouritesIds.includes(info.id)) {
      return;
    }
    const newListOfIds = [...favouritesIds, info.id];
    setFavouritesIds(newListOfIds);
  }


  function handleRemoveFromFavourites(info: NameInfo) {
    const newListOfIds: number[] = favouritesIds.filter(existingId => existingId !== info.id);
    setFavouritesIds(newListOfIds);
  }


  return (
    <div className='babyNamesApp'>

      <Controls
        allBabyNames={allBabyNames}
        namesToShowInMain={namesToShowInMain}
        currentGenderSelector={genderSelector}
        onGenderSelectionClick={handleGenderSelection}
      />

      <FavouritesList
        idsList={favouritesIds}
        allInfo={allBabyNames}
        onClick={handleRemoveFromFavourites}
      />

      <MainList
        names={namesToShowInMain}
        onClick={handleAddToFavourites}
      />
    </div>
  );
}
