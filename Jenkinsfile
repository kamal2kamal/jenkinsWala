pipeline {
    agent any

    stages {
        stage('Build Image') {
    steps {
        // Adding DOCKER_BUILDKIT=1 makes the "Sending context" much faster
        sh 'DOCKER_BUILDKIT=1 docker build -t node-github-app .'
    }
}

        stage('Deploy') {
            steps {
                // Stop and remove old versions to avoid conflicts
                sh 'docker stop node-container || true'
                sh 'docker rm node-container || true'
                
                // Run the new container
                sh 'docker run -d --name node-container -p 8082:3000 node-github-app'
                echo 'Build Successful! Check http://localhost:8082'
            }
        }
    }
}
