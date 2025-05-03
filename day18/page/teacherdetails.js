<!DOCTYPE html>
<html>
<head>
  <title>All Teachers</title>
<script>
async function deleteTeacher(teacher) {
      if (teacher) {
        try {
teacher..deleteOne({ age: { $gte: 10 } }).then(function(){
    console.log(&quot;Data deleted&quot;); // Success
}).catch(function(error){
    console.log(error); // Failure
});

          const response = await fetch(`/teachers/delete/${id}`, {
            method: 'DELETE'
          });
          const result = await response.json();
          if (result.message === 'Teacher deleted successfully') {
            alert('Deleted successfully');
            location.reload(); // Reload the page to update the list
          } else {
            alert('Deletion failed');
          }
        } catch (error) {
          alert('Error deleting teacher');
          console.error(error);
        }
      }
    }
  </script>
</head>
<body>
  <h1>Teacher List</h1>
  <table>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Salary</th>
      <th>Marital Status</th>
      <th>Action</th>
    </tr>
    <% teachers.forEach(teacher => { %>
      <tr>
        <td><%= teacher.name %></td>
        <td><%= teacher.age %></td>
        <td><%= teacher.salary %></td>
        <td><%= teacher.maritalStatus %></td>
        <td>
          
              <button onclick="deleteTeacher('<%= teacher%>')">Delete</button>
       
          
        </td>
      </tr>
    <% }); %>
  </table>
</body>
</html>
