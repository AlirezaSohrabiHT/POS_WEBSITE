pipeline {
    agent any

    tools {
        nodejs "node20"
    }

    environment {
        NODE_ENV = 'production'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', 
                    url: 'https://github.com/AlirezaSohrabiHT/POS_WEBSITE.git', 
                    credentialsId: '1c05b26a-141b-42a6-8210-713e7f0acfbe'
            }
        }

        stage('Install Yarn') {
            steps {
                sh 'npm install -g yarn'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'yarn install'
            }
        }

        stage('Install TailwindCSS (if missing)') {
            steps {
                sh 'yarn add tailwindcss postcss autoprefixer'
            }
        }

        stage('Build React App') {
            steps {
                sh 'yarn build'
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
