import React from 'react';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const testEpisode = {
    id: 1,
    name: "",
    image: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
    season: 1,
    number: 1,
    summary: "React testing is hard...",
    runtime: 1
}

// p - episode

const testEpisodeWithoutImage = {
}

test("renders without error", () => {
    render(<Episode episode={testEpisode} />);
    // console.log(<Episode episode={testEpisode} />)
});


// Need 3 different ways to test that the custom summary   
test("renders the summury test passed as prop", () => {
    render(<Episode episode={testEpisode} />);
    // console.log(<Episode episode={testEpisode} />)
    const item = screen.getByText(/react testing is hard/i)
    screen.debug(); //  Shows all elements. 
    expect(item).toBeInTheDocument();

});

// test("renders default image when image is not defined", ()=>{

// })




//                         Tasks
//  1 DONE
//   Complete a test that shows the Episode component renders. 
//   Pass in the provided example episode data as a test prop.

//  2
//   [x] Modify the test data to display a specific summary statement. 
//   [x] Complete a test that shows that the summary value passed in 
//   to the Episode component displays as expected. 
//   [] Use 3 different expect statements to test the the existance of the summary value.

//  3
//   The episode component displays a default value ('./stranger_things.png')
//   when a image url is not provided. Create a new piece of test data with the 
//   image property set to null. Test that the alt tag of the image displayed is 
//   set to './stranger_things.png'.



// _______________ NOTES BELOW FROM WARM UP ____________________




// import React from "react";
// import { screen, render, fireEvent } from "@testing-library/react";
// import MissionForm from "./MissionForm";
// import userEvent from '@testing-library/react'


// // Sanity test
// test('MissionForm renders correctly', () => {
//     render(<MissionForm />)
// })


// // Does the component render correctly when isFetching is true?
// test('renders fetchingData message when it is true', () => {

//     // Arrange: *****like a mock****** show MissionForm with prop isFetchingData = true
//     render(<MissionForm isFetchingData={true} />)

//     // Act: Grab text
//     const item = screen.getByText(/we are fetching data/i)
//     console.log(item)

//     // Assert: 'we are fetching data' exists on the page.
//     expect(item).not.toBeNull()
//     expect(item).toBeInTheDocument()

// })


// // Does the component render correctly when isFetching is false?
// test('renders fetchingData message when it is false', () => {

//     // Arrange: ***like a mock*** show MissionForm with prop isFetchingData = false
//     render(<MissionForm isFetchingData={false} />)

//     // Act:
//     const item = screen.queryByText(/we are fetching data/i) //  NOT GET. Get throws error !!!

//     // Assert:
//     expect(item).not.toBeInTheDocument()

// })






// // When we have a piece of user input (CLICK), does getData get called?

// test('calls getData when button is clicked', () => {

//         const fakeGetData = jest.fn(() => {
//             return "this is the return data"
//         })


//         // Arrange: ***like a mock*** show MissionForm with prop isFetchingData = false
//         render(<MissionForm isFetchingData={false} getData={() => fakeGetData('fake arg')}/>)

//         // Act:
//         const item = screen.queryByRole('button')
//         userEvent.click(button)

//         // Assert:
//         console.log(fakeGetData.mock)
//         expect(fakeGetData.mock.calls).toHaveLength(2)
// })


// {/* // _______________________ */}






// import React from 'react'
// import { render. screen } from '@testing-library/user-event'

// test('App renders without error', () => {
//     render(<App />)
// })


// it('renders mussion data when button is clicked', async () => {
//     // arrange: render app
//     render(<App />)
//     // act: get data from api? Click buttton
//     const button = screen.queryByRole('button')
//     // assert: we should be getting the same amount of data from the api
// })