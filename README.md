#Working Food Ordering app with Stripe-Strapi integration

a variation of https://strapi.io/blog/nextjs-react-hooks-strapi-food-app-1 

added test api keys and ran $ cd backend
$ npm i stripe --save 

still works and sees it reflected on both stripe developer dash and strapi on 1337 orders. 

the auth doesn't work yet. 

------- from the beginning: 

fork & clone.  run 
npm install
followed by
npm run dev
You can check the package.json to see that running npm run dev is equivalent to running next dev. 
Once this is working, navigate to localhost:3000 to see the page with out data (an error where data would be above cart)

new terminal window, cd backend 
run npm install, followed by npm run build, followed by npm run develop. 

## on future revisits just do npm run dev on root folder and cd backend npm run develop

Then, navigate to localhost:1337 in your browser to confirm that Strapi is running. 
select the Sign up link at the top right. Input a username, email, and password to complete the form. Afterward, navigate back to your Strapi dashboard and view the new user within the user list.  set Roles & Permissions to allow all. Add Restaurants and dishes. 
