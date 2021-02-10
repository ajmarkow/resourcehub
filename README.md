# Re:source Hub API 

Re:Source Hub API, 2/10/2021

**Built as interns at https://www.serverlessguru.com/**

By **AJ Markow, Ben White, Chloe Hellberg**


## Description
![](https://i.imgur.com/XuGiKEZ.png)
RESTful API with full CRUD functionality using AWS Services such as, Lambda, API Gateway, DynamoDB, Cognito, and S3. Also uses the Stripe API to power a donation endpoint to the API.

### Endpoints

![](https://i.imgur.com/Jjk7pcp.png)

**Authorization:**

* Authorization is integrated with AWS Cognito.
    * You’ll need to create a user pool and corresponding IAM role for user pool in order for authenticated users to be able to call the API
* The posts/all endpoint is the only exception to needing authorization.  This returns all resourcehub posts.

**Data Structure:** 


* All  posts endpoints consume and respond with JSON.  The Schema of posts is as follows:

```
    {
      userId: event.requestContext.identity.cognitoIdentityId, //pulled from cognito
      postId: uuid.v1(),
      postBlurb: data.postBlurb,
      postLink: data.postLink,
      postLanguage: data.postLanguage,
      postKeywords: data.postKeywords,
      postRating: data.postRating,
      attachment: data.attachment,
      createdAt: Date.now(),
    },
```

* The billing endpoint takes only POST requests and sends a donation of $1 to stripe account setup in API.  Stripe’s backend handles

## Setup/Installation Requirements

**Prerequisite:**

* You need to have an AWS (Amazon Web Services) Account:
    * Sign up at https://aws.amazon.com/
* You need to install the serverless framework on your machine
    * [Install serverless framework](https://www.serverless.com/)
* npm i -g serverless
* You need to install and login to the aws-cli
    * [Install aws-cli](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
* You need a [Stripe](https://stripe.com/) api key
* Create a DynamoDB table and take note of its name. 
* Create an S3 Bucket and take note of its name

**Setup Instructions**

* Clone this github repository to your machine.
* Cd into the cloned repository folder.
* Run npm install
* Create a  .env file with the following values defined:

```
S3_BUCKET = your S3 bucket name
tableName = the name of the DynamoDB table in your aws account
stripeSecretKey = your stripe secret key.
```

* If you haven’t already set up the aws cli, set it up with your account credentials.
* Run serverless deploy to create the resources in your AWS account.
* After running serverless deploy, the serverless command line interface will tell you the urls and info about the created resources. This info is helpful to take note of so you don’t have to go searching through your AWS account to find it.

## Known Bugs

No known bugs at this time. Please report if you find any [here](https://github.com/ajmarkow/resourcehub/issues).

## Support and contact details

Ben White: https://github.com/BenW2140
AJ Markow: https://github.com/ajmarkow
Chloe Hellberg: https://github.com/chloehellberg

## Technologies Used

* AWS Services
    * Amplify
    * API Gateway
    * Cognito
    * IAM
    * Lambda
    * Route 53
    * S3
* Third Party APIs
    * Stripe
* Frameworks
    * Serverless Framework
* Runtime 
    * Node.js
* Language 
    * JavaScript

### License

[MIT License](https://opensource.org/licenses/MIT)

Copyright (c) 2021 **AJ Markow, Ben White, Chloe Hellberg**
