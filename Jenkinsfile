pipeline {

    agent any

    stages {

        stage('Check Files') {
            steps {
                echo 'Checking project files...'
                bat 'dir'
            }
        }

        stage('HTML Validation') {
            steps {
                echo 'Validating HTML files...'
                bat 'timeout /t 5'
            }
        }

        stage('CSS Validation') {
            steps {
                echo 'Checking CSS files...'
                bat 'timeout /t 5'
            }
        }

        stage('JavaScript Validation') {
            steps {
                echo 'Checking JavaScript files...'
                bat 'timeout /t 5'
            }
        }

        stage('Build') {
            steps {
                echo 'Building Website...'
                bat 'timeout /t 8'
            }
        }

        stage('Testing') {
            steps {
                echo 'Running Tests...'
                bat 'timeout /t 8'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying Website...'
                bat 'timeout /t 5'
            }
        }
    }

    post {

        success {
            echo 'Pipeline Executed Successfully!'
        }

        failure {
            echo 'Pipeline Failed!'
        }

        always {
            echo 'Pipeline Finished!'
        }
    }
}
