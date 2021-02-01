import * as uuid from "uuid";
import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
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

  await dynamoDb.put(params);

  return params.Item;
});