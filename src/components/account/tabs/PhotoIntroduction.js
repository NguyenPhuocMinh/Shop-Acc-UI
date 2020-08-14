import React, { useRef, useState, useEffect } from 'react';
import {
  FormTab,
  ImageInput,
  ImageField,
} from 'react-admin';
import MuiGridList from '@material-ui/core/GridList';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import { get, isEmpty } from 'lodash';

const PhotoIntroduction = props => {
  const { classes, record } = props;
  const [images, setImages] = useState([]);

  const imagesInDb = get(record, 'images') || [];
  const accountId = get(props, 'id');
  const inputUpload = useRef(null);

  const buttonUpload = e => {
    e.preventDefault();
    inputUpload.current.click();
  };

  const handleUploadImages = e => {
    const formData = new FormData();
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      formData.append(`images`, files[i]);
    }
    // const REST_API = process.env.REACT_APP_REST_API_URL;
    const request = new Request(`/uploadImages/${accountId}`, {
      method: 'PUT',
      body: formData
    })
    return fetch(request)
      .then(response => {
        response.json()
          .then(result => {
            setImages(result.images);
          })
      })
      .catch(err => {
        return Promise.reject(err);
      })
  };

  useEffect(() => {
    if (!isEmpty(imagesInDb)) {
      setImages(imagesInDb);
    }
  }, [imagesInDb])

  return (
    <FormTab
      {...props}
      label="resources.accounts.tabs.photoIntroduction"
    >
      <ImageField
        source="thumbnail"
        label="resources.accounts.fields.thumbnail"
      />
      <ImageInput
        source="thumbnail"
        label="resources.accounts.fields.choosesThumbnail"
        accept="image/*"
      >
        <ImageField
          source="src"
        />
      </ImageInput>
      <div style={{ width: '100%' }}>
        <form>
          <input
            style={{ display: 'none' }}
            type="file"
            onChange={handleUploadImages}
            name="images"
            ref={inputUpload}
            multiple={true}
          />
          <button style={{ width: '100%', height: '200px' }} onClick={buttonUpload}>
            <div style={{ margin: '5px' }}>
              <PhotoCameraIcon />
            </div>
            <div style={{ margin: '10px' }}>
              Tải ảnh
            </div>
          </button>
        </form>
        <div className={classes.root}>
          <MuiGridList
            cellHeight={240}
            className={classes.gridList}
          >
            {images && images.map(image => {
              const srcImage = `http://localhost:8080/${image.path}`;
              return (
                <img key={image.id} src={srcImage} alt="image" style={{ width: '350px' }} />
              )
            })}
          </MuiGridList>
        </div>
      </div>
    </FormTab>
  )
};

export default PhotoIntroduction;