import { test, expect } from '../../fixtures/api.fixture';

test.describe.serial('Petstore API - CRUD Operations', () => {

  let petId: number;
  let petName: string;
  let updatedPetName: string;

  test('Create a new Pet', async ({ request, petStoreUrl }) => {

    petId = Date.now();
    petName = `TestPet_${petId}`;
    updatedPetName = `${petName}_Updated`;

    const requestBody = {
      id: petId,
      name: petName,
      status: 'available'
    };

    const response = await request.post(`${petStoreUrl}/pet`, {
      data: requestBody
    });

    const body = await response.json();

    console.log(JSON.stringify(body, null, 2));

    expect(response.status()).toBe(200);
    expect(body.id).toBe(petId);
    expect(body.name).toBe(petName);
    expect(body.status).toBe('available');
  });


  test('Retrieve the created Pet and verify data', async ({
    request,
    petStoreUrl
  }) => {

    const response = await request.get(`${petStoreUrl}/pet/${petId}`);

    const body = await response.json();

    console.log(JSON.stringify(body, null, 2));

    expect(response.status()).toBe(200);
    expect(body.id).toBe(petId);
    expect(body.name).toBe(petName);
  });


  test('Update the Pet name', async ({
    request,
    petStoreUrl
  }) => {

    const requestBody = {
      id: petId,
      name: updatedPetName,
      status: 'available'
    };

    const response = await request.put(`${petStoreUrl}/pet`, {
      data: requestBody
    });

    const body = await response.json();

    console.log(JSON.stringify(body, null, 2));

    expect(response.status()).toBe(200);
    expect(body.id).toBe(petId);
    expect(body.name).toBe(updatedPetName);
  });


  test('Delete the Pet and verify it is no longer available', async ({
    request,
    petStoreUrl
  }) => {

    const deleteResponse = await request.delete(
      `${petStoreUrl}/pet/${petId}`
    );

    const deleteBody = await deleteResponse.json();

    console.log(JSON.stringify(deleteBody, null, 2));

    expect(deleteResponse.status()).toBe(200);

    const getResponse = await request.get(
      `${petStoreUrl}/pet/${petId}`
    );

    const getBody = await getResponse.json();

    console.log(JSON.stringify(getBody, null, 2));

    expect(getResponse.status()).toBe(404);
    expect(getBody).toHaveProperty('code');
    expect(getBody.code).toBe(1);
    expect(getBody.message.toLowerCase()).toContain('not found');
  });

});