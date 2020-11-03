const driver = new Driver();

driver.defineSteps([
    {
        element: '#peopleInClassButton',
        popover: {
            title: 'People in Class',
            description: 'You can click this button to see and edit all the people in the class and a short description for each of them',
        }
    },
    {
        element: '#surveyButton',
        popover: {
            title: 'Survey',
            description: 'Here you can complete a short survey about you experience in 10IST1',
        }
    },
    {
        element: '#schoolLinksContainer',
        popover: {
            title: 'Useful Links',
            description: 'Here are some useful links you can click on the easily get to some websites',
        }
    },
    {
        element: '#aboutSection',
        popover: {
            title: 'About',
            description: 'Here is a short section about the 10IST1 class',
        }
    }
])

window.onload =() => {
    if(!document.cookie.includes("tutorial=false")){
        driver.start();
        document.cookie = "tutorial=false"
    }
};