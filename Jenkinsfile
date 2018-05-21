node {
  stage('Build') {
    checkout scm

    docker.build('royale')
  }
    
  stage('Deploy') {
    sh 'docker-compose down'
    sh 'docker-compose up -d'
  }
}