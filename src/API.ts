/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAlbumCategoryInput = {
  id?: string | null,
  title: string,
};

export type ModelAlbumCategoryConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelAlbumCategoryConditionInput | null > | null,
  or?: Array< ModelAlbumCategoryConditionInput | null > | null,
  not?: ModelAlbumCategoryConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type AlbumCategory = {
  __typename: "AlbumCategory",
  id: string,
  title: string,
  albums?: ModelAlbumConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAlbumConnection = {
  __typename: "ModelAlbumConnection",
  items:  Array<Album | null >,
  nextToken?: string | null,
};

export type Album = {
  __typename: "Album",
  id: string,
  name: string,
  by: string,
  numberOfLikes: number,
  imageUri: string,
  artistsHeadline: string,
  albumCategory?: AlbumCategory | null,
  songs?: ModelSongConnection | null,
  createdAt: string,
  updatedAt: string,
  albumCategoryAlbumsId?: string | null,
};

export type ModelSongConnection = {
  __typename: "ModelSongConnection",
  items:  Array<Song | null >,
  nextToken?: string | null,
};

export type Song = {
  __typename: "Song",
  id: string,
  uri: string,
  imageUri: string,
  title: string,
  artist: string,
  album?: Album | null,
  createdAt: string,
  updatedAt: string,
  albumSongsId?: string | null,
};

export type UpdateAlbumCategoryInput = {
  id: string,
  title?: string | null,
};

export type DeleteAlbumCategoryInput = {
  id: string,
};

export type CreateAlbumInput = {
  id?: string | null,
  name: string,
  by: string,
  numberOfLikes: number,
  imageUri: string,
  artistsHeadline: string,
  albumCategoryAlbumsId?: string | null,
};

export type ModelAlbumConditionInput = {
  name?: ModelStringInput | null,
  by?: ModelStringInput | null,
  numberOfLikes?: ModelIntInput | null,
  imageUri?: ModelStringInput | null,
  artistsHeadline?: ModelStringInput | null,
  and?: Array< ModelAlbumConditionInput | null > | null,
  or?: Array< ModelAlbumConditionInput | null > | null,
  not?: ModelAlbumConditionInput | null,
  albumCategoryAlbumsId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateAlbumInput = {
  id: string,
  name?: string | null,
  by?: string | null,
  numberOfLikes?: number | null,
  imageUri?: string | null,
  artistsHeadline?: string | null,
  albumCategoryAlbumsId?: string | null,
};

export type DeleteAlbumInput = {
  id: string,
};

export type CreateSongInput = {
  id?: string | null,
  uri: string,
  imageUri: string,
  title: string,
  artist: string,
  albumSongsId?: string | null,
};

export type ModelSongConditionInput = {
  uri?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  title?: ModelStringInput | null,
  artist?: ModelStringInput | null,
  and?: Array< ModelSongConditionInput | null > | null,
  or?: Array< ModelSongConditionInput | null > | null,
  not?: ModelSongConditionInput | null,
  albumSongsId?: ModelIDInput | null,
};

export type UpdateSongInput = {
  id: string,
  uri?: string | null,
  imageUri?: string | null,
  title?: string | null,
  artist?: string | null,
  albumSongsId?: string | null,
};

export type DeleteSongInput = {
  id: string,
};

export type ModelAlbumCategoryFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelAlbumCategoryFilterInput | null > | null,
  or?: Array< ModelAlbumCategoryFilterInput | null > | null,
  not?: ModelAlbumCategoryFilterInput | null,
};

export type ModelAlbumCategoryConnection = {
  __typename: "ModelAlbumCategoryConnection",
  items:  Array<AlbumCategory | null >,
  nextToken?: string | null,
};

export type ModelAlbumFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  by?: ModelStringInput | null,
  numberOfLikes?: ModelIntInput | null,
  imageUri?: ModelStringInput | null,
  artistsHeadline?: ModelStringInput | null,
  and?: Array< ModelAlbumFilterInput | null > | null,
  or?: Array< ModelAlbumFilterInput | null > | null,
  not?: ModelAlbumFilterInput | null,
  albumCategoryAlbumsId?: ModelIDInput | null,
};

export type ModelSongFilterInput = {
  id?: ModelIDInput | null,
  uri?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  title?: ModelStringInput | null,
  artist?: ModelStringInput | null,
  and?: Array< ModelSongFilterInput | null > | null,
  or?: Array< ModelSongFilterInput | null > | null,
  not?: ModelSongFilterInput | null,
  albumSongsId?: ModelIDInput | null,
};

export type CreateAlbumCategoryMutationVariables = {
  input: CreateAlbumCategoryInput,
  condition?: ModelAlbumCategoryConditionInput | null,
};

export type CreateAlbumCategoryMutation = {
  createAlbumCategory?:  {
    __typename: "AlbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        by: string,
        numberOfLikes: number,
        imageUri: string,
        artistsHeadline: string,
        createdAt: string,
        updatedAt: string,
        albumCategoryAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAlbumCategoryMutationVariables = {
  input: UpdateAlbumCategoryInput,
  condition?: ModelAlbumCategoryConditionInput | null,
};

export type UpdateAlbumCategoryMutation = {
  updateAlbumCategory?:  {
    __typename: "AlbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        by: string,
        numberOfLikes: number,
        imageUri: string,
        artistsHeadline: string,
        createdAt: string,
        updatedAt: string,
        albumCategoryAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAlbumCategoryMutationVariables = {
  input: DeleteAlbumCategoryInput,
  condition?: ModelAlbumCategoryConditionInput | null,
};

export type DeleteAlbumCategoryMutation = {
  deleteAlbumCategory?:  {
    __typename: "AlbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        by: string,
        numberOfLikes: number,
        imageUri: string,
        artistsHeadline: string,
        createdAt: string,
        updatedAt: string,
        albumCategoryAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAlbumMutationVariables = {
  input: CreateAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type CreateAlbumMutation = {
  createAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    by: string,
    numberOfLikes: number,
    imageUri: string,
    artistsHeadline: string,
    albumCategory?:  {
      __typename: "AlbumCategory",
      id: string,
      title: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        uri: string,
        imageUri: string,
        title: string,
        artist: string,
        createdAt: string,
        updatedAt: string,
        albumSongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumCategoryAlbumsId?: string | null,
  } | null,
};

export type UpdateAlbumMutationVariables = {
  input: UpdateAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type UpdateAlbumMutation = {
  updateAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    by: string,
    numberOfLikes: number,
    imageUri: string,
    artistsHeadline: string,
    albumCategory?:  {
      __typename: "AlbumCategory",
      id: string,
      title: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        uri: string,
        imageUri: string,
        title: string,
        artist: string,
        createdAt: string,
        updatedAt: string,
        albumSongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumCategoryAlbumsId?: string | null,
  } | null,
};

export type DeleteAlbumMutationVariables = {
  input: DeleteAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type DeleteAlbumMutation = {
  deleteAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    by: string,
    numberOfLikes: number,
    imageUri: string,
    artistsHeadline: string,
    albumCategory?:  {
      __typename: "AlbumCategory",
      id: string,
      title: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        uri: string,
        imageUri: string,
        title: string,
        artist: string,
        createdAt: string,
        updatedAt: string,
        albumSongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumCategoryAlbumsId?: string | null,
  } | null,
};

export type CreateSongMutationVariables = {
  input: CreateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type CreateSongMutation = {
  createSong?:  {
    __typename: "Song",
    id: string,
    uri: string,
    imageUri: string,
    title: string,
    artist: string,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      by: string,
      numberOfLikes: number,
      imageUri: string,
      artistsHeadline: string,
      albumCategory?:  {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      albumCategoryAlbumsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumSongsId?: string | null,
  } | null,
};

export type UpdateSongMutationVariables = {
  input: UpdateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type UpdateSongMutation = {
  updateSong?:  {
    __typename: "Song",
    id: string,
    uri: string,
    imageUri: string,
    title: string,
    artist: string,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      by: string,
      numberOfLikes: number,
      imageUri: string,
      artistsHeadline: string,
      albumCategory?:  {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      albumCategoryAlbumsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumSongsId?: string | null,
  } | null,
};

export type DeleteSongMutationVariables = {
  input: DeleteSongInput,
  condition?: ModelSongConditionInput | null,
};

export type DeleteSongMutation = {
  deleteSong?:  {
    __typename: "Song",
    id: string,
    uri: string,
    imageUri: string,
    title: string,
    artist: string,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      by: string,
      numberOfLikes: number,
      imageUri: string,
      artistsHeadline: string,
      albumCategory?:  {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      albumCategoryAlbumsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumSongsId?: string | null,
  } | null,
};

export type GetAlbumCategoryQueryVariables = {
  id: string,
};

export type GetAlbumCategoryQuery = {
  getAlbumCategory?:  {
    __typename: "AlbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        by: string,
        numberOfLikes: number,
        imageUri: string,
        artistsHeadline: string,
        createdAt: string,
        updatedAt: string,
        albumCategoryAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAlbumCategoriesQueryVariables = {
  filter?: ModelAlbumCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAlbumCategoriesQuery = {
  listAlbumCategories?:  {
    __typename: "ModelAlbumCategoryConnection",
    items:  Array< {
      __typename: "AlbumCategory",
      id: string,
      title: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAlbumQueryVariables = {
  id: string,
};

export type GetAlbumQuery = {
  getAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    by: string,
    numberOfLikes: number,
    imageUri: string,
    artistsHeadline: string,
    albumCategory?:  {
      __typename: "AlbumCategory",
      id: string,
      title: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        uri: string,
        imageUri: string,
        title: string,
        artist: string,
        createdAt: string,
        updatedAt: string,
        albumSongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumCategoryAlbumsId?: string | null,
  } | null,
};

export type ListAlbumsQueryVariables = {
  filter?: ModelAlbumFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAlbumsQuery = {
  listAlbums?:  {
    __typename: "ModelAlbumConnection",
    items:  Array< {
      __typename: "Album",
      id: string,
      name: string,
      by: string,
      numberOfLikes: number,
      imageUri: string,
      artistsHeadline: string,
      albumCategory?:  {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      albumCategoryAlbumsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSongQueryVariables = {
  id: string,
};

export type GetSongQuery = {
  getSong?:  {
    __typename: "Song",
    id: string,
    uri: string,
    imageUri: string,
    title: string,
    artist: string,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      by: string,
      numberOfLikes: number,
      imageUri: string,
      artistsHeadline: string,
      albumCategory?:  {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      albumCategoryAlbumsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumSongsId?: string | null,
  } | null,
};

export type ListSongsQueryVariables = {
  filter?: ModelSongFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSongsQuery = {
  listSongs?:  {
    __typename: "ModelSongConnection",
    items:  Array< {
      __typename: "Song",
      id: string,
      uri: string,
      imageUri: string,
      title: string,
      artist: string,
      album?:  {
        __typename: "Album",
        id: string,
        name: string,
        by: string,
        numberOfLikes: number,
        imageUri: string,
        artistsHeadline: string,
        createdAt: string,
        updatedAt: string,
        albumCategoryAlbumsId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      albumSongsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateAlbumCategorySubscription = {
  onCreateAlbumCategory?:  {
    __typename: "AlbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        by: string,
        numberOfLikes: number,
        imageUri: string,
        artistsHeadline: string,
        createdAt: string,
        updatedAt: string,
        albumCategoryAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAlbumCategorySubscription = {
  onUpdateAlbumCategory?:  {
    __typename: "AlbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        by: string,
        numberOfLikes: number,
        imageUri: string,
        artistsHeadline: string,
        createdAt: string,
        updatedAt: string,
        albumCategoryAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAlbumCategorySubscription = {
  onDeleteAlbumCategory?:  {
    __typename: "AlbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        by: string,
        numberOfLikes: number,
        imageUri: string,
        artistsHeadline: string,
        createdAt: string,
        updatedAt: string,
        albumCategoryAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAlbumSubscription = {
  onCreateAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    by: string,
    numberOfLikes: number,
    imageUri: string,
    artistsHeadline: string,
    albumCategory?:  {
      __typename: "AlbumCategory",
      id: string,
      title: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        uri: string,
        imageUri: string,
        title: string,
        artist: string,
        createdAt: string,
        updatedAt: string,
        albumSongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumCategoryAlbumsId?: string | null,
  } | null,
};

export type OnUpdateAlbumSubscription = {
  onUpdateAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    by: string,
    numberOfLikes: number,
    imageUri: string,
    artistsHeadline: string,
    albumCategory?:  {
      __typename: "AlbumCategory",
      id: string,
      title: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        uri: string,
        imageUri: string,
        title: string,
        artist: string,
        createdAt: string,
        updatedAt: string,
        albumSongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumCategoryAlbumsId?: string | null,
  } | null,
};

export type OnDeleteAlbumSubscription = {
  onDeleteAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    by: string,
    numberOfLikes: number,
    imageUri: string,
    artistsHeadline: string,
    albumCategory?:  {
      __typename: "AlbumCategory",
      id: string,
      title: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        uri: string,
        imageUri: string,
        title: string,
        artist: string,
        createdAt: string,
        updatedAt: string,
        albumSongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumCategoryAlbumsId?: string | null,
  } | null,
};

export type OnCreateSongSubscription = {
  onCreateSong?:  {
    __typename: "Song",
    id: string,
    uri: string,
    imageUri: string,
    title: string,
    artist: string,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      by: string,
      numberOfLikes: number,
      imageUri: string,
      artistsHeadline: string,
      albumCategory?:  {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      albumCategoryAlbumsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumSongsId?: string | null,
  } | null,
};

export type OnUpdateSongSubscription = {
  onUpdateSong?:  {
    __typename: "Song",
    id: string,
    uri: string,
    imageUri: string,
    title: string,
    artist: string,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      by: string,
      numberOfLikes: number,
      imageUri: string,
      artistsHeadline: string,
      albumCategory?:  {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      albumCategoryAlbumsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumSongsId?: string | null,
  } | null,
};

export type OnDeleteSongSubscription = {
  onDeleteSong?:  {
    __typename: "Song",
    id: string,
    uri: string,
    imageUri: string,
    title: string,
    artist: string,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      by: string,
      numberOfLikes: number,
      imageUri: string,
      artistsHeadline: string,
      albumCategory?:  {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      albumCategoryAlbumsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumSongsId?: string | null,
  } | null,
};
