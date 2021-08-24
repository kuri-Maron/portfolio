FROM node:alpine
WORKDIR /usr/src/app

# RUN npm install -g create-react-app
# RUN yarn global add @aws-amplify/cli
RUN npm install -g @aws-amplify/cli
