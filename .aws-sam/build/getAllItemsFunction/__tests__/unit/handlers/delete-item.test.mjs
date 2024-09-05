import { deleteItemHandler } from '../../../src/handlers/delete-item.mjs';
import { DynamoDBDocumentClient, DeleteCommand } from '@aws-sdk/lib-dynamodb';
import { mockClient } from "aws-sdk-client-mock";

describe('Test deleteItemHandler', () => {
    const ddbMock = mockClient(DynamoDBDocumentClient);

    beforeEach(() => {
        ddbMock.reset();
    });

    it('should delete item by id', async () => {
        ddbMock.on(DeleteCommand).resolves({});

        const event = {
            httpMethod: 'DELETE',
            pathParameters: {
                id: 'id1'
            }
        };

        const result = await deleteItemHandler(event);

        const expectedResult = {
            statusCode: 200,
            body: JSON.stringify({ message: 'Item id1 deleted successfully.' })
        };

        expect(result).toEqual(expectedResult);
    });
});