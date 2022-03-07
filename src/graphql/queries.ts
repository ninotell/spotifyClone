/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAlbumCategory = /* GraphQL */ `
  query GetAlbumCategory($id: ID!) {
    getAlbumCategory(id: $id) {
      id
      title
      albums {
        items {
          id
          name
          by
          numberOfLikes
          imageUri
          artistsHeadline
          createdAt
          updatedAt
          albumCategoryAlbumsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAlbumCategories = /* GraphQL */ `
  query ListAlbumCategories(
    $filter: ModelAlbumCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlbumCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        albums {
          nextToken
          items {
            id
            imageUri
            name
            artistsHeadline
          }
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAlbum = /* GraphQL */ `
query getAlbum($id: ID = "") {
  getAlbum(id: $id) {
    name
    numberOfLikes
    by
    imageUri
    artistsHeadline
    songs {
      items {
        artist
        imageUri
        title
        uri
      }
    }
  }
}
`;


export const listAlbums = /* GraphQL */ `
  query ListAlbums(
    $filter: ModelAlbumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlbums(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        by
        numberOfLikes
        imageUri
        artistsHeadline
        albumCategory {
          id
          title
          createdAt
          updatedAt
        }
        songs {
          nextToken
        }
        createdAt
        updatedAt
        albumCategoryAlbumsId
      }
      nextToken
    }
  }
`;
export const getSong = /* GraphQL */ `
  query GetSong($id: ID!) {
    getSong(id: $id) {
      id
      uri
      imageUri
      title
      artist
      album {
        id
        name
        by
        numberOfLikes
        imageUri
        artistsHeadline
        albumCategory {
          id
          title
          createdAt
          updatedAt
        }
        songs {
          nextToken
        }
        createdAt
        updatedAt
        albumCategoryAlbumsId
      }
      createdAt
      updatedAt
      albumSongsId
    }
  }
`;
export const listSongs = /* GraphQL */ `
  query ListSongs(
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSongs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        uri
        imageUri
        title
        artist
        album {
          id
          name
          by
          numberOfLikes
          imageUri
          artistsHeadline
          createdAt
          updatedAt
          albumCategoryAlbumsId
        }
        createdAt
        updatedAt
        albumSongsId
      }
      nextToken
    }
  }
`;
