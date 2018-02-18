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
    sh "curl -X POST -H 'Content-type: application/json' --data '{\"text\":\"Build is *failed* for *<https://bitbucket.org/anyclip/anyclip-tt/branch/${env.BRANCH_NAME}|${env.BRANCH_NAME}>* <${env.BUILD_URL}|Jenkins>\"}' https://hooks.slack.com/services/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"
    throw err
  }
}
