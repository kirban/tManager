module.exports.tasksList = function(req,res) {
    res.render('list-of-tasks', {
        title: 'tManager - лучшее приложение для трегинга задач!',
        pageHeader: {
            title: 'tManager',
            strapline: 'лучшее приложение для трегинга задач!'
        },
        tasks: [{
            header: 'Header1',
            deadline: new Date(2011, 0, 2),
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
            hashtags: ['hashtag1','hashtag2']
        },{
            header: 'Header2',
            deadline: new Date(2012, 0, 5),
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
            hashtags: ['hashtag3','hashtag4']
        },{
            header: 'Header3',
            deadline: new Date(2013, 0, 2),
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
            hashtags: ['hashtag5','hashtag6']
        },{
            header: 'Header4',
            deadline: new Date(2014, 0, 2),
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
            hashtags: ['hashtag7','hashtag8']
        },{
            header: 'Header5',
            deadline: new Date(2011, 0, 2),
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
            hashtags: ['hashtag1','hashtag2']
        },{
            header: 'Header6',
            deadline: new Date(2011, 0, 2),
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
            hashtags: ['hashtag1','hashtag2']
        },{
            header: 'Header7',
            deadline: new Date(2011, 0, 2),
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
            hashtags: ['hashtag1','hashtag2']
        },{
            header: 'Header8',
            deadline: new Date(2011, 0, 2),
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
            hashtags: ['hashtag1','hashtag2']
        }]
    });
};