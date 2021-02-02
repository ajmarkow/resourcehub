import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.tableName,
    Key: {
      userId: "123",
      postId: event.pathParameters.id,
    },

    UpdateExpression:
      "SET postBlurb = :postBlurb, postLink = :postLink, postLanguage = :postLanguage, postKeywords = :postKeywords, postRating = :postRating, attachment = :attachment",
    ExpressionAttributeValues: {
      ":postBlurb": data.postBlurb || null,
      ":postLink": data.postLink || null,
      ":postLanguage": data.postLanguage || null,
      ":postKeywords": data.postKeywords || null,
      ":postRating": data.postRating || null,
      ":attachment": data.attachment || null,
    },

    ReturnValues: "ALL_NEW",
  };

  await dynamoDb.update(params);

  return { status: true };
});
