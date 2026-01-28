pipeline {
    agent any

    tools {
        nodejs 'node'
    }

    environment {
        DEPLOY_DIR = "C:\\react-preview\\dist"
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

        stage('Deploy (copy dist)') {
            steps {
                bat """
                if exist %DEPLOY_DIR% rmdir /s /q %DEPLOY_DIR%
                mkdir %DEPLOY_DIR%
                xcopy dist %DEPLOY_DIR% /E /I /Y
                """
            }
        }

        stage('Preview (TEMP)') {
            steps {
                echo '⚠ Preview will run for 60 seconds only'

                bat """
                start /B cmd /c "npx vite preview --port 4173"
                timeout /t 60
                taskkill /F /IM node.exe
                """
            }
        }
    }

    post {
        success {
            echo '✅ Build + deploy + preview completed'
            echo '👉 Open http://localhost:4173 (during preview window)'
        }
        failure {
            echo '❌ Pipeline failed'
        }
    }
}


// pipeline {
//     agent any

//     tools {
//         nodejs 'node'
//     }

//     stages {
//         stage('Checkout') {
//             steps {
//                 checkout scm
//             }
//         }

//         stage('Install dependencies') {
//             steps {
//                 bat 'npm install'
//             }
//         }

//         stage('Build app') {
//             steps {
//                 bat 'npm run build'
//             }
//         }
//     }

//     post {
//         success {
//             echo '✅ React (Vite) build successful'
//         }
//         failure {
//             echo '❌ Build failed'
//         }
//     }
// }
