node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sh 'docker -v'
      sh 'printenv'
    }
    stage('Build Docker test'){
      sh 'docker build -t react-test -f Dockerfile.test --no-cache . '
    }
    stage('Docker test'){
      sh 'docker run -v $PWD/coverage:/usr/src/app/coverage --rm react-test'
    }
    stage('Coverage report'){
      publishHTML([
        reportName: 'Coverage Report',
        allowMissing: false,
        alwaysLinkToLastBuild: false,
        keepAll: true,
        reportDir: 'coverage',
        reportFiles: 'index.html'
      ])
    }
    stage('Clean Docker test'){
      sh 'docker rmi react-test'
    }
    stage('Deploy'){
      if(env.BRANCH_NAME == 'master'){
        sh 'docker build -t react-app --no-cache .'
        sh 'docker tag react-app localhost:5000/react-app'
        sh "\$(aws ecr get-login)"
        sh 'docker push localhost:5000/react-app'
        sh 'docker rmi react-app'
      }
    }
  }
  catch (err) {
    throw err
  }
}
