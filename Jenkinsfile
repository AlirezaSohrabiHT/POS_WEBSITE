pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/AlirezaSohrabiHT/POS_WEBSITE.git', credentialsId: '1c05b26a-141b-42a6-8210-713e7f0acfbe'
                // or https if you use HTTPS and token
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy Build') {
            steps {
                sh '''
                if [ ! -d /var/www/exirportal ]; then
                    mkdir -p /var/www/exirportal
                fi
                rm -rf /var/www/exirportal/*
                cp -r build/* /var/www/exirportal/
                '''
            }
        }
    }
}
