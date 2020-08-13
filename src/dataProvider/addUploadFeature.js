/**
 * For posts update only, convert uploaded image in base 64 and attach it to
 * the `picture` sent property, with `src` and `title` attributes.
 */

const addUploadCapabilities = dataProvider => ({
  ...dataProvider,
  update: (resource, params) => {
    if (resource !== 'accounts' || !params.data.thumbnail) {
      return dataProvider.update(resource, params);
    }
    const thumbnail = params.data.thumbnail;
    const newThumbnail = thumbnail;
    const formerThumbnail = !thumbnail;
    if (typeof newThumbnail === 'string') {
      return Promise.resolve(newThumbnail)
        .then(base64Thumbnail => {
          return {
            src: base64Thumbnail
          }
        })
        .then(transformedNewThumbnail => {
          return dataProvider.update(resource, {
            ...params,
            data: {
              ...params.data,
              thumbnail: {
                ...transformedNewThumbnail,
                ...formerThumbnail
              }
            }
          })
        })
        .catch(err => {
          return Promise.reject(err);
        })
    }
    return Promise.resolve(newThumbnail)
      .then(thumbnailFile => convertFileToBase64(thumbnailFile))
      .then(base64Thumbnail => {
        return {
          src: base64Thumbnail
        }
      })
      .then(transformedNewThumbnail => {
        return dataProvider.update(resource, {
          ...params,
          data: {
            ...params.data,
            thumbnail: {
              ...transformedNewThumbnail,
              ...formerThumbnail
            }
          }
        })
      })
      .catch(err => {
        return Promise.reject(err);
      })
  },
});

/**
* Convert a `File` object returned by the upload input into a base 64 string.
* That's not the most optimized way to store images in production, but it's
* enough to illustrate the idea of data provider decoration.
*/
const convertFileToBase64 = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;

    reader.readAsDataURL(file.rawFile);
  });
}


export default addUploadCapabilities;
