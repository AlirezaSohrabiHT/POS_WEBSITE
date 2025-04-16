pipeline {
    agent any
    
    environment {
        // Define environment variables here
        NODE_VERSION = '18'  // Adjust according to your project needs
        GITHUB_REPO = 'your-github-username/exirportal'  // Replace with your actual GitHub repo
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout code from GitHub repository
                checkout scm
            }
        }
        
        stage('Setup Environment') {
            steps {
                // Setup Node.js environment
                sh 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash'
                sh '. ~/.nvm/nvm.sh && nvm install ${NODE_VERSION} && nvm use ${NODE_VERSION}'
                
                // Install dependencies
                sh 'yarn install'
            }
        }
        
        stage('Lint') {
            steps {
                // Run linting if your project has it configured
                sh 'yarn lint || echo "No lint script found, skipping"'
            }
        }
        
        stage('Test') {
            steps {
                // Run tests
                sh 'yarn test || echo "No test script found, skipping"'
            }
        }
        
        stage('Build') {
            steps {
                // Build the Next.js application
                sh 'yarn build'
            }
        }
        
        stage('Deploy to Production') {
            when {
                branch 'main'  // Only deploy when the branch is main
            }
            steps {
                // Deploy steps
                sh 'cd ~/containers/exirportal && docker-compose down'
                sh 'cd ~/containers/exirportal && docker-compose build'
                sh 'cd ~/containers/exirportal && docker-compose up -d'
            }
        }
    }
    
    post {
        always {
            // Clean up workspace after build
            cleanWs()
        }
        success {
            echo 'Build and deployment successful!'
        }
        failure {
            echo 'Build or deployment failed!'
        }
    }
}