import React from 'react';

export const Form = ({ onSubmit }) => {
  return (
    // <form onSubmit={onSubmit}>
    //   <div className="form-group">
    //     <label htmlFor="name">Name</label>
    //     <input className="form-control" id="name" />
    //   </div>
    //   <div className="form-group">
    //     <label htmlFor="email">Email address</label>
    //     <input
    //       type="email"
    //       className="form-control"
    //       id="email"
    //       placeholder="name@example.com"
    //     />
    //   </div>
    //   <div className="form-group">
    //     <label htmlFor="number">Phone Number</label>
    //     <input className="form-control" id="name" />
    //   </div>
    //   <div className="form-group">
    //     <button className="form-control btn btn-primary" type="submit">
    //       Submit
    //     </button>
    //   </div>
    // </form>
    // <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSchzFbGaKmLvlXhwnweOksy2fmrZTEZVilCJx2APe3LSdBI8Q/viewform?embedded=true" width="100%" height="763" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    // <script async type="text/javascript" src="https://collectcdn.com/embed.js"></script>
<iframe src="https://links.collect.chat/61ffae7fbe19f1762af04eed"  width="100%" height="400" frameBorder="0"></iframe>
  
    );
};
export default Form;

// import { Form, Text } from 'informed'; //https://joepuzzo.github.io/informed/
// import React from 'react';

// const SPREADSHEET_ID = ''; //from the URL of your blank Google Sheet
// const CLIENT_ID = ''; //from https://console.developers.google.com/apis/credentials
// const API_KEY = ''; //https://console.developers.google.com/apis/credentials
// const SCOPE = 'https://www.googleapis.com/auth/spreadsheets';
// var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();
// export default class ContactForm extends React.Component {

//   constructor(props) {
//     super(props);
//     this.onFormSubmit = this.onFormSubmit.bind(this); //to tie the form's callback to this class
//   }

//   componentDidMount(){ //called automatically by React
//     this.handleClientLoad(); 
//   }

//   handleClientLoad =()=> { //initialize the Google API
//     gapi.load('client:auth2', this.initClient);
//   }

//   initClient =()=> { //provide the authentication credentials you set up in the Google developer console
//     gapi.client.init({
//       'apiKey': API_KEY,
//       'clientId': CLIENT_ID,
//       'scope': SCOPE,
//       'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
//     }).then(()=> {
//       gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSignInStatus); //add a function called `updateSignInStatus` if you want to do something once a user is logged in with Google
//       this.updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
//     });
//   }

//   onFormSubmit(submissionValues) {

//     const params = {
//       // The ID of the spreadsheet to update.
//       spreadsheetId: SPREADSHEET_ID, 
//       // The A1 notation of a range to search for a logical table of data.Values will be appended after the last row of the table.
//       range: 'Sheet1', //this is the default spreadsheet name, so unless you've changed it, or are submitting to multiple sheets, you can leave this
//       // How the input data should be interpreted.
//       valueInputOption: 'RAW', //RAW = if no conversion or formatting of submitted data is needed. Otherwise USER_ENTERED
//       // How the input data should be inserted.
//       insertDataOption: 'INSERT_ROWS', //Choose OVERWRITE OR INSERT_ROWS
//     };

//     const valueRangeBody = {
//       'majorDimension': 'ROWS', //log each entry as a new row (vs column)
//       'values': [submissionValues] //convert the object's values to an array
//     };

//     let request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
//     request.then(function (response) {
//       // TODO: Insert desired response behaviour on submission
//       console.log(response.result);
//     }, function (reason) {
//       console.error('error: ' + reason.result.error.message);
//     });
//   }

//   render() {
//     //TODO: add your form fields below that you want to submit to the sheet. This just has a name field
//     return (
//       // <form
//       //   onSubmit={this.onFormSubmit}
//       // >
//       //   <label>
//       //     First name:
//       //     <Text field='name' />
//       //   </label>
//       //   <button type='submit'>
//       //     Submit
//       //   </button>
//       // </form>
//     //   <form onSubmit={this.onSubmit}>
//     //    <div className="form-group">
//     //      <label htmlFor="name">Name</label>
//     //      <input className="form-control" id="name" />
//     //    </div>
//     //    <div className="form-group">
//     //      <label htmlFor="email">Email address</label>
//     //      <input
//     //        type="email"
//     //        className="form-control"
//     //        id="email"
//     //        placeholder="name@example.com"
//     //      />
//     //    </div>
//     //    <div className="form-group">
//     //      <label htmlFor="number">Phone Number</label>
//     //      <input className="form-control" id="name" />
//     //    </div>
//     //    <div className="form-group">
//     //      <button className="form-control btn btn-primary" type="submit">
//     //        Submit
//     //      </button>
//     //    </div>
//     //  </form>
//     <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSchzFbGaKmLvlXhwnweOksy2fmrZTEZVilCJx2APe3LSdBI8Q/viewform?embedded=true" width="640" height="763" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
//     )
//   }
// }
