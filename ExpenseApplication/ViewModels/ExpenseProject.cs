using System;

namespace ExpenseApplication.ViewModels
{
    public class ExpenseProject
    {
        public int ExpenseId { get; set; }
        public int ReceiptNumber { get; set; }
        public DateTime ReceiptDate { get; set; }
        public string ItemDescription { get; set; }
        public decimal Amount { get; set; }
        public decimal ReimbursementAmount { get; set; }
    }
}
