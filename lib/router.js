FlowRouter.route('/', {
    action: (params, queryParams) => {
        BlazeLayout.render('home');
    }
});

FlowRouter.route('/new', {
    action: (params, queryParams) => {
        BlazeLayout.render('home');
    }
});


FlowRouter.route('/:username', {
    action: (params, queryParams) => {
        BlazeLayout.render('blog');
    }
});

FlowRouter.route('/:username/:post', {
    action: (params, queryParams) => {
        BlazeLayout.render('post');
    }
});
