pipeline {
    agent any

    tools {
        nodejs 'node'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build app') {
            steps {
                bat 'npm run build'
            }
        }
    }

    post {
        success {
            echo '✅ React (Vite) build successful'
        }
        failure {
            echo '❌ Build failed'
        }
    }
}
