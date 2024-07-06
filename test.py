import json

import requests

URL = "https://stapi.co/api/v1/rest/animal?name=Spider"
resp = requests.get(url=URL)

"""Eslint is set up, when lint command is run it doesn't produce any errors (if there are warnings score might be less) - 15/15 points
Prettier is set up, format:fix command fixes issues - 15/15 points
Husky is set up, linting is run on pre-commit - 10/10 points
Page is split into 2 sections, top one has Search input and "Search" button, main section displays the list of results from the selected api when page is opened for the first time (loader should be shown while app makes a call to the api) - 20/20 points
When user types something to the Search input and clicks "Search" button, a loader is displayed and the list is changed according to the response results for a provided search term - 15 points !!!!!!
The search term typed into the Search input is saved in the LS when user clicks on "Search" button (check it by closing the tab and open the app in the new one - the initial call should contain previously entered search term) - 15/15 points
Application is wrapped with ErrorBoundary, which logs error to a console and shows a fallback UI. There should be a button to throw an error - 10 points""" !!!!!!!

'''
1. Task: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/fancy-weather.md
2. Screenshot:
   ![](https://docs.app.rs.school/images/fancy-weather.png)
3. Deployment: https://chakapega-fancy-weather.netlify.com/
4. Done 28.05.2020 / deadline 31.05.2020
5. Score: 220 / 300
- Markup, design, UI (15/30)
  - [x] minimum page width at which it is displayed correctly – 320 рх (10)
  - [±] application's appearancecorresponds to the layout and/or its improved version (5/10)
  - [ ] aaplication works and looks correctly with any language (0)
- Section "Today's weather" displays the following data (15/20)
  - [x] use weather data and location (10)
  - [±] clock, refreshed each second (5/10)
'''