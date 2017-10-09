using System;

namespace ExpenseApplication.Models
{
    public class Expense
    {
        public int ReceiptNumber { get; set; }

        //TODO Future values should not be accepted
        public DateTime ReceiptDate { get; set; }
        public string ItemDescription { get; set; }
        public decimal Amount { get; set; }
        public decimal ReimbursementAmount { get; set; }
    }
}
