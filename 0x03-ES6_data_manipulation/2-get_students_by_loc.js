/**
 * Function to get students by location
 * @param {Array} students - List of student objects
 * @param {string} city - City to filter students by
 * @returns {Array} - Filtered array of students in the specified city
 */
const getStudentsByLocation = (students, city) => {
    if (!Array.isArray(students)) {
      return [];
    }
  
    return students.filter(student => student.location === city);
  };
  
  export default getStudentsByLocation;
  