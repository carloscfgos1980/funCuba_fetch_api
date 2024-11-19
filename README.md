## Fun Cuba (client)

website:
https://fun-cuba.vercel.app

# 9/09/2024

# 1. Create the app:

npx create-react-app my-app --template typescript

# 2. Install redux

npm install @reduxjs/toolkit react-redux

# 3. Optimize pics

https://tinypng.com

# 4. Install components for CSS

npm install --save bootstrap
npm i react-router-dom

- Latelly I unistall reactstrap coz the model component was giving a warning of decapricating feature in te new future

# 5. Install prettier (convert into clean code for deploying in github)

5.1 Install package
npm install --save-dev --save-exact prettier
5.2 Run this command in CLI:
npm install --save-dev husky lint-staged
npx husky init
node --eval "fs.writeFileSync('.husky/pre-commit','npx lint-staged\n')"
5.3 In package.json, right after "eslintConfig" script:
{
"lint-staged": {
"\*_/_": "prettier --write --ignore-unknown"
}
}

# 8. React Router

https://www.youtube.com/watch?v=OMQ2QARHPo0&list=PL4cUxeGkcC9iVKmtNuCeIswnQ97in2GGf

8.1 install npm package:
npm i react-router-dom

8.2 App.tsx => Implemente React Routes
const router = createBrowserRouter(
createRoutesFromElements(
.....
)
)

return (

<div className="App">
<RouterProvider router={router}/>
</div>
);

8.2 HunNav.tsx => Routes in the NavBar
import {NavLink} from 'react-router-dom';

        return (
            <nav className='mt-5 mb-2'>
                <NavLink to='/'>
                    <span>Home</span>
                </NavLink>
                ...
        )

# 9. Work in the horizontal align (justify) and vertical (align) with containers and flex-box in order to prepare the Header and the Footer. This part is ready

# 10. Import a image. That took me a lof of time to figure it out!

    <img src={`${process.env.PUBLIC_URL}/dos_mares1.jpg`}
    alt="dos mares" />

- The pics most be "public" directory

# 11. json server to mock database. Root of the app, create "data/de.json"

    run in a different terminal:
    npx json-server --watch data/db.json --port 8000

# 16/09/2024

# 12. Implement carousel

    12.1 Install carousel npm package. This is was easier than using bootstrap components
    npm i better-react-carousel

# 13. Create a folder (ContentText) that contains all the files with the text data:

- airData.ts
- citiesData.ts
- pagesContent.ts
- chillingData.ts

# 17/09/2024

uffff bunch of stuff I have tried! I git airB page ready:
AirB serves:
Cuba component
Form. This loop over cityData
Model
Div:
~ description city
~ carousel airBnb of selected city

- Model shows up when I click in a AirBnB
  Model has another carousel with the pics of the selected airBnB

when media query small, there are not arrow to wipe the images so I placed a message for this query (cellphone) to inform people they neeed to wipe the images

- Took me many hours to figure it out where was the bug. It is was "homepage" script in package json for the github pages. I deleteed this line and everything works perfectly!

18/09/2024

# 14. ChillOut page

14.1 Render Cuba component and pass the data to fit ChillOut page

14.2 Render FormSelect and pass:
getCityId={getCityId}
items={citiesData}

14.3 Render FormChill and pass:
getCityId={getChillId} items={selectedChillxCity}

14.4 Render Selected chill activity's name, description, image

- This part was easy, I reuse most of the functions from AirB

# 19/09/2024 - 24/09/2024

# 15. PlanTrip

It has 4 main components:

1. calandar to select days for the whole trip
2. form to select the city
3. form to select days of the destination, taxi, AirBnB, ChillOut.

- Yet AirBnB and ChillOut form to complete

4. Display the data (also to be done)

I started to use but gave a bug so I changed to
import { memo } from "react";

I took a lof of time coz I need to implement the store, change everything from "hooks" to redux. It was too messy with hooks, to many states to handle

# 25/09/2024 - 7/10/2024

# Plan Trip.

I have build this section, at least 3 times! I did't have a clear idea what to do. I started with hooks but the coding was too messy so i switched to redux... now it looks a lot better

tripPlan.tsx:
Sections:

1. trip-introduction: Explanation about this section
2. trip-calendar: calendar form and a table showing the values( tripDateStart, tripDateEnd, totalDays, RemainedDays)
3. destionations: table with route data( Route, arrive, departure, days)
4. get-city: form to select the city and button to start planning the route (this display the form)
5. form: {
   5.1 route-date: calendar form and the amount of days
   5.2 add-taxi: check box to add taxi
   5.3 add-airB (import AddAirB component)
   5.4 add-chill (import AddChilling component)
   }
6. button (Add route)

filteredTripPlan.ts

1. typres (AirBnB, ChillOut, StartTrip, Route, Trip, PlanTripState, AddAirBnB). This type I added according to my needs. I export them in case that I need them in a component
2. Create the initial state (initialState: PlanTripState)
3. Function to calculate diference in days: calculateDays()
4. Function to get the previos location so I can calculate taxi's price: previousLocation()
5. reducers;{
   5.1 addStartTrip
   5.2 addTripEnd
   5.3 addStartRoute
   5.4 addTaxiPrice
   5.5 addAirBnB
   5.6 deleteAirBnB
   5.7 addChillOut
   5.8 deleteChill
   5.9 addRoute
   }

**Note:**

1. I use .toDateString(); method to display date, its a more firendleyed format
2. Re render this page so the forms go back to default setting:
   const [key, setKey] = useState(0)
   const getRoute = () => {
   dispatch(addRoute());
   setDisplay1("none");
   setKey(currentKey => currentKey + 1)
   }

   return(
   <div key={key}...>
   )

3. I use a React component for the date:

import { memo } from "react";

const DatePicker = memo(({ selectedDate, onDateChange }: any) => {
return <input type="date" value={selectedDate} onChange={onDateChange} />;
});

return(
<DatePicker selectedDate={dateStart} onDateChange={getDateStart}
)

# 9/10/2024

# TripPlan

I place the table in a separate components, it looks cleaner and also I plan to re use in the modal for the trip info

https://mui.com/material-ui/getting-started/installation/

package.json:
"peerDependencies": {
"react": "^17.0.0 || ^18.0.0",
"react-dom": "^17.0.0 || ^18.0.0"
},
terminal:
npm install @mui/material @emotion/react @emotion/styled

I applied this model coz the model component from reactstrap was giving me a warning. I need to move the ModelFun to this sort of model as well

# 9/10/2024

1. I create 3 tables to display information in TripPlan and in ModalTrip:
   TableGeneral, TableAir, TableChill

2. TripPlan.tsx. Crate a useHook variable to edit and pass it down to TableAir, TableChill so when I use this table in edit, it won't display delete (X) button

# 14/10/2024

Nice rest in the weekend. Got up early and create the form for the client personal data

1. filteredTripPlan.ts:

   1.1 Create the type:
   export type Client = {
   name: string;
   lastName: string;
   country: string;
   email: string;
   }

   1.2 Initial state update:
   trip: {
   ...
   clientData: {
   name: '',
   lastName: '',
   country: '',
   email: '',
   },
   ...
   },

1.3 reducer:
addClient: (state, action: PayloadAction<Client>) => {
state.trip.clientData = action.payload;
},

2. Create component for this form (FormClient.tsx)

2.1 Create a hook with a variable as a object
const [status, setStatus] = useState<Client>({
name: '',
lastName: '',
country: '',
email: '',
});

2.2 Create a function that will capture the value of the forms
const updateInput = (e:any) => {
setStatus({
...status,
[e.target.name]: e.target.value
})
}

2.3 Create an object that I will dispatch to the store

    const clientData = {
        name: status.name,
        lastName: status.lastName,
        country: status.country,
        email: status.email

    }

2.4 Form from Bootstrap (lin 35-55). Here I place the onChange eventlistener in every input in order to catch the values

2.5 Create the function to dispatch value
const addingClient = () => {
dispatch(addClient(clientData));
}

2.6 Button to fire the dispatch function

<div className="text-end mt-3 me-4">
<h3 className="btn btn-secundary px-5 bg-dark text-light"
                    onClick={addingClient} 
                    >
Submit
</h3>
</div>

3. Post Trip.

- This was easy, what took me a lot of time was to debug the review route. It is working now. I had to create another file .json so O could post in trips endpoint:
  http://localhost:9000/trips

CLI:
npx json-server --watch data/tripDB.json --port 9000

Now the reviews are:
http://localhost:8000/reviews
npx json-server --watch data/db.json --port 8000

the summit button for the data is at the end of ModelTrip

# 15/10/2024

**Feedback section**
This part was kinda smooth. I only was stuck when I call the async function to post the feedback, React was acting weird in FeedField.tesx component. I got a type error: it doesn't not allowed me to place an argument when I called the function is is very weird coz I made an experiement and I called a function that it was working in a different component and I got the same error. I solved by moving the dispatch to the root page (Feedback.tsx)

Feedback.tsx contains is mostly forms. Some I placed in this root page and another place in FeedField component.

FeedsField.tsx. I rendered the elements with a condiction based in the select type of feedback (airBnB, chill out or Fun Cuba which is more general)

the post function of review is place in the store (filteredreviews.ts)

# 16/10/2024

**Home Page**
This part was fairly easy. I just need to implement tooltip from material UI and create a new Modal (ModalTipsCuba) in order to place the tips and not make the page too long

# 22/10/2024

- Working on the content.
- I delete the city propoerty from citiesData and renmae "id" with the value of "city". I need to make the adjustment in AirB.tsx as well.
- I also delete component FormSelect. I don't need it anymore since I only use FormSelectItem

**pending**
airId={airIddd}
this is a fix value I have for the reviews until I fell the reviews... tomorrow...

- Actually I fixed today. I had to create a conditional rendereing for the reviews so I won't get an error when the reviews are not there

- I fix Cuba component, now the image is inside <p> so I can float it to the right and I don't need to worry about the paraph

# 5/11/2024

- I implemented fetch the reviews from funCua-api. I had a buf cuz the fake api and the real one were using the same port (8000)

- The reviews are set as a carousel now instead of displaying just 3 feeds

# 13/11/2024

- New component: FormSelectCountry. So the form will display the list of countries.

# 19/11/2024

src/layout/Pages/TripPlan.tsx
I created warning for wrong dates

src/components/FormClient.tsx
addingClient function. I added checked for name, last name, country and email

**to do**
create check for review form
change input field for the countries in Feedbacks.tsx
add modal in Feedbacks to let know the used all went ok
