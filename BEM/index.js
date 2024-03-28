(async function () {
    const data = await fetch('./data.json');
    const res =await data.json()
    let employees = res;
    console.log(res);

    let selectedEmployeeId = employees[0].id
    let selectedEmployee = employees[0]
    let employeeList = document.querySelector('.employees_name--list')
    let employeeInfo = document.querySelector('.employees_name--info')
   

    const createEmployeebtn = document.querySelector('.createEmployee')
    const EmpModal = document.querySelector('.addEmployee')
    const empForm = document.querySelector('.form')

 createEmployeebtn.addEventListener('click',(e)=>{
    EmpModal.style.display = "flex"
 })
 EmpModal.addEventListener('click',(e)=>{
    if(e.target.className === "addEmployee"){
        EmpModal.style.display = "none"
    }
 })
 const dobInput = document.querySelector(".addEmployee_create--dob");
 dobInput.max = `${new Date().getFullYear() - 18}-${new Date().toISOString().slice(5, 10)}` 
 empForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const formData = new FormData(empForm);
    const values = [...formData.entries()];
    console.log(values);
    let empData = {};
    values.forEach((val) => {
      empData[val[0]] = val[1];
    });
    empData.id = employees[employees.length - 1].id + 1;
    empData.age =
      new Date().getFullYear() - parseInt(empData.dob.slice(0, 4), 10);
    empData.imageUrl =
      empData.imageUrl || "https://cdn-icons-png.flaticon.com/512/0/93.png";
    employees.push(empData);
    renderEmployee();
    empForm.reset();
    EmpModal.style.display = "none";
  });

    employeeList.addEventListener("click", (e) => {
        // Select Employee Logic - START
        if (e.target.tagName === "SPAN" && selectedEmployeeId!== e.target.id) {
          selectedEmployeeId = e.target.id;
          renderEmployee();
          Rendersingleemployee();
        }
        if (e.target.className === "delete") {
            employees = employees.filter(
              (emp) => String(emp.id) !== e.target.parentNode.id
            );
            if (String(selectedEmployeeId) === e.target.parentNode.id) {
              selectedEmployeeId = employees[0]?.id || -1;
              selectedEmployee = employees[0] || {};
              Rendersingleemployee();
            }
            renderEmployee();
          }
  })



   const renderEmployee = () =>{
    employeeList.innerHTML= '';
    employees.forEach((emp)=>{
        const employee =  document.createElement('span')
        employee.classList.add('employees__name--items')
        if(parseInt(selectedEmployeeId,10)===emp.id){
            employee.classList.add('selected')
            selectedEmployee = emp
        }
        employee.setAttribute("id",emp.id)
        employee.innerHTML = `${emp.firstName} ${emp.lastName}
        <span class="delete">X</span>
        `
        employeeList.append(employee)
    
    })
   }

    
   const Rendersingleemployee = ()=>{
   
    if (selectedEmployeeId === -1) {
        employeeInfo.innerHTML = "";
        return;
      }

   employeeInfo.innerHTML = `<img src="${selectedEmployee.imageUrl}" />
   <span class="employees__single--heading">
   ${selectedEmployee.firstName} ${selectedEmployee.lastName} (${selectedEmployee.age})
   </span>
   <span>${selectedEmployee.address}</span>
   <span>${selectedEmployee.email}</span>
   <span>Mobile - ${selectedEmployee.contactNumber}</span>
   <span>DOB - ${selectedEmployee.dob}</span>`;
};
// Render Single Employee Logic - END

renderEmployee();
if (selectedEmployee) Rendersingleemployee();

  })();
  