node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sh 'node -v'
      sh 'npm -v'
      sh 'docker -v'
      sh 'printenv'
    }
  }
  catch (err) {
    throw err
  }
}
