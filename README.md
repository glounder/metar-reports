# metar-reports

This is a sample project to solve a problem parsing METAR report strings.

## Project Setup
To setup the project, just run the following command to install all the dependancies.

```
npm install
```

### Run Project
To run the project, run the command below.  Once it is done, you can view the UI by visiting http://127.0.0.1:8080.
```
npm run serve
```

## Using the UI
Once the UI is loaded, there are a couple of actions.  The METAR report simulator will produce reports for ~20 airports every 10 minutes.  The actions below will produce records from the simulator.

- `Poll` when enabled, the page will poll the simulator every 5 seconds and fetch an hour of reports.
- `Next Hour` will load reports for the next hour.
- `Next 24 Hours` will load reports for the next 24 hours.
- `Next 31 Days` will load reports for the next 31 days.  This will load over 100,000 records.
