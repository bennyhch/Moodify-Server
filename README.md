# Moodify-Server
<p align="center">

<img src="https://user-images.githubusercontent.com/70516815/183447264-d74ebb70-ff04-47c5-99ae-cb1a69c9fe45.png" width="200" align="center">
</p>
<br>

- A mood-tracking and journaling app for users to keep track of their mood throughout the days
- Helps to understand one's negative behaviors and thoughts, as well as the triggering events to a particular negative or positive emotion
- Identify symptoms related to Post-Traumatic Stress Disorder, Bioplar Disorder, Depression, Anxiety Disorder

## Screenshot 

<p align="center">
<img width="800" alt="Dashboard" src="https://user-images.githubusercontent.com/70516815/183446918-251c5eab-b4bd-4cbb-914e-ab977f34e8c7.png">
</p>

<p align="center">
<img width="800" alt="logger" src="https://user-images.githubusercontent.com/70516815/183449317-554f1f3b-4126-40bc-ad5e-8d293a3c147c.png">
</p>

<p align="center">
<img width="800" alt="Journal Modal" src="https://user-images.githubusercontent.com/70516815/183449950-f69e0758-1efa-457d-95a8-2b89e7c4e477.png">
</p>

<p align="center">
<img width="800" alt="stat" src="https://user-images.githubusercontent.com/70516815/183450846-ca170132-95a6-427e-9c08-3688c35a9b9a.png">
</p>

# Getting started

## Prerequisites
In order to get the app running, you'll need to install MongoDB. For more info on installation, please refer to [here](https://www.mongodb.com/docs/manual/installation/). 

## Installation
1. Clone the current repo and enter the _server_ directory, next, install dependencies 
```
git clone https://github.com/bennyhch/Moodify.git 
cd server
npm install
npm install nodemon 
```

2. Start the server
```
npx nodemon 
```

3. Move to the _client_ and start development build after intalling the dependencies
```
cd ../client
npm install 
npm start
```

## Built with
- Express.js
- React with React-Router
- MongoDB with Mongoose 
- Figma 

## Author
[Ben Ho](https://www.github.com/bennyhch) - [Linkedin](https://www.linkedin.com/in/ho-ben/)
