function appViewModel() {
    function wrapInRows() {
        var allRows = [];
        var row;
        self.projects.forEach(function (project, i) {
            if (i % self.cols === 0) {
                if (row) {
                    allRows.push(row);
                }
                row = {};
                row.content = [];
            }
            row.content.push(project);
        });

        if (row) {
            allRows.push(row);
        }

        return allRows;
    }

    self.cols = 2;

    self.colName = (function () {
        return 'col-md-' + 12 / self.cols;
    })();

    self.projects = [
        {
            name: 'My Arcade Game',
            url: 'http://rasakos.github.io/Udacity-PROJECT-Classic-Arcade-Game-Clone/',
            github: 'https://github.com/rasakos/Udacity-PROJECT-Classic-Arcade-Game-Clone',
            image: 'images/myfrogger2.jpg',
            description: "This was the third project in Udacity's Front-End Web Developer Nanodegree.  " +
            "The purpose of this project was to gain experience with object-oriented programming.  " +
            "I hope you have as much fun playing it as I had making it!",
            date: 'June 2015'
        },
        {
            name: 'My Resume',
            url: 'http://rasakos.github.io/Udacity-PROJECT-Interactive-Resume/',
            github: '',
            image: 'images/myresume2.jpeg',
            description: "This was the second project in Udacity's Front-End Web Developer Nanodegree.  " +
                "The purpose of this project was to practice basic JavaScript skills such as loops, functions " +
                "and DOM manipulation!",
            date: 'May 2015'
        }
        
    ];

    self.projects.forEach(function (project, i) {
        project.id = 'project' + i;
        project.idWithHash = '#' + project.id;
    });

    self.projectsInRows = wrapInRows();

    self.chosenProject = ko.observable();

    self.goToProject = function (project) {
        self.chosenProject(project);
    };
}

ko.applyBindings(new appViewModel());
