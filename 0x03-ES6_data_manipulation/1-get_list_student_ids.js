/**
 * Returns an array of student IDs from a list of student objects.
 * If the input is not an array, it returns an empty array.
 *
 * @param {Array} students - The array of student objects.
 * Each student object should contain an `id` field.
 * @returns {Array} List of student IDs.
 */
export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map((student) => student.id);
}
