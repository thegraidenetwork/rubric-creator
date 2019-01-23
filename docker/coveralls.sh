 #!/usr/bin/env bash

echo "Running tests with code coverage"
ng test --watch=false --code-coverage --browsers Chrome_no_sandbox

echo "Piping coverage to coveralls"
cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js