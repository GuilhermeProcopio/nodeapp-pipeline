# Project Name

## Overview

This project is a full-stack application consisting of a backend built with NestJS and a frontend built with Next.js. The project is structured to facilitate development, testing, and deployment using GitHub Actions for CI/CD.

## Project Structure


### Backend

The backend is built using NestJS and is located in the `backend/` directory. It includes controllers, services, and modules to handle various functionalities.

### Frontend

The frontend is built using Next.js and is located in the `frontend/` directory. It includes configuration files for Docker, Tailwind CSS, and other necessary tools.

## GitHub Actions

The project uses GitHub Actions for continuous integration and deployment. The workflows are defined in the `.github/workflows/` directory.

### Workflows

- **pipeline-ecr-ebs.yml**: This workflow handles the build and deployment of the backend to AWS Elastic Beanstalk and ECR.
- **pipeline-deploy-s3.yml**: This workflow handles the deployment of the frontend to an S3 bucket.

## Getting Started

### Prerequisites

- Node.js
- Docker (for containerization)
- AWS CLI (for deployment)

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-repo/project-name.git
    ```

2. Navigate to the backend directory and install dependencies:

    ```sh
    cd backend
    npm install
    ```

3. Navigate to the frontend directory and install dependencies:

    ```sh
    cd ../frontend
    npm install
    ```

### Running the Application

#### Backend

1. Navigate to the backend directory:

    ```sh
    cd backend
    ```

2. Start the backend server:

    ```sh
    npm run start:dev
    ```

#### Frontend

1. Navigate to the frontend directory:

    ```sh
    cd frontend
    ```

2. Start the frontend server:

    ```sh
    npm run dev
    ```

### Testing

#### Backend

1. Navigate to the backend directory:

    ```sh
    cd backend
    ```

2. Run the tests:

    ```sh
    npm run test
    ```

#### Frontend

1. Navigate to the frontend directory:

    ```sh
    cd frontend
    ```

2. Run the tests:

    ```sh
    npm run test
    ```

## Deployment

### Backend

The backend is deployed to AWS Elastic Beanstalk and ECR using the `pipeline-ecr-ebs.yml` GitHub Actions workflow.
### pipeline-ecr-ebs.yml

This workflow handles the build and deployment of the backend to AWS Elastic Beanstalk and ECR.

- **Trigger**: The workflow is triggered on push to the `main` branch.
- **Jobs**:
  - **Build**: Builds the Docker image for the backend.
    - **actions/checkout@v2**: Checks out the repository code.
    - **docker/setup-buildx-action@v1**: Sets up Docker Buildx, a Docker CLI plugin for extended build capabilities with BuildKit.
  - **Push to ECR**: Pushes the Docker image to AWS Elastic Container Registry (ECR).
    - **aws-actions/amazon-ecr-login@v1**: Logs in to Amazon ECR.
    - **docker build and push commands**: Builds the Docker image and pushes it to the ECR repository.
  - **Deploy to Elastic Beanstalk**: Deploys the Docker image to AWS Elastic Beanstalk.
    - **eb init and eb deploy commands**: Initializes the Elastic Beanstalk application and deploys the Docker image.
### Frontend

The frontend is deployed to an S3 bucket using the `pipeline-deploy-s3.yml` GitHub Actions workflow.

### pipeline-deploy-s3.yml

This workflow handles the deployment of the frontend to an S3 bucket.

- **Trigger**: The workflow is triggered on push to the `main` branch.
- **Jobs**:
  - **Build**: Builds the frontend application.
    - **actions/checkout@v2**: Checks out the repository code.
    - **npm install**: Installs the project dependencies.
    - **npm run build**: Builds the frontend application.
  - **Deploy to S3**: Deploys the built frontend application to an AWS S3 bucket.
    - **aws-actions/s3-sync-action@v1**: Syncs the built files to the specified S3 bucket.



## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.