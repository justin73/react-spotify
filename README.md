# react-spotify

There are two parts in the project

#### ./auth-server
> Under this folder, there is the setup for the sever end using express.js
> for Spotify OAuth purpose, since Spotify API request user to log in in order to get the valid token
 
#### ./client
> The front-end code base using [React](https://reactjs.org/) based on [React-CLI](https://github.com/facebook/create-react-app)

> Basic Functionalities
  > - Browsing Artist (By Name Searching)
  
  > - Browsing Artist's Album List ordered based on release year
  > > 1. Display album tracks (on click)
  > > 2. Display ablum popularity/genre/release date/cover/title
  > > 3. Display track details on hover over
  
  > - View Album Track List 
  
  > - Browsing New Release (By Country, currently for the demo purpose, I've only included 'US' and 'CA')
  > > 1. Displaying recent release albums/singles
  > > 2. View recent releases' tracks
  > > 3. View recent releases' artists


#### How to Run It on Your Local Machine
1. Clone the repo to your local machine
2. Run ```npm install``` under both ./auth-server and ./client path
3. In your terminal, locate yourself to the project folder. First run ```node auth-server/authorization_code/app.js```. Keep it running
4. In another tab, run ```npm start``` under the **client** folder
5. Open your browser and try [http:localhost:3000](http:localhost:3000), then you will be able to see the app running
    
    


TODO:
  - [ ] Add redux-presist
  - [ ] Add react-redux connect to stateless components
  - [ ] Add proper error handling
  - [ ] Improve UI, animation, etc
