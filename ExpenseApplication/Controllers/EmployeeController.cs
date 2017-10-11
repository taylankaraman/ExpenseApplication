using ExpenseApplication.Models;
using ExpenseApplication.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExpenseApplication.Controllers
{
    [Produces("application/json")]
    [Route("api/Employee")]
    public class EmployeeController : Controller
    {
        private readonly ExpenseApplicationContext _context;

        public EmployeeController(ExpenseApplicationContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> EmployeeList()
        {
            List<Employee_Project> ilIst = new List<Employee_Project>();
            var listData = await (from emp in _context.Employee                
                select new
                {
                    emp.Id,
                    emp.Name
                }
            ).ToListAsync();
            listData.ForEach(x =>
            {
                Employee_Project Obj = new Employee_Project();
                Obj.EmployeeId = x.Id;
                Obj.EmployeeName = x.Name;
                ilIst.Add(Obj);
            });

            return Json(ilIst);
        }

        [HttpPost]
        public IActionResult AddEmployee([FromBody]Employee empObj)
        {
            _context.Employee.Add(empObj);
            _context.SaveChanges();
            return Json("OK");
        }
    }
}