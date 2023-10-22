export const fileUpload = async (file) => {

    if (file === null || file === undefined) {
        return null;
      }

    const cloudUrl = 'https://api.cloudinary.com/v1_1/du4zqsvr4/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        const cloudRes = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(({ secure_url }) => secure_url)
            .catch(err => {
                console.error(err);
                throw new Error(err.message);
            });
            
            
        return cloudRes;

    } catch (error) {
        return 'error';
    }

}