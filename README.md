# SAM Application API

This README provides instructions on how to call the API endpoints using curl.

## API Endpoints

### 1. Get All Items

To retrieve all items from the DynamoDB table:

curl -X GET {URL}


### 2. Get Item by ID

To retrieve a specific item by its ID:


curl -X GET {URL}/{id}


Replace `{id}` with the actual ID of the item you want to retrieve.

### 3. Create a New Item

To add a new item to the DynamoDB table:

curl -X POST {URL} \
-H "Content-Type: application/json" \
-d '{"id": "unique_id", "name": "Item Name"}'


Replace `"unique_id"` and `"Item Name"` with the desired values.

### 4. Delete an Item

To delete an item from the DynamoDB table:

curl -X DELETE {URL}/{id}


Replace `{id}` with the ID of the item you want to delete.
