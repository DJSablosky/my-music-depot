# my-music-depot
Daniel Sablosky's AWS FullStack Serverless Application

## DynamoDB
An AWS DynamoDB called OnicaMusic was created with twelve items.
Artist (String) is the primary partition key, and Song (String) is the
primary sort key.  

## Lambda
Two JavaScript Lambda functions were created in AWS.
listOnicaMusic retrieves the items by scanning the DynamoDB table.
getOnicaSong queries the DynamoDB table using the Artist and Song provided.
CloudWatch logs produced by the Lambda functions are retained for thirty days.
A custom IAM role was created with a custom IAM policy that allows Lambda
to access the OnciaMusic DynamoDB table and create a CloudWatch group for it
logs.

## Amazon API Gateway
onicaMusicAPI was created for two GET methods:

This method uses the listOnicaMusic Lambda function:
arn:aws:execute-api:us-east-1:754237792635:xxd1q7fcf3/\*/GET/onicamusic

This resource uses the listOnicaMusic Lambda function:
arn:aws:execute-api:us-east-1:754237792635:xxd1q7fcf3/\*/GET/onicamusic/id

There are stages for dev and prod:
https://xxd1q7fcf3.execute-api.us-east-1.amazonaws.com/dev
https://xxd1q7fcf3.execute-api.us-east-1.amazonaws.com/prod

## Amazon S3
A public S3 bucket was created to store the files for a simple website that
returns the JSON results of the two Lambda functions.  The JSON listeners
in the JavaScript file fetch the prod API endpoint to display the JSON results
in the HTML page.

http://music-depot-djs-us-east-1.s3-website-us-east-1.amazonaws.com
