class Employee
{
    private empId : number;
    private name : string;
    private salary : number;
    constructor(empId,name,salary)
    {
        this.empId = empId;
        this.name = name;
        this.salary = salary;
    }
    displayEmpInfo()
    {
        console.log(`${this.empId} ${this.name} ${this.salary}`);
    }
}

class Manager extends Employee
{
    project:string;
    constructor(empId,name,salary,project)
    {
        super(empId,name,salary);
        this.project=project;
    }
    displayEmpInfo()
    {
        super.displayEmpInfo();
        console.log(`${this.project}`);
    }
}

let manager:Manager = new Manager(101,"Shyam",100000,"Tech");
manager.displayEmpInfo();
// let emp:Employee = new Employee(101,"Shyam",100000);
// emp.displayEmpInfo()