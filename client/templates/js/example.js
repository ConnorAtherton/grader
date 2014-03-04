Template.example.rendered = function (e, tmpl) {

  var progressData = [{
    "name": "ICTF210",
    "shortCode": "ICTF210",
    "work": {
        "Group CW": {
            "mark": 80,
            "weight": 30
        },
        "Individual CW": {
            "mark": 40,
            "weight": 30
        },
        "Exam": {
            "mark": null,
            "weight": 40
        }
    },
    "overallMark": 52
}, {
    "name": "SCC201",
    "shortCode": "SCC201",
    "work": {
        "Design": {
            "mark": 92,
            "weight": 12
        },
        "Programming": {
            "mark": 92,
            "weight": 28
        },
        "Exam": {
            "mark": 40,
            "weight": 60
        }

    },
    "overallMark": 61
}, {
    "name": "SCC202",
    "shortCode": "SCC202",
    "work": {
        "CW1 Lab Exercise": {
            "mark": 100,
            "weight": 4
        },
        "CW2 Assignment": {
            "mark": null,
            "weight": 36
        },
        "Exam": {
            "mark": 56.7,
            "weight": 60
        }
    },
    "overallMark": 65.4
}, {
    "name": "SCC203",
    "shortCode": "SCC203",
    "work": {
        "Practial 1": {
            "mark": 35,
            "weight": 20
        },
        "Practical 2": {
            "mark": 18,
            "weight": 20
        },
        "Exam": {
            "mark": 77,
            "weight": 60
        }
    },
    "overallMark": 56.8
}, {
    "name": "SCC204",
    "shortCode": "SCC204",
    "work": {
        "CW1": {
            "mark": 67,
            "weight": 30
        },
        "CW2": {
            "mark": 80,
            "weight": 30
        },
        "Exam": {
            "mark": 45.8,
            "weight": 40
        }
    },
    "overallMark": 62.3
}, {
    "name": "SCC205",
    "shortCode": "SCC205",
    "work": {
        "CV": {
            "mark": 67,
            "weight": 20
        },
        "Data Analysis": {
            "mark": 0,
            "weight": 20
        },
        "Essay": {
            "mark": 67,
            "weight": 20
        },
        "Presentation": {
            "mark": 67,
            "weight": 20
        },
        "Scientfic Review": {
            "mark": 63,
            "weight": 20
        }
    },
    "overallMark": 54.7
}, {
    "name": "SCC240",
    "shortCode": "SCC240",
    "work": {
        "D1": {
            "mark": 70,
            "weight": 30
        },
        "D2": {
            "mark": 60,
            "weight": 5
        },
        "D3": {
            "mark": 67,
            "weight": 25
        },
        "D4": {
            "mark": 80,
            "weight": 15
        },
        "D5": {
            "mark": 67,
            "weight": 15
        },
        "iD1": {
            "mark": 67,
            "weight": 5
        },
        "iD3": {
            "mark": 80,
            "weight": 5
        }
    },
    "overallMark": 70.2
}, {
    "name": "SCC241",
    "shortCode": "SCC241",
    "work": {
        "Coursework 1": {
            "mark": 65,
            "weight": 30
        },
        "Coursework 2": {
            "mark": 57,
            "weight": 30
        },
        "Exam": {
            "mark": 54.2,
            "weight": 40
        }
    },
    "overallMark": 58.2
}];

  var progress = new Progress({
    data: progressData,
    exclude: ['pie', 'force'],
    piePlaceholder: null,
    forcePlaceholder: null,
    scatterPlaceholder: document.querySelector('#progressScatter')
  });
};
