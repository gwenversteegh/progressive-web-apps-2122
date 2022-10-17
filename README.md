# citas para ti!

https://citas-para-ti.herokuapp.com

## about

Citas para ti is a single page webapp with inspirational webapp quotes for students who need a little extra motivation when they have a deadline or when they don't have inspiration for a project.

<img width="500" alt="Screenshot 2022-03-08 at 15 23 08" src="https://user-images.githubusercontent.com/70900763/157256951-48886828-d8b6-436a-8fcd-12cb5815d1e6.png"> <img width="500" alt="Screenshot 2022-03-08 at 15 26 23" src="https://user-images.githubusercontent.com/70900763/157257500-6b638998-b531-4761-aa0f-ce48716d7292.png">



## Features

### Random Quote
Maybe you don't have time to scroll trough all the quotes or you just want the computer to decide for you. If this is the case you can click on show random quote. When you click on this button 

### Offline page
<img width="375" alt="Screenshot 2022-04-08 at 10 29 15" src="https://user-images.githubusercontent.com/70900763/162397080-f4b88350-60e2-46b5-b602-59a5ba442096.png">


## Activity diagram 
<img width="454" alt="Screenshot 2022-04-08 at 10 21 04" src="https://user-images.githubusercontent.com/70900763/162395543-77fed183-b468-42f8-871e-144165d8cebb.png">


### Service worker

The service worker checks if the user has an internet connection. When a request is made, the service worker stores the 'CORE_ASSETS' in the browser's cache memory 'v3'. The CORE_ASSETS contains the offline page and the styling file. This allows the service worker to still show the offline page with associated styling when there is no internet connection. 

When there is internet connection, the service worker caches the rendered content in 'html cache'. If the user later returns to de SPA without internet, he can see still the pages he has already visited.

<img width="454" alt="Screenshot 2022-04-08 at 10 13 36" src="https://user-images.githubusercontent.com/70900763/162394359-9d0c8133-cb11-444d-be0c-08e0be6f639a.png">

## Optimalisation

To check the optimalisation from your website, you can use lighthouse, which is implemented in the chrome browser. It makes a report of your website and gives you tips to optimize it on different topics: SEO, accessability, best practices and performance. 
### phone

<img width="438" alt="Screenshot 2022-04-08 at 14 12 57" src="https://user-images.githubusercontent.com/70900763/162433370-235426a8-5a9a-4889-9674-fa7f2a175dbe.png">
### laptop

<img width="430" alt="Screenshot 2022-04-08 at 14 15 33" src="https://user-images.githubusercontent.com/70900763/162433665-ab18d479-c81e-433e-9404-0e0ee0a553a4.png">

<img width="773" alt="Screenshot 2022-04-08 at 14 14 36" src="https://user-images.githubusercontent.com/70900763/162433546-c3054b2f-1fe3-43b3-a12d-9565849c7022.png">

> The performance is not 100% on a phone because of the image size. The images are too big and I can't make them smaller because the API does not support this. The problem is that the API used links from other sites and we didn't get the permission to change the API. 

### things I used
- Compression package
- Express-minify package
- Meta tags for the SEO


## Client side vs server side rendering

<img width="571" alt="Screenshot 2022-10-17 at 11 12 20" src="https://user-images.githubusercontent.com/70900763/196138425-f7f6151e-e303-4a68-afe7-4acacdcbf724.png">

### Client side
With client side rendering, most content is rendered in the client's browser. The user receives an (almost) empty web page. This page is filled with content that renders with client-side javascript. If the user has a bad internet connection, it can take a very long time for all content to load. This is a major disadvantage of client side rendering.


### Server side
With server side rendering, all rendering is done on the server. An advantage of server side rendering is that the user does not have to look long at a (half) empty page if the internet connection is not really fast. With server side rendering, the user receives the HTML-page from the server when it is completely filled with all fetched data from databases and/or APIs. Servers are super fast, so that will happen in milliseconds.


## How to install

Github can be a pain in the ass if you don't understand how to use it. First download the Github dekstop app. This will save you a lot of time and trouble. When you're on my github page you will see a green button with "code". Click on this button and click on "open with github desktop". Now you can use my code on your on computer and make it your own. 

<img width="305" alt="Screenshot 2022-03-08 at 09 22 13" src="https://user-images.githubusercontent.com/70900763/157196877-86eb761c-f184-4eae-803f-39bbc56f5548.png"> <img width="380" alt="Screenshot 2022-03-08 at 09 23 28" src="https://user-images.githubusercontent.com/70900763/157196928-f4d6b20c-eb01-4fab-8648-f04ec7ef63c3.png">

You need to make sure that you've downloaded Node, you can do this in the terminal with npm install. You need to start the server to see the site, you can do this by typing " npm run dev " in your terminal. When you go the the localhost 8000, you will see the site.


## The API
This is the API I used:
https://quote.api.fdnd.nl/v1/quote 

In this API there are inspirational quotes about webdesign. When there are new quotes added they will appear in the single page webapp.

