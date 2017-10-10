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
    [Route("api/Expense")]
    public class ExpenseController : Controller
    {
        private readonly ExpenseApplicationContext _context;

        public ExpenseController(ExpenseApplicationContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<IActionResult> EmployeeList()
        {
            List<Expense_Project> ilIst = new List<Expense_Project>();
            var listData = await (from emp in _context.Employee                
                select new
                {
                    emp.Id,
                    emp.Name
                }
            ).ToListAsync();
            listData.ForEach(x =>
            {
                Expense_Project Obj = new Expense_Project();
                Obj.EmployeeId = x.Id;
                Obj.EmployeeName = x.Name;
                ilIst.Add(Obj);
            });

            return Json(ilIst);
        }
    }
}