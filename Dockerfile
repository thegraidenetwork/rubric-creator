# Angular base image
FROM teracy/angular-cli:6.2

# Install latest version of Chrome
RUN apt-get update && apt-get install google-chrome-stable

# Angular stuff
WORKDIR /angular

# Install packages
COPY ./package.json /angular/package.json
COPY ./package-lock.json /angular/package-lock.json
RUN npm install --silent
# Seems to fix Chrome versioning issue in e2e tests: https://stackoverflow.com/a/57791546/977192
RUN cd ./node_modules/protractor && npm i webdriver-manager && cd ../../

# Add code
COPY ./ /angular

EXPOSE 4200

CMD ["ng"]
