using Microsoft.EntityFrameworkCore;

namespace ExpenseApplication.Models
{
    public class ExpenseApplicationContext:DbContext
    {
        public ExpenseApplicationContext(DbContextOptions<ExpenseApplicationContext> options):base(options)  
        {

        }
        public DbSet<Expense> Expense { get; set; }
        public DbSet<ExpenseForm> ExpenseForm { get; set; }
        public DbSet<Employee> Employee { get; set; }
    }
}
