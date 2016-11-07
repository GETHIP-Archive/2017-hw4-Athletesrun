FlowRouter.route('/', {
    action: (params, queryParams) => {
        BlazeLayout.render('home');
    }
});

FlowRouter.route('/signup', {
    action: (params, queryParams) => {
        BlazeLayout.render('signup');
    }
});

FlowRouter.route('/login', {
    action: (params, queryParams) => {
        BlazeLayout.render('login');
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
