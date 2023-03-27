import getData from "./Api";
export const getSpots = async () => {
  try {
    let res = await getData(`${process.env.REACT_APP_API_SPOT}`);
    return res.json();
  } catch (err) {
    alert('Server did not responed');
  }
};
export const getSpot = async (id) => {
  try {
    let res = await getData(`${process.env.REACT_APP_API_SPOT}/${id}`);
    return res.json();
  } catch (err) {
    alert('Server did not responed');
  }
};
export const createSpot = async (title, description, price, images) => {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);
  formData.append('price', price);
  for (let i = 0; i < images.length; i++) {
    formData.append('images[]', images[i]);
  }
  await fetch(`${process.env.REACT_APP_API_SPOT}`, {
    method: 'POST',
    body: formData,
    headers: {
      'Token': localStorage.getItem('token')
    }
  })
    .then((response) => {
      response.json()
    })
    .catch((error) => {
      console.error('Error creating new post:', error);
    });
}
export const editSport = async (id, title, description, price) => {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);
  formData.append('price', price);
  await fetch(`${process.env.REACT_APP_API_SPOT}/${id}`, {
    method: 'PUT',
    body: formData,
    headers: {
      'Token': localStorage.getItem('token')
    }
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error updating spot:', error);
    });
}
export const updateReview = async (body, reviewId) => {
  const formData = new FormData();
  formData.append('body', body);
  await fetch(`${process.env.REACT_APP_API_REVIEW}/${reviewId}`, {
    method: 'PUT',
    body: formData,
    headers: {
      'Token': localStorage.getItem('token')
    }
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error updating spot:', error);
    });
}
export const createReview = async (body, id, setShow, setBody) => {
  const formData = new FormData();
  formData.append('body', body);
  formData.append('spot_id', id);
  await fetch(`${process.env.REACT_APP_API_REVIEW}`, {
    method: 'POST',
    body: formData,
    headers: {
      'Token': localStorage.getItem('token')
    }
  })
    .then((data) => {
      console.log('review created:', data);
      setShow(false)
      setBody('')
    })
    .catch((error) => {
      console.error('Error updating spot:', error);
    });
}
