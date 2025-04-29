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

        stage('Check Node and NPM') {
            steps {
                sh '''
                echo "Node version:"
                node -v
                echo "NPM version:"
                npm -v
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install --force'
            }
        }

        stage('Install TailwindCSS (if missing)') {
            steps {
                sh 'yarn add tailwindcss postcss autoprefixer'
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
                cp -r out/* /var/www/exirportal/
                '''
            }
        }
    }
}
