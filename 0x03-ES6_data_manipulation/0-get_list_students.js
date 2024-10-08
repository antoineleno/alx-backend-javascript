/**
 * Returns an array of student objects.
 * Each student object contains the following fields:
 * - id: Student ID number.
 * - firstName: Student's first name.
 * - location: Location of the student.
 *
 * @returns {Array} List of student objects.
 */
export default function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}
