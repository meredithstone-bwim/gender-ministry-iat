define(['pipAPI','https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/iat10.js'], function(APIConstructor, iatExtension){
    let API = new APIConstructor();
    let global = API.getGlobal();

    return iatExtension({
        category1 : {
            name : 'Male', //Will appear in the data.
            title : {
                media : {word : 'Male'}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: 'John'},
                {word: 'David'},
                {word: 'James'},
                {word: 'Matthew'},
                {word: 'William'},                 
                {word: 'Andrew'},
                {word: 'Richard'},
                {word: 'Michael'}
            ],
            //Stimulus css (style)
            stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },    
        category2 : {
            name : 'Female', //Will appear in the data.
            title : {
                media : {word : 'Female'}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: 'Carolyn'},
                {word: 'Nancy'},
                {word: 'Karen'},
                {word: 'Sarah'},
                {word: 'Lisa'},
                {word: 'Emily'},
                {word: 'Cheryl'},
                {word: 'Amanda'}
            ],
            //Stimulus css (style)
            stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },
        attribute1 : {
            name : 'Ministry',
            title : {
                media : {word : 'Ministry'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: 'Pastor'},
                {word: 'Church'},
                {word: 'Pulpit'},
                {word: 'Congregation'},
                {word: 'Ministry'},
                {word: 'Preaching'},
                {word: 'Faith Leader'}
            ],
            //Stimulus css
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
        },
        attribute2 : {
            name : 'Family',
            title : {
                media : {word : 'Family'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: 'Parent'},
                {word: 'Family'},
                {word: 'Home'},
                {word: 'Children'},
                {word: 'Household'},
                {word: 'Marriage'},
                {word: 'Spouse'}
            ],
            //Stimulus css
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
        },
        base_url : {//Where are your images at?
            image : global.baseURL
        },
        isTouch : global.$isTouch
    });
});

