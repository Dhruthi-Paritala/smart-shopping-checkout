pipeline {
    agent any

    stages {

        stage('Build Docker') {
            steps {
                sh 'docker build -t smart-backend ./backend'
                sh 'docker build -t smart-frontend ./frontend'
            }
        }

        stage('Run App') {
            steps {
                sh 'docker run -d -p 5001:5001 smart-backend'
                sh 'docker run -d -p 3000:3000 smart-frontend'
            }
        }
    }
}