# sam-app

## Description

sam-app is a serverless application built using the AWS Serverless Application Model (AWS SAM). It includes Lambda functions for CRUD operations on a DynamoDB table, integrated with API Gateway for HTTP endpoints.

## Features

- **CRUD Operations**: Create, Read, Update, Delete items in a DynamoDB table via HTTP endpoints.
- **AWS SAM CLI Integration**: Easily build, test, and deploy the application using AWS SAM CLI.
- **Unit Testing**: Implemented using Jest.
- **CI/CD Ready**: Includes `buildspec.yml` for AWS CodeBuild integration.

## Prerequisites

- **AWS CLI**: [Install the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html).
- **AWS SAM CLI**: [Install the AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html).
- **Node.js**: [Install Node.js 20](https://nodejs.org/en/), includes npm.
- **Docker**: [Install Docker](https://www.docker.com/products/docker-desktop).

## Installation

Clone the repository and install dependencies:

