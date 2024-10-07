/**
 * Function to update student grades by city
 * @param {Array} students - List of student objects
 * @param {String} city - The city to filter students by
 * @param {Array} newGrades - Array of objects with studentId and grade
 * @returns {Array} - Updated list of students with their grades
 */
const updateStudentGradeByCity = (students, city, newGrades) => {
    // Create a mapping of studentId to grade for quick lookup
    const gradeMap = newGrades.reduce((acc, { studentId, grade }) => {
      acc[studentId] = grade;
      return acc;
    }, {});
  
    return students
      .filter(student => student.location === city)
      .map(student => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: gradeMap[student.id] !== undefined ? gradeMap[student.id] : 'N/A'
      }));
  };
  
  export default updateStudentGradeByCity;
  