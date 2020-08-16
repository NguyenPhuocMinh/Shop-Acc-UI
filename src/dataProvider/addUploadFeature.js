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
    const thumbnailValid = params.data.thumbnail && params.data.thumbnail.rawFile instanceof File;
    let arrImages = [];
    if (thumbnailValid) {
      arrImages.push(params.data.thumbnail)
    }
    console.log("arrImages", arrImages)
    if (arrImages.length > 0) {
      let arrPromises = [];
      arrImages.map(image => {
        arrPromises.push(convertFileToBase64(image))
      })
      const data = { ...params.data };
      return Promise.all(arrPromises)
        .then(base64Images => base64Images.map(base64ImageUrl => {
          if (thumbnailValid) {
            const imageUrl = {
              src: base64ImageUrl,
              title: 'thumbnail'
            }
            data.thumbnail = imageUrl
          }
        }))
        .then(() => dataProvider.update(resource, {
          ...params,
          data
        }))
    } else {
      const data = { ...params.data };
      const imageUrl = {
        src: params.data.thumbnail,
        title: 'thumbnail'
      }
      data.thumbnail = imageUrl;
      return dataProvider.update(resource, {
        ...params,
        data
      })
    }
  },
});

/**
* Convert a `File` object returned by the upload input into a base 64 string.
* That's not the most optimized way to store images in production, but it's
* enough to illustrate the idea of data provider decoration.
*/
const convertFileToBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.rawFile);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });


export default addUploadCapabilities;
