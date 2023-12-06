/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Teacher.ts" />

namespace Subjects {
  export const cpp = Cpp;
  export const java = Java;
  export const react = React;
  export const cTeacher: Teacher = {
    firstName: "Descartes",
    lastName: "Hume",
    experienceTeachingC: 10,
  };

  console.log("Cpp:");
  cpp.setTeacher(cTeacher);
  console.log(cpp.getRequirements());
  console.log(cpp.getAvailableTeacher());

  console.log("\nJava:");
  java.setTeacher(cTeacher);
  console.log(java.getRequirements());
  console.log(java.getAvailableTeacher());

  console.log("\nReact:");
  react.setTeacher(cTeacher);
  console.log(react.getRequirements());
  console.log(react.getAvailableTeacher());
}
