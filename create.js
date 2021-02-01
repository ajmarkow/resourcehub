import * as uuid from "uuid";
import AWS from "aws-sdk";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export async function main(event, context) {
  const data = JSON.parse(event.body);

  const params = {
    TableName: process.env.tableName,
    Item: {
      userId: "123",
      postId: uuid.v1(),
      postBlurb: data.postBlurb,
      postLink: data.postLink,
      postLanguage: data.postLanguage,
      postKeywords: data.postKeywords,
      postRating: data.postRating,
      attachment: data.attachment,
      createdAt: Date.now(),
    },
  };

  try {
    console.log(params);
    await dynamoDb.put(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(params.Item),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body:JSON.stringify({error: e.message}),
    };
  }
}