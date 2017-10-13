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
        public async Task<IActionResult> ExpenseList()
        {
            List<ExpenseProject> ilIst = new List<ExpenseProject>();
            var listData = await (from exp in _context.Expense                
                select new
                {
                    exp.ExpenseId,
                    exp.ReceiptNumber,
                    exp.ReceiptDate,
                    exp.ItemDescription,
                    exp.Amount,
                    exp.ReimbursementAmount
                }
            ).ToListAsync();
            listData.ForEach(x =>
            {
                ExpenseProject Obj = new ExpenseProject();
                Obj.ExpenseId = x.ExpenseId;
                Obj.ReceiptNumber = x.ReceiptNumber;
                Obj.ReceiptDate = x.ReceiptDate;
                Obj.ItemDescription = x.ItemDescription;
                Obj.Amount = x.Amount;
                Obj.ReimbursementAmount = x.ReimbursementAmount;
                ilIst.Add(Obj);
            });

            return Json(ilIst);
        }

        [HttpPost]
        public IActionResult AddExpense([FromBody]Expense expObj)
        {
            _context.Expense.Add(expObj);
            _context.SaveChanges();
            return Json("OK");
        }

        [HttpDelete]
        public IActionResult RemoveExpenseDetails([FromBody]int expenseId)
        {
            Expense Exp;
            Exp = _context.Expense.Where(x => x.ExpenseId == expenseId).First();
            _context.Expense.Remove(Exp);
            _context.SaveChanges();
            return Json("OK");
        }
    }
}