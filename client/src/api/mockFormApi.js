// import delay from './delay';

const formInput = [
  {
    "label": "Full Name",
    "description": "with expanded initials",
    "required": "required",
    "type": "text"
  },
  {
    "label": "Nationality",
    "description": "Choose an option from the list",
    "required": "required",
    "type": "select",
    "options": ["India", "America", "China", "Canada", "Australia"]
  },
  {
    "label": "Previous Company",
    "description": "Last company you worked in",
    "required": "",
    "type": "text"
  },
  {
    "label": "Phone Number",
    "description": "Phone number to get activity notification",
    "required": "required",
    "type": "number"
  },
  {
    "label": "Email",
    "description": "Professional Email",
    "required": "required",
    "type": "email"
  },
  {
    "label": "Password",
    "description": "Password must be minimum 8 'characters' with atleast a special character",
    "required": "required",
    "type": "password"
  },
  {
    "label": "Gender",
    "description": "Choose one from below",
    "required": "required",
    "type": "radio",
    "options":[
      {
        "label": "Male",
        "value": "male"
      },
      {
        "label": "Female",
        "value": "female"
      },
      {
        "label": "None",
        "value": "none"
      }
    ]
  },
  {
    "label": "Preferred Work Timings",
    "description": "Choose one from below",
    "required": "",
    "type": "checkbox",
    "options":[
      {
        "label": "9 AM - 5 PM",
        "value": "9_17"
      },
      {
        "label": "12 PM - 8 PM",
        "value": "12_20"
      },
      {
        "label": "9 PM - 5 AM",
        "value": "21_5"
      }
    ]
  },
  {
    "label": "Address",
    "description": "Just for the sake",
    "required": "",
    "type": "textarea"
  }
];

class FormApi {
  static getFormInputs() {
    return new Promise((resolve, reject) => {
      // setTimeout(() => {
        if (formInput.length < 1) {
          reject(`Error`);
        }
        resolve(Object.assign([], formInput));
      // }, delay);
    });
  }

  // static saveCourse(course) {
  //   course = Object.assign({}, course); // to avoid manipulating object passed in.
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       // Simulate server-side validation
  //       const minCourseTitleLength = 1;
  //       if (course.title.length < minCourseTitleLength) {
  //         reject(`Title must be at least ${minCourseTitleLength} characters.`);
  //       }
  //
  //       if (course.id) {
  //         const existingCourseIndex = courses.findIndex(a => a.id == course.id);
  //         courses.splice(existingCourseIndex, 1, course);
  //       } else {
  //         //Just simulating creation here.
  //         //The server would generate ids and watchHref's for new courses in a real app.
  //         //Cloning so copy returned is passed by value rather than by reference.
  //         course.id = generateId(course);
  //         course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
  //         courses.push(course);
  //       }
  //
  //       resolve(course);
  //     }, delay);
  //   });
  // }
}

export default FormApi;
