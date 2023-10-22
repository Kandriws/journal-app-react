import { fileUpload } from "../../src/helpers/fileUpload";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'du4zqsvr4',
    api_key: '317475851743592',
    api_secret: 'gKAqIozreTFoqhVGpwdmVIKy-iU',
    secure: true
});

describe('Pruebas fileUpload', () => {
    test('Debe subir el archivo correctamente en cloudinary', async () => {
        const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png';
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto-test-file-upload.png');

        const url = await fileUpload(file);

        expect(typeof url).toBe('string');

        // Borrar imagen por ID
        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.png', '');

        const cloudRes = await cloudinary.api.delete_resources(['journal-app/'+imageId],{
            resource_type: 'image'
        });

    });

    test('Debe retornar null', async() => { 
        
        const file = new File([], 'foto-test-file-upload.png');
        const url = await fileUpload(file);

        expect(url).toEqual(undefined);
     })
});