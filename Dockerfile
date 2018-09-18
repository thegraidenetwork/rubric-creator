# Angular base image
FROM teracy/angular-cli:1.7.4
RUN npm update -g @angular/cli@~6.2.0
WORKDIR /angular

# Install packages
COPY ./package.json /angular/package.json
COPY ./package-lock.json /angular/package-lock.json
RUN npm install --silent

# Add code
COPY ./ /angular

EXPOSE 4200

CMD ["ng"]
