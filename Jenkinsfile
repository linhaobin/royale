node {
  stage('Build') {
    checkout scm

    docker.build('royale')
  }
    
  stage('Deploy') {
    sh 'docker-dcomose down'
    sh 'docker-compose up -d'
  }
}