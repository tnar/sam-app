import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, DeleteCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

const tableName = process.env.SAMPLE_TABLE;

export const deleteItemHandler = async (event) => {
    if (event.httpMethod !== 'DELETE') {
        throw new Error(`deleteMethod only accepts DELETE method, you tried: ${event.httpMethod} method.`);
    }

    const id = event.pathParameters.id;
    const params = {
        TableName: tableName,
        Key: { id: id }
    };

    try {
        await ddbDocClient.send(new DeleteCommand(params));
        return {
            statusCode: 200,
            body: JSON.stringify({ message: `Item ${id} deleted successfully.` })
        };
    } catch (err) {
        console.log("Error", err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Could not delete item' })
        };
    }
};